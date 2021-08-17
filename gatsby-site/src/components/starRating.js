import { Box, Typography, List, ListItem } from "@material-ui/core"
import React from "react"
import StarIcon from "@material-ui/icons/Star"
const horizontalList = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
}
const linkStyle = {
    marginRight: "2%",
    color: "var(--link)",
    fontFamily: "Raleway",
}
class Footer extends React.Component {
    constructor(props) {
        super()
        props.
        this.state = {
            title: props.title,
            lastUpdated: props.lastUpdated,
            starClicked: {
                "1":false,
                "2": false,
                "3": false,
                "4": false,
                "5": false,

            }
        }
    }
  render() {
    return (
        <List style={horizontalList}>
        <ListItem>
          <StarIcon />
        </ListItem>
        <ListItem>
          <StarIcon />
        </ListItem>
        <ListItem>
          <StarIcon />
        </ListItem>
        <ListItem>
          <StarIcon />
        </ListItem>
      </List>
    )
  }
}
export default Footer
