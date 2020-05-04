<template lang="pug">
  div
    | This is a fresh setup
    pre const a = { b: { c: 'Optional Chaining is enabled!' } }
    pre a?.b?.c
    p {{chainingEnabled}}
    div
      h3 Default Light Color Schemes
      h4 Customize these at the nuxt.config.js file
      v-btn(color="primary") Primary
      v-btn(color="accent") Accent
      v-btn(color="secondary") Secondary
      v-btn(color="error") Error
</template>

<script>
export default {
  computed: {
    chainingEnabled () {
      const a = { b: { c: 'Optional Chaining is enabled!' } };
      return a?.b?.c;
    },
  },
};
</script>
