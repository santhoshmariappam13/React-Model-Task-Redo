 import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ width: "250px" }}
      >
        <div className="p-4 mt-20">
         
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                history
              </a>
            </li>
            <li>
              <button className="bg-red-500 text-white px-3 rounded-md ">Log out</button>
            </li>
          </ul>
        </div>
      </div>

     
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-10 p-2 bg-blue-500 text-white rounded-md focus:outline-none"
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let fetchProducts = async () => {
    const productsData = await fetch(
      "https://677e8c7d94bde1c1252c6a56.mockapi.io/faskestore"
    );
    const productResponse = await productsData.json();
    setProducts(productResponse);
  };

  let addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + parseInt(product.price));
  };

  let removeCart = (item, index) => {
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - parseInt(item.price));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        
        <Sidebar />
        <div className="w-4/5 p-6 overflow-y-auto">
          <div className="grid grid-cols-6 gap-6">
            {products.map((product, index) => {
              return (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <img
                    className="object-cover w-full h-48 rounded-md"
                    src={`https://picsum.photos/seed/${product.image}/200/300`}
                    alt=""
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-black">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">Rs.{product.price}</p>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/5 p-6 bg-white shadow-lg">
          <div className="flex bg-blue-900 h-10 w-full">
            <h1 className="font-bold text-white text-2xl pl-4 ml-4">
              Fake Store
            </h1>
          </div>
          <h2 className="mb-4 text-xl font-bold">Shopping Cart</h2>
          <div className="space-y-4">
            {cart.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">Rs.{item.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      removeCart(item, index);
                    }}
                    className="bg-red-500 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="pt-4 mt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black">Total:</span>
              <span className="font-bold text-black">Rs.{total}</span>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App
































































































































