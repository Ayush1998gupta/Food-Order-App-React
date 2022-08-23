import classes from './Cart.module.css';

const Cart = () => {
  const cartitem = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Sushi',
          amount: 20,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.52</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
