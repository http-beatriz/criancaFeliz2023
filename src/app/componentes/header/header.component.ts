import { Component, Input, OnInit } from '@angular/core';
import {servico} from '../../models/Servico'
import { Mentor } from '../../models/Mentor';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 cor = "";
 logo : String = "/assets/images/examples/ipojuca.png";

  @Input() title:string;



  constructor(private storage: Storage,) { 

    this.storage.create().then(a => {
      this.storage.get('licenca').then(licenca => {

        this.logo = licenca.logo;
      }

      );
    });
  }

  ngOnInit() { 
    if(servico.temMensagemNova)
      this.cor = "red"
    else
      this.cor = "white"
  }


}

//private storage: Storage