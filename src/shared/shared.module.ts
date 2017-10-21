import * as angular from 'angular'
import { AppHeaderComponent } from './components/app-header.component'

export const SharedModule = angular.module('shared', [])
    .component('appHeader', AppHeaderComponent)
