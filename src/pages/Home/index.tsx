import React, { useEffect, useState } from 'react';


import carouselImages from '../../data/carousel';
import data from "../../data";
import api from '../../services/api';
import Carousel from '../../components/Site/Carousel';
import Section, { items } from '../../components/Site/Section';
import SectionTpc from '../../components/Site/SectionTpc';
import SectionTest from '../../components/Site/SectionTest';
import Footer from '../../components/Site/Footer';
import SideMenu from '../../components/Site/SideMenu';
import MenuForm from '../../components/Site/MenuForm';
import { Widget } from '../../components/Site/Widget';
import SectionRight from '../../components/Site/SectionRight';


//import { Container } from './styles';

interface IContentProps {
  id: string;
  title: string;
  description_one: string;
}

const Home: React.FC = () => {
  const showCarousel = <Carousel items={carouselImages} />;
  const imgs = (<><img src="/assets/cell.svg" className='top' /> <img src="/assets/cell02.svg" className='bottom' /></>)
  const img = <img src='/assets/container.svg' />

  const [sectionOne, setSectionOne] = useState<IContentProps[]>([])
  const [sectionTwo, setSectionTwo] = useState<IContentProps[]>([])
  const [sectionThree, setSectionThree] = useState<IContentProps[]>([])
  const [sectionFour, setSectionFour] = useState<IContentProps[]>([])
  const [sectionFive, setSectionFive] = useState<IContentProps[]>([])

  useEffect(() => {
    async function fetchSection() {
      const responseSectionOne = await api.get('v1/sectionOne');
      const responseSectionTwo = await api.get('v1/sectionTwo');
      const responseSectionThree = await api.get('v1/sectionThree');
      const responseSectionFour = await api.get('v1/sectionFour');
      const responseSectionFive = await api.get('v1/sectionFive');

      setSectionOne(responseSectionOne.data);
      setSectionTwo(responseSectionTwo.data);
      setSectionThree(responseSectionThree.data);
      setSectionFour(responseSectionFour.data);
      setSectionFive(responseSectionFive.data);
    }

    fetchSection();
  }, [])

  return (
    <>
      {sectionOne.map((st, key) => (
        <Section key={key} variant="white" sectionTitle={st.title} description={st.description_one} element={showCarousel} />
      ))}


      {sectionTwo.map((st, key) => (
        <SectionTpc key={key} variant="blue" sectionTitle={st.title} description={st.description_one} />
      ))}


      {sectionThree.map((st, key) => (
        <SectionRight key={key} variant="white" sectionTitle={st.title} description={st.description_one} element={img} />
      ))}

      {sectionFour.map((st, key) => (
        <SectionTest key={key} variant="blue" sectionTitle={st.title} description={st.description_one} />
      ))}

      {sectionFive.map((st, key) => (
        <Section key={key} variant="white" sectionTitle={st.title} description={st.description_one} element={items} />
      ))}

      <SectionRight variant="black" sectionTitle={data[5].title} description={data[5].description} element={imgs} />
      <Footer />
      <SideMenu >
        <MenuForm />
      </SideMenu>
      <Widget />
    </>
  );
}

export default Home;