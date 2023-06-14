import "../Analytics/Analytics.css";
import Sidebar from "../sidebar/sidebar";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { db } from "../config/config.js";

function Analytics() {
  const [data, setData] = useState([]);

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
    return {
      id: item.ID,
      email: item.Email,
      name: item.Name,
      time:
        new Date(item.time.toDate()).toLocaleDateString() +
        " " +
        new Date(item.time.toDate()).toLocaleTimeString(),
    };
  });

  const fetchTime1 = rows.filter((item) => {
    return item.time.includes("/1/");
  });

  const fetchTime2 = rows.filter((item) => {
    return item.time.includes("/2/");
  });

  const fetchTime3 = rows.filter((item) => {
    return item.time.includes("/3/");
  });
  const fetchTime4 = rows.filter((item) => {
    return item.time.includes("/4/");
  });
  const fetchTime5 = rows.filter((item) => {
    return item.time.includes("/5/");
  });
  const fetchTime6 = rows.filter((item) => {
    return item.time.includes("/6/");
  });

  //   console.log(fetchTime1.length)
  //   console.log(fetchTime2.length)
  //   console.log(fetchTime3.length)
  //   console.log(fetchTime4.length)
  //   console.log(fetchTime5.length)
  //   console.log(fetchTime6.length)

  //   const fetchTimePercent1 = (fetchTime1.length / 6) * 100
  //   console.log(typeof fetchTimePercent1)

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [83, 50, 17, 33, 17, 0],
      },
    ],
  });

  const [states, setStates] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [2, 3, 4, 5, 6, 17],
      },
    ],
  });
  const [datas, setDatas] = useState([]);

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
        setDatas(data);
      });
    return fetchProduct;
  }, []);

  const columnss = [
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

  const rowss = datas.map((item) => {
    return {
      id: item.ID,
      Address: item.Address,
      CartQty: item.CartQuantity,
      CartPrices: item.CartPrice.toLocaleString("de-DE"),
      Constrict: item.Constrict,
      Name: item.Name,
      Phone: item.Phone,
      time:
        new Date(item.time.toDate()).toLocaleDateString() +
        " " +
        new Date(item.time.toDate()).toLocaleTimeString(),
    };
  });

  const fetchTimes1 = rowss.filter((item) => {
    return item.time.includes("/1/");
  });

  const fetchTimes2 = rowss.filter((item) => {
    return item.time.includes("/2/");
  });

  const fetchTimes3 = rowss.filter((item) => {
    return item.time.includes("/3/");
  });
  const fetchTimes4 = rowss.filter((item) => {
    return item.time.includes("/4/");
  });
  const fetchTimes5 = rowss.filter((item) => {
    return item.time.includes("/5/");
  });
  const fetchTimes6 = rowss.filter((item) => {
    return item.time.includes("/6/");
  });

  //   console.log((fetchTimes1.length / 6) * 100)
  //   console.log((fetchTimes2.length / 6) * 100)
  //   console.log((fetchTimes3.length / 6) * 100)
  //   console.log((fetchTimes4.length / 6) * 100)
  //   console.log((fetchTimes5.length / 6) * 100)
  //   console.log((fetchTimes6.length / 6) * 100)
  return (
    <div className="Analytics">
      <Sidebar />
      <div className="Charts">
        <div className="Charts1">
          <div style={{paddingBottom: 20}}>
            THỐNG KÊ NGƯỜI DÙNG THAM GIA MUA SẮM 6 THÁNG GẦN NHẤT TÍNH THEO %
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="100%"
            />
          </div>
        </div>

        <div className="Charts2">
          <div style={{paddingBottom: 20}}>THỐNG KÊ SỐ LƯỢNG ĐƠN ĐẶT HÀNG 6 THÁNG GẦN NHẤT TÍNH THEO %</div>
          <div className="mixed-chart">
            <Chart
              options={states.options}
              series={states.series}
              type="area"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
