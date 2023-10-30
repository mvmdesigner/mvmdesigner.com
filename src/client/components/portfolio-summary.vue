<template>
  <section class="section">
    <!-- <b-carousel-list v-model="test" :data="highlights">
      <div class="card"></div>
    </b-carousel-list> -->
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in highlights" :key="i" 
          progress="true" 
          animated="fade" 
          icon-pack="fa" 
          icon-prev="chevron-right" 
          icon-next="chevron-left">
            <section class="hero is-medium has-background-primary">
                <div class="hero-body has-text-centered">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <b-image :src="carousel.image"></b-image>
                        </figure>
                      </div>
                    </div>
                    <div class="card-content">
                          <p class="title is-4">John Smith</p>
                          <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      test: 0,
      highlights: [
        {
          title: "Water Color Portraits",
          image: require("@/assets/watercolor-portrait.jpg")
        },
        {
          title: "Animal Water Color Portraits",
          image: require("@/assets/watercolor-portrait-dog.jpg")
        }
      ]
    }
  }
}
</script>
