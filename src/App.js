/*global chrome*/
import teiLogo from "./assets/extrainch.png";
import explainer from "./assets/new-slice_3.png";
import "./App.css";
import { useEffect, useState } from "react";
import { format, sub } from "date-fns";
import { toPng } from "html-to-image";
import PolarChart from "./components/PolarChart";
import CreditExplainer from "./components/credits/CreditExplainer";
import PlayerDetails from "./components/player-details/PlayerDetails";
import { calculateFullAge } from "./config/utils/calculateAge";

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
  const theRoot = document.getElementById("root");
  const creditText = Array.from(document.getElementsByClassName("credit-text"));
  const playerText = Array.from(
    document.getElementsByClassName("player-details")
  );
  const { width: initWidth, height: initHeight } =
    theRoot.getBoundingClientRect();
  //console.log(initWidth, initHeight);
  theRoot.style.width = "1920px";
  theRoot.style.height = "1920px";
  creditText.forEach((text) => {
    text.style.fontSize = "32px";
  });
  playerText.forEach((text) => {
    text.style.fontSize = "32px";
  });
  //theText.style.fontSize = "32px";
  setTimeout(() => {
    toPng(document.getElementById("the-div"), {
      style: {
        position: "static",
      },
      pixelRatio: 1,
      quality: 1,
      // height: 1920,
      // width: 1920,
      // // canvasWidth: 1920,
      // // canvasHeight: 1920,
    })
      .then((dataUrl) => {
        //window.resizeTo(750, 775);
        let theTimePeriod = data.timePeriod;
        if (data.timePeriod.includes("Last 365 Days")) {
          theTimePeriod = "Last 365 Days";
        }
        const description = data.type.description.split(" ")[0];
        const nameFile = `${data.playerName}_${description}_${theTimePeriod}`;
        chrome.downloads.download({
          url: dataUrl,
          filename: removeSpecialChars(nameFile),
        });
      })
      .then(() => {
        theRoot.style.width = initWidth + "px";
        theRoot.style.height = initHeight + "px";
        creditText.forEach((text) => {
          text.style.fontSize = "16px";
        });
        playerText.forEach((text) => {
          text.style.fontSize = "14px";
        });
        //theText.style.fontSize = "16px";
      });
  }, [500]);
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
          //console.log(response.data);
          const newData = {
            ...response.data,
          };
          // if (newData.timePeriod === "Last 365 Days") {
          //   const today = new Date();
          //   const startDate = sub(today, { days: 365 });
          //   const endFormat = format(today, "LLL yyyy");
          //   const startFormat = format(startDate, "LLL yyyy");
          //   newData.timePeriod = `Last 365 Days (${startFormat} - ${endFormat})`;
          // }
          //newData.playerAge = calculateFullAge(newData.playerBirthday);

          setData(newData);
          setIsLoaded(true);
        }
      );
    });
  }, []);

  return (
    <div className="App" id="the-div">
      {isLoaded && !!data ? (
        <>
          {/* <span className="flex-span player-detail-span">
            <div className="player-details left">
              <p className="player-details-text">{data.clubName}</p>
              <p className="player-details-text">{data.type.description}</p>
            </div>
            <div className="player-details right">
              <p className="player-details-text">{data.playerBirthday}</p>
              <p className="player-details-text">
                {data.playerFootedness} Footed
              </p>
            </div>
          </span> */}
          <PlayerDetails data={data} />
          <PolarChart data={data} />
          <CreditExplainer data={data} onLogoClick={onClickDownload} />
          {/* <span className="flex-span credit-span" id="the-span">
            <img
              src={teiLogo}
              //width="130px"
              className="tei-logo"
              alt="The Extra Inch Logo"
              onClick={() => onClickDownload(data)}
            />
            <span className="credit-text-span">
              <p className="credit-text">chart by</p>
              <p className="credit-text">@bobaluya</p>
            </span>

            <span className="explainer-span">
              <img src={explainer} className="explainer" />
            </span>
          </span> */}
        </>
      ) : null}
    </div>
  );
}

export default App;
