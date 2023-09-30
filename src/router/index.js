import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Home from "../views/website/Blogs.vue";
import CreateBlog from "../views/website/CreateBlog.vue";
import EditBlog from "../views/website/EditBlog.vue";
import AllBlogs from "../views/website/AllBlogs.vue";
const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    meta: {
      title: "Welcome",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: {
      title: "Signup",
    },
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Home,
    meta: {
      title: "My Blogs",
    },
  },
  {
    path: "/all-blogs",
    name: "allBlogs",
    component: AllBlogs,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/blogs/create",
    name: "createBlog",
    component: CreateBlog,
    meta: {
      title: "Create Blog",
    },
  },
  {
    path: "/blogs/:id/edit",
    name: "editBlog",
    component: EditBlog,
    props: true,
    meta: {
      title: "Edit blog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | SEF Blogs`;
  next();
});
export default router;
