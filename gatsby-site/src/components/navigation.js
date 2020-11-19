import React from "react"
import { Paper } from "@material-ui/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "../../static/styles/navigation.css"

export default function TemporaryDrawer() {
  const iconStyle2 = {
    transform: "scale(1.5)",
    paddingBottom: "100%",
    paddingTop: "0%",
  }
  const linkStyle = {
    marginRight: "2%",
    color: "var(--link)",
    fontFamily: "Raleway",
  }
  return (
    <div>
      <Paper
        elevation={0}
        id="navigation"
        style={{
          paddingTop: "2%",
          backgroundColor: "transparent",
          border: "none",
          color: "black",
          display: "flex",
          flexDirection: "row",
          textAlign: "right",
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                style={{ display: "none" }}
              />{" "}
              {theme === "dark" ? (
                <div style={iconStyle2}>☀️ </div>
              ) : (
                <div style={iconStyle2}>🌙</div>
              )}
            </label>
          )}
        </ThemeToggler>

        <AniLink
          activeStyle={{ color: "black" }}
          style={{
            marginRight: "2%",
            marginLeft: "2%",
            color: "var(--link)",
            fontFamily: "Raleway",
          }}
          swipe
          direction="right"
          duration={1}
          to="/"
        >
          HOME
        </AniLink>
        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          to="/about"
        >
          ABOUT
        </AniLink>
        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          duration={1}
          to="/toolkit"
        >
          TOOLKIT
        </AniLink>

        <AniLink
          activeStyle={{ color: "var(--main)" }}
          style={linkStyle}
          swipe
          direction="right"
          duration={1}
          to="/projects"
        >
          PROJECTS
        </AniLink>
      </Paper>
    </div>
  )
}

/*<List>
        <ListItem>
          <React.Fragment key={"left"}>
            <IconButton onClick={toggleDrawer()}>
              <RecorderIcon fontSize={"large"} />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state["open"]}
              onClose={toggleDrawer()}
            >
              <List style={{ paddingTop: "20%" }}>
                <ListItem>
                  <ListItemIcon>
                    <div
                      style={{
                        transform: "scale(5)",
                        marginBottom: "80%",
                        marginTop: "80%",
                        marginLeft: "150%",
                      }}
                    >
                      👩🏽‍💻
                    </div>
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  style={{ paddingTop: "30%" }}
                  href="/"
                >
                  <ListItemIcon>
                    <CodeIcon style={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText style={{ color: "#829d7c", fontSize: "2rem" }}>
                    <Typography variant="h5">Home </Typography>
                  </ListItemText>
                </ListItem>
                <AniLink swipe direction="right" to="/about">
                  <ListItem button>
                    <ListItemIcon>
                      <PersonIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText
                      style={{ color: "#829d7c", fontSize: "2rem" }}
                    >
                      <Typography variant="h5">ABOUT </Typography>
                    </ListItemText>
                  </ListItem>
                </AniLink>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon style={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText style={{ color: "#829d7c", fontSize: "2rem" }}>
                    <Typography variant="h5">PROJECTS </Typography>
                  </ListItemText>
                </ListItem>

                <AniLink swipe direction="right" duration={1} to="/toolkit">
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon style={{ color: "white" }} />
                    </ListItemIcon>

                    <ListItemText
                      style={{ color: "#829d7c", fontSize: "2rem" }}
                    >
                      <Typography variant="h5">Toolkit </Typography>
                    </ListItemText>
                  </ListItem>
                </AniLink>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText style={{ color: "#829d7c", fontSize: "2rem" }}>
                    <Typography variant="h5">BLOG </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </React.Fragment>
        </ListItem>
        <ListItem></ListItem>
      </List>*/
