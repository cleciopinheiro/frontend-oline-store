export async function getCategories() {
  const results = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await results.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resultsQuerry = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId};
  _ID&q=${query}`);
  const dataQuerry = await resultsQuerry.json();
  return dataQuerry;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
