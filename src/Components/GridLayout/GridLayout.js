import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem/GridItem";

const useStyles = makeStyles((theme) => ({
  mainGridItem: {
    backgroundColor: "lightblue",
  },
  secondRowFirstItem: {
    backgroundColor: "lightgreen",
  },
  secondRowSecondItem: {
    backgroundColor: "orange",
  },
  thirdRowFirstItem: {
    backgroundColor: "purple",
  },
  thirdRowSecondItem: {
    backgroundColor: "yellow",
  },
  thirdRowThirdItem: {
    backgroundColor: "red",
  },
}));

function GridLayout() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem
          title="Excel Masterclass"
          image="https://media.onlinecoursebay.com/2019/03/14051429/2070737_3af1_3.jpg"
          description=" In this 6-level eDegree, you'll learn how to use Excel from the very
          basics all the way to VBA programming and machine learning. You'll
          also learn web automation, Python and Selenium."
        />
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem
          title="Learn to Code and Get Hired"
          image="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/CICD%20processes.jpg?itok=_vRFWXbx"
          description="Do you need a better career? Do you want to become an employed software developer with a high paying job?
          Learn how to code and get hired in this coding interview questions course."
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem
          title="3D Modeling Masterclass"
          image="https://wallpapercave.com/wp/wp9380777.jpg"
          description="In this 17-course bundle, you will build low poly and high poly 3D models. Anyone can learn the free digital art software
          Blender. You will also learn Unity, MakeHuman and Adobe Photoshop."
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem
          title="Business & Side Hustles"
          image="https://startup.info/wp-content/uploads/2021/06/New-Business-scaled.jpeg"
          description="This five-level course will take you from no experience in business into a life of financial wisdom and entrepreneurship.
          You will learn from a successful CEO how to be profitable."
        />
      </Grid>
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem
          title="Game Development"
          image="https://itchronicles.com/wp-content/uploads/2021/04/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-scaled.jpeg"
          description="This bundle of 14 Unity courses will teach you how to build games from Scratch. You will learn C#, Blender, Adobe Photoshop,
          Adobe Illustrator, and Unity machine learning with Python."
        />
      </Grid>
    </Grid>
  );
}

export default GridLayout;
