// import React, { useState ,useEffect, Fragment} from 'react'

// const Home = () => {
//     let [state, setState] = useState([])
//     useEffect(() => {
      
//         window.fetch("https://api.github.com/users", {
//             method: "GET",
//             Headers: {
//                 'content-type':'application/json'
//             },
//         }).then(data => {
//             data.json().then(value => {
//             setState(value)
//         })
//     }).catch(err=>console.log(err))
     
//     }, [])
//     console.log(state);
//   return (
//     <table border="2px solid">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>USER</th>

//           <th>LOGIN</th>
//           <th>URL</th>
//         </tr>
//       </thead>
//       <tbody>
//         {state.map((data, index) => {
//           return (
//             <Fragment key={index}>
//               <tr>
//                 <td>{data.id}</td>
//                 <td>
//                   {" "}
//                   <img src={data.avatar_url} alt={data.login} />
//                 </td>
//                 <td>{data.login}</td>
//                 <td>{data.following_url}</td>
               
//               </tr>
//             </Fragment>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default Home
