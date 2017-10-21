import { IComponentController, IComponentOptions } from 'angular'
import { ModalService } from './shared/modals/modal.service'
const template = require('./app.html')

class AppController implements IComponentController {
    isNavCollapsed: boolean

    constructor(private modalService: ModalService) {
        console.log(this.modalService)
        this.isNavCollapsed = true
    }

    toggleNavCollapsed = (name: string) => {
        this.isNavCollapsed = !this.isNavCollapsed
    }

    openRegisterModal = () => {
        this.modalService.open(
            'register-modal',
            null,
            (result) => console.log(result)
        )
    }
}

export const AppComponent: IComponentOptions = {
    template,
    controller: AppController,
    controllerAs: '$ctrl'
}
