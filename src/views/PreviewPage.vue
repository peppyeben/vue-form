<template>
  <div class="home" v-if="questions.length" >
    <div class="container" v-for="(question, index) in questions" :key="index">
      <form class="form" v-if="question.questionType === 'text'">
        <label for="question.question">{{ question.question }}</label>
        <input class="text-input" type="text" id="question.question" />
      </form>
      <form class="form" v-if="question.questionType === 'radio'">
        <label for="i">{{ question.question }}</label>
        <div class="container form-container" v-for="(q, i) in question.options" :key="i">
          <input class="radio-input" type="radio" id="i" name="question.question" />
          <span>{{ q }}</span>
        </div>
      </form>
      <form class="form" v-if="question.questionType === 'checkbox'">
        <label for="question">{{ question.question }}</label>
        <div class="container form-container" v-for="(q, i) in question.options" :key="i">
          <input class="checkbox-input" type="checkbox" id="i" value="q" name="question.question" />{{ q }}
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'PreviewPage',
  props: ['questions', 'type'],
  data () {
    return {}
  },
  methods: {}
}

</script>

<style>
@import '@/css/style.css';
@import '@/assets/font/bootstrap-icons.css';
</style>
