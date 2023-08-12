<template>
  <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mb-4">
    <div class="text-gray-600 mb-2">{{ formatDate(post.createdAt) }}</div>
    <h2 class="text-xl font-semibold mb-4">{{ post.title }}</h2>
    <p class="text-gray-800 mb-6">{{ post.content }}</p>
    <div class="flex items-center">
      <img
        class="w-10 h-10 rounded-full mr-3"
        :src="post.user.avatar"
        alt="User Avatar"
      />
      <div>
        <p class="text-gray-700">{{ post.user.username }}</p>
        <p class="text-gray-500 text-sm">{{ post.user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },
  },
};
</script>

<style scoped></style>
