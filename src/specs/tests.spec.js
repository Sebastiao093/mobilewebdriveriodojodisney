import welcomeScreen from "../screens/welcomeScreen.js"
import homeScreen from "../screens/homeScreen.js";

describe('Testing Disney app', () => {

    it('Should go to Home', async () => {
        await welcomeScreen.allowLocationAndBluetooth();
        await driver.setImplicitTimeout(2000);
        await welcomeScreen.closeHints();
        expect(await homeScreen.headerLogo).toBeDisplayed();
    });

});