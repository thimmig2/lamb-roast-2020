import React from "react";

import Layout from "../components/layout";
import { createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography, Paper } from "@material-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import YouTube from "react-youtube";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Snowfall from "react-snowfall";

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: "dark"
  }
}));

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
  pageBackground: {
    background: "linear-gradient(#009fff, #230046)",
    height: "100%"
  },
  snowfall: {
    "z-index": -100
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
  }
});

const IndexPage = ({ data }) => {
  const classes = useStyles();
  const pages = 4;
  return (
    <Layout>
      <ThemeProvider theme={theme}>

        {/* Gradient */}
        <Parallax pages={pages}>
          <ParallaxLayer factor={pages} offset={0} speed={0}>
            <div className={classes.pageBackground}>
              <Snowfall className={classes.snowfall}/>
            </div>
          </ParallaxLayer>

          {/* Logo */}
          <ParallaxLayer offset={0.2} speed={-0.5}>
            <Grid container justify="center">
              <Img fixed={data.file.childImageSharp.fixed}/>
            </Grid>
          </ParallaxLayer>

          {/* First Section */}
          <ParallaxLayer factor={.75} offset={.5} speed={0}>
            <Grid className={classes.section} container justify="center" alignItems={"center"}>
              <Grid item xs/>
              {/* xs 9 controls the width */}
              <Grid item xs={9}>
                <Typography variant={"h1"} color={"textPrimary"}>
                  That’s right, we’re back, babyyyy!
                </Typography>
                <Typography variant={"body1"} color={"textPrimary"}>
                  Lamb and libations can’t stay apart for long, and soon they’ll be reunited once again! Last year was
                  a
                  hell of a ride. A weekend of lamb and beer graced by a dusting of snow, flakes falling on all of
                  your
                  smiling faces. Vinny Dom made a spectacular video of the whole shebang, placed here for both
                  nostalgia
                  and stoke.
                </Typography>
              </Grid>
              <Grid item xs/>
            </Grid>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={1.5} speed={.25}>
            <Grid container justify="center" alignItems={"center"}>
              <Grid item xs/>
              <Grid item xs={9}>
                <YouTube className={classes.youtubePlayer} containerClassName={classes.youtubeContainer}
                         videoId="Bs3TupLIqnk" opts={{
                  playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: (false ? 1 : 0)
                  }
                }}/>
                <Typography align={"center"} variant={"subtitle1"} color={"textPrimary"}>
                  Shoutout to Vinny for the awesome piece. Go check out his other stuff here.
                </Typography>
              </Grid>
              <Grid item xs/>
            </Grid>
          </ParallaxLayer>


          <ParallaxLayer factor={1.5} offset={2} speed={.5}>
            <Grid className={classes.section} container justify="center" alignItems={"center"}>
              <Grid item xs/>
              <Grid item xs={9}>
                <Typography variant={"h1"} color={"textPrimary"}>
                  What It's All About
                </Typography>
                <Typography variant={"body1"} color={"textPrimary"}>
                  A lot of smiling faces, yeah? We want to keep it that way, so we’ve put together a list of values to
                  keep in mind for the coming event. These aren’t meant as hard rules, just a guide to try to get on
                  the
                  same wavelength.

                  - Community
                  - This one’s huge. It’s really the whole point of the event. To gather a bunch of wonderful humans
                  together
                  so that everyone can meet someone new. While it’s great to hang with your friends, there will be a
                  lot
                  of new
                  friends here waiting to be made.

                  - Respect, Kindess, Love, etc.
                  - I know it sounds kind of patronizing, but it’s good to remind ourselves every once and awhile.
                  This
                  applies
                  to everyone, from self-proclaimed assholes to work-hardened saints.

                  - FUN
                  - The most cliché of them all. But taken together with the first two, it reaches a whole new plane.
                  Want
                  to
                  play in the mud? Sweet! Why not ask someone else if they want to join. Got a fiddle to play in the
                  trees? Invite that sick dude with the harmonica (me).

                  Alright, now that we have that out of the way, here’s what’s new for the coming roast.

                  - New Musical Talent
                  - General Mojo’s, your homegrown psychedelic experience
                  - Ben Hunter & Joe Seamons, also homegrown, with the sweet sweet sounds of bluegrass

                  - Bigger fire!

                  - More fire extinguishers

                  - If you didn’t click the links to the music, do yourself a favor and check em out

                  - Official Lamb Roast x Klean Kanteen Pint Cups to for lifelong memories and no plastic cup waste!
                  - This comes with your ticket. We won’t be providing any disposable drink ware, or eat ware for that
                  matter
                </Typography>
              </Grid>
              <Grid item xs/>
            </Grid>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={3.25} speed={0.5}>
            <Grid container className={classes.root} spacing={4}>
              <Grid item xs={12}>
                <Grid container justify={"center"} alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography variant={"body1"} color={"textPrimary"}>
                      If you’ve got a code, throw it in the form below to RSVP and receive instructions for payment.

                      GET STOKED

                      Sincerely,
                      Foot in the Door Cooperative
                    </Typography>
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
          </ParallaxLayer>
        </Parallax>

      </ThemeProvider>
    </Layout>
  );
};

export const query = graphql`
        query {
        file(relativePath: {eq: "lamb-icon.png"}) {
        childImageSharp {
        fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
      }
      }
      }
        `;

export default IndexPage;
