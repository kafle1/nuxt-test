<template>
  <div>
    <template v-if="post">
      <BlogPost :post="post" />
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script setup>
const route = useRoute();
const postId = route.params.id;

const response = await useFetch("/api/post/" + postId);
post = response.data.value;
</script>

<style scoped></style>
