<template>
  <div class="main-wrap">
    <main-header />
    <banner :domaine="domaine">
      <img
        :src="imgAPI.agencyInner[1]"
        :data-2d="imgAPI.agencyInner[0]"
        :data-3d="imgAPI.agencyInner[1]"
        class="img-2d3d"
        alt="services 3d"
      />
    </banner>
    <company-logo />
    <div class="space-top-short">
      <counter />
    </div>
    <div class="space-top-short">
      <v-container>
        <v-row justify="center">
          <v-col md="6" cols="12" class="px-md-12">
            <about-video :domaine="domaine" />
          </v-col>
          <v-col md="6" sm="8" cols="12" class="px-md-12">
            <about-progress />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="space-top-short space-bottom-short">
      <photo-slider :domaine="domaine" />
    </div>
    <div class="space-top-short space-bottom-short" id="call-to-action">
      <call-action />
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import { terrain } from '~/static/text/domaine'
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Header from '~/components/Header'
import Banner from '~/components/About/Banner'
import CompanyLogo from '~/components/CompanyLogo'
import Counter from '~/components/Counter'
import Video from '~/components/About/Video'
import Progress from '~/components/About/Progress'
import PhotoSlider from '~/components/About/PhotoSlider'
import CallAction from '~/components/CallAction'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    PhotoSlider,
    CallAction
  },
  data() {
    return {
      imgAPI: imgAPI,
      domaine: terrain
    }
  },
  head() {
    return {
      title: 'About | ' + brand.agency.desc
    }
  }
}
</script>
