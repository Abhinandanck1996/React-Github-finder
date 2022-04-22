import React, { useState,useEffect } from "react";
import MainContent from "./MainContent";
import Search from "./Search";
import Axios1 from "../apis/Axios1";

const Home = () => {
  let [term, setTerm] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);
   useEffect(() => {
     let fetchData = async () => {
       try {
        let client_id = "Iv1.c1c8492e58249067";
        let client_secret = "d7eef6337bada6b622d10707c8dfed441a4172fe";
        let users = await Axios1.get(
          `/users/Abhinandanck1996?Client_id ${client_id} & Client_secret ${client_secret}`
        );
        let ReposData = await Axios1.get(
          `/users/Abhinandanck1996/repos?Client_id ${client_id} & Client_secret ${client_secret}`
        );
         setLoading(true);
         setTerm(users.data);
         setRepos(ReposData.data);
       } catch (error) {
         console.log(error);
       }
       setLoading(false);
     };
     fetchData();
   }, []);

  let onTermSubmit =async term => {
  try {
        let client_id = "Iv1.c1c8492e58249067";
      let client_secret = "d7eef6337bada6b622d10707c8dfed441a4172fe";
        let users = await Axios1.get(
          `/users/${term}?Client_id ${client_id} & Client_secret ${client_secret}`
        );
        let ReposData = await Axios1.get(
          `/users/${term}/repos?Client_id ${client_id} & Client_secret ${client_secret}`
      );

      console.log(users);
      setLoading(true)
      setTerm(users.data)
      setRepos(ReposData.data)
  } catch (error) {
      console.log(error);
  }
     setLoading(false)
      
  };
  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} users={term} loading={loading} />
              <MainContent users={term} loading={loading} repos={ repos}/>
            
      </article>
    </section>
  );
};

export default Home;
