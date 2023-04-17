import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoMunicipioPageRoutingModule } from './selecao-municipio-routing.module';

import { SelecaoMunicipioPage } from './selecao-municipio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoMunicipioPageRoutingModule
  ],
  declarations: [SelecaoMunicipioPage]
})
export class SelecaoMunicipioPageModule {}
