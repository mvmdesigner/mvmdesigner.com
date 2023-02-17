<template>
  <div class="footer">
    <img
      src="~assets/header-logo.png"
      style="max-width: 25vw; margin: auto; padding: 3vw"
      alt="MVM Designer"
    />
    <hr style="margin: 4vw" />
    <div class="icon-container">
      <div class="icons">
        <a v-for="{ name, link } in icons" :key="name" :href="link">
          <font-awesome-icon class="fa-1x mx-1" :icon="['fab', name]" />
        </a>
      </div>
    </div>
    <div class="copyright-container">
      <p class="copyright">
        <i
          >&copy;2022
          <a href="https://github.com/mvmdesigner">mvmdesigner</a></i
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'etsy',
          class: 'fab',
          link: 'https://www.etsy.com/shop/mvmdesigner',
        },
        {
          name: 'linkedin-in',
          class: 'fab',
          link: 'https://www.linkedin.com/in/michael-mercadante-b30920204/',
        },
        {
          name: 'instagram',
          class: 'fab',
          link: 'https://www.instagram.com/mvmdesigner/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  margin: auto;
}

.icons {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.icons a {
  margin-left: 1.5vmin;
  margin-right: 1.5vmin;
  transition: color, scale 300ms ease-in;
}
.icons a:hover {
  color: white;
  scale: 2.5;
}

.icons a svg {
  font-size: 2vh;
  height: 2vh;
}

.copyright-container {
  display: flex;
  padding: 10px;
}

.copyright {
  color: #bd8f21;
  margin: auto;
  font-size: 2vmin;
}

p.copyright > i > a:hover {
  color: white !important;
}
</style>
