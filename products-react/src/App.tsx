import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./admin/products";
import Main from "./main/main";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin/products" element={<Products />} />
                <Route
                  path="/admin/products/create"
                  element={<ProductCreate />}
                />
                <Route
                  path="/admin/products/:id/edit"
                  element={<ProductEdit />}
                />
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
