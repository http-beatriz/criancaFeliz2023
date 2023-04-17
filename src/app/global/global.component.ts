import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {

  baseUrl: 'https://global-api-url-aqui';

  constructor(private toastCtrl: ToastController) { }

  // generic toast
  async loadToast(msg:any) {
    if(msg == '' || msg == undefined) {
      msg = 'Conecta Suas - Cidadão';
    }

    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  ngOnInit() {}

}
