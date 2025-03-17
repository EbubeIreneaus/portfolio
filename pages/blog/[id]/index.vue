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

          <div class="mb-7 py-4">
            <div class="">
              <MainMiniTitle title="Share" />
              <div class="flex gap-x-4 *:btn mt-6">
               <button class="btn btn-md" @click="shareWeb">Share <i class="fa fa-share"></i></button>
              </div>
            </div>
          </div>

          <!-- <section>
            <div>
              <MainMiniTitle title="Comments" />
              <div class="mt-5">
                <textarea
                  class="textarea max-w-lg w-full !outline-none bg-slate-950"
                  rows="4"
                  placeholder="Tell us something"
                ></textarea>
              </div>
            </div>
          </section> -->
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

const shareWeb = () => {
  if (navigator.share) {
    navigator
      .share({
        title: blog.value.title,
        text: blog.value.desc,
        url: window.location.href,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
};

useSeoMeta({
  title: computed(() => blog.value?.title || "Blog | Ebube Ireneaus"),
  ogTitle: computed(() => blog.value?.title || "Blog | Ebube Ireneaus"),
  description: computed(
    () => blog.value?.desc || "Read insightful blog posts."
  ),
  ogDescription: computed(
    () => blog.value?.desc || "Read insightful blog posts."
  ),
  ogImage: computed(
    () =>
      blog.value?.image || "https://ebustech.vercel.app/default-og-image.jpg"
  ),
  twitterCard: "summary_large_image",
  applicationName: "Ebube Ireneaus",
  ogImageAlt: computed(() => blog.value?.title || "Blog Post"),
  ogUrl: computed(() =>
    blog.value
      ? `https://ebustech.vercel.app/blog/${blog.value.id}?title=${blog.value.title}`
      : "https://ebustech.vercel.app/blog"
  ),
  ogType: "article",
  author: "Ebube Ireneaus",
  publisher: "Ebube Ireneaus",
});
</script>

<style scoped></style>
