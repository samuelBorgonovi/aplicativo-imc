import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  peso : number;
  altura : number;
  msg : string;
  nome : string;
  sexo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calcular(){
    var valorImc = this.peso / (this.altura*this.altura);
    valorImc = parseFloat(valorImc.toFixed(2));
    this.geraMsg(valorImc);
      
}

  geraMsg(valorImc: number){
    this.msg = this.nome + ","+ this.sexo +" O seu imc é " + valorImc + " e você esta";

    if(valorImc < 18.5)
      this.msg += " abaixo do peso";
    else if (valorImc < 24.5)
      this.msg += " no peso normal";
    else 
      this.msg += " acima do peso";
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

}
