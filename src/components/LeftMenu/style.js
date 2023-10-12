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
 
  /* width: 250px;
  height: 600px; */
`;

export const ContentDiv = styled.div`
  /* Add your styles for the content here */
`;

export const LeftMenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 230px;
  height: 25px;
  padding: 10px;
  font-size: 15px;
  font-family: 'Inter',sans-serif;
  line-height: 24px;
  color: ${props => props.isActive ? '#fff' : '#000'};
  background-color: ${props => props.isActive ? '#000' : 'none'};

  & > span{
    margin-left: 15px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => props.isActive ? '#000' : 'lightgrey'};
  }
`;


export const Profile = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0,0,0,0.2);
`
export const Header = styled.div`
  margin-bottom: 10px;
  padding-inline: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.2);

  & > p{
    font-weight: bold;
    font-family: 'Pacifico', cursive;
    font-size: 20px;
  }
`

