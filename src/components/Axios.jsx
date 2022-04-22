// import React,{useEffect, useState,Fragment} from 'react'

// const Axios = () => {

//     let [state,setState]=useState([])
//     useEffect(() => {
      
//         fetch("https://api.github.com/users").then(data => {
//             data.json().then(value => {
//             setState(value)
//         })
//     }).catch(err=>console.log(err))
     
//     }, [])
//     console.log(state);
//    return (
//      <table border="2px solid">
//        <thead>
//          <tr>
//            <th>ID</th>
//            <th>USER</th>

//            <th>LOGIN</th>
//            <th>URL</th>
//            <th>GIT REPO</th>
//            <th>Profile</th>
//          </tr>
//        </thead>
//        <tbody>
//          {state.map((data, index) => {
//            return (
//              <Fragment key={index}>
//                <tr>
//                  <td>{data.id}</td>
//                  <td>
//                    {" "}
//                    <img src={data.avatar_url} alt={data.login} />
//                  </td>
//                  <td>{data.login}</td>
//                  <td>{data.following_url}</td>
//                  <td>{data.starred_url}</td>
//                  <td>
//                    <a href={data.html_url}>Veiw Profile</a>
//                  </td>
//                </tr>
//              </Fragment>
//            );
//          })}
//        </tbody>
//      </table>
//    );
// }

// export default Axios


// using Axios
import axios from "axios";
import React, { useState, useEffect ,Fragment} from "react";

const Axios = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then(data => {
        let payload = data.data;
        setState(payload);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(state);
    return (
      <table border="2px solid">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>

            <th>LOGIN</th>
            <th>URL</th>
            <th>GIT REPO</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {state.map((data, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td>{data.id}</td>
                  <td>
                    {" "}
                    <img src={data.avatar_url} alt={data.login} />
                  </td>
                  <td>{data.login}</td>
                  <td>{data.following_url}</td>
                  <td>{data.starred_url}</td>
                  <td>
                    <a href={data.html_url}>Veiw Profile</a>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    );
};

export default Axios;