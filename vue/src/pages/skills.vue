<template>
  <article id="skills">
    <h1 class="title">
      {{ $t('title.experience') }}
    </h1>

    <section>
      <div class="employer">
        <h2 class="employer__title">
          {{ $t('skills.employers') }}
        </h2>

        <div class="employer__content">
          <ul>
            <li
              v-for="item in employers"
              :key="item.id"
            >
              <a
                :href="item.url"
                target="_blank"
                rel="noopener nofollow"
                class="employer__link"
              >
                <svg :class="`employer__link--${item.svgClass}`">
                  <use :xlink:href="require('@/assets/img/logos.svg') + item.svgName" />
                </svg>
              </a>
              <p>{{ item.year }}</p>
              <p>{{ $t(item.position) }}</p>
              <p>{{ $t(item.company) }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="skills">
        <h2 class="skills__title">
          {{ $t('skills.primary' ) }}
        </h2>
        <br>
        <div
          v-for="item in primarySkills"
          :key="item.id"
          class="skills__picture"
          :title="$t(item.label)"
        >
          <nuxt-img
            :src="`/images/icons/${item.className}.svg`"
            :class="`skills__picture--${$t(item.className)}`"
          />
          <p class="skills__label">
            {{ $t(item.label) }}
          </p>
        </div>
        <input
          id="skills__dropdown-btn--css"
          class="skills__dropdown-btn--css"
          type="checkbox"
        >
        <label for="skills__dropdown-btn--css">
          <div
            class="skills__picture"
            title="CSS"
          >
            <nuxt-img
              src="/images/icons/css.svg"
              class="skills__picture--css"
            />
            <h4 class="skills__label">{{ $t('skills.css' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
          </div>
        </label>
        <input
          id="skills__dropdown-btn--javascript"
          class="skills__dropdown-btn--javascript"
          type="checkbox"
        >
        <label for="skills__dropdown-btn--javascript">
          <div
            class="skills__picture"
            title="JavaScript"
          >
            <nuxt-img
              src="/images/icons/javascript.svg"
              class="skills__picture--javascript"
            />
            <h4 class="skills__label">{{ $t('skills.javascript' ) }} <fa :icon="['fas', 'angle-up']" /></h4>
          </div>
        </label>

        <!-- Dropdown Content -->
        <div class="skills__dropdown-content--css">
          <div
            v-for="item in cssDropdownContent"
            :key="item.id"
            class="skills__picture"
            :title="$t(item.label)"
          >
            <nuxt-img
              :src="`/images/icons/${item.className}.svg`"
              :class="`skills__picture--${$t(item.className)}`"
            />
            <h4 class="skills__label">
              {{ $t(item.label) }}
            </h4>
          </div>
        </div>
        <div class="skills__dropdown-content--javascript">
          <div
            v-for="item in jsDropdownContent"
            :key="item.id"
            class="skills__picture"
            :title="$t(item.label)"
          >
            <nuxt-img
              :src="`/images/icons/${item.className}.svg`"
              :class="`skills__picture--${$t(item.className)}`"
            />
            <h4 class="skills__label">
              {{ $t(item.label) }}
            </h4>
          </div>
        </div>

        <div
          v-for="item in otherSkill"
          :key="item.id"
          class="skills__picture"
          :title="$t(item.label)"
        >
          <nuxt-img
            :src="`/images/icons/${item.className}.svg`"
            :class="`skills__picture--${$t(item.className)}`"
          />
          <h4 class="skills__label">
            {{ $t(item.label) }}
          </h4>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'SkillsPage',
  data () {
    return {
      employers: [
        {
          id: 1,
          url: 'https://www.jochen-schweizer.de',
          svgClass: 'jochenschweizer',
          svgName: '#jochen-schweizer-without-slogan',
          year: 2016,
          position: 'aboutMe.developer',
          company: 'skills.jochenschweizer'
        },
        {
          id: 2,
          url: 'https://www.myposter.de',
          svgClass: 'myposter',
          svgName: '#myposter',
          year: 2020,
          position: 'aboutMe.developer',
          company: 'skills.myposter'
        },
        {
          id: 3,
          url: 'https://www.brainbirds.com',
          svgClass: 'brainbirds',
          svgName: '#brainbirds',
          year: 2020,
          position: 'aboutMe.developer',
          company: 'skills.brainbirds'
        }
      ],
      primarySkills: [
        { id: 4, label: 'skills.docker', className: 'docker' },
        { id: 5, label: 'skills.html', className: 'html' }
      ],
      cssDropdownContent: [
        { id: 6, label: 'skills.less', className: 'less' },
        { id: 7, label: 'skills.sass', className: 'sass' },
        { id: 8, label: 'skills.bootstrap', className: 'bootstrap' }
      ],
      jsDropdownContent: [
        { id: 9, label: 'skills.nodejs', className: 'nodejs' },
        { id: 10, label: 'skills.vuejs', className: 'vuejs' },
        { id: 16, label: 'skills.reactjs', className: 'reactjs' }
      ],
      otherSkill: [
        { id: 11, label: 'skills.scrum', className: 'scrum' },
        { id: 12, label: 'skills.agile', className: 'agile' },
        { id: 13, label: 'skills.sql', className: 'sql' },
        { id: 14, label: 'skills.unix', className: 'tux' },
      ]
    }
  },
  nuxtI18n: {
    paths: {
      en: '/skills',
      de: '/erfahrung'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.experience
      } — Leon Ebel — Full Stack Developer`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/skills-pictures';
@import '~@/assets/scss/modules/dropdown';

section {
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;

  @include tablet {
    grid-template-columns: 50vw auto;
  }
}

.employer {
  &__title {
    font-size: $skills-title;
    font-weight: $regular;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 3rem;

    @include desktop {
      text-align: unset;
      padding-left: 10rem;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    margin: auto;

    @include tablet {
      justify-content: flex-start;
    }

    ul {
      list-style-type: none;

      li {
        margin-bottom: 3rem;
      }
    }

    p {
      line-height: 2;
      margin: 0 0 0 12rem;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 2px solid $black;
    border-left-style: dashed;
    border-right-style: dashed;
    border-radius: 50%;
    height: 100px;
    width: 105px;

    &--jochenschweizer {
      height: 90px;
    }

    &--myposter {
      width: 85px;
    }

    &--brainbirds {
      width: 85px;
    }
  }
}

.skills {
  overflow: hidden;
  padding: 5rem 0 0;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  @include desktop {
    max-width: none;
  }

  ul {
    list-style-type: none;
  }

  @include tablet {
    padding-top: 0;
  }

  &__title {
    font-size: $skills-title;
    font-weight: $regular;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 3rem;
  }

  &__picture {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 0.9rem 1.5rem 10rem;
    height: 70px;
    width: 105px;

    @include tablet {
      width: 115px;
    }
  }

  &__label {
    font-weight: $light;
    letter-spacing: 0.5px;
    margin-top: 3rem;
    text-align: center;
  }
}

@each $name in $skills-pictures {
  $i: index($skills-pictures, $name);
  .skills__picture--#{$name} {
    width: nth($skills-bg-size, $i);

    @if $name == 'Scrum' {
      width: 115px;
    }
  }
  @if $name == 'css' or $name == 'javascript' {
    .skills__dropdown-btn--#{$name} {
      @include dropdown-btn(skills__dropdown-content--#{$name});
    }
    .skills__dropdown-content--#{$name} {
      @include dropdown-default;
    }
  }
}
</style>
