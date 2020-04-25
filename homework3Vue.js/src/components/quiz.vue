<template>
  <div class="qiuz">
    <h1>Тест</h1>
    <p>Пройдіть тест та дізнайтесь, чи знаєте ви JS</p>
    <div class="quiz-questions">
      <div class="question" v-for="quizQuestion in quiz" :key="quizQuestion.questionId">
        <p>{{ quizQuestion.question }}</p>
        <div class="answers">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quiz",
  data: function() {
    return {
      quiz: [
        {
          question: " Ви знаєте JS?",
          questionId: "0",
          rightAnswerId: "0",
          answers: [
            {
              answerId: "0",
              answer: "так"
            },
            {
              answerId: "1",
              answer: "ні"
            }
          ]
        },
        {
          question: " Ви знаєте JS?",
          questionId: "1",
          rightAnswerId: "0",
          answers: [
            {
              answerId: "0",
              answer: "так"
            },
            {
              answerId: "1",
              answer: "ні"
            }
          ]
        },
        {
          question: " Ви знаєте JS?",
          questionId: "2",
          rightAnswerId: "0",
          answers: [
            {
              answerId: "0",
              answer: "так"
            },
            {
              answerId: "1",
              answer: "ні"
            }
          ]
        },
        {
          question: " Ви знаєте JS?",
          questionId: "3",
          rightAnswerId: "0",
          answers: [
            {
              answerId: "0",
              answer: "так"
            },
            {
              answerId: "1",
              answer: "ні"
            }
          ]
        },
        {
          question: " Ви знаєте JS?",
          questionId: "4",
          rightAnswerId: "0",
          answers: [
            {
              answerId: "0",
              answer: "так"
            },
            {
              answerId: "1",
              answer: "ні"
            }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
