import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  
   private lista:Array<{}> = [
    {id:"1", nome:"LEGADO TINTO 2011", imageurl: "assets/images/gar1.jpg", preco:"18,00€", descricao:"Vinho maduro de 2011"}, 
    {id:"2",nome:"QUINTA DAS BÁGEIRAS GARRAFEIRA TINTO 2010", imageurl: "assets/images/gar2.jpg", preco:"18,00€", descricao:"Vinho maduro de 2010"},
    {id:"3",nome:"ABANDONADO DOURO DOC TINTO 2011", imageurl: "assets/images/gar3.jpg", preco:"18,00€", descricao:"Vinho maduro de 2011"},
    {id:"4",nome:"QUINTA DO VALE MEÃO DOURO TINTO 2013", imageurl: "assets/images/gar4.jpg", preco:"18,00€", descricao:"Vinho maduro de 2013"},
    {id:"5",nome:"DUAS QUINTAS RESERVA TINTO 2013", imageurl: "assets/images/gar5.jpg", preco:"18,00€", descricao:"Vinho maduro de 2013"},
    {id:"6",nome:"PINTAS 2013", imageurl: "assets/images/gar6.jpg", preco:"18,00€", descricao:"Vinho maduro de 2013"},
    {id:"7",nome:"TRÊS BAGOS GRANDE ESCOLHA 2009", imageurl: "assets/images/gar1.jpg", preco:"18,00€", descricao:"Vinho maduro de 2009"},
    {id:"8",nome:"FSF Fernando Soares Franco 2011", imageurl: "assets/images/gar2.jpg", preco:"18,00€", descricao:"Vinho maduro de 2011"},
    {id:"9",nome:"José de Sousa Mayor 2012", imageurl: "assets/images/gar3.jpg", preco:"18,00€", descricao:"Vinho maduro de 2012"},
    {id:"10",nome:"Pêra-Manca Tinto 2011", imageurl: "assets/images/gar4.jpg", preco:"18,00€", descricao:"Vinho maduro de 2011"},
    {id:"11",nome:"Selectio Tinta Grossa 2012", imageurl: "assets/images/gar5.jpg", preco:"18,00€", descricao:"Vinho maduro de 2012"},
    {id:"12",nome:"Terrenus Reserva Vinhas Velhas Tinto 2012", imageurl: "assets/images/gar6.jpg", preco:"18,00€", descricao:"Vinho maduro de 202"},
    {id:"13",nome:"Marquês de Borba Reserva 2012", imageurl: "assets/images/gar6.jpg",preco:"18,00€", descricao:"Vinho maduro de 2012" },
    {id:"14",nome:"Pedra Cancela Reserva Dão 2013", imageurl: "assets/images/gar1.jpg", preco:"18,00€", descricao:"Vinho maduro de 2013"},
    {id:"15",nome:"Charme 2013", imageurl: "assets/images/gar2.jpg", descricao:"Vinho maduro de 2013"},
    {id:"16",nome:"Quinta do Ribeirinho Pé Franco Tinto 2009", imageurl: "assets/images/gar3.jpg", descricao:"Vinho maduro de 2009"},
    {id:"17",nome:"Júlio B. Bastos Alicante Bouschet", imageurl: "assets/images/gar4.jpg", descricao:"Vinho maduro de 2011"},
    {id:"18",nome:"Mouchão Tonel N.º 3-4 2008", imageurl: "assets/images/gar5.jpg", descricao:"Vinho maduro de 2008"},
    {id:"19",nome:"Tributo Tinto 2013", imageurl: "assets/images/gar6.jpg", descricao:"Vinho maduro de 2013"}
    ];

  constructor(public navCtrl: NavController) {
  }

  public showProduct(_id) {
    this.navCtrl.push('DetailPage', {"id":_id});
  }

}
