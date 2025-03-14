
export class Personagem {
    private nome: string;
    private nivel: number;
    private vida: number;
    private mana: number;

    constructor(nome: string, nivel: number, vida: number, mana: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.mana = mana;
    }

    public getNome(): string {
        return this.nome;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getVida(): number {
        return this.vida;
    }

    public getMana(): number {
        return this.mana;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setVida(vida: number): void {
        this.vida = vida;
    }

    public setMana(mana: number): void {
        this.mana = mana;
    }

    public perderVida(dano: number): void {
        this.vida -= dano;
    }
}
