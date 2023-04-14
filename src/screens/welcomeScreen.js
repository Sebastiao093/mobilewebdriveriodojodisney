import { default as BaseScreen } from "./baseScreen.js";

class WelcomeScreen extends BaseScreen {

    get startedButton(){ return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn")')}
    get shareLocationButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").clickable(true)')}
    get acceptButton1(){ return $('android=new UiSelector().resourceIdMatches("android:id/button1") ')}
    get allowButton(){ return $('android=new UiSelector().resourceIdMatches(".*permission_allow_one_time_button")')}
    get continueButton(){ return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn")')}
    get acceptButton2(){ return $('android=new UiSelector().resourceIdMatches(".*button1")')}
    get allowBluetooth(){ return $('android=new UiSelector().resourceIdMatches(".*permission_allow_button")')}
    get dismissButton(){return $('android=new UiSelector().resourceIdMatches(".*dismiss-icon")')}

    async allowLocationAndBluetooth(){
        await this.doTapOn(await this.startedButton);
        await this.doTapOn(await this.shareLocationButton);
        await this.doTapOn(await this.acceptButton1);
        await this.doTapOn(await this.allowButton);
        await this.doTapOn(await this.continueButton);
        await this.doTapOn(await this.acceptButton2);
        await this.doTapOn(await this.allowBluetooth);
    }

    async closeHints(){
        await this.doTapOn(await this.dismissButton);
    }
}

export default new WelcomeScreen();