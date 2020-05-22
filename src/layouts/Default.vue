<template>
  <div id="app">
    <main id="main">
      <Nav />
      <div id="page">
        <slot />
        <Footer />
      </div>
    </main>
    <div id="issue">Please turn your device.</div>
    <div id="grid-cta"></div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import G from "@mystroken/g";

export default {
  components: {
    Nav,
    Footer
  },
  mounted() {
    class grid {
      constructor() {
        document
          .getElementById("grid-cta")
          .addEventListener("click", this.layout);
      }

      layout() {
        if (this.inDom)
          "d" === this.grid.className
            ? (this.grid.parentNode.removeChild(this.grid), (this.inDom = !1))
            : (this.grid.className = "d");
        else {
          (this.grid = document.createElement("div")), (this.grid.id = "grid");
          var t = document.createElement("div");
          t.id = "line";
          for (var i = [], e = 0; e < 12; e++)
            (i[e] = document.createElement("div")), t.appendChild(i[e]);
          this.grid.appendChild(t),
            document.getElementById("app").appendChild(this.grid),
            (this.inDom = !0);
        }
      }
    }

    new grid();
  }
};
</script> 

<style lang="scss">
@font-face {
  font-family: NMM;
  font-weight: 300;
  font-style: normal;
  src: url("../assets/font/NMM.woff2") format("woff2");
}

html {
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--body-b-color);
  color: var(--body-color);
  transition: color 0.6s, background 0.6s;
}

#app {
  overflow: hidden;
}

a,
body,
div,
footer,
h1,
h2,
h3,
header,
html,
img,
li,
nav,
p,
span,
ul,
time,
button {
  vertical-align: baseline;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-family: inherit;
  font-size: 100%;
}

li,
ul {
  list-style: none;
}
img,
svg {
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
  display: inline-block;

  &:hover {
    img {
      transform: scale(1.02);
    }
  }
}

img {
  pointer-events: none;
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.405, 0.07, 0.575, 0.995);
}

svg {
  width: 100%;
  height: 100%;
}

html {
  font-family: NMM;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  line-height: 1;

  @media (max-width: 500px) {
    font-size: 4.27vw;
  }
  @media (min-width: 501px) {
    font-size: 1.2vw;
  }
}

#js,
#issue {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #000;
  color: #fff;
  align-items: center;
  justify-content: center;
}

#js {
  z-index: 9998;
  text-align: center;

  > div {
    position: absolute;
    top: 47%;
    left: 0;
    width: 100%;
  }

  @media (min-width: 501px) {
    font-size: 1.8vw;
  }
}

#issue {
  display: none;

  @media (max-height: 420px) and (max-width: 900px) {
    display: flex;
    font-size: 2.6vw;
  }
}
#grid-cta {
  position: fixed;
  left: 3.25vw;
  bottom: 3vw;
  height: 4vw;
  width: 4vw;
  border-radius: 50%;
  background: grey;
  opacity: 0.3;
  cursor: pointer;
}

#grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  opacity: 0.15;

  &.d {
    opacity: 0.3;
  }
}

#line {
  height: 100%;
  width: 93.5vw;
  display: flex;
  justify-content: space-between;

  div {
    position: relative;
    float: left;
    width: 4vw;
    height: 100%;
    background: #000;
  }
}
</style>
