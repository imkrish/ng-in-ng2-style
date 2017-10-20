import * as angular from 'angular'
import { ModalComponent } from './modal.component';

export const ModalModule = angular.module('modal', [])
    .component('modal', ModalComponent)
