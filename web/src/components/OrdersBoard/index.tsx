import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './style';

interface PropsOrdersBoard {
  icon:string,
  title: string,
  orders: Order[]

}
export function OrdersBoard({icon, title, orders}: PropsOrdersBoard) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  function handleOpenModal(order: Order){
    setIsModalOpen(true);
    setSelectedOrder(order);
  }
  function handleCloseModal(){
    setIsModalOpen(false);
    setSelectedOrder(null);
  }
  return (
    <Board>
      <OrderModal isModalopen={isModalOpen} order={selectedOrder} closeModal={handleCloseModal}/>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {
        orders.length > 0 && (
          <OrdersContainer>
            {
              orders.map((order) => (
                <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              ))
            }
          </OrdersContainer>
        )
      }

    </Board>
  );
}
