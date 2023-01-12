<template>
  <div class="content">
    <h1>{{ $t('title.imprint') }}</h1>
    <h3>{{ $t('imprint.liabilityHeadline') }}</h3>

    <p>
      {{ $t('shared.fullName') }}<br><br>
      <nuxt-link :to="localePath('contact')">
        {{ $t('shared.contactForm') }}
      </nuxt-link>
    </p>

    <h3>{{ $t('imprint.liabilityContent') }}</h3>
    <p>{{ $t('imprint.liabilityContentDesc') }}</p>
    <p>{{ $t('imprint.liabilityContentDescTwo') }}</p>

    <h3>{{ $t('imprint.liabilityLinks') }}</h3>
    <p>{{ $t('imprint.liabilityLinksDesc') }}</p>
    <p>{{ $t('imprint.liabilityLinksDescTwo') }}</p>

    <h3>{{ $t('imprint.copyright') }}</h3>
    <p>{{ $t('imprint.copyrightDesc') }}</p>
    <p>{{ $t('imprint.copyrightDescTwo') }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImprintPage',
  nuxtI18n: {
    paths: {
      en: '/imprint',
      de: '/impressum'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.imprint
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>
