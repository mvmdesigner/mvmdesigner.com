<!-- <template>
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
        <b-navbar-item v-for="{ link, name } in nav" :key="name" tag="div">
          <NuxtLink
            :to="{ path: link }"
            class="is-size-4 navbar-item"
            exact-active-class="is-active"
          >
            {{ name }}
          </NuxtLink>
        </b-navbar-item>
        <hr class="navbar-divider" />
      </template>
    </b-navbar>
  </template> -->
  <template>
    <nav :class="{ 'is-transformed': !showNavbar }" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img class="image" src="@\assets\img\header-logo.png">
        </NuxtLink>
  
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-content"
          @click="isActive = !isActive">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div id="navbar-content" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <NuxtLink class="navbar-item navlink" v-for="navRoutes in navigationRoutes" :to="navRoutes.link">
            {{ navRoutes.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      navigationRoutes: Array,
    },
    data() {
      return {
        isActive: false,
        showNavbar: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @media (min-width: calc(960px + (2 * 0.75rem))) {
  .navlink {
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