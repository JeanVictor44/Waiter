import { Actions, Content, OrderDetails, Overlay } from './style';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import {  useEffect } from 'react';

interface OrderModalProps {
  isModalopen: boolean,
  order: Order | null,
  closeModal(): void
}

export function OrderModal({isModalopen, order, closeModal}: OrderModalProps){
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent){
      if(e.key === 'Escape') {
        closeModal();
      }
    }
    document.addEventListener('keydown',handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  if(!isModalopen || !order){
    return null;
  }

  const total = order.products.reduce((total, {product, quantitiy}) => {
    return total + (product.price * quantitiy);
  }, 0);

  return (
    <Overlay>
      <Content>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button'>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal}/>
          </button>
        </header>
        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕗' }
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>

              {order.status === 'WAITING' && 'FIla de espera' }
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}

            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {
              order.products.map(({_id, product, quantitiy}) => (
                <div className="item" key={_id}>
                  <img src={`http://localhost:3001/uploads/${product.imagePath}`} width='80' height='50.9' />
                  <span className="quantity">{quantitiy}x</span>
                  <div>
                    <strong>{product.name}</strong>
                    <small>{formatCurrency(product.price)}</small>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
        <Actions>
          <button type="button" className='primary'>
            <span>🧑‍🍳</span>
            <span>Iniciar Produção</span>
          </button>
          <button type="button" className='secondary'>
            Cancelar Pedido
          </button>
        </Actions>
      </Content>
    </Overlay>
  );
}
