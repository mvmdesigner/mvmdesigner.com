<template>
  <b-navbar
    class="navbar header has-shadow is-primary"
    role="navigation"
    :mobile-burger="true"
    aria-label="main navigation"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }" class="mx-4">
        <img src="~assets/header-logo.png" alt="MVM Designer" height="28" />
      </b-navbar-item>
    </template>
    <template  #end>
      <b-navbar-item v-for="{ link, name } in nav" :key="name" tag="div">
        <NuxtLink :to="{ path: link }" class="is-size-4 navbar-item" exact-active-class="is-active">
          {{ name }}
        </NuxtLink>
      </b-navbar-item>
      <hr class="navbar-divider">
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About Me',
          link: '#about-me',
        },
        {
          name: 'Portfolio',
          link: '/portfolio',
        },
        {
          name: 'Contact Me',
          link: '/contact-me',
        },
      ],
    }
  },
}
</script>