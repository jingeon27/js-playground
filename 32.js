const useGetDataQuery = (keyword) => {
  const [firstDate, lastDate] = keyword;
  const last = new Date("2023-03-31"),
    first = new Date("2023-03-01");
  const promise = new Promise((resolve, reject) => {
    if (new Date(firstDate) < first || new Date(lastDate) > last) {
      return reject({ message: "잘못된 요청입니다.", status: "error" });
    }
    const response = () => "성공";
    return resolve(response());
  });
  return promise;
};
console.log(useGetDataQuery(["2023-03-01", "2023-03-11"]));
