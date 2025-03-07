console.log("01068658208".slice(-4, 200));

const call = async (headers) => {
  const data = await (
    await fetch(
      "https://www.jobplanet.co.kr/api/v5/partners/job/postings/summary?page=1&per=12",
      {
        headers,
      }
    )
  ).json();
  console.log(data);
};
console.log(
  call({
    "sec-ch-ua": '"Chromium";v="111", "Not(A:Brand";v="8"',
    accept: "application/json",
    referer: "https://b2b.jobplanet.co.kr/",
    "sec-ch-ua-mobile": "?0",
    authorization:
      "Bearer b85143470ca7d42a1344cc2110fff819b4ba5c0c7defe53c135f6abd5edd58f7",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "sec-ch-ua-platform": '"macOS"',
  })
);
