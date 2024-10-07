const  gerarCPF =(): string => {
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Gera os primeiros 9 dígitos
    const cpfArray = Array.from({ length: 9 }, () => randomInt(0, 9));
  
    // Função para calcular o dígito verificador
    const calcularDigito = (baseCpf: number[], fatorInicial: number): number => {
      const soma = baseCpf.reduce((acc, valor, index) => acc + valor * (fatorInicial - index), 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    // Calcula os dois dígitos verificadores
    const primeiroDigito = calcularDigito(cpfArray, 10);
    cpfArray.push(primeiroDigito);
  
    const segundoDigito = calcularDigito(cpfArray, 11);
    cpfArray.push(segundoDigito);
  
    // Formata o CPF (opcional)
    const cpf = cpfArray.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    return cpf;
}
  
export default gerarCPF;
  