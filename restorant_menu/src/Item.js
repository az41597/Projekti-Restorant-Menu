import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

const Item = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedItem = data.find((item) => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div>
      <h1>{item.itemName}</h1>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      <Link to="/menu">Back to Menu</Link>
    </div>
  );
};

export default Item;
