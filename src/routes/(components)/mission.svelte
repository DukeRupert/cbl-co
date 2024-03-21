<script lang="ts" context="module">
	export interface Impact {
		value: string;
		impact: string;
	}
</script>

<script lang="ts">
	export let title: string;
	export let subtext: string[];
	export let impacts: Impact[];
</script>

<!-- Content section -->
<div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
		<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
			<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
				{#each subtext as text, i}
					{#if i == 0}
						<p class="text-base leading-8 text-muted-foreground">
							At Christian Brother's Lining Co, we are proud to be the frontrunners in the realm of
							Cured-In-Place Piping (CIPP) services, offering a lifeline to municipalities and
							cities across the Golden State. With a profound commitment to the environment and a
							passion for ensuring the longevity of California's vital underground infrastructure,
							we've dedicated ourselves to providing a cost-effective and sustainable alternative to
							traditional pipe replacement.
						</p>
					{:else}
						<div class="mt-10 max-w-xl text-base leading-7 text-muted-foreground">
							<p>
								{text}
							</p>
						</div>
					{/if}
				{/each}
			</div>
			<div class="lg:flex lg:flex-auto lg:justify-center">
				<dl class="w-64 space-y-8 xl:w-80">
					{#each impacts as { value, impact }}
						<div class="flex flex-col-reverse gap-y-4">
							<dt class="text-base leading-7">{impact}</dt>
							<dd class="text-5xl font-semibold tracking-tight text-primary hover:animate-pulse">
								{value}
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</div>
