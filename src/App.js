import "./App.css";
import Info from "./Info.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Navbar from "./Navbar";

function App() {
  const [input, setInput] = useState("");
  const [homeData, setHomeData] = useState(null);
  const [loadState, setLoadState] = useState("default");
  const baseUrl =
    "https://cpdlnyvmkh.execute-api.us-east-1.amazonaws.com/dev/address/address?address=";

  const updateInput = (e) => {
    setInput(e.target.value.split(",")[0]);
  };

  const searchHome = async () => {
    setLoadState("loading");
    const newUrl = baseUrl + input.toUpperCase();
    console.log(newUrl);
    axios
      .get(newUrl)
      .then((response) => {
        if (response.status === 200) {
          let info = response.data;
          console.log(info);
          console.log(info.name);
          console.log(response.data.name);
          setHomeData(response.data);
          setLoadState("found");
        }
      })
      .catch(function (error) {
        setLoadState("not found");
        console.log("Address not Found");
        console.log(error.response);
      });

    displayHome();
  };

  const displayHome = () => {
    if (loadState === "default") {
      return <div></div>;
    } else if (loadState === "loading") {
      return <Loader />;
    } else if (loadState === "found") {
      return <Info data={homeData} />;
    } else {
      return <h1 className="text-white">Address Not Found</h1>;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted");
  };

  useEffect(() => {
    setLoadState("default");
  }, []);

  return (
    <div className="w-full h-full min-h-screen gradient-bg-welcome pb-20">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="mt-20">
        <div className="w-full lg:w-3/5 m-auto mb-10">
          <p className="text-center text-white bold text-lg lg:text-2xl pb-5">
            Enter the Maryland Home Address Below
          </p>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="1234 Example St."
              type="text"
              onChange={updateInput}
              className="text-center w-full border-[1px] p-2 border-[#3d4f7c]"
            />
            <button
              onClick={searchHome}
              type="submit"
              className="w-full text-white text-bold text-lg mt-2 mb-5 border-[1px] p-2 border-[white] rounded-full cursor-pointer"
            >
              Submit
            </button>
          </form>
          {displayHome()}
        </div>
      </div>
    </div>
  );
}

export default App;
