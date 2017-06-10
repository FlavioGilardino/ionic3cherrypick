import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {  } from 'ionic-angular';
import { CherrypickService } from '../../services/cherrypick';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment:'detail/:id'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [CherrypickService]
})
export class DetailPage {
    
  public item: any =  {id:"", nome:"", imageurl: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public serv: CherrypickService) {
     
  }
  public showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Não custa nada!',
      subTitle: 'É o Vitor que paga!',
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    var id = this.navParams.get('id');
    this.item = this.serv.getList().find(x => x['id'] === id);
  }
}
