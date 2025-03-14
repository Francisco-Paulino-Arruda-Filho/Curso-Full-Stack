type PropertyDescriptor = {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(valor: any): void;
};

function decoratoPropriedade(target: any, key: string): any {
    let valorPropriedade: any;
    return {
        get(): any {
            return valorPropriedade;
        },
        set(valor: any): void {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}

export class UmaPessoa {
    constructor(public nome: string, public sobrenome: string, public idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    metodoMsg(msg: string): string {
        return `${this.nomeCompleto}: ${msg}`;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Luiz', 'Miranda', 30);
console.log(pessoa.nomeCompleto);
console.log(pessoa.metodoMsg('Olá!'));

function decoradorDeMetodo(
    target: any,
    key: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    console.log(target);
    console.log(key);
    console.log(descriptor);

    return {
        value: function (...args: string[]): string {
            return args[0].toUpperCase();
        },
    };
}

/*function decoratoPropriedade(target: any, key: string): any {
    let valorPropriedade: any;
    return {
        get(): any {
            return valorPropriedade;
        },
        set(valor: any): void {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}*/

function decoratorPropriedadeEspelho(target: any, key: string): any {
    let valorPropriedade: any;
    return {
        get(): any {
            return valorPropriedade;
        },
        set(valor: any): void {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}
