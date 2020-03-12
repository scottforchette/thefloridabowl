<template>
  <Layout>
    <header id="latest-hero">
      <h1>The Latest</h1>
    </header>
    <div id="latest-page">
      <div id="latest-wrap">
        <transition-group name="fade">
          <div v-for="{ node } of loadedPosts" :key="node.id" class="latest-card">
            <g-link :to="node.path" class="latest-card-img">
              <g-image :src="node.hero_image" :alt="node.title" />
            </g-link>
            <div class="latest-card-header">
              <div class="meta">
                <div class="tag">
                  <span>{{node.tag}}</span>
                </div>
                <div class="date">
                  <timeago :since="node.date" :datetime="node.date" />
                </div>
              </div>
              <g-link class="index-m-title" :to="node.path">
                <h2>{{node.title}}</h2>
              </g-link>
              <div class="index-m-info">
                <span>{{node.author}}</span>
              </div>
            </div>
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
                date  (format: "MMMM DD YYYY")
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 501px) {
    width: 70vw;
    margin: 0 auto;
    padding: 0 0 5vw;
  }

  @media (max-width: 500px) {
    width: 92vw;
    margin: 0 auto;
    padding: 0 0 5vw;
  }

  > span {
    width: 100%;
  }
}

.latest-card {
  display: flex;
  position: relative;
  overflow: hidden;
  background: var(--bg-color);
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
  transition: background 0.6s;

  @media (min-width: 501px) {
    height: 20vw;
    width: 100%;
    margin: 0 0 2.5vw;

    .latest-card-img {
      height: 100%;
      width: 35vw;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    height: 110vw;
    width: 100%;
    margin: 0 0 7.5vw;

    .latest-card-img {
      height: 60vw;
      width: 100%;
    }
  }

  .latest-card-img {
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}

.latest-card-header {
  @media (min-width: 501px) {
    width: 100%;
    padding: 1.6vw 2vw;

    .index-m-title {
      font-size: 2.3vw;
      line-height: 1.3;
      letter-spacing: 0.04vw;
      margin: 0 0 1.4vw;
    }
  }

  @media (max-width: 500px) {
    padding: 4vw;
    .index-m-title {
      font-size: 5.5vw;
      letter-spacing: 0.09vw;
      line-height: 1.3;
      margin: 0 0 3vw;
    }
  }
}

.latest-card-header .meta {
  @media (min-width: 501px) {
    padding: 0 0 2vw;
  }

  @media (max-width: 500px) {
    padding: 0 0 4vw;
  }
}

.index-m-info {
  opacity: 0.7;
  line-height: 1;
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
</style>