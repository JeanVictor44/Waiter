import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container} from './styles';

const ArrayOrders: Order[] = [
  {
    _id: '785',
    products: [
      {
        _id: '552',
        imagePath: 'pizza.jpg',
        name: 'Pizza quente',
        price: 45,
        quantity: 20
      }
    ],
    status: 'WAITING',
    table: '70'
  },
  {
    _id: '784',
    products: [
      {
        _id: '552',
        imagePath: 'pizza.jpg',
        name: 'Pizza quente',
        price: 45,
        quantity: 20
      },
      {
        _id: '555',
        imagePath: 'coca.jpg',
        name: 'Coca gelada',
        price: 45,
        quantity: 20
      },
    ],
    status: 'WAITING',
    table: '50'
  }
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
