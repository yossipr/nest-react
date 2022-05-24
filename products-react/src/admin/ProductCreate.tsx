import React, { SyntheticEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Product } from "../interfaces/product";

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, image }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/admin/products"} />;
  }

  const cancel = () => {
    setRedirect(true);
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-primary m-2">Save</button>
        <button className="btn btn-primary m-2" onClick={cancel}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default ProductCreate;
