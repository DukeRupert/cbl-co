<script lang="ts">
	import sourdough from '$lib/assets/sourdough_on_stoneware.jpg?as=run';
	import cut_sourdough from '$lib/assets/sourdough_cut.jpeg?as=run';
	import halloween_cookies from '$lib/assets/halloween_cookies.jpeg?as=run';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="bg-white dark:bg-gray-950">
	<div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
				Sourdough and seasonal cookies
			</h2>
			<p class="mt-4 text-gray-500 dark:text-gray-400">
				We believe that artisanal baked goods are more than just food; they're the essence of
				special, the taste of delicious, and the magic of memory-making.
			</p>
		</div>

		<div class="mt-16 space-y-16">
			<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
				<div class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1">
					<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">A taste of home</h3>
					<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
						Discover the heart of Montana in every bite! Our homemade sourdough, crafted with the
						freshest ingredients and infused with the warmth of rosemary and garlic, is your ticket
						to an unforgettable family dinner or a holiday feast. With each slice, you'll taste the
						love and tradition that goes into every loaf.
					</p>
				</div>
				<div
					class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5"
				>
					<div class="overflow-hidden rounded-lg bg-gray-100">
						<Img
							src={cut_sourdough}
							alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull."
							class="w-full max-h-80 object-cover object-center"
						/>
					</div>
				</div>
			</div>
			<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
				<div
					class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9"
				>
					<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">
						Whimsical, edible, magical
					</h3>
					<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
						Indulge in the magic of the season with our seasonal-themed homemade cookies! From the
						comfort of sourdough chocolate chip to the whimsy of decorated sugar cookies, we're here
						to sweeten your moments. Our cookies are not just treats; they're edible memories
						waiting to be made. Perfect for gifting or sharing, these cookies bring joy and delight
						to every occasion. Taste the season in every bite and make this moment special with our
						delectable creations!
					</p>
				</div>
				<div class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
					<div class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
						<Img
							src={halloween_cookies}
							alt="White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull."
							class="w-full max-h-80 object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
