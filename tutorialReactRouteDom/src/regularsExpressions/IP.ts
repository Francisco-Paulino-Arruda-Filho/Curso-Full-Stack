const IP = `
 Os IPs são 172.31.255.254, 192.168.1.254, 10.255.255.255
 e 255.255.255.255
`

export const ip = IP.match(/(?:\d{1,3}\.){3}\d{1,3}/g); // Encontra todos os IPs