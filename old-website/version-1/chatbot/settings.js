// settings.js
var chatSettings = {
    URI: 'fbda2-fishbowl.botmxp.ocp.oraclecloud.com',
    channelId: '2b98ca27-5454-4276-a14c-846028518553'
};

function initSDK(name) {
    // If WebSDK is not available, reattempt later
    if (!document || !WebSDK) {
        setTimeout(function() {
            initSDK(name);
        }, 2000);
        return;
    }

    // Default name is Bots
    if (!name) {
        name = 'Bots';
    }

    setTimeout(function() {
        var Bots = new WebSDK(chatSettings);    // Initiate library with configuration

        var isFirstConnection = true;
        Bots.on(WebSDK.EVENT.WIDGET_OPENED, function() {
            if (isFirstConnection) {
                Bots.connect()                          // Connect to server
                    .then(function() {
                        console.log('Connection Successful');
                    })
                    .catch(function(reason) {
                        console.log('Connection failed');
                        console.log(reason);
                    });
                   isFirstConnection = false;
            }
        });

        window[name] = Bots;
    }, 0);
}