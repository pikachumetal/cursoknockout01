require.config({
    paths: {
        knockout: '../lib/knockout-latest.debug'
    }
});

require(["app"], function (app) {
    app.init();
});