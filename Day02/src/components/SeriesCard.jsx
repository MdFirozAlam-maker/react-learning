import React from "react";
import styles from "./Netflix.module.css";

const SeriesCard = ({
  img_url,
  name,
  description,
  rating,
  cast,
  genre,
  watch_url,
}) => {
  // Dynamic button styling based on rating
  const buttonStyle = {
    cursor: "pointer",
    borderRadius: "10px",
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    fontWeight: "bold",
    backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc6f",
    color: "var(--btn-color)",
  };

  // Dynamic class for rating badge
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card} style={{ marginBottom: "30px" }}>
      {/* Movie Poster */}
      <div>
        <img src={img_url} alt={name} className={styles.img_film} />
      </div>

      {/* Movie Details */}
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>

        <h3>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>

        <p>
          <strong>Summary:</strong> {description}
        </p>

        <p>
          <strong>Genre:</strong> {genre.join(", ")}
        </p>

        <p>
          <strong>Cast:</strong> {cast.join(", ")}
        </p>

        {/* Watch Button */}
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
