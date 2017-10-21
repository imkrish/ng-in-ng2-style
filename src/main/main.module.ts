import * as angular from 'angular'
import { MainComponent } from './main.component'
import { HomeModule } from './home/home.module'
import { MainHeaderComponent } from './main.header.component'

export const MainModule = angular.module('main', [
        HomeModule.name
    ])
    .component('main', MainComponent)
    .component('mainHeader', MainHeaderComponent)
