const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    criadoEm: { type: Date, required: false, default: Date.now },
    telefone: { type: String, required: false, default: '' },
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

// Definindo o construtor de forma correta
class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }
    // Método register
    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }
    // Método valida
    valida() {
        this.cleanUp();

        if (this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido.');
        }
        if (!this.body.nome) {
            this.errors.push('Nome é um campo obrigatório.');
        }
        if (!this.body.telefone && !this.body.email) {
            this.errors.push('Você precisa cadastrar pelo menos telefone ou e-mail.');
        }
    }
    // Método cleanUp
    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome || '', // Certifique-se de que "sobrenome" seja incluído
            email: this.body.email || '', // Certifique-se de que "email" seja incluído
            telefone: this.body.telefone || '' // Certifique-se de que "telefone" seja incluído
        };
    }
    static async buscaId(id) {
        if(typeof id !== 'string') return;
        else {
            const user = await ContatoModel.findById(id);
            return user;
        }
    }

    async edit(id) {
        if(typeof id !== 'string') return;
        this.valida();
        if(this.errors.length > 0) return;
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    static async buscaContatos() {
        const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
        return contatos;
    }

    static async delete(id) {
        if(typeof id !== 'string') return;
        const contato = await ContatoModel.findOneAndDelete({ _id: id });
        return contato;
    }
}




module.exports = Contato;
