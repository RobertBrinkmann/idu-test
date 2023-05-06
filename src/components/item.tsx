import React, { useState, useEffect } from "react";
import ChildItem from "@/components/item";
import type Child from "@/types/child";

const Item = ({ item }: { item: Child }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`item ${
        item.children && item.children.length ? "has-children" : "no-children"
      } ${expanded ? "expanded" : "collapsed"}`}
    >
      <div className="title" onClick={() => setExpanded(!expanded)}>
        <span className="name">{item.name}</span>

        {item.children && item.children.length && (
          <span className="symbol">{expanded ? "-" : "+"}</span>
        )}
      </div>
      {item.children && item.children.length && (
        <div className="children">
          {item.children.map((child: Child, index: number) => (
            <ChildItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
