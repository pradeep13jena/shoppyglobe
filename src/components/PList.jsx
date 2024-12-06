import React, { useEffect, useState } from "react";
import "../assets/styles/plist.css";
import PItem from "./PItem";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

export default function PList() {
  const [boxIsOpen, setBoxIsOpen] = useState(false);
  const [valu, setValu] = useState("");
  const [array, setArray] = useState([])

  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data) {
      setArray(data);
    }
  }, [data]);

  return (
    <>
      <a className="arrow-upwards" href="#header">
        <div>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
      <div className="searchBar">
        <input
          value={valu}
          onChange={(e) => setValu(e.target.value)}
          type="text"
          placeholder="Search by Title"
        />
      </div>
      <div className="browseSection">
        <div className="LotBooks">
          {/* .filter(book => book.title.toLowerCase().includes(valu.toLowerCase()) || book.author.toLowerCase().includes(valu.toLowerCase())) */}
          {array && array.products ?
            array.products
            .filter((product) =>
              product.title.toLowerCase().includes(valu.toLowerCase())
            )
            .map((product) => (
              <PItem
                id={product.id}
                key={product.id}
                discountPercentage={product.discountPercentage}
                src={product.thumbnail}
                title={product.title}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
              />
            )) : 'Loading...'}
        </div>
      </div>
    </>
  );
}
