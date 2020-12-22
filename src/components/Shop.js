import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import RightPanel from "./rightPanel";
import LeftPanel from "./leftPanel";

const Shop = (props) => {
  const { items } = props;
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);

  const addItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var index = cart.findIndex((iter) => iter.name === item.name);
      cart[index].quantity += 1;
      cart[index].totalPrice = cart[index].quantity * cart[index].price;
      setSubTotal(subTotal + cart[index].price);
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
      setSubTotal(subTotal + item.totalPrice);
    }
  };

  const removeItem = (item) => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      var index = cart.findIndex((iter) => iter.name === item.name);
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cart[index].totalPrice = cart[index].quantity * cart[index].price;
        setCart([...cart]);
        setSubTotal(subTotal - cart[index].price);
      } else {
        setCart(cart.filter((pro) => pro.name !== item.name));
        setSubTotal(subTotal - cart[index].price);
      }
    }
  };

  const calcSubTotal = (newCart, tempCoupon) => {
    if (newCart !== undefined && newCart !== null && newCart !== []) {
      var tot = 0;
      for (var i = 0; i < cart.length; i++) {
        tot += cart[i].quantity * cart[i].price;
      }
      setSubTotal(tot);
    }
  };

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
    calcSubTotal(cart, event.target.value);
  };

  return (
    <div>
      <Grid className="GridRoot">
        <LeftPanel items={items} addItem={addItem} removeItem={removeItem} />
        <Divider orientation="vertical" />
        <RightPanel
          cart={cart}
          coupon={coupon}
          handleCouponChange={handleCouponChange}
          subTotal={subTotal}
        />
      </Grid>
    </div>
  );
};

export default Shop;
