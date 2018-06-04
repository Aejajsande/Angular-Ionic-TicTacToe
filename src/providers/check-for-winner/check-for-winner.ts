import { Injectable } from '@angular/core';


@Injectable()
export class CheckForWinnerProvider {

private ans ={
      'Hor1':[0,1,2],
      'Hor2':[3,4,5],
      'Hor3':[6,7,8],
      'Ver1':[0,3,6],
      'Ver2':[1,4,7],
      'Ver3':[2,5,8],
      'Dia1':[0,4,8],
      'Dia2':[2,4,6]
  }
  constructor() {
    console.log('Hello CheckForWinnerProvider Provider');
  }
  
decideResult(playerOne:number[] , playerTwo:number[]):string{
var keys = Object.keys(this.ans);

for(var i=0;i<keys.length ;i++){
  if(!this.ans[keys[i]].some(val => playerOne.indexOf(val) === -1)){
    return('player1');
    
  }
  if(!this.ans[keys[i]].some(val => playerTwo.indexOf(val) === -1)){
    return('player2');
    
  }
}


}

}
