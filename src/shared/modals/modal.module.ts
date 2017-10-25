import * as angular from 'angular'
import { ModalFormComponent } from './modal-form.component'
import { ModalService } from './modal.service'

export const ModalModule = angular.module('modal', [])
    .component('modalForm', ModalFormComponent)
    .service('modalService', ModalService)
