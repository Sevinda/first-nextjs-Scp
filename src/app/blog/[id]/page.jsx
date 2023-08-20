import React from "react";

import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione
            error corrupti pariatur soluta commodi quas itaque eligendi.
            Dignissimos voluptate aperiam doloremque illum quod totam?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/6528154/pexels-photo-6528154.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/9507634/pexels-photo-9507634.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ratione
          voluptatibus modi ipsam! Nam, numquam consequatur doloremque facere
          reiciendis fugit vitae! Voluptates, commodi praesentium.
          <br />
          <br />
          Necessitatibus rem magnam dolores at ipsum tempora, temporibus velit
          beatae consequatur quam asperiores sequi. Reprehenderit quibusdam ab
          explicabo provident officiis voluptas molestiae debitis delectus
          error. Minima impedit exercitationem eveniet enim dolorem ratione
          <br />
          <br />
          provident sed nesciunt iure sequi, aperiam rem recusandae maxime nam
          accusantium labore voluptates eum! Explicabo, omnis libero? Alias
          iure, provident perspiciatis optio voluptate nihil consequatur, cum
          qui praesentium sunt a porro minus in quam natus temporibus beatae
          similique vero ut expedita repellat non consectetur! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Earum odit quibusdam, quidem at
          velit iste labore! Voluptatibus natus voluptatem expedita? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Consequatur dolorem id
          earum perspiciatis tenetur dicta, nihil est doloribus magni provident!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
