/*global chrome*/

const sectionHeadingTextEl = document.getElementsByClassName(
  "section_heading_text"
)[0];
const playerInfoDiv = document.getElementById("meta");
const playerName = playerInfoDiv
  .querySelectorAll("h1[itemprop=name")[0]
  .textContent.trim();

const playerInfoP = playerInfoDiv.getElementsByTagName("p");
const clubName = Array.from(playerInfoP)
  .find((el) => el.textContent.includes("Club: "))
  .textContent.trim()
  .split("Club: ")[1];

let timePeriod = sectionHeadingTextEl.children[0].children[0].textContent;
// if (timePeriod === "Last 365 Days") {
//   const today = new Date();
//   const startDate = sub(today, { days: 365 });
//   console.log(startDate);
//   const endFormat = format(today, "LLL yyyy");
//   const startFormat = format(startDate, "LLL yyyy");
//   timePeriod = `Last 365 Days (${startFormat} - ${endFormat})`;
// }

const chartData = {};
//const playerName = document.getElementsByTagName("h1")[0].textContent.trim();
chartData.playerName = playerName;

const tableId = "scout_full_AM";

const playerTypes = [
  {
    type: 0,
    description: "AM/W Template",
    tableId: "scout_full_AM",
    tableDivId: "div_scout_full_AM",
    minutesDivId: "tfooter_scout_full_AM",
  },
  {
    type: 1,
    description: "CB Template",
    tableId: "scout_full_CB",
    tableDivId: "div_scout_full_CB",
    minutesDivId: "tfooter_scout_full_CB",
  },
  {
    type: 2,
    description: "CM Template",
    tableId: "scout_full_MF",
    tableDivId: "div_scout_full_MF",
    minutesDivId: "tfooter_scout_full_MF",
  },
  {
    type: 3,
    description: "FW Template",
    tableId: "scout_full_FW",
    tableDivId: "div_scout_full_FW",
    minutesDivId: "tfooter_scout_full_FW",
  },
  {
    type: 4,
    description: "FB/WB Template",
    tableId: "scout_full_FB",
    tableDivId: "div_scout_full_FB",
    minutesDivId: "tfooter_scout_full_FB",
  },
  {
    type: 5,
    description: "GK Template",
    tableId: "scout_full_GK",
    tableDivId: "div_scout_full_GK",
    minutesDivId: "tfooter_scout_full_GK",
  },
];

playerTypes.forEach((type) => {
  const checkDiv = document.getElementById(type.tableDivId);
  if (!!checkDiv) {
    const minuteDiv = document.getElementById(type.minutesDivId);
    console.log(minuteDiv.getElementsByTagName("strong")[0]);
    const minutesPlayed = minuteDiv
      .getElementsByTagName("strong")[0]
      .textContent.replace(/[^\d.]/g, "");
    console.log(minutesPlayed);

    const divForButton = document.createElement("div");
    divForButton.id = `the-button-div-${type.type}`;
    divForButton.className = "button-div";
    const button = document.createElement("button");
    const text = type.description.split(" ")[0];
    const buttonText = document.createTextNode(`${text} Polar Chart`);
    button.appendChild(buttonText);
    button.className = "the-button";

    button.onclick = onClickMaker(type.tableId, {
      type: type,
      playerName: playerName,
      timePeriod: timePeriod,
      clubName: clubName,
      minutesPlayed: minutesPlayed,
    });
    //onclickmaker loaded from first file - check manifest

    divForButton.prepend(button);
    checkDiv.prepend(divForButton);
  }
});
