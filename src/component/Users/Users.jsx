import { DataGrid } from "@mui/x-data-grid";
import "../Users/Users.css";
import Sidebar from "../sidebar/sidebar";
import { useState, useEffect } from "react";
import {db} from '../config/config.js'
function Users() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchProduct = db
      .collection("SignUp")
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
    { field: "email", headerName: "Email", width: 400 },
    { field: "name", headerName: "Name", width: 400 },
    {
      field: "time",
      headerName: "Time",      
      width: 200,
    },   
  ];

  const rows = data.map((item) => {
    return {id: item.ID, email: item.Email, name: item.Name, time: new Date(item.time.toDate()).toLocaleDateString() + " " + new Date(item.time.toDate()).toLocaleTimeString()}       
  })
  
  const fetchTime1 = rows.filter((item) => {
    return item.time.includes('/1/');
  })

  const fetchTime2 = rows.filter((item) => {
    return item.time.includes('/2/');
  })

  const fetchTime3 = rows.filter((item) => {
    return item.time.includes('/3/');
  })
  const fetchTime4 = rows.filter((item) => {
    return item.time.includes('/4/');
  })
  const fetchTime5 = rows.filter((item) => {
    return item.time.includes('/5/');
  })
  const fetchTime6 = rows.filter((item) => {
    return item.time.includes('/6/');
  })

  

  return (
    <div className="Users">
      <Sidebar />
      <div className="Users-table">
        <div style={{textAlign: 'center', width: 1500 }}>USERS</div>
        <div style={{ height: 400, width: 1500, paddingTop: 20}}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(rows) => rows.email + rows.name}
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

export default Users;
