import { useState } from "react";
import ProductList from "./components/ProductList";
import AddBookForm from "./components/AddBookForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const initialProduct = [
  {
    id: 1,
    name: "Animal Farm",
    author: "George Orwell",
    genre: "Self Development",
    image: "./Images/Animal-Farm.jpg",
  },

  {
    id: 2,
    name: "Black Titan",
    author: "Carol Jenkins",
    genre: "Motivational",
    image: "./Images/Black-titan.jpg",
  },

  {
    id: 3,
    name: "Black Viking",
    author: "Bill Downy",
    genre: "Motivational",
    image: "./Images/Black-viking.jpg",
  },

  {
    id: 4,
    name: "Go Set A Watchman",
    author: "Harper Lee",
    genre: "Fiction",
    image: "./Images/Go-set.jpg",
  },

  {
    id: 5,
    name: "The House of Gucci",
    author: "Sara Gay Forden",
    genre: "Drama",
    image: "./Images/Gucci.jpg",
  },

  {
    id: 6,
    name: "How Are You Going To Save Yourself",
    author: "JM Holmes",
    genre: "Motivation",
    image: "./Images/How-are-you.jpg",
  },

  {
    id: 7,
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    genre: "Finance",
    image: "./Images/Intelligent-investor.jpg",
  },

  {
    id: 8,
    name: "Investing In Real Estate With No Money Down",
    author: "Brandon Turner",
    genre: "Finance",
    image: "./Images/Investing.jpg",
  },

  {
    id: 9,
    name: "Other People's Money",
    author: "John Kay",
    genre: "Finance",
    image: "./Images/Other-people-money.jpg",
  },

  {
    id: 10,
    name: "The Other Side",
    author: "Author Name ",
    genre: "Mystery",
    image: "./Images/Other-side.jpg",
  },

  {
    id: 11,
    name: "From Sales To CEO",
    author: "Micheal Ubanski",
    genre: "Finance",
    image: "./Images/Sales-to-ceo.jpg",
  },

  {
    id: 12,
    name: "Soul On Ice",
    author: "Eldridge Cleaver",
    genre: "Self Development",
    image: "./Images/Soul-on-ice.jpg",
  },
];
function App() {
  const [products, setProducts] = useState(initialProduct);
  const [search, setSearch] = useState("");

  const addBook = (name, author, genre) => {
    setProducts([...products, { id: Date.now(), name, author, genre }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
          <div className="mb-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Book Library
            </h1>

            <AddBookForm addBook={addBook} />

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search by book name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="bg-orange-200 hover:bg-yellow-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>
            </div>
          </div>

          <ProductList products={filteredProducts} onDelete={deleteProduct} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
