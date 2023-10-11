import styled from 'styled-components'

export const Container = styled.div`
 background-color: #f0f2f5;
 height: 30px;
 width: 440px;
 padding: 6px 15px;
 border-radius: 8px;
 margin-top: 10px;
 margin-bottom: 10px;
 display: flex;
 justify-content: space-around;
 
 & > div{
      display: flex;
      gap: 8px;
      align-items: center;
 }
`