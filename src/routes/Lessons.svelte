<script lang="ts">
	import Hero from './Hero.svelte';

	const title = 'Private music lessons in Helena, MT';
	const body =
		'Unlock your musical potential with private voice, piano, violin, or guitar lessons. We empower you to master your chosen instrument while discovering the joy of creating beautiful music.';
</script>

<div id="lessons" class="bg-white dark:bg-black py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-tertiary-600">Available Lessons</h2>
			<p
				class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
			>
				Discover Your Melody
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
				Choose one or mix and match for a musical journey that's uniquely yours. With personalized
				attention, flexible scheduling, and a passion for nurturing talent, our private music
				services are your ticket to becoming the musician you've always envisioned. Let's create
				harmonies together!
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-600"
						>
							<svg
								class="h-6 w-6 text-white dark:text-black"
								stroke="currentColor"
								fill="currentColor"
								aria-hidden="true"
								viewBox="0 0 512 512"
							>
								<g>
									<g>
										<path
											d="M398.222,213.333c-27.449,0-49.778-22.33-49.778-49.778C348.444,73.371,275.073,0,184.889,0S21.333,73.371,21.333,163.556
			v170.667V448c0,11.782,9.552,21.333,21.333,21.333h64v21.333c0,11.782,9.552,21.333,21.333,21.333s21.333-9.552,21.333-21.333
			v-21.333h64h85.333h64v21.333c0,11.782,9.552,21.333,21.333,21.333s21.333-9.552,21.333-21.333v-21.333h64
			c11.782,0,21.333-9.552,21.333-21.333V334.222v-28.444C490.667,254.804,449.196,213.333,398.222,213.333z M106.667,426.667H64
			v-71.111h35.556v21.333c0,7.204,2.698,13.76,7.111,18.77V426.667z M192,426.667h-42.667v-31.007
			c4.412-5.01,7.111-11.568,7.111-18.77v-21.333h28.444v21.333c0,7.204,2.698,13.76,7.111,18.77V426.667z M277.333,426.667h-42.667
			v-31.007c4.412-5.01,7.111-11.568,7.111-18.77v-21.333h28.444v21.333c0,7.204,2.698,13.76,7.111,18.77V426.667z M362.667,426.667
			H320v-31.007c4.412-5.01,7.111-11.568,7.111-18.77v-21.333h28.444v21.333c0,7.204,2.698,13.76,7.111,18.77V426.667z M448,426.667
			h-42.667v-31.007c4.412-5.01,7.111-11.568,7.111-18.77v-21.333H448V426.667z"
										/>
									</g>
								</g>
							</svg>
						</div>
						Piano Perfection
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
						Learn to play timeless melodies and modern tunes on the piano. We will guide you from
						the basics to advanced techniques, ensuring your fingers dance flawlessly across the
						keys.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-600"
						>
							<svg
								class="h-6 w-6 text-white dark:text-black"
								stroke-width="1.5"
								stroke="currentColor"
								fill="currentColor"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z"
								/></svg
							>
						</div>
						Vocal Brilliance
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
						Elevate your voice with our vocal coaching. Whether you're a beginner or aiming to
						refine your singing skills, we'll help you find your unique voice, develop pitch-perfect
						control, and master the art of captivating performances.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-600"
						>
							<svg
								class="h-6 w-6 text-white dark:text-black"
								stroke-width="1.5"
								stroke="currentColor"
								fill="currentColor"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
								/></svg
							>
						</div>
						Guitar Greatness
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
						Are you ready to pluck the strings of your dreams and create soul-stirring melodies? Our
						acoustic guitar lessons are your gateway to mastering this timeless instrument and
						discovering a world of musical possibilities.
					</dd>
				</div>
				<div class="relative pl-16">
					<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-600"
						>
							<svg
								class="h-6 w-6 text-white dark:text-black"
								fill="currentColor"
								stroke-width="0.75"
								stroke="currentColor"
								aria-hidden="true"
								viewBox="0 0 25.915 25.915"
								xml:space="preserve"
							>
								<g>
									<path
										d="M25.01,3.345c0.439-0.439-0.261-1.364,0.905-2.532L25.101,0c-1.198,1.2-2.089,0.464-2.531,0.905
		c-0.421,0.422-0.434,1.103-0.048,1.554L22.077,2.86l-1.01-1.01c-0.312-0.312-0.818-0.312-1.131,0c-0.312,0.312-0.312,0.819,0,1.132
		l0.951,0.951l-0.388,0.35L19.566,3.35c-0.312-0.312-0.818-0.312-1.131,0c-0.312,0.312-0.312,0.819,0,1.132l0.874,0.874
		l-2.386,2.151c-0.751-0.69-1.995-1.575-3.475-1.575c-0.759,0-1.577,0.234-2.417,0.849c-0.475,0.347-1.238,0.868-2.15,1.501
		c1.084,1.201,0.362,2.422-0.836,3.621c-0.79,0.789-1.59,1.379-2.387,1.379c-0.45,0-0.9-0.188-1.347-0.635
		c-0.21-0.209-0.345-0.42-0.446-0.631c-0.751,0.621-1.468,1.252-2.09,1.873c-2.873,2.873-2.05,6.385,0.981,9.271
		c1.662,1.742,3.529,2.755,5.361,2.755c1.354,0,2.69-0.553,3.91-1.773c0.623-0.623,1.255-1.336,1.879-2.089
		c-0.213-0.104-0.425-0.237-0.636-0.448c-1.237-1.236-0.49-2.496,0.747-3.732c0.787-0.787,1.584-1.37,2.378-1.37
		c0.42,0,0.839,0.163,1.256,0.545c0.634-0.907,1.158-1.671,1.504-2.144c1.812-2.475,0.308-4.772-0.741-5.913l2.148-2.383
		l0.873,0.873c0.157,0.156,0.361,0.234,0.566,0.234s0.409-0.078,0.565-0.234c0.312-0.312,0.312-0.819,0-1.132l-0.931-0.931
		l0.35-0.388l0.951,0.951c0.156,0.156,0.36,0.234,0.565,0.234s0.409-0.078,0.565-0.234c0.312-0.312,0.312-0.819,0-1.132L23.057,3.84
		l0.401-0.445C23.91,3.779,24.592,3.764,25.01,3.345z M17.961,14.029c-0.202,0.277-0.465,0.652-0.774,1.097
		c-0.257-0.068-0.521-0.103-0.792-0.103c-1.452,0-2.649,1.028-3.423,1.802c-0.903,0.903-1.435,1.693-1.673,2.488
		c-0.303,1.014-0.113,2.02,0.532,2.883c-0.295,0.328-0.577,0.627-0.85,0.899c-0.89,0.89-1.854,1.341-2.865,1.341
		c-1.153,0-2.428-0.596-3.653-1.686l4.181-3.667l-1.909-1.906l-3.659,4.17c-1.019-1.177-1.585-2.398-1.598-3.506
		c-0.013-1.028,0.438-2.008,1.34-2.909c0.27-0.269,0.568-0.55,0.901-0.848c0.729,0.545,1.437,0.673,1.938,0.673
		c1.435,0,2.587-0.969,3.433-1.813c1.701-1.703,1.998-3.109,1.711-4.198c0.446-0.31,0.823-0.572,1.103-0.776
		c0.518-0.377,1.023-0.562,1.544-0.562c0.88,0,1.749,0.548,2.372,1.092l-3.737,3.368l1.965,1.966l3.38-3.75
		C18.203,10.942,19.12,12.448,17.961,14.029z"
									/>
								</g>
							</svg>
						</div>
						Violin Virtuosity
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
						Experience the beauty of the violin's sound under the guidance of a skilled mentor.
						Whether you're starting from scratch or honing your skills, our private lessons will
						have you mesmerizing audiences with your violin virtuosity.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>
