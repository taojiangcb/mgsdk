let sdk = window['mgsdk'];
describe("test sdk", function() {
    it("sdk init", function(done) {
        let sdkOpt = {
            platId: 1000,
            gameId: 10000,
            success: (res) => {
                done && done();
            },
            fail: msg => {},
            mode: 0
        }
        sdk.init(sdkOpt)
    })
    it("test ws", function(done) {
        setTimeout(() => {
            let protocol = {
                socketId: "",
                procoBody: {
                    server: "HELLO",
                    action: "say_hello",
                }
            }
            sdk.ws.send(protocol, callData => {
                JSON.stringify(callData);
                done && done();
            })
        }, 1000);
    });
    it("login", function(done) {
        let loginOpts = {
            success: (res) => {
                console.log(res);
                done && done();
            },
            fail: (res) => {
                console.log('plat login success');
                console.log(res);
                done && done();
            },
            arg: {
                user: "tao",
                pwd: "123"
            }
        }
        sdk.plat.login(loginOpts);
    })
})