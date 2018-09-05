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
  MsgIMC : string;
  nome : string;
  sexo : string;
  dataNascimento : string;
  idade : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calcular(){
    var valorImc = this.peso / (this.altura*this.altura);
    valorImc = parseFloat(valorImc.toFixed(2));
    
    var hoje = new Date()
    var aniversario = new Date(this.dataNascimento)
    this.idade = hoje.getFullYear() - aniversario.getFullYear();
     
    this.geraMsg(valorImc);
}
 


  geraMsg(valorImc: number){
     this.msg = `Nome: ${this.nome}, data Nascimento ${this.dataNascimento}, 
     Idade: ${this.idade}, Sexo: ${this.sexo} Valor do Imc: ${valorImc} Status: ${this.MsgIMC}`
    if (this.sexo == "Feminino"){
       if (this.idade <= 6 && valorImc >= 14,3 && 16,1){this.MsgIMC += "Normal";
       }else if(valorImc >= 16.1 && 17.4){this.MsgIMC += "Sobrepeso";
       }else if (valorImc >= 17.4){this.MsgIMC += "Obesidade";
       }
      }
    }
  }
