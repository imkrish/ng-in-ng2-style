import * as angular from 'angular'
import { MainComponent } from './main.component'
import { MainHeaderComponent } from './components/main.header.component'

export const MainModule = angular.module('main', [])
    .component('main', MainComponent)
    .component('mainHeader', MainHeaderComponent)
