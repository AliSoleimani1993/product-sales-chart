import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [sales, setSales] = useState("");
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Product Sales Chart",
      productName: "Product Name",
      salesCount: "Units Sold",
      add: "Add Product",
      switchToSpanish: "Switch to Spanish",
    },
    es: {
      title: "Gráfico de Ventas de Productos",
      productName: "Nombre del Producto",
      salesCount: "Unidades Vendidas",
      add: "Agregar Producto",
      switchToSpanish: "Cambiar a Inglés",
    },
  };

  const t = translations[language];

  const handleAddProduct = () => {
    if (name && sales) {
      setProducts([...products, { name, sales: parseInt(sales) }]);
      setName("");
      setSales("");
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="App">
      <h1>{t.title}</h1>
      <div className="product-form">
        <input
          type="text"
          placeholder={t.productName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder={t.salesCount}
          value={sales}
          onChange={(e) => setSales(e.target.value)}
        />
        <button onClick={handleAddProduct}>{t.add}</button>
      </div>

      <div className="buttons">
        <button onClick={toggleLanguage}>{t.switchToSpanish}</button>
      </div>

      <div className="chart-container">
        <BarChart width={600} height={300} data={products}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default App;
