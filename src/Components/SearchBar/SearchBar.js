import React, { useEffect, useState } from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css"
import axios from 'axios';
import { API_KEY } from '../../constants/constants';


function SearchBar() {
    const [input, setInput] =useState();
    const [nameList, setNameList] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)
        .then((response) => {setNameList(response.data.results);})
    }, [])
  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input type="text" 
        placeholder='Search Movies / Shows' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        {nameList.filter((item) => {
            if(input === ""){
                return item
            }else if(item.title.toLowerCase().includes(input?.toLowerCase())){
                console.log(item); 
            }
        }).map((item) => {
            return item.name? item.name : item.title
        })}
    </div>
  )
}

export default SearchBar

