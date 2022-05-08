/* global chrome */

const onClickMaker = (tableId, chartData) => {
  return () => {
    const table = document.getElementById(tableId);
    const tableRows = table.children[3].querySelectorAll(
      "tr:not(.spacer, .thead)"
    );
    const data = [];
    let carriesIntoBox = {};
    let passesIntoBox = {};

    tableRows.forEach((row, index) => {
      const newStat = {
        id: index,
        stat: row.children[0].textContent.trim(),
        per90: Number(
          row.children[1].textContent.trim().replace("%", "")
        ).toFixed(2),
        percentile: Number(row.children[2].textContent.trim()),
      };

      if (newStat.stat === "Carries into Penalty Area") {
        carriesIntoBox = newStat;
      } else if (newStat.stat === "Passes into Penalty Area") {
        passesIntoBox = newStat;
      }
      data.push(newStat);
    });
    if (carriesIntoBox.id && passesIntoBox.id) {
      const per90 = Number(carriesIntoBox.per90) + Number(passesIntoBox.per90);
      const percentile =
        (Number(carriesIntoBox.percentile) + Number(passesIntoBox.percentile)) /
        2;
      const boxEntries = {
        id: data.length,
        stat: "Box Entries",
        per90: per90.toFixed(2),
        percentile: percentile,
      };
      console.log(boxEntries);
      data.push(boxEntries);
    }

    console.log(data);
    const playerData = chartData;
    playerData.data = data;

    chrome.runtime.sendMessage({ type: "NEW_CHART_REQUEST", data: playerData });
  };
};
