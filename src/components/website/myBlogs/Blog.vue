<template>
  <div class="blog">
    <div class="blog-header">
      <div class="author d-flex align-items-center">
        <img src="../../../assets/user.jpg" class="img-fluid" alt="" />
        <h4 class="name ms-2">{{ blog.user.name }}</h4>
      </div>
      <div class="body px-5 pb-5">
        <h2 class="title text-center mb-2 fw-bolder">{{ blog.title }}</h2>
        <p class="content">
          {{ blog.body }}
        </p>
        <div class="img">
          <img src="../../../assets/blogImg.jpg" class="img-fluid" alt="" />
        </div>
        <p class="date text-muted text-end">{{ blog.date }}</p>
      </div>
    </div>
    <div class="actions text-dark d-flex gap-4">
      <i
        class="fa-solid fa-pen"
        title="edit"
        @click="$router.push({ name: 'editBlog', params: { id: 1 } })"
      ></i>
      <i class="fa-solid fa-trash" title="delete"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog"],
  setup(props) {},
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
