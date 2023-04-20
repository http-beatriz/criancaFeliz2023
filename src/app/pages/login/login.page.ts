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
export class LoginPage {



  cpf: String = "037.189.414-06";
  senha: String = "Velton250380";

  load: any = null;

  global: any;
  municipio: licencaMunicipioSistema = null;

  logo: String = "/assets/images/examples/carregamento.png";

  simnao: number;
  servidorLogado: any = null;

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
    }).then((l => { this.load = l }))


    this.storage.get("motorista").then(motorista => this.servidorLogado = motorista);
    this.simnao = 0;



    servico.plano;

    servico.enviaDados;
  }

  //alerta login
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

  //comando para limpar dados

  limpaTudo() {
    this.storage.remove("licenca");
    this.storage.remove("gestantes");
    this.storage.remove("criancas");
    this.storage.remove("planos");


    alert("tudo removido");
    this.router.navigate(["selecao-municipio"]);
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
    }
  }


  loginForm2() {
    var lServidor = Mentor.executaVisao(1171, "varcpf=" + this.cpf + "&varsenha=" + this.senha);

    if (lServidor != null && lServidor != "") {
alert("9")

      var funcionario: Funcionarios = new Funcionarios(lServidor);

      this.storage.set("servidor", funcionario);

      if (!this.enviaDados)
        this.ctrl.sincronizaDadosServidor(this.storage, funcionario, this.router);
      else {
        for (var x = 0; x < this.plano.domicilios.length; x++) {
          for (var c = 0; c < this.plano.domicilios[x].criancas.length; c++) {
            this.plano.domicilios[x].criancas[c].associadoCras.domicilioCras = null;
            var crianca = new PcfCaracterizacaoCrianca(this.plano.domicilios[x].criancas[c]);
            crianca.domicilioCras = new DomicilioCras(null);
            crianca.domicilioCras.codigo = this.plano.domicilios[x].codigo;

            this.ctrl.inicializaCrianca(crianca, funcionario);

            if (crianca.diagnosticos_0_28 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnosticos_0_28, funcionario);
            if (crianca.diagnosticos_0_3 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnosticos_0_3, funcionario);
            if (crianca.diagnostico_3_6 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnostico_3_6, funcionario);
            if (crianca.diagnostico_6_9 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnostico_6_9, funcionario);
            if (crianca.diagnostico_9_12 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnostico_9_12, funcionario);
            if (crianca.diagnostico_12_18 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnostico_12_18, funcionario);
            if (crianca.diagnostico_18_24 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnostico_18_24, funcionario);
            if (crianca.diagnosticos_2_3 != null)
              this.ctrl.inicializaDiagnostico(crianca.diagnosticos_2_3, funcionario);



            if (crianca.avaliacao_0_3 != null)
              this.ctrl.inicializaAvaliacao(crianca.avaliacao_0_3, funcionario);
            if (crianca.avaliacao_3_6 != null)
              this.ctrl.inicializaDiagnostico(crianca.avaliacao_3_6, funcionario);
            if (crianca.avaliacao_6_9 != null)
              this.ctrl.inicializaDiagnostico(crianca.avaliacao_6_9, funcionario);
            if (crianca.avaliacao_9_12 != null)
              this.ctrl.inicializaDiagnostico(crianca.avaliacao_9_12, funcionario);
            if (crianca.avaliacao_12_18 != null)
              this.ctrl.inicializaAvaliacao(crianca.avaliacao_12_18, funcionario);
            if (crianca.avaliacao_18_24 != null)
              this.ctrl.inicializaDiagnostico(crianca.avaliacao_18_24, funcionario);
            if (crianca.avaliacao_2_3 != null)
              this.ctrl.inicializaDiagnostico(crianca.avaliacao_2_3, funcionario);


            if (crianca.formulariosApp != null)
              for (var f = 0; f < crianca.formulariosApp.length; f++) {
                for (var r = crianca.formulariosApp[f].respostas.length - 1; r >= 0; r--) {
                  if (crianca.formulariosApp[f].respostas[r].alternativaResposta != null && (crianca.formulariosApp[f].respostas[r].alternativaResposta.codigo == 0 || typeof (crianca.formulariosApp[f].respostas[r].alternativaResposta.codigo) == "undefined"))
                    crianca.formulariosApp[f].respostas[r].alternativaResposta = null;


                }

              }

            this.plano.domicilios[x].criancas[c] = crianca;

            this.criancas.push(crianca);

          }


          for (var c = 0; c < this.plano.domicilios[x].gestantes.length; c++) {
            this.plano.domicilios[x].gestantes[c].associadoCras.domicilioCras = null;
            var gestante = new PcfCaracterizacaoGestante(this.plano.domicilios[x].gestantes[c]);
            gestante.domicilioCras = new DomicilioCras(null);
            gestante.domicilioCras.codigo = this.plano.domicilios[x].codigo;

            this.ctrl.inicializaCrianca(gestante, funcionario);



            if (gestante.formularios != null)
              for (var f = 0; f < gestante.formularios.length; f++) {
                for (var r = gestante.formularios[f].respostas.length - 1; r >= 0; r--) {
                  if (gestante.formularios[f].respostas[r].alternativaResposta != null && (gestante.formularios[f].respostas[r].alternativaResposta.codigo == 0 || typeof (crianca.formulariosApp[f].respostas[r].alternativaResposta.codigo) == "undefined"))
                    gestante.formularios[f].respostas[r].alternativaResposta = null;


                }

              }

            this.plano.domicilios[x].gestantes[c] = gestante;
            this.gestantes.push(gestante);


          }


          Mentor.rodaTransacaoFromObjeto(964, "objCrianca", this.plano.domicilios[x].criancas, true);
          Mentor.rodaTransacaoFromObjeto(964, "objetosGestantes", this.plano.domicilios[x].gestantes, true);
          //objetosGestantes
        }

        var plano = new PcfPlanoVisita(null)
        plano.codigo = this.plano.codigo;

        plano.dataVisitaExecutada = new Date();
        plano.flagVisitaExecutada = 1;
        Mentor.rodaTransacaoFromObjeto(964, "objPlanoVisita", plano, true);

        this.storage.get("planos").then(planos => {

          for (var p = planos.length - 1; p >= 0; p--)
            if (planos[p].codigo == this.plano.codigo)
              planos.splice(p), 1;
          this.storage.set("planos", planos);

          this.storage.get("criancas").then(criancas => {
            var lcriancas: PcfCaracterizacaoCrianca[] = criancas;
            if (lcriancas != null)
              for (var c = lcriancas.length - 1; c >= 0; c--) {
                var achou: boolean = false
                for (var c2 = 0; c2 < this.criancas.length && !achou; c2++) {
                  if (this.criancas[c2].codigo == lcriancas[c].codigo)
                    achou = true;
                }
                if (achou)
                  lcriancas.splice(c, 1);
              }

            this.storage.set("criancas", lcriancas);

            this.storage.get("gestantes").then(gestantes => {
              var lgestantes: PcfCaracterizacaoGestante[] = gestantes;
              if (lgestantes != null) {
                for (var c = lgestantes.length - 1; c >= 0; c--) {
                  var achou: boolean = false
                  for (var c2 = 0; c2 < this.gestantes.length && !achou; c2++) {
                    if (this.gestantes[c2].codigo == lgestantes[c].codigo)
                      achou = true;
                  }
                  if (achou)
                    lgestantes.splice(c, 1);
                }
              }


              this.storage.set("gestantes", lgestantes);

              this.router.navigateByUrl("/");

            })

          })
        })

      }



      servico.imagem

      this.storage.set("ultimoUsuario", lServidor);
      servico.usuarioLogado = lServidor;



      let url = '/tabs/meus-dados';
      this.storage.set('cpf', this.cpf);



      this.load.dismiss();

      this.router.navigateByUrl(url);
    } else {
      alert("Usuário ou Senha incorreto!");
      return;
    }


  }





  async ionViewDidEnter() {
    await this.storage.create(); 
   
    var licenca: licencaMunicipioSistema = await this.storage.get('licenca');
    
    if (licenca == null) {
      this.router.navigateByUrl('selecao-municipio');
     
    }
    else {
      Mentor.UrlRequest = "https://app.conectasuas.com.br/assistenciaSocial/"
      //"http://app.vvision.com.br:8080/assistenciaSocial/";
      var licencas = Mentor.executaVisao(2632, "varcodigo=" + licenca.estado.codigo + "&varsistema=" + licenca.sistema + "&varnomeMunicipio=" + licenca.nomeMunicipio);
      if (licencas == null || licencas.length != 1)
        this.router.navigateByUrl('selecao-municipio');
      else {
        licenca = licencas[0];
        this.storage.set("licenca", licenca);
      }

    }

    Mentor.UrlRequest = licenca.urlServidor;
    this.logo = licenca.logo;

    this.storage.get("ultimoUsuario").then(usu => {
      if (usu == null)
        return this.presentAlert();

    });
  }


  async navegacao() {
    await this.storage.create();
    await this.storage.remove("licenca");
    this.router.navigate(["selecao-municipio"]);

  }




}
