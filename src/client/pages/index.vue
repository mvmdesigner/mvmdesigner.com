<template>
  <section class="section">
    <home-hero></home-hero>
    <!-- <contact-form></contact-form> -->
  </section>
</template>

<script>
// import contactForm from '@/components/contact-me.vue'
import homeHero    from '@/components/about-me.vue'

export default {
  name: 'IndexPage',
  components: {
    // contactForm,
    homeHero
  },
  head: {
    title: "Home - mvmdesigner🎨"
  }
}
</script>
