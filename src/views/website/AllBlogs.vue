<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="blogs">
        <Blog v-for="blog in state.blogs" :key="blog.title" :blog="blog" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/website/Header.vue";
import { onMounted, reactive } from "vue";
import Blog from "@/components/website/allBlogs/Blog.vue";
export default {
  components: { Header, Blog },
  setup() {
    const state = reactive({
      blogs: [],
    });

    onMounted(() => {
      state.blogs = [
        {
          user: {
            name: "Mohamed Sayed",
            email: "mso@gmail.com",
            pic: "user.jpg",
          },
          title: "Vue.js",
          body: "Vue.js is a progressive JavaScript framework for building user interfaces. It emphasizes simplicity and flexibility, making it easy to integrate into projects. Vue uses a component-based architecture for building interactive web applications.",
          image: "blogImg.jpg",
          date: "11/9/2023",
        },
        {
          user: {
            name: "Mohamed Sayed",
            email: "mso@gmail.com",
            pic: "user.jpg",
          },
          title: "Vue.js",
          body: "Vue.js is a progressive JavaScript framework for building user interfaces. It emphasizes simplicity and flexibility, making it easy to integrate into projects. Vue uses a component-based architecture for building interactive web applications.",
          image: "blogImg.jpg",
          date: "11/9/2023",
        },
      ];
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped></style>
