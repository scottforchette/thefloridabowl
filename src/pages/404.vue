<template>
  <Layout>
    <div id="error-wrap">
      <div id="error-0">
        <h2>Page Not Found</h2>
      </div>
      <div id="error-1">
        <g-link to="/">
          <span>RETURN HOME</span>
        </g-link>
      </div>
    </div>
  </Layout>
</template> 

<script>
import Layout from "~/layouts/404.vue";
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: "Page Not Found",
    titleTemplate: "Error — %s"
  }
};
</script> 

<style lang="scss">
#error {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

  a {
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

#error-wrap {
  color: #fff;
}

@media (min-width: 501px) {
  #error-wrap a {
    padding: 1.6vw 1.2vw;
    width: 19vw;
    margin: 0 auto;

    span {
      font-size: 1.2vw;
    }
  }

  #error-0 {
    font-size: 4.5vw;
    line-height: 1.4;
    text-align: center;
    margin: 0 0 3vw;
  }
}

@media (max-width: 500px) {
  #error-wrap a {
    padding: 7vw 1.2vw;
    width: 100%;

    span {
      font-size: 4vw;
    }
  }

  #error-0 {
    font-size: 12vw; 
    line-height: 1.12;
    margin: 0 0 7vw;
  }
}
</style>