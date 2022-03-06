<template>
  <div class="home">
    <div v-if="questions">{{ questions }}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxInput',
  data () {
    return {}
  },
  methods: {},
  created () {
    console.log(this.questions)
  },
  props: ['questions']
}

</script>
