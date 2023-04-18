import { default as BaseScreen } from "./baseScreen.js";

class MapScreen extends BaseScreen {

    get mapView(){return $('android=new UiSelector().resourceIdMatches(".*map_view")')}
    get categoryList(){return $('android=new UiSelector().resourceIdMatches(".*categoryTitleLayout").descriptionMatches(".*Attractions, Category, Collapsed, 1of11, button")')}
    get list(){return $('android=new UiSelector().resourceIdMatches(".*facilityTypeList")')}
    get hotelCategory(){return $('android=new UiSelector().descriptionMatches(".*Hotels, Category, 10of11, button")')}
    get closeButton(){return $('android=new UiSelector().resourceIdMatches(".*closeButton")')}

    async clickAndValidate(){
        await this.doTapOn(await this.categoryList);
        expect (await this.list).toBeClickable;
        expect (await this.hotelCategory).toBeClickable();
        expect (await this.hotelCategory).toHaveTextContaining('Hotels');
        await this.doTapOn(await this.closeButton);
    }
}

export default new MapScreen();