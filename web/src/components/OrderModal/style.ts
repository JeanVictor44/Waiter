import styled from 'styled-components';

export const Overlay = styled.div `
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top:0;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div `
  background-color: #fff;
  width:488px;
  border-radius:8px;
  position:absolute;
  padding:32px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: 24px;

    }
    button {
      border:0;
      background-color: transparent;
      line-height: 0;
    }


  }
  div.status-container {
    margin-top:32px ;
    display: flex;
    flex-direction: column;
    gap:8px;
    small {
      font-size:14px;
      opacity: 0.8;

    }
    div {
      display: flex;
      margin-top:8px;
      align-items: center;
      gap:8px;
    }
  }

`;

export const OrderDetails = styled.div `
  margin-top: 32px;
  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }
  .order-items {
    margin-top:16px;

    .item {
      display:flex;
      > div {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        small {
          font-size:14px;
          color:#666;
        }
      }

      img {
        border-radius:6px;
      }
      & + .item {
        margin-top: 16px;
      }
      .quantity {
        font-size: 14px;
        color:#666;
        margin:0 12px;

      }
    }
  }
  .total {
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    span {
      font-size:14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
display: flex;
flex-direction:column ;
margin-top:32px;
  .primary {
    background-color: #333;
    border-radius: 48px;
    border:0;
    color:#fff;
    padding:12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
  }
  .secondary {
    padding:14px 24px;
    color: #d73055;
    font-weight: bold;
    border:0;
    background-color: transparent;
    margin-top:8px;
  }

`;
