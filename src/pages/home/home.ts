import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CherrypickService } from '../../services/cherrypick';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CherrypickService]
})
export class HomePage {
  
  
  public lista:Array<{}> = [];

  constructor(public navCtrl: NavController, public serv: CherrypickService) {
    this.lista = serv.getList();
  }

  public showProduct(_id) {
    this.navCtrl.push('DetailPage', {"id":_id});
  }

}
