import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container} from './styles';

const ArrayOrders: Order[] = [
  {
    _id: '63d925fab422d84c021e3dc9',
    table: '10',
    status: 'WAITING',
    products: [
      {
        _id:'63d135dca557bde277ec7375',
        quantitiy: 2,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1674655196337-quatro-queijos.png',
          price: 40.8,
        }
      },
      {
        _id:'63d135dca557bde277ec7375',
        quantitiy: 2,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1674655196337-quatro-queijos.png',
          price: 40.8,
        }
      }

    ],
  },


];
export function Orders(){
  return (
    <Container>
      <OrdersBoard icon='🕗' title='Fila de espera' orders={ArrayOrders}/>
      <OrdersBoard icon='🧑‍🍳' title='Em preparação' orders={[]}/>
      <OrdersBoard icon='✅' title='Pronto!' orders={[]}/>
    </Container>
  );
}
