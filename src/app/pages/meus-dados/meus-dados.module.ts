import { GlobalComponent } from './../../global/global.component';
import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MeusDadosPageRoutingModule } from './meus-dados-routing.module';
import { MeusDadosPage } from './meus-dados.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusDadosPageRoutingModule,
    ComponentesModule,
    NgxQRCodeModule
  ],
  declarations: [MeusDadosPage, GlobalComponent]
})
export class MeusDadosPageModule {}
