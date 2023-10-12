import styled from 'styled-components'

export const Container = styled.div`
      border-bottom: solid 1px #c1c6c9;
      width: 450px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
`
export const PostHeader = styled.div`
     display: flex;
     justify-content: flex-start;
     align-items: center; 
     gap: 10px;
`
export const UserImage = styled.img`
      padding-top: '10px';
      height: 50px;
      width: 50px;
      border-radius: 50%;
      
`
export const ImagePostContainer = styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
`
export const PostImage =styled.img`
     width: 100%;
     padding-top: '10px'
     padding-inline: auto;
     aspect-ratio: 1/1;
`