import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"
import PythonIcon from "../../static/images/python.svg"
import JavaScriptIcon from "../../static/images/javascript.svg"
import JavaIcon from "../../static/images/java.svg"
import HTMLIcon from "../../static/images/html5.svg"
import CSSIcon from "../../static/images/css.svg"
import "../../static/styles/languages.css"

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import React from "react"
const listStyle = {
  backgroundColor: "var(--main)",

  justifyContent: "center",
  color: "white",
  padding: "1%",
  paddingTop: "0.5%",
  paddingBottom: "0.5%",
  paddingLeft: "3.5%",
  paddingRight: "3.5%",
  marginRight: "2%",
  marginBottom: "1.5%",
  width: "auto",
  fontWeight: 600,
}
class Languages extends React.Component {
  render() {
    return (
      <Grid container style={{ width: "100%" }}>
        <Card style={{ backgroundColor: "var(--pbg)", margin: "auto" }}>
          {" "}
          <CardContent>
            <br />
            <Grid item md={12} xs={12}>
              <Typography variant="h5" style={{ color: "var(--secondary)" }}>
                Languages:
              </Typography>
              <Typography variant="body1">
                <List
                  className="languageList"
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <ListItem style={listStyle}>
                    <ListItemIcon>
                      <PythonIcon />
                    </ListItemIcon>
                    <ListItemText
                      disableTypography={true}
                      style={{ color: "white" }}
                    >
                      Python{" "}
                    </ListItemText>
                  </ListItem>
                  <ListItem style={listStyle}>
                    <ListItemIcon>
                      <JavaScriptIcon />
                    </ListItemIcon>

                    <ListItemText
                      disableTypography={true}
                      style={{ color: "white" }}
                    >
                      JavaScript{" "}
                    </ListItemText>
                  </ListItem>
                  <ListItem style={listStyle}>
                    <ListItemIcon>
                      <JavaIcon />
                    </ListItemIcon>

                    <ListItemText
                      disableTypography={true}
                      style={{ color: "white" }}
                    >
                      {" "}
                      Java{" "}
                    </ListItemText>
                  </ListItem>
                  <ListItem style={listStyle}>
                    <ListItemIcon>
                      {" "}
                      <HTMLIcon />
                    </ListItemIcon>

                    <ListItemText
                      disableTypography={true}
                      style={{ color: "white" }}
                    >
                      {" "}
                      HTML{" "}
                    </ListItemText>
                  </ListItem>
                  <ListItem style={listStyle}>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <CSSIcon />
                    </ListItemIcon>
                    <ListItemText
                      disableTypography={true}
                      style={{ color: "white" }}
                    >
                      {" "}
                      CSS{" "}
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <br />

            <Grid item md={12} xs={12}>
              <Typography variant="h5" style={{ color: "var(--secondary)" }}>
                Framworks/Libraries:
              </Typography>

              <Typography variant="body1">
                <List
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                  }}
                >
                  <ListItem style={listStyle}>Express/Node</ListItem>
                  <ListItem style={listStyle}>React</ListItem>
                  <ListItem style={listStyle}>GatsbyJs</ListItem>
                  <ListItem style={listStyle}>Material-UI</ListItem>
                  <ListItem style={listStyle}>Boostrap</ListItem>
                  <ListItem style={listStyle}>JQuery/Ajax/Axios</ListItem>
                  <ListItem style={listStyle}>ChartJs</ListItem>
                  <ListItem style={listStyle}>Sequelize</ListItem>
                  <ListItem style={listStyle}>TomCat</ListItem>
                  <ListItem style={listStyle}>Jakarta EE</ListItem>
                  <ListItem style={listStyle}>Apache</ListItem>
                  <ListItem style={listStyle}>Java Presistance</ListItem>
                  <ListItem style={listStyle}>Seaborn</ListItem>
                  <ListItem style={listStyle}>Pandas/GeoPandas</ListItem>
                  <ListItem style={listStyle}> Scikit</ListItem>
                </List>

                <List></List>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h5" style={{ color: "var(--secondary)" }}>
                Databases:
              </Typography>
              <Typography variant="body1">
                <List
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <ListItem style={listStyle}>MYSQL</ListItem>
                  <ListItem style={listStyle}>MongoDB</ListItem>
                  <ListItem style={listStyle}>FireBase</ListItem>
                  <ListItem style={listStyle}>PostgreSQL</ListItem>
                  <ListItem style={listStyle}>SQLite</ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <Typography variant="h5" style={{ color: "var(--secondary)" }}>
                Other Skills:
              </Typography>
              <Typography variant="body1">
                <List
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <ListItem style={listStyle}>AWS</ListItem>
                  <ListItem style={listStyle}>Heroku</ListItem>
                  <ListItem style={listStyle}>BitBucket</ListItem>
                  <ListItem style={listStyle}>Git</ListItem>
                  <ListItem style={listStyle}>Agile Development</ListItem>
                  <ListItem style={listStyle}>Jira</ListItem>
                  <ListItem style={listStyle}>Unix</ListItem>
                  <ListItem style={listStyle}>Nginx</ListItem>
                  <ListItem style={listStyle}>Postman</ListItem>
                  <ListItem style={listStyle}>Android Studio</ListItem>
                </List>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}
export default Languages
