import React, { useEffect, useState } from 'react';
import { Widget } from "../../components/Widget";
import Section from "../../components/Section"
import SideMenu from "../../components/SideMenu"
import MenuForm from "../../components/MenuForm"
import Carousel from '../../components/Carousel';

import carouselImages from '../../data/carousel';
import data from "../../data";
import Footer from '../../components/Footer';
import api from '../../services/api';
import SectionLeft from '../../components/SectionLeft';
import Customers from '../../components/Customers';
import Testimonial from '../../components/Testimonial';

//import { Container } from './styles';

interface IContentProps {
  id: string;
  title: string;
  description_one: string;
}

const Home: React.FC = () => {
  const showCarousel = <Carousel items={carouselImages} />;

  const [sectionOne, setSectionOne] = useState<IContentProps[]>([])
  const [sectionTwo, setSectionTwo] = useState<IContentProps[]>([])

  useEffect(() => {
    async function fetchSection() {
      const responseSectionOne = await api.get('v1/sectionOne');
      const responseSectionTwo = await api.get('v1/sectionTwo');

      setSectionOne(responseSectionOne.data);
      setSectionTwo(responseSectionTwo.data);
    }

    fetchSection();
  }, [])

  return (
    <>
      {sectionOne.map(st => (
        <Section variant="white" sectionTitle={st.title} description={st.description_one} element={showCarousel} />
      ))}


      {sectionTwo.map(st => (
        <Section variant="blue" sectionTitle={st.title} description={st.description_one} />
      ))}


      <Section variant="white" sectionTitle={data[2].title} description={data[2].description} />
      <Customers />
      <Testimonial />
      <Section variant="blue" sectionTitle={data[3].title} description={data[3].description} />
      <SectionLeft variant="white" sectionTitle={data[4].title} description={data[4].description} />
      <Section variant="black" sectionTitle={data[4].title} description={data[4].description} />
      <Footer />
      <SideMenu >
        <MenuForm />
      </SideMenu>
      <Widget />
    </>
  );
}

export default Home;