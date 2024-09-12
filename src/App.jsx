import { useState, useEffect } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";

function App() {
  const [showModel, setshowModel] = useState(false);
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchApiData() {
      const Nasa_Key = "8GRhhOabol8718pZwE5OneIKaCHywo5wpyeiwQSD";
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${Nasa_Key}`;

      const today= (new Date()).toDateString()
      const local_key =`Nasa-${today}`
      if(localStorage.getItem(local_key)){
        const apidata= JSON.parse(localStorage.getItem(local_key))
        setdata(apidata)
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url);
        const apidata = await res.json();
        localStorage.setItem(local_key,JSON.stringify(apidata))
        setdata(apidata);
        console.log("Data\n", apidata);

      } catch (err) {
        console.log(err.message);
      }
    }
    fetchApiData();
  }, []);

  function handletoggleModel() {
    setshowModel(!showModel);
  }

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && (
        <Sidebar data={data} handletoggleModel={handletoggleModel} />
      )}

      {data && <Footer data={data} handletoggleModel={handletoggleModel} />}
    </>
  );
}

export default App;
