<template>
  <section id="contact-me">
    <h2 class="title is-2 has-text-centered">Contact Me</h2>
    <div class="component-container">
      <div class="form-container">
        <div class="contact-form">
          <b-field label="Your Name">
            <b-input></b-input>
          </b-field>
          <b-field label="Your Email">
            <b-input></b-input>
          </b-field>
          <b-field label="Subject">
            <b-taginput
              v-model="tags"
              ellipsis
              placeholder="Add a tag"
              aria-close-label="Delete this tag"
            >
            </b-taginput>
          </b-field>
          <b-field label="Message">
            <b-input maxlength="1000" type="textarea"></b-input>
          </b-field>
        </div>
      </div>
      <div class="other-contacts has-text-centered">
        <h5>Find me on</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.component-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .form-container {
      margin: auto;
      width: 75%;
    }
  }
}
.form-container {
  flex: 1;
  display: flex;
  max-width: 75%;
}

.contact-form {
  flex: 1;
}
.other-contacts {
  flex: 1;
}
</style>
