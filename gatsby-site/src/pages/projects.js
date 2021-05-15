import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Paper,
  Box,
  Typography,
} from "@material-ui/core"
import { withPrefix } from "gatsby"

import { Helmet } from "react-helmet"
import React from "react"
import TemporaryDrawer from "../components/navigation"
import ProjectCard from "../components/projectCard"
import "../../static/styles/projects.css"
import BioCard from "../components/bioCard"
import Footer from "../components/footer"
class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataScience: false,
      webDevelopment: false,
    }

    if (new URLSearchParams(this.props.location.search).has("filter")) {
      let filter = new URLSearchParams(this.props.location.search).get("filter")

      this.state[filter] = true
    } else {
      this.state = {
        dataScience: true,
        webDevelopment: true,
      }
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value

    if (value === "all") {
      this.setState({
        dataScience: true,
        webDevelopment: true,
      })
    } else if (value === "webDevelopment") {
      this.setState({
        dataScience: false,
        webDevelopment: true,
      })
    } else {
      this.setState({
        dataScience: true,
        webDevelopment: false,
      })
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Ruwani's Portfolio</title>
        </Helmet>
        <Paper
          style={{
            backgroundColor: "var(--obg)",
            minHeight: "100vh",
            minWidth: "100%",
            paddingTop: "0%",
            marginTop: "-3%",
          }}
        >
          <TemporaryDrawer />
          <Box
            style={{
              backgroundColor: "var(--obg)",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "8%",
            }}
          >
            <Grid container spacing={8}>
                <Grid item lg={4} md={12} xs={12}>
                  <div style={{ margin: "5%", top: "190px", position: "sticky" }}>
                    <BioCard />
                  </div>
                </Grid>
              <Grid item lg={8} md={12}>
                <Grid container spacing={3}>
                  <Grid item md={8} xs={12}>
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
                        <Typography
                          variant="h4"
                          style={{ color: "var(--main)" }}
                        >
                          Projects.
                        </Typography>
                        <br />
                        <Typography variant="body1">
                          These are some of the projects I have worked on during
                          my spare time. While most of these are complete, I am
                          always planning on improving and expanding upon these.
                        </Typography>
                        <br />
                        <FormControl>
                          <InputLabel htmlFor="my-input">
                            Project Type
                          </InputLabel>
                          <NativeSelect
                            value={
                              this.state.webDevelopment
                                ? this.state.dataScience
                                  ? "all"
                                  : "webDevelopment"
                                : "dataScience"
                            }
                            onChange={this.handleChange}
                            style={{ color: "var(--secondary)" }}
                          >
                            <option value={"all"}>All</option>
                            <option value={"webDevelopment"}>
                              Web Development
                            </option>
                            <option value={"dataScience"}>Data Science</option>
                          </NativeSelect>
                        </FormControl>
                      </CardContent>
                    </Card>
                  </Grid>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  {this.state.webDevelopment ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"Music Through The Decades"}
                        tagline={
                          "Compare you Spotify Listening Habbits against the top tracks of the decade!"
                        }
                        type={"Web Development"}
                        description={`
This app uses the Spotify API to generate statistics of the users' top songs and the top 100 hits of the decade (as provided by https://tsort.info/ ). The user can compare their music tastes (based on audio features provided by Spotify) to that of the top hits in a specific decade.

I love listening to music from the ’80s/70’s and I thought it would a great way to learn how similar my music tastes were to that of the mainstream hits from the past, and potentially discover some new hits.`}
                        tools={[
                          "NodeJs",
                          "ExpressJs",
                          "React",
                          "Material-UI",
                          "Spotify",
                          "POSTGRESQL",
                          "BeauitfulSoup",
                          "Heroku",
                        ]}
                        nextSteps={
                          "Use Machine learning to create a more intelligent recommendation system."
                        }
                        githubLink={
                          "https://github.com/ruwanidealwis/musicThroughDecades"
                        }
                        liveLink={"https://musicthroughdecades.herokuapp.com/"}
                        imgSrc={withPrefix("/images/musicthroughdecades.png")}
                        style={{
                          display: this.state.webDevelopment ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}
                  {this.state.webDevelopment ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"Messaging App (WIP)"}
                        tagline={"A simple messaging app, made with Flask"}
                        type={"Web Development"}
                        description={`
This app replicates a modern day messaging app using websockets to communicate between the flask backend and javascript frontend.

It's still a work in progress...`}
                        tools={["Flask", "SocketIO", "CircleCI", "JavaScript"]}
                        nextSteps={"Integrate Database Suppport with MongoDB"}
                        githubLink={"https://github.com/ruwanidealwis/chatApp/"}
                        liveLink={"/"}
                        imgSrc={withPrefix("/images/comingSoon.png")}
                        style={{
                          display: this.state.webDevelopment ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}
                  {this.state.webDevelopment ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"Space Barcode"}
                        tagline={
                          "Generates a barcode based on events on Space of a particular day"
                        }
                        type={"Web Development"}
                        description={`This web app uses the NASA Open API to collect data on asteroids, geomagnetic storms, solar flares and more to generate an aesthetically pleasing barcode that is personalized to the day of the user's choice.


What inspired this project was my fascination with Space. Growing up, I always thought I would become an Astronaut and while it looks like it may not be the case, my love for space remains the same. I wanted to create a project that was both fun and pleasing but allowed me to learn more about space and hopefully encourage others to explore as well.`}
                        tools={[
                          "NodeJs",
                          "ExpressJs",
                          "EJS",
                          "MongoDB",
                          "REST API",
                          "Heroku",
                        ]}
                        nextSteps={
                          "Incorporate SpaceX data into the barcode\nCreate a Machine Learning Algorithm to extract top colours."
                        }
                        githubLink={
                          "https://github.com/ruwanidealwis/whatwerethecosmosdoing"
                        }
                        liveLink={"https://spacebarcode.herokuapp.com/"}
                        imgSrc={withPrefix("/images/barcode.png")}
                        style={{
                          display: this.state.webDevelopment ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}

                  {this.state.dataScience ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"The Pursuit of Happiness"}
                        tagline={
                          "Deep dive into the World Happiness Report of 2020"
                        }
                        type={"Data Science"}
                        description={`
I used Python to analyze the World Happiness Report focusing on differences between continents, and determining the most influential variables in world happiness.\n
I had always been interested in the World Happiness Report because I always viewed happiness as something immeasurable. Allowing myself to explore this data mathematically was an incredible learning opportunity, not just in terms of technical development but to learn about the world itself. 
`}
                        tools={[
                          "Pandas",
                          "Plotly",
                          "Seaborn",
                          "Jupyter Notebook",
                        ]}
                        githubLink={
                          "https://github.com/ruwanidealwis/thePursuitOfHappiness"
                        }
                        nextSteps={
                          "Determine a machine learning model to predict happiness\nCompare World Happiness across different years"
                        }
                        liveLink={
                          "https://github.com/ruwanidealwis/thePursuitOfHappiness/blob/master/worldHappiness.ipynb"
                        }
                        imgSrc={withPrefix("/images/worldHappiness.png")}
                        style={{
                          display: this.state.dataScience ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}

                  {this.state.dataScience ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"Avatar the Last Airbender: Analysis"}
                        tagline={
                          "Over Analyzing one of my favourite shows of all time!"
                        }
                        type={"Data Science"}
                        description={`I used Python to analyze all the scripts of Avatar the Last Airbender to determine some insights of most important characters, differences between seasons as a homage to some of my favourite characters.

This project was something I used to learn the basics of data analysis while also exploring something I love. I hope to one day expand this project to a general TV show Analysis, where I analyze the scripts of all my favourite TV shows.
`}
                        tools={[
                          "Pandas",
                          "Plotly",
                          "Seaborn",
                          "Jupyter Notebook",
                        ]}
                        githubLink={
                          "https://github.com/ruwanidealwis/tvShowAnalysis"
                        }
                        nextSteps={"Expand series to incorporate more TV Shows"}
                        liveLink={
                          "https://github.com/ruwanidealwis/tvShowAnalysis/blob/master/Avatar%20The%20Last%20Airbender%20Analysis.ipynb"
                        }
                        imgSrc={withPrefix("/images/avatarAnalysis.png")}
                        style={{
                          display: this.state.dataScience ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}

                  {this.state.webDevelopment ? (
                    <Grid
                      className="projectCard"
                      item
                      md={12}
                      style={{ margin: "5%", width: "70%" }}
                    >
                      <ProjectCard
                        name={"Playlist Colours"}
                        tagline={
                          "Get a colour palette for your Spotify Playlist"
                        }
                        type={"Data Science"}
                        description={`This web app analyzes the Audio Features of the Spotify Songs in a user's playlist and generates a palette representing the music.\n
This app was my first ever attempt at web development, and I believe there are many improvements to be made. I love the concept of the application, and with the knowledge I acquired through practice, I hope to come back to this and improve upon it. I like to showcase this project as more of a reminder of where I began because I believe improvement the most important thing!
`}
                        tools={[
                          "NodeJs",
                          "Spotify",
                          "ExpressJs",
                          "Pug",
                          "Boostrap",
                        ]}
                        githubLink={
                          "https://github.com/ruwanidealwis/colouryourplaylists"
                        }
                        nextSteps={`Resign UI\nImprove loading time`}
                        liveLink={"https://colouryourplaylists.herokuapp.com"}
                        imgSrc={withPrefix("/images/playlistColours.png")}
                        style={{
                          display: this.state.dataScience ? "" : "none",
                        }}
                      />
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            </Grid>
          
          </Box>
          <Footer style={{ marginRight: "4%" }} />
        </Paper>
      </>
      
    )
  }
}
export default Projects
