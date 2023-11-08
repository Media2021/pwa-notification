// Register the service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("service-worker.js")
      .then(function (registering) {
        // Registration was successful
        console.log(
          "Browser: Service Worker registration is successful with the scope",
          registering.scope
        );
      })
      .catch(function (error) {
        // The registration of the service worker failed
        console.log("Browser: Service Worker registration failed with the error", error);
      });
  } else {
    // The browser does not support service workers
    console.log("Browser: I don't support Service Workers :(");
  }
  