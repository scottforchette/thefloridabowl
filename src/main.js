import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/master.scss'
import InfiniteLoading from 'vue-infinite-loading'
import VueDisqus from 'vue-disqus'
import AOS from "aos";
import 'aos/dist/aos.css'

export default function (Vue, {
  head,
  router
}) {
  if (process.isClient) {
    Vue.use(AOS.init({
      once: true
    }));
  }

  Vue.use(InfiniteLoading)
  Vue.use(VueDisqus)

  Vue.component('Layout', DefaultLayout)

  router.afterEach((to, from) => {
    if (process.isClient) {
      document.documentElement.removeAttribute("style");
    }
  })

  head.link.push({
    key: 'canonical',
    rel: 'canonical',
    href: 'https://www.thefloridabowl.com/'
  })

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: 'The Florida Bowl'
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://thefloridabowl.com/og/1200-630.png'
  })

  head.meta.push({
    key: 'og:url',
    name: 'og:url',
    content: 'https://thefloridabowl.com/'
  })

  head.meta.push({
    key: 'og:type',
    name: 'og:type',
    content: 'website'
  })

  head.meta.push({
    key: 'og:image:height',
    name: 'og:image:height',
    content: '630'
  })

  head.meta.push({
    key: 'og:image:width',
    name: 'og:image:width',
    content: '1200'
  })

  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image'
  })

  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: 'The Florida Bowl'
  })

  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: 'https://thefloridabowl.com/og/1200-630.png'
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'The Florida Bowl serves sports and pop culture the right way. Consume responsibly.'
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: 'The Florida Bowl serves sports and pop culture the right way. Consume responsibly.'
  })

  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'The Florida Bowl serves sports and pop culture the right way. Consume responsibly.'
  })
}