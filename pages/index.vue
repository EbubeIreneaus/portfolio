<template>
  <main>
    <MainHero />
    <!-- about me -->
    <div class="card">
      <div class="card-body grid lg:grid-cols-2 gap-y-10">
        <div>
          <MainTitle title="About Me" />
        </div>
        <div>
          <article class="prose">
            <h3 class="text-2xl font-semibold"  data-aos="fade-right"> 
              Hi, I'm <strong>Okigwe Ebube Ireneaus</strong>
            </h3>
            <p data-aos="fade-left">
              I'm a passionate Full Stack Developer with over four years of
              experience in designing and developing modern, high-performing
              websites. I was born and raised in Abuja, Nigeria, and earned my
              B.Sc. in Nautical Science from the Nigeria Maritime University,
              graduating in 2024.
            </p>
            <h3 class="text-2xl font-semibold"  data-aos="fade-up">My Tech Skills</h3>

            <div
              class="offset-xxl-1 mt-5 grid sm:grid-cols-5 grid-cols-3 gap-2"
            >
              <div
                v-for="img in mySkills"
                :key="img.name"
                class="rounded-lg px-2 m-1.5"
                data-aos="fade-up"
              >
                <nuxt-img
                  :src="'/images/tech-logos/' + img.src"
                  :alt="img.alt.toUpperCase()"
                  width="100"
                  height="100"
                  densities="x1"
                  quality="90"
                  format="webp"
                  class=""
                />
                <figcaption class="capitalize text-caption text-center">
                  {{ img.alt.split(" ")[0] }}
                </figcaption>
              </div>
            </div>

            <nuxt-link to="/about" class="btn btn-primary btn-lg my-10" data-aos="fade-up"
              >Learn More</nuxt-link
            >
          </article>
        </div>
      </div>
    </div>
    <!-- xxx about me xxx -->

    <!--  -->
    <div class="w-[90%] mx-auto mb-10">
      <MainServiceCards />
    </div>

    <!-- project card -->
    <div class="card">
      <div class="card-body" id="project">
        <MainTitle title="Projects" />
        <br />

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-1 gap-y-10">
          <MainMiniProjectCard
            :project="pr"
            v-for="pr in projects"
            :key="pr.id"
           
          />
        </div>
      </div>
    </div>

    <!-- Blog -->
    <div class="card">
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
const projects = ref<any>([]);
const blogs = ref<any>([]);
const { data: getProjects } = await useFetch<any>("/api/main/project");
const { data: getBlogs } = await useFetch<any>("/api/main/blog/all?len=10&mini=true");

if (getProjects.value.data) {
  projects.value = getProjects.value.data;
}

if (getBlogs.value) {
  blogs.value = getBlogs.value;
}
</script>

<style scoped></style>
