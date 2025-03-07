const job_uid =
  "https://biz.jumpit.co.kr/applicant/view/961433?tab=APPLIED&positionId=23217&positionApplicationStatus=APPLIED&positionStatus=open"
    .split("/")
    .at(-1)
    ?.split("?")[0];
console.log(job_uid);
