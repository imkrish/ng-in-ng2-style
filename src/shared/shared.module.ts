import * as angular from 'angular'
import { AppHeaderComponent } from './components/app-header.component'
import { ModalService } from './modals/modal.service'
import { RegisterModalComponent } from './modals/register-modal.component'

export const SharedModule = angular.module('shared', [])
    .component('appHeader', AppHeaderComponent)
    .component('registerModal', RegisterModalComponent)
    .service('modalService', ModalService)
