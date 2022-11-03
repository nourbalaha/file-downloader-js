import download from "../index";

// TODO: write unit tests
test("mock test", () => {
  window.URL.createObjectURL = jest.fn();
  let records = [
    ["ID", "Name", "Price"],
    [1, "Orange", 300],
    [2, "Apple", 2000],
  ];
  let data = records.map((record) => record.join(",")).join("\r\n");
  let bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  let mime = "text/csv";

  expect(download(data, "data.ccsv", mime, bom)).toBeUndefined;
});
