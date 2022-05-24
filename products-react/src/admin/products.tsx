import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventEmitter } from "stream";
import Emitter from "../events";
import { Product } from "../interfaces/product";

const Products = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     console.log("registering like-changed event");
  //     Emitter.once("like", async (a) => {
  //       console.log("like changed event fired - updating product");
  //       const res = await fetch("http://localhost:3000/api/products");
  //       const data = await res.json();
  //       console.log(data);
  //       setProducts(data);
  //     });
  //   }, []);

  useEffect(() => {
    (async () => {
      console.log("updating the products list......");
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();

      setProducts(data);
    })();
  }, []);

  const del = async (id: number) => {
    if (window.confirm("are you sure")) {
      await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
    }

    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();

    setProducts(data);
  };

  return (
    <>
      <div className="btn-toolbar mb-2 mb-md-2">
        <Link className="btn btn-primary btn-sm" to={"/admin/products/create"}>
          Add
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Likes</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: Product) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>
                    <img src={p.image} height="180"></img>
                  </td>
                  <td>{p.title}</td>
                  <td>{p.likes}</td>
                  <td>
                    <button
                      className="btn btn-danger btm-sm m-2"
                      onClick={() => del(p.id)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/admin/products/${p.id}/edit`}
                      className="btn btn-primary btm-sm m-2"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
