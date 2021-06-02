<template>
  <div class="blog-post-creator">
    <div class="post-inputs">
      <div class="title-input">
        <error>Title must bew more then 10 chracters</error>
        <Input v-model="title" placeholder="Enter a post title" />
      </div>
      <div class="cat-input">
        <error>Post must have a category</error>
        <Select
          placeholder="Select a category"
          v-model="category"
          v-if="postCategories.length"
        >
          <Option
            v-for="(cat, index) in postCategories"
            :key="index"
            :value="cat.id"></Option>
      </div>
      <div class="image-input">
        <error>Post must have an image</error>
      </div>
    </div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOptions"
    />
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import { Button, Input, Select } from 'iview'
import Error from './Error.vue'

export default {
  name: 'BlogPostCreator',
  components: {
    Buttons,
    Input,
    Select,
    quillEditor,
    Error
  },
  data: () => ({
    title: '',
    category: '',
    image_url: '',
    content: '',
    editorOptions: {
      debug: 'info',
      placeholder: 'Type your post...',
      readOnly: true,
      theme: 'snow'
    },
    delta: undefined,
    postCategories: [
      {
        id:1,
        label: 'NodeJS',
        img: 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png?w=200'
      },
      {
        id:2,
        label: 'Javascript',
        img: 'https://cdn.auth0.com/blog/js-fatigue/JSLogo.png'
      }
    ]
  }),
  watch: {
    content () {
      this.delta = this.$refs.myQuillEditor.quill.getContents()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.ql-editor {
  height: 72vh;
}
</style>
