const getLeftPane = (data: any) => {
  let leftPane = [];
  for (let i = 6; i < data.length; i += 1) {
    let singleEntry = Object.values(data[i]);
    leftPane.push(singleEntry.slice(1, 5));
  }
  return leftPane;
};

const getHeightArray = (data: any) => {
  let headerRow: any = Object.values(data[6]);
  let widthtArray = [];
  for (let i = 0; i < headerRow.length; i += 1) {
    widthtArray.push(headerRow[i].length * 7);
  }
  return widthtArray;
};

const getHeaderArray = (data: any) => {
  return Object.values(data[6]);
};

const getStandingsArray = (data: any) => {
  return data.slice(7).map((item: any) => Object.values(item));
};

const getTableData = (data: any) => {
  let tableData = [];
  for (let i = 6; i < data.length; i += 1) {
    let singleEntry = Object.values(data[i]);
    tableData.push(singleEntry.slice(11, singleEntry.length + 1));
  }
  return tableData;
};

const getUrlData = (data: any) => {
  let urlRow1 = Object.values(data[0]);
  let urlRow2 = Object.values(data[1]);
  let urlArray = [];
  for (let i = 1; i < 8; i += 1) {
    urlArray.push(urlRow1[i]);
  }
  for (let i = 2; i < 8; i += 1) {
    urlArray.push(urlRow2[i]);
  }
  return urlArray;
};

const getLinkData = (data: any) => {
  let linkRow1 = Object.values(data[2]);
  let linkRow2 = Object.values(data[3]);
  let linkArray = [];
  for (let i = 1; i < 8; i += 1) {
    linkArray.push(linkRow1[i]);
  }
  for (let i = 2; i < 8; i += 1) {
    linkArray.push(linkRow2[i]);
  }
  return linkArray;
};

const getSingleRowArray = (data : any, row: any) => {
  let singleRowArray = [];
  for (let i = 6; i < data.length; i += 1) {
    let singleEntry = Object.values(data[i]);
    singleRowArray.push(singleEntry.slice(row, row + 1));
  }
  return singleRowArray;
};

const getPositionArray = (data: any) => getSingleRowArray(data, 0);

const getTotalTimeArray = (data: any) => getSingleRowArray(data, 7);
const getPenaltiesArray = (data: any) => getSingleRowArray(data, 8);
const getDiffLeaderArray = (data: any) => getSingleRowArray(data, 9);
const getDiffPreviousArray = (data: any) => getSingleRowArray(data, 10);

const getRallyName = (data: any) => Object.values(data[2])[8];

const dataBreakDown = (data: any) => ({
  HeaderArray: getHeaderArray(data),
  StandingsArray: getStandingsArray(data)
  // LeftPane: getLeftPane(data),
  // HeightArray: getHeightArray(data),
  // TableData: getTableData(data),
  // UrlData: getUrlData(data),
  // LinkData: getLinkData(data),
  // PositionArray: getPositionArray(data),
  // TotalTimeArray: getTotalTimeArray(data),
  // PenaltiesArray: getPenaltiesArray(data),
  // DiffLeaderArray: getDiffLeaderArray(data),
  // DiffPreviousArray: getDiffPreviousArray(data),
  // RallyName: getRallyName(data),
});

export default dataBreakDown;
