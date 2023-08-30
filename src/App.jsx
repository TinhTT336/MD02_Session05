// import "./App.css";
// import {
//   RadiusBottomleftOutlined,
//   RadiusBottomrightOutlined,
//   RadiusUpleftOutlined,
//   RadiusUprightOutlined,
//   AndroidOutlined,
// } from "@ant-design/icons";
// import React, { useMemo } from "react";
// import { Button, Divider, Space, notification } from "antd";
// const Context = React.createContext({
//   name: "Default",
// });
// // function App() {
// const App = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const openNotification = (placement) => {
//     api.info({
//       message: `Notification ${placement}`,
//       description: (
//         <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
//       ),
//       placement,
//     });
//   };
//   const contextValue = useMemo(
//     () => ({
//       name: "Ant Design",
//     }),
//     []
//   );
//   return (
//     <>
//       {/* <button className=" t-button t-button-primary">Thêm mới</button>
//       <input type="text" className="t-input" placeholder="Enter..." />
//       <h1 className="bg-purple-300 text-rose-950 text-5xl">Hello</h1> */}
//       <Context.Provider value={contextValue}>
//         {contextHolder}
//         <Space>
//           <AndroidOutlined style={{ fontSize: 30, color: "#86BA09" }} />
//           <Button
//             type="primary"
//             onClick={() => openNotification("topLeft")}
//             icon={<RadiusUpleftOutlined />}
//           >
//             topLeft
//           </Button>
//           <Button
//             type="primary"
//             onClick={() => openNotification("topRight")}
//             icon={<RadiusUprightOutlined />}
//           >
//             topRight
//           </Button>
//         </Space>
//         <Divider />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => openNotification("bottomLeft")}
//             icon={<RadiusBottomleftOutlined />}
//           >
//             bottomLeft
//           </Button>
//           <Button
//             type="primary"
//             onClick={() => openNotification("bottomRight")}
//             icon={<RadiusBottomrightOutlined />}
//           >
//             bottomRight
//           </Button>
//         </Space>
//       </Context.Provider>
//     </>
//   );
// };

// export default App;

import React from "react";
import Index from "./components/Homework/Lession01/Index";
import Index02 from "./components/Homework/Lession02/Index02";
import Index03 from "./components/Homework/Lession03/Index03";
import Index04 from "./components/Homework/Lession04.jsx/Index04";
import Index05 from "./components/Homework/Lession05/Index05";

export default function App() {
  return (
    <div>
      {/* <Index /> */}
      {/* <Index02 /> */}
      {/* <Index03 /> */}
      {/* <Index04 /> */}
      <Index05 />
    </div>
  );
}
