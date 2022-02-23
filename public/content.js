/*global chrome*/

const sectionHeadingTextEl = document.getElementsByClassName(
  "section_heading_text"
)[0];
const timePeriod = sectionHeadingTextEl.children[0].children[0].textContent;

const chartData = {}; //PROBLEM ?? is this chartdata getting overwritten for players with multiple? must be
const playerName = document.getElementsByTagName("h1")[0].textContent.trim();
chartData.playerName = playerName;

const tableId = "scout_full_AM";

const playerTypes = [
  {
    type: 0,
    description: "AM/W Template",
    tableId: "scout_full_AM",
    tableDivId: "div_scout_full_AM",
  },
  {
    type: 1,
    description: "CB Template",
    tableId: "scout_full_CB",
    tableDivId: "div_scout_full_CB",
  },
  {
    type: 2,
    description: "CM Template",
    tableId: "scout_full_MF",
    tableDivId: "div_scout_full_MF",
  },
  {
    type: 3,
    description: "FW Template",
    tableId: "scout_full_FW",
    tableDivId: "div_scout_full_FW",
  },
  {
    type: 4,
    description: "FB/WB Template",
    tableId: "scout_full_FB",
    tableDivId: "div_scout_full_FB",
  },
  // { //GK TEMPLATES HAVE DIF NUMBER OF WEDGES.. ignoring for now
  //   type: 5,
  //   description: "GK Template",
  //   tableId: "scout_full_GK",
  //   tableDivId: "div_scout_full_GK",
  // },
];

playerTypes.forEach((type) => {
  const checkDiv = document.getElementById(type.tableDivId);
  if (!!checkDiv) {
    const divForButton = document.createElement("div");

    const button = document.createElement("button");
    const text = type.description.split(" ")[0];
    const buttonText = document.createTextNode(`${text} Polar Chart`);
    button.appendChild(buttonText);
    button.className = "the-button";

    button.onclick = onClickMaker(type.tableId, {
      type: type,
      playerName: playerName,
      timePeriod: timePeriod,
    });
    //onclickmaker loaded from first file - check manifest

    divForButton.prepend(button);
    checkDiv.prepend(divForButton);
  }
});
