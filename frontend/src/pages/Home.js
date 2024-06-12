import API from "../api";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo_new.png";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const initialized = useRef(false);
  const [filter, setFilter] = useState("All");
  const [categories, setCategories] = useState(["All"]); // initialized with All
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const fetchCategories = async () => {
      try {
        const response = await API.get("/categories");
        setCategories((prev) => [
          ...prev,
          ...response.data.map((category) => category.name),
        ]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter(
          (p) => p.categories.filter((c) => c.name === filter).length > 0
        );

  return (
    <div className="flex flex-col md:flex-row container mx-auto p-4 bg-black text-white">
      <div className="w-full md:w-1/4 p-4">
        <img src={Logo} className="w-auto mb-4" alt="Saat Kretek" />
        <p className="mb-6 text-justify">
          From invigorating blueberries to indulgent coffee cookies or
          comforting vanilla latte, every SAAT flavour in our repertoire has
          been crafted for maximum enjoyment and pure satisfaction. Created and
          blended with every palate in mind, SAAT Kretek boasts a unique menu
          with one of a kind flavours which promise the ultimate moment, just
          for you.
        </p>
        <div className="text-zinc-600">
          {categories.map((category) => (
            <button
              key={category} // Added key prop
              className={`inline-block md:block md:w-full text-left rounded py-2 px-4 my-2 hover:text-white ${
                filter === category
                  ? "text-white bg-gray-700"
                  : "bg-transparent"
              }`}
              onClick={() => setFilter(category)} // Removed curly braces around category.name
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        <div className="grid sm:grid-cols-3 grid-cols-2 place-items-start p-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
