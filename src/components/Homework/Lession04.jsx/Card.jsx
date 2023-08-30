import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Product" description="Price: $" />
    <button
      style={{
        border: "1px solid #adadad",
        borderRadius: 10,
        padding: "3px 6px",
        marginRight: "15px",
        fontSize: "12px",
        marginTop: "10px",
      }}
    >
      Add to cart
    </button>
    <button
      style={{
        border: "1px solid #adadad",
        borderRadius: 10,
        padding: "3px 6px",
        fontSize: "12px",
      }}
    >
      Add to wishlist
    </button>
  </Card>
);
export default App;
