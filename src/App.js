/*global chrome*/
import teiLogo from "./extrainch.png";
import "./App.css";
import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { format } from "date-fns";
import PolarChart from "./components/PolarChart";

function removeSpecialChars(str) {
  return (
    str
      .replace(/(?!\w|\s)./g, "")
      .replace(/\s+/g, "")
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, "$2") +
    "_" +
    format(new Date(), "yyyyMMdd") +
    ".png"
  );
}

const onClickDownload = (data) => {
  window.resizeTo(1920, 1920);
  setTimeout(() => {
    toPng(document.getElementById("the-div"), {
      style: {
        position: "static",
      },
      // height: 1920,
      // width: 1920,
      // // canvasWidth: 1920,
      // // canvasHeight: 1920,
    })
      .then((dataUrl) => {
        //window.resizeTo(750, 775);
        const description = data.type.description.split(" ")[0];
        const nameFile = `${data.playerName}_${description}_${data.timePeriod}`;
        chrome.downloads.download({
          url: dataUrl,
          filename: removeSpecialChars(nameFile),
        });
      })
      .then(() => {
        window.resizeTo(750, 775);
      });
  }, 2000);
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [tabId, setTabId] = useState(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then((tab) => {
      //setTabId(tab[0].id);
      chrome.runtime.sendMessage(
        { type: "CHART_DATA_REQUEST", id: tab.id },
        (response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoaded(true);
        }
      );
    });
  }, []);

  return (
    <div className="App" id="the-div">
      {isLoaded && !!data ? (
        <>
          <PolarChart data={data} />
          <span className="credit-span" id="the-span">
            <img
              src={teiLogo}
              //width="130px"
              className="tei-logo"
              alt="The Extra Inch Logo"
              onClick={() => onClickDownload(data)}
            />
            <p className="credit-text">chart by @bobaluya</p>
          </span>
        </>
      ) : null}
    </div>
  );
}

export default App;
