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

function multiplyAsync(x, y) {
  console.log("   [@service] processing " + x + " and " + y);
  var p = new Promise(function (resolveFn, rejectFn) {
    setTimeout(function () {
      console.log("   [@service] returning result");
      var result = x * y;
      resolveFn(result); // communicate the result to the promise
    }, 4000);
  });
  return p;
}

async function process(x,y,z){
  
  // add x & y using addAsync
  var addResult = await addAsync(x,y)
  var result = await multiplyAsync(addResult, z)

  // do not print the result but return it
  // console.log(result)
  return result
}

async function processClient(x,y,z){
  // get the result from the process function
  var result = await process(x,y,z)
  // print the result
  console.log(result)
}

processClient(10,20,5)