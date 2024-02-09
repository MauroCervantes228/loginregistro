"use client"
import Link from "next/link";
import { useState } from "react";

const Register = ({ onClose }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log(`Registro con correo: ${email}, contraseña: ${password}`);
    onClose(); 
  };

  return (
    <div>
      <div>
        <h2>Registro</h2>
        <label htmlFor="email">Correo: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Registrar</button>
        <p>
          Ya tienes cuenta?
          <Link href="./Login" passHref>
            Login
          </Link>
        </p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Register;