import * as angular from 'angular'
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'
import { ILocationProvider } from 'angular'
import '../build/index.html'
import 'angular-ui-bootstrap'
import '@uirouter/angularjs'
import 'bootstrap-css-only'
import 'normalize/index.styl'
import { SharedModule } from './shared/shared.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { MainModule } from './main/main.module'
import { AppConfig } from './app.config'
import { AppComponent } from './app.component'

angular.module('imkrishApp', [
    'ui.router',
    'ui.bootstrap',
    MainModule.name,
    SharedModule.name,
    DashboardModule.name
])
.component('app', AppComponent)
.config(($stateProvider: IStateProvider, $locationProvider: ILocationProvider, $urlRouterProvider: IUrlRouterProvider) =>
    new AppConfig($stateProvider, $locationProvider, $urlRouterProvider)
)
