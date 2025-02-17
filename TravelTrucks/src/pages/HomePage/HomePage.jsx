import React from "react";
import { useNavigate } from "react-router-dom";
import camperFreepik from "img/camperFreepik.webp";
import css from "components/Home/index.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={css.homeContainer}>
      <h1 className={css.h1}>Campers of your dreams</h1>
      <img className={css.imgThumb} src={camperFreepik} alt="Camper image" />
      <div className={css.homeAdvert}>
        <button
          type="button"
          className={css.button}
          onClick={() => {
            navigate("catalog");
          }}>
          View Now
        </button>
        <h2 className={css.h2}>
          You can find everything you want in our catalog
        </h2>
      </div>
    </section>
  );
};

export default HomePage;
