import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Detail = styled.div``;

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
`;

export const HeroDetails = styled.div`
  padding: 25px 120px;

  h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
  }
`;
