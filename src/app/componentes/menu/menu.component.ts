import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { Storage } from '@ionic/storage-angular';
import { licencaMunicipioSistema } from 'src/app/models/Modelo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  componentes: Observable<Componente[]>;

  logo: String = "/assets/images/examples/icon.png";


  municipio: licencaMunicipioSistema = null;

  constructor(
    private ds: DataService,
    private storage: Storage,) {

    this.storage.create().then(a => {
      this.storage.get('licenca').then(licenca => {

        this.logo = licenca.logo;
      }

      );
    });
  }

  ngOnInit() {
    this.componentes = this.ds.getMenu();
  }

}
