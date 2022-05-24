import { AnyRecord } from "dns";
import React, {
  PropsWithRef,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Navigate, useParams } from "react-router-dom";
import { Product } from "../interfaces/product";

const ProductEdit = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const product: Product = await response.json();
      setImage(product.image);
      setTitle(product.title);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
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
            defaultValue={title}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={(e) => setImage(e.target.value)}
            defaultValue={image}
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

export default ProductEdit;
