<template>
  <div class="card max-w-sm bg-slate-950"  data-aos="fade-up">
    <div class="card-body">
      <NuxtImg
        :src="project.image"
        :alt="`portfolio project - ${project.title}`"
        format="webp"
        width="300px"
        height="150px"
        densities="x1"
        class="w-full object-cover"
      />
      <div>
        <p class="text-lg mb-4">
          <strong>{{ project.title }}</strong>
        </p>
        <div class="flex gap-5">
            <a class="btn btn-md" :href="project.link">Visit</a>
            <a class="btn btn-md" :href="project.github">source code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    image: string;
    link: string;
    github: string;
  };
}>();
</script>

<style scoped></style>
