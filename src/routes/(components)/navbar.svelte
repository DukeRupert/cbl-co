<script lang="ts">
	import { SITE_DATA, type Route } from '../../lib/global';
	import { navigating } from '$app/stores';
	import { mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Card from '$lib/components/ui/card';
	import HamburgerMenu from 'svelte-radix/HamburgerMenu.svelte';
	import Lightswitch from '../../lib/components/lightswitch.svelte';
	import logoLight from '$lib/assets/cbl-header-light.png?enhanced';
	import logoDark from '$lib/assets/cbl-header-dark.png?enhanced';

	let nav_open = false;

	$: if ($navigating) nav_open = false;
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<Collapsible.Root bind:open={nav_open}>
		<nav class="flex items-center justify-between p-6 lg:px-8 gap-x-6" aria-label="Global">
			<div class="flex items-center gap-x-12">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">{SITE_DATA.name}</span>
					{#if $mode}
						<enhanced:img class="h-16 w-auto" src={logoLight} alt={`${SITE_DATA.name} logo`} />
					{:else}
						<enhanced:img class="h-16 w-auto" src={logoDark} alt={`${SITE_DATA.name} logo`} />
					{/if}
				</a>
				<div class="hidden lg:flex lg:gap-x-12">
					{#each SITE_DATA.routes as { id, url }}
						<Button
							href={url}
							variant="link"
							class="text-sm font-semibold leading-6 capitalize">{id}</Button
						>
					{/each}
				</div>
			</div>
			<div class="flex">
				<Lightswitch />
			</div>
			<div class="flex lg:hidden">
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
