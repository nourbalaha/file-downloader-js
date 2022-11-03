import fileDownloader from "../index";

test("mock test", () => {
  window.URL.createObjectURL = jest.fn();
  const records = [
    ["ID", "Name", "Age"],
    [1, "Nour", 34],
    [2, "Mila", 1],
  ];
  const data = records.map((record) => record.join(",")).join("\r\n");
  const filename = "data.csv";
  const mime = "text/csv";
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  expect(fileDownloader(data, filename, mime, bom)).toBeUndefined;
});
