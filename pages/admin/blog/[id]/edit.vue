<template>
  <main class="min-h-screen bg-slate-200">
    <h2 class="text-3xl font-bold p-3 mb-3">Edit Blogpost</h2>
    <div class="grid grid-cols-4 ">
      <div class="card lg:col-span-3 col-span-4">
        <div class="card-body">
          <div>
            <div class="mb-6">
              <label for="title" class="px-2 font-semibold">Title</label>
              <input
                type="text"
                class="input input-lg input-bordered w-full border-0 border-b-2 !outline-none"
                id="title"
                placeholder="Title"
                v-model="form.title"
              />
            </div>
            <div class="mb-3 ">
              <client-only>
                <editor
                v-model="form.content"
                  :api-key="$config.public.tinymaceEditorApiKey"
                  :init="{
                  
                    plugins: [
                      'advlist',
                      'autolink',
                      'link',
                      'image',
                      'lists',
                      'charmap',
                      'preview',
                      'anchor',
                      'pagebreak',
                      'searchreplace',
                      'wordcount',
                      'visualblocks',
                      'visualchars',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'emoticons',
                      'help',
                      'codesample'
                    ],
                    toolbar:
                      'undo redo | styles | bold italic codesample | alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                      'forecolor backcolor emoticons | help',
                    menu: {
                      favs: {
                        title: 'My Favorites',
                        items: 'code visualaid | searchreplace | emoticons',
                      },
                    },
                    menubar:
                      'favs file edit view insert format tools table help',
                  }"
                />
              </client-only>
            </div>
          </div>
        </div>
      </div>

      <div class="card lg:min-h-screen lg:col-span-1 col-span-4">
        <div class="card-body">
          <div class="mt-6 mb-4">
            <label for="title" class="font-semibold mb-1 block"
              >Description:</label
            >
            <textarea
              class="textarea textarea-bordered !border !outline-none w-full"
              rows="2"
               v-model="form.desc"
            ></textarea>
          </div>
          <div class="mb-5">
            <label for="title" class="font-semibold mb-1 block"
              >OG Image Link:</label
            >
            <input type="url" class="input input-md w-full bottom-0 border-b-2 !outline-none"  v-model="form.image">
          </div>
          <button type="button" class="btn btn-primary" @click="update">update</button>
          <button type="button" class="btn btn-secondary mx-7" v-if="form.published">Unpublish</button>
          <button type="button" class="btn btn-secondary mx-7" v-else>Publish</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type plugin from "@tailwindcss/typography";
import Editor from "@tinymce/tinymce-vue";
import { ToastError, ToastSuccess } from "~/lib/notify";
definePageMeta({
  layout: 'admin'
})
const id = useRoute().params.id
const form = ref({
  title: '',
  content: '',
  desc: '',
  image: '',
  published: false
})

const {data} = await useFetch<any>('/api/admin/blog/'+id)

if(data.value){
  form.value = data.value
}else{
  ToastError('Blogpost not found')
  useRouter().push('/admin/')
}

async function update(){
  try {
    const res = await $fetch<any>(`/api/admin/blog/${id}/update`, {
      method: "POST",
      body: form.value
    })

    if (res.statusCode == 200) {
     return ToastSuccess('Blogpost updated successfully')
    }
  } catch (error) {
    console.log(error)
    return ToastError('Error saving blogpost')
  }
}
</script>

<style scoped></style>
