let id = 0;

export class Dicas{
    constructor(titulo, descricao, data){
        this.id = id++
        this.titulo = this.validarTitulo(titulo);
        this.descricao = descricao;
        this.data = data;
    }

    validarTitulo(titulo){
        if(typeof titulo === 'string' && titulo.length >= 4){
            return titulo
        }else{
            throw new Error('Titulo precisa conter só caracteres e ser maior ou igual a quatro letras')
        }
    }
}