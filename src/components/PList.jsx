// To collectively show all the products that is in the db 
import React, { useEffect, useState } from "react";
import "../assets/styles/plist.css";
import PItem from "./PItem";
import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import PitemShimmer from "./PitemShimmer";
import ErrorPage from "./ErrorPage"

export default function PList() {
  // To loop the shimmer effect 10 times.
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // To save the value that is getting typed in the searchbar
  const [valu, setValu] = useState("");

  // To save the data in component's memory as soon as it's arrive.
  const [array, setArray] = useState([]);

  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data) {
      setArray(data); // Save the value in the array to do further function in it.
    }
  }, [data]);

  // If an error is encountered then show the error page.
  if(error){
    return <ErrorPage/>
  }

  return (
    <div className="PList_section">
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
            array.products
              .filter((product) =>
                product.title.toLowerCase().includes(valu.toLowerCase()) // To filter out the items that is getting typed.
              )
              .map((product) => ( // And then map those...
                <PItem
                  id={product.id}
                  key={product.id}
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
              {loop.map((_, index) => (
                // If taking longer than usual then shimmer it out.
                <PitemShimmer key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
