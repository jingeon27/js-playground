const solution = (answer, s, e) => {
  s.map((item, i) => {
    answer[item - i], ((answer[e + i] = answer[e + i]), answer[item - i]);
  });
  return answer;
};
