<template>
  <Layout>
    <div id="contact">
      <div id="contact-0">
        <div class="_c-0">
          <div class="_c-img-0">
            <g-image src="~/assets/img/1.jpg"></g-image>
          </div>
          <div class="_c-img-1">
            <g-image src="~/assets/img/2.jpg"></g-image>
          </div>
        </div>
      </div>
      <div id="contact-1">
        <h2>Drop us a Line</h2>
        <a href="mailto:contact@thefloridabowl.com">contact@thefloridabowl.com</a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Us"
  }
};
</script>

<style lang="scss">
#contact {
  margin: 20vw 0 0;
  height: 62.5vw;
  position: relative;
  display: flex;

  @media (max-width: 500px) {
    height: 153vw;
    margin: 40vw 0 0;
    flex-direction: column;
  }
}

#contact-0 {
  position: relative;
  width: 50%;
}

#contact-1 {
  position: relative;
  margin: 10vw 0 0 6vw;
h2 {
    font-size: 4vw;
  }

  a {
    margin: 4vw 0 0 0;
    font-size: 2.5vw;
  }
  @media (max-width: 500px) {
    margin: 110vw 0 0 3.26vw;

    h2 {
      font-size: 8vw;
    }

    a {
      margin: 12vw 0 0 0;
      font-size: 5vw;
    }
  }
  
}

._c-img-0 {
  position: absolute;
  left: 5vw;
  top: 10vw;
  height: 43vw;
  width: 29.5vw;

  @media (max-width: 500px) {
    height: 73vw;
    width: 51.5vw;
  }
}

.c-0 {
  @media (max-width: 500px) {
    width: 100%;
    height: 60vw;
  }
}

._c-img-1 {
  position: absolute;
  left: 9vw;
  top: 3vw;
  height: 26vw;
  width: 35.5vw;

  @media (max-width: 500px) {
    height: 43vw;
    width: 68.5vw;
  }
}
</style>