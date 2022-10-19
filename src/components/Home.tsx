import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <ol className="container mt-3 list-group list-group-numbered">
      {data &&
        data.map((item, i) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={i}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
                Content for list item
              </div>
              <span className={`badge bg-${item.completed ? "success" : "danger"} rounded-pill`}>{item.completed ? "✔" : "X"}</span>
            </li>
          )
        })}
    </ol>
  );
};

export default Home;