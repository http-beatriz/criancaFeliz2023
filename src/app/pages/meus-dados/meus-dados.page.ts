import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ToastController, PopoverController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { GlobalComponent } from './../../global/global.component';
import { Storage } from '@ionic/storage-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { servico } from '../../models/Servico'
import { Mentor } from 'src/app/models/Mentor';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

import { Clipboard } from '@capacitor/clipboard';
import { Estado, licencaMunicipioSistema } from 'src/app/models/Modelo';




const IMAGE_DIR = 'stored-images';
interface LocalFile {
  name: string;
  path: string;
  data: string;
}
@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {


  title = 'Angular';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  margin: 2;
  scale: 0;
  width: 1000;

  temCoordenada = "block";



  obj = servico;

  imagem = "";

  value = this.obj.usuarioLogado.codigoFormatado + " ";


  // login
  req_cpf: any;
  req_param: any;

  // global
  global: any;

  // images upload
  images: LocalFile[] = [];

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  // geolocation - clean
  geoAddress: any;

  // http request
  data = null;
  myImage = null;

  ionViewDidEnter() {

    if (this.obj.usuarioLogado.flagFoto == 1) {
      this.imagem = Mentor.UrlRequest + "/arquivo/individuos/individuo" + this.obj.usuarioLogado.codigo + "/foto" + this.obj.usuarioLogado.codigo + ".png?aleatorio=" + (Math.random() * 10000);

      var img = document.getElementById('imagem');


      var width = img.clientWidth;
      var height = img.clientHeight;

      img.style.height = width + "px";
      img.style.width = width + "px";



      var qrs: any = document.getElementsByClassName("qrcode")[0].childNodes[0];
      qrs.style.width = width + "px";
      qrs.style.height = width + "px";

    }
   
  }

  logo: String = "";
  
  constructor(
    private plt: Platform,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nativeGeocoder: NativeGeocoder,
    public globalComponent: GlobalComponent,
    public router: Router,
    private storage: Storage,
    private httpService: HttpService,
    private domSanitizer: DomSanitizer
  ) {
    this.global = globalComponent;

    this.storage.create().then(a => {
      this.storage.get('licenca').then(licenca => {

        this.logo = licenca.logo;
      }

      );
    });

  }




  async ngOnInit() {
    // storage
    await this.storage.create();

 if (this.obj.usuarioLogado.latitude != "" || this.obj.usuarioLogado.latitude != null) {
      this.temCoordenada = "none"
    }
    // load files
  }

  // generic toast
  async loadToast() {
    const toast = await this.toastCtrl.create({
      message: 'hello world',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }




  // Little helper
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  caracter: any = ""

  copia() {

    var valor = this.caracter - 0;

    var palavra = this.imagem.substring(valor - 10, valor + 50);


    Clipboard.write({
      string: palavra
    }).then(ok => { alert("copiei " + palavra) }).catch(err => { alert(err); this.caracter = palavra });


  }


  async tiraFoto() {
    let image: any = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera // Camera, Photos or Prompt!
    });



    if (image) {







      this.imagem = "data:image/jpeg;base64," + image.base64String;
      // await Clipboard.write({
      //   string: this.imagem
      // });
      //alert(this.imagem.length);
      this.obj.usuarioLogado.flagFoto = 1;
      this.obj.usuarioLogado.extensao = ".png";

      var img = document.getElementById('imagem');


      var width = img.clientWidth;
      var height = img.clientHeight;

      img.style.height = width + "px";
      img.style.width = width + "px";

      var qrs: any = document.getElementsByClassName("qrcode")[0].childNodes[0];
      qrs.style.width = width + "px";
      qrs.style.height = width + "px";



      Mentor.rodaTransacaoFromObjeto(1789, "obj", servico.usuarioLogado, false);


      const base64 = await fetch(this.imagem);

      const blob = await base64.blob();

      let formData = new FormData();
      formData.append("arquivo", blob);
      formData.append("codigoIndividuo", this.obj.usuarioLogado.codigo + "");



      var oReq = new XMLHttpRequest();
      oReq.open("POST", Mentor.UrlRequest + "jsp/salvarFotoIndividuo2.jsp", true);


      try {

        oReq.send(formData);
      } catch (err) {
        alert(err)
      }



      //alert(oReq.responseText);

      //var sImagem = JSON.stringify(this.imagem)

      // var tamanho = Mentor.bind("codigoIndividuo=" + this.obj.usuarioLogado.codigo + "&base=" + sImagem, "/jsp/salvarFotoIndividuo.jsp", "POST");

      //alert(this.imagem.length + " " + tamanho);
    }
  }


  async b64toBlob(dataURI) {


    const rawData = atob(dataURI);
    const bytes = new Array(rawData.length);
    for (var x = 0; x < rawData.length; x++) {
      bytes[x] = rawData.charCodeAt(x);
    }
    const arr = new Uint8Array(bytes);
    return new Blob([arr], { type: 'image/png' });

  }


  // geolocation
  async fetchLocation() {

    const location = await Geolocation.getCurrentPosition();
    console.log('localização: ', location);



    this.nativeGeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.options)
      .then((result: NativeGeocoderResult[]) => {
        console.log('Resultado:', result);
        console.log('Resultado 0:', result[0]);


        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;
        servico.usuarioLogado.latitude = latitude;
        servico.usuarioLogado.longitude = longitude;
        
          this.temCoordenada = "none"


          Mentor.rodaTransacaoFromObjeto(1789, "obj", servico.usuarioLogado, false);

        });

    const toast = await this.toastCtrl.create({
      message: 'Localização recebida com sucesso.',
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();

  }


}
