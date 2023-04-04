import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import axios from "axios";
import { API_KEY } from "../../constants/constants";

function SearchBar() {
  const [input, setInput] = useState("");
  const [nameList, setNameList] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)
      .then((response) => {
        setNameList(response.data.results);
      });
  }, [input]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  const handleItemClick = (name) => {
    setSelectedItem(name);
    setInput("");
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const filteredList = nameList.filter((item) => {
    if (input === "") {
      return item;
    } else if (item.title.toLowerCase().includes(input.toLowerCase())) {
      return item;
    }
    return null;
  });

  return (
    <div className="input-wrapper" ref={wrapperRef}>
      <div className="input">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search Movies / Shows"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={handleInputFocus}
        />
      </div>
      {showDropdown && filteredList.length > 0 && (
        <ul className="dropdown">
          {filteredList.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.name ? item.name : item.title)}>
              {item.name ? item.name : item.title}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && (
        <div className="selected-item">
          <span>{selectedItem}</span>
          <button onClick={() => setSelectedItem("")}>X</button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
