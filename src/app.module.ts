import * as angular from 'angular'
import { AppComponent } from './app.component'
import { IStateProvider, IState, IUrlRouterProvider } from 'angular-ui-router'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { ILocationProvider } from 'angular'
import { AppConfig } from './app.config'
import '../build/index.html'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import 'bootstrap-css-only'
import 'normalize/index.styl'
import { DashboardModule } from './dashboard/dashboard.module'

angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    HomeModule.name,
    SharedModule.name,
    DashboardModule.name
])
.component('app', AppComponent)
.config(($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) =>
    new AppConfig($stateProvider, $urlRouterProvider, $locationProvider)
)
