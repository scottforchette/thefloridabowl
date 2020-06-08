<template>
  <Layout>
    <article id="post">
      <header id="post-0">
        <div id="post-0-wrap">
          <div id="post-0-1">
            <video :src="$page.post.video" controls/> 
          </div>
        </div>
        <div id="post-0-2">
          <div class="headline">
            <h1>{{ $page.post.title }}</h1>
          </div>
        </div>
      </header>
      <div id="post-1">
        <div id="post-1-wrap">
          <div id="post-1-content" v-html="$page.post.content" />
          <vue-disqus shortname="https-sportstunl-netlify-com" :identifier="$page.post.title"></vue-disqus>

          <div id="post-1-extra">
            <div id="post-1-share">
              <a rel="nofollow" @click.prevent="fb">FACEBOOK</a>
              <a rel="nofollow" @click.prevent="tw">TWITTER</a>
              <a rel="nofollow" :href="em">EMAIL</a>
            </div>
          </div>
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
          content: "https://thefloridabowl.com" + this.$page.post.path
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
          content: "https://thefloridabowl.com" + this.$page.post.path
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
    em() {
      var subject = this.$page.post.title,
        body =
          "https://thefloridabowl.com" +
          this.$page.post.path +
          " " +
          "via @thefloridabowl",
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
          via: "thefloridabowl"
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
        video_url
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
#post-0 {
  position: relative;
  overflow: hidden;
}

@media (min-width: 501px) {
  #post-0 {
    .headline {
      width: 70vw;
    }
  }
  #post-1-share {
    display: flex;
    margin: 8vw 0 0;

    a {
      margin: 0 2vw 0 0;
    }
  }

  #post-1 {
    padding: 6vw 0 12vw;
    margin: 0 auto;
    width: 80vw;
  }

  #post-1-wrap {
    width: 55vw;
    margin: 0 auto;
  }

  #post-1-content {
    p {
      font-size: 1.2vw;
      margin: 0 0 2vw;
      line-height: 2.02381vw;
    }

    h1 {
      font-size: 1.90476vw;
      line-height: 2.85714vw;
      margin: 0 0 4vw;
    }
  }

  #disqus_thread {
    padding: 7.5vw 0 0;
  }
}

@media (max-width: 500px) {
  #post-0 {
    margin: 10vw 0 0; 
  }

  #post-1-share {
    display: flex;
    margin: 8vw 0 0;

    a {
      margin: 0 2vw 0 0;
    }
  }

  #post-1 {
    padding: 6vw 0 12vw;
    margin: 0 auto;
    width: 90vw;
  }

  #disqus_thread {
    padding: 15vw 0 0;
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
      margin: 10.54762vw 0;
    }
  }
}

#post-1-share {
  display: flex;
}

#post-0-wrap {
  position: relative;
  height: 50vw;
  width: 100%;
  overflow: hidden;
}

#post-0-1 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; 
  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

#post-0-2 {
  margin: 6vw 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 4vw;

  @media (max-width: 500px) {
    font-size: 9vw;
  }
}

#post {
  position: relative;
  padding: 17.5vw 0 0 3.25vw;
  width: 93.5vw;
}

.headline {
  line-height: 1.2;
}
</style>