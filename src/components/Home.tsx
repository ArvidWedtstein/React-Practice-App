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
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.id}</p>
                <a href="#" className={`btn btn-outline-${item.completed ? "success" : "danger"}`}>{item.completed ? "✅" : "❌"}</a>
              </div>
            </div>
          )
        })}
    </>
  );
};

export default Home;