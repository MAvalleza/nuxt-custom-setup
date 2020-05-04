<template lang="pug">
  v-container
    //- TODO: Remove this
    sample
</template>

<script>
import Sample from '~/components/sample';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Sample,
  },
  head () {
    return headMeta({
      title: 'Sample Web Page',
      description: 'A simple web page in this fresh setup.',
    });
  },
};
</script>
