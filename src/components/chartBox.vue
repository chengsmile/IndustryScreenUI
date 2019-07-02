<template>
  <div class="chart-box">
    <div class="chart-title" v-if="title !== ''">
      <div class="header-title">
        <slot name="header">
          <span class="title">{{title}}</span>
        </slot>
      </div>
    </div>
    <div :class="[title !== '' ? 'chart-wrapper': 'chart-wrapper full-h']">
      <slot name="chart"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartBox',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>
