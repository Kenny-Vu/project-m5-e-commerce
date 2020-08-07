import React from "react";

const OrderContents = () => {
  return (
    <OrderContents>
      <OrderTitle>Order Contents</OrderTitle>
      <OrderItems>
        {/* To Do */}
        {/* Hold all the items added to cart here */}
      </OrderItems>
      <OrderTotal>total:</OrderTotal>
      <ConfirmButton>Place Order</ConfirmButton>
    </OrderContents>
  );
};

const OrderContents = styled.div``;

const OrderTitle = styled.div``;

const OrderItems = styled.div``;

const OrderTotal = styled.div``;

const ConfirmButton = styled.button``;

export default OrderContents;
