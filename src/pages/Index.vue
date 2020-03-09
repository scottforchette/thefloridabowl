<template>
  <Layout>
    <div id="index">
      <header id="hero">
        <div v-for="edge in $page.featured.edges" :key="edge.node.id" id="hero-wrap">
          <div id="hero-0">
            <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
          </div>
          <div id="hero-1">
            <div class="headline">
              <h1>{{edge.node.title}}</h1>
            </div>
            <g-link class="button" :to="edge.node.path">
              <span>Read More</span>
            </g-link>
          </div>
        </div>
      </header>
      <section id="i-0">
        <ul id="i-0-wrap">
          <li v-for="edge in $page.content.edges" :key="edge.node.id" class="i-0-li">
            <g-link :to="edge.node.path" class="i-img">
              <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
            </g-link>
            <div class="i-0-header">
              <div class="meta">
                <div class="tag">
                  <span>{{edge.node.tag}}</span>
                </div>
                <div class="date">
                  <timeago :since="edge.node.date" :datetime="edge.node.date" />
                </div>
              </div>
              <g-link class="index-m-title" :to="edge.node.path">
                <h2>{{edge.node.title}}</h2>
              </g-link>
              <div class="index-m-info">
                <span>{{edge.node.author}}</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div id="i-mid">
        <div v-for="edge in $page.topstory.edges" :key="edge.node.id" id="i-mid-wrap">
          <div id="i-mid-0">
            <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
          </div>
          <div id="i-mid-1">
            <div class="headline">
              <h1>{{edge.node.title}}</h1>
            </div>
            <g-link class="button" :to="edge.node.path">
              <span>Read More</span>
            </g-link>
          </div>
        </div>
      </div>
      <section id="i-1">
        <ul id="i-1-wrap">
          <li v-for="edge in $page.stories.edges" :key="edge.node.id" class="i-0-li">
            <g-link :to="edge.node.path" class="i-img">
              <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
            </g-link>
            <div class="i-0-header">
              <div class="meta">
                <div class="tag">
                  <span>{{edge.node.tag}}</span>
                </div>
                <div class="date">
                  <timeago :since="edge.node.date" :datetime="edge.node.date" />
                </div>
              </div>
              <g-link class="index-m-title" :to="edge.node.path">
                <h2>{{edge.node.title}}</h2>
              </g-link>
              <div class="index-m-info">
                <span>{{edge.node.author}}</span>
              </div>
            </div>
          </li>
        </ul>
      </section> 
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "More Sports, More video",
    titleTemplate: "The Florida Bowl | %s"
  }
};
</script>

<page-query>
 { 
    featured: allBlog(limit: 1, filter: { 
      location: { in: ["Featured"] }}) {
        edges {
            node {
                id
                location
                path
                featured
                title
                tag
                author
                path
                hero_image (quality: 80)
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
    topcontent: allBlog(limit: 1,filter: { location: { in: ["Content"] }, featured: { eq: true }}) {
        edges {
            node {
                id
                location
                featured
                path
                title
                tag
                author
                path
                hero_image (quality: 80)
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
    content: allBlog(limit: 4, filter: { location: { in: ["Content"] }, featured: { ne: true }}) {
        edges {
            node {
                id
                location
                path
                featured
                title
                tag
                author
                path
                hero_image (quality: 80)
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
    topstory: allBlog(limit: 1,filter: { location: { in: ["Stories"] }, featured: { eq: true }}) {
        edges {
            node {
                id
                location
                featured
                path
                title
                tag
                author
                path
                hero_image (quality: 80)
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
    stories: allBlog(limit: 4, filter: { location: { in: ["Stories"] }, featured: { ne: true }}) {
        edges {
            node {
                id
                location
                featured
                path
                title
                tag
                author
                path
                hero_image (quality: 80)
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
    watch: allBlog(limit: 4, filter: { 
      location: { in: ["Watch"] }}) {
        edges {
            node {
                id
                path
                title
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

<style lang='scss'>
#hero,
#i-mid {
  position: relative;

  @media (min-width: 501px) {
    height: 60vw;
  }

  @media (max-width: 500px) {
    height: 200vw;
  }
}

#hero-wrap,
#i-mid-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#hero-0,
#i-mid-0 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000;
  z-index: -1;

  img {
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

#hero-1,
#i-mid-1 {
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .headline {
    @media (min-width: 501px) {
      width: 50vw;
      margin: 0 0 5vw;
    }

    @media (max-width: 500px) {
      width: 70vw;
      margin: 0 0 15vw;
    }
  }

  .button {
    border: 1px solid #fff;
  }
}

#i-0-wrap,
#i-1-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    width: 90vw;
    margin: 0 auto;

  @media (min-width: 501px) {
    padding: 10vw 0; 

    li {
      height: 40vw;
      width: 49%;
      margin: 0 0 2.5vw;
    }
  }

  @media (max-width: 500px) {
    padding: 20vw 0; 

    li {
      height: 110vw;
      width: 100%;
      margin: 0 0 7.5vw;
    }
  }
}

.i-0-li,
.i-1-li {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: var(--bg-color);
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);
  transition: background 0.6s;

  .i-img {
    position: relative;
    overflow: hidden;
    width: 100%;

    @media (min-width: 501px) {
      height: 25vw;
    }

    @media (max-width: 500px) {
      height: 60vw;
    }

    img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}

.i-0-header,
.i-1-header {
  @media (min-width: 501px) {
    padding: 1.6vw 2vw;

    .meta {
      padding: 0 0 1.2vw;
    }
  }

  @media (max-width: 500px) {
    padding: 4vw;

    .meta {
      padding: 0 0 1.2vw;
    }
  }
} 
 

.index-m-meta {
  display: flex;
  @media (min-width: 501px) {
    margin: 1.5vw 0;
  }

  @media (max-width: 500px) {
    margin: 5.5vw 0;
  }
}

.index-m-title {
  @media (min-width: 501px) {
    font-size: 1.6vw;
    line-height: 1.3;
    letter-spacing: 0.04vw;
    margin: 0 0 1.4vw;
  }

  @media (max-width: 500px) {
    font-size: 5.5vw;
    letter-spacing: 0.09vw;
    line-height: 1.3;
    margin: 0 0 3vw;
  }
}

.index-m-info {
  opacity: 0.7;
  line-height: 1;

  @media (min-width: 501px) {
    letter-spacing: 0.03vw;
    font-size: 1.2vw;
  }

  @media (max-width: 500px) {
    font-size: 4.27vw;
  }
}
 
 
 
</style>
