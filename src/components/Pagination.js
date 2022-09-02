import React, { useEffect, useState } from "react";
import axios from "axios";
import { CPagination, CPaginationItem } from "@coreui/react";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Pagination = ({ url ,onUrlChange}) => {
  const [link, setLink] = useState(url);
  const [meta, setMeta] = useState([]);

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(link, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMeta(response.data.meta.links);
    } catch (e) {
      toast.error("can not load data");
    }
  };

  // const prev = meta.shift();
  // const next = meta.pop();

  const lastIndex = meta.length - 1


  useEffect(() => {
    getData();
  }, [link]);

 const makeItem = () => {
   return (
     <>
     {meta.slice(1,lastIndex).map((item) => (
       // eslint-disable-next-line react/jsx-key
       <CPaginationItem active={item.active} key={item.url} onClick={() => {
         setLink(item.url);onUrlChange(item.url)
       }}>{item.label}</CPaginationItem>
     ))}
     </>
   )
 }

  return (
    <div>
      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        {makeItem()}
        <CPaginationItem aria-label="Next" disabled>
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  );
};

export default Pagination;
