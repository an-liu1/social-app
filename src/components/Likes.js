import React from "react";
import Typography from "@material-ui/core/Typography";

function numberWithCommas(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return 0;
  }
}

export default ({ likes }) => {
  likes = numberWithCommas(likes);
  return <Typography variant="h5">{`${likes} likes`}</Typography>;
};
