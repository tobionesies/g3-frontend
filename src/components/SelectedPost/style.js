import styled from "styled-components";
 
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
`;
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
`;
 
export const LeftCol = styled.div`
  flex: 1;
`;
 
export const Informations = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;
 
export const RightCol = styled.div`
  flex: 1;
`;
export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
  cursor: pointer;
`;
export const CommentContainer = styled.div`
  background-color: #e0dcdc;
  border-radius: 10px;
  margin-right: 10px;
  position: relative;
`;
export const CommentUsername = styled.div`
  font-weight: bold;
`;
export const CommentContent = styled.div``;
export const AllCommentsContainer = styled.div`
  display: flex;
  height: 355px;
  overflow-y: scroll;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;
export const SendButton = styled.div`
  cursor: pointer;
  background-color: #e0dcdc;
  width: fit-content;
  padding: 10px 12px;
  font-weight: bold;
`;
export const DateOfComment = styled.div`
  font-style: italic;
  position: absolute;
  bottom: 2px;
  right: 6px;
  font-size: 12px;
`;
 