<template>
  <div class="add-blog">
    <Header />
    <div class="container">
      <form @submit.prevent="create">
        <div class="form-field">
          <label>Blog title</label>
          <input type="text" placeholder="title.." />
          <span class="text-danger" v-if="v$.title.$error">
            {{ v$.title.$errors[0].$message }}
          </span>
        </div>
        <div class="form-field">
          <label>Blog body</label>
          <textarea placeholder="write your content ..."></textarea>
          <span class="text-danger" v-if="v$.body.$error">
            {{ v$.body.$errors[0].$message }}
          </span>
        </div>
        <div class="form-field img">
          <img
            src="../../assets/imgPlaceholder.jpg"
            class="img-fluid img-placeholder"
            alt=""
            ref="placeholder"
          />
          <input type="file" id="img" hidden @change="previewImage" />
          <label for="img" class="mt-5">Upload Image</label>
        </div>
        <div class="text-center">
          <button>Create</button>
        </div>
      </form>
    </div>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import Header from "@/components/website/Header.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { reactive, ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { toast } from "vue3-toastify";

export default {
  components: { Header, SpinnerLoading },
  setup() {
    const state = reactive({
      loading: false,
      title: "",
      body: "",
      img: "",
    });

    const placeholder = ref(null);

    const rules = computed(() => {
      return {
        title: { required },
        body: { required, minLength: minLength(50) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const previewImage = (e) => {
      state.img = e.target.files[0];
      placeholder.value.src = URL.createObjectURL(state.img);
    };

    const create = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;
        try {
        } catch (err) {
          toast.error(err, {
            autoClose: 1000,
          });
        }
        state.loading = false;
      } else {
        toast.error("Missing Data", {
          autoClose: 1000,
        });
      }
    };
    return { state, create, v$, placeholder, previewImage };
  },
};
</script>

<style lang="scss" scoped>
.add-blog {
  form {
    max-width: 720px;
    margin: 40px auto;
    .form-field {
      margin: 50px 0;
      label {
        display: block;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 1.4rem;
      }
      input,
      textarea {
        width: 100%;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #111;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          font-size: 1.4rem;
        }
      }
      textarea {
        min-height: 100px;
      }
      &.img {
        text-align: center;
        label {
          background: #20c997;
          color: #fff;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      img {
        width: 400px;
      }
    }
    button {
      width: 100%;
      font-size: 1.4rem;
      border: none;
      font-weight: bold;
      background: #212529bf;
      color: #fff;
      border-radius: 10px;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
