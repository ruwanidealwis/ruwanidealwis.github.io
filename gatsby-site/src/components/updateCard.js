import {
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core"

import React from "react"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';
import TvIcon from '@material-ui/icons/Tv';
//code adapted from: https://stackoverflow.com/questions/51940157/how-to-align-horizontal-icon-and-text-in-material-ui
class UpdateCard extends React.Component {
  render() {
    return (
     <div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: "var(--pbg)",
            paddingLeft:'5%'}}
            >
            <MenuBookIcon color="secondary"/>
            <span >
              <Typography variant="h6" style={{ color: "var(--secondary)" , paddingLeft:"15%"}}>
               READING
          </Typography>
            </span>
          </div>
         
          <Typography variant="body1">
            <List>
              <ListItem style={{ padding: "0%", paddingLeft: "4%" }}>American Gods</ListItem>
            </List>
          
          </Typography>
          <Divider />
         

          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: "var(--pbg)",
            paddingLeft: '5%',
            paddingTop:"3%"
          }}
          >
            <TvIcon color="secondary" />
            <span >
              <Typography variant="h6" style={{ color: "var(--secondary)", paddingLeft: "15%" }}>
                WATCHING
          </Typography>
            </span>
          </div>

          <Typography variant="body1">
            <List>
              <ListItem style={{ padding: "0%", paddingLeft: "4%" }}>New Girl (again)</ListItem>
            </List>

          </Typography>
          <Divider />
          

          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: "var(--pbg)",
            paddingLeft: '5%',
            paddingTop:"3%"
          }}
          >
            <SettingsIcon color="secondary" />
            <span >
              <Typography variant="h6" style={{ color: "var(--secondary)", paddingLeft: "15%" }}>
                CODING
          </Typography>
            </span>
          </div>

          <Typography variant="body1">
            <List>
              <ListItem style={{ padding: "0%" , paddingLeft:"4%"}}>News To Me</ListItem>
            </List>

          </Typography>
        

        
     </div>
    )
  }
}

export default UpdateCard
