import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/master.scss'
import VueTimeago from 'vue-timeago'

export default function (Vue, {
  head,
  router
}) {
  Vue.component('Layout', DefaultLayout)

  router.afterEach((to, from) => {
    if (process.isClient)
    document.documentElement.removeAttribute("style");
  }) 

  Vue.use(VueTimeago, {
    name: 'timeago',
  })

  head.link.push({
    key: 'canonical',
    rel: 'canonical',
    href: 'https://www.unfltrdsports.com/'
  })

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: 'More sports, more video'
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://unfltrdsports.com/og/1200-630.png'
  })

  head.meta.push({
    key: 'og:url',
    name: 'og:url',
    content: 'https://unfltrdsports.com/'
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
    content: 'More sports, more video'
  })

  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: 'https://unfltrdsports.com/og/1200-630.png'
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Travel back in time and stay dripped in everything vintage. More sports, more video'
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: 'Travel back in time and stay dripped in everything vintage. More sports, more video'
  })

  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Travel back in time and stay dripped in everything vintage. More sports, more video'
  })
}