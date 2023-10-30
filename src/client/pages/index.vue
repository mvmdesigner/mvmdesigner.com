<template>
<<<<<<< Updated upstream
    <section class="section">
      <!-- <contact-form></contact-form> -->
    </section>
  </template>
  
  <script>

  export default {
    name: 'IndexPage',
    head: {
      title: "Home - MVMDESIGNER"
    }
  }
  </script>
  
=======
  <section class="section">
    <home-hero></home-hero>
    <contact-form></contact-form>
    <portfolio-carousel></portfolio-carousel>
  </section>
</template>

<script>
import contactForm from '@/components/contact-me.vue'
import homeHero    from '@/components/about-me.vue'
import portfolioCarousel from '@/components/portfolio-summary.vue'

export default {
  name: 'IndexPage',
  components: {
    contactForm,
    homeHero,
    portfolioCarousel
  },
  head: {
    title: "Home - mvmdesigner🎨"
  }
}
</script>
>>>>>>> Stashed changes
