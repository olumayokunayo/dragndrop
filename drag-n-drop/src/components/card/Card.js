import { Typography } from "@mui/material";
import React from "react";

const Card = ({ photo }) => {
  return (
    <>
      <div key={photo.id}>
        <img
          src={photo.cover_photo.urls.regular}
          alt={photo.title}
          style={{ height: "200px", width: "100%", borderRadius: "5px" }}
        />
        <Typography variant="body2" sx={{color: 'gray'}}>
          {photo.tags
            .map(
              (tag) => tag.title.charAt(0).toUpperCase() + tag.title.slice(1)
            )
            .join(", ")}
        </Typography>
      </div>
    </>
  );
};

export default Card;
