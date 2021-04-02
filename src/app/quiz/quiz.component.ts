import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
qz:Quiz [] = [];
currentQuiz =0;
answerSelected=false;
correctAnswers= 0;
incorrectAnswers= 0;

randomize: number;
result =false;




 constructor(private quizService:QuizService) {}
 ngOnInit() :void {

  this.qz=this.quizService.getQz();
   this.randomize=Math.floor(Math.random() * this.qz.length) 

}
 onAnswer(correct:boolean){  
 
this.answerSelected = true;  

setTimeout(() => {
      this.currentQuiz ++ ;
      this.randomize=Math.floor(Math.random() * this.qz.length) 
      this.answerSelected = false; 
   },1000);
     if (correct){
       this.correctAnswers ++;
     }else
     this.incorrectAnswers ++;
 }


showResult(){
  this.result =true;
}


}


