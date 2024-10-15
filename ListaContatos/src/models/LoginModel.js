const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.error = [];
        this.user = null;
    }

    async register() {
        const userExists = await this.userExists(); // Corrigido para usar await
        if(userExists) {
            this.error.push('Usuário já existe');
            return;
        }
        this.cleanUp();
        this.valida();
        //console.log(this.body)
        if (this.error.length > 0) {
            return;
        } 
        try {
            const salt = bcryptjs.genSaltSync(); // Gera um salt
            this.body.password = await bcryptjs.hashSync(this.body.password, salt); // Criptografa a senha
            this.user = await LoginModel.create(this.body); // Corrigido para usar this.body
        } catch (e) {
            this.error.push('Erro ao registrar o usuário.');
        }
    }

    async userExists() {
        const userCheck = await LoginModel.findOne({ email: this.body.email})
        if(userCheck !== null) {
            return true; 
        } else {
            return false;
        }
    }

    valida() {
        // Validação de e-mail e senha
        //console.log(!validator.isEmail(this.body.email))
        if (!validator.isEmail(this.body.email)) {
            this.error.push('E-mail inválido.');
        }
        //console.log(this.body.password.length)
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.error.push('Senha precisa ter entre 3 e 50 caracteres.');
        }
        //console.log(this.error)
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }

    async login() {
        this.cleanUp();
        this.valida();
        if (this.error.length > 0) {
            return;
        }
    
        // Log para verificar o que `findOne` está retornando
        const userCheck = await LoginModel.findOne({ email: this.body.email });
        //console.log("Resultado da busca por usuário:", userCheck); // Verificar o que está retornando
    
        if (userCheck === null) {
            this.error.push('Usuário não existe.');
            //console.log("Usuário não encontrado, erro adicionado:", this.error); // Verificar se está entrando aqui
            return;
        }
    
        if (!bcryptjs.compareSync(this.body.password, userCheck.password)) {
            this.error.push('Senha inválida.');
            this.user = null;
            //console.log("Senha inválida, erro adicionado:", this.error); // Verificar o que acontece aqui
            return;
        }
    
        this.user = userCheck;
    }    
}

module.exports = Login;
