<template>
  <article id="aboutMe">
    <h1 class="title">
      {{ $t('title.aboutMe') }}
    </h1>
    <section class="about-me">
      <nuxt-img
        src="/images/profile.jpg"
        fit="cover"
        class="about-me__picture"
        loading="lazy"
      />
      <p class="about-me__paragraph">
        {{ $t('aboutMe.myname') }}
        <span class="semi-bold">{{ $t('aboutMe.developer') }}</span>
        {{ $t('aboutMe.specialized') }}
        <span class="semi-bold">{{ $t('aboutMe.webdev') }}</span>
        {{ $t('aboutMe.workinIn') }}
        <span class="semi-bold">{{ $t('aboutMe.frontend') }}</span>
        {{ $t('aboutMe.asWellAs') }}
        <span class="semi-bold">{{ $t('aboutMe.backend') }}</span>
        {{ $t('aboutMe.technologies') }}
        <br><br>
        {{ $t('aboutMe.since') }}
        <span class="semi-bold">{{ $t('shared.city') }},</span>
        {{ $t('aboutMe.before') }}
        {{ $t('aboutMe.apprenticeship') }}
        <span class="semi-bold">{{ $t('aboutMe.apprenticeshipName') }}</span>
        {{ $t('aboutMe.completed') }}
        <br><br>
        <span class="semi-bold">{{ $t('aboutMe.started') }}</span>
        {{ $t('aboutMe.with') }}
        {{ $t('aboutMe.howStarted') }}
        <span class="semi-bold">{{ $t('aboutMe.computerSoftware') }}</span>
        {{ $t('aboutMe.whyStarted') }}
        <br><br>
        {{ $t('aboutMe.basically') }}
        <span class="semi-bold">{{ $t('aboutMe.prototypeDev') }}</span>
        {{ $t('aboutMe.whatIDo') }}
        <br><br>
        {{ $t('aboutMe.butOk') }}
        <span class="semi-bold">{{ $t('aboutMe.luckily') }}</span>
        {{ $t('aboutMe.notAll') }}
        <span class="semi-bold">{{ $t('aboutMe.besideJob') }}</span>
        {{ $t('aboutMe.whichAlso') }}
        <span class="semi-bold">{{ $t('aboutMe.hobby') }}</span>
        {{ $t('aboutMe.isAlso') }}
        <span class="semi-bold">{{ $t('aboutMe.sport') }}</span>
        {{ $t('aboutMe.important') }}
        {{ $t('aboutMe.watchSport') }}
        {{ $t('aboutMe.couchPotato') }}
        <span class="semi-bold">{{ $t('aboutMe.actively') }}</span>
        {{ $t('aboutMe.hobbys') }}
        <span class="semi-bold">{{ $t('aboutMe.handball') }}</span>
        {{ $t('aboutMe.hobbyHandball') }}
        <br><br>
        {{ $t('aboutMe.closing') }}
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AboutMePage',
  nuxtI18n: {
    paths: {
      en: '/aboutme',
      de: '/uebermich'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.aboutMe
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
.about-me {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;

  @include desktop {
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0;
  }

  &__picture {
    align-self: center;
    border-radius: 50%;
    margin: 1rem 0;
    height: 180px;
    width: 180px;
    transition: all 0.3s ease;
    object-fit: cover;

    &:hover {
      border-radius: 5%;
    }

    @include tablet {
      height: 200px;
      width: 200px;
    }

    @include desktop {
      margin: 0 5rem 0 0;
    }
  }

  &__paragraph {
    line-height: 2;
    padding: 2rem;
    text-align: justify;
    margin: 0;

    @include desktop {
      padding: 0;
      width: 70%;
    }
  }
}
</style>
