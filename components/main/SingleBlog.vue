<template>
  <div class="card max-w-sm bg-slate-950"  data-aos="fade-up">
    <div class="card-body">
      <NuxtImg
        :src="blog.image"
        :alt="`portfolio blog - ${blog.title}`"
        format="webp"
        width="300px"
        height="150px"
        densities="x1"
        class="w-full object-cover"
      />
      <div>
        <div class="mb-2">
            <span class="text-slate-400">{{ dayjs(blog.createdAt).format('MMMM DD, YYYY') }}</span>
        </div>
        <h2 class="text-xl mb-3 line-clamp-2 text-ellipsis">
          <strong>{{ blog.title }}</strong>
        </h2>
        <p class="line-clamp-2 mb-3">{{ blog.desc }}</p>

        <RouterLink :to="`/blog/${blog.id}?title=${blog.title}`" class="!btn !btn-md">Read More</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{
  blog: {
    id: number;
    title: string;
    image: string;
    createdAt: string;
    link: string;
    desc: string;
  };
}>();

</script>

<style scoped></style>
