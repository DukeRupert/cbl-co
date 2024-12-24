<script lang="ts">
     import Cta from '$lib/components/cta.svelte';
    import { ChevronRight, Shield, Clock, DollarSign, Activity, CheckCircle } from 'lucide-svelte';
    
    let activeTab = $state('assessment');
    
    const processSteps = [
        {
            id: 'assessment',
            title: 'Assessment',
            description: 'Comprehensive structural evaluation using advanced inspection techniques to identify specific challenges and develop targeted solutions.'
        },
        {
            id: 'preparation',
            title: 'Preparation',
            description: 'Surface cleaning and preparation using specialized equipment to ensure optimal rehabilitation results.'
        },
        {
            id: 'rehabilitation',
            title: 'Rehabilitation',
            description: 'Application of advanced materials and techniques including CIPM liners, chemical-resistant coatings, and specialized grouts.'
        },
        {
            id: 'quality',
            title: 'Quality Control',
            description: 'Rigorous testing and documentation to ensure structural integrity and long-term performance.'
        }
    ];

    const benefits = [
        {
            icon: DollarSign,
            title: 'Cost-Effective',
            description: 'Save up to 50% compared to traditional replacement methods'
        },
        {
            icon: Clock,
            title: 'Minimal Disruption',
            description: 'Complete rehabilitation within 10-12 hours'
        },
        {
            icon: Shield,
            title: 'Long-Term Solution',
            description: 'Structural integrity matching full replacement'
        },
        {
            icon: Activity,
            title: 'Performance Verified',
            description: 'Comprehensive testing and documentation'
        }
    ];
</script>

<div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Expert Manhole Rehabilitation
                    </h1>
                    <p class="mt-6 text-xl text-gray-300 max-w-2xl">
                        Professional restoration services that protect and extend the life of your infrastructure while minimizing costs and disruption.
                    </p>
                    <div class="mt-8">
                        <a href="tel:+16618164291" class="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center">
                            Request Assessment
                            <ChevronRight class="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div class="mt-12 lg:mt-0">
                    <div class="bg-gray-800 rounded-lg p-8">
                        <h3 class="text-lg font-semibold mb-4">Why Choose Us</h3>
                        <div class="grid gap-4">
                            {#each benefits as benefit}
                                <div class="flex items-start">
                                    <div class="flex-shrink-0 mt-1">
                                        <benefit.icon size={24} />
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="font-medium">{benefit.title}</h4>
                                        <p class="text-gray-400 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Process Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Rehabilitation Process
            </h2>
            <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to infrastructure restoration that ensures quality and longevity
            </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
                <div class="space-y-1">
                    {#each processSteps as step}
                        <button
                            class="w-full text-left px-4 py-3 rounded-lg transition-colors {activeTab === step.id ? 'bg-orange-50 text-orange-700' : 'hover:bg-gray-50'}"
                            onclick={() => activeTab = step.id}
                        >
                            <div class="font-medium">{step.title}</div>
                        </button>
                    {/each}
                </div>
            </div>

            <div class="lg:col-span-2 bg-gray-50 rounded-2xl p-8">
                {#each processSteps as step}
                    {#if activeTab === step.id}
                        <div>
                            <h3 class="text-2xl font-bold mb-4">{step.title}</h3>
                            <p class="text-gray-600">{step.description}</p>
                            
                            <div class="mt-8 grid sm:grid-cols-2 gap-4">
                                <div class="bg-white p-4 rounded-lg">
                                    <CheckCircle class="w-5 h-5 text-orange-500 mb-2" />
                                    <h4 class="font-medium mb-2">Advanced Technology</h4>
                                    <p class="text-sm text-gray-500">
                                        Using state-of-the-art equipment and materials
                                    </p>
                                </div>
                                <div class="bg-white p-4 rounded-lg">
                                    <CheckCircle class="w-5 h-5 text-orange-500 mb-2" />
                                    <h4 class="font-medium mb-2">Expert Team</h4>
                                    <p class="text-sm text-gray-500">
                                        Certified professionals with extensive experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <Cta />
</div>