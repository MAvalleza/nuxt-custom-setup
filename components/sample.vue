<template lang="pug">
  div
    | This is a fresh setup
    p {{chainingEnabled}}
</template>

<script>
export default {
  computed: {
    chainingEnabled () {
      const a = { b: { c: 'Chaining is enabled!' } };
      return a?.b?.c;
    },
  },
};
</script>
