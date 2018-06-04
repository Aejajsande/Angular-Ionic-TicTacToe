import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MultiplayerPage } from '../multiplayer/multiplayer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  goToMultiplayer() {
    this.navCtrl.push(MultiplayerPage);
  }
}
