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
            About Us
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            We're a creative agency passionate about bringing your vision to
            life through innovative design and strategic thinking.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 class="text-4xl font-bold mb-6 text-white">Our Story</h2>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, we started as a small team of passionate
              creatives with a big dream: to help businesses tell their stories
              through compelling visual design and strategic marketing.
            </p>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Today, we've grown into a full-service creative agency, but we've
              never lost sight of our core mission. We believe that great design
              isn't just about looking good—it's about creating meaningful
              connections between brands and their audiences.
            </p>
            <div class="grid grid-cols-2 gap-8 mt-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-400 mb-2">150+</div>
                <div class="text-gray-400">Projects Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div class="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl overflow-hidden"
            >
              <img src="" alt="Our Team" class="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-800/30">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
          <p class="text-gray-300 text-lg">
            The creative minds behind our success
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div
            v-for="member in team"
            :key="member.name"
            class="group text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div
              class="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 class="text-xl font-bold mb-2 text-white">{{ member.name }}</h3>
            <p class="text-purple-400 mb-3">{{ member.role }}</p>
            <p class="text-gray-400 text-sm mb-4">{{ member.bio }}</p>
            <div class="flex justify-center gap-3">
              <a
                v-for="social in member.socials"
                :key="social.platform"
                :href="social.url"
                class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <i :class="social.icon" class="text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">Our Values</h2>
          <p class="text-gray-300 text-lg">What drives us every day</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="value in values"
            :key="value.title"
            class="text-center group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <i :class="value.icon" class="text-2xl text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-white">{{ value.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "Leading creative vision with 10+ years of design experience.",
    image: "/placeholder.svg?height=200&width=200",
    socials: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Dribbble", icon: "fab fa-dribbble", url: "#" },
    ],
  },
  {
    name: "Mike Chen",
    role: "Video Producer",
    bio: "Award-winning video producer specializing in brand storytelling.",
    image: "/placeholder.svg?height=200&width=200",
    socials: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Vimeo", icon: "fab fa-vimeo", url: "#" },
    ],
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Manager",
    bio: "Social media strategist with expertise in community building.",
    image: "/placeholder.svg?height=200&width=200",
    socials: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Instagram", icon: "fab fa-instagram", url: "#" },
    ],
  },
  {
    name: "David Kim",
    role: "Digital Marketing Lead",
    bio: "Data-driven marketer focused on ROI and growth strategies.",
    image: "/placeholder.svg?height=200&width=200",
    socials: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Twitter", icon: "fab fa-twitter", url: "#" },
    ],
  },
]);

const values = ref([
  {
    title: "Creativity",
    icon: "fas fa-lightbulb",
    description:
      "We believe in pushing boundaries and thinking outside the box to create unique solutions.",
  },
  {
    title: "Quality",
    icon: "fas fa-star",
    description:
      "Excellence is not negotiable. We deliver only the highest quality work to our clients.",
  },
  {
    title: "Collaboration",
    icon: "fas fa-users",
    description:
      "We work closely with our clients as partners to achieve shared goals and success.",
  },
]);
</script>
