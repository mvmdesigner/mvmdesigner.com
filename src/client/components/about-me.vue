<template>
  <section class="hero about-hero box">
    <div class="hero-content">
      <div class="hero-img">
        <img src="~assets/michealprofilenum2.jpg" alt="A portrait of Michael Mercadante" max-height="10px" />
      </div>
      <div class="hero-text">
        <h4 class="title is-4">Michael Mercadante🎨</h4>
        <p>This will be a paragraph about me and graphic design</p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.about-hero {
  background: url('@/assets/abstract_art.jpg')center center; background-size:cover; 
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (max-width: calc(960px + (2 * 0.75rem))) {
        background-attachment: inherit;
    }
    .hero-content {
      display: grid;
      grid-template-rows: 2fr 1fr;
      margin: auto;
      padding: 2.5rem;

      .hero-img {
        margin: auto;
        img {
          border-radius: 50%;
          margin: auto;
          max-height: 8rem;
        }
      }

      .hero-text {
        h4 {
          text-align: center;
          color: white;
        }

        p {
          color: white;
          font-weight: 500;
        }
      }
    }
}
</style>
