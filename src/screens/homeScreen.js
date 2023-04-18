import { default as BaseScreen } from "./baseScreen.js";

class HomeScreen extends BaseScreen {

    get headerLogo(){return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/centerImageView")')}
    get locationTab(){return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*Map, Tab, 2of5")')}
    get homeTab(){return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*Home, Tab, 1of5")')}

    async goToMap(){
        await this.doTapOn(await this.locationTab);
    }

    async goToHome(){
        await this.doTapOn(await this.homeTab);
    }

}

export default new HomeScreen();