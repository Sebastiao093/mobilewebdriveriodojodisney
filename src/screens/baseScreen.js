export default class BaseScreen {
    
    async doTapOn(element) {
        await element.click();
    }

}