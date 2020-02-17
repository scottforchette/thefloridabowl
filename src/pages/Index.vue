<template>
  <Layout>
    <div id="index">
      <div id="index-0">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Featured</h2>
          </div>
        </aside>
        <div id="index-0-wrap" v-for="edge in $page.featured.edges" :key="edge.node.id">
          <g-link id="index-featured" :to="edge.node.path">
            <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
          </g-link>
          <div id="index-featured-txt">
            <div class="meta">
              <div class="tag">
                <span>{{edge.node.tag}}</span>
              </div>
              <div class="date">
                <timeago :since="edge.node.date" :datetime="edge.node.date" />
              </div>
            </div>
            <div class="headline">
              <h1>{{edge.node.title}}</h1>
            </div>
            <g-link class="button" :to="edge.node.path">
              <span>Read More</span>
            </g-link>
          </div>
        </div>
      </div>
      <div id="index-1">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Top Content</h2>
          </div>
        </aside>
        <div id="index-1-wrap">
          <ul>
            <li v-for="edge in $page.topcontent.edges" :key="edge.node.id">
              <div class="index-m-featured">
                <g-link class="index-m-img" :to="edge.node.path">
                  <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
                </g-link>
                <div class="index-m-meta">
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
          <ul>
            <li v-for="edge in $page.content.edges" :key="edge.node.id">
              <div class="index-m-tile">
                <div class="index-m-meta">
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
          <g-link to="/404/" class="button">
            <span>More Videos</span>
          </g-link>
        </div>
      </div>
      <div id="index-2">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Top Stories</h2>
          </div>
        </aside>
        <div id="index-2-wrap">
          <ul>
            <li v-for="edge in $page.topstory.edges" :key="edge.node.id">
              <div class="index-m-featured">
                <g-link class="index-m-img" :to="edge.node.path">
                  <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
                </g-link>
                <div class="index-m-meta">
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
          <ul>
            <li v-for="edge in $page.stories.edges" :key="edge.node.id">
              <div class="index-m-tile">
                <div class="index-m-meta">
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
          <g-link class="button" to="/404/">
            <span>More videos</span>
          </g-link>
        </div>
      </div>
      <div id="index-3">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Watch it</h2>
          </div>
        </aside>
        <div id="index-3-wrap">
          <ul>
            <li class="index-3-li" v-for="edge in $page.watch.edges" :key="edge.node.id">
              <g-link class="index-m-img" :to="edge.node.path">
                <g-image :src="edge.node.hero_image" :alt="edge.node.title" />
              </g-link>
              <div class="index-m-meta">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "More Sports, More video",
    titleTemplate: "Unfltrdsports | %s"
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
#index {
  position: relative;

  @media (min-width: 501px) {
    height: 100%;

    > div {
      height: 100%;
      display: flex;

      > div:last-child {
        width: 84vw;
      }
    }

    aside {
      transition: border-color 0.6s;
      border-right: 1px solid var(--border-color);
    }
  }
}

#index-0 {
  @media (min-width: 501px) {
    .aside-title {
      padding: 6vw 0 0;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    .aside-l {
      display: none;
    }
  }
}

#index-0-wrap {
  @media (min-width: 501px) {
    padding: 4.75vw 4vw 6vw 2.75vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      height: 35vw;
    }

    .date {
      margin: 0 0 0 1vw;
    }
  }
}

#index-1,
#index-2 {
  @media (min-width: 501px) {
    .button {
      display: none;
    }
  }

  @media (max-width: 500px) {
    margin: 25vw 5.4vw 0;
  }
}

#index-3 {
  @media (max-width: 500px) {
    margin: 25vw 0 35vw;
  }
}

#index-1-wrap,
#index-2-wrap {
  @media (min-width: 501px) {
    padding: 0 4vw 6vw 2.75vw;
    display: flex;

    > ul {
      &:first-child {
        width: 33%;

        li {
          padding: 0 2vw 0 0;
        }
      }

      &:nth-child(2) {
        width: 66%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        li {
          height: 50%;
          width: 50%;
        }
      }

      height: 35vw;
    }
  }
  @media (max-width: 500px) {
    li {
      margin: 0 0 14vw;
    }
  }
}

#index-featured {
  position: relative;
  overflow: hidden;
  height: 100%;

  img {
    position: absolute;
  }

  @media (min-width: 501px) {
    width: 62.5%;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 70vw;
  }
}

.index-m-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 501px) {
    height: 16vw;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 58vw;
  }
}

#index-featured-txt {
  @media (min-width: 501px) {
    width: 33%;
    display: flex;
    flex-direction: column;

    .headline {
      margin: 2.75vw 0 2vw;

      h1 {
        font-size: 3.5vw; 
        line-height: 1.12;
      }
    }

    .sub {
      margin: 0 0 2vw;
    }
  }

  @media (max-width: 500px) {
    margin: 0 5.4vw;

    .meta {
      margin: 6vw 0 8.5vw;
    }

    .headline {
      margin: 0 0 6vw;

      h1 {
        font-size: 8.5vw; 
        line-height: 1.12;
      }
    }

    .excerpt {
      margin: 0 0 4.8vw;
    }

    .sub {
      margin: 0 0 6.5vw;
    }
  }
}

.index-m-featured {
  @media (min-width: 501px) {
    display: flex;
    flex-direction: column;
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
    font-size: 5vw;
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

.index-m-tile {
  @media (min-width: 501px) {
    padding: 0 0.5vw 0.5vw;

    .index-m-meta {
      margin: 0 0 1.5vw;
    }
  }
}

#index-3 {
  @media (max-width: 500px) {
    aside {
      margin: 0 5.4vw;
    }
  }
}

#index-3-wrap {
  position: relative;

  ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  @media (min-width: 501px) {
    padding: 0 0 0 2.75vw;

    ul {
      padding: 0 4vw 8vw 0;
    }
  }

  @media (max-width: 500px) {
    ul {
      padding: 0 5.4vw;
    }
  }
}

.index-3-li {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  a {
    white-space: normal;
    word-wrap: normal;
  }

  @media (min-width: 501px) {
    padding: 0 2vw 0 0;
    width: 26vw;
  }

  @media (max-width: 500px) {
    padding: 0 5.5vw 0 0;
    width: 82.5vw;
  }
}
#index-3-line {
  display: block;

  @media (min-width: 501px) {
    background: var(--border-color);
    position: absolute;
    left: 2.75vw;
    right: 3vw;
    height: 0.12vw;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
</style>
