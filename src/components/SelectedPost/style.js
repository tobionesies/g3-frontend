import styled from 'styled-components'

export const Container = styled.div`
    /* display: flex;
    width: 50%;
    z-index: 9;
    position: absolute;
    background-color: bisque; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    `
export const Content = styled.div`
    background-color: #fff;
    display: flex;
    flex-flow: row nowrap;
    padding: 20px 35px 20px 20px;
    gap: 2%;
    border-radius: 8px;
    position: relative;
    z-index: 1001; /* Ensure the content appears above the overlay. */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    
    `

export const LeftCol = styled.div`
    flex: 1;
    background-color: tomato;
    
    `

export const RightCol = styled.div`
    flex: 1;
    background-color: beige;

`
export const CloseBtn = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 148%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1002;
    `