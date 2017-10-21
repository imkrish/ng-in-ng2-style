import { IModalInstanceService } from 'angular-ui-bootstrap'
import { IScope, IComponentController } from 'angular'

export class ModalController implements IComponentController {
    selected: string
    items: string[]
    resolve: any
    close: any
    dismiss: any

    constructor() {

    }

    $onInit() {
        console.log(this)
        console.log(this.resolve)
        console.log(this.close)
        console.log(this.dismiss)
        this.items = this.resolve.items
        this.selected = ''
        console.log(this.items)
    }

    ok = () => {
        console.log(this)
        this.close(this.selected)
    }

    cancel = () => {
        this.dismiss('cancel')
    }
}
