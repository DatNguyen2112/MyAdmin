import "../Orders/Order.css";
import Sidebar from "../sidebar/sidebar";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../config/config.js";

function Orders() {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchProduct = db
      .collection("Costumer-Cart-Total ")
      .limit(100)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            ID: doc.id,
            ...doc.data(),
          };
        });
        setData(data);
      });
    return fetchProduct;
  }, []);



  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 400,
    },
    { field: "ProductName", headerName: "Tên sản phẩm", width: 400 },

    {
      field: "Sex",
      headerName: "Giới tính",
      width: 120,
    },
    {
      field: "Size",
      headerName: "Kích cỡ",
      width: 120,
    },
    { field: "Quantity", headerName: "Số lượng", width: 120 },
    { field: "Price", headerName: "Giá", width: 120 },
    { field: "Buyer", headerName: "Custumer", width: 150 },
    { field: "State", headerName: "Tình trạng", width: 120 },
    
  ];

  const rows = data.map((item) => {
    return {
      id: item.ID,
      ProductName: item.description,
      Sex: item.checked,
      Size: item.check,
      Quantity: item.qty,
      Price: item.TotalProductPrice.toLocaleString("de-DE"),
      Buyer: item.Buyer,   
      State: "Đang xử lý",
    };
  });

  return (
    <div className="Orders">
      <Sidebar />
      <div className="Users-table">
        <div style={{ textAlign: "center", width: 1000 }}>ORDERS</div>
        <div style={{ height: 400, width: 1000, paddingTop: 20 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(rows) => rows.id + rows.ProductName}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
