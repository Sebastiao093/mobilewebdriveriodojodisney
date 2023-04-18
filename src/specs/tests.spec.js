import welcomeScreen from "../screens/welcomeScreen.js"
import homeScreen from "../screens/homeScreen.js";
import mapScreen from "../screens/mapScreen.js";

describe('Testing Disney app', () => {

    it('Should go to Home', async () => {
        await welcomeScreen.allowLocationAndBluetooth();
        await driver.pause(5000);
        await welcomeScreen.closeHints();
        expect(await homeScreen.headerLogo).toBeDisplayed();
    });

    it('Should go to Map and Validate Hotels Option is available in the list', async () => {
        expect (await homeScreen.locationTab).toBeClickable();
        await homeScreen.goToMap();
        expect(await mapScreen.mapView).toBeDisplayed();
        expect (await mapScreen.categoryList).toBeClickable();
        expect(await mapScreen.categoryList).toHaveTextContaining('Attractions');
        await mapScreen.clickAndValidate();
        await homeScreen.goToHome();
    });

    it('Should go to ', async () => {
        
    });

});