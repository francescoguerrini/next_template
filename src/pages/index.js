// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import { Container, Button, Grid, Col, Text, Link } from "@nextui-org/react";
import InfoCard from "../components/info-card";
import MyNavbar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import MyAvatar from "../components/Avatar";
import MyCollapse from "../components/Collapse";
import MyUser from "../components/User";
import MyButton from "../components/MyButton";
import AModal from "../components/AModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Container display="grid" justify="flex-end"></Container> */}
      <Container>
        <MyNavbar />

        <Jumbo />
        <Grid.Container gap={2}>
          <Grid sx={12} sm={4}>
            <InfoCard
              label="main"
              title="my very first next website"
              imageUrl="https://littlevisuals.co/images/sunset.jpg"
              aNumber="1"
            />
          </Grid>
          <Grid sx={12} sm={4}>
            <InfoCard
              label="2nd"
              title="my very second next card"
              imageUrl="https://littlevisuals.co/images/peace.jpg"
              aNumber="2"
            />
          </Grid>
          <Grid sx={12} sm={4}>
            <InfoCard
              label="3rd"
              title="anything else worth"
              imageUrl="https://littlevisuals.co/images/made-in.jpg"
              aNumber="3"
            />
          </Grid>
        </Grid.Container>
        <MyButton />
        <MyAvatar />
        <MyCollapse />
        <MyUser />
      </Container>
      <Footer />
      <AModal />
    </>
  );
}
