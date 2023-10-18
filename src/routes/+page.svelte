<script lang="ts">
  export let bus_name = "Christian Brother's Lining Co."
	const title = "Reviving Your Pipes";
	const body =
		"Christian Brother's Lining Co. is your go-to source for Cured-In-Place Piping (CIPP) services, dedicated to rehabilitating aging pipelines for municipalities and cities across the state since 2007. With our eco-friendly, cost-effective, and minimally disruptive approach, we're committed to ensuring California's underground infrastructure remains strong, reliable, and environmentally responsible.";

  const services = [
  {
    "title": "Install CIPP",
    "body": "Our expert team specializes in the installation of Cured-In-Place Piping (CIPP), offering a trenchless solution that rehabilitates pipelines with minimal disruption. This innovative technology extends the life of your pipes, creating a new, corrosion-resistant lining within the existing ones."
  },
  {
    "title": "CCTV Pipelines of All Sizes",
    "body": "We provide comprehensive Closed-Circuit Television (CCTV) inspection services for pipelines of all sizes. Our state-of-the-art equipment and certified operators ensure thorough inspections, identifying issues and preventing potential problems."
  },
  {
    "title": "Operators are PACP/NASSCO Certified",
    "body": "Our certified operators adhere to industry standards and best practices. With PACP (Pipeline Assessment and Certification Program) and NASSCO (National Association of Sewer Service Companies) certifications, you can trust in their expertise and professionalism."
  },
  {
    "title": "Hydro Jet and Remove Roots",
    "body": "Say goodbye to clogs and root intrusions with our high-pressure hydro jetting services. We'll efficiently remove blockages and roots, restoring the flow and integrity of your pipelines."
  },
  {
    "title": "Certified Installer for MTC Liner",
    "body": "As a certified installer for MTC Liner, we ensure the highest quality installation of this innovative lining material. The MTC Liner offers enhanced durability and corrosion resistance, extending the lifespan of your pipelines."
  },
  {
    "title": "Mobile Steam Truck Rental",
    "body": "Our mobile steam truck rental service provides a versatile solution for various cleaning and maintenance needs. Whether it's cleaning, degreasing, or other steam-based tasks, our equipment is ready to meet your requirements on the go."
  }
]

  const advantages = [
  {
    "title": "Trenchless Technology",
    "body": "CIPP eliminates the need for extensive excavation, reducing disruption to the environment and infrastructure."
  },
  {
    "title": "Cost-Effective",
    "body": "CIPP is more cost-effective than traditional pipe replacement due to reduced labor and equipment requirements."
  },
  {
    "title": "Faster Repairs",
    "body": "CIPP projects are typically completed more quickly, reducing service disruptions."
  },
  {
    "title": "Environmental Impact",
    "body": "CIPP has a lower environmental impact, reducing the carbon footprint and waste generation."
  },
  {
    "title": "Less Disruption to Communities",
    "body": "CIPP reduces disruption, allowing residents and businesses to continue their activities."
  },
  {
    "title": "Preservation of Landscapes and Infrastructure",
    "body": "CIPP preserves landscapes and infrastructure during pipe rehabilitation."
  }
]

  const clients = [
  "City of San Jose",
  "Mill Valley",
  "Napa Sanitation",
  "San Carlos",
  "Millbrae",
  "Burlingame",
  "Morgan Hill",
  "Monterey"
]

</script>

<svelte:head>
	<title>{bus_name} | {title} </title>
	<meta name="description" content={body} />
</svelte:head>

<main class="isolate bg-white dark:bg-gray-950">
    <!-- Hero section -->
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-emerald-100/20 pt-14">
		<div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-emerald-600/10 dark:shadow-emerald-800/10 ring-1 ring-emerald-50 dark:ring-emerald-900 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div>
		<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		  <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
			<h1 class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl lg:col-span-2 xl:col-auto">{title}</h1>
			<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
			  <p class="text-lg leading-8 text-gray-600 dark:text-gray-300">{body}</p>
			  <div class="mt-10 flex items-center gap-x-6">
				<a href="#" class="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Get started</a>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Learn more <span aria-hidden="true">→</span></a>
			  </div>
			</div>
			<img src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80" alt="" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
		  </div>
		</div>
		<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-950 sm:h-32"></div>
	  </div>

    <!-- Services -->
  <div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Our Services</h2>
        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">With a dedicated team of experts, state-of-the-art equipment, and a commitment to excellence, we are your trusted partner for all things pipeline-related. Explore our services below to discover how we can cater to your specific requirements and keep your pipelines in optimal condition.</p>
      </div>
      <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 lg:gap-y-16">
        {#each services as {title, body}}
          <div class="relative pl-9">
            <dt class="font-semibold text-gray-900 dark:text-gray-100">
              <svg class="absolute left-0 top-1 h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              {title}
            </dt>
            <dd class="mt-2">{body}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>


    <!-- Content section -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Our mission</h2>
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p class="text-xl leading-8 text-gray-600 dark:text-gray-300">At Christian Brother's Lining Co, we are proud to be the frontrunners in the realm of Cured-In-Place Piping (CIPP) services, offering a lifeline to municipalities and cities across the Golden State. With a profound commitment to the environment and a passion for ensuring the longevity of California's vital underground infrastructure, we've dedicated ourselves to providing a cost-effective and sustainable alternative to traditional pipe replacement.</p>
            <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 dark:text-gray-200">
              <p>Our team of experts, the true heroes behind the scenes, specializes in the rehabilitation and repair of aging or damaged pipes, making use of the cutting-edge CIPP technology. By seamlessly creating a new pipe within the existing one, we eliminate the need for disruptive and costly excavations. With minimal downtime and environmental impact, Christian Brother's Lining Co ensures that your municipality or city can continue to function smoothly, even while undergoing essential pipe repairs.</p>
              <p class="mt-10">We understand that maintaining and improving California's underground infrastructure is not just a responsibility; it's a vital service for the well-being of the communities we serve. Christian Brother's Lining Co is here to be your partner in this crucial mission, striving to make our great state even greater, one pipe at a time.</p>
            </div>
          </div>
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Linear Feet of Restored Pipelines</dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">380,000</dd>
              </div>
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Successful Projects</dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">400</dd>
              </div>
              <div class="flex flex-col-reverse gap-y-4">
                <dt class="text-base leading-7 text-gray-600 dark:text-gray-300">Sea Lions Displaced</dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">0</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section -->
    <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" class="aspect-[5/2] w-full object-cover xl:rounded-3xl">
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Why Choose CBL?</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Cured-In-Place Piping (CIPP) offers several advantages over traditional pipe replacement methods, making it a popular choice for pipeline rehabilitation. Here are some of the key advantages:</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {#each advantages as {title, body}}
        <div>
          <dt class="font-semibold text-gray-900 dark:text-gray-100">{title}</dt>
          <dd class="mt-1 text-gray-600 dark:text-gray-300">{body}</dd>
        </div>
        {/each}
      </dl>
    </div>

    <!-- Logo cloud -->
    <div class="relative isolate -z-10 mt-32 sm:mt-48">
      <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200 dark:stroke-gray-800" aria-hidden="true">
          <defs>
            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" class="overflow-visible fill-gray-50 dark:fill-gray-900">
            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
        </svg>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">Municipalities we have proudly worked with</h2>
        <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {#each clients as client}
             <div class="col-span-2 flex text-center justify-center lg:col-span-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">{client}</div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Team section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Our team</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li>
          <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">Tom Cook</h3>
          <p class="text-base leading-7 text-gray-600 dark:text-gray-300">Director</p>
          <ul role="list" class="mt-6 flex gap-x-6">
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
  
        <!-- More people... -->
        <li>
          <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">Lindsay Walton</h3>
          <p class="text-base leading-7 text-gray-600 dark:text-gray-300">Front-end Developer</p>
          <ul role="list" class="mt-6 flex gap-x-6">
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
        <!-- More people... -->
        <li>
          <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="">
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">Floyd Miles</h3>
          <p class="text-base leading-7 text-gray-600 dark:text-gray-300">Senior Foreman</p>
          <ul role="list" class="mt-6 flex gap-x-6">
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="bg-emerald-700 dark:bg-emerald-800 mt-32 sm:mt-48">
      <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Reimagine Your Pipes.<br>Renew Your Infrastructure!</h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-200">Say goodbye to costly excavations and environmental disruptions while ensuring the longevity and sustainability of your underground infrastructure. Embrace the future with us, and let's get your pipes flowing smoothly again!</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-700 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
    
    
  </main>
