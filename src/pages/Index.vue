<template>
  <Layout>
    <div id="latest" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div>
        <div>Featured +</div>
      </div>
      <ul class="_latest-ul">
        <li v-for="edge in $page.featured.edges" :key="edge.node.id">
          <g-link class="_latest-img" :to="edge.node.path">
            <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
            <div class="_latest-date">
              <div>{{edge.node.date}}</div>
            </div>
          </g-link>
          <g-link class="_latest-title" :to="edge.node.path">
            <h1 v-html="formatExcerpt(edge.node.title)"></h1>
          </g-link>
        </li>
      </ul>
    </div>
    <div id="brand" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <div id="b-0">THE LATEST</div>
     
    </div>
    <div id="all" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
      <ul class="_latest-ul">
        <li v-for="edge in $page.content.edges" :key="edge.node.id">
          <g-link class="_latest-img" :to="edge.node.path">
            <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
            <div class="_latest-date">
              <div>{{edge.node.date}}</div>
            </div>
          </g-link>
          <g-link class="_latest-title" :to="edge.node.path">
            <h1 v-html="formatExcerpt(edge.node.title)"></h1>
          </g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "The Florida Bowl"
  },
  methods: {
    formatExcerpt(excerpt) {
      const blurb = excerpt.slice(0, 60).trim();
      return blurb.indexOf("</h1>") !== -1
        ? blurb.slice(0, blurb.indexOf("</h1>")).trim() + ".."
        : blurb + "..";
    }
  }
};
</script>

<page-query>
 {  
    featured: allBlog(limit: 2, filter: { location: { in: ["Content"] }, featured: { eq: true }}) {
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
                date  (format: "MM.DD")
            } 
        }
    }
    content: allBlog(filter: { location: { in: ["Content"] }, featured: { ne: true }}) {
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
                date  (format: "MM.DD")
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
                date  (format: "MM.DD")
            } 
        }
    }
    stories: allBlog(limit: 2, filter: { location: { in: ["Stories"] }, featured: { ne: true }}) {
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
                date  (format: "MM.DD")
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
                date  (format: "MM.DD")
            } 
        }
    } 
}
</page-query>

<style lang='scss'>
#latest {
  position: relative;
  padding: 17.5vw 0 0 3.25vw;
  width: 93.5vw;
  display: flex;

  > div {
    width: 26.35vw;
    margin: 0 2vw 0 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 35vw 0 0 3.25vw;
    width: 93.5vw;

    > div {
      margin: 0 0 5vw 0;
    }
  }
}

._spacer {
  height: 100vh;
}

._latest-ul {
  display: flex;
  justify-content: space-between;
  width: 65vw;

  li {
    position: relative;
    height: 42.5vw;
    overflow: hidden;
    width: 30.25vw;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;

    li {
      height: 90vw;
      width: 100%;
    }
  }
}

._latest-img {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 35vw;

  @media (max-width: 500px) {
    height: 65vw;
  }
}

._latest-date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1vw 0 0 1vw;
  font-size: 3vw;
  color: #fff;

  @media (max-width: 500px) {
    padding: 3vw 0 0 3vw;
    font-size: 7vw;
  }
}

._latest-title {
  padding: 1vw 0 0 0;
  font-size: 2vw;

  @media (max-width: 500px) {
    padding: 3vw 0 0 0;
    font-size: 6vw;
  }
}

#brand {
  margin: 6vw 0 0 0;
  position: relative;
  height: 25vw;

  @media (max-width: 500px) {
    display: none;
  }
}

#b-0 {
  z-index: -1;
  position: absolute;
  left: 10vw;
  top: 2vw;
  font-size: 5.5vw;
  line-height: 5.25vw;
  width: 41vw;
  opacity: 0.1;
  text-align: center; 
}

#b-1 {
  width: 60vw;
  margin: 0 0 0 auto;

  > p {
    &:first-child {
      width: 15.3vw;
      padding: 2vw 0 0 0;
      margin: 0vw 3.3vw 0 auto;
    }

    &:nth-child(2) {
      width: 21.3vw;
      padding: 2vw 0 0 0;
      margin: 0vw 25vw 0 0;
    }
  }
 
}

._sm {
  font-size: 1.6vw;

  @media (max-width: 500px) {
         font-size: 5vw;

      }
}

#all {
  ._latest-ul {
    margin: 0 0 0 3.25vw;
    width: 93.5vw;
    overflow: hidden;
    flex-wrap: wrap;

    li {
      width: 28.25vw;
      margin: 0 0 3vw;

      @media (max-width: 500px) {
        width: 100%;
        margin: 0 0 3vw;
      }
    }
  }
}
</style>
