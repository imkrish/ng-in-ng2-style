import * as angular from 'angular'
import { ModalService } from './modals/modal.service'
import { ModalFormComponent } from './modals/modal-form.component'
import { ModalModule } from './modals/modal.module'
import { InputModule } from './inputs/input.module'

export const SharedModule = angular.module('shared', [
    ModalModule.name,
    InputModule.name
])
