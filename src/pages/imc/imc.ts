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

  peso: number;
  altura: number;
  msg: string = "";
  nome: string;
  sexo: string;
  dataNascimento: string;
  idade: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calcular() {
    var valorImc = this.peso / (this.altura * this.altura);
    valorImc = parseFloat(valorImc.toFixed(2));

    var hoje = new Date()
    var aniversario = new Date(this.dataNascimento)
    this.idade = hoje.getFullYear() - aniversario.getFullYear();

    this.geraMsg(valorImc);
  }



  geraMsg(valorImc: number) {
    let status = "";
    if (this.sexo == "Feminino") {
      if (this.idade <= 6 && valorImc >= 14.3 && valorImc <= 16.1) {
        status = "Normal";
      } else if (valorImc > 16.1 && valorImc <= 17.4) {
        status = "Sobrepeso";
      } else if (valorImc > 17.4) {
        status = "Obesidade";
      }

      if (this.idade <= 7 && valorImc >= 14.9 && valorImc <= 17.1) {
        status = "Normal";
      } else if (valorImc > 17.1 && valorImc <= 18.9) {
        status = "Sobrepeso";
      } else if (valorImc > 18.9) {
        status = "Obesidade";
      }

      if (this.idade <= 8 && valorImc >= 15.6 && valorImc <= 18.1) {
        status = "Normal";
      } else if (valorImc > 18.1 && valorImc <= 20.3) {
        status = "Sobrepeso";
      } else if (valorImc > 20.3) {
        status = "Obesidade";
      }

      if (this.idade <= 9 && valorImc >= 16.3 && valorImc <= 19.1) {
        status = "Normal";
      } else if (valorImc > 19.1 && valorImc <= 21.7) {
        status = "Sobrepeso";
      } else if (valorImc > 21.7) {
        status = "Obesidade";
      }

      if (this.idade <= 10 && valorImc >= 17 && valorImc <= 20.1) {
        status = "Normal";
      } else if (valorImc > 20.1 && valorImc <= 23.2) {
        status = "Sobrepeso";
      } else if (valorImc > 23.2) {
        status = "Obesidade";
      }

      if (this.idade <= 11 && valorImc >= 17.6 && valorImc <= 21.1) {
        status = "Normal";
      } else if (valorImc > 21.1 && valorImc <= 24.5) {
        status = "Sobrepeso";
      } else if (valorImc > 24.5) {
        status = "Obesidade";
      }

      if (this.idade <= 12 && valorImc >= 18.3 && valorImc <= 22.1) {
        status = "Normal";
      } else if (valorImc > 22.1 && valorImc <= 25.9) {
        status = "Sobrepeso";
      } else if (valorImc > 25.9) {
        status = "Obesidade";
      }

      if (this.idade <= 13 && valorImc >= 18.9 && valorImc <= 23) {
        status = "Normal";
      } else if (valorImc > 23 && valorImc <= 27.7) {
        status = "Sobrepeso";
      } else if (valorImc > 27.7) {
        status = "Obesidade";
      }

      if (this.idade <= 14 && valorImc >= 19.3 && valorImc <= 23.8) {
        status = "Normal";
      } else if (valorImc > 23.8 && valorImc <= 27.9) {
        status = "Sobrepeso";
      } else if (valorImc > 27.9) {
        status = "Obesidade";
      }

      if (this.idade <= 15 && valorImc >= 19.6 && valorImc <= 24.2) {
        status = "Normal";
      } else if (valorImc > 24.2 && valorImc <= 28.8) {
        status = "Sobrepeso";
      } else if (valorImc > 28.8) {
        status = "Obesidade";
      }

    } else {
      if (this.idade <= 6 && valorImc >= 14.5 && valorImc <= 16.6) {
        status = "Normal";
      } else if (valorImc > 16.6 && valorImc <= 18.0) {
        status = "Sobrepeso";
      } else if (valorImc > 18.0) {
        status = "Obesidade";
      }

      if (this.idade <= 7 && valorImc >= 15 && valorImc <= 17.3) {
        status = "Normal";
      } else if (valorImc >= 17.3 && valorImc <= 19.1) {
        status = "Sobrepeso";
      } else if (valorImc > 19.1) {
        status = "Obesidade";
      }

      if (this.idade <= 8 && valorImc >= 15.6 && valorImc <= 16.7) {
        status = "Normal";
      } else if (valorImc > 16.7 && valorImc <= 20.3) {
        status = "Sobrepeso";
      } else if (valorImc > 20.3) {
        status = "Obesidade";
      }

      if (this.idade <= 9 && valorImc >= 16.1 && valorImc <= 18.8) {
        status = "Normal";
      } else if (valorImc >= 18.8 && valorImc <= 21.4) {
        status = "Sobrepeso";
      } else if (valorImc > 21.4) {
        status = "Obesidade";
      }

      if (this.idade <= 10 && valorImc >= 16.7 && valorImc <= 19.6) {
        status = "Normal";
      } else if (valorImc > 19.6 && valorImc <= 22.5) {
        status = "Sobrepeso";
      } else if (valorImc > 22.5) {
        status = "Obesidade";
      }

      if (this.idade <= 11 && valorImc >= 17.2 && valorImc <= 20.3) {
        status = "Normal";
      } else if (valorImc > 20.3 && valorImc <= 23.7) {
        status = "Sobrepeso";
      } else if (valorImc > 23.7) {
        status = "Obesidade";
      }

      if (this.idade <= 12 && valorImc >= 17.8 && valorImc <= 21.1) {
        status = "Normal";
      } else if (valorImc > 21.1 && valorImc <= 24.8) {
        status = "Sobrepeso";
      } else if (valorImc > 24.8) {
        status = "Obesidade";
      }

      if (this.idade <= 13 && valorImc >= 18.5 && valorImc <= 21.9) {
        status = "Normal";
      } else if (valorImc > 21.9 && valorImc <= 25.9) {
        status = "Sobrepeso";
      } else if (valorImc > 25.9) {
        status = "Obesidade";
      }

      if (this.idade <= 14 && valorImc >= 19.2 && valorImc <= 22.7) {
        status = "Normal";
      } else if (valorImc > 22.7 && valorImc <= 26.9) {
        status = "Sobrepeso";
      } else if (valorImc > 26.9) {
        status = "Obesidade";
      }

      if (this.idade <= 15 && valorImc >= 19.9 && valorImc <= 23.6) {
        status = "Normal";
      } else if (valorImc > 23.6 && valorImc <= 27.7) {
        status = "Sobrepeso";
      } else if (valorImc > 27.7) {
        status = "Obesidade";
      }


    }

    this.msg = `Nome: ${this.nome}, data Nascimento ${this.dataNascimento}, 
      Idade: ${this.idade}, Sexo: ${this.sexo} Valor do Imc: ${valorImc} Status: ${status}`
  }
}
