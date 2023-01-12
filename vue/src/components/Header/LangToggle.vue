<template>
  <div
    class="lang-dropdown"
    @click="toggleLangDropdown"
  >
    <button class="lang-dropdown__button">
      <fa :icon="['fas', 'language']" /><p>{{ $t('shared.chooseLang') }}</p>
    </button>
    <transition
      name="expand"
      @enter="enterTransition"
      @after-enter="afterEnterTransition"
      @leave="leaveTransition"
    >
      <div
        v-if="isOpen"
        class="lang-dropdown__list"
      >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          <p>{{ locale.name }}</p>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LangToggleComponent',
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    toggleLangDropdown () {
      this.isOpen = !this.isOpen
    },
    enterTransition (el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnterTransition (el) {
      el.style.height = 'auto'
    },
    leaveTransition (el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/dropdown';

.lang-dropdown {
  border-radius: 5px;
  border: 1px solid $black;
  font-size: $font-size-tiny;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  z-index: 1;

  @include tablet {
    font-size: $font-size-small;
  }

  label {
    margin: 0;
  }

  &__button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    color: $black;
    font: inherit;
    padding: 0;
    outline: none;
  }

  &__list {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    height: 0;
    width: 100%;

    a {
      color: $black;
      text-decoration: none;
      width: 100%;
    }

    p {
      font-weight: $light;
      padding-top: 1.25rem;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  @include dropdown-default;
}
</style>
