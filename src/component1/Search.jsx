import React, { useState } from 'react'
import {FaSearch,FaSuitcase,FaRegBuilding} from 'react-icons/fa'

const Search = (props) => {
  let [state, setState] = useState('')
  
  let handleSubmit = (e) => {
    e.preventDefault()
    props.onTermSubmit(state)
  }
  return (
    <div className="searchBlock">
      <form onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            placeholder="search Profile"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </span>
        <span>
          <FaSearch />
        </span>
      </form>
      <main>
        <header>
          <figure>
            <img src={props.users.avatar_url}
              alt={props.users.login} />
            <h2>{props.users.login} </h2>
            <p>
              <span>
                <FaSuitcase />{" "}
              </span>
              {props.users.bio}
            </p>
            <p>
              <span>
                <FaRegBuilding />
              </span>
              {props.users.company}
            </p>
          </figure>
          <a href={props.users.html_url} className="btn">Edit Profile</a>
        </header>
      </main>
    </div>
  );
}

export default Search;