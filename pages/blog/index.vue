<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    const blogs = ref([])

    const {data: getBlogs} = await useFetch('/api/main/blog/all?len=100')
</script>

<style scoped>

</style>