<template>
  <div>
    <nuxt-layout>
      <NuxtLoadingIndicator />
      <nuxt-page />
    </nuxt-layout>
    <MainSplashScreen />
  </div>
</template>

<script setup lang="ts">
const seo_desc = "I'm a passionate Full Stack Developer with years of experience in designing and developing modern, high-performing websites. I was born and raised in Abuja, Nigeria, and earned my B.Sc. in Nautical Science from the Nigeria Maritime University, graduating in 2024."
useSeoMeta({
  ogTitle: 'Ebube Ireneaus (Ebustech) Software Developer Portfolio',
  description: seo_desc,
  ogDescription: seo_desc,
  ogImage: 'https://ebustech.vercel.app/images/ogimage1.jpg',
  twitterCard: 'summary_large_image',
  applicationName: 'Ebube Ireneaus',
  ogImageAlt: 'black and white image of Ebustech CEO (Ebube Ireneaus) Sitting on his officce looking at his laptop while writing code',
  ogUrl: 'https://ebustech.vercel.app',
  ogType: 'website',
  
})
</script>
