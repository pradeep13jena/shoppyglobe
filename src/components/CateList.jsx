// Responsible to render all the cart items.
import React, { useEffect, useState } from "react";
import "../assets/styles/plist.css";
import PItem from "./PItem";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import PitemShimmer from "./PitemShimmer";

export default function PList() {
  const loop = [1, 2, 3, 4, 5]; // To create a shimmer effect in case it takes longer than to load.
  const { category } = useParams();
  const [valu, setValu] = useState("");
  const [array, setArray] = useState([]);

  const { data, error, loading } = useFetch( // Custom useFetch which return three parameters.
    `https://dummyjson.com/products/category/${category}`
  );

  // To make sure as soon as the items gets updated, store it in state's memory.
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
          {array && array.products ? (
            // This code make sure that the search bar filters out the item on basis of the text in the searchbar.
            array.products
              .filter((product) =>
                product.title.toLowerCase().includes(valu.toLowerCase())
              )
              .map((product) => (
                <PItem
                  key={product.id}
                  id={product.id}
                  entireArray={product}
                  discountPercentage={product.discountPercentage}
                  src={product.thumbnail}
                  title={product.title}
                  brand={product.brand}
                  price={product.price}
                  rating={product.rating}
                />
              ))
          ) : (
            <>
              {/* Helps for the Shimmer effect */}
              {loop.map((_, index) => (
                <PitemShimmer key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
