import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
   <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
   <span className=" span navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
      <button className="btn btn-outline-primary">🍕 Home</button>
      {token ? (
        <>
          <button className="btn btn-outline-success">🔓 Profile</button>
          <button className="btn btn-outline-danger">🔒 Logout</button>
        </>
      ) : (
        <>
          <button className="btn btn-outline-secondary">🔐 Login</button>
          <button className="btn btn-outline-secondary">🔐 Register</button>
        </>
      )}
      <button className="btn btn-warning">
        🛒 Total: ${total.toLocaleString()}
      </button>
    </nav>
  )
}

export default Navbar