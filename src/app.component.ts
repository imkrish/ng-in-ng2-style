import { IComponentController, IComponentOptions } from 'angular'
const template = require('./app.html')

class AppController implements IComponentController {
    isNavCollapsed: boolean

    constructor() {
        this.isNavCollapsed = true
    }

    toggleNavCollapsed(name: string) {
        this.isNavCollapsed = !this.isNavCollapsed
    }
}

export const AppComponent: IComponentOptions = {
    template,
    controller: AppController,
    controllerAs: '$ctrl'
}
