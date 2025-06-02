<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

defineOptions({
  name: 'MainLayout',
});

function navControl() {
  const body = document.body;
  const offCanvasToggle = document.querySelectorAll('.offcanvas-toggle');
  const offCanvas = document.querySelector('.offcanvas');
  const offCanvasOverlay = document.querySelector('.offcanvas-overlay');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const offCanvasClose = document.querySelectorAll(
    '.offcanvas-clos, .offcanvas-overlay'
  );
  const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');

  offCanvasToggle.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#mobile-menu-offcanvas');
      body.classList.add('offcanvas-open');
      target.classList.add('offcanvas-open');
      offCanvasOverlay.style.display = 'block';
      if (toggle.parentElement.classList.contains('mobile-menu-toggle')) {
        toggle.classList.add('close');
      }
    });
  });

  const closeOffCanvas = (e) => {
    e.preventDefault();
    body.classList.remove('offcanvas-open');
    offCanvas.classList.remove('offcanvas-open');
    offCanvasOverlay.style.display = 'none';
    const closeBtn = mobileMenuToggle.querySelector('a');
    if (closeBtn) {
      closeBtn.classList.remove('close');
    }
  };

  offCanvasClose.forEach((close) => {
    close.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.remove('offcanvas-open');
      offCanvas.classList.remove('offcanvas-open');
      offCanvasOverlay.style.display = 'none';
      const closeBtn = mobileMenuToggle.querySelector('a');
      if (closeBtn) {
        closeBtn.classList.remove('close');
      }
    });
  });

  offCanvasClose.forEach((close) => {
    close.addEventListener('click', closeOffCanvas);
  });

 
  offCanvasLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')
      if (targetId.startsWith('#')) {
        event.preventDefault()
        document.querySelector(targetId).scrollIntoView()
      }
      closeOffCanvas(event)
    });
  });
}

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const stickyHeader = document.querySelector('.header');
  if (scrollTop < 100) {
    stickyHeader.classList.remove('sticky');
  } else {
    stickyHeader.classList.add('sticky');
  }
};

const handleMobileScroll = () => {
  const scrollTop = window.scrollY;
  const stickyHeader = document.querySelector('.m-header');
  if (scrollTop < 100) {
    stickyHeader.classList.remove('sticky');
  } else {
    stickyHeader.classList.add('sticky');
  }
};

onMounted(() => {
  navControl();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleMobileScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', handleMobileScroll);
});
</script>

<template>
  <div>
    <!-- .....:::::: Start Header Section :::::.... -->
    <header class="header hidden lg:block">
      <div class="">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div class="">
              <nuxt-img
                src="/logo-dark-tr.png"
                alt="Personal Brand Logo"
                height="50"
                width="50"
                format="webp"
                densities="x1"
                class=""
              />
            </div>
            <div class="flex-grow flex justify-center">
              <!-- Start Header Menu -->
              <ul class="header-nav">
                <li><nuxt-link to="/#home">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li class="has-dropdown">
                  <nuxt-link to="/#service-we-provide">Service</nuxt-link>
                </li>
                <li class="has-dropdown">
                  <nuxt-link to="/#projects">Projects</nuxt-link>
                </li>
                <li class="has-dropdown">
                  <nuxt-link to="/#blog">Blog</nuxt-link>
                </li>
                <li><nuxt-link href="/#contact">Contact</nuxt-link></li>
              </ul>
              <!-- End Header Menu -->
            </div>
            <div class="">
              <div class="header-btn-link text-end">
                <button
                  href="#contact"
                  no-caps
                  class="btn btn-sm btn-outline-one icon-space-left"
                  >Hire Me <i class="icofont-double-right"></i
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- .....:::::: End Header Section :::::.... -->

    <!-- .....:::::: Start Mobile Header Section :::::.... -->
    <div class="m-header lg:hidden block">
      <div class="container px-5 py-3">
        <div class="flex justify-between items-center">
          <div class="">
            <div class="mobile-logo">
              <a href="#home">
                <nuxt-img
                src="/logo-dark-tr.png"
                alt="Personal Brand Logo"
                height="50"
                width="50"
                format="webp"
                densities="x1"
                class=""
              />
              </a>
            </div>
          </div>
          <div class="">
            <div class="mobile-action-link text-end">
              <button  class="offcanvas-toggle !btn !btn-md text-slate-100" ><i class="fas fa-bars fa-xl"></i> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .....:::::: Start MobileHeader Section :::::.... -->

    <!--  Start Offcanvas Mobile Menu Section -->
    <div
      id="mobile-menu-offcanvas"
      class="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
    >
     
      <div class="offcanvas-header text-end">
        <q-btn icon="cancel" flat  class="offcanvas-clos" />
      </div>

      <div class="offcanvas-mobile-menu-wrapper">
        
        <div class="mobile-menu-bottom">
          <div class="offcanvas-menu">
            <ul>
              <li>
                <nuxt-link to="/#home" ><span>Home</span></nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about"><span>About</span></nuxt-link>
              </li>
              <li>
                <nuxt-link to="/#service-we-provide"
                  ><span>Services</span></nuxt-link>
                <!-- <ul class="mobile-sub-menu">
                  <li><a href="service-list.html">Service List</a></li>
                  <li><a href="service-details.html">Service Details</a></li>
                </ul> -->
              </li>
              <li>
                <nuxt-link to="/#projects"><span>Projects</span></nuxt-link>
              </li>
              <li>
                <nuxt-link to="/#blog"><span>Blog</span></nuxt-link>
              </li>

              <li>
                <nuxt-link to="#contact"><span>Contact</span></nuxt-link>
              </li>
            </ul>
          </div>
          <!-- End Mobile Menu Nav -->
        </div>
        <!-- End Mobile Menu -->

        <!-- Start Mobile contact Info -->
        <div class="mobile-contact-info text-center">
          <ul class="social-link">
            <li>
              <a
                target="_blank"
                href="https://facebook.com/ebubeireneaus"
                rel="nofollow"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/ebubeireneaus"
                rel="nofollow"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/EbubeIreneaus"
                rel="nofollow"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
        <!-- End Mobile contact Info -->
      </div>
      <!-- End Offcanvas Mobile Menu Wrapper -->
    </div>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Offcanvas Overlay -->
    <div class="offcanvas-overlay"></div>

    <div class="bg-primary">
      <slot />
    </div>

    <!-- ...::: Start Footer Section :::... -->
    <footer class="footer-section section-bg overflow-hidden pos-relative">
      <div class="footer-inner-shape-top-left"></div>
      <div class="footer-inner-shape-top-right"></div>

      <div class="footer-center section-gap-tb-165">
        <div class="container mx-auto px-5 lg:px-1">
          <div class="section-content">
            <span class="section-tag">My Social</span>
            <h2 class="section-title">Follow Me.</h2>
          </div>
          <div class="mb-n5">
            <div class="col-auto mb-5">
              <!-- Start Single Footer Info -->
              <div class="footer-single-info">
                <ul class="social-link">
                  <li>
                    <a
                      href="https://www.facebook.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="fab fa-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- Start Single Footer Info -->
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container mx-auto px-5 lg:px-1">
          <div
            class=""
          >
            <div class="col-auto">
              <div class="footer-copyright">
                <p class="copyright-text">
                  &copy; {{ new Date().getFullYear() }} &nbsp;
                  <router-link to="/">EBUBE IRENEAUS</router-link>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    <!-- ...::: End Footer Section :::... -->
  </div>
</template>

<style scoped>
.header,
.m-header {
  background-color: transparent;
  position: absolute;
  z-index: 10;
  width: 100%;
}
.header.sticky,
.m-header.sticky {
  position: fixed !important;
  z-index: 99;
  width: 100%;
  top: 0;
  background: #252734;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  animation: fadeInDown 0.9s cubic-bezier(0.2, 1, 0.22, 1) 0s;
  border-bottom: 0;
}

.email-pics {
  width: 300px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  display: inline;
  transform: scale(1.6);
}
@media (max-width: 780px) {
  .email-pics {
    margin-left: -25px;
  }
}
@media (max-width: 480px) {
  .email-pics {
    transform: scale(1.4);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
