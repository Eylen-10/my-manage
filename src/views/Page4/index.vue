<template>
  <div class="flex1">
    <vue-pdf-embed :source="source1" />

    <!-- <h1>Base64</h1>
    <vue-pdf-embed :source="source2" /> -->
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'
export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: 'test.pdf',
      source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',
    }
  }
}
</script>