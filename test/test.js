const willCoreProxy = require("willcore.core");

describe('models-test', function () {
    before(async function () {
        require('module-alias/register');
    });
    it('action-model-test', async function () {
       let willcore = willCoreProxy.new();
       let filePath = require("path").normalize(`${__dirname}\\..\\testUI`).split("\\").join("/");
       willcore.testServer.server[filePath] = 8581;
       willcore.testServer.http;
       willcore.testServer.ui;
       willcore.testServer.ui.bootstrapFiles.bootstrap;
    });
});