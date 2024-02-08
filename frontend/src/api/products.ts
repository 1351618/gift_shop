// api/products.ts
export async function fetchProducts() {
  const response = await fetch(
    "https://658d27fc7c48dce9473898c9.mockapi.io/gift_shop/api/products"
  );
  const data = await response.json();
  return data;
}
