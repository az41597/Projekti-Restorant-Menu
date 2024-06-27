import React from "react";
import styles from "./About.css"; 
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
        hendrerit justo, ac consectetur dui cursus id. Quisque auctor sem nec
        tellus fermentum, vel eleifend lorem ultricies.
      </p>
      <p>
        Fusce venenatis faucibus odio, vel tempus magna congue at. Vivamus
        pretium, velit sit amet tristique lacinia, ex lectus pulvinar nunc, nec
        volutpat nisi felis ac nisi.
      </p>
    </div>
  );
};

export default About;
