<template>
  <main>
    <MainHero />
     <MainAboutMyself />
      <MainMyServiceComp />
      <MainSpecialSkill />

    <div class="card" id="projects">
      <div class="card-body" >
        <MainTitle title="Projects" />
        <br />

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-10">
          <MainMiniProjectCard
            :project="pr"
            v-for="pr, index in projects"
            :key="index"
           
          />
        </div>
      </div>
    </div>

    <div id="blog"  class="card">
      <div class="card-body">
        <MainTitle title="Must Read" />
        <br />

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-10">
          <MainSingleBlog :blog="bl" v-for="bl in blogs" :key="bl.id" />
        </div>
      </div>

      <div class="card">
        <div
          class="card-body grid lg:grid-cols-2 gap-y-5  place-content-center min-h-[500px]"
        >
          <div class="flex flex-col justify-center px-6">
            <MainTitle title="Contact Me" />
            <div class="h-fit my-7" data-aos="fade-right">
              Need a high-performing website or SEO optimization? I deliver
              expert web development tailored to your needs. Let’s bring your
              vision to life—contact me today!
            </div>
            <div class="mb-7 flex flex-col md:flex-row gap-4" >
              <div class="card rounded" data-aos="fade-right">
                <div class="card-body rounded bg-slate-950" >
                  <i class="fa fa-envelope text-secondary"></i>
                  <a href="mailto:ebubeireneaus@gmail.com" target="_blank" rel="noopener noreferrer">ebubeireneaus@gmail.com</a>
                </div>
              </div>

              <div class="card" data-aos="fade-left">
                <div class="card-body rounded bg-slate-950">
                  <i class="fab fa-whatsapp text-secondary"></i>
                  <a  href="https://wa.me/+2348061982520" target="_blank" rel="noopener noreferrer">+234 806 198 2520</a>
                </div>
              </div>
            </div>

            <div class="card" data-aos="fade-up">
              <div class="card-body rounded bg-slate-950">
                <h6 class="text-xl mb-3">Socials</h6>
            <div class="flex gap-x-5 *:text-slate-300">
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><i class="fab fa-facebook fa-lg"></i
              ></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><i class="fab fa-twitter fa-lg"></i
              ></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><i class="fab fa-linkedin fa-lg"></i
              ></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><i class="fab fa-tiktok fa-lg"></i
              ></a>
            </div>
              </div>
            </div>
          </div>

          <div class="" id="contact" data-aos="fade-up">
            <MainContactForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { mySkills } from '~/lib/skills';
import { Projects as projects}  from '~/lib/projects';

const blogs = ref<any>([]);
const { data: getBlogs } = await useFetch<any>("/api/main/blog/all?len=10&mini=true");


if (getBlogs.value) {
  blogs.value = getBlogs.value;
}
</script>

<style scoped></style>
