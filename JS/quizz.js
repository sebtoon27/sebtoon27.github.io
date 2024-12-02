class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("1. qui est l'hôte du démon à 2 queues?", ["Yagura", "Yugito"], "Yugito"),

    new Question("2. Qui est Isobu?", ["Le démon à 3 queues", "Le démon à 4 queues"], "Le Démon à 3 queue"),

    new Question("3. Quel animal incarne le démon à 2 queue ?", ["Un chat", "Un renard"], "Un chat"),

    new Question("4. Qui est l'hôte du démon à 6 queues?", ["Utakata", "Han"], "Utakata"),

    new Question("5. Qui est Son Goku?", ["Le démon à 4 queues", "l'hôte du démon à 4 queues"], "Le démon à 4 queues"),

    new Question("6. Quel animal représente le démon à 10 queues?", ["aucun", "Une tortue"], "aucun"),

    new Question("7. quel animal représente le démon à 8 queues?", ["Un taureau", "Un insecte"], "Un taureau"),

    new Question("8. qui est Han?",["l'hôte du démon à 6 queues", "l'hôte du démon à 5 queues"], "l'hôte du démon à 5 queues"),

    new Question("9. qui est l'hôte du démons à 7 queue?", ["Fu", "Gaara"], "Fu"),

    new Question("10. comment s'appelle le démon à 7 queues? ?", ["Kokuo", "Chomei"], "Chomei"),

    new Question("Ichibi s'appelle aussi ?", ["Shukaku", "Isobu"], "Shukaku"),
    
    new Question("Nibi s'appelle aussi ?", ["Son goku", "Matatabi"], "Matatabi"),
    
    new Question("Sanbi s'appelle aussi ?", ["Kokuo", "Isobu"], "Isobu"),
   
    new Question("Yonbi s'appelle aussi ?", ["Saiken", "Son goku"], "Son goku"),
   
    new Question("Gobi s'appelle aussi ?", ["Kokuo", "Chomei"], "Kokuo"),
    
    new Question("Rokubi s'appelle aussi ?", ["Kurama", "Saiken"], "Saiken"),
    
    new Question("Nanabi s'appelle aussi ?", ["Chomei", "Gyuki"], "Chomei"),
   
    new Question("Hachibi s'appelle aussi ?", ["Killer Bee", "Gyuki"], "Gyuki"),
    
    new Question("Kyûbi s'appelle aussi ?", ["Kurama", "Shukaku"], "Kurama"),
    
    new Question("Killer Bee est un chanteur ?", ["De Rock !", "De Rap !"], "De Rap !"),

    

  ];
  console.log(questions);
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Conformité Terminée !</h1>
        <h1>Imprimez le Résulat</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };

  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    //   window.print();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();

  console.log(quiz);