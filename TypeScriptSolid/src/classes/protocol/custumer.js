"use strict";
exports.__esModule = true;
exports.EnterpriseCustomer = exports.IndividualCustomer = void 0;
var IndividualCustomer = /** @class */ (function () {
    function IndividualCustomer(name, lastName, cpf) {
        this.name = name;
        this.lastName = lastName;
        this.cpf = cpf;
    }
    IndividualCustomer.prototype.getName = function () {
        return this.name + ' ' + this.lastName;
    };
    IndividualCustomer.prototype.getIDN = function () {
        return this.cpf;
    };
    return IndividualCustomer;
}());
exports.IndividualCustomer = IndividualCustomer;
var EnterpriseCustomer = /** @class */ (function () {
    function EnterpriseCustomer(name, lastName, cnpj) {
        this.name = name;
        this.lastName = lastName;
        this.cnpj = cnpj;
    }
    EnterpriseCustomer.prototype.getName = function () {
        return this.name + ' ' + this.lastName;
    };
    EnterpriseCustomer.prototype.getIDN = function () {
        return this.cnpj;
    };
    return EnterpriseCustomer;
}());
exports.EnterpriseCustomer = EnterpriseCustomer;
// Compare this snippet from TypeScriptSolid/src/classes/interfaces/CardItem.ts:
