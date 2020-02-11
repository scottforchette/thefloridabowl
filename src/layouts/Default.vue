<template>
  <main id="app">
    <div id="page">
      <slot />
      <Footer />
    </div>
    <Nav ref="nav"/>
    <Search ref="search" />
    <div id="issue">Please turn your device.</div>
  </main>
</template>

<script>
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default {
  components: {
    Nav,
    Search,
    Footer
  }
};
</script> 

<style lang="scss">
@font-face {
  font-family: Graphik;
  font-weight: 400;
  font-style: normal;
  src: url("../assets/font/GR.woff2") format("woff2");
}

@font-face {
  font-family: Graphik;
  font-weight: 500;
  font-style: normal;
  src: url("../assets/font/GM.woff2") format("woff2");
}

html {
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--bg-color);
  color: var(--body-color);
  transition: color 0.6s, background 0.6s;
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
* {
  box-sizing: border-box;
}

html {
  font: 16px Graphik, Helvetica, Arial, sans-serif;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
}

#issue {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  background: #000;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 2.7vw;
  letter-spacing: -0.03vw;

  @media (max-height: 420px) and (max-width: 900px) {
    display: flex;
  }
}

#page {
  @media (min-width: 501px) {
    margin: 6.25vw 0 0;
  }

  @media (max-width: 500px) {
    margin: 15vw 0 0;
  }
}
</style>
