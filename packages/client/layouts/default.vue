<template>
  <div>
    <navigationBar></navigationBar>
    <section class="main-content columns">
      <div class="container column is-10 .page-wrapper">
        <Nuxt />
      </div>
    </section>
    <navigationFooter></navigationFooter>
  </div>
</template>

<script>
import navigationBar from '@/components/navbarComp.vue'
import navigationFooter from '@/components/nav-footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    navigationBar,
    navigationFooter,
  },
}
</script>

<style lang="scss">
.page-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: 125em;
  margin-left: auto;
  margin-right: auto;
}
</style>
