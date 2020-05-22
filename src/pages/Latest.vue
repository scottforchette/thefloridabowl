<template>
  <Layout>
    <header id="latest-hero">
      <h1>The Latest</h1>
    </header>
    <div id="bg">
      <div id="bg-orange"></div>
    </div>
    <div id="latest-page">
      <div id="latest-wrap">
        <transition-group name="fade">
          <div v-for="{ node } of loadedPosts" :key="node.id" class="latest-card">
            <g-link :to="node.path" class="latest-card-img">
              <g-image class="_img" :src="node.hero_image" :alt="node.title" />
              <div class="latest-card-date">
                <span>{{node.date}}</span>
              </div>
            </g-link>
            <g-link class="latest-m-title" :to="node.path">
              <h2>{{node.title}}</h2>
            </g-link>
          </div>
        </transition-group>
      </div>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more" class="mt-2">You've reached all the posts.</div>
          <div slot="no-results" class="mt-2">Sorry, no posts yet :(</div>
        </infinite-loading>
      </ClientOnly>
    </div>
  </Layout>
</template>

<page-query>
query Blog($page: Int) {
	posts: allBlog (perPage: 10, page: $page) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				title 
        path 
                tag
                featured
                location
                author
                path
                hero_image (quality: 80)
                date  (format: "DD.YY")
			}
		}
	}
}
</page-query>
 
<script>
export default {
  metaInfo: {
    title: "Latest"
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1
    };
  },
  created() {
    this.loadedPosts.push(...this.$page.posts.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/latest/${this.currentPage + 1}`);
        if (data.posts.edges.length) {
          this.currentPage = data.posts.pageInfo.currentPage;
          this.loadedPosts.push(...data.posts.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  }
};
</script>

<style lang="scss">
#latest-page {
  @media (min-width: 501px) {
    padding: 10vw 0;
  }

  @media (max-width: 500px) {
    padding: 30vw 0 10vw;
  }
}

.infinite-loading-container {
  @media (min-width: 501px) {
    font-size: 2vw;
  }

  @media (max-width: 500px) {
    font-size: 5vw;
  }
}

#latest-wrap {
  @media (min-width: 501px) {
    width: 93.5vw;
    margin: 0 0 0 3.25vw;
    padding: 0 0 5vw;
  }

  @media (max-width: 500px) {
    width: 92vw;
    margin: 0 auto;
    padding: 0 0 5vw;
  }

  > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  }
}

.latest-card {
  position: relative;
  height: 42.5vw;
  overflow: hidden;
  width: 28.25vw;
  margin: 0 0 3vw;
  @media (min-width: 501px) {
  }

  @media (max-width: 500px) {
  }
}

#latest-hero {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 501px) {
    margin: 18vw 0 0;

    h1 {
      font-size: 6vw;
    }
  }

  @media (max-width: 500px) {
    margin: 40vw 0 0;

    h1 {
      font-size: 12vw;
    }
  }
}

#bg {
  position: absolute;
  top: 29vw;
  right: 0;
  height: 100vh;
  width: 56vw;
  background: linear-gradient(
    180deg,
    rgba(190, 108, 77, 0.8981967787114846) 9%,
    rgba(255, 44, 0, 0) 74%
  );
}

.latest-card-img {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 35vw;
}

.latest-card-date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1vw 0 0 1vw;
  font-size: 3vw;
  color: #fff;
}

.latest-m-title {
      padding: 1vw 0 0 0;
    font-size: 2vw;
}
</style>