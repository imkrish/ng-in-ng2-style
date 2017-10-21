import { ModalController } from './modal.controller'
const template = require('./modal.html')

export const ModalComponent = {
    template,
    controller: ModalController,
    controllerAs: 'ctrl',
    bindings : {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
}
