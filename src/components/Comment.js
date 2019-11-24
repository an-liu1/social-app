import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
  card: {
    maxWidth: 500
  },
  media: { height: 0, paddingTop: "56.25%" },
  cardContent: {
    padding: 0,
    left: 0
  },
  listItem: {
    padding: 0,
    display: "flex",
    flexDirection: "column"
  },
  comments: { fontSize: "14px" }
})

function Comment(props) {
  const { name, comment, classes } = props
  return (
    <div>
      <p>
        {name}: <span className={classes.comments}>{comment}</span>
      </p>
    </div>
  )
}

export default withStyles(styles)(Comment)
