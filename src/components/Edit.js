import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

//import de sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// eslint-disable-next-line
const MySwal = withReactContent(Swal);

const Edit = () => {
  // 1- configuracion de hooks
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  // 2- creamos las funciones para obtener el documento y actualizarlo
  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = { description: description, stock: stock };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductsById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      //console.log(product.data());
      setDescription(product.data().description);
      setStock(product.data().stock);
    } else {
      console.log("No such product!");
    }
  };

  // 3- usamos useEffect
  useEffect(() => {
    getProductsById(id);
    // eslint-disable-next-line
  }, []);

  // 4- configuracion de la alerta con Sweet Alert 2
  const confirUpdate = (id) => {
   Swal.fire({
     position: "top-end",
     icon: "success",
     title: "Your product has been edited",
     showConfirmButton: false,
     timer: 1500,
   });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Product</h1>

          {/* formulario */}
          <form onSubmit={update}>
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
            <button onClick={confirUpdate} type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
