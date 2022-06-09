<template>
  <section class="section">
    <contact-form></contact-form>
  </section>
</template>

<script>
import contactForm from '@/components/contact-me.vue'

export default {
  name: 'IndexPage',
  components: {
    contactForm
  },
  head: {
    title: "Hello World"
  }
}
</script>
