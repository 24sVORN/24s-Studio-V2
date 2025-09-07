<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <img
            :src="logoUrl"
            alt="logo"
            class="w-28 h-28 object-contain"
            decoding="async"
            fetchpriority="high"
            loading="eager"
          />
        </router-link>
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @mouseenter="prefetchRoute(item.path)"
            class="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
            :class="{ 'text-white': $route.path === item.path }"
          >
            {{ item.name }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              :class="{ 'scale-x-100': $route.path === item.path }"
            ></span>
          </router-link>
        </div>

        <!-- Action Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link
            to="/portfolio"
            @mouseenter="prefetchRoute('/portfolio')"
            class="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all duration-300 hover:scale-105"
          >
            View Work
          </router-link>
          <router-link
            to="/contact"
            @mouseenter="prefetchRoute('/contact')"
            class="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Quote
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
      >
        <div class="px-4 py-4 space-y-4">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            @mouseenter="prefetchRoute(item.path)"
            class="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
            :class="{
              'text-white bg-gray-800 rounded-lg': $route.path === item.path,
            }"
          >
            {{ item.name }}
          </router-link>
          <div class="pt-4 space-y-2">
            <router-link
              to="/portfolio"
              @click="closeMobileMenu"
              @mouseenter="prefetchRoute('/portfolio')"
              class="block w-full px-4 py-2 text-center text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all duration-300"
            >
              View Work
            </router-link>
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              @mouseenter="prefetchRoute('/contact')"
              class="block w-full px-4 py-2 text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300"
            >
              Get Quote
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { prefetchRoute } from "../router";
import logoUrl from "../assets/Logo/24s-Logo-white.png";

const mobileMenuOpen = ref(false);

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
