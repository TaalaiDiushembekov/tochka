import React from 'react';
import Main from "../components/Main";
import Discount from "../components/Discount";
import Level from "../components/Level";
import ExpertTeam from "../components/ExpertTeam";
import Footer from "../components/Footer";
import Ceo from "../components/Ceo";
import Container from "@material-ui/core/Container";
import Service from "../components/Service";


const Home = () => {
    return (
        <div>
            <Container>
              <Main />
              <Discount />
            </Container>
              <Level />
            <Container>
              <ExpertTeam />
              <Service/>
            </Container>
            <Ceo />
            <Footer />

        </div>
    );
};

export default Home;
