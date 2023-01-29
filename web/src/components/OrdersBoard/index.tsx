import { Order } from '../../types/Order';
import { Orders } from '../Orders';
import { Board, OrdersContainer } from './style';

interface PropsOrdersBoard {
  icon:string,
  title: string,
  orders: Order[]

}
export function OrdersBoard({icon, title, orders}: PropsOrdersBoard) {

  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(2)</span>
      </header>
      {
        orders.length > 0 && (
          <OrdersContainer>
            {
              orders.map((order) => (
                <button type="button" key={order._id}>
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
