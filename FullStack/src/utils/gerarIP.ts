// Expressão regular
/*const ipRegex = /\b(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\b/;

// Função para validar IP
function isValidIP(ip: string): boolean {
    return ipRegex.test(ip);
}

// Teste
const testIPs = ["192.168.0.1", "255.255.255.255", "256.100.50.0", "abc.def.ghi.jkl"];

testIPs.forEach(ip => {
    console.log(`${ip} é válido? ${isValidIP(ip)}`);
});*/

const gerarIP = (): string => {
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const ipArray = Array.from({ length: 4 }, () => randomInt(0, 255));

    const ip = ipArray.join('.');

    return ip;
}

export default gerarIP;
