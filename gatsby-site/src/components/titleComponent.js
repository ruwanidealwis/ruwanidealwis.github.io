import { Card, CardContent,Typography } from "@material-ui/core"
import React from "react"

class TitleComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      description: props.description,
    }
  }
  render() {
    return (
      <Card
        style={{
          backgroundColor: "var(--pbg)",
          margin: "5%",

          marginBottom: "7%",
          boxShadow: "10px 10px",
          color: "var(--secondary)",
        }}
      >
        <CardContent>
          <Typography variant="h4" style={{ color: "var(--main)" }}>
            {this.state.title}
          </Typography>
          <br />
          <Typography variant="body1">
            {this.state.description}
          </Typography>
          <br />
       
        </CardContent>
      </Card>
    )
  }
}
export default TitleComponent;