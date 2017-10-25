import { IModalService } from 'angular-ui-bootstrap'

export class ModalService {
    static $inject = ['$uibModal']

    constructor(private $uibModal: IModalService) {}

    open = (component: string, inputData: any, callback: (result: any) => void) => {
        this.$uibModal.open({
            resolve: {
                data: () => inputData
            },
            component
        })
        .result.then((callback))
        .catch(err => console.log(`Modal Rejected: ${err}`))
    }

    openModalForm = (inputs: any[], callback: (result: any) => void) => {
        this.$uibModal.open({
            resolve: {
                inputs: () => inputs
            },
            component: 'modal-form'
        })
        .result.then((callback))
        .catch(err => console.log(`Modal Rejected: ${err}`))
    }
}
