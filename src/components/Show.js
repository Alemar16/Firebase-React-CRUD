import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// eslint-disable-next-line
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
  const confirDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);// llamamos a la funcion para eliminar
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  // 6- usamos useEffect
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  // 7-devolvemos vista de nuestro componente

  return (
    <>
      {/* boton create */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2"></div>
            <Link to="/create" className="btn btn-secondary mt-2 mb-2">
              Create
            </Link>

            {/* tabla de datos */}
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Stock</th>
                  <th>Actions</th>
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
                        onClick={() => confirDelete(product.id)}
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
