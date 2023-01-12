<template>
  <article id="contact">
    <h1 class="title">
      {{ $t("title.contact") }}
    </h1>

    <form
      name="contact-form"
      class="contact-form"
    >
      <input
        type="text"
        name="name"
        :title="$t('contact.nameTitle')"
        class="contact-form__input"
        placeholder="Name*"
        required
      >
      <input
        type="email"
        name="email"
        :title="$t('contact.emailTitle')"
        class="contact-form__input"
        placeholder="E-Mail*"
        required
      >
      <input
        id="honeypot"
        class="honeypot"
        type="text"
        name="honeypot"
        value=""
        tabindex="-1"
        autocomplete="off"
      >
      <button
        type="button"
        class="val-message"
        :title="$t('contact.validateTitle')"
        tabindex="-1"
      />
      <textarea
        name="message"
        class="contact-form__message"
        :title="$t('contact.messageTitle')"
        :placeholder="$t('contact.messagePlaceholder')"
        required
      />
      <br>
      <input
        type="submit"
        class="contact-form__submit"
        name="submit"
        :value="$t('contact.send')"
        @click="submit"
      >
    </form>
  </article>
</template>

<script>
export default {
  name: 'ContactPage',
  nuxtI18n: {
    paths: {
      de: '/kontakt',
      en: '/contact'
    }
  },
  head () {
    return {
      title: `${
        this.$i18n.messages[this.$i18n.locale].title.contact
      } — Leon Ebel — Full Stack Developer`
    }
  },
  methods: {
    submit () {
      return this.submitContactForm()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/modules/input-field';

.title {
  @include desktop {
    margin-bottom: 2rem;
  }
}

.contact-form {
  text-align: center;
  margin: 0;

  &__input {
    @extend %input-field;

    @include desktop {
      width: 50%;
    }
  }

  &__message {
    @extend %input-field;
    height: 370px;

    @include desktop {
      width: 50%;
    }
  }

  &__submit {
    @extend %input-field;
    background-color: transparent;
    border: 1px solid $black;
    color: $black;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover:enabled {
      background-color: $gray;
      border-color: $gray;
      color: $white;
      cursor: pointer;
    }

    @include tablet {
      width: 50%;
    }

    @include desktop {
      width: 25%;
    }
  }
}

.honeypot {
  opacity: 0;
  position: absolute;
  left: 5rem;
  bottom: 0;
  z-index: -100000;
}

.val-message {
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: $track-and-field;
  display: none;
  font-family: inherit;
  margin-left: 2rem;
  text-align: left;
  text-decoration: underline;
  width: 75%;

  @include desktop {
    width: 50%;
  }
}
</style>
