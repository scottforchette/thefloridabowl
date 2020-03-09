<template>
  <nav id="nav">
    <div id="nav-bg"></div>
    <div id="nav-logo">
      <g-link to="/">the florida bowl</g-link>
    </div>
    <div id="nav-wrap">
      <div id="nav-1">
        <div id="nav-search" @click.prevent="sendMessage">
          <div>search</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
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
    },
    sendMessage() {
      this.$root.$emit("message from abc");
    }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
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

#nav-1 {
  display: flex;
  align-items: center;
  color: #000;
}

#nav-search {
  cursor: pointer;
}

#nav-1 {
  font-weight: 500;

  @media (min-width: 501px) {
    font-size: 1.7vw;
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
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
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
</style>