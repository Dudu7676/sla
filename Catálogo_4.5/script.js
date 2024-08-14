const produtos = [
    {
        id: 1,
        imagem: "produto1.jpg",
        nome: "Tênis Branco R$ 139,90",
        detalhe: "Tênis Cano Baixo com Recortes Tênis cano baixo com recortes e solado caixa alta. Calçado super moderno, versátil e confortável, ideal para você que busca o coringa para complementar seus looks do dia a dia. ESPECIFICAÇÕES DO PRODUTO Tênis feminino Cano baixo Bico redondo Caixa baixa Fechamento por cadarço Com recortes Altura do salto: 1,5cm Marca: Satinato Material: Sintético Composição do cabedal: 100% Poliuretano Composição da palmilha: 90% Poliéster 10% Etil Vinil Acetato Composição da sola: 100% Policloreto de Vinila Composição do forro: 100% Poliéster"
    },
    {
        id: 2,
        imagem: "produto2.jpg",
        nome: "Tênis Preto R$ 219,90",
        detalhe: "Tênis Redley Originals Monocromo All Black Composição cabedal (parte superior): Material têxtil respirável Palmilha: Em EVA; moldada forrada e removível Solado: Borracha com função antiderrapante Forro: Material têxtil respirável Cor predominante: All Black Lingueta: Fina e flexível Indicado para: Casual Origem: Nacional Gênero: Unissex Ajuste: Cadarço Peso aproximado: 810g o par nº 40"
    },
    {
        id: 3,
        imagem: "produto3.jpg",
        nome: "All Star R$ 259,99",
        detalhe: "Tenis All Star, modelo de tecido, fechamento em cardaço, com palmilha confortavel, modelo ideal para quem busca estilo e conforto."
    },
    {
        id: 4,
        imagem: "produto3.jpg",
        nome: "All Star Tainer",
        detalhe: "Tenis All Star, modelo de tecido, fechamento em cardaço, com palmilha confortavel, modelo ideal para quem busca estilo e conforto."
    },
    
];

// Função para criar elementos HTML dinamicamente
function criarElementoProduto(produto) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    img.src = `produtos/${produto.imagem}`;
    img.alt = produto.nome;
    h2.textContent = produto.nome;
    link.href = `produto.html?id=${produto.id}`;
    link.appendChild(img);
    link.appendChild(h2);
    li.appendChild(link);
    return li;
}

// Carregar e exibir produtos na página inicial
function carregarProdutos() {
    const listaProdutos = document.getElementById('produtos');

    produtos.forEach(produto => {
        const elementoProduto = criarElementoProduto(produto);
        listaProdutos.appendChild(elementoProduto);
    });
}

// Carregar produtos na página inicial ao carregar
window.addEventListener('DOMContentLoaded', carregarProdutos);

// Redirecionar para página inicial ao clicar em "Voltar"
const btnVoltar = document.querySelector('a[href="index.html"]');
btnVoltar.addEventListener('click', () => {
    window.location.href = 'index.html';
});
