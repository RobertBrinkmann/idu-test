import React, { useState, useEffect } from "react";
import type Child from "@/types/child";
import styles from "@/styles/list.module.scss";

const List = ({ url }: { url: string }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  fetch(url).then((response: Response) => {
    response
      .json()
      .then((json) => {
        if (!json) {
          setItems([]);
          setError("JSON was empty");
        } else {
          setItems(json);
          setError("");
        }
      })
      .catch((error) => {
        setItems([]);
        setError(`Failed to parse: ${error.message}`);
      });
  });

  return (
    <div className={styles.list}>
      <h1 className="heading display-2">List</h1>
      <div className="items">
        {(error && <p className="alert alert-danger">{error}</p>) ||
          items.map((item: Child, index: number) => (
            <div key={item.id} className="item">
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
