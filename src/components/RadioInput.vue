<template>
  <div class="container">
    <div class="card">
      <form class="input-form">
        <input class="text-input" v-model="question" />
        <textarea class="text-area-input" v-model="options"></textarea>
        <button v-show="options.length > 0 && question !== ''" @click.prevent="addQuestion()" class="btn">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'RadioInput',
  data () {
    return {
      question: '',
      options: null,
      newOptions: []
    }
  },
  methods: {
    editOption (option) {
      option.split(',').filter((o) => {
        return o !== ''
      }).forEach((p) => {
        this.newOptions.push(p.trim())
      })
      return this.newOptions
    },
    addQuestion () {
      const newQuestion = {
        question: this.question,
        questionType: this.type,
        options: this.editOption(this.options)
      }
      this.$emit('addQuestion', newQuestion)
      console.log(newQuestion)
      // filter((o) => {
      //   o.trim()
      //   return o !== ''
      // })
    }
  },
  props: ['type']
}

</script>
