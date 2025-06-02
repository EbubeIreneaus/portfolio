<template>
<div class="card max-w-sm bg-slate-950" data-aos="fade-up">
  <div class="card-body flex flex-col h-full">
    <NuxtImg
      :src="`/images/project/${project.Image}`"
      :alt="`portfolio project - ${project.title}`"
      format="webp"
      width="300px"
      height="150px"
      densities="x1"
      class="w-full object-cover mb-4"
    />

    <!-- Main content area with title, desc, and buttons -->
    <div class="flex flex-col justify-between flex-1 gap-y-5">
      <div>
        <p class="text-lg mb-2">
          <strong>{{ project.title }}</strong>
        </p>
        <p class="text-sm mb-4">
          {{ project.desc }}
        </p>
      </div>
      
      <div class="flex gap-5 mt-auto">
        <a class="!btn !btn-sm !bg-slate-900 !border-0" :href="project.link.web"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        <a
          class="!btn !btn-sm !border-0"
          :class="project.link.github ? '!bg-slate-900 ' : 'bg-slate-900/20 !cursor-not-allowed'"
          :href="project.link.github ?project.link.github: 'javascript:void(0)'"
        >
          <i class="fab fa-github" ></i>
        </a>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import {Projects} from '~/lib/projects'
defineProps<{
  project: typeof Projects[0]
}>();
</script>

<style scoped></style>
