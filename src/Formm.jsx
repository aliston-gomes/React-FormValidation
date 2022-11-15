import React, { useState } from "react";

const Formm = () => {
  let [state, setState] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    city: "",
  });
  let { name, age, phone, email, city } = state;
  let handleSubmit = e => {
    e.preventDefault();
    console.dir(e.target);
    if (name == "" || age == "" || phone == "" || email == "" || city =="") {
      alert("All Fields Required")
    }
  };

  let handleChange = (e) => {
    let{name,value}=e.target
    setState({ ...state, [name]: value });
    window.localStorage.setItem(name, value);
    
  }

  return (
    <section>
      <article className="form-container">
        <h1>USER FORM</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="age">Age</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="phone">Phone</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="city">City</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2}>
                  <button>SUBMIT</button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </article>
    </section>
  );
};

export default Formm;
