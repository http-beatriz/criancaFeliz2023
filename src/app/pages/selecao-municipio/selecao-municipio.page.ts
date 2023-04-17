import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


import { Mentor } from '../../models/Mentor'

import { Estado, licencaMunicipioSistema } from '../../models/Modelo'

@Component({
  selector: 'app-selecao-municipio',
  templateUrl: './selecao-municipio.page.html',
  styleUrls: ['./selecao-municipio.page.scss'],
})
export class SelecaoMunicipioPage implements OnInit {

  listaestado: Estado[] = new Array();

  estado: Estado = new Estado(null);

  municipio: licencaMunicipioSistema = null;


  listaMunicipios = new Array();

  constructor(private alertController: AlertController,
    private storage: Storage,
    private router: Router,) { }

 
    async alertaE() {
      const alert = await this.alertController.create({
        header: 'Importante',
        message: "Informe o Estado ",
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async alertaM() {
      const alert = await this.alertController.create({
        header: 'Importante',
        message: "Informe o Município",
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
  listarMunicipios() {
    this.municipio = null;
    try{

      this.listaMunicipios = Mentor.executaVisao(2890, "varEstado=" + this.estado.codigo + "&varSistema=1");
     //alert(this.listarMunicipios);
    }catch(e){
      alert(e);
    }

  }




  ngOnInit() {

    this.estado = null;
    Mentor.UrlRequest = "https://app.conectasuas.com.br/assistenciaSocial/"
    //"https://app.conectasuas.com.br/assistenciaSocial/";
    //"http://app.vvision.com.br:8080/assistenciaSocial/"
    //alert("vou recuperar")
    
    try{
      this.listaestado = Mentor.executaVisao(314, "");
    //  alert(this.listaestado)
    }catch(err){
alert(err)
    }

    //alert("recuperei")
    this.municipio = null;
  }

  

  seleciona() {
    
    if (this.estado == null) {
      return this.alertaE();
    }
    if (this.municipio == null) {
      return this.alertaM();
    }
    Mentor.UrlRequest = this.municipio.urlServidor;
    this.storage.set("licenca", this.municipio).then(l =>
      this.router.navigate(["login"]));
  }
  

}
