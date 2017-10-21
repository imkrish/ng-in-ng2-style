import { IComponentOptions } from 'angular'
import * as angular from 'angular'
const template = require('./app-header.component.html')

export const AppHeaderComponent: IComponentOptions = {
    template,
    bindings: {
        isNavCollapsed: '<',
        toggleNavCollapsed: '=',
        openRegisterModal: '='
    }
}
