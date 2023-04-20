import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: 'pages.join',
    CREATE: "pages.create",
};

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);   // [name of our state (what we want to hold our state), name of function we want to use to update state]
    
    function joinInfo() {
        return "To join a room, click the join room button and enter the room code into the text field and click join!";
    }

    function createInfo() {
        return "To create a room, click the create room button and select your settings!";
    }

    useEffect(() => {
        console.log("ran");
        return () => {
            console.log("cleanup");
        }
    });

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    How do I use Turntable?
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createInfo() }
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <IconButton 
                    onClick={() => {
                        page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
                    }}
                >
                    { page === pages.CREATE ? (
                        <NavigateBeforeIcon /> 
                    ) : (
                        <NavigateNextIcon />
                    )}
                </IconButton>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}