import styled from 'styled-components';

export const Board = styled.div`
padding:16px;
border:1px solid rgba(204,204,204,0.4);
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
header {
  padding:8px;
  font-size:14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:8px;
}
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:24px;
  gap:24px;
  button {
    height:128px;
    border:1px solid rgba(204,204,204,0.4);
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:4px;

    strong {
      font-weight: 500;
    }
    span {
      font-size:14px;
      color:#666;
    }
  }
`;
