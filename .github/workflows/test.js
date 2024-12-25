const { remote } = require('webdriverio');

async function main() {
    const driver = await remote({
        capabilities: {
            platformName: 'Android',
            platformVersion: '11.0',
            deviceName: 'Android Emulator',
            appPackage: 'com.example.android',
            appActivity: 'com.example.android.Main',
            automationName: 'UiAutomator2'
        }
    });

    await driver.pause(5000); // Wait for 5 seconds

    await driver.deleteSession();
}

main();
