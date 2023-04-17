import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { licencaMunicipioSistema } from '../models/Modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logo : String = "/assets/images/examples/ipojuca.png";


  constructor(private storage: Storage, private router: Router) { 


    this.storage.create().then(a => {
      this.storage.get('licenca').then(licenca => {
        this.logo = licenca.logo;
      });
    });
  }


  abrirMenu(){
    this.router.navigate(["lmenu"])
  }
}
