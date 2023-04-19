import { default as BaseScreen } from "./baseScreen.js";

class PlansScreen extends BaseScreen {

    get listOfPlans(){return $('android=new UiSelector().className("androidx.recyclerview.widget.RecyclerView").resourceIdMatches(".*actionSheetListView")')}
    get checkDining(){return $('android=new UiSelector().className("android.widget.FrameLayout").descriptionMatches(".*Check Dining Availability, 1 of 7, button")')}
    get closeButton(){return $('android=new UiSelector().resourceIdMatches(".*btnCloseActionSheet")')}

    async validateCheckDining(){
        expect(await this.listOfPlans).toBeDisplayed();
        expect(await this.checkDining).toBeDisplayed();
        expect(await this.checkDining).toBeEnabled();
        await expect(await this.checkDining).toHaveAttributeContaining('content-desc', 'Check Dining Availability');
        await this.doTapOn(await this.closeButton);
    }

}

export default new PlansScreen();