import React from "react";

import Layout from "../components/layout";
import { createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import YouTube from "react-youtube";
import CustomSnowfall from "../components/CustomSnowfall";

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "dark"
  },
}), {factor: 2,});

const useStyles = makeStyles({
  section: {
    // background: theme.palette.background.paper,
    // background: `linear-gradient(${[
    //   "rgba(255,255,255,0)",
    //   "rgba(255,255,255,0.1) 2%",
    //   "rgba(255,255,255,0.5) 2%",
    //   "rgba(255,255,255,0.5) 98%",
    //   "rgba(255,255,255,0.1) 98%",
    //   "rgba(255,255,255,0)"
    // ].join(",")})`,
    height: "100%"
  },
  spacer: {
    height: '10vh',
  },
  spacerSmall: {
    height: '5vh',
  },
  spacerTiny: {
    height: '2vh',
  },
  // Styling for wild statements
  wilder: {
    fontFamily: "'Trade Winds', cursive",
  },
  // Styling for headers
  header: {
    fontFamily: "'Futura', sans-serif",
  },
  headerTop: {
    fontFamily: "'Futura', sans-serif",
    textDecoration: 'underline',
  },
  // Styling for paragraph blocks
  type: {
    fontFamily: "'Caladea', serif",
    fontSize: '2rem',
  },
  listDescription: {
    marginLeft: '5vw',
    fontFamily: "'Caladea', serif",
    fontSize: '1.7rem',
  },
  pageBackground: {
    background: "linear-gradient(#009fff, #230046)",
    height: "100%"
  },
  youtubePlayer: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  youtubeContainer: {
    position: "relative",
    width: "100%",
    "box-sizing": "border-box",
    "padding-top": "56.25%" // Percentage ratio for 16:9
  },
  codeForm: {
    width: "100%"
  },
  footer: {
    fontFamily: "'Futura', sans-serif",
    align: 'center',
    opacity: '0.5',
  }
});

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const pages = 6.5;
  return (
    <Layout>
      <ThemeProvider theme={theme}>

        {/* Gradient */}
        
          
            <div className={classes.pageBackground}>
              <CustomSnowfall/>
            
        

          {/* Logo */}
          
            <Grid container justify="center">
              <Img fixed={data.file.childImageSharp.fixed}/>
            </Grid>
          
          

          {/* First Section */}
          
            <Grid className={classes.section} container justify="center" alignItems={"center"}>
              <Grid item xs/>
              {/* xs 9 controls the width */}
              <Grid item xs={9}>
              <Typography className={classes.header} align={'center'} color={"textPrimary"}>__________________________________________</Typography>
              <div className={classes.spacerTiny}></div>
                <Typography variant={"h1"} color={"textPrimary"} className={classes.header} align={'center'}>
                  We're back, baby!
                </Typography>
                <div className={classes.spacerTiny}></div>
                <Typography className={classes.header} align={'center'} color={"textPrimary"}>______________________________________________________________________________________</Typography>
                <div className={classes.spacer}></div>
                <Typography variant={"body1"} color={"textPrimary"} className={classes.type}>
                  Lamb and libations can’t stay apart for long, and soon they’ll be reunited once again! Last year was
                  a
                  hell of a ride. A weekend of lamb and beer graced by a dusting of snow, flakes falling on all of
                  your
                  smiling faces. Vinny Dom made a spectacular video of the whole shehbang, placed here for both
                  nostalgia
                  and stoke.
                </Typography>
              </Grid>
              <Grid item xs/>
            </Grid>
            <div className={classes.spacer}></div>
          

          
            <Grid container justify="center" alignItems={"center"}>
              <Grid item xs/>
              <Grid item xs={9}>
                <YouTube className={classes.youtubePlayer} containerClassName={classes.youtubeContainer}
                         videoId="Bs3TupLIqnk" opts={{
                  playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: (false ? 1 : 0)
                  }
                }}/>
                <div className={classes.spacerSmall}></div>
                <Typography align={"center"} variant={"subtitle1"} color={"textPrimary"} className={classes.header}>
                  Shoutout to Vinny for the awesome piece!
                </Typography>
              </Grid>
              <Grid item xs/>
            </Grid>
            <div className={classes.spacer}></div>
          


          
            <Grid className={classes.section} container justify="center" alignItems={"center"}>
              <Grid item xs/>
              <Grid item xs={9}>
                <Typography variant={"h1"} color={"textPrimary"} className={classes.header}>
                  What It's All About
                </Typography>
                <div className={classes.spacer}></div>
                <Typography variant={"body1"} color={"textPrimary"} className={classes.type}>
                  So many smiling faces. We want to keep it that way, so we’ve put together a list of values to
                  keep in mind for the coming event. These aren’t meant as hard rules, just a guide to get on the
                  same wavelength.
                </Typography>
                <div className={classes.spacer}></div>
                <ul>
                    <Typography variant={"h1"} className={classes.header} variant={"h3"} color={"textPrimary"}><li>Community</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography className={classes.listDescription} color={"textPrimary"}>
                    This one’s huge. It’s really the whole point of the event. To gather a bunch of wonderful humans
                    together
                    so that everyone can meet someone new. While it’s great to hang with your friends, there will be a
                    lot
                    of new
                    friends here waiting to be made.
                    </Typography>
                    <div className={classes.spacer}></div>
                    
                    <Typography variant={"h1"} className={classes.header} variant={"h3"} color={"textPrimary"}><li>Respect, Kindess, Love, etc.</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography className={classes.listDescription} color={"textPrimary"}>
                    I know it sounds kind of patronizing, but it’s good to remind ourselves every once and awhile.
                    This
                    applies
                    to everyone, from self-proclaimed assholes to work-hardened saints.
                    </Typography>
                    <div className={classes.spacer}></div>

                    <Typography variant={"h1"} className={classes.header} variant={"h3"} color={"textPrimary"}><li>FUN</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography className={classes.listDescription} color={"textPrimary"}>
                    The most cliché of them all. But taken together with the first two, it reaches a whole new plane.
                    Want
                    to
                    play in the mud? Sweet! Why not ask someone else if they want to join. Got a fiddle to play in the
                    trees? Invite that sick dude with the harmonica (me).
                    </Typography>
                  </ul>
                  <div className={classes.spacer}></div>
                  <div className={classes.spacer}></div>
                  
                  <Typography variant={"body1"} color={"textPrimary"} className={classes.type}>
                    Alright, now that we have that out of the way, here’s what’s new for the coming roast.
                  </Typography>
                  <div className={classes.spacer}></div>
                  <ul>

                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>New Musical Talent!</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <ul>
                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>
                      General Mojo’s, your homegrown psychedelic experience</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Grid container justify="center" alignItems={"center"}>
                    <Grid item xs/>
                    <Grid item xs={9}>
                      <YouTube className={classes.youtubePlayer} containerClassName={classes.youtubeContainer}
                              videoId="g6NlvE18vzo" opts={{
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                          autoplay: (false ? 1 : 0)
                        }
                      }}/>
                      <div className={classes.spacerSmall}></div>
                    </Grid>
                    <Grid item xs/>
                    </Grid>
                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>
                      Ben Hunter & Joe Seamons with the sweet sweet sounds of bluegrass</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Grid container justify="center" alignItems={"center"}>
                    <Grid item xs/>
                    <Grid item xs={9}>
                      <YouTube className={classes.youtubePlayer} containerClassName={classes.youtubeContainer}
                              videoId="h1aorwUcGs4" opts={{
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                          autoplay: (false ? 1 : 0)
                        }
                      }}/>
                      <div className={classes.spacerSmall}></div>
                      </Grid>
                      <Grid item xs/>
                      </Grid>
                    </ul>
                    <div className={classes.spacerSmall}></div>

                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>Bigger fire!</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>More fire extinguishers</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>If you didn’t click the links to the music, do yourself a favor and check em out</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <Typography variant={"h1"} className={classes.type} variant={"h4"} color={"textPrimary"}><li>Official Lamb Roast x Klean Kanteen Pint Cups to for lifelong memories and no plastic cup waste!</li></Typography>
                    <div className={classes.spacerSmall}></div>
                    <ul><li><Typography variant={"h2"}className={classes.type} variant={"h4"} color={"textPrimary"}><li>This comes with your ticket. We won’t be providing any disposable drink ware, or eat ware for that
                    matter</li></Typography></li></ul>
                    <div className={classes.spacerSmall}></div>

                    
                    
                  </ul>
              </Grid>
              <Grid item xs/>
            </Grid>
          

            <div className={classes.spacer}></div>
            <Grid container className={classes.root} spacing={4}>
              <Grid item xs={12}>
                <Grid container justify={"center"} alignItems={"center"}>
                  <Grid item xs={6}>
                  <Typography variant={"h1"} className={classes.header} variant={"h5"} color={"textPrimary"}>If you’ve got a code, throw it in the form below to RSVP and receive instructions for payment.</Typography>
                  <div className={classes.spacerSmall}></div>
                  <Typography variant={"h1"} className={classes.header} variant={"h5"} color={"textPrimary"}>:O)</Typography>
                  <div className={classes.spacerSmall}></div>
                  <Typography variant={"h1"} className={classes.header} variant={"h5"} color={"textPrimary"}>Sincerely,</Typography>
                  
                  <Typography variant={"h1"} className={classes.header} variant={"h5"} color={"textPrimary"}>Foot in the Door Cooperative</Typography>
                  <div className={classes.spacerSmall}></div>
                      
                      
                    
                  </Grid>
                </Grid>

              </Grid>
              <Grid item xs={12}>
                <form className={classes.codeForm} noValidate autoComplete="off" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted form!");
                }}>
                  <Grid container justify={"center"} alignItems={"center"} spacing={2}>
                    <Grid item xs={3}>
                      <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                    </Grid>
                    <Grid item xs={2}>
                      <Button type="submit" label="Submit" variant="outlined">
                        Open Sesame
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
            
            <div className={classes.spacer}></div>
            <div className={classes.spacer}></div>
            
            <Typography variant={"h5"} align={'center'} className={classes.footer} color={'textPrimary'}>Copyright 2020</Typography>
            
            <div className={classes.spacer}></div>
            <div className={classes.spacer}></div>
            </div>

      </ThemeProvider>
    </Layout>
  );
};

export const query = graphql`
query {
  file(relativePath: {eq: "lamb-icon.png"}) {
    childImageSharp {
      fixed(width: 500, height: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`;

export default IndexPage;
