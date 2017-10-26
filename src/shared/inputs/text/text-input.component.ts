import { IComponentOptions, IComponentController } from 'angular'
const template = require('./text-input.component.html')

export class TextInputController implements IComponentController {

}

export const TextInputComponent = {
    template,
    controller: TextInputController,
    controllerAs: '$ctrl',
}
