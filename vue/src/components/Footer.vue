<template>
  <footer>
    <div class="social-media">
      <a
        v-for="(item, index) in linksSocialMedia"
        :key="index"
        :href="item.href"
        :title="item.title"
        :aria-label="item.label"
        target="_blank"
        rel="noopener nofollow"
      >
        <fa :icon="['fab', item.icon]" />
      </a>
    </div>

    <div class="copyright">
      &copy; 2018 - <span>{{ currentYear }}</span> -
      {{ $t('shared.fullName') }}
    </div>

    <div class="disclaimer">
      <nuxt-link
        v-for="(item, index) in linksDisclaimer"
        :key="index"
        target="_self"
        :to="localePath(item.href)"
      >
        {{ $t(item.i18n) }}
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      currentYear: null,
      linksSocialMedia: [
        {
          href: 'https://twitter.com/ImEberon',
          title: 'Twitter',
          label: 'Personal Twitter',
          icon: 'twitter'
        },
        {
          href: 'https://www.linkedin.com/in/ebelleon',
          title: 'LinkedIn',
          label: 'Personal LinkedIn',
          icon: 'linkedin'
        },
        {
          href: 'https://www.github.com/ebelleon',
          title: 'Github',
          label: 'Personal Github',
          icon: 'github'
        }
      ],
      linksDisclaimer: [
        { href: 'privacy', i18n: 'title.privacy' },
        { href: 'imprint', i18n: 'title.imprint' }
      ]
    }
  },
  created () {
    this.currentYear = new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $footer;
  bottom: 0;
  box-shadow: inset 0 1px 0 0 #4f4a4a, inset 0 2px 4px 0 $black;
  font-size: $font-size-small;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.copyright,
.social-media,
.disclaimer {
  padding: .4rem 0;

  a {
    color: $black;
    text-decoration: none;
    padding: 0 1rem;

    &:hover {
      .fa-twitter {
        color: #1da1f2;
      }
      .fa-linkedin {
        color: #0077b5;
      }
      .fa-github {
        color: #24292e;
      }
    }
  }

  @include tablet {
    display: inline-block;
    width: 33%;

    a {
      padding: 0 .5rem;
    }
  }
}
</style>
