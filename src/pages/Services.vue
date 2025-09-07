<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1
            class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Our Services
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Comprehensive digital solutions to elevate your brand and drive
            growth
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div class="relative z-10">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <i :class="service.icon" class="text-2xl text-white"></i>
              </div>
              <h3
                class="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300"
              >
                {{ service.title }}
              </h3>
              <p class="text-gray-300 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              <ul class="space-y-2 mb-8">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center text-gray-400"
                >
                  <i class="fas fa-check text-purple-400 mr-3"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-purple-400">{{
                  service.price
                }}</span>
                <button
                  class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-800/30">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Our Process</h2>
          <p class="text-gray-300 text-lg">
            How we deliver exceptional results
          </p>
        </div>
        <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(step, index) in process"
            :key="index"
            class="text-center group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    icon: "fas fa-palette",
    title: "Graphic Design",
    description:
      "Create stunning visual identities that capture your brand essence and engage your audience.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Print Design",
      "Digital Graphics",
      "UI/UX Design",
    ],
    price: "From $299",
  },
  {
    icon: "fas fa-video",
    title: "Video Editing",
    description:
      "Professional video production and editing services to tell your story compellingly.",
    features: [
      "Video Production",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Animation",
    ],
    price: "From $499",
  },
  {
    icon: "fas fa-share-alt",
    title: "Social Media Management",
    description:
      "Comprehensive social media strategies to build your online presence and community.",
    features: [
      "Content Strategy",
      "Community Management",
      "Analytics & Reporting",
      "Paid Advertising",
      "Influencer Outreach",
    ],
    price: "From $799/mo",
  },
  {
    icon: "fas fa-chart-line",
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that drive traffic, leads, and conversions.",
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Email Marketing",
      "Content Marketing",
      "Conversion Optimization",
    ],
    price: "From $999/mo",
  },
]);

const process = ref([
  {
    title: "Discovery",
    description: "We understand your goals, audience, and challenges",
  },
  {
    title: "Strategy",
    description: "We develop a customized plan tailored to your needs",
  },
  {
    title: "Execution",
    description: "We implement the strategy with precision and creativity",
  },
  {
    title: "Optimization",
    description: "We continuously improve and refine for better results",
  },
]);
</script>
