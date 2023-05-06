import React, { useState, useEffect } from "react";
import ChildItem from "@/components/item";
import type Child from "@/types/child";

const Item = ({ item }: { item: Child }) => {
  return (
    <div
      className={`item ${
        item.children && item.children.length ? "has-children" : "no-children"
      }`}
    >
      <div className="title">{item.name}</div>
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
