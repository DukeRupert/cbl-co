<script lang="ts">
	import { SITE_DATA } from '$lib/global';
	import { CldImage } from 'svelte-cloudinary';
	import { Button } from '$lib/components/ui/button/index.js';
	import { mode } from 'mode-watcher';

	let date = new Date();
</script>

<footer aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="h-12 max-w-[120px]">
					<CldImage
						src={$mode === 'dark'
							? 'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110607/cbl-co/cbl-header-dark_yol2l1.png'
							: 'https://res.cloudinary.com/rr-wholesale/image/upload/v1711110608/cbl-co/cbl-header-light_iemzck.png'}
						alt={SITE_DATA.name + ' logo'}
						class="h-full w-auto max-h-12 object-cover object-center"
						width="860"
						height="330"
						sizes={`(min-width: 640px) 20vw,
										50vw`}
					/>
				</div>
				<p class="text-sm leading-6 text-gray-600 dark:text-gray-400">
					Dedicated to rehabilitating aging pipelines for municipalities and cities since 2007.
				</p>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6">Navigation</h3>
						{#if SITE_DATA.routes}
							<ul role="list" class="mt-6 space-y-4">
								<li>
									<Button href="/" variant="link" class="text-sm capitalize">home</Button>
								</li>
								{#each SITE_DATA.routes as { id, url }}
									<li>
										<Button href={url} variant="link" class="text-sm capitalize">{id}</Button>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
					<div>
						<h3 class="text-sm font-semibold leading-6">Contact us</h3>

						<ul role="list" class="mt-6 space-y-4">
							<li>
								<Button href={'tel:' + SITE_DATA.phone.tel} variant="link" class="text-sm"
									>{SITE_DATA.phone.pretty}</Button
								>
							</li>
							<li>
								<Button href={'mailto:' + SITE_DATA.email} variant="link" class="text-sm"
									>{SITE_DATA.email}</Button
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-muted-foreground">
				&copy; {date.getFullYear()}
				{SITE_DATA.name}, All rights reserved.
			</p>
		</div>
	</div>
</footer>
