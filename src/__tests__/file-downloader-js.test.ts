import fileDownloader from "../index";

test("mock test", () => {
  window.URL.createObjectURL = jest.fn();
  const records = [
    ["ID", "Name", "Price"],
    [1, "Orange", 300],
    [2, "Apple", 2000],
  ];
  const data = records.map((record) => record.join(",")).join("\r\n");
  const filename = "data.ccsv"
  const mime = "text/csv";
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  expect(fileDownloader(data, filename, mime, bom)).toBeUndefined;
});
