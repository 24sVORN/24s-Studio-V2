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
            Get In Touch
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Ready to start your next project? Let's create something amazing
            together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div
            class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <h2 class="text-3xl font-bold mb-8 text-white">
              Send us a message
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-300 mb-2">First Name</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label class="block text-gray-300 mb-2">Last Name</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label class="block text-gray-300 mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label class="block text-gray-300 mb-2"
                  >Service Interested In</label
                >
                <select
                  v-model="form.service"
                  required
                  class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="video-editing">Video Editing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-300 mb-2">Budget Range</label>
                <select
                  v-model="form.budget"
                  class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-plus">$10,000+</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-300 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <i class="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold mb-8 text-white">Let's talk</h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-8">
                We're here to help bring your vision to life. Whether you have a
                specific project in mind or just want to explore possibilities,
                we'd love to hear from you.
              </p>
            </div>

            <div class="space-y-6">
              <div
                v-for="contact in contactInfo"
                :key="contact.type"
                class="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <i :class="contact.icon" class="text-white"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-white mb-1">
                    {{ contact.type }}
                  </h3>
                  <p class="text-gray-300">{{ contact.value }}</p>
                </div>
              </div>
            </div>

            <div
              class="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50"
            >
              <h3 class="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div class="flex gap-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.platform"
                  :href="social.url"
                  class="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  budget: "",
  message: "",
});

const isSubmitting = ref(false);

const contactInfo = ref([
  {
    type: "Email",
    icon: "fas fa-envelope",
    value: "hello@creativeagency.com",
  },
  {
    type: "Phone",
    icon: "fas fa-phone",
    value: "+1 (555) 123-4567",
  },
  {
    type: "Address",
    icon: "fas fa-map-marker-alt",
    value: "123 Creative Street, Design City, DC 12345",
  },
  {
    type: "Business Hours",
    icon: "fas fa-clock",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
]);

const socialLinks = ref([
  { platform: "Instagram", icon: "fab fa-instagram", url: "#" },
  { platform: "Twitter", icon: "fab fa-twitter", url: "#" },
  { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
  { platform: "Dribbble", icon: "fab fa-dribbble", url: "#" },
]);

const submitForm = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Reset form
  form.value = {
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  };

  isSubmitting.value = false;
  alert("Thank you for your message! We'll get back to you soon.");
};
</script>
