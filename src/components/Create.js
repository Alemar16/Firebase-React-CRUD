
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

//import de sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// eslint-disable-next-line
const MySwal = withReactContent(Swal);

const Create = () => {
  // 1- configuracion de hooks
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  // 2- Referencia de la DB firestore
  const productsCollection = collection(db, "products");

  // 3- funcion para almacenar
  const store = async (e) => {
    e.preventDefault();
    //console.log(e.target)
    //console.log(e.target[0].value)
    await addDoc(productsCollection, { description: description, stock: stock })
    navigate("/");
  }

  // 4- funcion de configuracion de la alerta con Sweet Alert 2
  const confirCreate = (id) => {
   Swal.fire({
     position: "top-end",
     icon: "success",
     title: "Your product has been saved",
     showConfirmButton: false,
     timer: 1500,
   });
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Create Product</h1>

          {/* formulario */}
          <form onSubmit={store}>

            {/* input description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            {/* input stock */}
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

            {/* boton */}
            <button onClick={confirCreate} type="submit" className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create