import { IComponentController, IComponentOptions } from 'angular'
const template = require('./register-modal.component.html')

interface IUserInfo {
    firstName: string
    lastName: string
    email: string
    sex: string
    birthdate: Date
    country: string
}

class RegisterModalController implements IComponentController {
    close: any
    dismiss: any
    resolve: any
    data: any
    userInfo: IUserInfo

    $onInit = () => {
        this.data = this.resolve.data
        this.userInfo = {
            firstName: '',
            lastName: '',
            birthdate: new Date(),
            email: '',
            country: 'New Zealand',
            sex: 'M'
        }
    }

    ok = () => {
        this.close({$value: this.userInfo})
    }

    cancel = () => {
        this.dismiss({$value: 'cancel'})
    }
}

export const RegisterModalComponent: IComponentOptions = {
    template,
    controller: RegisterModalController,
    controllerAs: '$ctrl',
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
}
