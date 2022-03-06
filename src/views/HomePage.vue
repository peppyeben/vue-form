<template>
  <div class="home">
    <div class="container btn-container">
      <button class="btn btn-add" @click="addQuestionOption('text')">Text <i class="bi bi-text-center"></i></button>
      <button class="btn btn-add" @click="addQuestionOption('radio')">Radio <i class="bi bi-ui-radios-grid"></i></button>
      <button class="btn btn-add" @click="addQuestionOption('checkbox')">CheckBox <i class="bi bi-list-check"></i></button>
    </div>
    <ShortText v-if="questionTypeSelected === 'text'" :type="questionTypeSelected"  @addQuestion="addQuestion" />
    <RadioInput v-if="questionTypeSelected === 'radio'" :type="questionTypeSelected" @addQuestion="addQuestion" />
    <CheckBox v-if="questionTypeSelected === 'checkbox'" :type="questionTypeSelected" @addQuestion="addQuestion" />
  </div>
</template>
<script>
// @ is an alias to /src

import ShortText from '@/components/ShortText'
import CheckBox from '@/components/CheckBox'
import RadioInput from '@/components/RadioInput'

export default {
  name: 'HomePage',
  components: {
    ShortText,
    CheckBox,
    RadioInput
  },
  props: ['questionTypes', 'questionTypeSelected'],
  data () {
    return {
      questionFromText: null
    }
  },
  computed: {},
  methods: {
    addQuestion (question) {
      this.questionFromText = question
      this.questionFromTextOne()
    },
    questionFromTextOne () {
      return this.$emit('addNewQuestion', this.questionFromText)
    },
    addQuestionOption (type) {
      const q = this.questionTypes.filter((question) => {
        return type === question
      }).toString()
      this.$emit('questionType', q)
    }
  }
}

</script>

<style>
</style>
