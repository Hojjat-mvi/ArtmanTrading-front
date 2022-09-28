import React, { useEffect, useState } from "react";
import axios from "axios";
import { CPagination, CPaginationItem } from "@coreui/react";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const Pagination = ({ url, onUrlChange }) => {
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
  const lastIndex = meta.length - 1;

  if (meta.length > 1) {
    var prev = meta[0].url;
    var next = meta[lastIndex].url;
  }

  useEffect(() => {
    getData();
  }, [link]);

  const makeItem = () => {
    return (
      <>
        {meta.slice(1, lastIndex).map((item) => (
          // eslint-disable-next-line react/jsx-key
          <CPaginationItem
            active={item.active}
            key={item.url}
            onClick={() => {
              setLink(item.url);
              onUrlChange(item.url);
            }}
          >
            {item.label}
          </CPaginationItem>
        ))}
      </>
    );
  };
  return (
    <div>
      <CPagination aria-label="Page navigation example" align="center">
        <CPaginationItem
          aria-label="Previous"
          onClick={() => {
            setLink(meta[0].url);
            onUrlChange(meta[0].url);
          }}
          disabled={prev ? false : true}
        >
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        {makeItem()}
        <CPaginationItem
          aria-label="Next"
          onClick={() => {
            setLink(meta[lastIndex].url);
            onUrlChange(meta[lastIndex].url);
          }}
          disabled={next ? false : true}
        >
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  );
};

export default Pagination;
