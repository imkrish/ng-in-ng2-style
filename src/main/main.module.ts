import * as angular from 'angular'
import { MainComponent } from './main.component'
import { HomeModule } from './home/home.module'
import { MainHeaderComponent } from './main.header.component'
import { RegisterModalComponent } from './register/register-modal.component'
import { AboutModule } from './about/about.module'

export const MainModule = angular.module('main', [
        HomeModule.name,
        AboutModule.name
    ])
    .component('main', MainComponent)
    .component('mainHeader', MainHeaderComponent)
    .component('registerModal', RegisterModalComponent)
