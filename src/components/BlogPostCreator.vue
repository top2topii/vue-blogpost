<template>
  <div class="blog-post-creator rteditor">
    <div class="post-inputs">
      <div class="title-input">
        <error v-if="!title && formEntered">Title must bew more then 10 chracters</error>
        <Input v-model="title" placeholder="Enter a post title" />
      </div>
      <div class="cat-input">
        <error v-if="!category && formEntered">Post must have a category</error>
        <Select
          placeholder="Select a category"
          v-model="category"
          v-if="postCategories.length">
          <Option
            v-for="cat in postCategories"
            :key="cat.id"
            :value="cat.id">{{ cat.label }}
            <!-- :label="cat.label">{{ cat.label }} -->
          </Option>
        </Select>
      </div>
      <div class="image-input">
        <error v-if="!image_url && formEntered">Post must have an image</error>
        <div class="inner-image-input">
          <img :src="image_url" width="40px" height="40px" v-if="image_url" />
          <Button @click="showImageModel = true" type="primary" class="flex-center" icon="ios-camera-outline">Post Image</Button>
        </div>
      </div>
    </div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOptions"
    />
    <div class="post-actions-row">
      <Button class="btn-delete" @click="del">Delete</Button>
      <Button type="primary" @click="save">Save</Button>
      <Button type="primary" @click="publish">Publish</Button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import { Button, Input, Select } from 'iview'
import { mapGetters } from 'vuex'
import Error from './Error.vue'

export default {
  name: 'BlogPostCreator',
  components: {
    Button,
    Input,
    Select,
    quillEditor,
    Error
  },
  data() {
    return {
      testarr: [{ id:1, label:'label1' }, { id:2, label:'label2' }],
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
      ],
      showImageModel: false,
      formEntered: false
    }
  },
  watch: {
    content () {
      this.delta = this.$refs.myQuillEditor.quill.getContents()
    }
  },
  methods: {
    del() {
      // TODO
			this.formEntered = true
    },
    save() {
      // TODO
			this.formEntered = true
    },
    publish() {
      // TODO
			this.formEntered = true
    }
  },
  computed: {
    ...mapGetters(['delta'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cat-input, .title-input {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.post-inputs {
	display: grid;
	width: 90%;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	padding-bottom: 15px;
	padding-top: 15px;
	/* padding: 20px; */
}
.ql-editor {
	height: 72vh;
}
.inner-image-input {
	display: flex;
	align-items: center;
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.post-actions-row {
	display: flex;
	justify-content: space-between;
	padding: 10px;
}
.ivu-icon-ios-camera-outline {
	font-size: 16px;
}
.btn-delete {
	color: #2d8cf0!important;
	border: 1px solid #2d8cf0!important;
}
.btn-delete:hover {
	color: red!important;
	border: 1px solid red!important;
}

.rteditor {
  margin-left: 20px;
  margin-right: 20px;
}

</style>
