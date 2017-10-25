import { IComponentController, IComponentOptions } from 'angular'
import { ModalService } from '../shared/modals/modal.service'
const template = require('./main.html')

class MainController implements IComponentController {
    isNavCollapsed: boolean

    constructor(private modalService: ModalService) {
        console.log(this.modalService)
        this.isNavCollapsed = true
    }

    toggleNavCollapsed = () => {
        this.isNavCollapsed = !this.isNavCollapsed
    }

    openRegisterModal = () => {
        this.modalService.open(
            'register-modal',
            null,
            (result) => console.log(result)
        )
    }

    openLoginForm = () => {
        this.modalService.openModalForm(
            ['haha'],
            () => console.log('test')
        )
    }
}

export const MainComponent: IComponentOptions = {
    template,
    controller: MainController,
    controllerAs: '$ctrl'
}
