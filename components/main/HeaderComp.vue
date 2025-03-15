<template>
  <header class="absolute w-full z-50">
    <div class="flex justify-between items-center mx-auto md:w-[90%] w-[95%]">
      <div>
        <nuxt-img
          src="/logo-dark-tr.png"
          alt="Ireneaus Logo"
          width="70"
          height="70"
          format="webp"
          densities="x1"
          quality="100"
        />
      </div>

      <nav class="hidden lg:!inline-block">
        <ul class="flex space-x-10">
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="border-0 py-2 px-6 hover:border-b-2 border-secondary transition-all duration-300 ease-linear"
            :class="$route.path === link.path ? 'border-b-2' : ''"
          >
            <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <button class="btn lg:hidden" @click="toggleNav">
        <i class="fa fa-bars"></i>
      </button>
    </div>
  </header>
  <div role="navigation" class="sidenav">
    <div class="flex">
      <button @click="closeNav" class="btn btn-sm">
        <i class="fa fa-close"></i>
      </button>
    </div>
    <ul>
      <li
        v-for="link in navLinks"
        :key="link.name"
        class="border-0 px-6 hover:border-b-2 border-secondary transition-all duration-300 ease-linear"
        :class="$route.path === link.path ? 'border-b-2' : ''"
      >
        <nuxt-link :to="link.path" @click="closeNav">{{ link.name }}</nuxt-link>
      </li>
    </ul>

    <div class="mt-4">
      <div class="flex px-5">
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-lg"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-lg"></i></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok fa-lg"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/#project" },
  { name: "Blog", path: "#" },
  { name: "Contact", path: "/#contact" },
];

function toggleNav() {
  const sidenav = document.querySelector(".sidenav");
  sidenav?.classList.toggle("open");
}

function closeNav() {
  const sidenav = document.querySelector(".sidenav");
  sidenav?.classList.remove("open");
}
</script>

<style scoped></style>
