/*interface RequestConfig {
  method: string;
  url: string;
}

const request = (obj: RequestConfig): Promise<string> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};*/

// Event listener para capturar cliques em links
document.addEventListener('click', (e: MouseEvent) => {
  const el = e.target as HTMLElement;

  // Verifica se o elemento clicado é uma tag <a>
  if (el.tagName.toLowerCase() === 'a') {
    e.preventDefault(); // Evita o redirecionamento padrão do link
    carregaPagina(el);  // Chama a função para carregar o conteúdo
  }
});

/*async function carregaPagina(el: HTMLElement) {
  const href = el.getAttribute('href');

  if (!href) return;

  const objConfig: RequestConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);  // Carrega o conteúdo na página
  } catch (e) {
    console.error('Erro ao carregar a página:', e);
  }
}*/

async function carregaPagina(el: HTMLElement) {
  const href = el.getAttribute('href');

  if (!href) {
    return;
  } else {
    fetch(href).then(responde => {
      responde.text().then(body => {
        carregaResultado(body);
        window.history.pushState(null, '', href);
      }).catch(e => {
        console.error('Erro ao carregar a página:', e);
      });
    })
  }
}

// Função para atualizar a área com o conteúdo carregado
function carregaResultado(response: string) {
  const resultado = document.querySelector('.resultado') as HTMLElement;

  if (resultado) {
    resultado.innerHTML = response;  // Insere o conteúdo carregado no elemento
  }
}


fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => {
    carregaElementosNaPagina(json)
    console.log(json);
  });

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');

  for(const pessoa of json) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  if (resultado) {
    resultado.appendChild(table);
  } else {
    console.error('Elemento .resultado não encontrado.');
  }
}
