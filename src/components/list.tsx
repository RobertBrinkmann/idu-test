import React, { useState, useEffect } from "react";
import Item from "@/components/item";
import type Child from "@/types/child";
import getData from "@/services/idu";
import styles from "@/styles/list.module.scss";

const List = ({ url }: { url: string }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData(url)
      .then((response) => {
        setItems(response);
        setError("");
      })
      .catch((error) => {
        setItems([]);
        setError(error.message);
      });
  }, [url]);

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
