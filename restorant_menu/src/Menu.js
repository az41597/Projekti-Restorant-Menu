import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import styles from "./Menu.css"; 

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredItems = data.filter((item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.menu}>
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="Search menu..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

   
      {filteredItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <h3>{item.itemName}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <Link to={`/item/${item.id}`} className={styles.detailsLink}>
            Details
          </Link>
        </div>
      ))}

      {filteredItems.length === 0 && (
        <p className={styles.noResults}>No items found matching your search.</p>
      )}
    </div>
  );
};

export default Menu;
