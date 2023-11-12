import { useState } from "react";
import { Button, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "../css/card.css";

export const Card = ({
  image,
  title,
  category,
  description,
  price,
  rating,
}) => {
  const [added, setAdded] = useState(false);

  const addButton = () => {
    setAdded(true);
  };

  const removeButton = () => {
    setAdded(false);
  };

  const buttonProps = {
    // class: added ? "button-remove" : "button-add",
    color: !added ? "success" : "error",
    text: !added ? "Add to Cart" : "Remove from Cart",
    onClick: !added ? addButton : removeButton,
  };

  return (
    <div className="card">
      <table cellPadding={5}>
        <tbody>
          <tr>
            <td valign="top" width={"200px"}>
              <img src={image} alt={title} className="card-image" />
              <Button
                variant="contained"
                onClick={buttonProps.onClick}
                color={buttonProps.color}
              >
                {buttonProps.text}
              </Button>
            </td>
            <td valign="top">
              <span>
                <h3 className="card-title">{title}</h3>
                <p className="card-category">
                  <b>Category: </b>
                  {category}
                </p>
                <p className="card-price">${price}</p>
                <p className="card-description">{description}</p>
                <p className="card-title">
                  <Typography component="legend">
                    <b>Rating: </b>
                    {rating?.rate} ({rating?.count} votes)
                  </Typography>
                  <Rating name="read-only" value={rating?.rate} readOnly />
                </p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
};
