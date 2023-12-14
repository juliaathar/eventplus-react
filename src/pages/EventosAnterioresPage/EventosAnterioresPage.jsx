import React from 'react';
import Container from '../../components/Container/Container';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import Table from '../EventosPage/TableEv/TableEv';
import "./EventosAnterioresPage.css"
import previousImage from "../../assets/images/previous-events.png"
const EventosAnterioresPage = () => {
    return (
        <>
        <MainContent>
            <Container>
                <Title titleText={"Eventos anteriores"} additionalClass="custom-title"/>
                <ImageIllustrator imageName="eventos-anteriores"
                imageRender={previousImage}/>
            </Container>
        </MainContent>
        </>
    );
};

export default EventosAnterioresPage;