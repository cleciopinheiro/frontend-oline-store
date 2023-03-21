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

export const saveProductsReviews = (productId, { email, text, rating }) => {
  if (!JSON.parse(localStorage.getItem(productId))) {
    localStorage.setItem(productId, JSON.stringify([]));
  }

  const productReviews = JSON.parse(localStorage.getItem(productId));
  productReviews.push({ email, text, rating });
  return localStorage.setItem(productId, JSON.stringify(productReviews));
};

export const getProductReview = (p) => JSON.parse(localStorage.getItem(p));
