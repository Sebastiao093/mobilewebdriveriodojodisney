import { default as BaseScreen } from "./baseScreen.js";

class HomeScreen extends BaseScreen {

    get headerLogo(){return 'android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/centerImageView")'}

}

export default new HomeScreen();