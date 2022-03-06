<template>
  <div class="container">
    <div class="card">
      <form class="input-form">
        <input :type="type" class="text-input" v-model="title" />
        <button @click.prevent="addQuestion()" class="btn">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'ShortText',
  props: ['type'],
  data () {
    return {
      title: ''
      // type: this.questionTypeSelected
    }
  },
  methods: {
    showText () {
      // this.title = this.shortTextTitle
      console.log(this.title)
    },
    addQuestion () {
      const newQuestion = {
        question: '',
        questionType: ''
      }
      newQuestion.question = this.title
      newQuestion.questionType = this.type
      // this.$emit('addQuestion', this.title)
      this.$emit('addQuestion', newQuestion)
      // console.log(newQuestion)
    }
  }
}

</script>
