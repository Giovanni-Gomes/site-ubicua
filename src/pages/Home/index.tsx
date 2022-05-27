import React from 'react';
import { Widget } from "../../components/Widget";
import Section from "../../components/Section"
import SideMenu from "../../components/SideMenu"
import MenuForm from "../../components/MenuForm"
import Carousel from '../../components/Carousel';

import carouselImages from '../../data/carousel';
import data from "../../data";

//import { Container } from './styles';

const Home: React.FC = () => {
  const showCarousel = <Carousel items={carouselImages} />;

  return (
    <>
      <Section variant="blue" title={data[0].title} description={data[0].description} element={showCarousel} />
      <Section variant="beige" title={data[1].title} description={data[1].description} />
      <Section variant="blue" title={data[2].title} description={data[2].description} />
      <Section variant="white" title={data[3].title} description={data[3].description} />
      <Section variant="black" title={data[4].title} description={data[4].description} />
      <SideMenu >
        <MenuForm />
      </SideMenu>
      <Widget />
    </>
  );
}

export default Home;