/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";

// eslint-disable-next-line react/prop-types
const Options = ({ url, name, Data }) => {
  const [values, setValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(Data);
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
    getData();
  }, []);
  {
    values.map((item) => options.push({ value: item.id, label: item.name }));
  }

  const handleEvent = (e) => {
    setSelectedValue(e.value)
  };

  return (
    <>
      <Select
        options={options.slice(1, options.length)}
        onChange={handleEvent}
        value={options.filter((option) => option.value === selectedValue)}
      ></Select>
    </>
  );
};

export default Options;
