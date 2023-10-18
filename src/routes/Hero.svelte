<script lang="ts">
	import piano from '$lib/assets/piano2.jpeg?as=run:0';
	import guitar from '$lib/assets/guitar.jpeg?as=run:0';
	import violin from '$lib/assets/violin.jpeg?as=run:0';
	import voice from '$lib/assets/voice.jpeg?as=run:0';
	import sourdough from '$lib/assets/fresh_sourdough_loaf.jpeg?as=run:0';
	import Img from '@zerodevx/svelte-img';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quadOut } from 'svelte/easing';

	const title = 'Private music lessons in Helena, MT';
	const body =
		'Unlock your musical potential with private voice, piano, violin, or guitar lessons. We empower you to master your chosen instrument while discovering the joy of creating beautiful music.';
	const hero_photos = [piano, violin, voice, guitar];
	let index = 0;

	onMount(() => {
		setInterval(() => {
			if (index < hero_photos.length - 1) {
				index++;
			} else {
				index = 0;
			}
		}, 3000);
	});
</script>

<div class="relative bg-white dark:bg-gray-950 transition-colors duration-300 ease-out">
	<div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
		<div class="px-6 pb-24 pt-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h1
					class="mt-24 text-4xl font-bold tracking-tight dark:text-white text-black transition-colors duration-300 ease-out sm:mt-10 sm:text-6xl"
				>
					Baking Up <span
						class="bg-clip-text text-transparent box-decoration-clone bg-gradient-to-br from-[#F25E3D] to-[#F29441]"
						>Happiness</span
					> in Helena, MT
				</h1>
				<p
					class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-out"
				>
					Picture this: cozy evenings, the scent of freshly baked sourdough filling your home, and
					the delightful crunch of seasonal cookies with every bite. Make your holiday season extra
					special with our home-baked products!
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a href="/contact-us" class="btn variant-filled-primary">Order today</a>
					<a href="/#lessons" class="btn variant-ringed-primary"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
		<div
			class="relative bg-black lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
		>
			<div class="relative h-full bg-black">
				<Img
					class="aspect-[3/2] w-full object-contain lg:object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full bg-black"
					src={sourdough}
					alt="home made sourdough bread fresh out of the oven"
				/>
			</div>
		</div>
	</div>
</div>
