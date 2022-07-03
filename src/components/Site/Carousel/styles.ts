import styled from 'styled-components';

export const Swiper = styled.div`
  /* width: 120%;
  max-width: 120%; */
  /* width: 100vw;
  height: 600px; */
  width: 100%;

  /* padding-top: 3rem;
  /* width: 100%;
  height: 100%; */
  overflow: auto;
  touch-action: pan-y;
  overflow-x: hidden;

  > ul.swiper-list {
    display: flex;
    /* min-width: 100%; */
    list-style: none;
    padding: 0 0 0 80px;
    margin: 0;
    transition: transform 0.3s ease-out;


    > li {
      /* width: 100%; */
      width: 100%;
      flex-shrink: 0;
      /* min-height: 15rem; */
      > img {
        /* width: 100%; */
        /* width: 100%; */
        min-width: 460px;
        max-width: 600px;

        min-height: 490px;
        max-height: 500px;
        /* align-items: right; */
        /* margin: 0 2rem; */
        user-select: none;
        border-radius: 1.5rem 1.5rem;
      }
    }
  }

  > .swiper-list.is-swiping {
    transition: none;
  }

  > ul.swiper-indicator {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;
    > li.swiper-indicator-item {
      width: 12px;
      height: 12px;
      margin: 0 4px;
      border-radius: 50%;
      background-color: #777777;
      cursor: pointer;
    }
    > li.swiper-indicator-item.active {
      background-color: #cccccc;
    }
  }
`;
