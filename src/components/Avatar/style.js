import styled from 'styled-components'

export const Image = styled.image`
`
export const ImageDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      padding-left: 10px;
      padding-top: 3px;

      & > span{
            font-size: 18px;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
      }

      & >img{
            width:40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,0.2)
      }
      & > p{
            margin-left: auto;
            margin-right: 10px;
      }
`