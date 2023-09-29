<template>
  <header class="p-4 d-flex justify-content-between align-items-center">
    <div
      class="logo d-flex justify-content-between align-items-center"
      @click="$router.push('/')"
    >
      <img src="@/assets/blog.png" class="img-fluid" alt="" />
      <h3>SEF Blogs</h3>
    </div>
    <div class="navs">
      <router-link to="/signup" class="btn btn-dark me-4"> Signup </router-link>
      <router-link to="/login" class="btn btn-outline-dark">
        Login
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  .logo {
    cursor: pointer;
    h3 {
      margin: 0;
    }
    img {
      width: 60px;
      margin-right: 10px;
    }
  }
}
</style>
