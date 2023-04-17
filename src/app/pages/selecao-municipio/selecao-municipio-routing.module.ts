import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoMunicipioPage } from './selecao-municipio.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoMunicipioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoMunicipioPageRoutingModule {}
