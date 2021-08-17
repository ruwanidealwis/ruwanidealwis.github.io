import { Box, Typography } from "@material-ui/core"
import React from "react"
class Footer extends React.Component {
    render() {
        return (
            <Box style={{ backgroundColor: "var(--secondary)", padding: "1.5%", bottom: "0", position: "absolute", width:"-webkit-fill-available"}}textAlign="center">
            <Typography variant="body1" color="primary">
                    made with ❤️ by ruwani
            </Typography>
            </Box>
        )
    }
}
export default Footer;