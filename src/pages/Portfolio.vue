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
            Our Portfolio
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed mb-8">
            Showcasing our best work and creative solutions
          </p>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeFilter = category"
              :class="[
                'px-6 py-3 rounded-full transition-all duration-300 font-medium',
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button
                  class="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors duration-300"
                >
                  <i class="fas fa-eye text-xl"></i>
                </button>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span
                  class="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full"
                  >{{ project.category }}</span
                >
                <span class="text-gray-500 text-sm">{{ project.date }}</span>
              </div>
              <h3
                class="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300"
              >
                {{ project.title }}
              </h3>
              <p class="text-gray-400 mb-4">{{ project.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                  >
                    {{ tech }}
                  </span>
                </div>
                <button
                  class="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeFilter = ref("All");

const categories = ref([
  "All",
  "Graphic Design",
  "Video Editing",
  "Social Media",
  "Digital Marketing",
]);

const projects = ref([
  {
    id: 1,
    title: "Brand Identity for Tech Startup",
    description:
      "Complete brand identity design including logo, colors, and guidelines.",
    category: "Graphic Design",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Illustrator", "Photoshop", "Figma"],
    date: "2024",
  },
  {
    id: 2,
    title: "Product Launch Video",
    description:
      "Dynamic product showcase video with motion graphics and animations.",
    category: "Video Editing",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["After Effects", "Premiere Pro", "Cinema 4D"],
    date: "2024",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description:
      "Comprehensive social media strategy and content creation for fashion brand.",
    category: "Social Media",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Instagram", "TikTok", "Canva"],
    date: "2024",
  },
  {
    id: 4,
    title: "E-commerce SEO Strategy",
    description:
      "Complete SEO overhaul resulting in 300% increase in organic traffic.",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Google Analytics", "SEMrush", "WordPress"],
    date: "2024",
  },
  {
    id: 5,
    title: "Restaurant Menu Design",
    description:
      "Elegant menu design with custom illustrations and typography.",
    category: "Graphic Design",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["InDesign", "Illustrator", "Photoshop"],
    date: "2023",
  },
  {
    id: 6,
    title: "Corporate Training Video",
    description:
      "Professional training video series with interactive elements.",
    category: "Video Editing",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Premiere Pro", "After Effects", "Audition"],
    date: "2023",
  },
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category === activeFilter.value
  );
});
</script>
