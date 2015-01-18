(function(){
  
  'use strict';
  
  angular
    .module('quiz')
    .value('Quiz', Quiz);
  
  function Quiz() {
    this.questions = [];
    this.currentQuestionIndex = -1;
  }

  angular.extend(Quiz.prototype,{

    addQuestions: function(questions) {
      var that = this;
      angular.forEach(questions,function(question){
        that.addQuestion(question);
      });
    },
    
    addQuestion: function(question) {
      this.questions.push(question);
      question.userAnswer = null;
      question.questionNumber = this.getQuestionCount();
    },
    
    getCurrentQuestion: function() {
      return this.questions[this.currentQuestionIndex];
    },
    
    getCurrentQuestionNumber: function() {
      
      return this.currentQuestionIndex + 1;
    },

    getQuestionCount: function() {
      
      return this.questions.length;
    },
    
    gotoNextQuestion: function() {
      
      if(this.currentQuestionIndex < this.questions.length) {
        this.currentQuestionIndex++;
      }
    },

    gotoPreviousQuestion: function() {

      if(this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
      
    },
    
    goToQuestionNumber: function(number) {
    
      if(number >= 1 && number <= this.getQuestionCount()) {
        this.currentQuestionIndex = number - 1;
      }
    },
    
    isOnLastQuestion: function() {
      
      return this.currentQuestionIndex === (this.questions.length - 1);
    },
    
    isOnFirstQuestion: function() {
      
      return this.currentQuestionIndex === 0;
    },
    
    isFinished: function() {
      
      return this.currentQuestionIndex === this.questions.length;
    },
    
    start: function() {
      
      angular.forEach(this.questions, function(question){
        question.userAnswer = null;
      });
      
      this.currentQuestionIndex = 0;
    },
    
    getResult: function() {
      var result = 0;
      angular.forEach(this.questions, function(question){
        if(question.userAnswer !== null) {
          if(+question.userAnswer === question.correctAnswer) {
    
            result++;
          }
        }
      });
      
      return result;
    }
    
    
    
    
  });
 
  
})();