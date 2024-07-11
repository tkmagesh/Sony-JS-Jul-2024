function addSync(x, y) {
    console.log("   [@service] processing " + x + " and " + y);
    var result = x + y;
    console.log("   [@service] returning result");
    return result
}

function addSyncClient(x, y) {
    console.log("[@client] invoking the service");
    var result = addSync(x, y);
    console.log("[@client] result :", result);
}

function addAsync(x, y) {
  console.log("   [@service] processing " + x + " and " + y);
  var p = new Promise(function (resolveFn, rejectFn) {
    setTimeout(function () {
      console.log("   [@service] returning result");
      var result = x + y;
      resolveFn(result); // communicate the result to the promise
    }, 4000);
  });
  return p;
}

function addAsyncClient(x, y) {
  console.log("[@client] invoking the service");
  var p = addAsync(x, y);
  p.then(function (result) {
    console.log("[@client] result :", result);
  });
}

async function addAsyncClient2(x, y) {
    console.log("[@client] invoking the service");
    var result = await addAsync(x, y);
    console.log("[@client] result :", result);
}
