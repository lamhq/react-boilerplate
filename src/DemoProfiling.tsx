import { useState } from 'react';

function HomePage() {
  return (<h1>Home</h1>);
}

function Product({ name }: { name: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 10) {
  }
  return (
    <p>{name}</p>
  );
}

function Banner() {
  const startTime = performance.now();
  while (performance.now() - startTime < 50) {
  }

  return (
    <p><img src="https://legacy.reactjs.org/static/3046f500b9bfc052bde8b7b3b3cfc243/ad997/flame-chart.png" alt="" /></p>
  );
}

function ProductList() {
  const products = ['iphone 14', 'samsung tab 9', 'xiaomi red 10'];
  return (
    <>
      <h1>Products</h1>
      <Banner />
      {products.map((name) => <Product key={name} name={name} />)}
    </>
  );
}

export default function DemoProfiling() {
  const [page, setPage] = useState('home');
  return (
    <>
      <p>
        <button type="button" onClick={() => setPage('home')}>Home</button>
        <button type="button" onClick={() => setPage('products')}>Product List</button>
      </p>
      {page === 'home' && <HomePage />}
      {page === 'products' && <ProductList />}
    </>
  );
}
