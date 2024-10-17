import React from "react";
import { useNavigate } from "react-router-dom";
import camperFreepik from "img/camperFreepik.webp";
import styles from "components/Home/index.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.homeContainer}>
      <h1 className={styles.h1}>
        Best camper rentals from trusted outdoor company!
      </h1>
      <img
        className={styles.imgThumb}
        src={camperFreepik}
        alt="Image Designed by Freepik®"
      />
      <div className={styles.homeAdvert}>
        <ul className={styles.features}>
          <li className={styles.featureItem}>✔︎ Unlimited miles</li>
          <li className={styles.featureItem}>✔︎ Free second driver</li>
          <li className={styles.featureItem}>✔︎ 24/7 Roadside assistance</li>
          <li className={styles.featureItem}>✔︎ Camping equipment included</li>
          <li className={styles.featureItem}>✔︎ Flexible cancellation</li>
        </ul>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            navigate("catalog");
          }}>
          Book Now
        </button>
        <h2 className={styles.h2}>
          Choose from our selection of fully equipped RVs available at our
          stations across Ukraine. All our models are perfect for an epic road
          trip or weekend getaway.
        </h2>
      </div>
    </section>
  );
};

export default HomePage;
