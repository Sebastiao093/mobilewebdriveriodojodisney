import welcomeScreen from "../screens/welcomeScreen.js"
import homeScreen from "../screens/homeScreen.js";
import mapScreen from "../screens/mapScreen.js";
import menuScreen from "../screens/menuScreen.js";
import plansScreen from "../screens/plansScreen.js";

describe('Testing Disney app', () => {

    it('Should go to Home', async () => {
        await welcomeScreen.allowLocationAndBluetooth();
        await driver.pause(6000);
        await welcomeScreen.closeHints();
        expect(await homeScreen.headerLogo).toBeDisplayed();
    });

    it('Should go to Map and Validate Hotels Option is available in the list', async () => {
        expect (await homeScreen.locationTab).toBeClickable();
        await homeScreen.goToMap();
        expect(await mapScreen.mapView).toBeDisplayed();
        expect(await mapScreen.categoryList).toBeClickable();
        expect(await mapScreen.categoryList).toBeEnabled();
        expect(await mapScreen.categoryList).toHaveTextContaining('Attractions');
        await mapScreen.clickAndValidate();
        await homeScreen.goToHome();
    });

    it('Should go to Menu, Validate Categories and Tap on Privacy & Legal', async () => {
        expect(await homeScreen.moreOptionsTab).toBeClickable();
        await homeScreen.goToMoreOptions();
        await menuScreen.scrollTapAndValidate();
        await menuScreen.validateCopies();
        await homeScreen.goToHome();
    });

    it('Should go to Plans Option And Check if Reserve Dining Option is in the list', async () => {
        expect(await homeScreen.buyTicketsTab).toBeClickable();
        await homeScreen.goToBuyTickets();
        await plansScreen.validateCheckDining();
    });

});