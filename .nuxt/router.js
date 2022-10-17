import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _304c5e36 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _798fa9b4 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _1e6bb7f1 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _56b114ed = () => interopDefault(import('../pages/collection/index.vue' /* webpackChunkName: "pages/collection/index" */))
const _66d3d9f2 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _0c17fd66 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1074786f = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _5d501054 = () => interopDefault(import('../pages/about/agriculture/index.vue' /* webpackChunkName: "pages/about/agriculture/index" */))
const _345844e8 = () => interopDefault(import('../pages/about/elevage/index.vue' /* webpackChunkName: "pages/about/elevage/index" */))
const _260aa32a = () => interopDefault(import('../pages/about/team.vue' /* webpackChunkName: "pages/about/team" */))
const _6e34be4c = () => interopDefault(import('../pages/about/terrain/index.vue' /* webpackChunkName: "pages/about/terrain/index" */))
const _f98ce906 = () => interopDefault(import('../pages/blog/detail-blog.vue' /* webpackChunkName: "pages/blog/detail-blog" */))
const _19bcd968 = () => interopDefault(import('../pages/collection/detail-product.vue' /* webpackChunkName: "pages/collection/detail-product" */))
const _d424e6ce = () => interopDefault(import('../pages/collection/products.vue' /* webpackChunkName: "pages/collection/products" */))
const _3b1db3a0 = () => interopDefault(import('../pages/contact/with-map.vue' /* webpackChunkName: "pages/contact/with-map" */))
const _ce928f66 = () => interopDefault(import('../pages/utils/coming-soon.vue' /* webpackChunkName: "pages/utils/coming-soon" */))
const _5f74451c = () => interopDefault(import('../pages/utils/faq.vue' /* webpackChunkName: "pages/utils/faq" */))
const _5fedcece = () => interopDefault(import('../pages/utils/maintenance.vue' /* webpackChunkName: "pages/utils/maintenance" */))
const _fda2ca68 = () => interopDefault(import('../pages/utils/pricing.vue' /* webpackChunkName: "pages/utils/pricing" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _304c5e36,
    name: "index___en"
  }, {
    path: "/fr",
    component: _304c5e36,
    name: "index___fr"
  }, {
    path: "/en/blank-page",
    component: _798fa9b4,
    name: "blank-page___en"
  }, {
    path: "/en/blog",
    component: _1e6bb7f1,
    name: "blog___en"
  }, {
    path: "/en/collection",
    component: _56b114ed,
    name: "collection___en"
  }, {
    path: "/en/contact",
    component: _66d3d9f2,
    name: "contact___en"
  }, {
    path: "/en/login",
    component: _0c17fd66,
    name: "login___en"
  }, {
    path: "/en/register",
    component: _1074786f,
    name: "register___en"
  }, {
    path: "/fr/blank-page",
    component: _798fa9b4,
    name: "blank-page___fr"
  }, {
    path: "/fr/blog",
    component: _1e6bb7f1,
    name: "blog___fr"
  }, {
    path: "/fr/collection",
    component: _56b114ed,
    name: "collection___fr"
  }, {
    path: "/fr/contact",
    component: _66d3d9f2,
    name: "contact___fr"
  }, {
    path: "/fr/login",
    component: _0c17fd66,
    name: "login___fr"
  }, {
    path: "/fr/register",
    component: _1074786f,
    name: "register___fr"
  }, {
    path: "/en/about/agriculture",
    component: _5d501054,
    name: "about-agriculture___en"
  }, {
    path: "/en/about/elevage",
    component: _345844e8,
    name: "about-elevage___en"
  }, {
    path: "/en/about/team",
    component: _260aa32a,
    name: "about-team___en"
  }, {
    path: "/en/about/terrain",
    component: _6e34be4c,
    name: "about-terrain___en"
  }, {
    path: "/en/blog/detail-blog",
    component: _f98ce906,
    name: "blog-detail-blog___en"
  }, {
    path: "/en/collection/detail-product",
    component: _19bcd968,
    name: "collection-detail-product___en"
  }, {
    path: "/en/collection/products",
    component: _d424e6ce,
    name: "collection-products___en"
  }, {
    path: "/en/contact/with-map",
    component: _3b1db3a0,
    name: "contact-with-map___en"
  }, {
    path: "/en/utils/coming-soon",
    component: _ce928f66,
    name: "utils-coming-soon___en"
  }, {
    path: "/en/utils/faq",
    component: _5f74451c,
    name: "utils-faq___en"
  }, {
    path: "/en/utils/maintenance",
    component: _5fedcece,
    name: "utils-maintenance___en"
  }, {
    path: "/en/utils/pricing",
    component: _fda2ca68,
    name: "utils-pricing___en"
  }, {
    path: "/fr/about/agriculture",
    component: _5d501054,
    name: "about-agriculture___fr"
  }, {
    path: "/fr/about/elevage",
    component: _345844e8,
    name: "about-elevage___fr"
  }, {
    path: "/fr/about/team",
    component: _260aa32a,
    name: "about-team___fr"
  }, {
    path: "/fr/about/terrain",
    component: _6e34be4c,
    name: "about-terrain___fr"
  }, {
    path: "/fr/blog/detail-blog",
    component: _f98ce906,
    name: "blog-detail-blog___fr"
  }, {
    path: "/fr/collection/detail-product",
    component: _19bcd968,
    name: "collection-detail-product___fr"
  }, {
    path: "/fr/collection/products",
    component: _d424e6ce,
    name: "collection-products___fr"
  }, {
    path: "/fr/contact/with-map",
    component: _3b1db3a0,
    name: "contact-with-map___fr"
  }, {
    path: "/fr/utils/coming-soon",
    component: _ce928f66,
    name: "utils-coming-soon___fr"
  }, {
    path: "/fr/utils/faq",
    component: _5f74451c,
    name: "utils-faq___fr"
  }, {
    path: "/fr/utils/maintenance",
    component: _5fedcece,
    name: "utils-maintenance___fr"
  }, {
    path: "/fr/utils/pricing",
    component: _fda2ca68,
    name: "utils-pricing___fr"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
