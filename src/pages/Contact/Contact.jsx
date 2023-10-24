import "./Contact.jsx";
import { useRef, useState } from "react";

const Formulario = () => {
  const nombre = useRef(null);
  const [nameError, setNameError] = useState("");
  const apellidos = useRef(null);
  const edad = useRef(null);
  const [edadError, setEdadError] = useState("");
  const correoElectronico = useRef(null);
  const numeroTelefono = useRef(null);

  const [sucess, setSucess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Seteramos lo estados de error
     setNameError("");
     setEdadError("");
    //Validar el nombre mayor a tres caracteres
    if (nombre.current.value.length < 3) {
      setNameError(
        "El nombre de usuario debe de tener 3 o más caracteres."
      );
    }

    if (edad.current.value >= 18) {
      setSucess("Registrado correctamente");
      } else {
        alert("Debes ser mayor de edad para enviar el formulario");
      }
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="nombre">  
        <input type="text" placeholder="Nombre" ref={nombre} />
      </div>
      <div className="error">{nameError}</div>
      <div className="apellido">  
        <input type="text" placeholder="Apellidos" ref={apellidos} />
      </div>
      <div className="edad">  
        <input type="text" placeholder="Edad" ref={edad} />
      </div>
      <div className="error">{edadError}</div>
      <div className="correoElectronico">  
        <input type="text" placeholder="correoElectronico" ref={apellidos} />
      </div>
      <div className="numeroTelefono">  
        <input type="text" placeholder="numeroTelefono" ref={numeroTelefono} />
      </div>
      


        <button type="submit">Submit</button>
        <div>{sucess}</div>
      </form>
    </>
  );
};

export default Formulario;
