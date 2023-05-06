import React, { useState, useEffect } from "react";
import Item from "@/components/item";
import type Child from "@/types/child";
import styles from "@/styles/list.module.scss";

const List = ({ url }: { url: string }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  // Fetch list data
  fetch(url)
    .then((response: Response) => {
      // Parse the response into JSON
      response
        .json()
        .then((json) => {
          // If it's empty show an error
          if (!json) {
            setItems([]);
            setError("JSON was empty");
          } else {
            setItems(json);
            setError("");
          }
        })
        .catch((error) => {
          // Display errors
          setItems([]);
          setError(`Failed to parse: ${error.message}`);
        });
    })
    .catch((error) => {
      // Display errors
      setItems([]);
      setError(`Failed to fetch: ${error.message}`);
    });

  return (
    <div className={styles.list}>
      <h2 className="heading display-4">List</h2>
      <div className="items">
        {(error && <p className="alert alert-danger">{error}</p>) ||
          items.map((item: Child, index: number) => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default List;
