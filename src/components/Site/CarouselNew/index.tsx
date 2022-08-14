import React from 'react';
import BackgroundSlider from "react-background-slider";
import { ContainerCarousel } from './styles';
//import Jump from "react-reveal/Jump";

const CarouselNew: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  ];
  const titles = [
    "Home",
    "Titulo 2",
    "Titulo 3",
  ]
  return (
    <ContainerCarousel >
      <div>
        {/* <Jump>
          <h1>{titles[0]}</h1>
          <h1>Stay On [Tag]</h1>
        </Jump> */}
      </div>
      <div>
        <BackgroundSlider images={images} duration={10} transition={2} />
      </div>
    </ContainerCarousel>
  );
}

export default CarouselNew;
