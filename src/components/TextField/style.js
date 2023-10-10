import styled from 'styled-components'
 
export const TextFieldDiv = styled.div`
    display: flex;
    /* width: 350px;
    height: 60px; */
`
export const TextInput = styled.input`

    /* width: 350px; */
    height: 30px;
    /* padding: 10px; */
    /* border: solid black 1px; */
    /* border-radius: 10px;  */
    background-color: #f0f2f5;
    width: 340px;
    padding: 5px;
    padding-left: 10px;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-style: none;
    border: 2px solid lightgray;
    color: #333333;

    &:focus{
        outline: 2px solid #2D2D2D;
        border: none;
        font-size: 16px;
        color: black;
    }
`