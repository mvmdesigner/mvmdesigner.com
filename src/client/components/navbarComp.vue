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
    <template #end>
      <b-navbar-item v-for="{ link, name, localLink } in nav" :key="name" tag="div">
        <NuxtLink
          v-if="localLink == true"
          :to="{ path: link }"
          class="is-size-4 navbar-item"
          exact-active-class="is-active"
        >
          {{ name }}
        </NuxtLink>
        <a v-else :href="link" class="is-size-4 navbar-item" target="_blank">
          {{ name }}
        </a>
      </b-navbar-item>
      <hr class="navbar-divider" />
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
          localLink: true
        },
        {
          name: 'About Me',
          link: '#about-me',
          localLink: true
        },
        {
          name: 'Shop',
          link: 'https://www.etsy.com/shop/mvmdesigner',
          localLink: false
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-menu {
  padding-right: 2.5rem;
}

@media (min-width: calc(1000px + (2 * 0.75rem))) {
  .navbar-item a {
    &:after {
      content: '';
      height: 1.5px;
      width: 0;
      background-color: #bd8f21;
      position: absolute;
      left: calc(50%);
      bottom: 10%;
      -webkit-transition: width 300ms linear;
      transition: width 300ms linear;
    }

    &:hover:after {
      width: calc(90% - 30%);
      left: 20%;
    }
  }
}
</style>
