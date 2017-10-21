import * as angular from 'angular'
import { ModalService } from './modals/modal.service'

export const SharedModule = angular.module('shared', [])
    .service('modalService', ModalService)
