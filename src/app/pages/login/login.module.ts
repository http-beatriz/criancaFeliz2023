import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import {provideEnvironmentNgxMask,NgxMaskDirective,NgxMaskPipe} from "ngx-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers:[provideEnvironmentNgxMask()],
  declarations: [LoginPage]
})
export class LoginPageModule {}
