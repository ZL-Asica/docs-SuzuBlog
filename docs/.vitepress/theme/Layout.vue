<script setup lang="ts">
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    const tenYearLater = new Date()
    tenYearLater.setFullYear(tenYearLater.getFullYear() + 10)

    document.cookie = `docs_suzu_lang=${encodeURIComponent(lang.value)}; 
                         expires=${tenYearLater.toUTCString()}; 
                         path=/; 
                         SameSite=Lax`
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
