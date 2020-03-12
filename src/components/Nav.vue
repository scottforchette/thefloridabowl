<template>
  <nav id="nav">
    <div id="nav-mobile">
      <ul>
        <li>
          <g-link to="/latest/">Latest</g-link>
        </li>
        <li>
          <g-link to="/contact/">Contact</g-link>
        </li>
      </ul>
    </div>
    <div id="nav-bg"></div>
    <div id="nav-logo">
      <g-link to="/">the florida bowl</g-link>
    </div>
    <div id="nav-wrap">
      <div id="nav-0">
        <ul id="nav-0-1">
          <li>
            <g-link to="/latest/">Latest</g-link>
          </li>
          <li>
            <g-link to="/contact/">Contact</g-link>
          </li>
        </ul>
        <div id="nav-toggle" @click.prevent="toggle">
          <div v-if="isOpen">Close</div>
          <div v-else>Menu</div>
        </div>
      </div>
      <div id="nav-1">
        <div id="nav-mode" @click.prevent="toggleMode">
          <svg
            v-if="mode"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
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
      this.nav = document.getElementById("nav-mobile"); 
      this.html = document.documentElement;
      this.isOpen = true;
      this.nav.classList.add("open"); 
      this.html.style.overflow = "hidden";
    },
    close() {
      this.nav = document.getElementById("nav-mobile"); 
      this.html = document.documentElement;
      this.isOpen = false;
      this.nav.classList.remove("open"); 
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

#nav-mode {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#nav-1 {
  display: flex;
  align-items: center;
  cursor: pointer;
}

#nav-0 {
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: var(--body-color);
  }
}

#nav-0-1 {
  display: flex;
  align-items: center;
  font-weight: 500;
  @media (min-width: 501px) {
    font-size: 1.3vw;

    li {
      margin: 0 3vw 0 0;
    }
  }
}

#nav-1 {
  @media (min-width: 501px) {
    height: 100%;
    width: 2vw;
  }

  @media (max-width: 500px) {
    height: 100%;
    width: 6vw;
  }
}

#nav-toggle {
  @media (min-width: 501px) {
    display: none;
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
    }
  }

  @media (max-width: 500px) {
    margin: 0 0 0 6vw;

    a {
      font-size: 5.1vw;
    }
  }
}

#nav-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--bg-color);
  transition: background 0.6s;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
}

@media (max-width: 500px) {
  #nav-0-1 {
    display: none;
  }
}

@media (min-width: 501px) {
  #nav-search {
    margin: 0 2vw 0 0;
  }
}

#nav-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  @media (min-width: 501px) {
    a {
      font-size: 1.9vw;
    }
  }

  @media (max-width: 500px) {
    a {
      font-size: 5vw;
    }
  }
}

#nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  background: var(--bg-color);
  transition: background 0.6s;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
  width: 100%;
  height: 35vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translate3d(0, -100%, 0);
  transition: .5s;
  z-index: -1;

  @media (max-width: 500px) {
    display: flex;

    ul {
      padding: 10vw 0 0;
    }

    a {
      font-size: 7vw;
      line-height: 12vw;
    }
  }

  &.open {
      transform: translate3d(0, 0, 0);
  }
}
</style>