import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Detail = styled.div`
  padding-bottom: 70px;
`;

export const ImageThumbnail = styled.div`
  width: 100%;
  background: #151515;
  display: flex;
  align-items: center;
  h1 {
    color: white;
    flex-grow: 1;
    text-align: center;
  }

  img {
    padding-left: 90px;
    width: 364px;
    height: 403px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    img {
      padding: 0;
      margin: 0 auto;
      max-width: 100%;
      max-height: 250px;
    }

    h1 {
      margin: 10px 0;
    }
  }
`;

export const HeroDetail = styled.div`
  padding: 25px 120px;

  h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 25px;
  }
`;
