<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-blob blob-1"></div>
      <div class="floating-blob blob-2"></div>
      <div class="floating-blob blob-3"></div>
      <div class="floating-particles"></div>
    </div>

    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-7xl mx-auto text-center">
        <transition name="fade-up" appear>
          <div class="space-y-8">
            <h1
              class="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-left"
            >
              <span
                class="block animate-text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              >
                We Are
              </span>
              <span class="block mt-2">Build & Design</span>
              <span class="block mt-2">Digital Products</span>
              <span class="block mt-2">And Digital Marketing</span>
            </h1>
            <p
              class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We transform ideas into stunning digital experiences through
              innovative design, strategic marketing, and cutting-edge
              technology.
            </p>

            <div
              class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            >
              <button
                class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span class="relative z-10">Start Your Project</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>

              <button
                class="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-white/10"
              >
                <span class="flex items-center gap-2">
                  <svg
                    class="w-5 h-5 group-hover:animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l7-5-7-5z" />
                  </svg>
                  Watch Our Work
                </span>
              </button>
            </div>
          </div>
        </transition>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <transition name="fade-up" appear>
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              What We <span class="text-gradient">Create</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to execution, we deliver exceptional results across
              all digital platforms
            </p>
          </div>
        </transition>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-white mb-4">
                {{ service.title }}
              </h3>
              <p class="text-gray-300 leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <!-- Hover Effect -->
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center group cursor-pointer"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              class="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="counter" :data-target="stat.number">0</span
              >{{ stat.suffix }}
            </div>
            <p class="text-gray-300 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Work Preview -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <span class="text-gradient">Work</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we bring creative visions to
            life
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in featuredProjects"
            :key="index"
            class="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
          >
            <div
              class="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <!-- Project Info Overlay -->
              <div
                class="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <h3 class="text-xl font-semibold text-white mb-2">
                  {{ project.title }}
                </h3>
                <p class="text-gray-200 text-sm">{{ project.category }}</p>
              </div>
            </div>

            <div class="p-6">
              <p class="text-gray-300 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/portfolio"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View All Projects
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span class="text-gradient">Stories</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <blockquote class="text-gray-300 leading-relaxed mb-6 italic">
              "{{ testimonial.content }}"
            </blockquote>

            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-4"
              >
                {{ testimonial.author.charAt(0) }}
              </div>
              <div>
                <div class="text-white font-semibold">
                  {{ testimonial.author }}
                </div>
                <div class="text-gray-400 text-sm">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div
          class="p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span class="text-gradient">Project</span>?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our creative
            expertise and innovative solutions.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <router-link
              to="/contact"
              class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started Today
            </router-link>

            <router-link
              to="/portfolio"
              class="px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-white/10"
            >
              View Our Work
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Services data
const services = ref([
  {
    title: "Graphic Design",
    description:
      "Creating stunning visual identities that capture your brand essence and engage your audience.",
    icon: "PaletteIcon",
  },
  {
    title: "Video Editing",
    description:
      "Professional video production and editing services that tell your story with impact.",
    icon: "VideoCameraIcon",
  },
  {
    title: "Social Media",
    description:
      "Strategic social media management to build your online presence and community.",
    icon: "ShareIcon",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that drive growth and maximize your ROI.",
    icon: "ChartBarIcon",
  },
]);

// Stats data
const stats = ref([
  { number: 150, suffix: "+", label: "Projects Completed" },
  { number: 50, suffix: "+", label: "Happy Clients" },
  { number: 5, suffix: "", label: "Years Experience" },
  { number: 24, suffix: "/7", label: "Support Available" },
]);

// Featured projects data
const featuredProjects = ref([
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Complete brand identity redesign for a tech startup, including logo, color palette, and brand guidelines.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Branding", "Logo Design", "Identity"],
  },
  {
    title: "Product Launch Video",
    category: "Video Production",
    description:
      "Dynamic product launch video featuring motion graphics and professional cinematography.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Video", "Motion Graphics", "Production"],
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive social media campaign that increased engagement by 300% and followers by 150%.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Social Media", "Campaign", "Strategy"],
  },
]);

// Testimonials data
const testimonials = ref([
  {
    content:
      "The team delivered exceptional results that exceeded our expectations. Their creativity and professionalism are unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    content:
      "Working with this agency transformed our brand presence. The attention to detail and strategic thinking is impressive.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
  },
  {
    content:
      "From concept to execution, they handled everything perfectly. Our social media engagement has never been higher.",
    author: "Emily Rodriguez",
    role: "Founder, Creative Studio",
  },
]);

// Counter animation
onMounted(() => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  };

  // Intersection Observer for counter animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector(".counter");
        if (counter) {
          animateCounter(counter);
        }
      }
    });
  });

  counters.forEach((counter) => {
    observer.observe(counter.parentElement);
  });
});
</script>

<style scoped>
/* Text gradient animation */
.animate-text-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Floating background elements */
.floating-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: float 6s ease-in-out infinite;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #06b6d4, #8b5cf6);
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.blob-3 {
  width: 250px;
  height: 250px;
  background: linear-gradient(45deg, #ec4899, #06b6d4);
  bottom: 10%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(20px) rotate(240deg);
  }
}

/* Floating particles */
.floating-particles::before,
.floating-particles::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: particles 8s linear infinite;
}

.floating-particles::before {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.floating-particles::after {
  top: 80%;
  right: 30%;
  animation-delay: 4s;
}

@keyframes particles {
  0% {
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(50px);
    opacity: 0;
  }
}

/* Transitions */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
