<template>
  <Layout>
    <header id="contact-hero">
      <h1>Contact Us</h1>
    </header>
    <div id="contact-form">
      <form
        id="contact-form-e"
        name="contact"
        method="post"
        action="/"
        v-on:submit.prevent="handleSubmit"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div>
            <label for="email">Your email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">Message</label>
          <textarea name="message" v-model="formData.message"></textarea>
        </div>

        <button type="submit" class="button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Us"
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang="scss">
.button {
  cursor: pointer;
  outline: 0;
  background: transparent;

  span {
      color: var(--body-color)
  }
  @media (min-width: 501px) {
    span {
      font-size: 1.2vw;
    }
  }
}

#contact-hero {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 501px) {
    margin: 18vw 0 0;

    h1 {
      font-size: 6vw;
    }
  }

  @media (max-width: 500px) {
    margin: 40vw 0 0;

    h1 {
      font-size: 12vw;
    }
  }
}

#contact-form {
  @media (min-width: 501px) {
    width: 60vw;
    margin: 0 auto;
    padding: 10vw 0 5vw;
  }

  @media (max-width: 500px) {
    width: 92vw;
    margin: 0 auto;
    padding: 0 0 5vw;
  }
}
</style>