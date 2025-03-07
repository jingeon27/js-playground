console.log(
  [0, 10, 100]
    .map(
      (e) => `${e}% {
      background-size:100% 0%;
    }`
    )
    .join("\n")
);
