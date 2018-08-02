import { asyncMemoFib } from '../fib_functions/async_memo.js';

onmessage = function(e) {
  asyncMemoFib(e.data.n).then(function(result) {
    postMessage({ n: result });
  });
};
