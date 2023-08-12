<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <NuxtLink v-for="post in posts" :key="post.id" :to="`/blog/${post.id}`">
      <BlogPost :post="post" />
    </NuxtLink>
  </div>
</template>

<script setup>
const response = await useFetch("/api/posts");
const posts = response.data.value;
console.log("posts: ", posts);
</script>
