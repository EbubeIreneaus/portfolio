<template>
    <div
      class="w-full min-h-screen flex justify-center items-center bg-slate-200"
    >
      <div class="max-w-lg w-full card border mx-auto bg-slate-300">
        <div class="card-body">
          <h2 class="text-3xl font-bold mb-3">Edit Project</h2>
          <form @submit.prevent="save">
            <div class="mb-1">
              <label class="label label-text font-semibold">Project Title</label>
              <input
                type="text"
                class="input input-md w-full input-bordered outline-none"
                required
                v-model="form.title"
              />
            </div>
            <div class="flex gap-3 mb-1">
              <div class="w-full">
                <label class="label label-text font-semibold">Project URL</label>
                <input
                  type="url"
                  class="input input-md w-full input-bordered outline-none"
                  v-model="form.link"
                  required
                />
              </div>
              <div class="w-full">
                <label class="label label-text font-semibold">Source Code</label>
                <input
                  type="url"
                  v-model="form.github"
                  class="input input-md w-full input-bordered outline-none"
                />
              </div>
            </div>
            <div class="mb-1">
              <label class="label label-text font-semibold">Image URL</label>
              <input
                type="url"
                v-model="form.image"
                class="input input-md w-full input-bordered outline-none"
                required
              />
            </div>
            <div class="mb-1">
              <label class="label label-text font-semibold">Skills</label>
              <input
                type="text"
                v-model="form.skills"
                class="input input-md w-full input-bordered outline-none"
                required
              />
            </div>
            <div class="mb-3">
              <label class="label label-text font-semibold">Description</label>
              <textarea
                class="textarea textarea-md w-full"
                rows="1"
                v-model="form.content"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-md btn-outline">
              Save Project
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ToastError, ToastSuccess } from '~/lib/notify';
  
  definePageMeta({
    layout: "admin",
  });
  const id = useRoute().params.id;
  const {data} = await useFetch<any>('/api/admin/project/'+id)

  const form = ref({
    title: "",
    link: "",
    github: "",
    content: "",
    image: "",
    skills: "",
    category: 'website'
  });
  
  if(data.value){
    form.value = data.value.data
  }

  async function save() {
    try {
      const res = await $fetch(`/api/admin/project/${id}/update`, {
        method: "POST",
        body: form.value,
      });
  
      if (res.statusCode === 200) {
        return ToastSuccess('Project updated successfully')
      }
    } catch (error) {
      console.log(error);
      ToastError('Failed to add project')
    }
  }
  </script>
  
  <style scoped></style>
  