import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: space-between; 
  width: 250px;
  border-right: solid #c7c7c7 1px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

`;

export const LeftMenuDiv = styled.div`
  padding: 10px;
  padding-left: 10px;
  /* width: 250px;
  height: 600px; */
`;

export const ContentDiv = styled.div`
  /* Add your styles for the content here */
`;

export const LeftMenuItem = styled.div`
  width: 200px;
  height: 40px;
  padding: 10px;
`;

export const Profile = styled.div`
  width: 90%;
  height: 60px;
  margin-inline: 10px;
  border-top: 1px solid rgba(0,0,0,0.2);
`


