<template>
  <nav>
    <router-link to="/"><strong>Home</strong></router-link>
    <router-link to="/questions"><strong>Questions</strong></router-link>
    <router-link to="/preview"><strong>Preview</strong></router-link>
  </nav>
  <router-view :questions="questions" :questionTypeSelected="questionTypeSelected" :questionTypes="questionTypes" @questionType="questionType" @addNewQuestion="addNewQuestion" @deleteQuestion="deleteQuestion" />
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  data () {
    return {
      questionTypes: ['text', 'radio', 'checkbox'],
      questions: [],
      questionTypeSelected: null
    }
  },
  methods: {
    showText () {},
    questionType (type) {
      this.questionTypeSelected = type
    },
    addNewQuestion (question) {
      this.questions.push(question)
      this.questionTypeSelected = null
      console.log(question)
    },
    deleteQuestion (question) {
      return this.questions.splice(question.index, 1)
      // console.log(this.questions)
    }
    // addQuestionOption (type) {
    //   const q = this.questionTypes.filter((question) => {
    //     return type === question
    //   })
    //   this.questionTypeSelected = q.toString()
    //   // console.log(this.questionTypeSelected)
    // }
  }
}

</script>

<style>
@import '@/css/style.css';
@import '@/assets/font/bootstrap-icons.css';
</style>
