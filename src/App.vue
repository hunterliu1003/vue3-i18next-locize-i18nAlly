<script setup lang="ts">
import { useTranslation, TranslationComponent } from "i18next-vue"
import { computed } from "vue"
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { i18next, t } = useTranslation()

const textInsurance = computed(() => t('insurance'))

const translationComponentExample = `
<TranslationComponent :translation="$t('message')">
  <template #faq-link>
    <a>{{ $t("faq") }}</a>
  </template>
</TranslationComponent>`


const error404 = '404'
const textError404 = computed(() => t([`error.${error404}`, 'error.unspecific']))

const error502 = '502'

// @ts-expect-error
// This is expected ts error.
const textError502 = computed(() => t(`error.${error502}`))
// If `error.502` is not defined in our translation file, we can fix the error by given a `defaultValue`
const fixed_textError502 = computed(() => t(`error.${error502}`, { defaultValue: t('error.unspecific') }))

const author = {
  name: 'Hunter',
  github: 'hunterliu1003@gmail.com'
}
</script>

<template>
  <LanguageSwitcher />
  <h1>Language: {{ i18next.language }}</h1>

  <h2>Basic Usage</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
    <div>inline: </div>
    <div>{{ t('insurance') }}</div>

    <div>computed: </div>
    <div>{{ textInsurance }}</div>

    <div>inline with $t: </div>
    <div>{{ $t('insurance') }}</div>

    <div>Nested key: </div>
    <div>{{ t('look.deep') }}</div>

    <div>With default value: </div>
    <div>{{ t('test', 'the default Value of test') }}</div>

    <div>textError404:</div>
    <div>{{ textError404 }}</div>

    <div>textError502:</div>
    <div>{{ fixed_textError502 }}</div>

    <div>What is How</div>
    <div>{{ t('key', { what: 'asdf', how: '4312' }) }}</div>

    <div>Who am I</div>
    <div>{{ t('iam', { authorName: author.name }) }}</div>

    <div>Nesting</div>
    <div>
      <div>{{ t('nesting1') }}</div>
      <pre>t('nesting1')</pre>
      <pre>
{
  "nesting1": "1 $t(nesting2)",
  "nesting2": "2 $t(nesting3)",
  "nesting3": "3"
}
      </pre>
    </div>

    <div>Passing nesting to interpolated</div>
    <div>
      <div>{{ t('key2', { val: '$t(key1)' }) }}</div>
      <pre>t('key2', { val: '$t(key1)' })</pre>
    </div>
  </div>

  <h2>Use by TranslationComponent with slot</h2>
  <TranslationComponent :translation="$t('message')">
    <template #faq-link>
      <a>{{ $t("faq") }}</a>
    </template>
  </TranslationComponent>
  <pre>
{{ translationComponentExample }}  
  </pre>
</template>
