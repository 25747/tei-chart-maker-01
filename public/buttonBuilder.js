/* global chrome */

const onClickMaker = (tableId, chartData) => {
  return () => {
    const table = document.getElementById(tableId);
    const tableRows = table.children[3].querySelectorAll(
      "tr:not(.spacer, .thead)"
    );
    const data = [];

    tableRows.forEach((row) => {
      data.push({
        stat: row.children[0].textContent.trim(),
        per90: Number(row.children[1].textContent.trim().replace("%", "")),
        percentile: Number(row.children[2].textContent.trim()),
      });
    });
    const playerData = chartData;
    playerData.data = data;

    chrome.runtime.sendMessage({ type: "NEW_CHART_REQUEST", data: playerData });
  };
};
