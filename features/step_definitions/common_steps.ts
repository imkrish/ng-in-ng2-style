import { browser, by, element, protractor } from 'protractor'

export = function commonSteps() {
    this.Given(/^James open (.*) page$/, (page: string, callback: () => {}) => {
        console.log('test')
        browser.get(`http://localhost:8080/main/${page}`)
        browser.driver.manage().window().maximize()
        browser.driver.controlFlow().execute(callback)
    })
}
