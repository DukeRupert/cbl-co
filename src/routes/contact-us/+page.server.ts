import type { Actions } from './$types';
import postmarkClient from '$lib/postmarkClient';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

const schema = z.object({
	first: z.string().max(50),
	last: z.string().max(50),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().max(5000)
});

export const load = async ({ url }) => {
	const { pathname } = url;

	const parameters = {
		pathname
	};

	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// Send form to client
		try {
			const parameters = {
				TemplateId: 33419422,
				TemplateModel: form.data,
				From: 'logan@fireflysoftware.dev',
				To: '406chante@gmail.com',
				MessageStream: 'outbound',
				TrackOpens: true
			};

			const result = await postmarkClient.sendEmailWithTemplate(parameters);

			// success
			// if (result.ErrorCode == 0) {
			// 	const source = {
			// 		company_name: 'Grit & Grace Bakery',
			// 		sender_name: "Chante'",
			// 		support_email: 'info@ebonyandivory.love'
			// 	};

			// 	const welcome = Object.assign(form.data, source);

			// 	// Send form to customer
			// 	try {
			// 		const parameters = {
			// 			TemplateId: 32892911,
			// 			TemplateModel: welcome,
			// 			From: 'info@ebonyandivory.love',
			// 			To: form.data.email,
			// 			MessageStream: 'outbound',
			// 			TrackOpens: true
			// 		};

			// 		const result = await postmarkClient.sendEmailWithTemplate(parameters);

			// 		// success
			// 		if (result.ErrorCode == 0) return { form };

			// 		// uh oh
			// 		return fail(400, { form });
			// 	} catch (error) {
			// 		await postmarkClient.sendEmail({
			// 			From: 'logan@fireflysoftware.dev',
			// 			To: 'logan@fireflysoftware.dev',

			// 			Subject: 'ebonyandivory.love customer response error',
			// 			TextBody: JSON.stringify(error)
			// 		});
			// 	}
			// }

			// uh oh
			return fail(400, { form });
		} catch (error) {
			await postmarkClient.sendEmail({
				From: 'logan@fireflysoftware.dev',
				To: 'logan@fireflysoftware.dev',

				Subject: 'ebonyandivory.love',
				TextBody: JSON.stringify(error)
			});
		}

		// Yep, return { form } here too
		return { form };
	}
};
