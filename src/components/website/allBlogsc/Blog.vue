<template>
  <div class="blog">
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
}
</style>
