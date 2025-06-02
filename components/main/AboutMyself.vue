<template>
  <div id="about">
    <div class="my-10 mx-auto block">
      <div class="container px-3">
        <div class="row">
          <div class="col-12">
            <!-- Start Section Content -->
            <div class="section-content">
              <span class="section-tag" data-aos="fade-up">About Me</span>
              <h2 class="section-title" data-aos="fade-right">
                More About Myself
              </h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>
      </div>

      <div class="first-sec-about p-lg-1 p-2">
        <div class="about-me-txt lg:p-5">
          <div class="text-light !px-5 md:!px-px text-balance w-full overflow-x-hidden">
            <nuxt-img
              src="/images/ogimage1.jpg"
              alt="black and white image of Ebustech CEO (Ebube Ireneaus) Sitting on his officce looking at his laptop while writing code"
              width="150"
              height="150"
              fit="cover"
              class="float-left px-4 size-100 !rounded-xl object-cover object-center hidden md:inline-block w-[300px]"
              data-aos="fade-right"
            />
            <p
              class="txt text-light text-subtitle1 leading-loose"
              data-aos="fade-left"
            >
              Passionate Full-Stack Developer with a strong focus on building
              seamless and scalable web applications. Proficient in
              <span class="skill-txt">HTML</span>,
              <span class="skill-txt">CSS</span>,
              <span class="skill-txt">TailwindCSS</span>, and
              <span class="skill-txt">JavaScript</span>, I craft responsive and
              visually striking front-end interfaces that offer intuitive user
              experiences. Leveraging
              <span class="skill-txt">(Vue.js, Nuxt.js, Quasar Framework)</span>
              and <span class="skill-txt">(React.js, Next.js)</span>, I build
              dynamic, high-performance user interfaces that seamlessly
              integrate with modern backend systems. <br /><br />
              On the server side, I work confidently with
              <span class="skill-txt">Python</span>,
              <span class="skill-txt">Django</span> 
              and,
              <span class="skill-txt">Express.js</span>
              to develop powerful and
              scalable APIs that support real-world business logic. I also
              specialize in <span class="skill-txt">React Native</span>,
              enabling me to create high-quality cross-platform mobile
              applications that deliver native experiences. <br /><br />
              Backed by a keen design sensibility, I combine technical
              excellence with aesthetic precision. I’m driven by curiosity and
              an ever-evolving passion for learning, constantly updating my
              skill set to keep pace with emerging technologies.
              <br /><br />
              Let's collaborate to transform your ideas into impactful digital
              experiences!
            </p>
          </div>
        </div>
      </div>

      <div class="about-detail flex md:flex-row flex-col gap-5 px-lg-5 p-3">
        <div class="info-sec grid md:grid-cols-2 mb-1 w-full gap-y-7">
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
