<template>
  <div>
    <navigationBar></navigationBar>
    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import navigationBar from '@/components/navbarComp.vue'

export default {
  name: 'DefaultLayout',
  components: {
    navigationBar
  }
}
</script>
