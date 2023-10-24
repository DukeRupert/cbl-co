<script lang="ts">
	import { quadOut, quadIn } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';
	import type { FadeParams, FlyParams } from 'svelte/transition';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';
	import Logo from './components/Logo.svelte';

	export let is_open = false;

	function open() {
		is_open = true;
	}

	function close() {
		is_open = false;
	}

	const fly_params: FlyParams = {
		x: 100,
		duration: 150,
		easing: quadOut,
		opacity: 0
	};

	const fade_params: FadeParams = {
		duration: 150,
		easing: quadOut
	};

	const links = [
		{ label: 'Contact Us', href: '/contact-us' },
		{ label: 'What is CIPP?', href: '/what-is-cipp' }
	];
</script>

<nav class="flex items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
	<div class="flex items-center gap-x-12">
		<a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Grit & Grace Bakery</span>
			<img
				class="h-16 w-auto"
				src="https://n5qf30.p3cdn1.secureserver.net/wp-content/uploads/2017/03/cropped-cbl-header.png"
				alt="christian brother's lining company logo"
			/>
		</a>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each links as { label, href }, i}
				<a {href} class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{label}</a>
			{/each}
		</div>
	</div>
	<div class="flex">
		<LightSwitch />
	</div>
	<div class="flex lg:hidden">
		<button
			on:click={open}
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
</nav>

<!-- Mobile menu, show/hide based on menu open state. -->
{#if is_open}
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div transition:fade={fade_params} class="fixed inset-0 z-50 bg-gray-900/60" />
		<div
			transition:fly={fly_params}
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
		>
			<div class="flex items-center justify-between">
				<a on:click={close} href="/" class="-m-1.5 p-1.5">
					<img
						class="h-12 w-auto"
						src="https://n5qf30.p3cdn1.secureserver.net/wp-content/uploads/2017/03/cropped-cbl-header.png"
						alt=""
					/>
				</a>
				<button
					on:click={close}
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-400 dark:text-gray-300"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-700/25 dark:divide-gray-500/25">
					<div class="space-y-2 py-6">
						{#each links as { label, href }, i}
							<a
								on:click={close}
								{href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-emerald-500 hover:bg-emerald-300 dark:hover:bg-gray-800"
								>{label}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
