
export class Ferramenta {
    escrever(): void {
        console.log('Escrevendo...');
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log('Escrevendo à caneta...');
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log('Escrevendo à máquina de escrever...');
    }
}

