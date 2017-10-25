import { IComponentOptions, IComponentController } from 'angular'
const template = require('./modal-form.component.html')

class ModalFormController implements IComponentController {
    resolve: any
    close: any
    dismiss: any

    inputs: any[]

    $onInit = () => {
        this.inputs = this.resolve.inputs
        console.log(this.inputs)
    }

    ok = () => {
        this.close({$value: ''})
    }

    cancel = () => {
        this.dismiss({$value: 'cancel'})
    }
}

export const ModalFormComponent: IComponentOptions = {
    template,
    controller: ModalFormController,
    controllerAs: '$ctrl',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
}
