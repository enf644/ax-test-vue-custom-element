<template>
  <div>
    <h4>{{ name }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    name: null
  },
  created() {
    console.log('Debug this Vue');
  }
};
</script>
