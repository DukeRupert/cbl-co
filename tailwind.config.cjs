import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				safetyGreen: {
					DEFAULT: '#DEF633',
					50: '#FAFEE3',
					100: '#F7FDCF',
					200: '#F1FBA8',
					300: '#EBF981',
					400: '#E4F85A',
					500: '#DEF633',
					600: '#CCE70A',
					700: '#9CB108',
					800: '#6D7B05',
					900: '#3D4603',
					950: '#262B02'
				},
				tango: {
					DEFAULT: '#EA6314',
					50: '#F9D3BC',
					100: '#F8C6AA',
					200: '#F4AD84',
					300: '#F1945F',
					400: '#EE7B39',
					500: '#EA6314',
					600: '#B64D10',
					700: '#82370B',
					800: '#4F2107',
					900: '#1B0B02',
					950: '#010100'
				}
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
