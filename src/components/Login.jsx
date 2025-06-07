import React, {useState} from 'react'
import "./Form.css";


const Login = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

const validarDatos = (e) => {
            e.preventDefault()
            if (!email.trim() || !password.trim()){
                alert("Todos los campos son obligatorios")
            } 
            else if (password.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres");
            } else {
                alert(`Bienvenido/a ${email}`)
              }
        }
  return (
    
    <section>
        <div>
            <h2>Login</h2>
        </div>
          <form onSubmit={validarDatos}>
      <div>
          <label>Email</label>
          <input type='email' placeholder="ejemplo@correo.com" onChange={(e) => ( setEmail(e.target.value))}></input>
      </div>
      <div>
          <label>Password</label>
          <input type='password'  placeholder="••••••" onChange={(e) => ( setPassword(e.target.value))}></input>
      </div>
      <div>
          <button type='submit'>Login</button>
      </div>
        </form>
    </section>
  )
}

export default Login
