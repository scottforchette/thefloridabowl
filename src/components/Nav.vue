<template>
  <nav id="nav">
    <div class="_line"></div>
    <ul>
      <li class="_nav-li">
        <ul>
          <li><g-link to="/">THE FLORIDA BOWL</g-link></li> 
          <li><g-link to="/latest">ALL POSTS</g-link></li>
        </ul>
      </li>
      <li class="_nav-li">
        <ul>
          <li>Community</li>
          <li>Editor's choice</li>
        </ul>
      </li>
    </ul>
    <div id="nav-btn"></div>
    <div id="nav-mode" @click.prevent="toggleMode">
      <div v-if="mode">Light</div>
      <div v-else>Dark</div>
    </div>
  </nav>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
#nav {
  position: absolute;
  top: 2vw;
  left: 3.25vw;
  width: 93.5vw;
  z-index: 1;
  overflow: hidden;

  > ul {
    display: flex;

    li {
      overflow: hidden;
    }
  }

  ul ul {
    li {
      padding: 1vw 0;
      border-bottom: 1px solid rgba($color: #000, $alpha: 0.05);
    }
  }
}

._nav-li {
  &:first-child {
    width: 26.35vw;
    margin: 0 2vw 0 0;
  }

  &:last-child {
    width: 65vw;
  }
}

._line {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #000;
  height: 2px;
}

#nav-mode {
  display: none;
}
</style>