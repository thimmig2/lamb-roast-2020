import React from 'react'

import Layout from '../components/layout'
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import YouTube from 'react-youtube'
import CustomSnowfall from '../components/CustomSnowfall'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
  },
}), {
  factor: 2,
})

const useStyles = makeStyles({
  section: {
    height: '100%',
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
    fontFamily: '\'Trade Winds\', cursive',
  },
  // Styling for headers
  header: {
    fontFamily: '\'Futura\', sans-serif',
  },
  headerTop: {
    fontFamily: '\'Futura\', sans-serif',
    textDecoration: 'underline',
  },
  hiddenOverflow: {
    overflow: 'hidden',
  },
  // Styling for paragraph blocks
  type: {
    fontFamily: '\'Caladea\', serif',
    fontSize: '2rem',
  },
  listDescription: {
    marginLeft: '5vw',
    fontFamily: '\'Caladea\', serif',
    fontSize: '1.7rem',
  },
  pageBackground: {
    background: 'linear-gradient(#009fff, #230046)',
    height: '100%',
  },
  youtubePlayer: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  youtubeContainer: {
    position: 'relative',
    width: '100%',
    'box-sizing': 'border-box',
    'padding-top': '56.25%', // Percentage ratio for 16:9
  },
  codeForm: {
    width: '100%',
  },
  footer: {
    fontFamily: '\'Futura\', sans-serif',
    align: 'center',
    opacity: '0.5',
  },
})

const IndexPage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <ThemeProvider theme={theme}>

        {/* Gradient */}


        <div className={classes.pageBackground}>
          <CustomSnowfall/>


          {/* Logo */}

          <Grid container justify="center">
            <Grid item md={4} sm={6} xs={8}>
              <Img fluid={data.file.childImageSharp.fluid}/>
            </Grid>
          </Grid>


          {/* First Section */}

          <Grid className={classes.section} container justify="center"
                alignItems={'center'}>
            <Grid item xs/>
            {/* xs 9 controls the width */}
            <Grid item xs={9}>
              <Typography variant={'h1'} className={classes.header}
                          align={'center'}
                          color={'textPrimary'}>______</Typography>
              <div className={classes.spacer}/>
              <Typography variant={'h1'} color={'textPrimary'}
                          className={classes.header} align={'center'}>
                We're back, baby!
              </Typography>

              <Typography variant={'h1'} className={[
                classes.header,
                classes.hiddenOverflow].join(' ')}
                          align={'center'}
                          color={'textPrimary'}>__________________</Typography>
              <div className={classes.spacer}/>
              <Typography variant={'body1'} color={'textPrimary'}
                          className={classes.type}>
                Lamb and libations can’t stay apart for long, and soon they’ll
                be reunited once again! Last year was
                a
                hell of a ride. A weekend of lamb and beer graced by a dusting
                of snow, flakes falling on all of
                your
                smiling faces. Vinny Dom made a spectacular video of the whole
                shehbang, placed here for both
                nostalgia
                and stoke.
              </Typography>
            </Grid>
            <Grid item xs/>
          </Grid>
          <div className={classes.spacer}/>


          <Grid container justify="center" alignItems={'center'}>
            <Grid item xs/>
            <Grid item xs={9}>
              <YouTube className={classes.youtubePlayer}
                       containerClassName={classes.youtubeContainer}
                       videoId="Bs3TupLIqnk" opts={{
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: (false ? 1 : 0),
                },
              }}/>
              <div className={classes.spacerSmall}/>
              <Typography align={'center'} variant={'subtitle1'}
                          color={'textPrimary'} className={classes.header}>
                Shoutout to Vinny for the awesome piece!
              </Typography>
            </Grid>
            <Grid item xs/>
          </Grid>
          <div className={classes.spacer}/>


          <Grid className={classes.section} container justify="center"
                alignItems={'center'}>
            <Grid item xs/>
            <Grid item xs={9}>
              <Typography variant={'h1'} color={'textPrimary'}
                          className={classes.header}>
                What It's All About
              </Typography>
              <div className={classes.spacer}/>
              <Typography variant={'body1'} color={'textPrimary'}
                          className={classes.type}>
                So many smiling faces. We want to keep it that way, so we’ve put
                together a list of values to
                keep in mind for the coming event. These aren’t meant as hard
                rules, just a guide to get on the
                same wavelength.
              </Typography>
              <div className={classes.spacer}/>
              <ul>
                <Typography variant={'h1'} className={classes.header}
                            variant={'h3'} color={'textPrimary'}>
                  <li>Community</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography className={classes.listDescription}
                            color={'textPrimary'}>
                  This one’s huge. It’s really the whole point of the event. To
                  gather a bunch of wonderful humans
                  together
                  so that everyone can meet someone new. While it’s great to
                  hang with your friends, there will be a
                  lot
                  of new
                  friends here waiting to be made.
                </Typography>
                <div className={classes.spacer}/>

                <Typography variant={'h1'} className={classes.header}
                            variant={'h3'} color={'textPrimary'}>
                  <li>Respect, Kindess, Love, etc.</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography className={classes.listDescription}
                            color={'textPrimary'}>
                  I know it sounds kind of patronizing, but it’s good to remind
                  ourselves every once and awhile.
                  This
                  applies
                  to everyone, from self-proclaimed assholes to work-hardened
                  saints.
                </Typography>
                <div className={classes.spacer}/>

                <Typography variant={'h1'} className={classes.header}
                            variant={'h3'} color={'textPrimary'}>
                  <li>FUN</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography className={classes.listDescription}
                            color={'textPrimary'}>
                  The most cliché of them all. But taken together with the first
                  two, it reaches a whole new plane.
                  Want
                  to
                  play in the mud? Sweet! Why not ask someone else if they want
                  to join. Got a fiddle to play in the
                  trees? Invite that sick dude with the harmonica (me).
                </Typography>
              </ul>
              <div className={classes.spacer}/>
              <div className={classes.spacer}/>

              <Typography variant={'body1'} color={'textPrimary'}
                          className={classes.type}>
                Alright, now that we have that out of the way, here’s what’s new
                for the coming roast :
              </Typography>
              <div className={classes.spacer}/>
              <ul>

                <Typography variant={'h1'} className={classes.type}
                            variant={'h4'} color={'textPrimary'}>
                  <li>New Musical Talent!</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <ul>
                  <Typography variant={'h1'} className={classes.type}
                              variant={'h4'} color={'textPrimary'}>
                    <li>
                      General Mojo’s, your homegrown psychedelic experience
                    </li>
                  </Typography>
                  <div className={classes.spacerSmall}/>
                  <Grid container justify="center" alignItems={'center'}>
                    <Grid item xs/>
                    <Grid item xs={9}>
                      <YouTube className={classes.youtubePlayer}
                               containerClassName={classes.youtubeContainer}
                               videoId="g6NlvE18vzo" opts={{
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                          autoplay: (false ? 1 : 0),
                        },
                      }}/>
                      <div className={classes.spacerSmall}/>
                    </Grid>
                    <Grid item xs/>
                  </Grid>
                  <Typography variant={'h1'} className={classes.type}
                              variant={'h4'} color={'textPrimary'}>
                    <li>
                      Ben Hunter & Joe Seamons with the sweet sweet sounds of
                      bluegrass
                    </li>
                  </Typography>
                  <div className={classes.spacerSmall}/>
                  <Grid container justify="center" alignItems={'center'}>
                    <Grid item xs/>
                    <Grid item xs={9}>
                      <YouTube className={classes.youtubePlayer}
                               containerClassName={classes.youtubeContainer}
                               videoId="h1aorwUcGs4" opts={{
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                          autoplay: (false ? 1 : 0),
                        },
                      }}/>
                      <div className={classes.spacerSmall}/>
                    </Grid>
                    <Grid item xs/>
                  </Grid>
                </ul>
                <div className={classes.spacerSmall}/>

                <Typography variant={'h1'} className={classes.type}
                            variant={'h4'} color={'textPrimary'}>
                  <li>Bigger fire!</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography variant={'h1'} className={classes.type}
                            variant={'h4'} color={'textPrimary'}>
                  <li>More fire extinguishers</li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography variant={'h1'} className={classes.type}
                            variant={'h4'} color={'textPrimary'}>
                  <li>If you didn’t click the links to the music, do yourself a
                    favor and check em out
                  </li>
                </Typography>
                <div className={classes.spacerSmall}/>
                <Typography variant={'h1'} className={classes.type}
                            variant={'h4'} color={'textPrimary'}>
                  <li>Official Lamb Roast x Klean Kanteen Pint Cups to for
                    lifelong memories and no plastic cup waste (this comes with
                    your ticket. We won’t be providing any disposable drink
                    ware, or eat ware for that matter)!
                  </li>
                </Typography>
                <div className={classes.spacerSmall}/>


              </ul>
            </Grid>
            <Grid item xs/>
          </Grid>


          <div className={classes.spacer}/>
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
              <Grid container justify={'center'} alignItems={'center'}>
                <Grid item xs={6}>
                  <div className={classes.spacerSmall}/>
                  <Typography variant={'h1'} className={classes.header}
                              variant={'h5'}
                              color={'textPrimary'}>:O)</Typography>
                  <div className={classes.spacerSmall}/>
                  <Typography variant={'h1'} className={classes.header}
                              variant={'h5'}
                              color={'textPrimary'}>Sincerely,</Typography>

                  <Typography variant={'h1'} className={classes.header}
                              variant={'h5'} color={'textPrimary'}>Foot in the
                    Door Cooperative</Typography>
                  <div className={classes.spacerSmall}/>


                </Grid>
              </Grid>

            </Grid>
          </Grid>

          <div className={classes.spacer}/>
          <div className={classes.spacer}/>

          <Typography variant={'h5'} align={'center'} className={classes.footer}
                      color={'textPrimary'}>Copyright 2020</Typography>

          <div className={classes.spacer}/>
          <div className={classes.spacer}/>
        </div>

      </ThemeProvider>
    </Layout>
  )
}

export const query = graphql`
    query {
        file(relativePath: {eq: "lamb-icon.png"}) {
            childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`

export default IndexPage
