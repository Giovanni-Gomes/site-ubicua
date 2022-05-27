import styled from 'styled-components';

export const Swiper = styled.div`
  width: 100%;
  max-width: 100%;
  /* padding-top: 3rem; */
  overflow: auto;
  touch-action: pan-y;
  overflow-x: hidden;

  > ul.swiper-list {
    display: flex;
    min-width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: transform 0.3s ease-out;

    > li {
      width: 100%;
      flex-shrink: 0;
      min-height: 15rem;
      > img {
        width: 100%;
        height: 100%;
        user-select: none;
        border-radius: 1rem;
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