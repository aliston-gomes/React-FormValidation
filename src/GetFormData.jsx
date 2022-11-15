import React from "react";

const GetFormData = () => {
    let x=localStorage.getItem("name")
    console.log(x)

    return <article>
        <table id="getdata">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{localStorage.getItem("name")}</td>
                    <td>{localStorage.getItem("age")}</td>
                    <td>{localStorage.getItem("phone")}</td>
                    <td>{localStorage.getItem("email")}</td>
                    <td>{localStorage.getItem("city")}</td>
                </tr>
            </tbody>
      </table>
  </article>;
};

export default GetFormData;
