import React from "react";

import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt="image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptas quos voluptate excepturi cupiditate provident, sapiente
            <br />
            <br />
            consequuntur, dolor voluptatum optio eos. Commodi et cum libero amet
            dolores laudantium maxime nulla voluptatum deleniti doloribus quam
            nobis reprehenderit eligendi, quia quibusdam quasi nemo repellendus!
            Id aspernatur eveniet repellat odit pariatur odio quasi sapiente!
            Porro natus error maxime! Quaerat nihil laborum necessitatibus
            architecto vitae maxime, voluptas optio, voluptatibus nisi velit
            possimus quo itaque, voluptatum veniam exercitationem perspiciatis
            <br />
            <br />
            vel labore minima repellendus sequi! Quas voluptas, atque quibusdam
            veniam expedita ex porro aspernatur deleniti ratione, rem omnis
            temporibus eos sit a libero recusandae. Saepe, consectetur!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptas quos voluptate excepturi cupiditate provident, sapiente
            consequuntur, dolor voluptatum optio eos. Commodi et cum libero amet
            dolores laudantium maxime nulla voluptatum deleniti doloribus quam
            nobis reprehenderit eligendi, quia quibusdam quasi nemo repellendus!
            Id aspernatur eveniet repellat odit pariatur odio quasi sapiente!
            <br />
            <br />
            -Creative Illustrations
            <br />
            <br />
            -Dynamin Websites
            <br />
            <br />
            -Fast and Handy Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
