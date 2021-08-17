import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@material-ui/core"
import StarBorder from '@material-ui/icons/StarBorder';

import React from "react"

class ListComponent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: props.title,
            lastUpdated: props.lastUpdated,
            listItems: props.listItems,
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

                    <Typography variant="body1">{this.state.description}</Typography>
                    <br />

                    <List>
                        {this.state.listItems.map(item => {
                            return (
                                <ListItem>
                                    <ListItemIcon>
                                        <StarBorder style={{color:"var(--secondary)"}} />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} secondary={item.rating || ""} />
                                </ListItem>
                            )
                        })}
                    </List>
                </CardContent>
            </Card>
        )
    }
}
export default ListComponent
