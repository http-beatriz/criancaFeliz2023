import { Storage } from '@ionic/storage';
//import { Select, TextInput, RadioGroup } from 'ionic-angular';
//import {  NavController } from 'ionic-angular';
import { IonSelect, IonInput} from '@ionic/angular' 
import { Router } from '@angular/router'

import { DomicilioCras, Funcionarios, PcfCaracterizacaoCrianca, PcfRespostaIndicadores, PcfCaracterizacaoGestante, PcfPlanoVisita, FormularioPesquisa, pcfAppFormulario } from '../models/Modelo'
import { Mentor } from '../models/Mentor'
import { Escola } from './Modelo';

export class Controlador {
	nav: Router;

	
	public inicializaDiagnostico(diagnostico: any[], servidor: Funcionarios){
		for(var d = 0;d<diagnostico.length;d++){
			if(diagnostico[d].codigo==0 || typeof(diagnostico[d].codigo) == "undefined")
			diagnostico[d].responsavelCadastro = servidor;
		diagnostico[d].responsavelAlteracao = servidor;
		diagnostico[d].tipo = 1;
		diagnostico[d].dataDiagnostico = new Date();
		}
	
	}

	public inicializaAvaliacao(diagnostico: any[], servidor: Funcionarios){
		for(var d = 0;d<diagnostico.length;d++){
			if(diagnostico[d].codigo==0 || typeof(diagnostico[d].codigo) == "undefined")
		
		diagnostico[d].visitador = servidor;
		diagnostico[d].supervisor = servidor;
		diagnostico[d].tipo = 1;
		diagnostico[d].dataAvaliacao = new Date();
		}
	
	}

	public inicializaCrianca(crianca: any, servidor: Funcionarios){
		
			if(crianca.codigo==0 || typeof(crianca.codigo) == "undefined")
			crianca.responsavelCadastro = servidor;
			crianca.responsavelAlteracao = servidor;
		
	}

	public retornaQuestionariosRespondidos(respondidos: pcfAppFormulario[], questionarios: FormularioPesquisa[]) {
		var retorno: pcfAppFormulario[] = new Array(questionarios.length);
		if (respondidos != null) {
			for (var r = 0; r < respondidos.length; r++) {
				if (questionarios != null)
					for (var x = 0; x < questionarios.length; x++)
						if (respondidos[r].formulario.codigo == questionarios[x].codigo)
							retorno[x] = respondidos[r];
			}
		}
		return retorno;
	}

	public naFaixa(inicio: number, fim: number, date1: Date) {

		if(typeof date1 === 'string')
		date1 = new Date(date1);

		inicio = inicio * 30;
		inicio = inicio + 1;

		fim = fim * 30;

		var date2 = new Date();

		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

		if (diffDays >= inicio && diffDays <= fim)
			return false;
		else
			return false;

	}
/*validaca
	public valida(selects: IonSelect[], inputs: IonInput[]) {
		if (selects != null) {
			for (var x: number = 0; x < selects.length; x++) {
				if(document.getElementById(selects[x].id).parentElement.id != "ignora" )
				if (selects[x].value == "" || selects[x].value == "0") {
					alert(document.getElementById(selects[x]._labelId).innerHTML + " tem de ser preenchido");
					selects[x].open();
					return false;
				}
			}
		}
		if (inputs != null) {
			for (var x: number = 0; x < inputs.length; x++) {
				if (inputs[x].value == "" || inputs[x].value == "0") {
					alert(document.getElementById(inputs[x]._labelId).innerHTML + " tem de ser preenchido");
					inputs[x].setFocus();
					return false;
				}
			}
		}

		return true;
	}
	*/

	public enderecoCompleto(dom: DomicilioCras) {
		var retorno = "";
		if (dom.tipo_logradouro != null) {
			retorno = dom.tipo_logradouro + " ";
		}
		if (dom.endereco != null) {
			retorno = retorno + dom.endereco + ", ";
		}
		if (dom.numero != null) {
			retorno = retorno + "N - " + dom.numero.replace(",0", "") + ", ";
		}
		return retorno;
	}

	public idade(date1: Date) {

		if(typeof date1 === 'string')
			date1 = new Date(date1);

		var date2 = new Date();

		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

		var anos = (diffDays / 365 >> 0);
		var resto = diffDays % 365;
		var meses = (resto / 30 >> 0);
		resto = resto % 30;

		return anos + " anos " + meses + " meses e " + resto + " dias ";
	}

	public formataData(dt: Date) {

		if(typeof dt === 'string')
			dt = new Date(dt);
			
		var retorno = "";
		retorno = dt.getDate() + "";
		if (dt.getDate() < 10)
			retorno = "0" + retorno;
		retorno = retorno + "/";
		var mes = dt.getMonth() + 1;
		if (mes < 10)
			retorno = retorno + "0";
		retorno = retorno + mes + "/" + dt.getFullYear();

		return retorno;

	}

//aqui
	salvaRaizCrianca(crianca: PcfCaracterizacaoCrianca, store: Storage, nav: Router) {
		store.get("criancas").then(raizes => {
			raizes[crianca.ionicIndiceRepositorio] = crianca
			store.set("criancas", raizes);
			//if (nav != null)
				//nav.pop();
		});
	}

//aqui
	salvaRaizGestante(gestante: PcfCaracterizacaoGestante, store: Storage, nav: Router) {
		store.get("gestantes").then(raizes => {
			raizes[gestante.ionicIndiceRepositorio] = gestante
			store.set("gestantes", raizes);
			if (nav != null)
				this.nav.navigateByUrl("/");
		});
	}


	public achaPlanoVisitaCrianca(crianca: PcfCaracterizacaoCrianca, planos: PcfPlanoVisita[]) {
		if (PcfPlanoVisita != null)
			for (var p = 0; p < planos.length; p++)
				if (planos[p].familias != null)
					for (var f = 0; f < planos[p].familias.length; f++)
						if (planos[p].familias[f].familia != null && planos[p].familias[f].familia.criancas != null)
							for (var c = 0; c < planos[p].familias[f].familia.criancas.length; c++)
								if (planos[p].familias[f].familia.criancas[c].codigo == crianca.codigo)
									return planos[p];

	}

	public achaPlanoVisitaGestante(gestante: PcfCaracterizacaoGestante, planos: PcfPlanoVisita[]) {
		if (PcfPlanoVisita != null)
			for (var p = 0; p < planos.length; p++)
				if (planos[p].familias != null)
					for (var f = 0; f < planos[p].familias.length; f++)
						if (planos[p].familias[f].familia != null && planos[p].familias[f].familia.gestantes != null)
							for (var c = 0; c < planos[p].familias[f].familia.gestantes.length; c++)
								if (planos[p].familias[f].familia.gestantes[c].codigo == gestante.codigo)
									return planos[p];

	}
//aqui
	public sincronizaDadosServidor(sto: Storage, funcionario: Funcionarios, nav: Router) {
		// envia Dados

		var supervisores: Funcionarios[];
		supervisores =  Mentor.executaVisao(1504, "");
		if (supervisores != null)
			for (var x: number = 0; x < supervisores.length; x++)
			supervisores[x] = new Funcionarios(supervisores[x]);
		sto.set("supervisores", supervisores);

		// recupera Dados
		var lescolas: Escola[] = Mentor.executaVisao(440, "");
		if (lescolas != null)
			for (var x: number = 0; x < lescolas.length; x++)
				lescolas[x] = new Escola(lescolas[x]);
		sto.set("escolas", lescolas);


		var lrespostas: PcfRespostaIndicadores[] = Mentor.executaVisao(1290, "");
		if (lrespostas != null)
			for (var x: number = 0; x < lrespostas.length; x++)
				lrespostas[x] = new PcfRespostaIndicadores(lrespostas[x]);
		sto.set("respostas", lrespostas);

		var lrepform = new Array(20);

		for (var x = 1; x < 20; x++) {
			lrepform[x] = new Array();
		}

		var lformularios: FormularioPesquisa[] = Mentor.executaVisao(1521, "");
		for (var x: number = 0; x < lformularios.length; x++) {
			lformularios[x] = new FormularioPesquisa(lformularios[x]);
			if(lformularios[x].questoes != null && lformularios[x].questoes.length > 0)
				lrepform[lformularios[x].tipo].push(lformularios[x]);
		}

		for (var d = 0; d < lrepform[9].length; d++) {
			for (var x = 1; x < 9; x++) {
				lrepform[x].push(lrepform[9][d]);
			}
		}

		for (var d = 0; d < lrepform[10].length; d++) {
			for (var x = 11; x < 20; x++) {
				lrepform[x].push(lrepform[10][d]);
			}
		}

		for (var x = 1; x < 20; x++) {
			if (x != 9 && x != 10)
				sto.set("formularios" + x, lrepform[x]);
		}



		var planosVisitas: PcfPlanoVisita[] = Mentor.executaVisao(1518, "varcodigo=" + funcionario.codigo);
		var criancasServidor: PcfCaracterizacaoCrianca[] = new Array();
		var gestantesServidor: PcfCaracterizacaoGestante[] = new Array();

		if (planosVisitas != null)
			for (var x = planosVisitas.length - 1; x >= 0; x--) {
				planosVisitas[x] = new PcfPlanoVisita(planosVisitas[x]);
				if (planosVisitas[x].familias != null) {
					for (var f = planosVisitas[x].familias.length - 1; f >= 0; f--) {
						if (planosVisitas[x].familias[f].familia != null) {
							if (planosVisitas[x].familias[f].familia.criancas != null)
								for (var c = 0; c < planosVisitas[x].familias[f].familia.criancas.length; c++)
									criancasServidor.push(planosVisitas[x].familias[f].familia.criancas[c]);

							if (planosVisitas[x].familias[f].familia.gestantes != null)
								for (var c = 0; c < planosVisitas[x].familias[f].familia.gestantes.length; c++)
									gestantesServidor.push(planosVisitas[x].familias[f].familia.gestantes[c]);
						} else
							planosVisitas[x].familias.splice(f, 1);

					}
				}

			}

		sto.set("planos", planosVisitas);

		if (criancasServidor != null && criancasServidor.length > 0)
			sto.get("criancas").then(criancas => {
				var criancasLocal: PcfCaracterizacaoCrianca[] = criancas;
				if (criancasLocal == null)
					criancasLocal = new Array();

				let codigos: string = "0";
				for (let c: number = 0; c < criancasServidor.length; c++) {
					let achou: boolean = false;
					for (let x: number = 0; x < criancasLocal.length; x++)
						if (criancasServidor[c].codigo == criancasLocal[x].codigo)
							achou = true;
					if (!achou)
						codigos = codigos + ", " + criancasServidor[c].codigo;
				}

				if (codigos != "0") {
					criancasServidor = Mentor.executaVisao(1506, "varcodigo=" + codigos);
					for (let c: number = 0; c < criancasServidor.length; c++) {
						criancasLocal.push(new PcfCaracterizacaoCrianca(criancasServidor[c]));
						criancasLocal[criancasLocal.length - 1].associadoCras.domicilioCras.planoVisita = this.achaPlanoVisitaCrianca(criancasServidor[c], planosVisitas);

					}


					sto.set("criancas", criancasLocal);

				}
			});

		if (gestantesServidor != null && gestantesServidor.length > 0)
			sto.get("gestantes").then(gestantes => {
				var gestanteLocal: PcfCaracterizacaoGestante[] = gestantes;
				if (gestanteLocal == null)
					gestanteLocal = new Array();

				let codigos: string = "0";
				for (let c: number = 0; c < gestantesServidor.length; c++) {
					let achou: boolean = false;
					for (let x: number = 0; x < gestanteLocal.length; x++)
						if (gestantesServidor[c].codigo == gestanteLocal[x].codigo)
							achou = true;
					if (!achou)
						codigos = codigos + ", " + gestantesServidor[c].codigo;
				}

				if (codigos != "0") {
					gestantesServidor = Mentor.executaVisao(1519, "varcodigo=" + codigos);
					for (let c: number = 0; c < gestantesServidor.length; c++) {
						gestanteLocal.push(new PcfCaracterizacaoGestante(gestantesServidor[c]));

						gestanteLocal[gestanteLocal.length - 1].associadoCras.domicilioCras.planoVisita = this.achaPlanoVisitaGestante(gestantesServidor[c], planosVisitas);
					}


					sto.set("gestantes", gestanteLocal);

				}



			});

		//if (nav != null)
		//	nav.pop();
	}

}