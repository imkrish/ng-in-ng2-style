import * as angular from 'angular'
import { ModalService } from './modals/modal.service'
import { RegisterModalComponent } from './modals/register-modal.component'

export const SharedModule = angular.module('shared', [])
    .component('registerModal', RegisterModalComponent)
    .service('modalService', ModalService)
