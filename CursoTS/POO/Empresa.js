"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, telefone, cnpj) {
        this.nome = nome;
        this.telefone = telefone;
        this.cnpj = cnpj;
    }
    return Empresa;
}());
exports.Empresa = Empresa;
var empresa = new Empresa('Empresa 1', '123456789', '123456789');
console.log(empresa);
