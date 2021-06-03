<template>
  <blog-post-creator class="rteditor"></blog-post-creator>
</template>

<script>
import BlogPostCreator from './components/BlogPostCreator.vue'

export default {
  name: 'App',
  components: {
    BlogPostCreator
  }
}
</script>

<style scoped>
h1 {
  margin-left: 20px;
  margin-top:10px;
}
.rteditor {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
