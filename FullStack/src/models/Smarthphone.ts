

import DispositivoEletronico from './DispositivoEletronico';

class Smartphone extends DispositivoEletronico {
    private _appsInstalados: string[];

    constructor(nome: string, marca: string) {
        super(nome, marca);
        this._appsInstalados = []; // Inicialmente sem apps instalados
    }

    // Método para instalar um aplicativo
    instalarApp(app: string): void {
        if (this._appsInstalados.includes(app)) {
            console.log(`O aplicativo ${app} já está instalado.`);
        } else {
            this._appsInstalados.push(app);
            console.log(`Aplicativo ${app} instalado com sucesso.`);
        }
    }

    // Método para listar aplicativos instalados
    listarApps(): void {
        if (this._appsInstalados.length === 0) {
            console.log("Nenhum aplicativo instalado.");
        } else {
            console.log("Aplicativos instalados:", this._appsInstalados.join(", "));
        }
    }

    // Método para remover um aplicativo
    removerApp(app: string): void {
        const index = this._appsInstalados.indexOf(app);
        if (index > -1) {
            this._appsInstalados.splice(index, 1);
            console.log(`Aplicativo ${app} removido com sucesso.`);
        } else {
            console.log(`O aplicativo ${app} não está instalado.`);
        }
    }
}

export default Smartphone