import "../CostumerInfo/Costumer.css";
import Sidebar from "../sidebar/sidebar";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../config/config.js";

function Costumer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = db
      .collection("CostumerInfo")
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
    { field: "id", headerName: "ID", width: 400 },
    { field: "Address", headerName: "Địa chỉ nhà", width: 400 },
    { field: "CartQty", headerName: "Số lượng mua", width: 200 },
    { field: "CartPrices", headerName: "Tổng tiền", width: 200 },
    { field: "Constrict", headerName: "Quận", width: 250 },
    {
      field: "Name",
      headerName: "Tên",
      width: 200,
    },
    {
      field: "Phone",
      headerName: "Số điện thoại",
      width: 200,
    },
    {
      field: "time",
      headerName: "Time",
      width: 200,
    },
  ];

  const rows = data.map((item) => {
    return {
      id: item.ID,
      Address: item.Address,
      CartQty: item.CartQuantity,
      CartPrices: item.CartPrice.toLocaleString("de-DE"),
      Constrict: item.Constrict,
      Name: item.Name,
      Phone: item.Phone,
      time: new Date(item.time.toDate()).toLocaleDateString() + " " + new Date(item.time.toDate()).toLocaleTimeString(),
    };
  });

  

  return (
    <div className="Costumer">
      <Sidebar />
      <div className="Users-table">
        <div style={{ textAlign: "center", width: 1000 }}>CUSTOMER INFO</div>
        <div style={{ height: 400, width: 1000, paddingTop: 20 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(rows) => rows.Address + rows.CartQty}
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

export default Costumer;
