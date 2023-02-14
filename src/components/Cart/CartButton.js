import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-indx';
import {useDispatch} from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartButtonHandler =()=> {
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
