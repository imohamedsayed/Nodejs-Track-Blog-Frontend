<template>
  <div class="landing-page">
    <LandingHeader />
    <div class="container">
      <div class="intro">
        <div class="intro-content">
          <p class="h1">Write useful &amp; good blogs</p>
          <p class="text-muted">
            this is a blog website where you can write your blogs and read
            others' blogs
          </p>
          <div class="actions">
            <button class="btn start-now" @click="$router.push('/blogs')">
              Start Now
            </button>
          </div>
        </div>
        <img src="../assets/blog_i.jpg" alt="" class="back-photo" />
        <div class="blog-img">
          <img src="../assets/blog_i.jpg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
export default {
  components: { LandingHeader },
};
</script>

<style lang="scss" scoped>
.landing-page {
  .intro {
    padding-top: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: 40px;
    height: calc(100vh - 380px);
    @media (max-width: 592px) {
      height: calc(100vh - 80px);
      padding-top: 0;
    }

    .back-photo {
      position: absolute;
      width: 500px;
      z-index: -1;
      right: -250px;
      opacity: 0.4;
      display: none;
      @media (max-width: 768px) {
        display: inline;
      }
    }
    justify-content: space-around;
    .intro-content {
      @media (max-width: 768px) {
        backdrop-filter: blur(2px);
        padding: 10px;
      }
      p {
        &.h1 {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 30px;
          @media (max-width: 592px) {
            font-size: 30px;
          }
        }
        &.text-muted {
          font-size: 1.2rem;
          margin-bottom: 30px;
          @media (max-width: 592px) {
            font-size: 1rem;
          }
        }
      }
      button {
        width: 150px;
        height: 60px;
        font-size: 1.3rem;
        @media (max-width: 450px) {
          width: 100px;
          height: 60px;
          font-size: 1rem;
        }
        &.start-now {
          background: #222;
          color: #fff;
          border-top-right-radius: 25px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;

          transition: all 0.3s ease-in-out;
          &:hover {
            background: #444;
          }
        }
      }
    }
    .blog-img {
      img {
        width: 700px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
