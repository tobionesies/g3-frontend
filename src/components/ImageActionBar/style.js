import styled from 'styled-components'

export const Container = styled.div`
 height: 30px;
 width: 440px;
 margin-top: 5px;
 margin-bottom: 10px;
 display: flex;
 justify-content: space-around;
 
 & > div{
      display: flex;
      gap: 8px;
      align-items: center;
 }
 & >div:hover{
     cursor: pointer;
 }
`