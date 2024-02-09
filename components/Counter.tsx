"use client"
import { useState } from "react"

const Counter = ()=>{
    const[counter, setCounter] = useState(0);
    const[showMessage,setShowMessage] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("Formulario enviado:", formData);
      };

    return(
        <div>
            <p>Haz hecho click {counter} veces</p>  
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Haz click</button> 
            <br />
            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}>{!showMessage ?  "Mostrar mensaje" : "Ocultar mensaje"} </button>
            {
                showMessage && <p>Hola Mundo!!</p>
            }
            <br />
            <button onClick={()=>{
                setCounter(0)
            }}>Reset</button>  
             <div>
        <form onSubmit={handleSubmit}>
          {/* Agrega aquí los campos de tu formulario */}
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Enviar formulario</button>
        </form>
      </div> 
        </div>
    )
}
export default Counter