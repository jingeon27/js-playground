// const asdf = {
//   a: ["", ""],
// };
// const wer = asdf.a.length;
// console.log(wer);
// asdf.a.push("");
// console.log(wer);

const asdf = async () => {
  const data = await fetch(
    "https://biz-api.jumpit.co.kr/api/applicant/950817/export/archive",
    {
      headers: {
        accept: "application/pdf",
        "accept-language":
          "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ne;q=0.6,mg;q=0.5,ja;q=0.4,vi;q=0.3",
        authorization:
          "Bearer eyJyZWdEYXRlIjoxNzEwNDA5ODgzNTY4LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5lQHdoYXR0aW1lLmNvLmtyIiwiYXV0aCI6IkNPTVBBTlkiLCJpYXQiOjE3MTA0MDk4ODMsImV4cCI6MTcxMDQ5NjI4M30.j1JB88iajdBQqkq7r_wyVpOMfa-Q1NSKwnFQD_x0G78",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://biz.jumpit.co.kr/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        attachments: [1969799, 1969800],
        reason: "서류심사",
        renameFlag: false,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  ).then((res) => res.arrayBuffer());
  console.log(data);
  return data;
};
console.log(asdf());
