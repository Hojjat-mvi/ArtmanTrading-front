import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Options = ({ url }) => {
  const [values, setValues] = useState([]);

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(`http://localhost:8000/api/${url}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setValues(result.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <>
      {values.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </>
  );
};

export default Options;
