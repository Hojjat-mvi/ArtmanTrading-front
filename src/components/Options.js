import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
const Options = ({ url }) => {
  const [values, setValues] = useState([]);
  const options = [
    {
      value: "",
      label: "",
    },
  ];

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
  {
    values.map((item) => options.push({ value: item.id, label: item.name }));
  }

  console.log(options);

  return (
    <>
      <Select options={options.slice(1,options.length)}></Select>
    </>
  );
};

export default Options;
