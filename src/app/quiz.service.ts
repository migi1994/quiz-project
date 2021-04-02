import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model'

@Injectable({
  providedIn: 'root'
})
export class QuizService {
      qz: Quiz [] = [
        {
            question:' You walk into a room which contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?',
           
            answer:[
              { option :'A. the candle', correct:false},
              { option :'B. the fireplace', correct:false},
              { option :'C. the match', correct:true},
              { option :'D. the kerosene lamp', correct:false}
            ]

      
          },
          {
          question:' Which is the correct spelling?',
           
          answer:[
            { option :'A. Entreprenuer', correct:false},
            { option :'B. Entrepreneur', correct:true},
            { option :'C. Entrepreuner', correct:false},
            { option :'D. Entrepreuneur', correct:false}
            ]
          },
          {
          question:' Which planet is closest to the Sun?',
           
          answer:[
            { option :'A. Mars', correct:true},
            { option :'B. Mercury', correct:false},
            { option :'C. Neptune', correct:false},
            { option :'D. Venus', correct:false}
            ]
          },
          {
            question:
            ' There were some people on a train. 19 people get off the train at the first stop 17 people get on the train. Now there are 63 people on the train. How many people were on the train to begin with?',
           
            answer:[
              { option :'A. 61', correct:false},
              { option :'B. 58', correct:false},
              { option :'C. 65', correct:true},
              { option :'D. 62', correct:false}
              ]
            },
            {
              question:' Which is the longest river in Africa?',
           
              answer:[
                { option :'A. The Congo river ', correct:false},
                { option :'B. The Niger river', correct:false},
                { option :'C. The Zambezi river', correct:false},
                { option :'D. The Nile river', correct:true}
                ]
              },
            ]
  constructor() {}
   getQz(){
  return this.qz;
   }
}
      