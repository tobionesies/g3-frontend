import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  
  flex-direction: row; 
  flex: 2;
  align-items: flex-start; 
  justify-content: flex-start; 
  border-left: solid #c7c7c7 1px;
`;

export const RightMenuDiv = styled.div`
  padding: 10px;
  position: fixed;
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
  
`;
