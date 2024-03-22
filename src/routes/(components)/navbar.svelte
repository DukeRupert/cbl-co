<script lang="ts">
	import { SITE_DATA } from '../../lib/global';
	import { navigating } from '$app/stores';
	import { mode } from 'mode-watcher';
	import { CldImage } from 'svelte-cloudinary';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Card from '$lib/components/ui/card';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
	import Lightswitch from '../../lib/components/lightswitch.svelte';

	let nav_open = false;

	$: if ($navigating) nav_open = false;
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<Collapsible.Root bind:open={nav_open}>
		<nav class="flex items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
			<div class="flex items-center gap-x-12">
				<div class="h-12">
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
				<Lightswitch />
				<Collapsible.Trigger
					><Button variant="outline" size="icon"><HamburgerMenu class="h-6 w-6" /></Button
					></Collapsible.Trigger
				>
			</div>
			<Collapsible.Content class="absolute left-0 top-full w-full">
				<Card.Root>
					<Card.Header><h2>Navigation</h2></Card.Header>
					<Card.Content>
						{#each SITE_DATA.routes as { id, url }}
							<Button href={url} variant="link" class="capitalize">{id}</Button>
						{/each}
					</Card.Content>
				</Card.Root>
			</Collapsible.Content>
		</nav>
	</Collapsible.Root>
</header>
