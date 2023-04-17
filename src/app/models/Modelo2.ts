

// codigo gerado automaticamente pelo mentor transacao 1587

import {Mentor}  from '../models/Mentor'
import { servico } from '../models/Servico';


function replaceAll(palavra,de, para){
		var str = palavra;
		var pos = str.indexOf(de);
		while (pos > -1){
			str = str.replace(de, para);
			pos = str.indexOf(de);
		}
		return (str);
}

	export class formatadoLista{
		public de:number;
		public para :String;
		constructor(de:number,para:String){
			this.de = de;
			this.para = para;
		}
	}
	export class ionicClasseBase{
		public ionicIndiceRepositorio: number;
		public ionicFlagConcluido: boolean
		public ionicFlagNovo: boolean
		public base64: string
	}

export class licencaMunicipioSistema extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.app.licencaMunicipioSistema';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new licencaMunicipioSistema(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nomeMunicipio : String ;
		public nomeMunicipio_ : String ;

		public sistema : number ;
		public sistema_ : String ;
		get sistemaSimNao(){ if (this.sistema == 1) return true; else return false;}
		set sistemaSimNao(flag){ if (flag) this.sistema = 1; else this.sistema = 0;}
		public sistemaFormatadoLista : formatadoLista[] = new Array();
		get sistemaFormatado(){  return Mentor.formatadoLista(this.sistemaFormatadoLista,this.sistema);}


		public nomeCliente : String ;
		public nomeCliente_ : String ;

		public logo : String ;
		public logo_ : String ;

		public dataUltimaVersao : Date ;
		public dataUltimaVersao_ : String ;
		get dataUltimaVersaoFormatado(): String {
			if(typeof(this.dataUltimaVersao) != 'undefined' && this.dataUltimaVersao != null  )
			return Mentor.dateToString(this.dataUltimaVersao);
			else
				return  '' ;
		}
		set dataUltimaVersaoFormatado(valor: String) {
			this.dataUltimaVersao_ =  valor;
			if(replaceAll(this.dataUltimaVersao_,"_","").length ==10)
				this.dataUltimaVersao =  Mentor.stringToDate(valor);
		}
		get dataUltimaVersaoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataUltimaVersao)
		}
		set dataUltimaVersaoFormatadoIso(valor: String) {
			this.dataUltimaVersao =  Mentor.stringToDateIso(valor);
			this.dataUltimaVersao_ =  Mentor.dateToString(this.dataUltimaVersao);
		}

		public url : String ;
		public url_ : String ;

		public urlUltimaAlteracao : String ;
		public urlUltimaAlteracao_ : String ;

		public urlServidor : String ;
		public urlServidor_ : String ;
		public estado : Estado ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nomeMunicipio = objeto.nomeMunicipio;
			 this.sistema = objeto.sistema;
			 this.sistema_ = Mentor.intToString(this.sistema);
			 this.nomeCliente = objeto.nomeCliente;
			 this.logo = objeto.logo;
				 if(typeof(objeto.dataUltimaVersao_) != 'undefined') { try{ 
 this.dataUltimaVersao_ = objeto.dataUltimaVersao_ ;
			 this.dataUltimaVersao = Mentor.stringToDate(objeto.dataUltimaVersao_) ;
			 this.dataUltimaVersaoFormatado = (objeto.dataUltimaVersao_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataUltimaVersao = Mentor.stringToDate(objeto.dataUltimaVersaoFormatado) ;
			 this.dataUltimaVersao_ = (objeto.dataUltimaVersaoFormatado) ;}
			 this.url = objeto.url;
			 this.urlUltimaAlteracao = objeto.urlUltimaAlteracao;
			 this.urlServidor = objeto.urlServidor;

			if(objeto.estado != null)
				this.estado = new Estado(objeto.estado);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.sistema = 0;
			 this.sistema_ = '0';
			 this.dataUltimaVersao = new Date();
			 this.dataUltimaVersao_ = (this.dataUltimaVersaoFormatado) ;

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.sistema = 0;
			 this.sistema_ = '0';
			 this.dataUltimaVersao = new Date();
			 this.dataUltimaVersao_ = (this.dataUltimaVersaoFormatado) ;
				this.estado = new Estado('null');

		}
			}

			this.sistemaFormatadoLista.push(new formatadoLista(1,"assistenciaSocial"));
			this.sistemaFormatadoLista.push(new formatadoLista(2,"tfd"));
			this.sistemaFormatadoLista.push(new formatadoLista(3,"transporte escolar"));
			this.sistemaFormatadoLista.push(new formatadoLista(4,"ouvidoria"));
			this.sistemaFormatadoLista.push(new formatadoLista(5,"gestao escolar"));
			this.sistemaFormatadoLista.push(new formatadoLista(6,"sic"));
			this.sistemaFormatadoLista.push(new formatadoLista(7,"transparencia"));
			this.sistemaFormatadoLista.push(new formatadoLista(8,"netDoc"));
			this.sistemaFormatadoLista.push(new formatadoLista(9,"diarioOficial"));

		}

}


export class Estado extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.acesso.beans.Estado';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Estado(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public descricao : String ;
		public descricao_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.descricao = objeto.descricao;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class AssociadoCras extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.AssociadoCras';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new AssociadoCras(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public apelido : String ;
		public apelido_ : String ;

		public cpf : String ;
		public cpf_ : String ;

		public dataNascimento : Date ;
		public dataNascimento_ : String ;
		get dataNascimentoFormatado(): String {
			if(typeof(this.dataNascimento) != 'undefined' && this.dataNascimento != null  )
			return Mentor.dateToString(this.dataNascimento);
			else
				return  '' ;
		}
		set dataNascimentoFormatado(valor: String) {
			this.dataNascimento_ =  valor;
			if(replaceAll(this.dataNascimento_,"_","").length ==10)
				this.dataNascimento =  Mentor.stringToDate(valor);
		}
		get dataNascimentoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataNascimento)
		}
		set dataNascimentoFormatadoIso(valor: String) {
			this.dataNascimento =  Mentor.stringToDateIso(valor);
			this.dataNascimento_ =  Mentor.dateToString(this.dataNascimento);
		}

		public telefoneContato : String ;
		public telefoneContato_ : String ;

		public telefoneCelular : String ;
		public telefoneCelular_ : String ;

		public nis : String ;
		public nis_ : String ;

		public nome : String ;
		public nome_ : String ;

		public nomeMae : String ;
		public nomeMae_ : String ;

		public rg : String ;
		public rg_ : String ;

		public tipoSanguineo : number ;
		public tipoSanguineo_ : String ;
		get tipoSanguineoSimNao(){ if (this.tipoSanguineo == 1) return true; else return false;}
		set tipoSanguineoSimNao(flag){ if (flag) this.tipoSanguineo = 1; else this.tipoSanguineo = 0;}
		public tipoSanguineoFormatadoLista : formatadoLista[] = new Array();
		get tipoSanguineoFormatado(){  return Mentor.formatadoLista(this.tipoSanguineoFormatadoLista,this.tipoSanguineo);}


		public naturalidade : String ;
		public naturalidade_ : String ;

		public cartaoSus : String ;
		public cartaoSus_ : String ;
		public domicilioCras : DomicilioCras ;
		public tipoParentesco : TipoParentesco ;

		public orgaoExpedidor : String ;
		public orgaoExpedidor_ : String ;

		public uf : String ;
		public uf_ : String ;
		public estadoCivil : EstadoCivil ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.apelido = objeto.apelido;
			 this.cpf = objeto.cpf;
				 if(typeof(objeto.dataNascimento_) != 'undefined') { try{ 
 this.dataNascimento_ = objeto.dataNascimento_ ;
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimento_) ;
			 this.dataNascimentoFormatado = (objeto.dataNascimento_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado) ;
			 this.dataNascimento_ = (objeto.dataNascimentoFormatado) ;}
			 this.telefoneContato = objeto.telefoneContato;
			 this.telefoneCelular = objeto.telefoneCelular;
			 this.nis = objeto.nis;
			 this.nome = objeto.nome;
			 this.nomeMae = objeto.nomeMae;
			 this.rg = objeto.rg;
			 this.tipoSanguineo = objeto.tipoSanguineo;
			 this.tipoSanguineo_ = Mentor.intToString(this.tipoSanguineo);
			 this.naturalidade = objeto.naturalidade;
			 this.cartaoSus = objeto.cartaoSus;

			if(objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

			if(objeto.tipoParentesco != null)
				this.tipoParentesco = new TipoParentesco(objeto.tipoParentesco);
			 this.orgaoExpedidor = objeto.orgaoExpedidor;
			 this.uf = objeto.uf;

			if(objeto.estadoCivil != null)
				this.estadoCivil = new EstadoCivil(objeto.estadoCivil);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;
			 this.tipoSanguineo = 0;
			 this.tipoSanguineo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;
			 this.tipoSanguineo = 0;
			 this.tipoSanguineo_ = '0';
				this.domicilioCras = new DomicilioCras('null');
				this.tipoParentesco = new TipoParentesco('null');
				this.estadoCivil = new EstadoCivil('null');

		}
			}

			this.tipoSanguineoFormatadoLista.push(new formatadoLista(1,"O (Positivo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(2,"A (Positivo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(3,"B (Positivo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(4,"AB (Positivo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(5,"O (Negativo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(6,"A (Negativo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(7,"B (Negativo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(8,"AB (Negativo)"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(9,"Não Sabe"));

		}

}


export class Beneficios extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.Beneficios';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Beneficios(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public dataDois : Date ;
		public dataDois_ : String ;
		get dataDoisFormatado(): String {
			if(typeof(this.dataDois) != 'undefined' && this.dataDois != null  )
			return Mentor.dateToString(this.dataDois);
			else
				return  '' ;
		}
		set dataDoisFormatado(valor: String) {
			this.dataDois_ =  valor;
			if(replaceAll(this.dataDois_,"_","").length ==10)
				this.dataDois =  Mentor.stringToDate(valor);
		}
		get dataDoisFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataDois)
		}
		set dataDoisFormatadoIso(valor: String) {
			this.dataDois =  Mentor.stringToDateIso(valor);
			this.dataDois_ =  Mentor.dateToString(this.dataDois);
		}

		public dataTres : Date ;
		public dataTres_ : String ;
		get dataTresFormatado(): String {
			if(typeof(this.dataTres) != 'undefined' && this.dataTres != null  )
			return Mentor.dateToString(this.dataTres);
			else
				return  '' ;
		}
		set dataTresFormatado(valor: String) {
			this.dataTres_ =  valor;
			if(replaceAll(this.dataTres_,"_","").length ==10)
				this.dataTres =  Mentor.stringToDate(valor);
		}
		get dataTresFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataTres)
		}
		set dataTresFormatadoIso(valor: String) {
			this.dataTres =  Mentor.stringToDateIso(valor);
			this.dataTres_ =  Mentor.dateToString(this.dataTres);
		}

		public dataUm : Date ;
		public dataUm_ : String ;
		get dataUmFormatado(): String {
			if(typeof(this.dataUm) != 'undefined' && this.dataUm != null  )
			return Mentor.dateToString(this.dataUm);
			else
				return  '' ;
		}
		set dataUmFormatado(valor: String) {
			this.dataUm_ =  valor;
			if(replaceAll(this.dataUm_,"_","").length ==10)
				this.dataUm =  Mentor.stringToDate(valor);
		}
		get dataUmFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataUm)
		}
		set dataUmFormatadoIso(valor: String) {
			this.dataUm =  Mentor.stringToDateIso(valor);
			this.dataUm_ =  Mentor.dateToString(this.dataUm);
		}

		public obs : String ;
		public obs_ : String ;

		public telefone : String ;
		public telefone_ : String ;
		public tipoBeneficio : TipoBeneficio ;
		public associado_cras : AssociadoCras ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
				 if(typeof(objeto.dataDois_) != 'undefined') { try{ 
 this.dataDois_ = objeto.dataDois_ ;
			 this.dataDois = Mentor.stringToDate(objeto.dataDois_) ;
			 this.dataDoisFormatado = (objeto.dataDois_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataDois = Mentor.stringToDate(objeto.dataDoisFormatado) ;
			 this.dataDois_ = (objeto.dataDoisFormatado) ;}
				 if(typeof(objeto.dataTres_) != 'undefined') { try{ 
 this.dataTres_ = objeto.dataTres_ ;
			 this.dataTres = Mentor.stringToDate(objeto.dataTres_) ;
			 this.dataTresFormatado = (objeto.dataTres_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataTres = Mentor.stringToDate(objeto.dataTresFormatado) ;
			 this.dataTres_ = (objeto.dataTresFormatado) ;}
				 if(typeof(objeto.dataUm_) != 'undefined') { try{ 
 this.dataUm_ = objeto.dataUm_ ;
			 this.dataUm = Mentor.stringToDate(objeto.dataUm_) ;
			 this.dataUmFormatado = (objeto.dataUm_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataUm = Mentor.stringToDate(objeto.dataUmFormatado) ;
			 this.dataUm_ = (objeto.dataUmFormatado) ;}
			 this.obs = objeto.obs;
			 this.telefone = objeto.telefone;

			if(objeto.tipoBeneficio != null)
				this.tipoBeneficio = new TipoBeneficio(objeto.tipoBeneficio);

			if(objeto.associado_cras != null)
				this.associado_cras = new AssociadoCras(objeto.associado_cras);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataDois = new Date();
			 this.dataDois_ = (this.dataDoisFormatado) ;
			 this.dataTres = new Date();
			 this.dataTres_ = (this.dataTresFormatado) ;
			 this.dataUm = new Date();
			 this.dataUm_ = (this.dataUmFormatado) ;

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataDois = new Date();
			 this.dataDois_ = (this.dataDoisFormatado) ;
			 this.dataTres = new Date();
			 this.dataTres_ = (this.dataTresFormatado) ;
			 this.dataUm = new Date();
			 this.dataUm_ = (this.dataUmFormatado) ;
				this.tipoBeneficio = new TipoBeneficio('null');
				this.associado_cras = new AssociadoCras('null');

		}
			}


		}

}


export class TipoBeneficio extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.TipoBeneficio';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new TipoBeneficio(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public descricao : String ;
		public descricao_ : String ;

		public nome : String ;
		public nome_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.descricao = objeto.descricao;
			 this.nome = objeto.nome;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class DomicilioCras extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.DomicilioCras';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new DomicilioCras(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public latitude : String ;
		public latitude_ : String ;

		public longitude : String ;
		public longitude_ : String ;
		public associadosCras : AssociadoCras[] ;
		public uf : Estado ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.latitude = objeto.latitude;
			 this.longitude = objeto.longitude;

			if(objeto.associadosCras != null){
				this.associadosCras = new Array();
				for(let x:number = 0;x<objeto.associadosCras.length;x++)
				this.associadosCras.push(new AssociadoCras(objeto.associadosCras[x]))
			}

			if(objeto.uf != null)
				this.uf = new Estado(objeto.uf);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
				this.uf = new Estado('null');

		}
			}


		}

}


export class Comunicacao extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.app.Comunicacao';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Comunicacao(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public titulo : String ;
		public titulo_ : String ;

		public mensagem : String ;
		public mensagem_ : String ;

		public dataPublicacao : Date ;
		public dataPublicacao_ : String ;
		get dataPublicacaoFormatado(): String {
			if(typeof(this.dataPublicacao) != 'undefined' && this.dataPublicacao != null  )
			return Mentor.dateToString(this.dataPublicacao);
			else
				return  '' ;
		}
		set dataPublicacaoFormatado(valor: String) {
			this.dataPublicacao_ =  valor;
			if(replaceAll(this.dataPublicacao_,"_","").length ==10)
				this.dataPublicacao =  Mentor.stringToDate(valor);
		}
		get dataPublicacaoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataPublicacao)
		}
		set dataPublicacaoFormatadoIso(valor: String) {
			this.dataPublicacao =  Mentor.stringToDateIso(valor);
			this.dataPublicacao_ =  Mentor.dateToString(this.dataPublicacao);
		}

		public flagQuestionario : number ;
		public flagQuestionario_ : String ;
		get flagQuestionarioSimNao(){ if (this.flagQuestionario == 1) return true; else return false;}
		set flagQuestionarioSimNao(flag){ if (flag) this.flagQuestionario = 1; else this.flagQuestionario = 0;}
		public flagQuestionarioFormatadoLista : formatadoLista[] = new Array();
		get flagQuestionarioFormatado(){  return Mentor.formatadoLista(this.flagQuestionarioFormatadoLista,this.flagQuestionario);}

		public opcoesResposta : OpcaoResposta[] ;
		public respostas : RespostaComunicacao[] ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.titulo = objeto.titulo;
			 this.mensagem = objeto.mensagem;
				 if(typeof(objeto.dataPublicacao_) != 'undefined') { try{ 
 this.dataPublicacao_ = objeto.dataPublicacao_ ;
			 this.dataPublicacao = Mentor.stringToDate(objeto.dataPublicacao_) ;
			 this.dataPublicacaoFormatado = (objeto.dataPublicacao_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataPublicacao = Mentor.stringToDate(objeto.dataPublicacaoFormatado) ;
			 this.dataPublicacao_ = (objeto.dataPublicacaoFormatado) ;}
			 this.flagQuestionario = objeto.flagQuestionario;
			 this.flagQuestionario_ = Mentor.intToString(this.flagQuestionario);

			if(objeto.opcoesResposta != null){
				this.opcoesResposta = new Array();
				for(let x:number = 0;x<objeto.opcoesResposta.length;x++)
				this.opcoesResposta.push(new OpcaoResposta(objeto.opcoesResposta[x]))
			}

			if(objeto.respostas != null){
				this.respostas = new Array();
				for(let x:number = 0;x<objeto.respostas.length;x++)
				this.respostas.push(new RespostaComunicacao(objeto.respostas[x]))
			}

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataPublicacao = new Date();
			 this.dataPublicacao_ = (this.dataPublicacaoFormatado) ;
			 this.flagQuestionario = 0;
			 this.flagQuestionario_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataPublicacao = new Date();
			 this.dataPublicacao_ = (this.dataPublicacaoFormatado) ;
			 this.flagQuestionario = 0;
			 this.flagQuestionario_ = '0';

		}
			}

			this.flagQuestionarioFormatadoLista.push(new formatadoLista(0,"Não"));
			this.flagQuestionarioFormatadoLista.push(new formatadoLista(1,"Sim"));

		}

}


export class TipoParentesco extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.acesso.beans.TipoParentesco';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new TipoParentesco(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nome : String ;
		public nome_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nome = objeto.nome;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class OpcaoResposta extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.app.OpcaoResposta';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new OpcaoResposta(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public label : String ;
		public label_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.label = objeto.label;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class RespostaComunicacao extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.app.RespostaComunicacao';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new RespostaComunicacao(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public dataCriacao : Date ;
		public dataCriacao_ : String ;
		get dataCriacaoFormatado(): String {
			if(typeof(this.dataCriacao) != 'undefined' && this.dataCriacao != null  )
			return Mentor.dateToString(this.dataCriacao);
			else
				return  '' ;
		}
		set dataCriacaoFormatado(valor: String) {
			this.dataCriacao_ =  valor;
			if(replaceAll(this.dataCriacao_,"_","").length ==10)
				this.dataCriacao =  Mentor.stringToDate(valor);
		}
		get dataCriacaoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataCriacao)
		}
		set dataCriacaoFormatadoIso(valor: String) {
			this.dataCriacao =  Mentor.stringToDateIso(valor);
			this.dataCriacao_ =  Mentor.dateToString(this.dataCriacao);
		}

		public dataAlteracao : Date ;
		public dataAlteracao_ : String ;
		get dataAlteracaoFormatado(): String {
			if(typeof(this.dataAlteracao) != 'undefined' && this.dataAlteracao != null  )
			return Mentor.dateToString(this.dataAlteracao);
			else
				return  '' ;
		}
		set dataAlteracaoFormatado(valor: String) {
			this.dataAlteracao_ =  valor;
			if(replaceAll(this.dataAlteracao_,"_","").length ==10)
				this.dataAlteracao =  Mentor.stringToDate(valor);
		}
		get dataAlteracaoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataAlteracao)
		}
		set dataAlteracaoFormatadoIso(valor: String) {
			this.dataAlteracao =  Mentor.stringToDateIso(valor);
			this.dataAlteracao_ =  Mentor.dateToString(this.dataAlteracao);
		}
		public individuo : IndividuoNetgas ;
		public opcao : OpcaoResposta ;
		public pergunta : Comunicacao ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
				 if(typeof(objeto.dataCriacao_) != 'undefined') { try{ 
 this.dataCriacao_ = objeto.dataCriacao_ ;
			 this.dataCriacao = Mentor.stringToDate(objeto.dataCriacao_) ;
			 this.dataCriacaoFormatado = (objeto.dataCriacao_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataCriacao = Mentor.stringToDate(objeto.dataCriacaoFormatado) ;
			 this.dataCriacao_ = (objeto.dataCriacaoFormatado) ;}
				 if(typeof(objeto.dataAlteracao_) != 'undefined') { try{ 
 this.dataAlteracao_ = objeto.dataAlteracao_ ;
			 this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracao_) ;
			 this.dataAlteracaoFormatado = (objeto.dataAlteracao_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataAlteracao = Mentor.stringToDate(objeto.dataAlteracaoFormatado) ;
			 this.dataAlteracao_ = (objeto.dataAlteracaoFormatado) ;}

			if(objeto.individuo != null)
				this.individuo = new IndividuoNetgas(objeto.individuo);

			if(objeto.opcao != null)
				this.opcao = new OpcaoResposta(objeto.opcao);

			if(objeto.pergunta != null)
				this.pergunta = new Comunicacao(objeto.pergunta);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataCriacao = new Date();
			 this.dataCriacao_ = (this.dataCriacaoFormatado) ;
			 this.dataAlteracao = new Date();
			 this.dataAlteracao_ = (this.dataAlteracaoFormatado) ;

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataCriacao = new Date();
			 this.dataCriacao_ = (this.dataCriacaoFormatado) ;
			 this.dataAlteracao = new Date();
			 this.dataAlteracao_ = (this.dataAlteracaoFormatado) ;
				this.individuo = new IndividuoNetgas('null');
				this.opcao = new OpcaoResposta('null');
				this.pergunta = new Comunicacao('null');

		}
			}


		}

}


export class IndividuoNetgas extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.acesso.beans.IndividuoNetgas';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new IndividuoNetgas(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public bairro : String ;
		public bairro_ : String ;

		public celular : String ;
		public celular_ : String ;

		public cep : String ;
		public cep_ : String ;

		public complemento : String ;
		public complemento_ : String ;

		public cpf : String ;
		public cpf_ : String ;

		public dataNascimento : Date ;
		public dataNascimento_ : String ;
		get dataNascimentoFormatado(): String {
			if(typeof(this.dataNascimento) != 'undefined' && this.dataNascimento != null  )
			return Mentor.dateToString(this.dataNascimento);
			else
				return  '' ;
		}
		set dataNascimentoFormatado(valor: String) {
			this.dataNascimento_ =  valor;
			if(replaceAll(this.dataNascimento_,"_","").length ==10)
				this.dataNascimento =  Mentor.stringToDate(valor);
		}
		get dataNascimentoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataNascimento)
		}
		set dataNascimentoFormatadoIso(valor: String) {
			this.dataNascimento =  Mentor.stringToDateIso(valor);
			this.dataNascimento_ =  Mentor.dateToString(this.dataNascimento);
		}

		public endereco : String ;
		public endereco_ : String ;

		public extensao : String ;
		public extensao_ : String ;

		public identidade : String ;
		public identidade_ : String ;

		public nome : String ;
		public nome_ : String ;

		public nomeMae : String ;
		public nomeMae_ : String ;

		public numero : String ;
		public numero_ : String ;

		public telefone : String ;
		public telefone_ : String ;

		public latitude : String ;
		public latitude_ : String ;

		public longitude : String ;
		public longitude_ : String ;
		public associado : Associado ;
		public associadoCras : AssociadoCras ;
		public documentos : ArtefatoCras[] ;
		public pacienteTdf : PacienteTFD ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.bairro = objeto.bairro;
			 this.celular = objeto.celular;
			 this.cep = objeto.cep;
			 this.complemento = objeto.complemento;
			 this.cpf = objeto.cpf;
				 if(typeof(objeto.dataNascimento_) != 'undefined') { try{ 
 this.dataNascimento_ = objeto.dataNascimento_ ;
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimento_) ;
			 this.dataNascimentoFormatado = (objeto.dataNascimento_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado) ;
			 this.dataNascimento_ = (objeto.dataNascimentoFormatado) ;}
			 this.endereco = objeto.endereco;
			 this.extensao = objeto.extensao;
			 this.identidade = objeto.identidade;
			 this.nome = objeto.nome;
			 this.nomeMae = objeto.nomeMae;
			 this.numero = objeto.numero;
			 this.telefone = objeto.telefone;
			 this.latitude = objeto.latitude;
			 this.longitude = objeto.longitude;

			if(objeto.associado != null)
				this.associado = new Associado(objeto.associado);

			if(objeto.associadoCras != null)
				this.associadoCras = new AssociadoCras(objeto.associadoCras);

			if(objeto.documentos != null){
				this.documentos = new Array();
				for(let x:number = 0;x<objeto.documentos.length;x++)
				this.documentos.push(new ArtefatoCras(objeto.documentos[x]))
			}

			if(objeto.pacienteTdf != null)
				this.pacienteTdf = new PacienteTFD(objeto.pacienteTdf);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;
				this.associado = new Associado('null');
				this.associadoCras = new AssociadoCras('null');
				this.pacienteTdf = new PacienteTFD('null');

		}
			}


		}

}


export class ServicosApp extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.app.ServicosApp';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new ServicosApp(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nome : String ;
		public nome_ : String ;

		public urlBase : String ;
		public urlBase_ : String ;

		public flagCarteiraCidadao : number ;
		public flagCarteiraCidadao_ : String ;
		get flagCarteiraCidadaoSimNao(){ if (this.flagCarteiraCidadao == 1) return true; else return false;}
		set flagCarteiraCidadaoSimNao(flag){ if (flag) this.flagCarteiraCidadao = 1; else this.flagCarteiraCidadao = 0;}
		public flagCarteiraCidadaoFormatadoLista : formatadoLista[] = new Array();
		get flagCarteiraCidadaoFormatado(){  return Mentor.formatadoLista(this.flagCarteiraCidadaoFormatadoLista,this.flagCarteiraCidadao);}


		public visaoRecuperarCalendario : String ;
		public visaoRecuperarCalendario_ : String ;

		public transacaoSalvarCalendario : String ;
		public transacaoSalvarCalendario_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nome = objeto.nome;
			 this.urlBase = objeto.urlBase;
			 this.flagCarteiraCidadao = objeto.flagCarteiraCidadao;
			 this.flagCarteiraCidadao_ = Mentor.intToString(this.flagCarteiraCidadao);
			 this.visaoRecuperarCalendario = objeto.visaoRecuperarCalendario;
			 this.transacaoSalvarCalendario = objeto.transacaoSalvarCalendario;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.flagCarteiraCidadao = 0;
			 this.flagCarteiraCidadao_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.flagCarteiraCidadao = 0;
			 this.flagCarteiraCidadao_ = '0';

		}
			}

			this.flagCarteiraCidadaoFormatadoLista.push(new formatadoLista(0,"Não"));
			this.flagCarteiraCidadaoFormatadoLista.push(new formatadoLista(1,"Sim"));

		}

}


export class Associado extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.Associado';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Associado(lista[x]));
			return retorno;
		}
	}

		public data_nascimento : Date ;
		public data_nascimento_ : String ;
		get data_nascimentoFormatado(): String {
			if(typeof(this.data_nascimento) != 'undefined' && this.data_nascimento != null  )
			return Mentor.dateToString(this.data_nascimento);
			else
				return  '' ;
		}
		set data_nascimentoFormatado(valor: String) {
			this.data_nascimento_ =  valor;
			if(replaceAll(this.data_nascimento_,"_","").length ==10)
				this.data_nascimento =  Mentor.stringToDate(valor);
		}
		get data_nascimentoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.data_nascimento)
		}
		set data_nascimentoFormatadoIso(valor: String) {
			this.data_nascimento =  Mentor.stringToDateIso(valor);
			this.data_nascimento_ =  Mentor.dateToString(this.data_nascimento);
		}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public cpf : String ;
		public cpf_ : String ;

		public orgao_emissor : String ;
		public orgao_emissor_ : String ;

		public identidade : String ;
		public identidade_ : String ;

		public fone_residencial : String ;
		public fone_residencial_ : String ;

		public fone_cel : String ;
		public fone_cel_ : String ;

		public cartao_sus : String ;
		public cartao_sus_ : String ;

		public tipo_sanguineo : String ;
		public tipo_sanguineo_ : String ;

		public nome_mae : String ;
		public nome_mae_ : String ;

		public nome : String ;
		public nome_ : String ;

		public num_nis_pessoa_atual : number ;
		public num_nis_pessoa_atual_ : String ;
		get num_nis_pessoa_atualSimNao(){ if (this.num_nis_pessoa_atual == 1) return true; else return false;}
		set num_nis_pessoa_atualSimNao(flag){ if (flag) this.num_nis_pessoa_atual = 1; else this.num_nis_pessoa_atual = 0;}
		get num_nis_pessoa_atualFormatado(): String {
			return (this.num_nis_pessoa_atual_)
		}
		set num_nis_pessoa_atualFormatado(valor: String) {
			this.num_nis_pessoa_atual_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.num_nis_pessoa_atual =  Mentor.stringToMoeda(valor);
		}

		public nom_apelido_pessoa : String ;
		public nom_apelido_pessoa_ : String ;

		public nom_pais_origem_pessoa : String ;
		public nom_pais_origem_pessoa_ : String ;
		public domicilio : Domicilio ;
		public tipoDependente : TipoDependente ;
		public dependenteDe : Associado ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
				 if(typeof(objeto.data_nascimento_) != 'undefined') { try{ 
 this.data_nascimento_ = objeto.data_nascimento_ ;
			 this.data_nascimento = Mentor.stringToDate(objeto.data_nascimento_) ;
			 this.data_nascimentoFormatado = (objeto.data_nascimento_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.data_nascimento = Mentor.stringToDate(objeto.data_nascimentoFormatado) ;
			 this.data_nascimento_ = (objeto.data_nascimentoFormatado) ;}
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.cpf = objeto.cpf;
			 this.orgao_emissor = objeto.orgao_emissor;
			 this.identidade = objeto.identidade;
			 this.fone_residencial = objeto.fone_residencial;
			 this.fone_cel = objeto.fone_cel;
			 this.cartao_sus = objeto.cartao_sus;
			 this.tipo_sanguineo = objeto.tipo_sanguineo;
			 this.nome_mae = objeto.nome_mae;
			 this.nome = objeto.nome;
			 this.num_nis_pessoa_atual = objeto.num_nis_pessoa_atual;
			 this.nom_apelido_pessoa = objeto.nom_apelido_pessoa;
			 this.nom_pais_origem_pessoa = objeto.nom_pais_origem_pessoa;

			if(objeto.domicilio != null)
				this.domicilio = new Domicilio(objeto.domicilio);

			if(objeto.tipoDependente != null)
				this.tipoDependente = new TipoDependente(objeto.tipoDependente);

			if(objeto.dependenteDe != null)
				this.dependenteDe = new Associado(objeto.dependenteDe);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.data_nascimento = new Date();
			 this.data_nascimento_ = (this.data_nascimentoFormatado) ;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.data_nascimento = new Date();
			 this.data_nascimento_ = (this.data_nascimentoFormatado) ;
			 this.codigo = 0;
			 this.codigo_ = '0';
				this.domicilio = new Domicilio('null');
				this.tipoDependente = new TipoDependente('null');
				this.dependenteDe = new Associado('null');

		}
			}


		}

}


export class EstadoCivil extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.acesso.beans.EstadoCivil';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new EstadoCivil(lista[x]));
			return retorno;
		}
	}

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;

			}else{
this.ionicFlagNovo = true;

		}
			}


		}

}


export class Domicilio extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.Domicilio';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new Domicilio(lista[x]));
			return retorno;
		}
	}

		public cod_familiar_fam : number ;
		public cod_familiar_fam_ : String ;
		get cod_familiar_famSimNao(){ if (this.cod_familiar_fam == 1) return true; else return false;}
		set cod_familiar_famSimNao(flag){ if (flag) this.cod_familiar_fam = 1; else this.cod_familiar_fam = 0;}
		get cod_familiar_famFormatado(): String {
			return (this.cod_familiar_fam_)
		}
		set cod_familiar_famFormatado(valor: String) {
			this.cod_familiar_fam_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.cod_familiar_fam =  Mentor.stringToMoeda(valor);
		}
		public associados : Associado[] ;
		public domiciliosCras : DomicilioCras[] ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.cod_familiar_fam = objeto.cod_familiar_fam;

			if(objeto.associados != null){
				this.associados = new Array();
				for(let x:number = 0;x<objeto.associados.length;x++)
				this.associados.push(new Associado(objeto.associados[x]))
			}

			if(objeto.domiciliosCras != null){
				this.domiciliosCras = new Array();
				for(let x:number = 0;x<objeto.domiciliosCras.length;x++)
				this.domiciliosCras.push(new DomicilioCras(objeto.domiciliosCras[x]))
			}

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;

			}else{
this.ionicFlagNovo = true;

		}
			}


		}

}


export class TipoDependente extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.acesso.beans.TipoDependente';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new TipoDependente(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nome : String ;
		public nome_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nome = objeto.nome;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class ArtefatoCras extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.assistenciaSocial.beans.ArtefatoCras';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new ArtefatoCras(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public dataCadastro : Date ;
		public dataCadastro_ : String ;
		get dataCadastroFormatado(): String {
			if(typeof(this.dataCadastro) != 'undefined' && this.dataCadastro != null  )
			return Mentor.dateToString(this.dataCadastro);
			else
				return  '' ;
		}
		set dataCadastroFormatado(valor: String) {
			this.dataCadastro_ =  valor;
			if(replaceAll(this.dataCadastro_,"_","").length ==10)
				this.dataCadastro =  Mentor.stringToDate(valor);
		}
		get dataCadastroFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataCadastro)
		}
		set dataCadastroFormatadoIso(valor: String) {
			this.dataCadastro =  Mentor.stringToDateIso(valor);
			this.dataCadastro_ =  Mentor.dateToString(this.dataCadastro);
		}

		public descricao : String ;
		public descricao_ : String ;

		public flagUpload : number ;
		public flagUpload_ : String ;
		get flagUploadSimNao(){ if (this.flagUpload == 1) return true; else return false;}
		set flagUploadSimNao(flag){ if (flag) this.flagUpload = 1; else this.flagUpload = 0;}
		get flagUploadFormatado(): String {
			return (this.flagUpload_)
		}
		set flagUploadFormatado(valor: String) {
			this.flagUpload_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.flagUpload =  Mentor.stringToMoeda(valor);
		}

		public extensao : String ;
		public extensao_ : String ;

		public flagBeneficios : number ;
		public flagBeneficios_ : String ;
		get flagBeneficiosSimNao(){ if (this.flagBeneficios == 1) return true; else return false;}
		set flagBeneficiosSimNao(flag){ if (flag) this.flagBeneficios = 1; else this.flagBeneficios = 0;}
		get flagBeneficiosFormatado(): String {
			return (this.flagBeneficios_)
		}
		set flagBeneficiosFormatado(valor: String) {
			this.flagBeneficios_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.flagBeneficios =  Mentor.stringToMoeda(valor);
		}

		public dataUpload : Date ;
		public dataUpload_ : String ;
		get dataUploadFormatado(): String {
			if(typeof(this.dataUpload) != 'undefined' && this.dataUpload != null  )
			return Mentor.dateToString(this.dataUpload);
			else
				return  '' ;
		}
		set dataUploadFormatado(valor: String) {
			this.dataUpload_ =  valor;
			if(replaceAll(this.dataUpload_,"_","").length ==10)
				this.dataUpload =  Mentor.stringToDate(valor);
		}
		get dataUploadFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataUpload)
		}
		set dataUploadFormatadoIso(valor: String) {
			this.dataUpload =  Mentor.stringToDateIso(valor);
			this.dataUpload_ =  Mentor.dateToString(this.dataUpload);
		}

		public flagBeneficio : number ;
		public flagBeneficio_ : String ;
		get flagBeneficioSimNao(){ if (this.flagBeneficio == 1) return true; else return false;}
		set flagBeneficioSimNao(flag){ if (flag) this.flagBeneficio = 1; else this.flagBeneficio = 0;}
		get flagBeneficioFormatado(): String {
			return (this.flagBeneficio_)
		}
		set flagBeneficioFormatado(valor: String) {
			this.flagBeneficio_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.flagBeneficio =  Mentor.stringToMoeda(valor);
		}

		public tipoDocumento : number ;
		public tipoDocumento_ : String ;
		get tipoDocumentoSimNao(){ if (this.tipoDocumento == 1) return true; else return false;}
		set tipoDocumentoSimNao(flag){ if (flag) this.tipoDocumento = 1; else this.tipoDocumento = 0;}
		public tipoDocumentoFormatadoLista : formatadoLista[] = new Array();
		get tipoDocumentoFormatado(){  return Mentor.formatadoLista(this.tipoDocumentoFormatadoLista,this.tipoDocumento);}


		public flagApp : number ;
		public flagApp_ : String ;
		get flagAppSimNao(){ if (this.flagApp == 1) return true; else return false;}
		set flagAppSimNao(flag){ if (flag) this.flagApp = 1; else this.flagApp = 0;}
		get flagAppFormatado(): String {
			return (this.flagApp_)
		}
		set flagAppFormatado(valor: String) {
			this.flagApp_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.flagApp =  Mentor.stringToMoeda(valor);
		}
		public individuo : IndividuoNetgas ;
		public domicilioCras : DomicilioCras ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
				 if(typeof(objeto.dataCadastro_) != 'undefined') { try{ 
 this.dataCadastro_ = objeto.dataCadastro_ ;
			 this.dataCadastro = Mentor.stringToDate(objeto.dataCadastro_) ;
			 this.dataCadastroFormatado = (objeto.dataCadastro_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataCadastro = Mentor.stringToDate(objeto.dataCadastroFormatado) ;
			 this.dataCadastro_ = (objeto.dataCadastroFormatado) ;}
			 this.descricao = objeto.descricao;
			 this.flagUpload = objeto.flagUpload;
			 this.flagUpload_ = Mentor.intToString(this.flagUpload);
			 this.extensao = objeto.extensao;
			 this.flagBeneficios = objeto.flagBeneficios;
			 this.flagBeneficios_ = Mentor.intToString(this.flagBeneficios);
				 if(typeof(objeto.dataUpload_) != 'undefined') { try{ 
 this.dataUpload_ = objeto.dataUpload_ ;
			 this.dataUpload = Mentor.stringToDate(objeto.dataUpload_) ;
			 this.dataUploadFormatado = (objeto.dataUpload_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataUpload = Mentor.stringToDate(objeto.dataUploadFormatado) ;
			 this.dataUpload_ = (objeto.dataUploadFormatado) ;}
			 this.flagBeneficio = objeto.flagBeneficio;
			 this.flagBeneficio_ = Mentor.intToString(this.flagBeneficio);
			 this.tipoDocumento = objeto.tipoDocumento;
			 this.tipoDocumento_ = Mentor.intToString(this.tipoDocumento);
			 this.flagApp = objeto.flagApp;
			 this.flagApp_ = Mentor.intToString(this.flagApp);

			if(objeto.individuo != null)
				this.individuo = new IndividuoNetgas(objeto.individuo);

			if(objeto.domicilioCras != null)
				this.domicilioCras = new DomicilioCras(objeto.domicilioCras);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataCadastro = new Date();
			 this.dataCadastro_ = (this.dataCadastroFormatado) ;
			 this.flagUpload = 0;
			 this.flagUpload_ = '0,00';
			 this.flagBeneficios = 0;
			 this.flagBeneficios_ = '0';
			 this.dataUpload = new Date();
			 this.dataUpload_ = (this.dataUploadFormatado) ;
			 this.flagBeneficio = 0;
			 this.flagBeneficio_ = '0';
			 this.tipoDocumento = 0;
			 this.tipoDocumento_ = '0';
			 this.flagApp = 0;
			 this.flagApp_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataCadastro = new Date();
			 this.dataCadastro_ = (this.dataCadastroFormatado) ;
			 this.flagUpload = 0;
			 this.flagUpload_ = '0,00';
			 this.flagBeneficios = 0;
			 this.flagBeneficios_ = '0';
			 this.dataUpload = new Date();
			 this.dataUpload_ = (this.dataUploadFormatado) ;
			 this.flagBeneficio = 0;
			 this.flagBeneficio_ = '0';
			 this.tipoDocumento = 0;
			 this.tipoDocumento_ = '0';
			 this.flagApp = 0;
			 this.flagApp_ = '0';
				this.individuo = new IndividuoNetgas('null');
				this.domicilioCras = new DomicilioCras('null');

		}
			}

			this.tipoDocumentoFormatadoLista.push(new formatadoLista(0,"Identidade"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(1,"Carteira de Identidade"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(2,"CPF"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(3,"CNH"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(4,"Cartão SUS"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(5,"Reservista"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(6,"Certidao de Nascimento"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(7,"Comprovante Residencia"));
			this.tipoDocumentoFormatadoLista.push(new formatadoLista(8,"Comprovante Profissional"));

		}

}


export class PacienteTFD extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.PacienteTFD';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new PacienteTFD(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public bairro : String ;
		public bairro_ : String ;

		public cartaoSus : String ;
		public cartaoSus_ : String ;

		public cep : String ;
		public cep_ : String ;

		public complemento : String ;
		public complemento_ : String ;

		public cpf : String ;
		public cpf_ : String ;

		public endereco : String ;
		public endereco_ : String ;

		public identidade : String ;
		public identidade_ : String ;

		public nome : String ;
		public nome_ : String ;

		public nomeMae : String ;
		public nomeMae_ : String ;

		public numero : String ;
		public numero_ : String ;

		public dataNascimento : Date ;
		public dataNascimento_ : String ;
		get dataNascimentoFormatado(): String {
			if(typeof(this.dataNascimento) != 'undefined' && this.dataNascimento != null  )
			return Mentor.dateToString(this.dataNascimento);
			else
				return  '' ;
		}
		set dataNascimentoFormatado(valor: String) {
			this.dataNascimento_ =  valor;
			if(replaceAll(this.dataNascimento_,"_","").length ==10)
				this.dataNascimento =  Mentor.stringToDate(valor);
		}
		get dataNascimentoFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.dataNascimento)
		}
		set dataNascimentoFormatadoIso(valor: String) {
			this.dataNascimento =  Mentor.stringToDateIso(valor);
			this.dataNascimento_ =  Mentor.dateToString(this.dataNascimento);
		}

		public telefone : String ;
		public telefone_ : String ;

		public nis : String ;
		public nis_ : String ;

		public tipoSanguineo : number ;
		public tipoSanguineo_ : String ;
		get tipoSanguineoSimNao(){ if (this.tipoSanguineo == 1) return true; else return false;}
		set tipoSanguineoSimNao(flag){ if (flag) this.tipoSanguineo = 1; else this.tipoSanguineo = 0;}
		public tipoSanguineoFormatadoLista : formatadoLista[] = new Array();
		get tipoSanguineoFormatado(){  return Mentor.formatadoLista(this.tipoSanguineoFormatadoLista,this.tipoSanguineo);}


		public cidade : String ;
		public cidade_ : String ;

		public uf : String ;
		public uf_ : String ;

		public saude : number ;
		public saude_ : String ;
		get saudeSimNao(){ if (this.saude == 1) return true; else return false;}
		set saudeSimNao(flag){ if (flag) this.saude = 1; else this.saude = 0;}
		public saudeFormatadoLista : formatadoLista[] = new Array();
		get saudeFormatado(){  return Mentor.formatadoLista(this.saudeFormatadoLista,this.saude);}

		public agendamentos : AgendamentoVacina[] ;
		public individuoNetGas : IndividuoNetgas ;
		public criterio : CriterioVacinacao ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.bairro = objeto.bairro;
			 this.cartaoSus = objeto.cartaoSus;
			 this.cep = objeto.cep;
			 this.complemento = objeto.complemento;
			 this.cpf = objeto.cpf;
			 this.endereco = objeto.endereco;
			 this.identidade = objeto.identidade;
			 this.nome = objeto.nome;
			 this.nomeMae = objeto.nomeMae;
			 this.numero = objeto.numero;
				 if(typeof(objeto.dataNascimento_) != 'undefined') { try{ 
 this.dataNascimento_ = objeto.dataNascimento_ ;
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimento_) ;
			 this.dataNascimentoFormatado = (objeto.dataNascimento_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.dataNascimento = Mentor.stringToDate(objeto.dataNascimentoFormatado) ;
			 this.dataNascimento_ = (objeto.dataNascimentoFormatado) ;}
			 this.telefone = objeto.telefone;
			 this.nis = objeto.nis;
			 this.tipoSanguineo = objeto.tipoSanguineo;
			 this.tipoSanguineo_ = Mentor.intToString(this.tipoSanguineo);
			 this.cidade = objeto.cidade;
			 this.uf = objeto.uf;
			 this.saude = objeto.saude;
			 this.saude_ = Mentor.intToString(this.saude);

			if(objeto.agendamentos != null){
				this.agendamentos = new Array();
				for(let x:number = 0;x<objeto.agendamentos.length;x++)
				this.agendamentos.push(new AgendamentoVacina(objeto.agendamentos[x]))
			}

			if(objeto.individuoNetGas != null)
				this.individuoNetGas = new IndividuoNetgas(objeto.individuoNetGas);

			if(objeto.criterio != null)
				this.criterio = new CriterioVacinacao(objeto.criterio);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;
			 this.tipoSanguineo = 0;
			 this.tipoSanguineo_ = '0';
			 this.saude = 0;
			 this.saude_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dataNascimento = new Date();
			 this.dataNascimento_ = (this.dataNascimentoFormatado) ;
			 this.tipoSanguineo = 0;
			 this.tipoSanguineo_ = '0';
			 this.saude = 0;
			 this.saude_ = '0';
				this.individuoNetGas = new IndividuoNetgas('null');
				this.criterio = new CriterioVacinacao('null');

		}
			}

			this.tipoSanguineoFormatadoLista.push(new formatadoLista(1,"A +"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(2,"B +"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(3,"AB +"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(4,"O +"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(5,"A -"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(6,"B -"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(7,"AB -"));
			this.tipoSanguineoFormatadoLista.push(new formatadoLista(8,"O -"));
			this.saudeFormatadoLista.push(new formatadoLista(0,"Agendamento por Idade"));
			this.saudeFormatadoLista.push(new formatadoLista(1,"Profissional de Saúde"));
			this.saudeFormatadoLista.push(new formatadoLista(2,"Diabetes mellitus"));
			this.saudeFormatadoLista.push(new formatadoLista(3,"Pneumopatias cronicas graves"));
			this.saudeFormatadoLista.push(new formatadoLista(4,"Hipertensao arterial resistente e nos estagios 1,2 e 3 com lesao em orgao- alvo e/ou comorbidade"));
			this.saudeFormatadoLista.push(new formatadoLista(5,"Insuficiencia cardiaca (IC)"));
			this.saudeFormatadoLista.push(new formatadoLista(6,"Cor-pulmonale e Hipertensao pulmonar"));
			this.saudeFormatadoLista.push(new formatadoLista(7,"Cardiopatia hipertensiva"));
			this.saudeFormatadoLista.push(new formatadoLista(8,"Sindromes coronarianas"));
			this.saudeFormatadoLista.push(new formatadoLista(9,"Valvopatias"));
			this.saudeFormatadoLista.push(new formatadoLista(10,"Miocardiopatias e Pericardiopatias"));
			this.saudeFormatadoLista.push(new formatadoLista(11,"Doencas da Aorta, dos Grandes Vasos e Fistulas arteriovenosas"));
			this.saudeFormatadoLista.push(new formatadoLista(12,"Arritmias"));
			this.saudeFormatadoLista.push(new formatadoLista(13,"Cardiopatias congenita no adulto"));
			this.saudeFormatadoLista.push(new formatadoLista(14,"Proteses valvares e Dispositivos cardiacos implantados"));
			this.saudeFormatadoLista.push(new formatadoLista(15,"Doenca cerebrovascular"));
			this.saudeFormatadoLista.push(new formatadoLista(16,"Doenca renal cronica"));
			this.saudeFormatadoLista.push(new formatadoLista(17,"Pessoas transplantadas de órgãos sólidos e medula óssea:"));
			this.saudeFormatadoLista.push(new formatadoLista(18,"Anemia falciforme"));
			this.saudeFormatadoLista.push(new formatadoLista(19,"Obesidade morbida"));
			this.saudeFormatadoLista.push(new formatadoLista(20,"Sindrome de Down"));
			this.saudeFormatadoLista.push(new formatadoLista(21,"Cirrose hepatica"));
			this.saudeFormatadoLista.push(new formatadoLista(22,"Gestantes e Puerperas"));
			this.saudeFormatadoLista.push(new formatadoLista(23,"Pessoas vivendo com HIV"));
			this.saudeFormatadoLista.push(new formatadoLista(24,"Em uso de imunossupressores ou com Imunodeficiências primárias"));
			this.saudeFormatadoLista.push(new formatadoLista(25,"Paciêntes oncológicos que realizaram tratamentos quimioterápicos ou rádio terápicos nos últimos 6 meses"));
			this.saudeFormatadoLista.push(new formatadoLista(26,"Neoplasias hematológicas"));
			this.saudeFormatadoLista.push(new formatadoLista(30,"Pessoas com Deficiência institucionalizada"));
			this.saudeFormatadoLista.push(new formatadoLista(31,"Povos Indígenas vivendo em Terras Indígenas"));
			this.saudeFormatadoLista.push(new formatadoLista(32,"Povos e comunidades tradicionais Ribeirinhas"));
			this.saudeFormatadoLista.push(new formatadoLista(33,"Povos e comunidades tradicionais Quilombolas"));
			this.saudeFormatadoLista.push(new formatadoLista(34,"Pessoas com Deficiência Permanente com BPC"));
			this.saudeFormatadoLista.push(new formatadoLista(35,"Pessoas com Deficiência Permanente  sem BPC"));
			this.saudeFormatadoLista.push(new formatadoLista(36,"Pessoas em Situação de Rua"));
			this.saudeFormatadoLista.push(new formatadoLista(37,"Funcionários do Sistema de Privação de Liberdade"));
			this.saudeFormatadoLista.push(new formatadoLista(38,"População Privada de Liberdade"));
			this.saudeFormatadoLista.push(new formatadoLista(39,"Trabalhadores da Educação do Ensino Básico"));
			this.saudeFormatadoLista.push(new formatadoLista(40,"Trabalhadores da Educação do Ensino Superior"));
			this.saudeFormatadoLista.push(new formatadoLista(41,"Forças de Segurança e Salvamento"));
			this.saudeFormatadoLista.push(new formatadoLista(42,"Forças Armadas"));
			this.saudeFormatadoLista.push(new formatadoLista(43,"Trabalhadores de Transporte Coletivo Rodoviário de Passageiros"));
			this.saudeFormatadoLista.push(new formatadoLista(44,"Trabalhadores de Transporte Metroviário e Ferroviário"));
			this.saudeFormatadoLista.push(new formatadoLista(45,"Trabalhadores de Transporte Aéreo"));
			this.saudeFormatadoLista.push(new formatadoLista(46,"Trabalhadores de Transporte de Aquaviário"));
			this.saudeFormatadoLista.push(new formatadoLista(47,"Caminhoneiros"));
			this.saudeFormatadoLista.push(new formatadoLista(48,"Trabalhadores Portuários"));
			this.saudeFormatadoLista.push(new formatadoLista(49,"Trabalhadores Industriais"));
			this.saudeFormatadoLista.push(new formatadoLista(50,"Trabalhadores da limpeza urbana e manejo de resíduos sólidos"));

		}

}


export class AgendamentoVacina extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.AgendamentoVacina';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new AgendamentoVacina(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public dose : number ;
		public dose_ : String ;
		get doseSimNao(){ if (this.dose == 1) return true; else return false;}
		set doseSimNao(flag){ if (flag) this.dose = 1; else this.dose = 0;}
		public doseFormatadoLista : formatadoLista[] = new Array();
		get doseFormatado(){  return Mentor.formatadoLista(this.doseFormatadoLista,this.dose);}


		public confirmado : number ;
		public confirmado_ : String ;
		get confirmadoSimNao(){ if (this.confirmado == 1) return true; else return false;}
		set confirmadoSimNao(flag){ if (flag) this.confirmado = 1; else this.confirmado = 0;}
		public confirmadoFormatadoLista : formatadoLista[] = new Array();
		get confirmadoFormatado(){  return Mentor.formatadoLista(this.confirmadoFormatadoLista,this.confirmado);}

		public paciente : PacienteTFD ;
		public bloco : BlocoAgendamento ;
		public laboratorio : LaboratorioVacina ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.dose = objeto.dose;
			 this.dose_ = Mentor.intToString(this.dose);
			 this.confirmado = objeto.confirmado;
			 this.confirmado_ = Mentor.intToString(this.confirmado);

			if(objeto.paciente != null)
				this.paciente = new PacienteTFD(objeto.paciente);

			if(objeto.bloco != null)
				this.bloco = new BlocoAgendamento(objeto.bloco);

			if(objeto.laboratorio != null)
				this.laboratorio = new LaboratorioVacina(objeto.laboratorio);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dose = 0;
			 this.dose_ = '0';
			 this.confirmado = 0;
			 this.confirmado_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.dose = 0;
			 this.dose_ = '0';
			 this.confirmado = 0;
			 this.confirmado_ = '0';
				this.paciente = new PacienteTFD('null');
				this.bloco = new BlocoAgendamento('null');
				this.laboratorio = new LaboratorioVacina('null');

		}
			}

			this.doseFormatadoLista.push(new formatadoLista(0,"1ª Dose"));
			this.doseFormatadoLista.push(new formatadoLista(1,"2ª Dose"));
			this.confirmadoFormatadoLista.push(new formatadoLista(0,"Não"));
			this.confirmadoFormatadoLista.push(new formatadoLista(1,"Sim"));

		}

}


export class DiaVacinacao extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.DiaVacinacao';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new DiaVacinacao(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public data : Date ;
		public data_ : String ;
		get dataFormatado(): String {
			if(typeof(this.data) != 'undefined' && this.data != null  )
			return Mentor.dateToString(this.data);
			else
				return  '' ;
		}
		set dataFormatado(valor: String) {
			this.data_ =  valor;
			if(replaceAll(this.data_,"_","").length ==10)
				this.data =  Mentor.stringToDate(valor);
		}
		get dataFormatadoIso(): String {
			return  Mentor.dateToStringIso(this.data)
		}
		set dataFormatadoIso(valor: String) {
			this.data =  Mentor.stringToDateIso(valor);
			this.data_ =  Mentor.dateToString(this.data);
		}
		public postoSaude : PostoSaude ;
		public blocosAgendamento : BlocoAgendamento[] ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
				 if(typeof(objeto.data_) != 'undefined') { try{ 
 this.data_ = objeto.data_ ;
			 this.data = Mentor.stringToDate(objeto.data_) ;
			 this.dataFormatado = (objeto.data_) ;
} catch(err){alert(err); 
 throw err;} 
 }
else{
			 this.data = Mentor.stringToDate(objeto.dataFormatado) ;
			 this.data_ = (objeto.dataFormatado) ;}

			if(objeto.postoSaude != null)
				this.postoSaude = new PostoSaude(objeto.postoSaude);

			if(objeto.blocosAgendamento != null){
				this.blocosAgendamento = new Array();
				for(let x:number = 0;x<objeto.blocosAgendamento.length;x++)
				this.blocosAgendamento.push(new BlocoAgendamento(objeto.blocosAgendamento[x]))
			}

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.data = new Date();
			 this.data_ = (this.dataFormatado) ;

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.data = new Date();
			 this.data_ = (this.dataFormatado) ;
				this.postoSaude = new PostoSaude('null');

		}
			}


		}

}


export class PostoSaude extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.PostoSaude';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new PostoSaude(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public bairro : String ;
		public bairro_ : String ;

		public cep : String ;
		public cep_ : String ;

		public endereco : String ;
		public endereco_ : String ;

		public nome : String ;
		public nome_ : String ;

		public sigla : String ;
		public sigla_ : String ;

		public cidade : String ;
		public cidade_ : String ;

		public uf : String ;
		public uf_ : String ;

		public latitude : String ;
		public latitude_ : String ;

		public longitude : String ;
		public longitude_ : String ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.bairro = objeto.bairro;
			 this.cep = objeto.cep;
			 this.endereco = objeto.endereco;
			 this.nome = objeto.nome;
			 this.sigla = objeto.sigla;
			 this.cidade = objeto.cidade;
			 this.uf = objeto.uf;
			 this.latitude = objeto.latitude;
			 this.longitude = objeto.longitude;

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';

		}
			}


		}

}


export class BlocoAgendamento extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.BlocoAgendamento';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new BlocoAgendamento(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public quantidadeDisponivel : number ;
		public quantidadeDisponivel_ : String ;
		get quantidadeDisponivelSimNao(){ if (this.quantidadeDisponivel == 1) return true; else return false;}
		set quantidadeDisponivelSimNao(flag){ if (flag) this.quantidadeDisponivel = 1; else this.quantidadeDisponivel = 0;}
		get quantidadeDisponivelFormatado(): String {
			return (this.quantidadeDisponivel_)
		}
		set quantidadeDisponivelFormatado(valor: String) {
			this.quantidadeDisponivel_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.quantidadeDisponivel =  Mentor.stringToMoeda(valor);
		}

		public horaInicio : String ;
		public horaInicio_ : String ;

		public horaFim : String ;
		public horaFim_ : String ;

		public saude : number ;
		public saude_ : String ;
		get saudeSimNao(){ if (this.saude == 1) return true; else return false;}
		set saudeSimNao(flag){ if (flag) this.saude = 1; else this.saude = 0;}
		public saudeFormatadoLista : formatadoLista[] = new Array();
		get saudeFormatado(){  return Mentor.formatadoLista(this.saudeFormatadoLista,this.saude);}

		public agendamentos : AgendamentoVacina[] ;
		public dia : DiaVacinacao ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.quantidadeDisponivel = objeto.quantidadeDisponivel;
			 this.quantidadeDisponivel_ = Mentor.intToString(this.quantidadeDisponivel);
			 this.horaInicio = objeto.horaInicio;
			 this.horaFim = objeto.horaFim;
			 this.saude = objeto.saude;
			 this.saude_ = Mentor.intToString(this.saude);

			if(objeto.agendamentos != null){
				this.agendamentos = new Array();
				for(let x:number = 0;x<objeto.agendamentos.length;x++)
				this.agendamentos.push(new AgendamentoVacina(objeto.agendamentos[x]))
			}

			if(objeto.dia != null)
				this.dia = new DiaVacinacao(objeto.dia);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.quantidadeDisponivel = 0;
			 this.quantidadeDisponivel_ = '0';
			 this.saude = 0;
			 this.saude_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.quantidadeDisponivel = 0;
			 this.quantidadeDisponivel_ = '0';
			 this.saude = 0;
			 this.saude_ = '0';
				this.dia = new DiaVacinacao('null');

		}
			}

			this.saudeFormatadoLista.push(new formatadoLista(0,"Idade sem critério Especial"));
			this.saudeFormatadoLista.push(new formatadoLista(1,"Profissional de Saúde"));
			this.saudeFormatadoLista.push(new formatadoLista(100,"Todos"));
			this.saudeFormatadoLista.push(new formatadoLista(101,"Todos com Comorbidade"));
			this.saudeFormatadoLista.push(new formatadoLista(2,"Diabetes mellitus"));
			this.saudeFormatadoLista.push(new formatadoLista(3,"Pneumopatias cronicas graves"));
			this.saudeFormatadoLista.push(new formatadoLista(4,"Hipertensao arterial resistente e nos estagios 1,2 e 3 com lesao em orgao- alvo e/ou comorbidade"));
			this.saudeFormatadoLista.push(new formatadoLista(5,"Insuficiencia cardiaca (IC)"));
			this.saudeFormatadoLista.push(new formatadoLista(6,"Cor-pulmonale e Hipertensão pulmonar"));
			this.saudeFormatadoLista.push(new formatadoLista(7,"Cardiopatia hipertensiva"));
			this.saudeFormatadoLista.push(new formatadoLista(8,"Sindromes coronarianas"));
			this.saudeFormatadoLista.push(new formatadoLista(9,"Valvopatias"));
			this.saudeFormatadoLista.push(new formatadoLista(10,"Miocardiopatias e Pericardiopatias"));
			this.saudeFormatadoLista.push(new formatadoLista(11,"Doencas da Aorta, dos Grandes Vasos e Fistulas arteriovenosas"));
			this.saudeFormatadoLista.push(new formatadoLista(12,"Arritmias"));
			this.saudeFormatadoLista.push(new formatadoLista(13,"Cardiopatias congenita no adulto"));
			this.saudeFormatadoLista.push(new formatadoLista(14,"Pro?teses valvares e Dispositivos cardiacos implantados"));
			this.saudeFormatadoLista.push(new formatadoLista(15,"Doenca cerebrovascular"));
			this.saudeFormatadoLista.push(new formatadoLista(16,"Doenca renal cronica"));
			this.saudeFormatadoLista.push(new formatadoLista(17,"Pessoas transplantadas de órgãos sólidos e medula óssea:"));
			this.saudeFormatadoLista.push(new formatadoLista(18,"Anemia falciforme"));
			this.saudeFormatadoLista.push(new formatadoLista(19,"Obesidade morbida"));
			this.saudeFormatadoLista.push(new formatadoLista(20,"Sindrome de Down"));
			this.saudeFormatadoLista.push(new formatadoLista(21,"Cirrose hepatica"));
			this.saudeFormatadoLista.push(new formatadoLista(22,"Gestantes e Puerperas"));
			this.saudeFormatadoLista.push(new formatadoLista(23,"Pessoas vivendo com HIV"));
			this.saudeFormatadoLista.push(new formatadoLista(24,"Em uso de imunossupressores ou com Imunodeficiências primárias"));
			this.saudeFormatadoLista.push(new formatadoLista(25,"Paciêntes oncológicos que realizaram tratamentos quimioterápicos ou rádio terápicos nos últimos 6 meses"));
			this.saudeFormatadoLista.push(new formatadoLista(26,"Neoplasias hematológicas"));
			this.saudeFormatadoLista.push(new formatadoLista(30,"Pessoas com Deficiência institucionalizada"));
			this.saudeFormatadoLista.push(new formatadoLista(31,"Povos Indígenas vivendo em Terras Indígenas"));
			this.saudeFormatadoLista.push(new formatadoLista(32,"Povos e comunidades tradicionais Ribeirinhas"));
			this.saudeFormatadoLista.push(new formatadoLista(33,"Povos e comunidades tradicionais Quilombolas"));
			this.saudeFormatadoLista.push(new formatadoLista(34,"Pessoas com Deficiência Permanente com BPC"));
			this.saudeFormatadoLista.push(new formatadoLista(35,"Pessoas com Deficiência Permanente  sem BPC"));
			this.saudeFormatadoLista.push(new formatadoLista(36,"Pessoas em Situação de Rua"));
			this.saudeFormatadoLista.push(new formatadoLista(37,"Funcionários do Sistema de Privação de Liberdade"));
			this.saudeFormatadoLista.push(new formatadoLista(38,"População Privada de Liberdade"));
			this.saudeFormatadoLista.push(new formatadoLista(39,"Trabalhadores da Educação do Ensino Básico"));
			this.saudeFormatadoLista.push(new formatadoLista(40,"Trabalhadores da Educação do Ensino Superior"));
			this.saudeFormatadoLista.push(new formatadoLista(41,"Forças de Segurança e Salvamento"));
			this.saudeFormatadoLista.push(new formatadoLista(42,"Forças Armadas"));
			this.saudeFormatadoLista.push(new formatadoLista(43,"Trabalhadores de Transporte Coletivo Rodoviário de Passageiros"));
			this.saudeFormatadoLista.push(new formatadoLista(44,"Trabalhadores de Transporte Metroviário e Ferroviário"));
			this.saudeFormatadoLista.push(new formatadoLista(45,"Trabalhadores de Transporte Aéreo"));
			this.saudeFormatadoLista.push(new formatadoLista(46,"Trabalhadores de Transporte de Aquaviário"));
			this.saudeFormatadoLista.push(new formatadoLista(47,"Caminhoneiros"));
			this.saudeFormatadoLista.push(new formatadoLista(48,"Trabalhadores Portuários"));
			this.saudeFormatadoLista.push(new formatadoLista(49,"Trabalhadores Industriais"));
			this.saudeFormatadoLista.push(new formatadoLista(50,"Trabalhadores da limpeza urbana e manejo de resíduos sólidos"));

		}

}


export class CriterioVacinacao extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.CriterioVacinacao';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new CriterioVacinacao(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public id : number ;
		public id_ : String ;
		get idSimNao(){ if (this.id == 1) return true; else return false;}
		set idSimNao(flag){ if (flag) this.id = 1; else this.id = 0;}
		get idFormatado(): String {
			return (this.id_)
		}
		set idFormatado(valor: String) {
			this.id_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.id =  Mentor.stringToMoeda(valor);
		}

		public nome : String ;
		public nome_ : String ;

		public visivel : number ;
		public visivel_ : String ;
		get visivelSimNao(){ if (this.visivel == 1) return true; else return false;}
		set visivelSimNao(flag){ if (flag) this.visivel = 1; else this.visivel = 0;}
		public visivelFormatadoLista : formatadoLista[] = new Array();
		get visivelFormatado(){  return Mentor.formatadoLista(this.visivelFormatadoLista,this.visivel);}

		public idadeVacina : IdadeVacina ;

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.id = objeto.id;
			 this.id_ = Mentor.intToString(this.id);
			 this.nome = objeto.nome;
			 this.visivel = objeto.visivel;
			 this.visivel_ = Mentor.intToString(this.visivel);

			if(objeto.idadeVacina != null)
				this.idadeVacina = new IdadeVacina(objeto.idadeVacina);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.id = 0;
			 this.id_ = '0';
			 this.visivel = 0;
			 this.visivel_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.id = 0;
			 this.id_ = '0';
			 this.visivel = 0;
			 this.visivel_ = '0';
				this.idadeVacina = new IdadeVacina('null');

		}
			}

			this.visivelFormatadoLista.push(new formatadoLista(0,"Não"));
			this.visivelFormatadoLista.push(new formatadoLista(1,"Sim"));

		}

}


export class LaboratorioVacina extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.LaboratorioVacina';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new LaboratorioVacina(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public nome : String ;
		public nome_ : String ;

		public qtdDias : number ;
		public qtdDias_ : String ;
		get qtdDiasSimNao(){ if (this.qtdDias == 1) return true; else return false;}
		set qtdDiasSimNao(flag){ if (flag) this.qtdDias = 1; else this.qtdDias = 0;}
		get qtdDiasFormatado(): String {
			return (this.qtdDias_)
		}
		set qtdDiasFormatado(valor: String) {
			this.qtdDias_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.qtdDias =  Mentor.stringToMoeda(valor);
		}

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.nome = objeto.nome;
			 this.qtdDias = objeto.qtdDias;
			 this.qtdDias_ = Mentor.intToString(this.qtdDias);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.qtdDias = 0;
			 this.qtdDias_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.qtdDias = 0;
			 this.qtdDias_ = '0';

		}
			}


		}

}


export class IdadeVacina extends ionicClasseBase {
public static mentorNomeClasse = 'br.com.saude.beans.IdadeVacina';

	static criaColecao(lista: any){
		if(lista!=null){
			var retorno = new Array();
			for(let x = 0;x<lista.length;x++)
				retorno.push(new IdadeVacina(lista[x]));
			return retorno;
		}
	}

		public codigo : number ;
		public codigo_ : String ;
		get codigoSimNao(){ if (this.codigo == 1) return true; else return false;}
		set codigoSimNao(flag){ if (flag) this.codigo = 1; else this.codigo = 0;}
		get codigoFormatado(): String {
			return (this.codigo_)
		}
		set codigoFormatado(valor: String) {
			this.codigo_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.codigo =  Mentor.stringToMoeda(valor);
		}

		public idade : number ;
		public idade_ : String ;
		get idadeSimNao(){ if (this.idade == 1) return true; else return false;}
		set idadeSimNao(flag){ if (flag) this.idade = 1; else this.idade = 0;}
		get idadeFormatado(): String {
			return (this.idade_)
		}
		set idadeFormatado(valor: String) {
			this.idade_ =  (valor);
			if(replaceAll(valor," ","") != "")
				this.idade =  Mentor.stringToMoeda(valor);
		}

		constructor(objeto:any){
		super();
		if(objeto != null && objeto != 'null'){
if(typeof(objeto.ionicFlagNovo) == 'undefined') this.ionicFlagNovo = false; else this.ionicFlagNovo = objeto.ionicFlagNovo;
			 this.codigo = objeto.codigo;
			 this.codigo_ = Mentor.intToString(this.codigo);
			 this.idade = objeto.idade;
			 this.idade_ = Mentor.intToString(this.idade);

		}
		else{
		if((objeto) == 'null'){
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.idade = 0;
			 this.idade_ = '0';

			}else{
this.ionicFlagNovo = true;
			 this.codigo = 0;
			 this.codigo_ = '0';
			 this.idade = 0;
			 this.idade_ = '0';

		}
			}


		}

}

