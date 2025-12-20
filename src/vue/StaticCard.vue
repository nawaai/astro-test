<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <small>Rendered statically with Vue</small>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  message: String
})
</script>
