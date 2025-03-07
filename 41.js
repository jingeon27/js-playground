console.log(
  (function asdf(a) {
    return (b) => {
      console.log(a, b);
      if (b === undefined) return a;
      return asdf(a + b);
    };
  })(1)(2)(1)(1)
);
