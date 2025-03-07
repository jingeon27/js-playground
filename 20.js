const loadPromise = (sc) => {
  let promise = null;
  if (promise) return promise;

  promise = new Promise((resolve, reject) => {
    const cnt = sc;
    if (cnt > 1000) return resolve(cnt);
    else return reject("error입니다");
  });
  return promise;
};
let a = 100;
loadPromise(a)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
