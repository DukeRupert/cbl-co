<script lang="ts">
	import { SITE_DATA } from '../../lib/global';
	import { navigating } from '$app/state';
	import { mode } from 'mode-watcher';
	import { CldImage } from 'svelte-cloudinary';
	import { Button } from '$lib/components/ui/button/index.js';

	import { Menu, X } from 'lucide-svelte';
	import Lightswitch from '$lib/components/lightswitch.svelte';

	let isOpen = $state(false);
	$effect(() => {
		if (navigating.complete) isOpen = false;
	})
</script>

<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
			<div class="flex items-center gap-x-12">
				<div class="h-12 bg-white rounded-sm">
					<a href="/">
						<span class="sr-only">{SITE_DATA.name}</span>
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
					</a>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					{#each SITE_DATA.routes as { id, url }}
						<Button href={url} variant="link" class="text-sm font-semibold leading-6 capitalize"
							>{id}</Button
						>
					{/each}
				</div>
			</div>
			<div class="flex gap-x-4 lg:hidden">
				<!-- Toggle Button -->
				<button onclick={() => (isOpen = !isOpen)} class="p-2 text-gray-600 hover:text-gray-900">
					{#if isOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
			<!-- Navigation Menu -->
			<div
				class="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg
				   transform transition-all duration-200 ease-in-out"
				class:translate-y-0={isOpen}
				class:-translate-y-2={!isOpen}
				class:opacity-100={isOpen}
				class:opacity-0={!isOpen}
				class:pointer-events-none={!isOpen}
			>
				<div class="p-4">
					<h2 class="text-lg font-semibold mb-4">Navigation</h2>
					<nav class="space-y-2">
						{#each SITE_DATA.routes as route}
							<a
								href={route.url}
								class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
							>
								{route.id}
							</a>
						{/each}
					</nav>
				</div>
			</div>
		</nav>
</header>
