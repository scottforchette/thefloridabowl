<template>
  <nav id="nav">
     <g-link to="/" id="nav-logo">
              <g-image v-if="mode" src="~/assets/img/logo/dark.png" alt="The Florida Bowl" />

              <g-image v-else src="~/assets/img/logo/light.png" alt="The Florida Bowl" />
            </g-link>
    <ul>
      <li class="_nav-li">
        <ul>
          <li>
           
          </li>
        </ul>
      </li>
      <li class="_nav-li">
        <ul>
          <li @click.prevent="toggleMode" class="h">
            <div v-if="mode">LIGHT MODE</div>
            <div v-else>DARK MODE</div>
          </li>
          <li>
            <g-link to="/blog">BLOG</g-link>
          </li>
        </ul>
      </li>
    </ul>
    <div id="nav-toggle" class="h">
      <svg viewBox="0 0 182 112">
        <rect x="42" y="42" width="98" height="4" />
        <rect x="42" y="66" width="98" height="4" />
      </svg>
    </div>
    <div class="_line"></div>
    
  </nav>
</template>

<script>
import G from "@mystroken/g";

export default {
  data: () => ({
    mode: false
  }),
  methods: {
    toggleMode() {
      this.mode = !this.mode;
      window.__setPreferredTheme(this.mode ? "dark" : "light");
    }
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;

    class nav {
      constructor() {
        this.nav = document.getElementById("nav-toggle");
        this.menu = document.getElementById("menu");
        this.state = false;
        this.l("addEventListener");
      }
      l(x) {
        this.nav[x]("click", _ => {
          if (this.state) {
            this.close();
          } else {
            this.open();
          }
        });
      }

      open() {
        this.state = true;
        this.menu.style.pointerEvents = "all";
        new G.Animate({
          el: "#menu-bg",
          p: {
            opacity: [0, 1]
          },
          d: 400,
          e: "o2"
        }).play();

        new G.Animate({
          el: ".menu-li",
          p: {
            y: [100, 0]
          },
          d: 1800,
          e: "o6"
        }).play();
      }

      close() {
        this.state = false;
        this.menu.style.pointerEvents = "none";

        new G.Animate({
          el: "#menu-bg",
          p: {
            opacity: [1, 0]
          },
          d: 400,
          e: "o2"
        }).play();

        new G.Animate({
          el: ".menu-li",
          p: {
            y: [0, 100]
          },
          d: 1800,
          e: "o6"
        }).play();
      }
    }

    new nav();
  }
};
</script>

<style lang="scss">
#nav-toggle {
  position: fixed;
  top: 0;
  right: -3vw;
  height: 12.17778vw;
  width: 12.17778vw;

  @media (max-width: 500px) {
    right: 0;
    height: 20.17778vw;
    width: 20.17778vw;
  }
}

#nav {
  position: absolute;
  top: 2vw;
  left: 3.25vw;
  width: 93.5vw; 
  z-index: 1;

  > ul {
    display: flex;
  position: relative;
    li {
      overflow: hidden;
    }
  }

  @media (max-width: 500px) {
    overflow: auto;
  }

  ul li:last-child {
    li {
      @media (min-width: 501px) {
        transition: background 0.6s;
        padding: 1vw 0;
        border-bottom: 1px solid var(--bg-border);
      }
    }
  }
}

._nav-li {
  &:first-child {
    width: 26.35vw;
    margin: 0 2vw 0 0;
 
  }

  &:last-child {
    width: 45vw;
    @media (max-width: 500px) {
      display: none;
    }
  }
}

._line {
  transition: background 0.6s;
  content: "";
  position: absolute;
  bottom: -10vw;
  left: 0;
  right: 0;
  background: var(--bg-line);
  height: 2px;

  @media (max-width: 500px) {
    display: none;
  }
}

#nav-mode {
  display: none;
}

.h {
  cursor: pointer;
}

#nav-toggle { 
    z-index: 100;
right: .5vw;
  svg {
    transition: fill 0.6s;

    fill: var(--svg-color);
  }
}

#nav-logo {
  z-index: 100;
  position: fixed;
  top: 0;
  @media (min-width: 501px) {
    width: 12vw;
  }

  @media (max-width: 500px) {
    width: 24vw;
    padding: 0 0 5vw;

  }
}
</style>

