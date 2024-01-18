import React from 'react';
import Cnavbar from '../components/Header';
import Chero from '../components/Hero';
import { Container } from 'react-bootstrap';

function Home() {
return(
    <div>
        <Container>
        <Cnavbar />
        </Container>
        <Chero />
    </div>
);

}

export default Home;