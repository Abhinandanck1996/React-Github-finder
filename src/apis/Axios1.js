import React from 'react'
import axios from 'axios'

export default axios.create({
    baseURL: "https://api.github.com",
    headers: {
        "content-type":"applicaton/json"
    }
})