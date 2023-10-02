<template>
  <div class="blog" v-if="!state.deleted">
    <div class="blog-header">
      <div class="author d-flex align-items-center">
        <img
          :src="'http://localhost:8000/' + blog.user.image"
          class="img-fluid"
          alt=""
        />
        <h4 class="name ms-2">{{ blog.user.name }}</h4>
      </div>
      <div class="body px-5 pb-5 mt-5">
        <h2 class="title mb-2 fw-bolder text-center fs-4 alert alert-secondary">
          {{ blog.title }}
        </h2>
        <p class="content fs-4">
          {{ blog.body }}
        </p>
        <div class="img">
          <img
            :src="'http://localhost:8000/' + blog.image"
            class="img-fluid"
            alt=""
          />
        </div>
        <p class="date text-muted text-end">{{ blog.date }}</p>
      </div>
    </div>
    <div class="actions text-dark d-flex gap-4">
      <i
        class="fa-solid fa-pen"
        title="edit"
        @click="$router.push({ name: 'editBlog', params: { id: blog._id } })"
      ></i>
      <i class="fa-solid fa-trash" title="delete" @click="delete_blog"></i>
    </div>
  </div>
</template>

<script>
import Api from "@/axios";
import { reactive } from "vue";
import { toast } from "vue3-toastify";

export default {
  props: ["blog"],
  setup(props) {
    const state = reactive({
      deleted: false,
    });

    const delete_blog = async () => {
      try {
        const res = await Api.delete("/blogs/" + props.blog._id);

        if (res.status === 200) {
          state.deleted = true;
          toast.success("Blog deleted successfully", {
            autoClose: 1500,
          });
        } else {
          toast.error(res.response.data.message, {
            autoClose: 2000,
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 1000,
        });
      }
    };

    return { delete_blog, state };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 40px 0;
  position: relative;
  .body {
    .img {
      text-align: center;
      img {
        max-height: 400px;
      }
    }
  }
  .actions {
    position: absolute;
    right: 50px;
    top: 20px;
    font-size: 1.2rem;
    i {
      cursor: pointer;
      transition: all 0.3s ease;
      &.fa-pen {
        color: blue;
      }
      &.fa-trash {
        color: crimson;
      }
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>
