import { IComponentOptions } from 'angular'
const template = require('./main-header.component.html')

export const MainHeaderComponent: IComponentOptions = {
    template,
    bindings: {
        isNavCollapsed: '<',
        toggleNavCollapsed: '=',
        openRegisterModal: '='
    }
}
