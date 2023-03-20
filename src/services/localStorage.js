const localStorageKey = 'products';
if (!JSON.parse(localStorage.getItem(localStorageKey))) {
  localStorage.setItem(localStorageKey, JSON.stringify([]));
}
export const saveProductToCart = (product) => {
  if (localStorage.getItem('products')) {
    const productList = JSON.parse(localStorage.getItem('products'));
    productList.push(product);
    return localStorage.setItem('products', JSON.stringify(productList));
  }
  // JSON.stringify(localStorage.setItem([...localStorageKey, (product)]));
};

export const getProductCart = () => JSON.parse(localStorage.getItem('products'));
