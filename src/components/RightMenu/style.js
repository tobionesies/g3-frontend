import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  
  flex-direction: row; 
  max-width: 250px;
  height: 100%;
  align-items: flex-start; 
  justify-content: flex-start; 
  border-left: solid #c7c7c7 1px;
  position: fixed;
  right:0;
  
`;

export const RightMenuDiv = styled.div`
  padding: 10px;
 
  /* width: 250px;
  height: 600px; */
`;

export const ContentDiv = styled.div`
  /* Add your styles for the content here */
`;

export const RightMenuItem = styled.div`
  width: 200px;
  height: 40px;
  padding: 10px;

  &:hover {
    font-weight: bold;
  }
  
`;


