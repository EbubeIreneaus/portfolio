<template>
    <div class="card">
        <div class="card-body bg-slate-950">
            <form @submit.prevent="sendMsg">
                <div class="mb-5">
                    <label for="title" class="font-semibold mb-1 block"
                        >Name:</label
                    >
                    <input type="text" class="input input-md w-full bottom-0 border-b-2 !outline-none text-black" placeholder="fullname"  v-model="form.name" required />
                </div>
                <div class="mb-5">
                    <label for="title" class="font-semibold mb-1 block"
                        >Email:</label
                    >
                    <input type="email" class="input input-md w-full bottom-0 border-b-2 !outline-none text-black" placeholder="email"  v-model="form.email" required />
                </div>
                <div class="mb-5">
                    <label for="title" class="font-semibold mb-1 block"
                        >Message:</label
                    >
                    <textarea
                        class="textarea textarea-bordered !border !outline-none w-full text-black"
                        rows="2"
                        v-model="form.message"
                        required
                    ></textarea>
                </div>
                <button :disabled="isLoading" type="submit" class="!btn !btn-md btn-primary">
                   <i class="fa fa-spinner animate-spin" v-if="isLoading"></i>
                   send
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ToastError, ToastSuccess } from '~/lib/notify'

const isLoading = ref(false)

const form = reactive({
    name: '',
    email: '',
    message: ''
})
async function sendMsg(){
    isLoading.value = true

    try {
        const req = await $fetch<any>("/api/main/createMsg", {
            method: 'POST',
            body: form
        })

        if (req.statusCode == 201) {
            ToastSuccess("message recieved 🤗")
            form.message = ""
            form.email =''
            form.name = ''
            return true
        }

    } catch (error) {
        console.log(error)
        return ToastError('Server Error 😪')
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>

</style>