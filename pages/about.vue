<template>
  <div class="border border-transparent">
    <div class="my-28">
      <div class="container mx-auto px-4 py-10 max-w-3xl">
        <div class="card shadow-lg rounded-2xl p-6">
          <h1 class="text-sm font-bold mb-2">About Me</h1>
          <MainTitle title="Hi, I'm Okigwe Ebube Ireneaus" />
          <br />
          <p class="text-lg">
            I'm a passionate <strong>Full Stack Developer</strong> with over
            four years of experience in designing and developing modern,
            high-performing websites. I was born and raised in Abuja, Nigeria,
            and earned my <strong>B.Sc. in Nautical Science</strong> from the
            Nigeria Maritime University, graduating in 2024.
          </p>
          <br />
          <h2 class="text-2xl font-semibold text-secondary">My Tech Journey</h2>
          <br />
          <p class="mt-2">
            I started my tech journey with a passion for learning new skills.
            Initially, I wanted to be an Android developer and learned Java, but
            due to hardware limitations, I shifted to web development—a decision
            that changed everything.
          </p>
          <br />
          <p class="mt-2">
            In 2019/2020, I immersed myself in
            <strong>HTML, CSS, JavaScript, jQuery, PHP, and MySQL</strong>,
            using free resources like
            <strong>W3Schools, YouTube, Sololearn, and GeeksforGeeks</strong>.
            Lacking mentorship, I built projects but never shared them, often
            deleting them to free up space.
          </p>
          <br />
          <p class="mt-2">
            In 2020, while in university, I landed my first freelance
            gig—developing a <strong>real estate investment website</strong>.
            Though I had doubts, I pushed through, learned from my mistakes, and
            successfully delivered the project. That experience set me on the
            path to becoming a professional developer.
          </p>
          <br />
          <p class="mt-2">
            Over time, I expanded my skill set, learning
            <strong>Vue.js, Nuxt.js, Python, Node.js, React.js, Next.js</strong
            >, and more. Today, I specialize in building dynamic and scalable
            web applications that help businesses establish a strong online
            presence.
          </p>

          <br />

          <h2 class="text-2xl font-semibold text-secondary">My Vision</h2>
          <br />
          <p class="mt-2">
            I am on a mission to build
            <strong>eye-catching, innovative, and modern websites</strong> that
            help businesses of all sizes drive sales, generate leads, and
            achieve their goals. My ultimate dream is to become a successful
            freelancer, creating impactful solutions—all while doing what I love
            most: <strong>coding</strong>.
          </p>

          <br />

          <h2 class="text-2xl font-semibold text-secondary">My Fear</h2>
          <br />
          <p class="mt-2">
            One thought that often lingers in my mind is:
            <strong>What if I fail?</strong>
          </p>
          <p class="mt-2">
            While many of my colleagues pursue traditional job roles, I continue
            to push forward in freelancing, knowing that uncertainty is part of
            the journey. But I also believe that with
            <strong>passion, consistency, and continuous learning</strong>,
            success is inevitable.
          </p>
        </div>

        <div class="card p-6">
          <h3 class="text-2xl font-semibold text-secondary">My Tech Skills</h3>

          <div class="offset-xxl-1 mt-5 grid sm:grid-cols-5 grid-cols-3 gap-2">
            <div
              v-for="img in mySkills"
              :key="img.name"
              class="rounded-lg px-2 m-1.5"
              data-aos="fade-up"
            >
              <nuxt-img
                :src="'/images/tech-logos/' + img.src"
                :alt="img.alt.toUpperCase()"
                width="80"
                height="80"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mySkills } from "~/lib/skills";
</script>

<style scoped></style>
