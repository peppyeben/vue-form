<template>
    <div class="container question-container">
      <ul v-if="questions.length !== 0">
        <li v-for="(question, index) in questions" :key="index">{{ question.question }} <i class="bi bi-pencil right"></i><i class="bi bi-x-lg end" @click="deleteQuestion(question, index)"></i>
        </li>
      </ul>
      <button v-if="questions.length !== 0" class="btn btn-submit">Submit</button>
    </div>
</template>
<script>
// @ is an alias to /src

// import HomePage from '@/views/HomePage'

export default {
  name: 'ViewQuestions',
  props: ['questions'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    deleteQuestion (question, index) {
      const questionEdit = {
        question: question,
        index: index
      }
      this.$emit('deleteQuestion', questionEdit)
    }
  },
  created () {
    // console.log(this.questions)
  }
}

</script>

<style scoped>
@import '@/css/style.css';
@import '@/assets/font/bootstrap-icons.css';

.bi {
  color: #1894C2;
  padding: .2rem;
  margin: 0 auto;
}

.bi:hover {
  background: red;
  border-radius: 50%;
}

li {
  position: relative;
}

li > i {
  margin: 0 auto;
}

.end {
  position: absolute;
  right: 0.3rem;
}

.right {
  position: absolute;
  right: 1.8rem;
}
</style>
