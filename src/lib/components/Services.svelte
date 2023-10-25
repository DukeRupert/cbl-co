<script lang="ts">
	interface Service {
		title: string;
		body: string;
	}
	export let services: Service[] = [];
</script>

<!-- Services -->
<div id="services" class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<h2
					class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
				>
					Our Services
				</h2>
				<p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
					With a dedicated team of experts, state-of-the-art equipment, and a commitment to
					excellence, we are your trusted partner for all things pipeline-related. Explore our
					services below to discover how we can cater to your specific requirements and keep your
					pipelines in optimal condition.
				</p>
			</div>
			<dl
				class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-16"
			>
				{#each services as { title, body }}
					<div class="relative pl-9">
						<dt class="font-semibold text-gray-900 dark:text-gray-100">
							<svg
								class="absolute left-0 top-1 h-5 w-5 text-tango-500 dark:text-safetyGreen-500"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							{title}
						</dt>
						<dd class="mt-2">{@html body}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
