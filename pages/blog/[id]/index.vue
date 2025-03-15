<template>
  <div class="border border-transparent">
    <div class="my-28">
      <div v-if="blog" class="card !max-w-5xl mx-auto !w-full prose">
        <div class="card-body">
          <h1>{{ blog.title }}</h1>
          <div>{{ dayjs(blog.createdAt).format("MMMM DD, YYYY") }}</div>
          <article>
            <div v-html="blog.content"></div>
          </article>

          <div class=" mb-7 py-4">
            <div class="">
              <MainMiniTitle title="Share" />
              <div class="flex gap-x-4 *:btn mt-6">
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><i class="fab fa-facebook fa-xl"></i
                ></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><i class="fab fa-twitter fa-xl"></i
                ></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><i class="fab fa-linkedin fa-xl"></i
                ></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><i class="fab fa-instagram fa-xl"></i
                ></a>
              </div>
            </div>
          </div>


          <section>
            <div>
                <MainMiniTitle title="Comments" />
                <div class="mt-5">
                    <textarea class="textarea max-w-lg w-full !outline-none bg-slate-950" rows="4" placeholder="Tell us something"></textarea>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
const route = useRoute();
const blog = ref<any>(null);
const { data } = await useFetch<any>("/api/admin/blog/" + route.params.id);

if (data.value) {
  blog.value = data.value;
}
</script>

<style scoped></style>
