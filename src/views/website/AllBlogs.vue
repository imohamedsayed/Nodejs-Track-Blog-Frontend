<template>
  <div class="blogs">
    <Header />
    <div class="container">
      <div class="blogs" v-if="state.blogs.length">
        <Blog v-for="blog in state.blogs" :key="blog.title" :blog="blog" />
      </div>
      <div class="no-blogs" v-else>
        <img src="../../assets/noBlogs.svg" class="img-fluid" alt="" />
        <p>There is no blogs posted yet..</p>
      </div>
    </div>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import Header from "@/components/website/Header.vue";
import { computed, onMounted, reactive } from "vue";

import Blog from "@/components/website/allBlogsc/Blog.vue";

import { useStore } from "vuex";
import Api from "../../axios";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

export default {
  components: { Header, Blog, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      blogs: [],
      loading: false,
      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (!state.user || !state.user?.isAdmin) {
        router.push("/login");
      }

      state.loading = true;

      try {
        const res = await Api.get("/blogs/");

        if (res.status == 200) {
          state.blogs = res.data.blogs;
        } else {
          toast.error(res.response.data.message, {
            autoClose: 1000,
          });
        }
      } catch (error) {
        toast.warning("Something went wrong when loading blogs", {
          autoClose: 1000,
        });
      }

      state.loading = false;
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.blogs {
  .no-blogs {
    text-align: center;
    img {
      width: 600px;
    }
    p {
      font-size: 1.5rem;
      font-weight: bold;
      a {
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}
</style>
