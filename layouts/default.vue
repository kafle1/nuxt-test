<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-teal-600 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">Awesome Nuxt Blog</NuxtLink>

        <nav class="space-x-4">
          <NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-300">About</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white text-center py-2">
      <p>&copy; 2023 Awesome Nuxt Blog. All rights reserved. @kafle1</p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>
