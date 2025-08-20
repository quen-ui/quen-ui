import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePageWrapper = styled.div`
  background: #1E1133;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  color: #FFFFFF;
  
  a {
    text-decoration: none;
  }
  
  .text {
    color: white;
  }


  .showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .showcase-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const HeroStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 16px;
`;


export const HomePageLogoStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FadeInSectionStyled = styled(motion.div)`
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  
  .quen-ui__title, .quen-ui__text {
    color: #FFF;
  }
  
  .quen-ui__card {
    height: 100%;
  }
`

