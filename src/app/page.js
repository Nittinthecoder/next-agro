import Banner from "../pages/Banner";
import Header from "../pages/Header";
// import { ProductFeed } from "../pages/ProductFeed";


export default function Home({ }) {
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        {/* <ProductFeed products={products}/> */}
      </main>
    </div>
  );
}


// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       products,
//     },
//   };

// }

// get --> https://fakestoreapi.com/products