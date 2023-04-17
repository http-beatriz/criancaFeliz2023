

// codigo gerado automaticamente pelo mentor transacao 964

import { Mentor } from '../models/Mentor'
// import { CriancaAvaliacaoDetalha_0_3Page } from '../pages/crianca-avaliacao-detalha-0-3/crianca-avaliacao-detalha-0-3';
function replaceAll(palavra, de, para) {
	var str = palavra;
	var pos = str.indexOf(de);
	while (pos > -1) {
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
	return (str);
}
export class formatadoLista {
	public de: number;
	public para: String;
	constructor(de: number, para: String) {
		this.de = de;
		this.para = para;
	}
}
export class ionicClasseBase {
	public ionicIndiceRepositorio: number;
	public ionicFlagConcluido: boolean
	public criancas: PcfCaracterizacaoCrianca[];
	public gestantes;
	public planoVisita;
	public domicilios: DomicilioCras[];
	public respostaApp: pcfAppRespostaFormulario;
	public respostasApp: pcfAppRespostaFormulario[];
	public ionicFlagNovo: boolean

}


export class PcfCaracterizacaoCrianca extends ionicClasseBase {

	public associado: any;
	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}
	public diagnosticos_0_28: PcfDiagnostico028[];
	public informacoes: PcfInformacoesCrianca;
	public relacionamentoCrianca: PcfRelacionamentosCrianca;
	public diagnosticos_0_3: PcfDiagnostico03[];
	public diagnosticos_2_3: PcfDiagnostico23[];
	public diagnostico_12_18: PcfDiagnostico1218[];
	public diagnostico_3_6: PcfDiagnostico36[];
	public diagnostico_18_24: PcfDiagnostico1824[];
	public diagnostico_6_9: PcfDiagnostico69[];
	public avaliacao_0_3: PcfAvaliacao03[];
	public avaliacao_12_18: PcfAvaliacao1218[];
	public avaliacao_18_24: PcfAvaliacao1824[];
	public avaliacao_9_12: PcfAvaliacao912[];
	public avaliacao_6_9: PcfAvaliacao69[];
	public avaliacao_3_6: PcfAvaliacao36[];
	public avaliacao_2_3: PcfAvaliacao23[];
	public associadoCras: AssociadoCras;
	public convivenciaFamiliar: PcfConvivenciaFamiliar;
	public diagnostico_9_12: PcfDiagnostico912[];
	public formulariosApp: pcfAppFormulario[];
	public domicilioCras: DomicilioCras;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {
			this.associado = objeto.associado;
			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;

			if (objeto.diagnosticos_0_28 != null) {
				this.diagnosticos_0_28 = new Array();
				for (let x: number = 0; x < objeto.diagnosticos_0_28.length; x++)
					this.diagnosticos_0_28.push(new PcfDiagnostico028(objeto.diagnosticos_0_28[x]))
			}

			if (objeto.informacoes != null)
				this.informacoes = new PcfInformacoesCrianca(objeto.informacoes);

			if (objeto.relacionamentoCrianca != null)
				this.relacionamentoCrianca = new PcfRelacionamentosCrianca(objeto.relacionamentoCrianca);

			if (objeto.diagnosticos_0_3 != null) {
				this.diagnosticos_0_3 = new Array();
				for (let x: number = 0; x < objeto.diagnosticos_0_3.length; x++)
					this.diagnosticos_0_3.push(new PcfDiagnostico03(objeto.diagnosticos_0_3[x]))
			}

			if (objeto.diagnosticos_2_3 != null) {
				this.diagnosticos_2_3 = new Array();
				for (let x: number = 0; x < objeto.diagnosticos_2_3.length; x++)
					this.diagnosticos_2_3.push(new PcfDiagnostico23(objeto.diagnosticos_2_3[x]))
			}

			if (objeto.diagnostico_12_18 != null) {
				this.diagnostico_12_18 = new Array();
				for (let x: number = 0; x < objeto.diagnostico_12_18.length; x++)
					this.diagnostico_12_18.push(new PcfDiagnostico1218(objeto.diagnostico_12_18[x]))
			}

			if (objeto.diagnostico_3_6 != null) {
				this.diagnostico_3_6 = new Array();
				for (let x: number = 0; x < objeto.diagnostico_3_6.length; x++)
					this.diagnostico_3_6.push(new PcfDiagnostico36(objeto.diagnostico_3_6[x]))
			}

			if (objeto.diagnostico_18_24 != null) {
				this.diagnostico_18_24 = new Array();
				for (let x: number = 0; x < objeto.diagnostico_18_24.length; x++)
					this.diagnostico_18_24.push(new PcfDiagnostico1824(objeto.diagnostico_18_24[x]))
			}

			if (objeto.diagnostico_6_9 != null) {
				this.diagnostico_6_9 = new Array();
				for (let x: number = 0; x < objeto.diagnostico_6_9.length; x++)
					this.diagnostico_6_9.push(new PcfDiagnostico69(objeto.diagnostico_6_9[x]))
			}

			if (objeto.avaliacao_0_3 != null) {
				this.avaliacao_0_3 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_0_3.length; x++)
					this.avaliacao_0_3.push(new PcfAvaliacao03(objeto.avaliacao_0_3[x]))
			}

			if (objeto.avaliacao_12_18 != null) {
				this.avaliacao_12_18 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_12_18.length; x++)
					this.avaliacao_12_18.push(new PcfAvaliacao1218(objeto.avaliacao_12_18[x]))
			}

			if (objeto.avaliacao_18_24 != null) {
				this.avaliacao_18_24 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_18_24.length; x++)
					this.avaliacao_18_24.push(new PcfAvaliacao1824(objeto.avaliacao_18_24[x]))
			}

			if (objeto.avaliacao_9_12 != null) {
				this.avaliacao_9_12 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_9_12.length; x++)
					this.avaliacao_9_12.push(new PcfAvaliacao912(objeto.avaliacao_9_12[x]))
			}

			if (objeto.avaliacao_6_9 != null) {
				this.avaliacao_6_9 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_6_9.length; x++)
					this.avaliacao_6_9.push(new PcfAvaliacao69(objeto.avaliacao_6_9[x]))
			}

			if (objeto.avaliacao_3_6 != null) {
				this.avaliacao_3_6 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_3_6.length; x++)
					this.avaliacao_3_6.push(new PcfAvaliacao36(objeto.avaliacao_3_6[x]))
			}

			if (objeto.avaliacao_2_3 != null) {
				this.avaliacao_2_3 = new Array();
				for (let x: number = 0; x < objeto.avaliacao_2_3.length; x++)
					this.avaliacao_2_3.push(new PcfAvaliacao23(objeto.avaliacao_2_3[x]))
			}

			if (objeto.associadoCras != null)
				this.associadoCras = new AssociadoCras(objeto.associadoCras);

			if (objeto.convivenciaFamiliar != null)
				this.convivenciaFamiliar = new PcfConvivenciaFamiliar(objeto.convivenciaFamiliar);

			if (objeto.diagnostico_9_12 != null) {
				this.diagnostico_9_12 = new Array();
				for (let x: number = 0; x < objeto.diagnostico_9_12.length; x++)
					this.diagnostico_9_12.push(new PcfDiagnostico912(objeto.diagnostico_9_12[x]))
			}

			if (objeto.formulariosApp != null) {
				this.formulariosApp = new Array();
				for (let x: number = 0; x < objeto.formulariosApp.length; x++)
					this.formulariosApp.push(new pcfAppFormulario(objeto.formulariosApp[x]))
			}

			if (objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

		}
		else {

			this.informacoes = new PcfInformacoesCrianca(null);
			this.relacionamentoCrianca = new PcfRelacionamentosCrianca(null);
			this.associadoCras = new AssociadoCras(null);
			this.convivenciaFamiliar = new PcfConvivenciaFamiliar(null);
			this.domicilioCras = new DomicilioCras(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);

		}


	}

}


export class PcfDiagnostico028 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public marcoUmAusente: number;
	get marcoUmAusenteFormatado(): String {
		return Mentor.moedaToString(this.marcoUmAusente)
	}
	set marcoUmAusenteFormatado(valor: String) {
		this.marcoUmAusente = Mentor.stringToMoeda(valor);
	}

	public marcoUmDimensao: number;
	get marcoUmDimensaoFormatado(): String {
		return Mentor.moedaToString(this.marcoUmDimensao)
	}
	set marcoUmDimensaoFormatado(valor: String) {
		this.marcoUmDimensao = Mentor.stringToMoeda(valor);
	}

	public marcoUmPresente: number;
	public marcoUmPresenteFormatadoLista: formatadoLista[] = new Array();


	public observacoes: String;

	public marcoDoisPresente: number;
	public marcoDoisPresenteFormatadoLista: formatadoLista[] = new Array();


	public marcoDoisAusente: number;
	get marcoDoisAusenteFormatado(): String {
		return Mentor.moedaToString(this.marcoDoisAusente)
	}
	set marcoDoisAusenteFormatado(valor: String) {
		this.marcoDoisAusente = Mentor.stringToMoeda(valor);
	}

	public marcoDoisDimensao: number;
	get marcoDoisDimensaoFormatado(): String {
		return Mentor.moedaToString(this.marcoDoisDimensao)
	}
	set marcoDoisDimensaoFormatado(valor: String) {
		this.marcoDoisDimensao = Mentor.stringToMoeda(valor);
	}
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.marcoUmAusente = objeto.marcoUmAusente;
			this.marcoUmDimensao = objeto.marcoUmDimensao;
			this.marcoUmPresente = objeto.marcoUmPresente;
			this.observacoes = objeto.observacoes;
			this.marcoDoisPresente = objeto.marcoDoisPresente;
			this.marcoDoisAusente = objeto.marcoDoisAusente;
			this.marcoDoisDimensao = objeto.marcoDoisDimensao;

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

		}
		else {

			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);

		}

		this.marcoUmPresenteFormatadoLista.push(new formatadoLista(1, "Presente"));
		this.marcoUmPresenteFormatadoLista.push(new formatadoLista(2, "Ausente"));
		this.marcoUmPresenteFormatadoLista.push(new formatadoLista(3, "Dimensão"));
		this.marcoDoisPresenteFormatadoLista.push(new formatadoLista(1, "Presente"));
		this.marcoDoisPresenteFormatadoLista.push(new formatadoLista(2, "Ausente"));
		this.marcoDoisPresenteFormatadoLista.push(new formatadoLista(3, "Dimensão"));

	}

}


export class PcfInformacoesCrianca extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public aehp: number;
	get aehpFormatado(): String {
		return Mentor.moedaToString(this.aehp)
	}
	set aehpFormatado(valor: String) {
		this.aehp = Mentor.stringToMoeda(valor);
	}

	public amamentada: number;
	public amamentadaFormatadoLista: formatadoLista[] = new Array();


	public anemia: number;
	get anemiaFormatado(): String {
		return Mentor.moedaToString(this.anemia)
	}
	set anemiaFormatado(valor: String) {
		this.anemia = Mentor.stringToMoeda(valor);
	}

	public apae: number;
	get apaeFormatado(): String {
		return Mentor.moedaToString(this.apae)
	}
	set apaeFormatado(valor: String) {
		this.apae = Mentor.stringToMoeda(valor);
	}

	public asma: number;
	get asmaFormatado(): String {
		return Mentor.moedaToString(this.asma)
	}
	set asmaFormatado(valor: String) {
		this.asma = Mentor.stringToMoeda(valor);
	}

	public caps: number;
	get capsFormatado(): String {
		return Mentor.moedaToString(this.caps)
	}
	set capsFormatado(valor: String) {
		this.caps = Mentor.stringToMoeda(valor);
	}

	public cardiologista: number;
	get cardiologistaFormatado(): String {
		return Mentor.moedaToString(this.cardiologista)
	}
	set cardiologistaFormatado(valor: String) {
		this.cardiologista = Mentor.stringToMoeda(valor);
	}

	public cardiovasculares: number;
	get cardiovascularesFormatado(): String {
		return Mentor.moedaToString(this.cardiovasculares)
	}
	set cardiovascularesFormatado(valor: String) {
		this.cardiovasculares = Mentor.stringToMoeda(valor);
	}

	public clinica: number;
	get clinicaFormatado(): String {
		return Mentor.moedaToString(this.clinica)
	}
	set clinicaFormatado(valor: String) {
		this.clinica = Mentor.stringToMoeda(valor);
	}

	public convulsao: number;
	get convulsaoFormatado(): String {
		return Mentor.moedaToString(this.convulsao)
	}
	set convulsaoFormatado(valor: String) {
		this.convulsao = Mentor.stringToMoeda(valor);
	}

	public csc: number;
	public cscFormatadoLista: formatadoLista[] = new Array();


	public cuidador: number;
	public cuidadorFormatadoLista: formatadoLista[] = new Array();


	public cuidadorCargaHoraria: number;
	get cuidadorCargaHorariaFormatado(): String {
		return Mentor.moedaToString(this.cuidadorCargaHoraria)
	}
	set cuidadorCargaHorariaFormatado(valor: String) {
		this.cuidadorCargaHoraria = Mentor.stringToMoeda(valor);
	}

	public cuidadorEscolaridade: number;
	public cuidadorEscolaridadeFormatadoLista: formatadoLista[] = new Array();


	public cuidadorEstuda: number;
	public cuidadorEstudaFormatadoLista: formatadoLista[] = new Array();


	public cuidadorLocalTrabalho: String;

	public cuidadorOutro: String;

	public cuidadorProfissao: String;

	public cuidadorTrabalha: number;
	public cuidadorTrabalhaFormatadoLista: formatadoLista[] = new Array();


	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public defAuditiva: number;
	get defAuditivaFormatado(): String {
		return Mentor.moedaToString(this.defAuditiva)
	}
	set defAuditivaFormatado(valor: String) {
		this.defAuditiva = Mentor.stringToMoeda(valor);
	}

	public defFisica: number;
	get defFisicaFormatado(): String {
		return Mentor.moedaToString(this.defFisica)
	}
	set defFisicaFormatado(valor: String) {
		this.defFisica = Mentor.stringToMoeda(valor);
	}

	public defIntelectual: number;
	get defIntelectualFormatado(): String {
		return Mentor.moedaToString(this.defIntelectual)
	}
	set defIntelectualFormatado(valor: String) {
		this.defIntelectual = Mentor.stringToMoeda(valor);
	}

	public defMultipla: number;
	get defMultiplaFormatado(): String {
		return Mentor.moedaToString(this.defMultipla)
	}
	set defMultiplaFormatado(valor: String) {
		this.defMultipla = Mentor.stringToMoeda(valor);
	}

	public defVisual: number;
	get defVisualFormatado(): String {
		return Mentor.moedaToString(this.defVisual)
	}
	set defVisualFormatado(valor: String) {
		this.defVisual = Mentor.stringToMoeda(valor);
	}

	public descOutraEspecialidade: String;

	public descOutroServico: String;

	public descricaoDoenca: String;

	public diaVisita: number;
	public diaVisitaFormatadoLista: formatadoLista[] = new Array();


	public diabetes: number;
	get diabetesFormatado(): String {
		return Mentor.moedaToString(this.diabetes)
	}
	set diabetesFormatado(valor: String) {
		this.diabetes = Mentor.stringToMoeda(valor);
	}

	public diganosticado: number;
	public diganosticadoFormatadoLista: formatadoLista[] = new Array();


	public doencaFalciforme: number;
	get doencaFalciformeFormatado(): String {
		return Mentor.moedaToString(this.doencaFalciforme)
	}
	set doencaFalciformeFormatado(valor: String) {
		this.doencaFalciforme = Mentor.stringToMoeda(valor);
	}

	public dst: number;
	get dstFormatado(): String {
		return Mentor.moedaToString(this.dst)
	}
	set dstFormatado(valor: String) {
		this.dst = Mentor.stringToMoeda(valor);
	}

	public endocrinologista: number;
	get endocrinologistaFormatado(): String {
		return Mentor.moedaToString(this.endocrinologista)
	}
	set endocrinologistaFormatado(valor: String) {
		this.endocrinologista = Mentor.stringToMoeda(valor);
	}

	public equoterapia: number;
	get equoterapiaFormatado(): String {
		return Mentor.moedaToString(this.equoterapia)
	}
	set equoterapiaFormatado(valor: String) {
		this.equoterapia = Mentor.stringToMoeda(valor);
	}

	public fisioterapia: number;
	get fisioterapiaFormatado(): String {
		return Mentor.moedaToString(this.fisioterapia)
	}
	set fisioterapiaFormatado(valor: String) {
		this.fisioterapia = Mentor.stringToMoeda(valor);
	}

	public fonoaudiologia: number;
	get fonoaudiologiaFormatado(): String {
		return Mentor.moedaToString(this.fonoaudiologia)
	}
	set fonoaudiologiaFormatado(valor: String) {
		this.fonoaudiologia = Mentor.stringToMoeda(valor);
	}

	public fundacao: number;
	get fundacaoFormatado(): String {
		return Mentor.moedaToString(this.fundacao)
	}
	set fundacaoFormatado(valor: String) {
		this.fundacao = Mentor.stringToMoeda(valor);
	}

	public gastro: number;
	get gastroFormatado(): String {
		return Mentor.moedaToString(this.gastro)
	}
	set gastroFormatado(valor: String) {
		this.gastro = Mentor.stringToMoeda(valor);
	}

	public hipertensao: number;
	get hipertensaoFormatado(): String {
		return Mentor.moedaToString(this.hipertensao)
	}
	set hipertensaoFormatado(valor: String) {
		this.hipertensao = Mentor.stringToMoeda(valor);
	}

	public hiv: number;
	get hivFormatado(): String {
		return Mentor.moedaToString(this.hiv)
	}
	set hivFormatado(valor: String) {
		this.hiv = Mentor.stringToMoeda(valor);
	}

	public horaVisita: String;

	public idadeGestacional: number;
	public idadeGestacionalFormatadoLista: formatadoLista[] = new Array();


	public infecto: number;
	get infectoFormatado(): String {
		return Mentor.moedaToString(this.infecto)
	}
	set infectoFormatado(valor: String) {
		this.infecto = Mentor.stringToMoeda(valor);
	}

	public intoGluten: number;
	get intoGlutenFormatado(): String {
		return Mentor.moedaToString(this.intoGluten)
	}
	set intoGlutenFormatado(valor: String) {
		this.intoGluten = Mentor.stringToMoeda(valor);
	}

	public intoLactose: number;
	get intoLactoseFormatado(): String {
		return Mentor.moedaToString(this.intoLactose)
	}
	set intoLactoseFormatado(valor: String) {
		this.intoLactose = Mentor.stringToMoeda(valor);
	}

	public intoProteina: number;
	get intoProteinaFormatado(): String {
		return Mentor.moedaToString(this.intoProteina)
	}
	set intoProteinaFormatado(valor: String) {
		this.intoProteina = Mentor.stringToMoeda(valor);
	}

	public labioPalatina: number;
	get labioPalatinaFormatado(): String {
		return Mentor.moedaToString(this.labioPalatina)
	}
	set labioPalatinaFormatado(valor: String) {
		this.labioPalatina = Mentor.stringToMoeda(valor);
	}

	public mesesGestacional: number;
	get mesesGestacionalFormatado(): String {
		return Mentor.moedaToString(this.mesesGestacional)
	}
	set mesesGestacionalFormatado(valor: String) {
		this.mesesGestacional = Mentor.stringToMoeda(valor);
	}

	public musicoterapia: number;
	get musicoterapiaFormatado(): String {
		return Mentor.moedaToString(this.musicoterapia)
	}
	set musicoterapiaFormatado(valor: String) {
		this.musicoterapia = Mentor.stringToMoeda(valor);
	}

	public nasf: number;
	get nasfFormatado(): String {
		return Mentor.moedaToString(this.nasf)
	}
	set nasfFormatado(valor: String) {
		this.nasf = Mentor.stringToMoeda(valor);
	}

	public neuropediatria: number;
	get neuropediatriaFormatado(): String {
		return Mentor.moedaToString(this.neuropediatria)
	}
	set neuropediatriaFormatado(valor: String) {
		this.neuropediatria = Mentor.stringToMoeda(valor);
	}

	public nomeCuidador: String;

	public observacoes: String;

	public odonto: number;
	get odontoFormatado(): String {
		return Mentor.moedaToString(this.odonto)
	}
	set odontoFormatado(valor: String) {
		this.odonto = Mentor.stringToMoeda(valor);
	}

	public oftalmologia: number;
	get oftalmologiaFormatado(): String {
		return Mentor.moedaToString(this.oftalmologia)
	}
	set oftalmologiaFormatado(valor: String) {
		this.oftalmologia = Mentor.stringToMoeda(valor);
	}

	public outraDoenca: number;
	get outraDoencaFormatado(): String {
		return Mentor.moedaToString(this.outraDoenca)
	}
	set outraDoencaFormatado(valor: String) {
		this.outraDoenca = Mentor.stringToMoeda(valor);
	}

	public outraEspecialidae: number;
	get outraEspecialidaeFormatado(): String {
		return Mentor.moedaToString(this.outraEspecialidae)
	}
	set outraEspecialidaeFormatado(valor: String) {
		this.outraEspecialidae = Mentor.stringToMoeda(valor);
	}

	public outroServico: number;
	get outroServicoFormatado(): String {
		return Mentor.moedaToString(this.outroServico)
	}
	set outroServicoFormatado(valor: String) {
		this.outroServico = Mentor.stringToMoeda(valor);
	}

	public pediatria: number;
	get pediatriaFormatado(): String {
		return Mentor.moedaToString(this.pediatria)
	}
	set pediatriaFormatado(valor: String) {
		this.pediatria = Mentor.stringToMoeda(valor);
	}

	public pneumologia: number;
	get pneumologiaFormatado(): String {
		return Mentor.moedaToString(this.pneumologia)
	}
	set pneumologiaFormatado(valor: String) {
		this.pneumologia = Mentor.stringToMoeda(valor);
	}

	public psicologia: number;
	get psicologiaFormatado(): String {
		return Mentor.moedaToString(this.psicologia)
	}
	set psicologiaFormatado(valor: String) {
		this.psicologia = Mentor.stringToMoeda(valor);
	}

	public psicopedagogia: number;
	get psicopedagogiaFormatado(): String {
		return Mentor.moedaToString(this.psicopedagogia)
	}
	set psicopedagogiaFormatado(valor: String) {
		this.psicopedagogia = Mentor.stringToMoeda(valor);
	}

	public refluxo: number;
	get refluxoFormatado(): String {
		return Mentor.moedaToString(this.refluxo)
	}
	set refluxoFormatado(valor: String) {
		this.refluxo = Mentor.stringToMoeda(valor);
	}

	public registroAlturaCsc: number;
	public registroAlturaCscFormatadoLista: formatadoLista[] = new Array();


	public registroPesoCsc: number;
	public registroPesoCscFormatadoLista: formatadoLista[] = new Array();


	public respiradorBucal: number;
	get respiradorBucalFormatado(): String {
		return Mentor.moedaToString(this.respiradorBucal)
	}
	set respiradorBucalFormatado(valor: String) {
		this.respiradorBucal = Mentor.stringToMoeda(valor);
	}

	public rnc: number;
	public rncFormatadoLista: formatadoLista[] = new Array();


	public rncAmbosPais: number;
	public rncAmbosPaisFormatadoLista: formatadoLista[] = new Array();


	public saedst: number;
	get saedstFormatado(): String {
		return Mentor.moedaToString(this.saedst)
	}
	set saedstFormatado(valor: String) {
		this.saedst = Mentor.stringToMoeda(valor);
	}

	public semanasGestacional: number;
	get semanasGestacionalFormatado(): String {
		return Mentor.moedaToString(this.semanasGestacional)
	}
	set semanasGestacionalFormatado(valor: String) {
		this.semanasGestacional = Mentor.stringToMoeda(valor);
	}

	public sifilis: number;
	get sifilisFormatado(): String {
		return Mentor.moedaToString(this.sifilis)
	}
	set sifilisFormatado(valor: String) {
		this.sifilis = Mentor.stringToMoeda(valor);
	}

	public sus: number;
	get susFormatado(): String {
		return Mentor.moedaToString(this.sus)
	}
	set susFormatado(valor: String) {
		this.sus = Mentor.stringToMoeda(valor);
	}

	public tda: number;
	get tdaFormatado(): String {
		return Mentor.moedaToString(this.tda)
	}
	set tdaFormatado(valor: String) {
		this.tda = Mentor.stringToMoeda(valor);
	}

	public tempoAmamentacao: number;
	public tempoAmamentacaoFormatadoLista: formatadoLista[] = new Array();


	public terapiaOcupacional: number;
	get terapiaOcupacionalFormatado(): String {
		return Mentor.moedaToString(this.terapiaOcupacional)
	}
	set terapiaOcupacionalFormatado(valor: String) {
		this.terapiaOcupacional = Mentor.stringToMoeda(valor);
	}

	public testeCoracaozinho: number;
	public testeCoracaozinhoFormatadoLista: formatadoLista[] = new Array();


	public testeOlhinho: number;
	public testeOlhinhoFormatadoLista: formatadoLista[] = new Array();


	public testeOrelhinha: number;
	public testeOrelhinhaFormatadoLista: formatadoLista[] = new Array();


	public testePezinho: number;
	public testePezinhoFormatadoLista: formatadoLista[] = new Array();


	public tipoParto: number;
	public tipoPartoFormatadoLista: formatadoLista[] = new Array();


	public ubs: number;
	get ubsFormatado(): String {
		return Mentor.moedaToString(this.ubs)
	}
	set ubsFormatado(valor: String) {
		this.ubs = Mentor.stringToMoeda(valor);
	}

	public vacinas: number;
	public vacinasFormatadoLista: formatadoLista[] = new Array();


	public semAcompanhamento: number;
	get semAcompanhamentoFormatado(): String {
		return Mentor.moedaToString(this.semAcompanhamento)
	}
	set semAcompanhamentoFormatado(valor: String) {
		this.semAcompanhamento = Mentor.stringToMoeda(valor);
	}
	public cuidadorEscola: Escola;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.aehp = objeto.aehp;
			this.amamentada = objeto.amamentada;
			this.anemia = objeto.anemia;
			this.apae = objeto.apae;
			this.asma = objeto.asma;
			this.caps = objeto.caps;
			this.cardiologista = objeto.cardiologista;
			this.cardiovasculares = objeto.cardiovasculares;
			this.clinica = objeto.clinica;
			this.convulsao = objeto.convulsao;
			this.csc = objeto.csc;
			this.cuidador = objeto.cuidador;
			this.cuidadorCargaHoraria = objeto.cuidadorCargaHoraria;
			this.cuidadorEscolaridade = objeto.cuidadorEscolaridade;
			this.cuidadorEstuda = objeto.cuidadorEstuda;
			this.cuidadorLocalTrabalho = objeto.cuidadorLocalTrabalho;
			this.cuidadorOutro = objeto.cuidadorOutro;
			this.cuidadorProfissao = objeto.cuidadorProfissao;
			this.cuidadorTrabalha = objeto.cuidadorTrabalha;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			this.defAuditiva = objeto.defAuditiva;
			this.defFisica = objeto.defFisica;
			this.defIntelectual = objeto.defIntelectual;
			this.defMultipla = objeto.defMultipla;
			this.defVisual = objeto.defVisual;
			this.descOutraEspecialidade = objeto.descOutraEspecialidade;
			this.descOutroServico = objeto.descOutroServico;
			this.descricaoDoenca = objeto.descricaoDoenca;
			this.diaVisita = objeto.diaVisita;
			this.diabetes = objeto.diabetes;
			this.diganosticado = objeto.diganosticado;
			this.doencaFalciforme = objeto.doencaFalciforme;
			this.dst = objeto.dst;
			this.endocrinologista = objeto.endocrinologista;
			this.equoterapia = objeto.equoterapia;
			this.fisioterapia = objeto.fisioterapia;
			this.fonoaudiologia = objeto.fonoaudiologia;
			this.fundacao = objeto.fundacao;
			this.gastro = objeto.gastro;
			this.hipertensao = objeto.hipertensao;
			this.hiv = objeto.hiv;
			this.horaVisita = objeto.horaVisita;
			this.idadeGestacional = objeto.idadeGestacional;
			this.infecto = objeto.infecto;
			this.intoGluten = objeto.intoGluten;
			this.intoLactose = objeto.intoLactose;
			this.intoProteina = objeto.intoProteina;
			this.labioPalatina = objeto.labioPalatina;
			this.mesesGestacional = objeto.mesesGestacional;
			this.musicoterapia = objeto.musicoterapia;
			this.nasf = objeto.nasf;
			this.neuropediatria = objeto.neuropediatria;
			this.nomeCuidador = objeto.nomeCuidador;
			this.observacoes = objeto.observacoes;
			this.odonto = objeto.odonto;
			this.oftalmologia = objeto.oftalmologia;
			this.outraDoenca = objeto.outraDoenca;
			this.outraEspecialidae = objeto.outraEspecialidae;
			this.outroServico = objeto.outroServico;
			this.pediatria = objeto.pediatria;
			this.pneumologia = objeto.pneumologia;
			this.psicologia = objeto.psicologia;
			this.psicopedagogia = objeto.psicopedagogia;
			this.refluxo = objeto.refluxo;
			this.registroAlturaCsc = objeto.registroAlturaCsc;
			this.registroPesoCsc = objeto.registroPesoCsc;
			this.respiradorBucal = objeto.respiradorBucal;
			this.rnc = objeto.rnc;
			this.rncAmbosPais = objeto.rncAmbosPais;
			this.saedst = objeto.saedst;
			this.semanasGestacional = objeto.semanasGestacional;
			this.sifilis = objeto.sifilis;
			this.sus = objeto.sus;
			this.tda = objeto.tda;
			this.tempoAmamentacao = objeto.tempoAmamentacao;
			this.terapiaOcupacional = objeto.terapiaOcupacional;
			this.testeCoracaozinho = objeto.testeCoracaozinho;
			this.testeOlhinho = objeto.testeOlhinho;
			this.testeOrelhinha = objeto.testeOrelhinha;
			this.testePezinho = objeto.testePezinho;
			this.tipoParto = objeto.tipoParto;
			this.ubs = objeto.ubs;
			this.vacinas = objeto.vacinas;
			this.semAcompanhamento = objeto.semAcompanhamento;

			if (objeto.cuidadorEscola != null)
				this.cuidadorEscola = new Escola(objeto.cuidadorEscola);

		}
		else {

			this.cuidadorEscola = new Escola(null);

		}

		this.amamentadaFormatadoLista.push(new formatadoLista(1, "Sim, exclusivamente (a criança recebe só leite materno, sem água, chá, suco, outro leite ou alimento)"));
		this.amamentadaFormatadoLista.push(new formatadoLista(2, "Sim, predominantemente (a criança recebe leite materno e água, chá ou suco, mas não recebe outros leites)"));
		this.amamentadaFormatadoLista.push(new formatadoLista(3, "Sim, complementarmente (a criança recebe leite materno mas também recebe outros alimentos)"));
		this.amamentadaFormatadoLista.push(new formatadoLista(4, "Não está sendo amamentada (pule para a pergunta 24)"));
		this.cscFormatadoLista.push(new formatadoLista(1, "Sim – CSC"));
		this.cscFormatadoLista.push(new formatadoLista(2, "Sim – Outro documento"));
		this.cscFormatadoLista.push(new formatadoLista(3, "Só o cartão de vacinas"));
		this.cscFormatadoLista.push(new formatadoLista(4, "Não"));
		this.cuidadorFormatadoLista.push(new formatadoLista(1, "Mãe"));
		this.cuidadorFormatadoLista.push(new formatadoLista(2, "Pai"));
		this.cuidadorFormatadoLista.push(new formatadoLista(3, "Padrasto"));
		this.cuidadorFormatadoLista.push(new formatadoLista(4, "Madrasta"));
		this.cuidadorFormatadoLista.push(new formatadoLista(5, "Irmão/irmã"));
		this.cuidadorFormatadoLista.push(new formatadoLista(6, "Avó/avô"));
		this.cuidadorFormatadoLista.push(new formatadoLista(7, "Tio/tia"));
		this.cuidadorFormatadoLista.push(new formatadoLista(8, "Primo/prima"));
		this.cuidadorFormatadoLista.push(new formatadoLista(9, "Babá"));
		this.cuidadorFormatadoLista.push(new formatadoLista(10, "Vizinho(a)"));
		this.cuidadorFormatadoLista.push(new formatadoLista(11, "Outro"));
		this.cuidadorEscolaridadeFormatadoLista.push(new formatadoLista(1, "Não compreende o que lê (analfabetismo funcional)"));
		this.cuidadorEscolaridadeFormatadoLista.push(new formatadoLista(2, "Analfabeto"));
		this.cuidadorEscolaridadeFormatadoLista.push(new formatadoLista(3, "Ensino Fundamental (I e II) incompleto ou completo (1° ao 9° ano)"));
		this.cuidadorEscolaridadeFormatadoLista.push(new formatadoLista(4, "Ensino Médio incompleto ou completo"));
		this.cuidadorEscolaridadeFormatadoLista.push(new formatadoLista(5, "Ensino superior incompleto ou completo"));
		this.cuidadorEstudaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.cuidadorEstudaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.cuidadorTrabalhaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.cuidadorTrabalhaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(1, "Segunda-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(2, "Terça-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(3, "Quarta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(4, "Quinta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(5, "Sexta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(6, "Sábado"));
		this.diganosticadoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.diganosticadoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.idadeGestacionalFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.idadeGestacionalFormatadoLista.push(new formatadoLista(2, "Não"));
		this.registroAlturaCscFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.registroAlturaCscFormatadoLista.push(new formatadoLista(2, "Não"));
		this.registroAlturaCscFormatadoLista.push(new formatadoLista(3, "Não tem informação sobre a altura"));
		this.registroPesoCscFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.registroPesoCscFormatadoLista.push(new formatadoLista(2, "Não"));
		this.registroPesoCscFormatadoLista.push(new formatadoLista(3, "Não tem informação sobre o peso"));
		this.rncFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.rncFormatadoLista.push(new formatadoLista(2, "Não"));
		this.rncAmbosPaisFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.rncAmbosPaisFormatadoLista.push(new formatadoLista(2, "Não"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(1, "01 mês"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(2, "02 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(3, "03 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(4, "04 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(5, "05 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(6, "06 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(7, "Mais de 06 meses"));
		this.tempoAmamentacaoFormatadoLista.push(new formatadoLista(8, "Nunca mamou"));
		this.testeCoracaozinhoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.testeCoracaozinhoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.testeCoracaozinhoFormatadoLista.push(new formatadoLista(3, "Agendado"));
		this.testeOlhinhoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.testeOlhinhoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.testeOlhinhoFormatadoLista.push(new formatadoLista(3, "Agendado"));
		this.testeOrelhinhaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.testeOrelhinhaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.testeOrelhinhaFormatadoLista.push(new formatadoLista(3, "Agendado"));
		this.testePezinhoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.testePezinhoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.testePezinhoFormatadoLista.push(new formatadoLista(3, "Agendado"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(1, "Normal"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(2, "Fórceps"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(3, "Cesárea"));
		this.vacinasFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.vacinasFormatadoLista.push(new formatadoLista(2, "Não"));
		this.vacinasFormatadoLista.push(new formatadoLista(3, "Não tem registro"));

	}

}


export class PcfRelacionamentosCrianca extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public anoEscola: number;
	get anoEscolaFormatado(): String {
		return Mentor.moedaToString(this.anoEscola)
	}
	set anoEscolaFormatado(valor: String) {
		this.anoEscola = Mentor.stringToMoeda(valor);
	}

	public brincarRelacionamento: number;
	public brincarRelacionamentoFormatadoLista: formatadoLista[] = new Array();


	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dificuldadeDescricao: String;

	public dificuldadeRelacionamento: number;
	public dificuldadeRelacionamentoFormatadoLista: formatadoLista[] = new Array();


	public horasSono: number;
	public horasSonoFormatadoLista: formatadoLista[] = new Array();


	public jogosEletronicos: number;
	public jogosEletronicosFormatadoLista: formatadoLista[] = new Array();


	public localBrincadeiraCasa: number;
	get localBrincadeiraCasaFormatado(): String {
		return Mentor.moedaToString(this.localBrincadeiraCasa)
	}
	set localBrincadeiraCasaFormatado(valor: String) {
		this.localBrincadeiraCasa = Mentor.stringToMoeda(valor);
	}

	public localBrincadeiraDesc: String;

	public localBrincadeiraOutro: number;
	get localBrincadeiraOutroFormatado(): String {
		return Mentor.moedaToString(this.localBrincadeiraOutro)
	}
	set localBrincadeiraOutroFormatado(valor: String) {
		this.localBrincadeiraOutro = Mentor.stringToMoeda(valor);
	}

	public localBrincadeiraPraca: number;
	get localBrincadeiraPracaFormatado(): String {
		return Mentor.moedaToString(this.localBrincadeiraPraca)
	}
	set localBrincadeiraPracaFormatado(valor: String) {
		this.localBrincadeiraPraca = Mentor.stringToMoeda(valor);
	}

	public localBrincadeiraRua: number;
	get localBrincadeiraRuaFormatado(): String {
		return Mentor.moedaToString(this.localBrincadeiraRua)
	}
	set localBrincadeiraRuaFormatado(valor: String) {
		this.localBrincadeiraRua = Mentor.stringToMoeda(valor);
	}

	public localBrincadeiraVizinho: number;
	get localBrincadeiraVizinhoFormatado(): String {
		return Mentor.moedaToString(this.localBrincadeiraVizinho)
	}
	set localBrincadeiraVizinhoFormatado(valor: String) {
		this.localBrincadeiraVizinho = Mentor.stringToMoeda(valor);
	}

	public matriculadoEscola: number;
	public matriculadoEscolaFormatadoLista: formatadoLista[] = new Array();


	public televisaoRotina: number;
	public televisaoRotinaFormatadoLista: formatadoLista[] = new Array();


	public tempoAssistindo: number;
	public tempoAssistindoFormatadoLista: formatadoLista[] = new Array();


	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.anoEscola = objeto.anoEscola;
			this.brincarRelacionamento = objeto.brincarRelacionamento;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			this.dificuldadeDescricao = objeto.dificuldadeDescricao;
			this.dificuldadeRelacionamento = objeto.dificuldadeRelacionamento;
			this.horasSono = objeto.horasSono;
			this.jogosEletronicos = objeto.jogosEletronicos;
			this.localBrincadeiraCasa = objeto.localBrincadeiraCasa;
			this.localBrincadeiraDesc = objeto.localBrincadeiraDesc;
			this.localBrincadeiraOutro = objeto.localBrincadeiraOutro;
			this.localBrincadeiraPraca = objeto.localBrincadeiraPraca;
			this.localBrincadeiraRua = objeto.localBrincadeiraRua;
			this.localBrincadeiraVizinho = objeto.localBrincadeiraVizinho;
			this.matriculadoEscola = objeto.matriculadoEscola;
			this.televisaoRotina = objeto.televisaoRotina;
			this.tempoAssistindo = objeto.tempoAssistindo;

		}
		else {


		}

		this.brincarRelacionamentoFormatadoLista.push(new formatadoLista(1, "Com adulto"));
		this.brincarRelacionamentoFormatadoLista.push(new formatadoLista(2, "Com criança"));
		this.brincarRelacionamentoFormatadoLista.push(new formatadoLista(3, "Sozinha"));
		this.dificuldadeRelacionamentoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.dificuldadeRelacionamentoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.horasSonoFormatadoLista.push(new formatadoLista(1, "Até 10 horas diárias"));
		this.horasSonoFormatadoLista.push(new formatadoLista(2, "Entre 10 e 11 horas diárias"));
		this.horasSonoFormatadoLista.push(new formatadoLista(3, "Entre 12 e 15 horas diárias"));
		this.horasSonoFormatadoLista.push(new formatadoLista(4, "Entre 15 e 16 horas diárias"));
		this.jogosEletronicosFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.jogosEletronicosFormatadoLista.push(new formatadoLista(2, "Não"));
		this.matriculadoEscolaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.matriculadoEscolaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.televisaoRotinaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.televisaoRotinaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.tempoAssistindoFormatadoLista.push(new formatadoLista(1, "Até 02 horas diárias"));
		this.tempoAssistindoFormatadoLista.push(new formatadoLista(2, "Entre 2 e 4 horas diárias"));
		this.tempoAssistindoFormatadoLista.push(new formatadoLista(3, "Mais e 4 horas diária"));

	}

}


export class PcfDiagnostico03 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public agarraObjetos: PcfRespostaIndicadores;
	public cabecaFirme: PcfRespostaIndicadores;
	public emiteSons: PcfRespostaIndicadores;
	public fixaOlhar: PcfRespostaIndicadores;
	public levanaCabeca: PcfRespostaIndicadores;
	public prazerDesconforto: PcfRespostaIndicadores;
	public reconheceReage: PcfRespostaIndicadores;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public segueOlhar: PcfRespostaIndicadores;
	public sorrirRosto: PcfRespostaIndicadores;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			this.observacoes = objeto.observacoes;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.tipo = objeto.tipo;

			if (objeto.agarraObjetos != null)
				this.agarraObjetos = new PcfRespostaIndicadores(objeto.agarraObjetos);

			if (objeto.cabecaFirme != null)
				this.cabecaFirme = new PcfRespostaIndicadores(objeto.cabecaFirme);

			if (objeto.emiteSons != null)
				this.emiteSons = new PcfRespostaIndicadores(objeto.emiteSons);

			if (objeto.fixaOlhar != null)
				this.fixaOlhar = new PcfRespostaIndicadores(objeto.fixaOlhar);

			if (objeto.levanaCabeca != null)
				this.levanaCabeca = new PcfRespostaIndicadores(objeto.levanaCabeca);

			if (objeto.prazerDesconforto != null)
				this.prazerDesconforto = new PcfRespostaIndicadores(objeto.prazerDesconforto);

			if (objeto.reconheceReage != null)
				this.reconheceReage = new PcfRespostaIndicadores(objeto.reconheceReage);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.segueOlhar != null)
				this.segueOlhar = new PcfRespostaIndicadores(objeto.segueOlhar);

			if (objeto.sorrirRosto != null)
				this.sorrirRosto = new PcfRespostaIndicadores(objeto.sorrirRosto);

		}
		else {

			this.agarraObjetos = new PcfRespostaIndicadores(null);
			this.cabecaFirme = new PcfRespostaIndicadores(null);
			this.emiteSons = new PcfRespostaIndicadores(null);
			this.fixaOlhar = new PcfRespostaIndicadores(null);
			this.levanaCabeca = new PcfRespostaIndicadores(null);
			this.prazerDesconforto = new PcfRespostaIndicadores(null);
			this.reconheceReage = new PcfRespostaIndicadores(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.segueOlhar = new PcfRespostaIndicadores(null);
			this.sorrirRosto = new PcfRespostaIndicadores(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfDiagnostico23 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public avisaNecessidade: PcfRespostaIndicadores;
	public compreendeEscuta: PcfRespostaIndicadores;
	public constroiTorre: PcfRespostaIndicadores;
	public correSeguranca: PcfRespostaIndicadores;
	public despededidaSair: PcfRespostaIndicadores;
	public fazRabisco: PcfRespostaIndicadores;
	public frasesPalavras: PcfRespostaIndicadores;
	public imitaAdultos: PcfRespostaIndicadores;
	public pulaPeJunto: PcfRespostaIndicadores;
	public relacionarPessoas: PcfRespostaIndicadores;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public selecionaObjeto: PcfRespostaIndicadores;
	public sustentaCopo: PcfRespostaIndicadores;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.avisaNecessidade != null)
				this.avisaNecessidade = new PcfRespostaIndicadores(objeto.avisaNecessidade);

			if (objeto.compreendeEscuta != null)
				this.compreendeEscuta = new PcfRespostaIndicadores(objeto.compreendeEscuta);

			if (objeto.constroiTorre != null)
				this.constroiTorre = new PcfRespostaIndicadores(objeto.constroiTorre);

			if (objeto.correSeguranca != null)
				this.correSeguranca = new PcfRespostaIndicadores(objeto.correSeguranca);

			if (objeto.despededidaSair != null)
				this.despededidaSair = new PcfRespostaIndicadores(objeto.despededidaSair);

			if (objeto.fazRabisco != null)
				this.fazRabisco = new PcfRespostaIndicadores(objeto.fazRabisco);

			if (objeto.frasesPalavras != null)
				this.frasesPalavras = new PcfRespostaIndicadores(objeto.frasesPalavras);

			if (objeto.imitaAdultos != null)
				this.imitaAdultos = new PcfRespostaIndicadores(objeto.imitaAdultos);

			if (objeto.pulaPeJunto != null)
				this.pulaPeJunto = new PcfRespostaIndicadores(objeto.pulaPeJunto);

			if (objeto.relacionarPessoas != null)
				this.relacionarPessoas = new PcfRespostaIndicadores(objeto.relacionarPessoas);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.selecionaObjeto != null)
				this.selecionaObjeto = new PcfRespostaIndicadores(objeto.selecionaObjeto);

			if (objeto.sustentaCopo != null)
				this.sustentaCopo = new PcfRespostaIndicadores(objeto.sustentaCopo);

		}
		else {

			this.avisaNecessidade = new PcfRespostaIndicadores(null);
			this.compreendeEscuta = new PcfRespostaIndicadores(null);
			this.constroiTorre = new PcfRespostaIndicadores(null);
			this.correSeguranca = new PcfRespostaIndicadores(null);
			this.despededidaSair = new PcfRespostaIndicadores(null);
			this.fazRabisco = new PcfRespostaIndicadores(null);
			this.frasesPalavras = new PcfRespostaIndicadores(null);
			this.imitaAdultos = new PcfRespostaIndicadores(null);
			this.pulaPeJunto = new PcfRespostaIndicadores(null);
			this.relacionarPessoas = new PcfRespostaIndicadores(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.selecionaObjeto = new PcfRespostaIndicadores(null);
			this.sustentaCopo = new PcfRespostaIndicadores(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfDiagnostico1218 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public caminha: PcfRespostaIndicadores;
	public chutaBola: PcfRespostaIndicadores;
	public combinaPalavras: PcfRespostaIndicadores;
	public montaTorre: PcfRespostaIndicadores;
	public tampaDestampa: PcfRespostaIndicadores;
	public seguraCopo: PcfRespostaIndicadores;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.caminha != null)
				this.caminha = new PcfRespostaIndicadores(objeto.caminha);

			if (objeto.chutaBola != null)
				this.chutaBola = new PcfRespostaIndicadores(objeto.chutaBola);

			if (objeto.combinaPalavras != null)
				this.combinaPalavras = new PcfRespostaIndicadores(objeto.combinaPalavras);

			if (objeto.montaTorre != null)
				this.montaTorre = new PcfRespostaIndicadores(objeto.montaTorre);

			if (objeto.tampaDestampa != null)
				this.tampaDestampa = new PcfRespostaIndicadores(objeto.tampaDestampa);

			if (objeto.seguraCopo != null)
				this.seguraCopo = new PcfRespostaIndicadores(objeto.seguraCopo);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

		}
		else {

			this.caminha = new PcfRespostaIndicadores(null);
			this.chutaBola = new PcfRespostaIndicadores(null);
			this.combinaPalavras = new PcfRespostaIndicadores(null);
			this.montaTorre = new PcfRespostaIndicadores(null);
			this.tampaDestampa = new PcfRespostaIndicadores(null);
			this.seguraCopo = new PcfRespostaIndicadores(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfDiagnostico36 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public agarraBrinquedo: PcfRespostaIndicadores;
	public balbicaSorri: PcfRespostaIndicadores;
	public mudaPosicao: PcfRespostaIndicadores;
	public procuraOlhos: PcfRespostaIndicadores;
	public reconhecePessoas: PcfRespostaIndicadores;
	public reconheceVoz: PcfRespostaIndicadores;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public variaVolumeVoz: PcfRespostaIndicadores;
	public sentaSemApoio: PcfRespostaIndicadores;
	public seguraObjetos: PcfRespostaIndicadores;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.agarraBrinquedo != null)
				this.agarraBrinquedo = new PcfRespostaIndicadores(objeto.agarraBrinquedo);

			if (objeto.balbicaSorri != null)
				this.balbicaSorri = new PcfRespostaIndicadores(objeto.balbicaSorri);

			if (objeto.mudaPosicao != null)
				this.mudaPosicao = new PcfRespostaIndicadores(objeto.mudaPosicao);

			if (objeto.procuraOlhos != null)
				this.procuraOlhos = new PcfRespostaIndicadores(objeto.procuraOlhos);

			if (objeto.reconhecePessoas != null)
				this.reconhecePessoas = new PcfRespostaIndicadores(objeto.reconhecePessoas);

			if (objeto.reconheceVoz != null)
				this.reconheceVoz = new PcfRespostaIndicadores(objeto.reconheceVoz);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.variaVolumeVoz != null)
				this.variaVolumeVoz = new PcfRespostaIndicadores(objeto.variaVolumeVoz);

			if (objeto.sentaSemApoio != null)
				this.sentaSemApoio = new PcfRespostaIndicadores(objeto.sentaSemApoio);

			if (objeto.seguraObjetos != null)
				this.seguraObjetos = new PcfRespostaIndicadores(objeto.seguraObjetos);

		}
		else {

			this.agarraBrinquedo = new PcfRespostaIndicadores(null);
			this.balbicaSorri = new PcfRespostaIndicadores(null);
			this.mudaPosicao = new PcfRespostaIndicadores(null);
			this.procuraOlhos = new PcfRespostaIndicadores(null);
			this.reconhecePessoas = new PcfRespostaIndicadores(null);
			this.reconheceVoz = new PcfRespostaIndicadores(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.variaVolumeVoz = new PcfRespostaIndicadores(null);
			this.sentaSemApoio = new PcfRespostaIndicadores(null);
			this.seguraObjetos = new PcfRespostaIndicadores(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class Funcionarios extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public logi: String;

	public nome: String;

	public senha: String;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.logi = objeto.logi;
			this.nome = objeto.nome;
			this.senha = objeto.senha;

		}
		else {


		}


	}

}


export class PcfRespostaIndicadores extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public descricao: String;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.descricao = objeto.descricao;

		}
		else {


		}


	}

}


export class PcfDiagnostico1824 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public cumpreOrdens: PcfRespostaIndicadores;
	public falaPalavras: PcfRespostaIndicadores;
	public montaTorre: PcfRespostaIndicadores;
	public nomeiaObjetos: PcfRespostaIndicadores;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public seguraBrinquedo: PcfRespostaIndicadores;
	public utilizaPronomes: PcfRespostaIndicadores;
	public tampaDestampa: PcfRespostaIndicadores;
	public sobreDegrau: PcfRespostaIndicadores;
	public seguraTalher: PcfRespostaIndicadores;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.cumpreOrdens != null)
				this.cumpreOrdens = new PcfRespostaIndicadores(objeto.cumpreOrdens);

			if (objeto.falaPalavras != null)
				this.falaPalavras = new PcfRespostaIndicadores(objeto.falaPalavras);

			if (objeto.montaTorre != null)
				this.montaTorre = new PcfRespostaIndicadores(objeto.montaTorre);

			if (objeto.nomeiaObjetos != null)
				this.nomeiaObjetos = new PcfRespostaIndicadores(objeto.nomeiaObjetos);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.seguraBrinquedo != null)
				this.seguraBrinquedo = new PcfRespostaIndicadores(objeto.seguraBrinquedo);

			if (objeto.utilizaPronomes != null)
				this.utilizaPronomes = new PcfRespostaIndicadores(objeto.utilizaPronomes);

			if (objeto.tampaDestampa != null)
				this.tampaDestampa = new PcfRespostaIndicadores(objeto.tampaDestampa);

			if (objeto.sobreDegrau != null)
				this.sobreDegrau = new PcfRespostaIndicadores(objeto.sobreDegrau);

			if (objeto.seguraTalher != null)
				this.seguraTalher = new PcfRespostaIndicadores(objeto.seguraTalher);

		}
		else {

			this.cumpreOrdens = new PcfRespostaIndicadores(null);
			this.falaPalavras = new PcfRespostaIndicadores(null);
			this.montaTorre = new PcfRespostaIndicadores(null);
			this.nomeiaObjetos = new PcfRespostaIndicadores(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.seguraBrinquedo = new PcfRespostaIndicadores(null);
			this.utilizaPronomes = new PcfRespostaIndicadores(null);
			this.tampaDestampa = new PcfRespostaIndicadores(null);
			this.sobreDegrau = new PcfRespostaIndicadores(null);
			this.seguraTalher = new PcfRespostaIndicadores(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfDiagnostico69 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public agarraObjetos: PcfRespostaIndicadores;
	public buscaObjetos: PcfRespostaIndicadores;
	public emiteSons: PcfRespostaIndicadores;
	public engatinha: PcfRespostaIndicadores;
	public mantemEquilibrio: PcfRespostaIndicadores;
	public transfereObjetos: PcfRespostaIndicadores;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public prestaAtencao: PcfRespostaIndicadores;
	public objetosDiferentes: PcfRespostaIndicadores;
	public objetosAtencao: PcfRespostaIndicadores;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.agarraObjetos != null)
				this.agarraObjetos = new PcfRespostaIndicadores(objeto.agarraObjetos);

			if (objeto.buscaObjetos != null)
				this.buscaObjetos = new PcfRespostaIndicadores(objeto.buscaObjetos);

			if (objeto.emiteSons != null)
				this.emiteSons = new PcfRespostaIndicadores(objeto.emiteSons);

			if (objeto.engatinha != null)
				this.engatinha = new PcfRespostaIndicadores(objeto.engatinha);

			if (objeto.mantemEquilibrio != null)
				this.mantemEquilibrio = new PcfRespostaIndicadores(objeto.mantemEquilibrio);

			if (objeto.transfereObjetos != null)
				this.transfereObjetos = new PcfRespostaIndicadores(objeto.transfereObjetos);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.prestaAtencao != null)
				this.prestaAtencao = new PcfRespostaIndicadores(objeto.prestaAtencao);

			if (objeto.objetosDiferentes != null)
				this.objetosDiferentes = new PcfRespostaIndicadores(objeto.objetosDiferentes);

			if (objeto.objetosAtencao != null)
				this.objetosAtencao = new PcfRespostaIndicadores(objeto.objetosAtencao);

		}
		else {

			this.agarraObjetos = new PcfRespostaIndicadores(null);
			this.buscaObjetos = new PcfRespostaIndicadores(null);
			this.emiteSons = new PcfRespostaIndicadores(null);
			this.engatinha = new PcfRespostaIndicadores(null);
			this.mantemEquilibrio = new PcfRespostaIndicadores(null);
			this.transfereObjetos = new PcfRespostaIndicadores(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.prestaAtencao = new PcfRespostaIndicadores(null);
			this.objetosDiferentes = new PcfRespostaIndicadores(null);
			this.objetosAtencao = new PcfRespostaIndicadores(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfAvaliacao03 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public avaliacao: PcfDiagnostico03;
	public supervisor: Funcionarios;
	public visitador: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico03(objeto.avaliacao);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

		}
		else {

			this.avaliacao = new PcfDiagnostico03(null);
			this.supervisor = new Funcionarios(null);
			this.visitador = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);

		}


	}

}


export class PcfAvaliacao1218 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public avaliacao: PcfDiagnostico1218;
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico1218(objeto.avaliacao);

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

		}
		else {

			this.avaliacao = new PcfDiagnostico1218(null);
			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);

		}


	}

}


export class PcfAvaliacao1824 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public avaliacao: PcfDiagnostico1824;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico1824(objeto.avaliacao);

		}
		else {

			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.avaliacao = new PcfDiagnostico1824(null);

		}


	}

}


export class PcfAvaliacao912 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public avaliacao: PcfDiagnostico912;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico912(objeto.avaliacao);

		}
		else {

			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.avaliacao = new PcfDiagnostico912(null);

		}


	}

}


export class PcfDiagnostico912 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataDiagnostico: Date;
	get dataDiagnosticoFormatado(): String {
		return Mentor.dateToString(this.dataDiagnostico)
	}
	set dataDiagnosticoFormatado(valor: String) {
		this.dataDiagnostico = Mentor.stringToDate(valor);
	}

	public observacoes: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public cumpreOrdens: PcfRespostaIndicadores;
	public empregaPalavras: PcfRespostaIndicadores;
	public fazCoisasSimples: PcfRespostaIndicadores;
	public fazGestos: PcfRespostaIndicadores;
	public manueiaBrinquedos: PcfRespostaIndicadores;
	public pequenosPassos: PcfRespostaIndicadores;
	public tampaDestampa: PcfRespostaIndicadores;
	public responsavelAlteracao: Funcionarios;
	public responsavelCadastro: Funcionarios;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataDiagnosticoFormatado != null)
				this.dataDiagnostico = Mentor.stringToDate(objeto.dataDiagnosticoFormatado);
			else
				this.dataDiagnostico = objeto.dataDiagnostico;
			this.observacoes = objeto.observacoes;
			this.tipo = objeto.tipo;

			if (objeto.cumpreOrdens != null)
				this.cumpreOrdens = new PcfRespostaIndicadores(objeto.cumpreOrdens);

			if (objeto.empregaPalavras != null)
				this.empregaPalavras = new PcfRespostaIndicadores(objeto.empregaPalavras);

			if (objeto.fazCoisasSimples != null)
				this.fazCoisasSimples = new PcfRespostaIndicadores(objeto.fazCoisasSimples);

			if (objeto.fazGestos != null)
				this.fazGestos = new PcfRespostaIndicadores(objeto.fazGestos);

			if (objeto.manueiaBrinquedos != null)
				this.manueiaBrinquedos = new PcfRespostaIndicadores(objeto.manueiaBrinquedos);

			if (objeto.pequenosPassos != null)
				this.pequenosPassos = new PcfRespostaIndicadores(objeto.pequenosPassos);

			if (objeto.tampaDestampa != null)
				this.tampaDestampa = new PcfRespostaIndicadores(objeto.tampaDestampa);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

		}
		else {

			this.cumpreOrdens = new PcfRespostaIndicadores(null);
			this.empregaPalavras = new PcfRespostaIndicadores(null);
			this.fazCoisasSimples = new PcfRespostaIndicadores(null);
			this.fazGestos = new PcfRespostaIndicadores(null);
			this.manueiaBrinquedos = new PcfRespostaIndicadores(null);
			this.pequenosPassos = new PcfRespostaIndicadores(null);
			this.tampaDestampa = new PcfRespostaIndicadores(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);

		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "D"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "A"));

	}

}


export class PcfAvaliacao69 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public avaliacao: PcfDiagnostico69;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico69(objeto.avaliacao);

		}
		else {

			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.avaliacao = new PcfDiagnostico69(null);

		}


	}

}


export class PcfAvaliacao36 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public avaliacao: PcfDiagnostico36;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico36(objeto.avaliacao);

		}
		else {

			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.avaliacao = new PcfDiagnostico36(null);

		}


	}

}


export class PcfAvaliacao23 extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataAvaliacao: Date;
	get dataAvaliacaoFormatado(): String {
		return Mentor.dateToString(this.dataAvaliacao)
	}
	set dataAvaliacaoFormatado(valor: String) {
		this.dataAvaliacao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}
	public visitador: Funcionarios;
	public supervisor: Funcionarios;
	public responsavelCadastro: Funcionarios;
	public responsavelAlteracao: Funcionarios;
	public avaliacao: PcfDiagnostico23;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataAvaliacaoFormatado != null)
				this.dataAvaliacao = Mentor.stringToDate(objeto.dataAvaliacaoFormatado);
			else
				this.dataAvaliacao = objeto.dataAvaliacao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;

			if (objeto.visitador != null)
				this.visitador = new Funcionarios(objeto.visitador);

			if (objeto.supervisor != null)
				this.supervisor = new Funcionarios(objeto.supervisor);

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.avaliacao != null)
				this.avaliacao = new PcfDiagnostico23(objeto.avaliacao);

		}
		else {

			this.visitador = new Funcionarios(null);
			this.supervisor = new Funcionarios(null);
			this.responsavelCadastro = new Funcionarios(null);
			this.responsavelAlteracao = new Funcionarios(null);
			this.avaliacao = new PcfDiagnostico23(null);

		}


	}

}


export class AssociadoCras extends ionicClasseBase {


	public associado: any;

	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataNascimento: Date;
	get dataNascimentoFormatado(): String {
		return Mentor.dateToString(this.dataNascimento)
	}
	set dataNascimentoFormatado(valor: String) {
		this.dataNascimento = Mentor.stringToDate(valor);
	}

	public telefoneCelular: String;

	public nome: String;

	public nomeMae: String;
	public domicilioCras: DomicilioCras;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.associado = objeto.associado;

			this.codigo = objeto.codigo;
			if (objeto.dataNascimentoFormatado != null)
				this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado);
			else
				this.dataNascimento = objeto.dataNascimento;
			this.telefoneCelular = objeto.telefoneCelular;
			this.nome = objeto.nome;
			this.nomeMae = objeto.nomeMae;

			if (objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

		}
		else {

			this.domicilioCras = new DomicilioCras(null);

		}


	}

}


export class DomicilioCras extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public bairro: String;

	public celular: String;

	public cep: String;

	public endereco: String;

	public numero: String;

	public tipo_logradouro: String;
	public associadosCras: AssociadoCras[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.bairro = objeto.bairro;
			this.celular = objeto.celular;
			this.cep = objeto.cep;
			this.endereco = objeto.endereco;
			this.numero = objeto.numero;
			this.tipo_logradouro = objeto.tipo_logradouro;

			if (objeto.associadosCras != null) {
				this.associadosCras = new Array();
				for (let x: number = 0; x < objeto.associadosCras.length; x++)
					this.associadosCras.push(new AssociadoCras(objeto.associadosCras[x]))
			}

		}
		else {


		}


	}

}


export class Escola extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public nome: String;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.nome = objeto.nome;

		}
		else {


		}


	}

}


export class PcfConvivenciaFamiliar extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public afeto: number;
	public afetoFormatadoLista: formatadoLista[] = new Array();


	public avos: number;
	get avosFormatado(): String {
		return Mentor.moedaToString(this.avos)
	}
	set avosFormatado(valor: String) {
		this.avos = Mentor.stringToMoeda(valor);
	}

	public baba: number;
	get babaFormatado(): String {
		return Mentor.moedaToString(this.baba)
	}
	set babaFormatado(valor: String) {
		this.baba = Mentor.stringToMoeda(valor);
	}

	public comportamento: number;
	public comportamentoFormatadoLista: formatadoLista[] = new Array();


	public contaHistorias: number;
	public contaHistoriasFormatadoLista: formatadoLista[] = new Array();


	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public descAfeto: String;

	public descComportamento: String;

	public descInativar: String;

	public descOutros: String;

	public ensinaCancoes: number;
	public ensinaCancoesFormatadoLista: formatadoLista[] = new Array();


	public familiaConversa: number;
	public familiaConversaFormatadoLista: formatadoLista[] = new Array();


	public inativarPcf: number;
	public inativarPcfFormatadoLista: formatadoLista[] = new Array();


	public irmaos: number;
	get irmaosFormatado(): String {
		return Mentor.moedaToString(this.irmaos)
	}
	set irmaosFormatado(valor: String) {
		this.irmaos = Mentor.stringToMoeda(valor);
	}

	public livrosInfantis: number;
	public livrosInfantisFormatadoLista: formatadoLista[] = new Array();


	public madastra: number;
	get madastraFormatado(): String {
		return Mentor.moedaToString(this.madastra)
	}
	set madastraFormatado(valor: String) {
		this.madastra = Mentor.stringToMoeda(valor);
	}

	public mae: number;
	get maeFormatado(): String {
		return Mentor.moedaToString(this.mae)
	}
	set maeFormatado(valor: String) {
		this.mae = Mentor.stringToMoeda(valor);
	}

	public mostraLivros: number;
	public mostraLivrosFormatadoLista: formatadoLista[] = new Array();


	public obsercacoes: String;

	public outros: number;
	get outrosFormatado(): String {
		return Mentor.moedaToString(this.outros)
	}
	set outrosFormatado(valor: String) {
		this.outros = Mentor.stringToMoeda(valor);
	}

	public padastro: number;
	get padastroFormatado(): String {
		return Mentor.moedaToString(this.padastro)
	}
	set padastroFormatado(valor: String) {
		this.padastro = Mentor.stringToMoeda(valor);
	}

	public pai: number;
	get paiFormatado(): String {
		return Mentor.moedaToString(this.pai)
	}
	set paiFormatado(valor: String) {
		this.pai = Mentor.stringToMoeda(valor);
	}

	public passeios: number;
	public passeiosFormatadoLista: formatadoLista[] = new Array();


	public primos: number;
	get primosFormatado(): String {
		return Mentor.moedaToString(this.primos)
	}
	set primosFormatado(valor: String) {
		this.primos = Mentor.stringToMoeda(valor);
	}

	public tempoDedicado: number;
	public tempoDedicadoFormatadoLista: formatadoLista[] = new Array();


	public tios: number;
	get tiosFormatado(): String {
		return Mentor.moedaToString(this.tios)
	}
	set tiosFormatado(valor: String) {
		this.tios = Mentor.stringToMoeda(valor);
	}

	public vizinhos: number;
	get vizinhosFormatado(): String {
		return Mentor.moedaToString(this.vizinhos)
	}
	set vizinhosFormatado(valor: String) {
		this.vizinhos = Mentor.stringToMoeda(valor);
	}

	public tempoBrincadeira: number;
	get tempoBrincadeiraFormatado(): String {
		return Mentor.moedaToString(this.tempoBrincadeira)
	}
	set tempoBrincadeiraFormatado(valor: String) {
		this.tempoBrincadeira = Mentor.stringToMoeda(valor);
	}

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.afeto = objeto.afeto;
			this.avos = objeto.avos;
			this.baba = objeto.baba;
			this.comportamento = objeto.comportamento;
			this.contaHistorias = objeto.contaHistorias;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			this.descAfeto = objeto.descAfeto;
			this.descComportamento = objeto.descComportamento;
			this.descInativar = objeto.descInativar;
			this.descOutros = objeto.descOutros;
			this.ensinaCancoes = objeto.ensinaCancoes;
			this.familiaConversa = objeto.familiaConversa;
			this.inativarPcf = objeto.inativarPcf;
			this.irmaos = objeto.irmaos;
			this.livrosInfantis = objeto.livrosInfantis;
			this.madastra = objeto.madastra;
			this.mae = objeto.mae;
			this.mostraLivros = objeto.mostraLivros;
			this.obsercacoes = objeto.obsercacoes;
			this.outros = objeto.outros;
			this.padastro = objeto.padastro;
			this.pai = objeto.pai;
			this.passeios = objeto.passeios;
			this.primos = objeto.primos;
			this.tempoDedicado = objeto.tempoDedicado;
			this.tios = objeto.tios;
			this.vizinhos = objeto.vizinhos;
			this.tempoBrincadeira = objeto.tempoBrincadeira;

		}
		else {


		}

		this.afetoFormatadoLista.push(new formatadoLista(1, "Com palavras, gestos e carinhos"));
		this.afetoFormatadoLista.push(new formatadoLista(2, "Brincando juntos"));
		this.afetoFormatadoLista.push(new formatadoLista(3, "Dando presentes frequentemente"));
		this.afetoFormatadoLista.push(new formatadoLista(4, "Realizando atividades conjuntas"));
		this.afetoFormatadoLista.push(new formatadoLista(5, "Conversa sobre interesses de cada uma"));
		this.afetoFormatadoLista.push(new formatadoLista(6, "Satisfaz as necessidades materiais da família"));
		this.afetoFormatadoLista.push(new formatadoLista(7, "Outras formas"));
		this.comportamentoFormatadoLista.push(new formatadoLista(1, "Achando graça"));
		this.comportamentoFormatadoLista.push(new formatadoLista(2, "Com ameaças"));
		this.comportamentoFormatadoLista.push(new formatadoLista(3, "Com agressões verbais"));
		this.comportamentoFormatadoLista.push(new formatadoLista(4, "Com castigos corporais"));
		this.comportamentoFormatadoLista.push(new formatadoLista(5, "Com conselhos"));
		this.comportamentoFormatadoLista.push(new formatadoLista(6, "Com indiferença"));
		this.comportamentoFormatadoLista.push(new formatadoLista(7, "Suspende atividades que a criança mais gosta"));
		this.comportamentoFormatadoLista.push(new formatadoLista(8, "Outra"));
		this.contaHistoriasFormatadoLista.push(new formatadoLista(1, "Todos os dias"));
		this.contaHistoriasFormatadoLista.push(new formatadoLista(2, "Uma vez por semana"));
		this.contaHistoriasFormatadoLista.push(new formatadoLista(3, "Não canta/ensina"));
		this.ensinaCancoesFormatadoLista.push(new formatadoLista(1, "Todos os dias"));
		this.ensinaCancoesFormatadoLista.push(new formatadoLista(2, "Uma vez por semana"));
		this.ensinaCancoesFormatadoLista.push(new formatadoLista(3, "Não conta"));
		this.familiaConversaFormatadoLista.push(new formatadoLista(1, "Frequentemente"));
		this.familiaConversaFormatadoLista.push(new formatadoLista(2, "Raramente"));
		this.familiaConversaFormatadoLista.push(new formatadoLista(3, "Nunca conversa"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(1, "Limite de idade"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(2, "Ingresso em creche ou pré-escola"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(3, "Falecimento"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(4, "Mudança de endereço p/ outro município"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(5, "Saída espontânea"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(6, "Suspensão p/ aguardar transferência da VD"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(7, "Desabilitação/desistência do município"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(8, "Outro"));
		this.inativarPcfFormatadoLista.push(new formatadoLista(9, "Não foi desligado"));
		this.livrosInfantisFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.livrosInfantisFormatadoLista.push(new formatadoLista(2, "Não"));
		this.mostraLivrosFormatadoLista.push(new formatadoLista(1, "Todos os dias"));
		this.mostraLivrosFormatadoLista.push(new formatadoLista(2, "Uma vez por semana"));
		this.mostraLivrosFormatadoLista.push(new formatadoLista(3, "Não mostra"));
		this.passeiosFormatadoLista.push(new formatadoLista(1, "Todos os dias"));
		this.passeiosFormatadoLista.push(new formatadoLista(2, "Uma vez por semana"));
		this.passeiosFormatadoLista.push(new formatadoLista(3, "Não leva para passear"));
		this.tempoDedicadoFormatadoLista.push(new formatadoLista(1, "Todos os dias"));
		this.tempoDedicadoFormatadoLista.push(new formatadoLista(2, "Uma vez por semana"));
		this.tempoDedicadoFormatadoLista.push(new formatadoLista(3, "Não dedica"));

	}

}


export class PcfCaracterizacaoGestante extends ionicClasseBase {


	public associado: any;

	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataConsultaPuerperio: Date;
	get dataConsultaPuerperioFormatado(): String {
		return Mentor.dateToString(this.dataConsultaPuerperio)
	}
	set dataConsultaPuerperioFormatado(valor: String) {
		this.dataConsultaPuerperio = Mentor.stringToDate(valor);
	}

	public grupoGestante: number;
	public grupoGestanteFormatadoLista: formatadoLista[] = new Array();


	public dataInativacao: Date;
	get dataInativacaoFormatado(): String {
		return Mentor.dateToString(this.dataInativacao)
	}
	set dataInativacaoFormatado(valor: String) {
		this.dataInativacao = Mentor.stringToDate(valor);
	}

	public teveAcomParto: number;
	public teveAcomPartoFormatadoLista: formatadoLista[] = new Array();


	public dataNascimento: Date;
	get dataNascimentoFormatado(): String {
		return Mentor.dateToString(this.dataNascimento)
	}
	set dataNascimentoFormatado(valor: String) {
		this.dataNascimento = Mentor.stringToDate(valor);
	}

	public gravidezPlanejada: number;
	public gravidezPlanejadaFormatadoLista: formatadoLista[] = new Array();


	public dataParto: Date;
	get dataPartoFormatado(): String {
		return Mentor.dateToString(this.dataParto)
	}
	set dataPartoFormatado(valor: String) {
		this.dataParto = Mentor.stringToDate(valor);
	}

	public rnDireito: number;
	public rnDireitoFormatadoLista: formatadoLista[] = new Array();


	public nis: String;

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public partoPrematuro: number;
	public partoPrematuroFormatadoLista: formatadoLista[] = new Array();


	public abortos: number;
	public abortosFormatadoLista: formatadoLista[] = new Array();


	public enderecoMaternidade: String;

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public resultadoGestacao: number;
	public resultadoGestacaoFormatadoLista: formatadoLista[] = new Array();


	public creas: number;
	get creasFormatado(): String {
		return Mentor.moedaToString(this.creas)
	}
	set creasFormatado(valor: String) {
		this.creas = Mentor.stringToMoeda(valor);
	}

	public nomeMaternidade: String;

	public diaVisita: number;
	public diaVisitaFormatadoLista: formatadoLista[] = new Array();


	public estudaAtualmente: number;
	public estudaAtualmenteFormatadoLista: formatadoLista[] = new Array();


	public inativacaoGestante: number;
	public inativacaoGestanteFormatadoLista: formatadoLista[] = new Array();


	public descDuvidaComp: String;

	public descrAcomParto: number;
	get descrAcomPartoFormatado(): String {
		return Mentor.moedaToString(this.descrAcomParto)
	}
	set descrAcomPartoFormatado(valor: String) {
		this.descrAcomParto = Mentor.stringToMoeda(valor);
	}

	public cras: number;
	get crasFormatado(): String {
		return Mentor.moedaToString(this.cras)
	}
	set crasFormatado(valor: String) {
		this.cras = Mentor.stringToMoeda(valor);
	}

	public descApoioFamiliar: String;

	public nasf: number;
	get nasfFormatado(): String {
		return Mentor.moedaToString(this.nasf)
	}
	set nasfFormatado(valor: String) {
		this.nasf = Mentor.stringToMoeda(valor);
	}

	public inicioPreNatal: number;
	public inicioPreNatalFormatadoLista: formatadoLista[] = new Array();


	public descApoioCriancaNascer: String;

	public acompHoraParto: number;
	public acompHoraPartoFormatadoLista: formatadoLista[] = new Array();


	public consultaPuerperio: number;
	public consultaPuerperioFormatadoLista: formatadoLista[] = new Array();


	public horaVisita: String;

	public nascidosVivos: number;
	public nascidosVivosFormatadoLista: formatadoLista[] = new Array();


	public esf: number;
	get esfFormatado(): String {
		return Mentor.moedaToString(this.esf)
	}
	set esfFormatado(valor: String) {
		this.esf = Mentor.stringToMoeda(valor);
	}

	public paisMunicipio: number;
	public paisMunicipioFormatadoLista: formatadoLista[] = new Array();


	public expectativaPcf: String;

	public agar: number;
	get agarFormatado(): String {
		return Mentor.moedaToString(this.agar)
	}
	set agarFormatado(valor: String) {
		this.agar = Mentor.stringToMoeda(valor);
	}

	public conselhoTutelar: number;
	get conselhoTutelarFormatado(): String {
		return Mentor.moedaToString(this.conselhoTutelar)
	}
	set conselhoTutelarFormatado(valor: String) {
		this.conselhoTutelar = Mentor.stringToMoeda(valor);
	}

	public justificativaParto: String;

	public nascidosMortos: number;
	public nascidosMortosFormatadoLista: formatadoLista[] = new Array();


	public enxovalPreparado: number;
	public enxovalPreparadoFormatadoLista: formatadoLista[] = new Array();


	public lerEscrever: number;
	public lerEscreverFormatadoLista: formatadoLista[] = new Array();


	public moraDescricao: String;

	public apae: number;
	get apaeFormatado(): String {
		return Mentor.moedaToString(this.apae)
	}
	set apaeFormatado(valor: String) {
		this.apae = Mentor.stringToMoeda(valor);
	}

	public qtdVivosHoje: number;
	get qtdVivosHojeFormatado(): String {
		return Mentor.moedaToString(this.qtdVivosHoje)
	}
	set qtdVivosHojeFormatado(valor: String) {
		this.qtdVivosHoje = Mentor.stringToMoeda(valor);
	}

	public compheiroConsulta: number;
	public compheiroConsultaFormatadoLista: formatadoLista[] = new Array();


	public observacoes: String;

	public naoServicoSaude: number;
	get naoServicoSaudeFormatado(): String {
		return Mentor.moedaToString(this.naoServicoSaude)
	}
	set naoServicoSaudeFormatado(valor: String) {
		this.naoServicoSaude = Mentor.stringToMoeda(valor);
	}

	public periodoGestacional: number;
	public periodoGestacionalFormatadoLista: formatadoLista[] = new Array();


	public maternidade: number;
	public maternidadeFormatadoLista: formatadoLista[] = new Array();


	public nomePai: String;

	public apoioCriancaNascer: number;
	public apoioCriancaNascerFormatadoLista: formatadoLista[] = new Array();


	public planejamentoFamiliar: number;
	public planejamentoFamiliarFormatadoLista: formatadoLista[] = new Array();


	public companheiroPai: number;
	public companheiroPaiFormatadoLista: formatadoLista[] = new Array();


	public email: String;

	public moraSogra: number;
	get moraSograFormatado(): String {
		return Mentor.moedaToString(this.moraSogra)
	}
	set moraSograFormatado(valor: String) {
		this.moraSogra = Mentor.stringToMoeda(valor);
	}

	public duvidasCompartilhadas: number;
	public duvidasCompartilhadasFormatadoLista: formatadoLista[] = new Array();


	public mesesGestacao: number;
	get mesesGestacaoFormatado(): String {
		return Mentor.moedaToString(this.mesesGestacao)
	}
	set mesesGestacaoFormatado(valor: String) {
		this.mesesGestacao = Mentor.stringToMoeda(valor);
	}

	public nomeMae: String;

	public apoioFamiliar: number;
	public apoioFamiliarFormatadoLista: formatadoLista[] = new Array();


	public dormeBem: number;
	public dormeBemFormatadoLista: formatadoLista[] = new Array();


	public companheiro: number;
	public companheiroFormatadoLista: formatadoLista[] = new Array();


	public descAcompHoraParto: String;

	public moraPais: number;
	public moraPaisFormatadoLista: formatadoLista[] = new Array();


	public preferenciaParto: number;
	public preferenciaPartoFormatadoLista: formatadoLista[] = new Array();


	public moraAmigos: number;
	get moraAmigosFormatado(): String {
		return Mentor.moedaToString(this.moraAmigos)
	}
	set moraAmigosFormatado(valor: String) {
		this.moraAmigos = Mentor.stringToMoeda(valor);
	}

	public celular: String;

	public atendidaPcf: number;
	public atendidaPcfFormatadoLista: formatadoLista[] = new Array();


	public qtdPrematuro: number;
	get qtdPrematuroFormatado(): String {
		return Mentor.moedaToString(this.qtdPrematuro)
	}
	set qtdPrematuroFormatado(valor: String) {
		this.qtdPrematuro = Mentor.stringToMoeda(valor);
	}

	public moraOutros: number;
	get moraOutrosFormatado(): String {
		return Mentor.moedaToString(this.moraOutros)
	}
	set moraOutrosFormatado(valor: String) {
		this.moraOutros = Mentor.stringToMoeda(valor);
	}

	public nomeCompanheiro: String;

	public atividadeFisica: number;
	public atividadeFisicaFormatadoLista: formatadoLista[] = new Array();


	public descOutros: String;

	public moraIrmaos: number;
	get moraIrmaosFormatado(): String {
		return Mentor.moedaToString(this.moraIrmaos)
	}
	set moraIrmaosFormatado(valor: String) {
		this.moraIrmaos = Mentor.stringToMoeda(valor);
	}

	public cartaoSus: String;

	public caps: number;
	get capsFormatado(): String {
		return Mentor.moedaToString(this.caps)
	}
	set capsFormatado(valor: String) {
		this.caps = Mentor.stringToMoeda(valor);
	}

	public qtdConsultasPn: number;
	public qtdConsultasPnFormatadoLista: formatadoLista[] = new Array();


	public tipoParto: number;
	public tipoPartoFormatadoLista: formatadoLista[] = new Array();


	public nome: String;

	public qtdGravides: number;
	public qtdGravidesFormatadoLista: formatadoLista[] = new Array();


	public outros: number;
	get outrosFormatado(): String {
		return Mentor.moedaToString(this.outros)
	}
	set outrosFormatado(valor: String) {
		this.outros = Mentor.stringToMoeda(valor);
	}

	public descGrupoGestante: String;

	public trabalhaAtualmente: number;
	public trabalhaAtualmenteFormatadoLista: formatadoLista[] = new Array();


	public moraFilhos: number;
	get moraFilhosFormatado(): String {
		return Mentor.moedaToString(this.moraFilhos)
	}
	set moraFilhosFormatado(valor: String) {
		this.moraFilhos = Mentor.stringToMoeda(valor);
	}

	public moraCompanheiro: number;
	get moraCompanheiroFormatado(): String {
		return Mentor.moedaToString(this.moraCompanheiro)
	}
	set moraCompanheiroFormatado(valor: String) {
		this.moraCompanheiro = Mentor.stringToMoeda(valor);
	}

	public ubs: number;
	get ubsFormatado(): String {
		return Mentor.moedaToString(this.ubs)
	}
	set ubsFormatado(valor: String) {
		this.ubs = Mentor.stringToMoeda(valor);
	}

	public saedst: number;
	get saedstFormatado(): String {
		return Mentor.moedaToString(this.saedst)
	}
	set saedstFormatado(valor: String) {
		this.saedst = Mentor.stringToMoeda(valor);
	}

	public localTrabalho: String;
	public responsavelCadastro: Funcionarios;
	public associadoCras: AssociadoCras;
	public escola: Escola;
	public domicilioCras: DomicilioCras;
	public responsavelAlteracao: Funcionarios;
	public formularios: pcfAppFormulario[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.associado = objeto.associado;

			this.codigo = objeto.codigo;
			if (objeto.dataConsultaPuerperioFormatado != null)
				this.dataConsultaPuerperio = Mentor.stringToDate(objeto.dataConsultaPuerperioFormatado);
			else
				this.dataConsultaPuerperio = objeto.dataConsultaPuerperio;
			this.grupoGestante = objeto.grupoGestante;
			if (objeto.dataInativacaoFormatado != null)
				this.dataInativacao = Mentor.stringToDate(objeto.dataInativacaoFormatado);
			else
				this.dataInativacao = objeto.dataInativacao;
			this.teveAcomParto = objeto.teveAcomParto;
			if (objeto.dataNascimentoFormatado != null)
				this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado);
			else
				this.dataNascimento = objeto.dataNascimento;
			this.gravidezPlanejada = objeto.gravidezPlanejada;
			if (objeto.dataPartoFormatado != null)
				this.dataParto = Mentor.stringToDate(objeto.dataPartoFormatado);
			else
				this.dataParto = objeto.dataParto;
			this.rnDireito = objeto.rnDireito;
			this.nis = objeto.nis;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			this.partoPrematuro = objeto.partoPrematuro;
			this.abortos = objeto.abortos;
			this.enderecoMaternidade = objeto.enderecoMaternidade;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			this.resultadoGestacao = objeto.resultadoGestacao;
			this.creas = objeto.creas;
			this.nomeMaternidade = objeto.nomeMaternidade;
			this.diaVisita = objeto.diaVisita;
			this.estudaAtualmente = objeto.estudaAtualmente;
			this.inativacaoGestante = objeto.inativacaoGestante;
			this.descDuvidaComp = objeto.descDuvidaComp;
			this.descrAcomParto = objeto.descrAcomParto;
			this.cras = objeto.cras;
			this.descApoioFamiliar = objeto.descApoioFamiliar;
			this.nasf = objeto.nasf;
			this.inicioPreNatal = objeto.inicioPreNatal;
			this.descApoioCriancaNascer = objeto.descApoioCriancaNascer;
			this.acompHoraParto = objeto.acompHoraParto;
			this.consultaPuerperio = objeto.consultaPuerperio;
			this.horaVisita = objeto.horaVisita;
			this.nascidosVivos = objeto.nascidosVivos;
			this.esf = objeto.esf;
			this.paisMunicipio = objeto.paisMunicipio;
			this.expectativaPcf = objeto.expectativaPcf;
			this.agar = objeto.agar;
			this.conselhoTutelar = objeto.conselhoTutelar;
			this.justificativaParto = objeto.justificativaParto;
			this.nascidosMortos = objeto.nascidosMortos;
			this.enxovalPreparado = objeto.enxovalPreparado;
			this.lerEscrever = objeto.lerEscrever;
			this.moraDescricao = objeto.moraDescricao;
			this.apae = objeto.apae;
			this.qtdVivosHoje = objeto.qtdVivosHoje;
			this.compheiroConsulta = objeto.compheiroConsulta;
			this.observacoes = objeto.observacoes;
			this.naoServicoSaude = objeto.naoServicoSaude;
			this.periodoGestacional = objeto.periodoGestacional;
			this.maternidade = objeto.maternidade;
			this.nomePai = objeto.nomePai;
			this.apoioCriancaNascer = objeto.apoioCriancaNascer;
			this.planejamentoFamiliar = objeto.planejamentoFamiliar;
			this.companheiroPai = objeto.companheiroPai;
			this.email = objeto.email;
			this.moraSogra = objeto.moraSogra;
			this.duvidasCompartilhadas = objeto.duvidasCompartilhadas;
			this.mesesGestacao = objeto.mesesGestacao;
			this.nomeMae = objeto.nomeMae;
			this.apoioFamiliar = objeto.apoioFamiliar;
			this.dormeBem = objeto.dormeBem;
			this.companheiro = objeto.companheiro;
			this.descAcompHoraParto = objeto.descAcompHoraParto;
			this.moraPais = objeto.moraPais;
			this.preferenciaParto = objeto.preferenciaParto;
			this.moraAmigos = objeto.moraAmigos;
			this.celular = objeto.celular;
			this.atendidaPcf = objeto.atendidaPcf;
			this.qtdPrematuro = objeto.qtdPrematuro;
			this.moraOutros = objeto.moraOutros;
			this.nomeCompanheiro = objeto.nomeCompanheiro;
			this.atividadeFisica = objeto.atividadeFisica;
			this.descOutros = objeto.descOutros;
			this.moraIrmaos = objeto.moraIrmaos;
			this.cartaoSus = objeto.cartaoSus;
			this.caps = objeto.caps;
			this.qtdConsultasPn = objeto.qtdConsultasPn;
			this.tipoParto = objeto.tipoParto;
			this.nome = objeto.nome;
			this.qtdGravides = objeto.qtdGravides;
			this.outros = objeto.outros;
			this.descGrupoGestante = objeto.descGrupoGestante;
			this.trabalhaAtualmente = objeto.trabalhaAtualmente;
			this.moraFilhos = objeto.moraFilhos;
			this.moraCompanheiro = objeto.moraCompanheiro;
			this.ubs = objeto.ubs;
			this.saedst = objeto.saedst;
			this.localTrabalho = objeto.localTrabalho;

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.associadoCras != null)
				this.associadoCras = new AssociadoCras(objeto.associadoCras);

			if (objeto.escola != null)
				this.escola = new Escola(objeto.escola);

			if (objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

			if (objeto.responsavelAlteracao != null)
				this.responsavelAlteracao = new Funcionarios(objeto.responsavelAlteracao);

			if (objeto.formularios != null) {
				this.formularios = new Array();
				for (let x: number = 0; x < objeto.formularios.length; x++)
					this.formularios.push(new pcfAppFormulario(objeto.formularios[x]))
			}

		}
		else {

			this.responsavelCadastro = new Funcionarios(null);
			this.associadoCras = new AssociadoCras(null);
			this.escola = new Escola(null);
			this.domicilioCras = new DomicilioCras(null);
			this.responsavelAlteracao = new Funcionarios(null);

		}

		this.grupoGestanteFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.grupoGestanteFormatadoLista.push(new formatadoLista(2, "Não"));
		this.teveAcomPartoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.teveAcomPartoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.gravidezPlanejadaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.gravidezPlanejadaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.rnDireitoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.rnDireitoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.partoPrematuroFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.partoPrematuroFormatadoLista.push(new formatadoLista(2, "Não"));
		this.abortosFormatadoLista.push(new formatadoLista(1, "Um"));
		this.abortosFormatadoLista.push(new formatadoLista(2, "Dois"));
		this.abortosFormatadoLista.push(new formatadoLista(3, "Três ou mais"));
		this.resultadoGestacaoFormatadoLista.push(new formatadoLista(1, "Nascido vivo"));
		this.resultadoGestacaoFormatadoLista.push(new formatadoLista(2, "Nascido morto"));
		this.resultadoGestacaoFormatadoLista.push(new formatadoLista(3, "Aborto"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(1, "Segunda-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(2, "Terça-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(3, "Quarta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(4, "Quinta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(5, "Sexta-feira"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(6, "Sábado"));
		this.diaVisitaFormatadoLista.push(new formatadoLista(7, "Todos os dias"));
		this.estudaAtualmenteFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.estudaAtualmenteFormatadoLista.push(new formatadoLista(2, "Não"));
		this.inativacaoGestanteFormatadoLista.push(new formatadoLista(1, "Final da gestação"));
		this.inativacaoGestanteFormatadoLista.push(new formatadoLista(2, "Mudança de endereço"));
		this.inativacaoGestanteFormatadoLista.push(new formatadoLista(3, "Desistência do PCF"));
		this.inativacaoGestanteFormatadoLista.push(new formatadoLista(4, "Falecimento"));
		this.inicioPreNatalFormatadoLista.push(new formatadoLista(1, "Não iniciou"));
		this.inicioPreNatalFormatadoLista.push(new formatadoLista(2, "Até 12 semanas"));
		this.inicioPreNatalFormatadoLista.push(new formatadoLista(3, "Entre a 13ª e 24ª semana"));
		this.inicioPreNatalFormatadoLista.push(new formatadoLista(4, "Entre 25ª e 36ª"));
		this.acompHoraPartoFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.acompHoraPartoFormatadoLista.push(new formatadoLista(2, "Não"));
		this.consultaPuerperioFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.consultaPuerperioFormatadoLista.push(new formatadoLista(2, "Não"));
		this.nascidosVivosFormatadoLista.push(new formatadoLista(1, "Um"));
		this.nascidosVivosFormatadoLista.push(new formatadoLista(2, "Dois"));
		this.nascidosVivosFormatadoLista.push(new formatadoLista(3, "Três ou mais"));
		this.paisMunicipioFormatadoLista.push(new formatadoLista(1, "Sim, no mesmo bairro/comunidade"));
		this.paisMunicipioFormatadoLista.push(new formatadoLista(2, "Sim, em outro bairro/comunidade"));
		this.paisMunicipioFormatadoLista.push(new formatadoLista(3, "Não"));
		this.nascidosMortosFormatadoLista.push(new formatadoLista(1, "Um"));
		this.nascidosMortosFormatadoLista.push(new formatadoLista(2, "Dois"));
		this.nascidosMortosFormatadoLista.push(new formatadoLista(3, "Três ou mais"));
		this.enxovalPreparadoFormatadoLista.push(new formatadoLista(1, "Por conta própria"));
		this.enxovalPreparadoFormatadoLista.push(new formatadoLista(2, "Recebendo benefício Eventual da Assistência Social"));
		this.enxovalPreparadoFormatadoLista.push(new formatadoLista(3, "Ainda não está fazendo"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(3, "Ensino Fundamental"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(4, "Ensino Médio"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(5, "Superior Incompleto"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(6, "Superior Completo"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(7, "Outros"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(8, "EJA"));
		this.lerEscreverFormatadoLista.push(new formatadoLista(9, "Nunca frequentou a escola"));
		this.compheiroConsultaFormatadoLista.push(new formatadoLista(1, "Sim, eventualmente"));
		this.compheiroConsultaFormatadoLista.push(new formatadoLista(2, "Sim, em todas as consultas"));
		this.compheiroConsultaFormatadoLista.push(new formatadoLista(3, "Apenas quando solicitado"));
		this.compheiroConsultaFormatadoLista.push(new formatadoLista(4, "Não acompanha"));
		this.periodoGestacionalFormatadoLista.push(new formatadoLista(1, "Menos de 22 semanas"));
		this.periodoGestacionalFormatadoLista.push(new formatadoLista(2, "28 a 31 semanas"));
		this.periodoGestacionalFormatadoLista.push(new formatadoLista(3, "37 a 41 semanas"));
		this.periodoGestacionalFormatadoLista.push(new formatadoLista(4, "22 a 27 semanas"));
		this.periodoGestacionalFormatadoLista.push(new formatadoLista(5, "32 a 36 semanas"));
		this.maternidadeFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.maternidadeFormatadoLista.push(new formatadoLista(2, "Não"));
		this.apoioCriancaNascerFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.apoioCriancaNascerFormatadoLista.push(new formatadoLista(2, "Não"));
		this.planejamentoFamiliarFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.planejamentoFamiliarFormatadoLista.push(new formatadoLista(2, "Não"));
		this.companheiroPaiFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.companheiroPaiFormatadoLista.push(new formatadoLista(2, "Não"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(1, "Família"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(2, "Equipe de saúde do pré-Natal"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(3, "Grupo de gestantes"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(4, "Amigos"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(5, "Não compartilha"));
		this.duvidasCompartilhadasFormatadoLista.push(new formatadoLista(6, "Outros"));
		this.apoioFamiliarFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.apoioFamiliarFormatadoLista.push(new formatadoLista(2, "Não"));
		this.dormeBemFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.dormeBemFormatadoLista.push(new formatadoLista(2, "Não"));
		this.companheiroFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.companheiroFormatadoLista.push(new formatadoLista(2, "Não"));
		this.moraPaisFormatadoLista.push(new formatadoLista(1, "Sim, no mesmo bairro/comunidade"));
		this.moraPaisFormatadoLista.push(new formatadoLista(2, "Sim, em outro bairro/comunidade"));
		this.moraPaisFormatadoLista.push(new formatadoLista(3, "Não"));
		this.preferenciaPartoFormatadoLista.push(new formatadoLista(1, "Normal"));
		this.preferenciaPartoFormatadoLista.push(new formatadoLista(2, "Cesárea"));
		this.atendidaPcfFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.atendidaPcfFormatadoLista.push(new formatadoLista(2, "Não"));
		this.atividadeFisicaFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.atividadeFisicaFormatadoLista.push(new formatadoLista(2, "Não"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(1, "1"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(2, "2"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(3, "3"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(4, "4"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(5, "5"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(6, "6"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(7, "7"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(8, "8"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(9, "9"));
		this.qtdConsultasPnFormatadoLista.push(new formatadoLista(10, "10 ou mais"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(1, "Vaginal"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(2, "Cesariana"));
		this.tipoPartoFormatadoLista.push(new formatadoLista(3, "Fórceps"));
		this.qtdGravidesFormatadoLista.push(new formatadoLista(1, "Nenhuma vez"));
		this.qtdGravidesFormatadoLista.push(new formatadoLista(2, "Uma vez"));
		this.qtdGravidesFormatadoLista.push(new formatadoLista(3, "Duas vezes"));
		this.qtdGravidesFormatadoLista.push(new formatadoLista(4, "Três ou mais vezes"));
		this.trabalhaAtualmenteFormatadoLista.push(new formatadoLista(1, "Sim"));
		this.trabalhaAtualmenteFormatadoLista.push(new formatadoLista(2, "Não"));

	}

}


export class PcfPlanoVisita extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public dataAlteracao: Date;
	get dataAlteracaoFormatado(): String {
		return Mentor.dateToString(this.dataAlteracao)
	}
	set dataAlteracaoFormatado(valor: String) {
		this.dataAlteracao = Mentor.stringToDate(valor);
	}

	public dataCadastro: Date;
	get dataCadastroFormatado(): String {
		return Mentor.dateToString(this.dataCadastro)
	}
	set dataCadastroFormatado(valor: String) {
		this.dataCadastro = Mentor.stringToDate(valor);
	}

	public dataVisita: Date;
	get dataVisitaFormatado(): String {
		return Mentor.dateToString(this.dataVisita)
	}
	set dataVisitaFormatado(valor: String) {
		this.dataVisita = Mentor.stringToDate(valor);
	}

	public momento_1: String;

	public momento_2: String;

	public momentoFinal: String;

	public objetivo: String;

	public observacoes: String;

	public flagVisitaExecutada: number;
	public flagVisitaExecutadaFormatadoLista: formatadoLista[] = new Array();


	public dataVisitaExecutada: Date;
	get dataVisitaExecutadaFormatado(): String {
		return Mentor.dateToString(this.dataVisitaExecutada)
	}
	set dataVisitaExecutadaFormatado(valor: String) {
		this.dataVisitaExecutada = Mentor.stringToDate(valor);
	}
	public responsavelCadastro: Funcionarios;
	public familias: PcfVisitaFamilia[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataAlteracaoFormatado != null)
				this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado);
			else
				this.dataAlteracao = objeto.dataAlteracao;
			if (objeto.dataCadastroFormatado != null)
				this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado);
			else
				this.dataCadastro = objeto.dataCadastro;
			if (objeto.dataVisitaFormatado != null)
				this.dataVisita = Mentor.stringToDate(objeto.dataVisitaFormatado);
			else
				this.dataVisita = objeto.dataVisita;
			this.momento_1 = objeto.momento_1;
			this.momento_2 = objeto.momento_2;
			this.momentoFinal = objeto.momentoFinal;
			this.objetivo = objeto.objetivo;
			this.observacoes = objeto.observacoes;
			this.flagVisitaExecutada = objeto.flagVisitaExecutada;
			if (objeto.dataVisitaExecutadaFormatado != null)
				this.dataVisitaExecutada = Mentor.stringToDate(objeto.dataVisitaExecutadaFormatado);
			else
				this.dataVisitaExecutada = objeto.dataVisitaExecutada;

			if (objeto.responsavelCadastro != null)
				this.responsavelCadastro = new Funcionarios(objeto.responsavelCadastro);

			if (objeto.familias != null) {
				this.familias = new Array();
				for (let x: number = 0; x < objeto.familias.length; x++)
					this.familias.push(new PcfVisitaFamilia(objeto.familias[x]))
			}

		}
		else {

			this.responsavelCadastro = new Funcionarios(null);

		}

		this.flagVisitaExecutadaFormatadoLista.push(new formatadoLista(0, "Não"));
		this.flagVisitaExecutadaFormatadoLista.push(new formatadoLista(1, "Sim"));

	}

}


export class PcfVisitaFamilia extends ionicClasseBase {

	public familia: PcfCaracterizacaoFamiliar;

	constructor(objeto: any) {
		super();
		if (objeto != null) {


			if (objeto.familia != null)
				this.familia = new PcfCaracterizacaoFamiliar(objeto.familia);

		}
		else {

			this.familia = new PcfCaracterizacaoFamiliar(null);

		}


	}

}


export class PcfCaracterizacaoFamiliar extends ionicClasseBase {

	public domicilioCras: DomicilioCras;
	public criancas: PcfCaracterizacaoCrianca[];
	public gestantes: PcfCaracterizacaoGestante[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {


			if (objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

			if (objeto.criancas != null) {
				this.criancas = new Array();
				for (let x: number = 0; x < objeto.criancas.length; x++)
					this.criancas.push(new PcfCaracterizacaoCrianca(objeto.criancas[x]))
			}

			if (objeto.gestantes != null) {
				this.gestantes = new Array();
				for (let x: number = 0; x < objeto.gestantes.length; x++)
					this.gestantes.push(new PcfCaracterizacaoGestante(objeto.gestantes[x]))
			}

		}
		else {

			this.domicilioCras = new DomicilioCras(null);

		}


	}

}


export class FormularioPesquisa extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public descricao: String;

	public sigla: String;

	public tipo: number;
	public tipoFormatadoLista: formatadoLista[] = new Array();

	public questoes: QuestaoFormulario[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.descricao = objeto.descricao;
			this.sigla = objeto.sigla;
			this.tipo = objeto.tipo;

			if (objeto.questoes != null) {
				this.questoes = new Array();
				for (let x: number = 0; x < objeto.questoes.length; x++)
					this.questoes.push(new QuestaoFormulario(objeto.questoes[x]))
			}

		}
		else {


		}

		this.tipoFormatadoLista.push(new formatadoLista(1, "Diagnóstico Inicial - 0 a 28 dias"));
		this.tipoFormatadoLista.push(new formatadoLista(2, "Diagnóstico Inicial - 0 a 3 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(3, "Diagnóstico Inicial - 3 a 6 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(4, "Diagnóstico Inicial - 6 a 9 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(5, "Diagnóstico Inicial - 9 a 12 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(6, "Diagnóstico Inicial - 12 a 18 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(7, "Diagnóstico Inicial18 a 24 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(8, "Diagnóstico Inicial - 2 a 3 anos"));
		this.tipoFormatadoLista.push(new formatadoLista(9, "Todos os Diagnósticos Iniciais"));
		this.tipoFormatadoLista.push(new formatadoLista(10, "Todas as Avaliações de Desenvolvimento"));
		this.tipoFormatadoLista.push(new formatadoLista(11, "Avaliação de Desenvolvimento - 0 a 3 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(12, "Avaliação de Desenvolvimento - 3 a 6 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(13, "Avaliação de Desenvolvimento - 6 a 9 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(14, "Avaliação de Desenvolvimento - 9 a 12 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(15, "Avaliação de Desenvolvimento - 12 - a 18 anos"));
		this.tipoFormatadoLista.push(new formatadoLista(16, "Avaliação de Desenvolvimento - 18 a 24 meses"));
		this.tipoFormatadoLista.push(new formatadoLista(19, "Avaliação de Desenvolvimento - 2 a 3 anos"));

	}

}


export class QuestaoFormulario extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public descricao: String;

	public tipoResposta: number;
	public tipoRespostaFormatadoLista: formatadoLista[] = new Array();

	public respostas: RespostaQuestaoFormulario[];

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.descricao = objeto.descricao;
			this.tipoResposta = objeto.tipoResposta;

			if (objeto.respostas != null) {
				this.respostas = new Array();
				for (let x: number = 0; x < objeto.respostas.length; x++)
					this.respostas.push(new RespostaQuestaoFormulario(objeto.respostas[x]))
			}

		}
		else {


		}

		this.tipoRespostaFormatadoLista.push(new formatadoLista(1, "Descritiva"));
		this.tipoRespostaFormatadoLista.push(new formatadoLista(2, "Seleção (Combo)"));
		this.tipoRespostaFormatadoLista.push(new formatadoLista(3, "Múltipla Escolha"));

	}

}


export class RespostaQuestaoFormulario extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public resposta: String;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.resposta = objeto.resposta;

		}
		else {


		}


	}

}


export class pcfAppFormulario extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public data: Date;
	get dataFormatado(): String {
		return Mentor.dateToString(this.data)
	}
	set dataFormatado(valor: String) {
		this.data = Mentor.stringToDate(valor);
	}
	public respostas: pcfAppRespostaFormulario[];
	public formulario: FormularioPesquisa;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			if (objeto.dataFormatado != null)
				this.data = Mentor.stringToDate(objeto.dataFormatado);
			else
				this.data = objeto.data;

			if (objeto.respostas != null) {
				this.respostas = new Array();
				for (let x: number = 0; x < objeto.respostas.length; x++)
					this.respostas.push(new pcfAppRespostaFormulario(objeto.respostas[x]))
			}

			if (objeto.formulario != null)
				this.formulario = new FormularioPesquisa(objeto.formulario);

		}
		else {

			this.formulario = new FormularioPesquisa(null);

		}


	}

}


export class pcfAppRespostaFormulario extends ionicClasseBase {


	public codigo: number;
	get codigoFormatado(): String {
		return Mentor.moedaToString(this.codigo)
	}
	set codigoFormatado(valor: String) {
		this.codigo = Mentor.stringToMoeda(valor);
	}

	public respostaDireta: String;
	public questao: QuestaoFormulario;
	public alternativaResposta: RespostaQuestaoFormulario;

	constructor(objeto: any) {
		super();
		if (objeto != null) {

			this.codigo = objeto.codigo;
			this.respostaDireta = objeto.respostaDireta;

			if (objeto.questao != null)
				this.questao = new QuestaoFormulario(objeto.questao);

			if (objeto.alternativaResposta != null)
				this.alternativaResposta = new RespostaQuestaoFormulario(objeto.alternativaResposta);

		}
		else {

			this.questao = new QuestaoFormulario(null);
			this.alternativaResposta = new RespostaQuestaoFormulario(null);

		}


	}

}


export class licencaMunicipioSistema extends ionicClasseBase {
	public static mentorNomeClasse = 'br.com.assistenciaSocial.app.licencaMunicipioSistema';

	static criaColecao(lista: any) {
		if (lista != null) {
			var retorno = new Array();
			for (let x = 0; x < lista.length; x++)
				retorno.push(new licencaMunicipioSistema(lista[x]));
			return retorno;
		}
	}

	public codigo: number;
	public codigo_: String;
	get codigoSimNao() { if (this.codigo == 1) return true; else return false; }
	set codigoSimNao(flag) { if (flag) this.codigo = 1; else this.codigo = 0; }
	get codigoFormatado(): String {
		return (this.codigo_)
	}
	set codigoFormatado(valor: String) {
		this.codigo_ = (valor);
		if (replaceAll(valor, " ", "") != "")
			this.codigo = Mentor.stringToMoeda(valor);
	}

	public nomeMunicipio: String;
	public nomeMunicipio_: String;

	public sistema: number;
	public sistema_: String;
	get sistemaSimNao() { if (this.sistema == 1) return true; else return false; }
	set sistemaSimNao(flag) { if (flag) this.sistema = 1; else this.sistema = 0; }
	public sistemaFormatadoLista: formatadoLista[] = new Array();
	get sistemaFormatado() { return Mentor.formatadoLista(this.sistemaFormatadoLista, this.sistema); }


	public nomeCliente: String;
	public nomeCliente_: String;

	public logo: String;
	public logo_: String;

	public dataUltimaVersao: Date;
	public dataUltimaVersao_: String;
	get dataUltimaVersaoFormatado(): String {
		if (typeof (this.dataUltimaVersao) != 'undefined' && this.dataUltimaVersao != null)
			return Mentor.dateToString(this.dataUltimaVersao);
		else
			return '';
	}
	set dataUltimaVersaoFormatado(valor: String) {
		this.dataUltimaVersao_ = valor;
		if (replaceAll(this.dataUltimaVersao_, "_", "").length == 10)
			this.dataUltimaVersao = Mentor.stringToDate(valor);
	}
	get dataUltimaVersaoFormatadoIso(): String {
		return Mentor.dateToStringIso(this.dataUltimaVersao)
	}
	set dataUltimaVersaoFormatadoIso(valor: String) {
		this.dataUltimaVersao = Mentor.stringToDateIso(valor);
		this.dataUltimaVersao_ = Mentor.dateToString(this.dataUltimaVersao);
	}

	public url: String;
	public url_: String;

	public urlUltimaAlteracao: String;
	public urlUltimaAlteracao_: String;

	public urlServidor: String;
	public urlServidor_: String;
	public estado: Estado;

	constructor(objeto: any) {
		super();
		if (objeto != null) Mentor.mostraSql = objeto.flagExibeSql;
		if (objeto != null && objeto != 'null') {
			if (typeof (objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			this.codigo = objeto.codigo;
			this.codigo_ = Mentor.intToString(this.codigo);
			this.nomeMunicipio = objeto.nomeMunicipio;
			this.sistema = objeto.sistema;
			this.sistema_ = Mentor.intToString(this.sistema);
			this.nomeCliente = objeto.nomeCliente;
			this.logo = objeto.logo;
			if (typeof (objeto.dataUltimaVersao_) != 'undefined') {
				try {
					this.dataUltimaVersao_ = objeto.dataUltimaVersao_;
					this.dataUltimaVersao = Mentor.stringToDate(objeto.dataUltimaVersao_);
					this.dataUltimaVersaoFormatado = (objeto.dataUltimaVersao_);
				} catch (err) {
					alert(err);
					throw err;
				}
			}
			else {
				this.dataUltimaVersao = Mentor.stringToDate(objeto.dataUltimaVersaoFormatado);
				this.dataUltimaVersao_ = (objeto.dataUltimaVersaoFormatado);
			}
			this.url = objeto.url;
			this.urlUltimaAlteracao = objeto.urlUltimaAlteracao;
			this.urlServidor = objeto.urlServidor;

			if (objeto.estado != null)
				this.estado = new Estado(objeto.estado);

		}
		else {
			if ((objeto) == 'null') {
				this.ionicFlagNovo = true;
				this.codigo = 0;
				this.codigo_ = '0';
				this.sistema = 0;
				this.sistema_ = '0';
				this.dataUltimaVersao = new Date();
				this.dataUltimaVersao_ = (this.dataUltimaVersaoFormatado);

			} else {
				this.ionicFlagNovo = true;
				this.codigo = 0;
				this.codigo_ = '0';
				this.sistema = 0;
				this.sistema_ = '0';
				this.dataUltimaVersao = new Date();
				this.dataUltimaVersao_ = (this.dataUltimaVersaoFormatado);
				this.estado = new Estado('null');

			}
		}

		this.sistemaFormatadoLista.push(new formatadoLista(1, "assistenciaSocial"));
		this.sistemaFormatadoLista.push(new formatadoLista(2, "tfd"));
		this.sistemaFormatadoLista.push(new formatadoLista(3, "transporte escolar"));
		this.sistemaFormatadoLista.push(new formatadoLista(4, "ouvidoria"));
		this.sistemaFormatadoLista.push(new formatadoLista(5, "gestao escolar"));
		this.sistemaFormatadoLista.push(new formatadoLista(6, "sic"));
		this.sistemaFormatadoLista.push(new formatadoLista(7, "transparencia"));
		this.sistemaFormatadoLista.push(new formatadoLista(8, "netDoc"));
		this.sistemaFormatadoLista.push(new formatadoLista(9, "diarioOficial"));

	}

}


export class Estado extends ionicClasseBase {

	static criaColecao(lista: any) {
		if (lista != null) {
			var retorno = new Array();
			for (let x = 0; x < lista.length; x++)
				retorno.push(new Estado(lista[x]));
			return retorno;
		}
	}

	public codigo: number;
	public codigo_: String;
	get codigoSimNao() { if (this.codigo == 1) return true; else return false; }
	set codigoSimNao(flag) { if (flag) this.codigo = 1; else this.codigo = 0; }
	get codigoFormatado(): String {
		return (this.codigo_)
	}
	set codigoFormatado(valor: String) {
		this.codigo_ = (valor);
		if (replaceAll(valor, " ", "") != "")
			this.codigo = Mentor.stringToMoeda(valor);
	}

	public descricao: String;
	public descricao_: String;

	constructor(objeto: any) {
		super();
		if (objeto != null) {
			if (typeof (objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			this.codigo = objeto.codigo;
			this.codigo_ = Mentor.intToString(this.codigo);
			this.descricao = objeto.descricao;

		}
		else {
			if (typeof (objeto) == 'undefined') {
				this.ionicFlagNovo = true;
				this.codigo = 0;
				this.codigo_ = '0';

			} else {
				this.ionicFlagNovo = true;
				this.codigo = 0;
				this.codigo_ = '0';

			}


		}
	}

}

