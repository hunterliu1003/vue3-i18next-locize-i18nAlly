<script setup lang="ts">
import { useTranslation, TranslationComponent } from "i18next-vue"
import { computed } from "vue"
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { i18next, t } = useTranslation()

const term = computed(() => t('insurance'))
</script>

<template>
  <LanguageSwitcher />

  <h1>A test in {{ i18next.language }}</h1>
  <p>inline: {{ t('insurance') }}</p>
  <p>computed: {{ term }}</p>

  <p>inline with $t: {{ $t('insurance') }}</p>

  <TranslationComponent :translation="$t('message')">
    <template #faq-link>
      <a>{{ $t("faq") }}</a>
    </template>
  </TranslationComponent>
</template>
