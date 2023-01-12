<template>
  <div
    v-if="isOpen"
    class="cookie-banner"
  >
    <p>
      {{ $t('cookieBanner.consent') }}
      <nuxt-link :to="`${localePath('privacy')}#cookies`">
        {{ $t('shared.moreInfo') }}
      </nuxt-link>
    </p>
    <div class="close-container">
      <span
        class="close"
        @click="acceptedCookieBanner"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBannerComponent',
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    if (!this.getCookieBannerState() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getCookieBannerState () {
      if (process.browser) {
        return localStorage.getItem('closedCookieBanner')
      }
    },
    acceptedCookieBanner () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('closedCookieBanner', 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/cookie-banner';

.cookie-banner {
  @include cookie-banner;
}

.close-container {
  @include close-container;
}
</style>
