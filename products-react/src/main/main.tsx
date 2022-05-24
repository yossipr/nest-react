import React, { useEffect, useState } from "react";
import { EventEmitter } from "stream";
import Emitter from "../events";
import { Product } from "../interfaces/product";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAndSetProducts();
  }, []);

  const getAndSetProducts = async () => {
    const response = await fetch("http://localhost:3002/api/products");
    const products = await response.json();

    setProducts(products);
  };

  const like = async (id: number) => {
    console.log("like called");
    await fetch(`http://localhost:3002/api/products/${id}/like`, {
      method: "POST",
    });
    console.log("updating products");
    await getAndSetProducts();
    console.log("fire like-changed");
    Emitter.emit("like", "");
  };

  return (
    <>
      <main>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row card-deck">
              {products.map((p: Product) => {
                return (
                  <div
                    className="col col-xs-6 col-sm-3 small-padding right bottom"
                    key={p.id}
                  >
                    <div className="card shadow-sm" style={{ minHeight: 300 }}>
                      <img
                        src={p.image}
                        className="img-thumbnail card-img-top"
                        style={{ height: 160, width: 270 }}
                      />
                      <div className="card-body">
                        <p className="card-text">{p.title}</p>
                        <div className="card-footer">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => like(p.id)}
                            >
                              Like
                            </button>
                          </div>
                          <small className="text-muted">{p.likes} likes</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
