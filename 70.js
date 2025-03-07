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

function solution(a, b) {
  try {
    return a;
  } catch (err) {
    try {
      return b;
    } catch {
      throw err;
    }
  }
}
console.log(solution(null, 1));
