<template>
  <nav id="nav">
    <div id="nav-menu"></div>
    <div id="nav-bg"></div>
    <div id="nav-wrap">
      <div id="nav-0">
        <div id="nav-burger" @click.prevent="toggle">
          <span></span>
          <span></span>
        </div>
        <div id="nav-brand">
          <g-link to="/">
            <span>unfltrdsports</span>
          </g-link>
        </div>
      </div>
      <div id="nav-1">
        <div id="nav-search">
          <div>search</div>
        </div>
        <div id="nav-mode" @click.prevent="toggleMode">
          <div v-if="mode">dark</div>
          <div v-else>light</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    mode: false,
    isOpen: false
  }),
  methods: {
    toggleMode() {
      this.mode = !this.mode;
      window.__setPreferredTheme(this.mode ? "dark" : "light");
    },
    open() {
      this.nav = document.getElementById("nav-burger");
      this.navMenu = document.getElementById("nav-menu");
      this.html = document.documentElement;
      this.isOpen = true;
      this.nav.classList.add("open");
      this.navMenu.classList.add("open");
      this.html.style.overflow = "hidden";
    },
    close() {
      this.nav = document.getElementById("nav-burger");
      this.navMenu = document.getElementById("nav-menu");
      this.html = document.documentElement;
      this.isOpen = false;
      this.nav.classList.remove("open");
      this.navMenu.classList.remove("open");
      this.html.removeAttribute("style");
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  }
};
</script>

<style lang="scss">
#nav {
  position: fixed;
  top: 0;
  width: 100vw;
  user-select: none;

  @media (min-width: 501px) {
    height: 6.15vw;
  }

  @media (max-width: 500px) {
    height: 15vw;
  }
}

#nav-wrap {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 501px) {
    margin: 0 0 0 3vw;
    width: 94vw;
  }

  @media (max-width: 500px) {
    margin: 0 0 0 5.4vw;
    width: 89.2vw;
  }
}

#nav-burger,
#nav-mode {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

#nav-mode {
  color: #fff;
}

#nav-burger {
  span {
    display: block;
    background: #fff;
    will-change: transform;
    transition: 0.2s;

    @media (min-width: 501px) {
      height: 0.15vw;
      width: 2vw;
      margin: 0.25vw 0;
    }

    @media (max-width: 500px) {
      height: 0.4vw;
      width: 6vw;
      margin: 1vw 0;
    }
  }

  &.open {
    span {
      @media (min-width: 501px) {
        &:first-child {
          transform: translateY(0.3vw) rotate(45deg);
        }

        &:last-child {
          transform: translateY(-0.35vw) rotate(-45deg);
        }
      }

      @media (max-width: 500px) {
        &:first-child {
          transform: translateY(1vw) rotate(45deg);
        }

        &:last-child {
          transform: translateY(-1.15vw) rotate(-45deg);
        }
      }
    }
  }
}

#nav-0,
#nav-1 {
  display: flex;
  align-items: center;
  color: #fff;
}

#nav-search {
  cursor: pointer;
}

#nav-1 {
  font-weight: 500;

  @media (min-width: 501px) {
    font-size: 1.7vw;
    letter-spacing: -0.05vw;
  }
}

#nav-brand {
  a {
    font-weight: 500;
  }

  @media (min-width: 501px) {
    margin: 0 0 0 3vw;

    a {
      font-size: 1.7vw;
      letter-spacing: -0.05vw;
    }
  }

  @media (max-width: 500px) {
    margin: 0 0 0 6vw;

    a {
      font-size: 5.1vw;
      letter-spacing: -0.06vw;
    }
  }
}

#nav-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
}

#nav-menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  height: 100vh;
  transform: translateZ(0);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s, background 0.6s;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  @media (min-width: 501px) {
    display: none;
  }
}

@media (min-width: 501px) {
  #nav-search {
    margin: 0 2vw 0 0;
  }
}
</style>