import "../Home/Home.css";
import Sidebar from "../sidebar/sidebar";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { db } from "../config/config.js";

function Home() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [custumer, setCustumer] = useState([]);
  const [revenue, setRevenue] = useState([]);

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
        setProduct(data);
      });
    return fetchProduct;
  }, []);

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
        setCustumer(data);
      });
    return fetchProduct;
  }, []);

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
        setRevenue(data);
      });
    return fetchProduct;
  }, []);

  const fetchTotalProduct = revenue.map((rev) => {
    return rev.TotalProductPrice;
  });

  const reduceOfPrice = fetchTotalProduct.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  return (
    <div className="Home">
      <Sidebar />
      <div className="Container">
        <div className="Home_container">
          <div className="Home_container-orders">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="Order-info">
              <div className="Order-title">Đơn đặt hàng</div>
              <div className="Order-Qty">{data.length}</div>
            </div>
          </div>
          <div className="Home_container-orders">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="Order-info">
              <div className="Order-title">Số sản phẩm</div>
              <div className="Order-Qty">{product.length}</div>
            </div>
          </div>
          <div className="Home_container-orders">
            <i className="fa-solid fa-user"></i>
            <div className="Order-info">
              <div className="Order-title">Người dùng</div>
              <div className="Order-Qty">{custumer.length}</div>
            </div>
          </div>
          <div className="Home_container-orders">
            <i className="fa-solid fa-money-check-dollar"></i>
            <div className="Order-info">
              <div className="Order-title">Doanh thu</div>
              <div className="Order-Qty">
                {reduceOfPrice.toLocaleString("de-DE")} đ
              </div>
            </div>
          </div>
        </div>
        <div className="Charts">
          <div className="Charts1">
            <div style={{ paddingBottom: 20 }}>
              THỐNG KÊ NGƯỜI DÙNG THAM GIA MUA SẮM 6 THÁNG GẦN NHẤT TÍNH THEO %
            </div>
            <div className="mixed-chart">
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="600"
              />
            </div>
          </div>

          <div className="Charts2">
            <div style={{ paddingBottom: 20 }}>
              THỐNG KÊ SỐ LƯỢNG ĐƠN ĐẶT HÀNG 6 THÁNG GẦN NHẤT TÍNH THEO %
            </div>
            <div className="mixed-chart">
              <Chart
                options={states.options}
                series={states.series}
                type="area"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
