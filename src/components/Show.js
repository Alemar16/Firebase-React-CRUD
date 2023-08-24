import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
const MySwal = withReactContent(Swal);

const Show = () => {
  // 1- configuracion de hooks
  const [products, setProducts] = useState([]);

  // 2- Referencia de la DB firestore
  const productsCollection = collection(db, "products");

  // 3- funcion para mostrar todos los documentos
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //console.log(products);
  };

  // 4- funcion para eliminar un documento
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  // 5- funcion de configuracion de la alerta con Sweet Alert 2

  // 6- usamos useEffect
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // 7-devolvemos vista de nuestro componente

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2"></div>
            <Link to="/create" className="btn btn-secondary mt-2 mb-2">
              Create
            </Link>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.description}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-light"
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
