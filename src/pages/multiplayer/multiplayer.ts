import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ViewController  } from 'ionic-angular';
import {CheckForWinnerProvider} from '../../providers/check-for-winner/check-for-winner';


@Component({
  selector: 'page-multiplayer',
  templateUrl: 'multiplayer.html',
})
export class MultiplayerPage {
  private turn : number;
  private player: number;
  private flag: number[]=[0,0,0,0,0,0,0,0,0];
  private playerOne: number[];
  private playerTwo: number[];
  public visited : number[]=[0,0,0,0,0,0,0,0,0];
  
  multiplayerPage = MultiplayerPage;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams, public alertCtrl: AlertController,
  private check:CheckForWinnerProvider) {
     this.viewCtrl.showBackButton(false);
  }

  ionViewWillEnter () {
    this.visited = [0,0,0,0,0,0,0,0,0];
    this.turn = 0;
    this.player = 0;
    this. flag = [0,0,0,0,0,0,0,0,0];
    this.playerOne = [];
  this.playerTwo = [];
    console.log('ionViewDidLoad MultiplayerPage');
  }

  showAlert(result) {
    const alert = this.alertCtrl.create({
      title: 'Result',
      subTitle: result,
      buttons: ['OK']
    });
    alert.present();
  }

  showIcon(){
    switch(this.turn){
      case 0:
      case 2:
      case 4:
      case 6:
      case 8:this.player = 1;
             break;
      case 1:
      case 3:
      case 5:
      case 7:this.player = 2;
      break;
    }
    this.turn = this.turn +1;
    return this.player;
  }

  cellSelect(box:number){
    this.visited[box] = 1;
     if(this.turn < 9){
       this.flag[box] = this.showIcon();
       if(this.flag[box]==1){
         this.playerOne.push(box);
       }else{
         this.playerTwo.push(box);
       }
      if(this.turn > 3){
       
        var result = this.check.decideResult(this.playerOne,this.playerTwo);
          
          if(result=='player1'|| result=='player2'){
            this.showAlert(result + ' won');
              this.ionViewWillEnter ();
          }
          else if(this.turn==9){
     
            this.showAlert('Opps, Thats a draw');
       this.ionViewWillEnter ();
     
          }
        }    
     }  
  }
}
