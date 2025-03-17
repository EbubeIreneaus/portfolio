<template>
  <div id="about">
    <div class="my-10 mx-auto block">
      <div class="container px-3  ">
        <div class="row">
          <div class="col-12">
            <!-- Start Section Content -->
            <div class="section-content">
              <span class="section-tag" data-aos="fade-up">About Me</span>
              <h2 class="section-title" data-aos="fade-right">More About Myself</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>
      </div>

      <div class="first-sec-about p-lg-1 p-2">
        <div class="about-me-txt lg:p-5">
          <div class="text-light !px-5 md:!px-px text-balance">
            <nuxt-img
              src="/images/ogimage.jpg"
              alt="Ebube Ireneaus Sitting on a public chair stairing at his laptop screen while adjusting his collar"
              width="100"
              height="100"
              format="webp"
              densities="x1"
              class="float-left px-4 size-80 rounded object-cover hidden md:inline-block w-[300px]"
              data-aos="fade-right"
            />
            <p
              class="txt text-light text-subtitle1 leading-loose"
              data-aos="fade-left"
            >
              Passionate Full-Stack Developer with a focus on creating seamless
              web applications. Proficient in
              <span class="skill-txt">HTML</span>,
              <span class="skill-txt">CSS</span>,
              <span class="skill-txt">Tailwindcss</span>
              and <span class="skill-txt">JavaScript</span>, I specialize in
              crafting visually appealing and responsive front-end interfaces
              that elevate user experiences. Leveraging
              <span class="skill-txt">(Vue.js, Nuxt.js, Quasar Framework)</span>
              and <span class="skill-txt">(React.js, Next.js)</span>, I excel in
              building dynamic and interactive user interfaces that seamlessly
              connect with back-end functionalities. <br />
              <br />
              Equipped with a foundation in
              <span class="skill-txt">Node.js</span>,
              <span class="skill-txt">Express.js</span>,
              <span class="skill-txt">PHP</span> and
              <span class="skill-txt">Django</span>, I develop robust and
              scalable server-side applications. My coding skills are enhanced
              by a design sensibility, ensuring both technical proficiency and
              aesthetic excellence. <br /><br />
              Driven by curiosity and a hunger to learn, I am committed to
              staying up-to-date with the latest technologies. I thrive in
              dynamic environments, consistently seeking opportunities to
              contribute my skills while expanding my toolkit.
              <br /><br />
              Let's collaborate to bring your ideas to life!
            </p>
          </div>
        </div>
      </div>

      <div
        class="about-detail flex md:flex-row flex-col gap-5 px-lg-5 p-3"
      >
        <div
          class="info-sec grid md:grid-cols-2 mb-1 w-full gap-y-7"
        >
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Full Name</b> <span> Okigwe Ebube Ireneaus</span>
          </p>
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Gender</b> <span> Male</span>
          </p>
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Website</b> <span>https://ebustech.com.ng</span>
          </p>
          <p class="w-full text-subtitle1">
            <i class="fa-solid fa-angle-right"></i>
            <b> Degree</b> <span> B.Sc</span>
          </p>
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Whatsapp</b> <span> +234 806 198 2520</span>
          </p>
          <p class="col-lg-6 col-12 text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Email</b> <span> ebubeireneaus@gmail.com</span>
          </p>
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> City</b> <span>FCT, Abuja</span>
          </p>
          <p class="w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Freelancing</b> <span> Available</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill-txt {
  text-transform: capitalize;
  font-weight: bolder;
  color: whitesmoke;
}
.about-detail {
  .info-sec {
    p {
      color: whitesmoke;
      i,
      b {
        color: rgb(101, 101, 134);
      }
    }
  }
}
</style>
