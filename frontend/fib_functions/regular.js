export const regularFib = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return regularFib(n - 1) + regularFib(n - 2);
};
