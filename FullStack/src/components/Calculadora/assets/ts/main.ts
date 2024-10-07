class Calculadora {
  display: HTMLInputElement;
  clickHandler: (event: MouseEvent) => void = () => {};
  keyupHandler: (e: KeyboardEvent) => void = () => {};

  constructor() {
    const displayElement = document.querySelector('input.display');
    if (displayElement instanceof HTMLInputElement) {
      this.display = displayElement;
    } else {
      throw new Error('Elemento .display não encontrado ou não é um input');
    }
  }

  inicia(): void {
    this.capturaCliques();
    this.capturaEnter();
  }

  capturaEnter(): void {
    this.keyupHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        this.realizaConta();
      }
    };
    document.addEventListener('keyup', this.keyupHandler);
  }

  capturaCliques(): void {
    this.clickHandler = (event: MouseEvent) => {
      const el = event.target as HTMLElement;
      console.log('chameiaqui')
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    };
    document.addEventListener('click', this.clickHandler);
  }

  realizaConta(): void {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);
    } catch {
      alert('Conta inválida');
      return;
    }
  }

  addNumDisplay(el: HTMLElement): void {
    this.display.value += el.innerText;
    console.log(this.display.value)
    this.display.focus();
  }

  clear(): void {
    this.display.value = '';
  }

  del(): void {
    this.display.value = this.display.value.slice(0, -1);
  }

  // Método para remover ouvintes de eventos, se necessário
  removeEventListeners(): void {
    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('keyup', this.keyupHandler);
  }
}

export default Calculadora;
