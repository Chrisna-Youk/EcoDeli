import React, { useState, useEffect } from "react";

const LocationAutocompleteInput = ({ placeholder, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue.length > 2) {
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
        )
          .then((res) => res.json())
          .then((data) => {
            setSuggestions(data);
          });
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleSelect = (suggestion) => {
    setInputValue(suggestion.display_name);
    setSuggestions([]);
    onSelect(suggestion);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 rounded-lg mt-1 w-full max-h-60 overflow-auto shadow-md">
          {suggestions.map((sug) => (
            <li
              key={sug.place_id}
              onClick={() => handleSelect(sug)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {sug.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocompleteInput;
