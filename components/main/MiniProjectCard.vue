<template>
  <div class="card max-w-sm bg-slate-950"  data-aos="fade-up">
    <div class="card-body">
      <NuxtImg
        :src="`/images/project/${project.Image}`"
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
            <a class="!btn !btn-md" :href="project.link.web">Visit</a>
            <a class="!btn !btn-md" :class="{'!hidden': !project.link.github}" :href="project.link.github" >source code</a>
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
