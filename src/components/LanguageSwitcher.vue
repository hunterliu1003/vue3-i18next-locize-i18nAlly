<script setup lang="ts">
const languages = [
  { code: "zh-TW", nativeName: "繁體中文" },
  { code: "en", nativeName: "English" },
  { code: "jp", nativeName: "日文" },
];
</script>


<template>
  <span v-for="(lng, index) in languages" :key="lng.code">
    <span v-if="index > 0">&nbsp;|&nbsp;</span>
    <a href="#" v-if="$i18next.resolvedLanguage !== lng.code" type="button"
      v-on:click="$i18next.changeLanguage(lng.code)">
      {{ lng.nativeName }}
    </a>
    <strong v-else>
      {{ lng.nativeName }}
    </strong>
  </span>
</template>
