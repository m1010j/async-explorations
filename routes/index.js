var express = require('express');

var router = express.Router();

var db = require('../queries');

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Explorations in Asynchronicity',
    csrf: req.csrfToken(),
  });
});
router.get('/api/sync_benchmarks', db.getAllSyncBenchmarks);
router.get('/api/sync_benchmarks/:id', db.getSingleSyncBenchmark);
router.post('/api/sync_benchmarks', db.createSyncBenchmark);
router.get('/api/sync_busy_benchmarks', db.getAllSyncBusyBenchmarks);
router.get('/api/sync_busy_benchmarks/:id', db.getSingleSyncBusyBenchmark);
router.post('/api/sync_busy_benchmarks', db.createSyncBusyBenchmark);
router.get('/api/sync_memo_benchmarks', db.getAllSyncMemoBenchmarks);
router.get('/api/sync_memo_benchmarks/:id', db.getSingleSyncMemoBenchmark);
router.post('/api/sync_memo_benchmarks', db.createSyncMemoBenchmark);
router.get('/api/async_benchmarks', db.getAllAsyncBenchmarks);
router.get('/api/async_benchmarks/:id', db.getSingleAsyncBenchmark);
router.post('/api/async_benchmarks', db.createAsyncBenchmark);
router.get('/api/async_busy_benchmarks', db.getAllAsyncBusyBenchmarks);
router.get('/api/async_busy_benchmarks/:id', db.getSingleAsyncBusyBenchmark);
router.post('/api/async_busy_benchmarks', db.createAsyncBusyBenchmark);
router.get('/api/async_memo_benchmarks', db.getAllAsyncMemoBenchmarks);
router.get('/api/async_memo_benchmarks/:id', db.getSingleAsyncMemoBenchmark);
router.post('/api/async_memo_benchmarks', db.createAsyncMemoBenchmark);

module.exports = router;
