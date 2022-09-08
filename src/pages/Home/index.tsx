import React, { useEffect, useState } from 'react'

import carouselImages from '../../data/carousel'
import data from '../../data'
import api from '../../services/api'
import Carousel from '../../components/Site/Carousel'
import Section, { items } from '../../components/Site/Section'
import SectionTpc from '../../components/Site/SectionTpc'
import SectionTest from '../../components/Site/SectionTest'
import Footer from '../../components/Site/Footer'
import SideMenu from '../../components/Site/SideMenu'
import MenuForm from '../../components/Site/MenuForm'
import { Widget } from '../../components/Site/Widget'
import SectionRight from '../../components/Site/SectionRight'
import ChatBotInitial from '../../components/Site/WidgetForm/ChatBot'
import { FaRobot } from 'react-icons/fa'
import { BotButton } from './styles'
import Map from '../../components/Site/Map/Map'
// import { ReactComponent as Button } from '../../components/Site/WidgetForm/ChatBot/assets/robot.svg'
// import { Container } from './styles';
import mapMarkerImg from '/assets/chatbot/robot.svg';
import L from 'leaflet';
import { Marker } from "react-leaflet";

interface IContentProps {
  id: string
  title: string
  description_one: string
}

const Home: React.FC = () => {
  const showCarousel = <Carousel items={carouselImages} />
  const [showBot, setBot] = useState(false)
  function handleBot() {
    console.log('bot start')
    const botState = !showBot
    setBot(botState)
  }

  const imgs = (
    <>
      <img src="/assets/cell.svg" className="top" alt="cell" />
      <img src="/assets/cell02.svg" className="bottom" alt="cellTwo" />
    </>
  )
  const img = <img src="/assets/container.svg" alt="imagem update" />

  const [sectionOne, setSectionOne] = useState<IContentProps[]>([])
  const [sectionTwo, setSectionTwo] = useState<IContentProps[]>([])
  const [sectionThree, setSectionThree] = useState<IContentProps[]>([])
  const [sectionFour, setSectionFour] = useState<IContentProps[]>([])
  const [sectionFive, setSectionFive] = useState<IContentProps[]>([])

  useEffect(() => {
    async function fetchSection() {
      const responseSectionOne = await api.get('v1/sectionOne')
      const responseSectionTwo = await api.get('v1/sectionTwo')
      const responseSectionThree = await api.get('v1/sectionThree')
      const responseSectionFour = await api.get('v1/sectionFour')
      const responseSectionFive = await api.get('v1/sectionFive')

      setSectionOne(responseSectionOne.data)
      setSectionTwo(responseSectionTwo.data)
      setSectionThree(responseSectionThree.data)
      setSectionFour(responseSectionFour.data)
      setSectionFive(responseSectionFive.data)
    }

    fetchSection()
  }, [])

  const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })


  return (
    <>
      {sectionOne.map((st, key) => (
        <Section
          key={key}
          anchor="home"
          variant="white"
          sectionTitle={st.title}
          description={st.description_one}
        />
        /* element={showCarousel} */
      ))}

      {sectionTwo.map((st, key) => (
        <SectionTpc
          key={key}
          anchor="sobre"
          variant="blue"
          sectionTitle={st.title}
          description={st.description_one}
        />
      ))}

      {sectionThree.map((st, key) => (
        <SectionRight
          key={key}
          anchor="contato"
          variant="black"
          sectionTitle={st.title}
          description={st.description_one}
          element={img}
        />
      ))}





      {sectionFour.map((st, key) => (
        <SectionTest
          key={key}
          anchor="depoimento"
          variant="blue"
          sectionTitle={st.title}
          description={st.description_one}
        />
      ))}


      {sectionFive.map((st, key) => (
        <SectionRight
          key={key}
          anchor="apps"
          variant="black"
          sectionTitle={st.title}
          description={st.description_one}
          element={imgs}
        />
      ))}
      {/* <SectionRight
        anchor="apps"
        variant="black"
        sectionTitle={data[5].title}
        description={data[5].description}
        element={imgs}
      /> */}

      {/* {sectionFive.map((st, key) => (
        <Section
          key={key}
          variant="white"
          sectionTitle={st.title}
          description={st.description_one}
          element={items}
        />
      ))} */}



      {/* <Map
        interactive={false}
        center={{ lat: -23.55386927083221, lng: -46.66239774232902 }}
        zoom={10}
        style={{ width: '100%', height: 280 }}
      >
        <Marker interactive={false} icon={happyMapIcon} position={{ lat: -23.55386927083221, lng: -46.66239774232902 }} />
      </Map> */}

      <Footer anchor='footer' />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <Widget />


      {showBot && <ChatBotInitial />}

      <BotButton className="app-chatbot-button" onClick={handleBot}>
        <FaRobot size={38} />
      </BotButton>
    </>
  )
}

export default Home
