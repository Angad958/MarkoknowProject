import React from 'react'
import { useState } from 'react';


export default function First() {
  const mystyle = {
    color: "grey",

    padding: "10px",
    fontFamily: "Arial"
  };

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    return
    (
      <>{name}</>
    )

  }
  return (
    <div className=' container'>

      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label className="form-label text-center " style={mystyle}>Area he visited yesterday</label>
          <input type="text" className="form-control" style={{ backgroundColor: "lightgrey" }} value={name} onChange={(e) => setName(e.target.value)} />

        </div>

        <button type="button" class="btn btn-dark  btn-block" style={{ width: "100%" }} onClick={handleSubmit}>Next</button>

      </form>

    </div>
  )
}
