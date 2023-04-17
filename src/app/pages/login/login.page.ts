import { GlobalComponent } from './../../global/global.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { Mentor } from '../../models/Mentor';
import { Funcionarios, PcfPlanoVisita, PcfCaracterizacaoCrianca, DomicilioCras, PcfCaracterizacaoGestante, licencaMunicipioSistema } from '../../models/Modelo'
import { servico } from '../../models/Servico'
import { Controlador } from '../../models/Controlador';

import { LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {



  cpf: String = "037.189.414-06";
  senha: String = "Velton250380";

  load: any = null;

  global: any;
  municipio: licencaMunicipioSistema = null;

  logo : String = "/assets/images/examples/carregamento.png";
  simnao: number;
  servidorLogado: any = null;
  showSpinner: boolean = false;
  ctrl: Controlador = new Controlador();
  enviaDados: boolean;
  plano: PcfPlanoVisita;
  criancas: PcfCaracterizacaoCrianca[] = new Array();
  gestantes: PcfCaracterizacaoGestante[] = new Array();

  constructor(
    private router: Router,
    public globalComponent: GlobalComponent,
    private storage: Storage,
		private loadingCtrl: LoadingController,
    private alertController: AlertController,
  ) {
    
    this.global = this.globalComponent;
    loadingCtrl.create({
      message: "Conectando Servidor."
    }).then((l=> {this.load = l}))

    

    }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: "Para acessar o aplicativo, é preciso estar inscrito no Cadastro Único Federal Procure uma Unidade de Assistência Social (CRAS) ou a Central do Cadastro Único mais próxima.",
      buttons: ['OK']
    });

    

    await alert.present();
  }

  //alerta para informar o CPF
  async alertaCpf() {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: "Por favor, preencha seu CPF corretamente .",
      buttons: ['OK']
    });

    await alert.present();
  }

  //alerta para informar a senha
  async alertaSenha() {
    const alert = await this.alertController.create({
      header: 'Importante',
      message: "Por favor, preencha sua data de nascimento.",
      buttons: ['OK']
    });

    await alert.present();
  }
  // form login

  loginForm() {
  //  console.log('Data Requerida: ', e.value);

    if (this.cpf == '' || this.cpf == undefined) {
      //this.globalComponent.loadToast('Por favor, preencha seu e-mail corretamente');
      return this.alertaCpf();
    } else if (this.senha == '' || this.senha == undefined) {
      //this.globalComponent.loadToast('Por favor, preencha sua data de nascimento');
      return this.alertaSenha();
    } else {


      this.load.present();
      setTimeout(() => {
        this.loginForm2();
      }, 100);

      return;

      // tentar fazer login

      var usuario = Mentor.executaVisao(1171, "varcpf=" + this.cpf + "&varsenha=" + this.senha);

      this.load.dismiss();
      if (usuario == null) {
        alert("nenhum usuario encontrado")
        return;
      } 


      servico.imagem

      if(usuario.associadoCras != null && usuario.associadoCras.domicilioCras!= null && usuario.associadoCras.domicilioCras.historicoUnidades != null){
        for(var x = 0;x<usuario.associadoCras.domicilioCras.historicoUnidades.length;x++)
          if(usuario.associadoCras.domicilioCras.historicoUnidades[x].dataFimFormatado=="" && usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade != null)
            servico.cras = usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade;
      }

      this.storage.set("ultimoUsuario",usuario);
      servico.usuarioLogado = usuario;

      if(usuario.dataUltimoAcessoAppFormatado == null){
        usuario.dataUltimoAcessoApp = new Date();
        usuario.dataUltimoAcessoAppFormatado = Mentor.dateToString(new Date());
      }

      //var mensagens = Mentor.executaVisao(3071, "");

      var parametro = "individuo="+servico.usuarioLogado.codigo;

      if(servico.cras != null)    
        parametro = parametro + "&unidade=" + servico.cras.codigo;
      
  
      var palavra = Mentor.bind(parametro,"/jsp/appCidadao/listaMensagens.jsp","POST");
      var mensagens = eval(palavra + "");

      if(mensagens != null){
        for(var x = 0;x<mensagens.length;x++){
          if(Mentor.stringToDate(mensagens[x].publicacaoFormatado).getTime() > Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado).getTime())
            servico.temMensagemNova = true;
        }
      }


      servico.dataUltimoAcessoApp = Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado);
      usuario.dataUltimoAcessoApp = new Date();
      
      Mentor.rodaTransacaoFromObjeto(1788,"obj", usuario,false);



      let url = '/tabs/meus-dados';
      //let url_withparameter = '/tabs/meus-dados?cpf=' + e.value.login_cpf + '&nascimento=' + e.value.login_nascimento;

      this.storage.set('cpf',this.cpf);
      

      this.router.navigateByUrl(url);
    }
  }


  loginForm2() {
    //  console.log('Data Requerida: ', e.value);
  
     {
      // tentar fazer login
  
        var lServidor = Mentor.executaVisao(1171, "varcpf=" + this.cpf + "&varsenha=" + this.senha);
  
        if (lServidor == null) {

          var funcionario: Funcionarios = new Funcionarios(lServidor);

          this.storage.set("servidor", funcionario);

        this.load.dismiss();
          alert("nenhum usuario encontrado")
          return;
        } 
  
  
        servico.imagem
  
        if(lServidor.associadoCras!= null && lServidor.associadoCras.domicilioCras!= null && lServidor.associadoCras.domicilioCras.historicoUnidades != null){
          for(var x = 0;x<lServidor.associadoCras.domicilioCras.historicoUnidades.length;x++)
            if(lServidor.associadoCras.domicilioCras.historicoUnidades[x].dataFimFormatado=="" && lServidor.associadoCras.domicilioCras.historicoUnidades[x].unidade != null)
              servico.cras = lServidor.associadoCras.domicilioCras.historicoUnidades[x].unidade;
        }
  
        this.storage.set("ultimoUsuario",lServidor);
        servico.usuarioLogado = lServidor;
  
        if(lServidor.dataUltimoAcessoAppFormatado == null){
          lServidor.dataUltimoAcessoApp = new Date();
          lServidor.dataUltimoAcessoAppFormatado = Mentor.dateToString(new Date());
        }
  
        //var mensagens = Mentor.executaVisao(3071, "");
  
        var parametro = "individuo="+servico.usuarioLogado.codigo;
  
        if(servico.cras != null)    
          parametro = parametro + "&unidade=" + servico.cras.codigo;
        
    
        var palavra = Mentor.bind(parametro,"/jsp/appCidadao/listaMensagens.jsp","POST");
        var mensagens = eval(palavra + "");
  
        if(mensagens != null){
          for(var x = 0;x<mensagens.length;x++){
            if(Mentor.stringToDate(mensagens[x].publicacaoFormatado).getTime() > Mentor.stringToDate(lServidor.dataUltimoAcessoAppFormatado).getTime())
              servico.temMensagemNova = true;
          }
        }
  
  
        servico.dataUltimoAcessoApp = Mentor.stringToDate(lServidor.dataUltimoAcessoAppFormatado);
        lServidor.dataUltimoAcessoApp = new Date();
        
        Mentor.rodaTransacaoFromObjeto(1788,"obj", lServidor,false);
  
  
  
        let url = '/tabs/meus-dados';
        //let url_withparameter = '/tabs/meus-dados?cpf=' + e.value.login_cpf + '&nascimento=' + e.value.login_nascimento;
  
        this.storage.set('cpf',this.cpf);
        
  

        this.load.dismiss();
        
        this.router.navigateByUrl(url);
      }
    }



  async ionViewDidEnter(){
    await this.storage.create();
    var licenca: licencaMunicipioSistema = await this.storage.get('licenca');
    //alert(licenca);
    if (licenca == null) {
      this.router.navigateByUrl('selecao-municipio');
    }
    else{
      Mentor.UrlRequest = "https://app.conectasuas.com.br/assistenciaSocial/"
      //"http://app.vvision.com.br:8080/assistenciaSocial/";
      var licencas = Mentor.executaVisao(2632,"varcodigo=" + licenca.estado.codigo + "&varsistema=" + licenca.sistema + "&varnomeMunicipio=" + licenca.nomeMunicipio);
      if(licencas == null || licencas.length != 1)
      this.router.navigateByUrl('selecao-municipio');
      else{
        licenca = licencas[0];
        this.storage.set("licenca", licenca);
      }

    }

    Mentor.UrlRequest = licenca.urlServidor;
    this.logo = licenca.logo;

    this.storage.get("ultimoUsuario").then(usu => {
      if(usu == null)
        return this.presentAlert();

  });
  }


  async navegacao() {
    await this.storage.create();
    await this.storage.remove("licenca");
    this.router.navigate(["selecao-municipio"]);

  }


  //cpf() {
  //  this.router.navigate(['/tabs/meus-dados']);
  // }

}
