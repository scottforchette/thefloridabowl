<template>
  <div id="search">
    <div id="search-bg" @click.prevent="toggle"></div>
    <div id="search-wrap">
      <div id="search-inner">
        <div id="search-close"></div>
        <input v-model="searchTerm" type="text" placeholder="Search" />
        <ul>
          <li v-for="result in searchResults" :key="result.id">
            <g-link :to="result.path" class="navbar-item">
              <div class="meta">
                <div class="tag">
                  <span>Destination</span>
                </div>
                <div class="date">
                  <timeago :since="result.date" :datetime="result.date"></timeago>
                </div>
              </div>
              <div class="search-headline">
                <h2>{{ result.title }}</h2>
              </div>

              <div class="search-author">
                <span>{{ result.author }}</span>
              </div>
            </g-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data: () => ({
    searchTerm: "",
    state: false
  }),
  computed: {
    searchResults() {
      if (!this.$search) return [];
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 2) return [];
      return this.$search.search({
        query: searchTerm,
        limit: 8,
        suggest: true
      });
    }
  },
  watch: {
    $route(to, from) {
      this.searchTerm = ""; 

      
    }
  },
  methods: {
    open() {
      this.bg = document.getElementById("search-bg");
      this.side = document.getElementById("search-wrap");
      this.html = document.documentElement;
      this.state = true;
      this.bg.classList.add("open");
      this.side.classList.add("open");
      this.html.style.overflow = "hidden";
    },
    close() {
      this.bg = document.getElementById("search-bg");
      this.side = document.getElementById("search-wrap");
      this.html = document.documentElement;
      this.state = false;
      this.bg.classList.remove("open");
      this.side.classList.remove("open");
      this.html.removeAttribute("style");
    },
    toggle() {
      if ((this.state = true)) {
        this.close();
      } else {
        this.open();
      }
    }
  }
};
</script>

<style lang="scss">
#search {
  position: fixed;
  pointer-events: none;
}

#search,
#search-bg {
  top: 0;
  bottom: 0;
  width: 100vw;
}

#search-bg {
  position: absolute;
  background: #000;
  will-change: opacity;
  transition: opacity 500ms ease-out 0s;
  opacity: 0;

  &.open {
    opacity: 0.4;
    pointer-events: all;
  }
}

#search-wrap {
  position: absolute;
  right: 0;
  height: 100%;
  background: var(--bg-color);
  transition: opacity 0.25s, background 0.6s,
    transform 0.5s cubic-bezier(0.5, 0, 0, 1);
  will-change: transform;
  transform: translate3d(102%, 0, 0);
  pointer-events: all;

  &.open {
    transform: translate3d(0, 0, 0);
  }

  @media (min-width: 501px) {
    width: 40vw;

    input {
      font-size: 1.6vw;
      letter-spacing: -0.01vw;
      line-height: 1.3;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.6s;
    border-bottom: 1px solid var(--border-color);
  }
}

input {
  outline: none;
  width: 100%;
  color: var(--body-color);
  border: 0;
  background: transparent;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

button,
input {
  overflow: visible;
}

#search-inner {
  height: 100%;
}

.search-author {
  opacity: 0.6;
  display: block;
}

@media (min-width: 501px) {
  .search-headline {
    font-size: 2.5vw;
    letter-spacing: -0.05vw;
    line-height: 1.3;
    margin: 1vw 0 0.75vw;
  }

  .search-author {
    font-size: 1.2vw;
    letter-spacing: -0.01vw;
    line-height: 1;
  }

  #search-inner {
    padding: 10vw 2.5vw 10vw;

    input {
      padding: 0.5vw 0;
      margin: 0 0 4vw;
    }

    li {
      padding: 2.5vw 0;
    }
  }
}

@media (max-width: 500px) {
  .search-headline {
    font-size: 2.5vw;
    letter-spacing: -0.05vw;
    line-height: 1.3;
    margin: 1vw 0 0.75vw;
  }

  .search-author {
    font-size: 1.2vw;
    letter-spacing: -0.01vw;
    line-height: 1;
  }

  #search-wrap {
    input {
      font-size: 5.6vw;
      letter-spacing: -0.05vw;
      line-height: 1.3;
    }
  }

  #search-inner {
    padding: 20vw 5vw 10vw;

    input {
      padding: 3vw 0;
      margin: 0 0 4vw;
    }

    li {
      padding: 5vw 0;
    }
  }

  .search-headline {
    font-size: 7vw;
    letter-spacing: -0.09vw;
    line-height: 1.3;
    margin: 0 0 3vw;
  }

  .search-author {
    font-size: 4.2vw;
    letter-spacing: -0.01vw;
    line-height: 1;
  }
}
</style>