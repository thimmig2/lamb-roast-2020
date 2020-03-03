import React from "react";

import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import YouTube from "react-youtube";

const useStyles = makeStyles(theme => ({
  marginAutoItem: {
    margin: "auto"
  }
}));

const videoOpts = {
  height: "390",
  width: "640",
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const IndexPage = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container justify="center">
        <Img fixed={data.file.childImageSharp.fixed}/>
      </Grid>
      <h1>Hi people</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl. Eget magna fermentum iaculis eu. Blandit libero
        volutpat sed cras ornare arcu. Viverra mauris in aliquam sem fringilla ut morbi. Quam nulla porttitor massa id
        neque aliquam vestibulum morbi. Dignissim convallis aenean et tortor at risus viverra adipiscing. Nunc faucibus
        a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam viverra orci sagittis. Eget
        egestas purus viverra accumsan in nisl. Ac tortor dignissim convallis aenean et tortor at risus viverra. Eget
        magna fermentum iaculis eu non diam. Donec massa sapien faucibus et molestie ac. Sem integer vitae justo eget
        magna. Venenatis urna cursus eget nunc scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
        quam. At tellus at urna condimentum. Eget egestas purus viverra accumsan in.</p>
      <Grid container justify="center">
        <YouTube videoId="Bs3TupLIqnk" opts={videoOpts}
        />
      </Grid>
      <h1>Looking forward</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl. Eget magna fermentum iaculis eu. Blandit libero
        volutpat sed cras ornare arcu. Viverra mauris in aliquam sem fringilla ut morbi. Quam nulla porttitor massa id
        neque aliquam vestibulum morbi. Dignissim convallis aenean et tortor at risus viverra adipiscing. Nunc faucibus
        a pellentesque sit amet porttitor eget. Fermentum dui faucibus in ornare quam viverra orci sagittis. Eget
        egestas purus viverra accumsan in nisl. Ac tortor dignissim convallis aenean et tortor at risus viverra. Eget
        magna fermentum iaculis eu non diam. Donec massa sapien faucibus et molestie ac. Sem integer vitae justo eget
        magna. Venenatis urna cursus eget nunc scelerisque. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus
        quam. At tellus at urna condimentum. Eget egestas purus viverra accumsan in.</p>
      <Grid container justify="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          <Button>Open Sesame</Button>
        </form>
      </Grid>

    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "lamb-icon.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
