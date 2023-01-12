<template>
  <article id="home">
    <nuxt-img 
      src="/images/background.jpg"
      class="background-picture"
      fit="cover"
      loading="lazy"
    />
    <div class="home">
      <div class="home__text">
        <h1 class="home__text--title">
          {{ $t('shared.fullName') }}
        </h1>
        <h2 class="home__text--subtitle">
          {{ $t('home.jobTitle') }}
        </h2>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.home {
  justify-content: center;
  display: flex;
  z-index: 0;

  @include tablet {
    justify-content: left;
  }

  &__text {
    padding: 1rem 10vw;
    text-align: center;
    background-color: $semi-transparent;

    &--title {
      font-size: $title-home-mobile;
      font-weight: $light;
      margin: 0;

      @include tablet {
        font-size: $title-home-tablet;
      }
    }

    &--subtitle {
      font-size: $subtitle-home-mobile;
      font-weight: $thin;
      margin: 0;

      @include tablet {
        font-size: $subtitle-home-tablet;
      }
    }
  }
}

.background-picture {
  position: absolute;
  width: 100%;
  height: calc(100% - 97px);
  top: 0;
  object-fit: cover;

  @include tablet {
    height: calc(100% - 44px);
  }
}

article {
  min-height: 75vh;
}

:deep(.langDropdown) {
  border-color: $white;
}

:deep(.langDropdownList) {
  a {
    color: $white;
  }

  li {
    color: $white;
  }
}

:deep(.hamburger__line-in) {
  &::before,
  &::after {
    background-color: $white;
  }
}
</style>
