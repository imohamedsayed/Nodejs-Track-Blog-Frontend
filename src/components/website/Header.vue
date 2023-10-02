<template>
  <header class="d-flex align-items-center justify-content-between mb-5">
    <div
      class="logo d-flex justify-content-between align-items-center"
      @click="$router.push('/')"
    >
      <img src="@/assets/blog.png" class="img-fluid" alt="" />
      <h3>SEF Blogs</h3>
    </div>
    <div class="navs text-center">
      <router-link to="/all-blogs" v-if="state.user?.isAdmin"
        >Blogs</router-link
      >
      <router-link to="/blogs">My Blogs</router-link>
      <router-link to="/blogs/create">Create a blog</router-link>
    </div>
    <div class="public">
      <div class="d-flex align-items-center" v-if="state.user">
        <div class="img me-2">
          <img :src="'http://localhost:8000/' + state.user.image" alt="" />
        </div>
        <div class="info pe-2">
          <p class="m-0 fw-bold">{{ state.user.name }}</p>
          <span class="text-muted me-3">{{
            state.user.isAdmin ? "Admin" : "User"
          }}</span>
          <span class="dropdown">
            <i
              class="fa-solid fa-chevron-down options"
              aria-expanded="false"
              type="button"
              data-bs-toggle="dropdown"
            ></i>
            <ul class="dropdown-menu me-5">
              <li>
                <a
                  class="dropdown-item text-danger fw-bold"
                  href="#"
                  @click="logout"
                >
                  <i class="fa-solid fa-door-open fa-bounce me-2"></i>Logout</a
                >
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div v-else>
        <button @click="$router.push('/login')">Login</button>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user) || null,
    });

    const logout = async () => {
      await store.dispatch("Logout");
      router.push("/");
    };
    return { state, logout };
  },
};
</script>

<style lang="scss" scoped>
header {
  @media (max-width: 461px) {
    flex-direction: column-reverse;
    gap: 20px;
    justify-content: flex-end;
  }
  padding: 20px 40px;
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
  .navs {
    a {
      margin: 0 10px;
      font-weight: bold;
      font-size: 1.2rem;
      color: #222;
      text-decoration: none;
      padding: 10px 18px;
      transition: all 0.3s ease;
      border-radius: 10px;
      &:hover {
        font-size: 1.4rem;
      }
      &.router-link-exact-active {
        background: #111;
        color: white;
      }
    }
  }
  .public {
    button {
      width: 120px;
      height: 40px;
      border: none;
      outline: none;
      background: linear-gradient(to bottom right, black, #777);
      opacity: 0.9;
      border-radius: 10px;
      color: white;
      transition: all 0.3s ease;
      &:hover {
        opacity: 1;

        font-size: 1.2rem;
      }
    }
    .img {
      img {
        border-radius: 50px;
        width: 50px !important;
        margin-right: 10px;
        height: 50px;
      }
    }
    .info {
      .options {
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 10px;
        border-radius: 50px;
        &:hover {
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
