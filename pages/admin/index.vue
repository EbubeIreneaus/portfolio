<template>
    <main>
        <div class="w-screen h-screen  grid place-content-center">
            <div class="max-w-2xl w-full card">
                <div class="size-full grid grid-cols-2 gap-x-5 gap-y-8 card-body ">
                    <nuxt-link to="/admin/analytic">
                       <div class="btn btn-lg btn-primary px-10">
                        Analytics <i class=""></i>
                       </div>
                    </nuxt-link>
                    <nuxt-link to="/admin/blog">
                       <div class="btn btn-lg btn-primary px-10">
                        Blogs <i class=""></i>
                       </div>
                    </nuxt-link>
                    <nuxt-link to="/admin/project">
                       <div class="btn btn-lg btn-primary px-10">
                        Projects <i class=""></i>
                       </div>
                    </nuxt-link>
                    <nuxt-link to="/admin/blog">
                       <div class="btn btn-lg btn-primary px-10">
                        Messages <i class=""></i>
                       </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin',
})
</script>

<style scoped>

</style>