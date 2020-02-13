<template>
  <Layout>
    <article id="post">
      <header id="post-0">
        <div>
          <aside class="aside-l">
            <div class="aside-title">
              <h2>Current</h2>
            </div>
          </aside>
          <div id="post-0-wrap">
            <div id="post-0-media">
              <div id="post-0-video-wrap" v-if="$page.post.video">
                <video :src="$page.post.video" controls preload="none"/>
              </div>
              <div id="post-0-media-poster">
                <g-image :src="$page.post.hero_image" :alt="$page.post.title"></g-image>
              </div>
            </div>
            <div id="post-0-next-prev">
              <g-link :to="prev">
                <span>PREV</span>
              </g-link>
              <g-link :to="next">
                <span>NEXT</span>
              </g-link>
            </div>
          </div>
        </div>
        <div>
          <aside class="aside-l">
            <ul class="aside-meta">
              <li>
                <span class="aside-author">POSTED BY</span>
                <span class="aside-meta-txt">{{ $page.post.author }}</span>
              </li>

              <li>
                <span class="aside-source">PHOTOS</span>
                <span class="aside-meta-txt">Unsplash.com</span>
              </li>
            </ul>
          </aside>
          <div id="post-0-header">
            <div class="meta">
              <div class="tag">
                <span>{{ $page.post.tag }}</span>
              </div>
              <div class="date">
                <timeago :since="$page.post.date" :datetime="$page.post.date"></timeago>
              </div>
            </div>
            <div class="headline">
              <h1>{{ $page.post.title }}</h1>
            </div>
          </div>
        </div>
      </header>
      <div id="post-1">
        <aside class="aside-l"></aside>
        <div id="post-1-wrap">
          <div id="post-1-content" v-html="$page.post.content"></div>
          <div id="post-1-extra">
            <div id="post-1-share">
              <a rel="nofollow" @click.prevent="fb">FACEBOOK</a>
              <a rel="nofollow" @click.prevent="tw">TWITTER</a>
              <a rel="nofollow" :href="em">EMAIL</a>
            </div>
            <div id="post-1-next-prev">
              <g-link :to="prev">
                <span>PREV</span>
              </g-link>
              <g-link :to="next">
                <span>NEXT</span>
              </g-link>
            </div>
          </div>
        </div>
      </div>
      <div id="post-2">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Related videos</h2>
          </div>
        </aside>
        <div id="post-2-wrap">
          <ul>
            <li v-for="post in $page.related.edges" :key="post.node.title">
              <g-link :to="post.node.path">
                <div class="meta">
                  <div class="tag">
                    <span>{{post.node.tag }}</span>
                  </div>
                  <div class="date">
                    <timeago :since="post.node.date" :datetime="post.node.date"></timeago>
                  </div>
                </div>
                <div class="related-headline">
                  <h2>{{ post.node.title }}</h2>
                </div>
                <div class="related-author">
                  <span>{{ post.node.author }}</span>
                </div>
              </g-link>
            </li>
          </ul>
          <g-link to="/404/" class="button">
            <span>More videos</span>
          </g-link>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      link: [
        {
          key: "canonical",
          ref: "canonical",
          content: "https://unfltrdsports.com" + this.$page.post.path
        }
      ],
      meta: [
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://unfltrdsports.com" + this.$page.post.path
        },
        {
          key: "description",
          property: "description",
          content: this.$page.post.title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.title
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.post.title
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.title
        }
      ]
    };
  },
  computed: {
    next() {
      var allBlogs = this.$page.all.edges,
        firstBlogPath = allBlogs[0].node.path,
        currentBlog = allBlogs.filter(
          l => l.node.title === this.$page.post.title
        );
      function isNull(l) {
        return null == l || null == l;
      }
      return isNull(currentBlog[0].next)
        ? firstBlogPath
        : currentBlog[0].next.path;
    },
    prev() {
      var allBlogs = this.$page.all.edges,
        firstBlogPath = allBlogs[0].node.path,
        currentBlog = allBlogs.filter(
          l => l.node.title === this.$page.post.title
        );
      function isNull(l) {
        return null == l || null == l;
      }
      return isNull(currentBlog[0].previous)
        ? firstBlogPath
        : currentBlog[0].previous.path;
    },
    em() {
      var subject = this.$page.post.title,
        body =
          "https://unfltrdsports.com" +
          this.$page.post.path +
          " " +
          "via @unfltrdsports",
        subjectEncoded = encodeURIComponent(subject),
        bodyEncoded = encodeURIComponent(body),
        href = "mailto:?subject=" + subjectEncoded + "&body=" + bodyEncoded;
      return href;
    },
    time() {}
  },
  methods: {
    fb() {
      var url = document.URL;
      window.open(
        "http://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
        "",
        "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
      );
    },
    tw() {
      var url = "https://twitter.com/share?",
        params = {
          url: document.URL,
          text: this.$page.post.title,
          via: "unfltrdsports"
        };
      for (var prop in params)
        url += "&" + prop + "=" + encodeURIComponent(params[prop]);
      window.open(
        url,
        "",
        "left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
      );
    }
  }
};
</script>

<page-query>
query getPostData ($path: String!) {
    post: blog(path: $path) {
        title
        date 
        author
        content
        video
        path
        tag
        description
        hero_image (quality: 80)
    }
    all: allBlog {
        edges {
            node {
                path
                title
                author
                date  (format: "MMMM DD YYYY")
            }
            previous {
              path
            }
            next {
                path
            }
        }
    }
    related: allBlog(limit: 3) {
        edges {
            node {
                path
                title
                author
                tag
                date  (format: "MMMM DD YYYY")
            } 
        }
    }
}
</page-query>

<style lang="scss">
#post {
  position: relative;
}

#post-0-media {
  position: relative;
  overflow: hidden;

  img, video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  } 
}

#post-0-next-prev,
#post-1-next-prev {
  display: flex;
  justify-content: space-between;
  opacity: 0.6;
}

#post-1-share {
  display: flex;
  opacity: 0.6;

  a {
    cursor: pointer;
  }
}

#post-1-extra {
  display: flex;
  justify-content: space-between;
  transition: border-color 0.6s;
  border-top: 1px solid var(--border-color);
}

.aside-meta {
  span,
  time {
    display: block;
  }
}

.aside-author,
.aside-date,
.aside-source,
.related-author {
  opacity: 0.6;
  display: block;
}

@media (min-width: 501px) {
  #post-0-header {
    padding: 0 18vw 0 2.75vw;
    width: 84vw;

    .headline {
      margin: 1.75vw 0;
    }
  }

  #post-0 {
    flex-direction: column;

    > div {
      display: flex;
    }
  }

  #post-0,
  #post-1,
  #post-2 {
    display: flex;
  }

  #post-0 {
    .aside-title {
      padding: 6vw 0 0;
    }
  }

  #post-0-wrap {
    padding: 4.75vw 6.5vw 2.75vw 2.75vw;
    width: 84vw;
  }

  #post-1-wrap {
    padding: 0 6vw 12vw 2.75vw;
    width: 84vw;

    .headline {
      margin: 1.75vw 0 4vw;
    }
  }

  #post-2-wrap {
    padding: 0 6vw 12vw 2.75vw;
    width: 84vw;

    .related-headline {
      font-size: 3vw;
      letter-spacing: -0.1vw;
      line-height: 1.12;
      margin: 1vw 0 0.75vw;
    }

    li {
      padding: 0 0 6vw;
    }
  }

  #post-1-content {
    padding: 0 24vw 10vw 0;

    p {
      margin: 0 0 2vw;
      line-height: 2.02381vw;
    }

    h1 {
      font-size: 1.90476vw;
      line-height: 2.85714vw;
      letter-spacing: -0.02976vw;
      margin: 3vw 0 6.54762vw 0;
    }
  }

  #post-0-media {
    height: 35vw;
    width: 75vw;
  }

  #post-0-next-prev,
  #post-1-next-prev {
    width: 9vw;
    margin: 0 0 0 auto;
  }

  #post-0-next-prev,
  #post-1-next-prev {
    width: 9vw;
    margin: 0 0 0 auto;
  }

  #post-0-next-prev {
    padding: 2vw 0 0;
  }

  .aside-author,
  .aside-date,
  .aside-source {
    padding: 0 0 1vw;
  }

  .aside-meta {
    li {
      padding: 0 0 2.4vw;

      &:last-child {
        padding: 0;
      }
    }
  }

  #post-1-extra {
    padding: 2vw 0 0;
  }

  #post-1-share {
    justify-content: space-between;
    a {
      margin: 0 3vw 0 0;
    }
  }

  .related-author {
    line-height: 1;
  }
}

@media (max-width: 500px) {
  #post-1-extra {
    padding: 6vw 0 0;
    flex-direction: column;
  }

  #post-0-next-prev,
  #post-1-next-prev {
    display: none;
  }

  #post-1-share {
    width: 100%;

    a {
      margin: 0 10vw 0 0;
    }
  }

  .aside-meta {
    li {
      padding: 0 0 5.5vw;

      span {
        &:first-child {
          padding: 0 0 4vw;
        }
      }

      span,
      time {
        font-size: 4.2vw;
      }
    }
  }

  #post-0-header {
    margin: 6vw 5.4vw 8.5vw;
  }

  #post-1-content {
    padding: 0 0 20vw;
  }

  #post-1 {
    margin: 6vw 5.4vw 0;
  }

  #post-0 {
    > div {
      &:first-child {
        .aside-l {
          display: none;
        }
      }

      &:last-child {
        display: flex;
        flex-direction: column-reverse;

        .aside-l {
          padding: 0 0 0 5vw;
        }
      }
    }
  }

  #post-1-content {
    p {
      font-size: 5vw;
      line-height: 8.5vw;
      margin: 0 0 6vw;
    }

    h1 {
      font-size: 6.28019vw;
      line-height: 9.66184vw;
      letter-spacing: -0.07246vw;
      margin: 10.54762vw 0;
    }
  }

  #post-2 {
    margin: 35vw 5.4vw 35vw;

    ul {
      padding: 0 0 10vw;
    }

    li {
      margin: 0 0 10vw;
    }
  }

  .meta {
    margin: 5.5vw 0;
  }

  .related-headline {
    font-size: 7vw;
    letter-spacing: -0.09vw;
    line-height: 1.3;
    margin: 0 0 3vw;
  }

  #post-0-media {
    height: 70vw;
    width: 100%;
  }
}
</style>