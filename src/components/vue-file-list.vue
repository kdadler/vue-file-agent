<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default {
  props: ['value', 'axis', 'appendTo'],
};
</script>
