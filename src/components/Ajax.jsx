import React, { useState,useEffect,Fragment } from 'react'

const Ajax = () => {
    let [state, setState] = useState([]);
    useEffect(() => {
        let xhr = new XMLHttpRequest();
        //assign api end points
        xhr.open("GET", "https://api.github.com/users");
        xhr.onload = () => {
            let users = JSON.parse(xhr.response);
            setState(users);
        };
        xhr.send();
      
    }, [])
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
                      <td>{ data.starred_url}</td>
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
}

export default Ajax