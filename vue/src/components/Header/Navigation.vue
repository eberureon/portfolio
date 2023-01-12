<template>
  <nav>
    <article class="navbar">
      <section
        v-if="disclaimer"
        class="navbar navbar__back-button"
      >
        <nuxt-link :to="localePath('index')">
          {{ $t('shared.back') }}
        </nuxt-link>
      </section>
      <section
        v-else
        ref="hamburger"
        class="navbar hamburger"
        @click="hamburgerClick"
      >
        <div class="hamburger__line hamburger__line--01">
          <div class="hamburger__line-in hamburger__line-in--01" />
        </div>
        <div class="hamburger__line hamburger__line--02">
          <div class="hamburger__line-in hamburger__line-in--02" />
        </div>
        <div class="hamburger__line hamburger__line--03">
          <div class="hamburger__line-in hamburger__line-in--03" />
        </div>
        <div class="hamburger__line hamburger__line--cross01">
          <div class="hamburger__line-in hamburger__line-in--cross01" />
        </div>
        <div class="hamburger__line hamburger__line--cross02">
          <div class="hamburger__line-in hamburger__line-in--cross02" />
        </div>
      </section>
      <LangToggle />
    </article>
    <div class="global-menu">
      <div class="global-menu__wrap">
        <nuxt-link
          v-for="(item, index) in links"
          :key="index"
          class="global-menu__item"
          :to="localePath(item.href)"
        >
          <span @click="hamburgerClick">{{ $t(item.i18n) }}</span>
        </nuxt-link>
      </div>
    </div>
    <svg
      ref="shapeOverlays"
      class="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path class="shape-overlays__path" />
      <path class="shape-overlays__path" />
      <path class="shape-overlays__path" />
    </svg>
  </nav>
</template>

<script>
import LangToggle from '@/components/Header/LangToggle.vue'

export default {
  name: 'NavigationComponent',
  components: {
    LangToggle
  },
  data () {
    return {
      overlay: {
        elem: null,
        path: null,
        numPoints: 85,
        duration: 500,
        delayPointsArray: [],
        delayPointsMax: 300,
        delayPerPath: 150,
        timeStart: Date.now(),
        isOpened: false,
        isAnimating: false
      },
      links: [
        { href: 'index', i18n: 'title.home' },
        { href: 'aboutme', i18n: 'title.aboutMe' },
        { href: 'skills', i18n: 'title.experience' },
        { href: 'contact', i18n: 'title.contact' }
      ]
    }
  },
  computed: {
    disclaimer () {
      return (
        this.$route.path === this.localePath('imprint') ||
        this.$route.path === this.localePath('privacy')
      )
    }
  },
  mounted () {
    this.overlay.elem = this.$refs.shapeOverlays
    this.overlay.path = this.overlay.elem.querySelectorAll('path')
  },
  methods: {
    // easing
    cubicInOut (t) {
      return t < 0.5 ? 4.0 * t * t * t : 0.5 * (2.0 * t - 2.0) ** 3.0 + 1.0
    },
    toggle () {
      this.overlay.isAnimating = true
      for (let i = 0; i < this.overlay.numPoints; i++) {
        this.overlay.delayPointsArray[i] =
          Math.random() * this.overlay.delayPointsMax
      }
      if (this.overlay.isOpened === false) {
        this.open()
      } else {
        this.close()
      }
    },
    open () {
      this.overlay.isOpened = true
      this.overlay.elem.classList.add('is-opened')
      this.overlay.timeStart = Date.now()
      this.renderLoop()
    },
    close () {
      this.overlay.isOpened = false
      this.overlay.elem.classList.remove('is-opened')
      this.overlay.timeStart = Date.now()
      this.renderLoop()
    },
    updatePath (time) {
      const points = []
      for (let i = 0; i < this.overlay.numPoints; i++) {
        points[i] =
          (1 -
            this.cubicInOut(
              Math.min(
                Math.max(time - this.overlay.delayPointsArray[i], 0) /
                  this.overlay.duration,
                1
              )
            )) *
          100
      }
      let str = ''
      str += this.overlay.isOpened ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`
      for (let i = 0; i < this.overlay.numPoints - 1; i++) {
        const p = ((i + 1) / (this.overlay.numPoints - 1)) * 100
        const cp = p - ((1 / (this.overlay.numPoints - 1)) * 100) / 2
        str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${
          points[i + 1]
        } ${p} `
      }
      str += this.overlay.isOpened ? 'H 100 V 0' : 'H 0 V 0'
      return str
    },
    render () {
      if (this.overlay.isOpened) {
        for (let i = 0; i < this.overlay.path.length; i++) {
          this.overlay.path[i].setAttribute(
            'd',
            this.updatePath(
              Date.now() -
                (this.overlay.timeStart + this.overlay.delayPerPath * i)
            )
          )
        }
      } else {
        for (let i = 0; i < this.overlay.path.length; i++) {
          this.overlay.path[i].setAttribute(
            'd',
            this.updatePath(
              Date.now() -
                (this.overlay.timeStart +
                  this.overlay.delayPerPath *
                    (this.overlay.path.length - i - 1))
            )
          )
        }
      }
    },
    renderLoop () {
      this.render()
      if (
        Date.now() - this.overlay.timeStart <
        this.overlay.duration +
          this.overlay.delayPerPath * (this.overlay.path.length - 1) +
          this.overlay.delayPointsMax
      ) {
        requestAnimationFrame(() => {
          this.renderLoop()
        })
      } else {
        this.overlay.isAnimating = false
      }
    },
    hamburgerClick () {
      const elemHamburger = this.$refs.hamburger
      const gNavItems = document.querySelectorAll('.global-menu__item')
      if (this.overlay.isAnimating) {
        return false
      }
      this.toggle()
      if (this.overlay.isOpened === true) {
        elemHamburger.classList.add('is-opened-navi')
        for (let i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add('is-opened')
        }
      } else {
        elemHamburger.classList.remove('is-opened-navi')
        for (let j = 0; j < gNavItems.length; j++) {
          gNavItems[j].classList.remove('is-opened')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/vendor/burger_menu/hamburger';

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  min-height: auto;

  &__back-button {
    display: flex;

    a {
      border-radius: 2px;
      color: $black;
      letter-spacing: 2px;
      margin-right: 0.75rem;
      padding: 1px 4px 2px 6px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        background-color: $dark-gray;
        color: $white;
      }
    }
  }
}
</style>
