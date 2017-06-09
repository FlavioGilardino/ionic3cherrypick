import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class DetailPage {
    private lista:Array<{}> = [
    {id:"1", nome:"LEGADO TINTO 2011", imageurl: "assets/images/gar1.jpg"}, 
    {id:"2",nome:"QUINTA DAS BÁGEIRAS GARRAFEIRA TINTO 2010", imageurl: "assets/images/gar2.jpg"},
    {id:"3",nome:"ABANDONADO DOURO DOC TINTO 2011", imageurl: "assets/images/gar3.jpg"},
    {id:"4",nome:"QUINTA DO VALE MEÃO DOURO TINTO 2013", imageurl: "assets/images/gar4.jpg"},
    {id:"5",nome:"DUAS QUINTAS RESERVA TINTO 2013", imageurl: "assets/images/gar5.jpg"},
    {id:"6",nome:"PINTAS 2013", imageurl: "assets/images/gar6.jpg"},
    {id:"7",nome:"TRÊS BAGOS GRANDE ESCOLHA 2009", imageurl: "assets/images/gar1.jpg"},
    {id:"8",nome:"FSF Fernando Soares Franco 2011", imageurl: "assets/images/gar2.jpg"},
    {id:"9",nome:"José de Sousa Mayor 2012", imageurl: "assets/images/gar3.jpg"},
    {id:"10",nome:"Pêra-Manca Tinto 2011", imageurl: "assets/images/gar4.jpg"},
    {id:"11",nome:"Selectio Tinta Grossa 2012", imageurl: "assets/images/gar5.jpg"},
    {id:"12",nome:"Terrenus Reserva Vinhas Velhas Tinto 2012", imageurl: "assets/images/gar6.jpg"},
    {id:"13",nome:"Marquês de Borba Reserva 2012", imageurl: "assets/images/gar6.jpg"},
    {id:"14",nome:"Pedra Cancela Reserva Dão 2013", imageurl: "assets/images/gar1.jpg"},
    {id:"15",nome:"Charme 2013", imageurl: "assets/images/gar2.jpg"},
    {id:"16",nome:"Quinta do Ribeirinho Pé Franco Tinto 2009", imageurl: "assets/images/gar3.jpg"},
    {id:"17",nome:"Júlio B. Bastos Alicante Bouschet", imageurl: "assets/images/gar4.jpg"},
    {id:"18",nome:"Mouchão Tonel N.º 3-4 2008", imageurl: "assets/images/gar5.jpg"},
    {id:"19",nome:"Tributo Tinto 2013", imageurl: "assets/images/gar6.jpg"}
    ];
  public item: any =  {id:"", nome:"", imageurl: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage', this.navParams.get('item'));
    this.item = this.navParams.get('id');
  }
}
