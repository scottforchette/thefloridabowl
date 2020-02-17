<template>
  <div id="search">
    <div id="search-bg" @click.prevent="close"></div>
    <div id="search-wrap">
      <div id="search-inner">
        <div id="search-close" @click.prevent="close">
          <svg viewBox="0 0 12 12">
            <polygon
              points="11.7,1.1 10.9,0.3 6,5.3 1.1,0.3 0.3,1.1 5.3,6 0.3,10.9 1.1,11.7 6,6.7 10.9,11.7 11.7,10.9 6.7,6"
            />
          </svg>
        </div>
        <input v-model="searchTerm" type="text" autocomplete="off" placeholder="Search" />
        <ul>
          <li v-for="result in search" :key="result.id">
            <g-link :to="result.path">
              <div class="meta">
                <div class="tag">
                  <span>{{ result.tag }}</span>
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
    searchTerm: ""
  }),
  computed: {
    search() {
      var searchTerm = this.searchTerm;
      if (searchTerm.length > 1) {
        return this.$search.search({
          query: searchTerm,
          limit: 8,
          suggest: true
        });
      }
    }
  },
  watch: {
    $route(to, from) {
      this.searchTerm = "";
      this.close();
    }
  },
  methods: {
    open() {
      this.bg = document.getElementById("search-bg");
      this.side = document.getElementById("search-wrap");
      this.html = document.documentElement;
      this.bg.classList.add("open");
      this.side.classList.add("open");
      this.html.style.overflow = "hidden";
    },
    close() {
      this.bg = document.getElementById("search-bg");
      this.side = document.getElementById("search-wrap");
      this.html = document.documentElement;
      this.bg.classList.remove("open");
      this.side.classList.remove("open");
      this.html.removeAttribute("style");
    }
  },
  mounted() {
    this.$root.$on("message from abc", () => {
      this.open();
    });
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

  ul {
    overflow: auto;
    height: 100%;
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

#search-close {
  position: absolute;
  top: 2.1875vw;
  right: 0;
  padding: 2.125vw;
  width: 5.75vw;
  height: 5.75vw;
  cursor: pointer;

  svg {
    fill: var(--body-color);
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 501px) {
  .search-headline {
    font-size: 2.5vw; 
    line-height: 1.3;
    margin: 1vw 0 0.75vw;
  }

  .search-author {
    line-height: 1;
  }

  #search-inner {
    padding: 10vw 2.5vw 10vw;

    input {
      padding: 0.5vw 0;
      margin: 0 0 2vw;
    }

    li {
      padding: 2.5vw 0;
    }
  }
}

@media (max-width: 500px) {
  .search-headline {
    font-size: 2.5vw; 
    line-height: 1.3;
    margin: 1vw 0 0.75vw;
  }

  .search-author {
    line-height: 1;
  }

  #search-wrap {
    input {
      font-size: 5.6vw; 
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
    line-height: 1.3;
    margin: 0 0 3vw;
  }

  .search-author {
    font-size: 4.2vw;
    line-height: 1;
  }
}
</style>