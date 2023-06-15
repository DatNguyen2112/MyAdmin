import "../Products/Products.css";
import Sidebar from "../sidebar/sidebar";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../config/config.js";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = db
      .collection("Products")
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

  // console.log(data)

  const columns = [
    { field: "id", headerName: "ID", width: 400 },
    { field: "ProductName", headerName: "Tên sản phẩm", width: 400 },
    { field: "Price", headerName: "Giá", width: 200 },
    {
      field: "Sex",
      headerName: "Giới tính",
      width: 200,
    },
    {
      field: "Size",
      headerName: "Kích cỡ",
      width: 200,
    },
  ];

  const rows = data.map((item) => {
    return {
      id: item.ID,
      ProductName: item.description,
      Price: item.price.toLocaleString("de-DE"),
      Sex: item.checked,
      Size: item.check,
    };
  });

  return (
    <div className="Products">
      <Sidebar />
      <div className="Users-table">
        <div style={{ textAlign: "center", width: 1000 }}>PRODUCTS</div>
        <div style={{ height: 400, width: 1000, paddingTop: 20 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(rows) => rows.ProductName + rows.Price}
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

export default Products;
