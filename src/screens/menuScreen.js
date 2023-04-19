import { default as BaseScreen } from "./baseScreen.js";

class MenuScreen extends BaseScreen {

    get recyclerView(){ return $('android=new UiSelector().resourceIdMatches(".*moreScreenRecyclerView")')}
    get profileButton(){ return $('android=new UiSelector().descriptionMatches(".*My Profile button")')}
    get propertyRulesButton(){ return $('android=new UiSelector().descriptionMatches(".*Property Rules button")')}
    get linkToAccountButton(){ return $('android=new UiSelector().descriptionMatches(".*Link to Account button")')}
    get helpButton(){ return $('android=new UiSelector().descriptionMatches(".*Help button")')}
    get privacyAndLegalButton(){ return $('android=new UiSelector().descriptionMatches(".*Privacy & Legal button")')}
    get textView(){return $$('android=new UiSelector().className("android.widget.TextView").resourceIdMatches(".*txt_element")')}

    async scrollTapAndValidate(){
        expect(await this.recyclerView).toBeDisplayed();
        await this.scrollDown();
        await this.scrollDown();
        await this.scrollDown();
        await this.scrollDown();
        await this.scrollDown();
        expect(await this.profileButton).toBeClickable();
        await expect(await this.profileButton).toHaveAttributeContaining('content-desc', 'My Profile');
        expect(await this.propertyRulesButton).toBeClickable();
        await expect(await this.propertyRulesButton).toHaveAttributeContaining('content-desc','Property Rules');
        expect(await this.linkToAccountButton).toBeClickable();
        await expect(await this.linkToAccountButton).toHaveAttributeContaining('content-desc','Link to Account');
        expect(await this.helpButton).toBeClickable();
        await expect(await this.helpButton).toHaveAttributeContaining('content-desc','Help');
        expect(await this.privacyAndLegalButton).toBeClickable();
        await expect(await this.privacyAndLegalButton).toHaveAttributeContaining('content-desc','Privacy & Legal');
        await this.doTapOn(this.privacyAndLegalButton);
    }

    async validateCopies(){
        await expect(await this.textView).toBeDisplayed();
        expect(await this.textView[0]).toBeClickable();
        await expect(await this.textView[0]).toHaveTextContaining('Privacy Policy');
        expect(await this.textView[1]).toBeClickable();
        await expect(await this.textView[1]).toHaveTextContaining('Terms of Use');
        expect(await this.textView[2]).toBeClickable();
        await expect(await this.textView[2]).toHaveTextContaining('Supplemental Terms and Conditions');
        expect(await this.textView[3]).toBeClickable();
        await expect(await this.textView[3]).toHaveTextContaining('Legal Notices');
        expect(await this.textView[4]).toBeClickable();
        await expect(await this.textView[4]).toHaveTextContaining('Property Rules');
        expect(await this.textView[5]).toBeClickable();
        await expect(await this.textView[5]).toHaveTextContaining('Electronic Communications Disclosure');
    }

    async scrollDown(){
        await driver.touchAction([
            { action: 'press', x: 400, y: 1100 },
            { action: 'wait', ms: 1000},
            { action: 'moveTo', x: 400, y: 450 },
            'release'
        ])

        /* await driver.multiTouchPerform([
            { action: 'press', options: { x: 400, y: 1000 }},
            { action: 'moveTo', options: { x: 400, y: 500 }},
            { action: 'release'}
        ]); */
    }
}

export default new MenuScreen();