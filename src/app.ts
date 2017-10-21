import * as angular from 'angular'
import { IStateProvider } from 'angular-ui-router'
import { ILocationProvider } from 'angular'
import '../build/index.html'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import 'bootstrap-css-only'
import 'normalize/index.styl'
import { SharedModule } from './shared/shared.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { MainModule } from './main/main.module'
import { AppConfig } from './app.config'

angular.module('imkrishApp', [
    'ui.router',
    'ui.bootstrap',
    MainModule.name,
    SharedModule.name,
    DashboardModule.name
])
.config(($stateProvider: IStateProvider, $locationProvider: ILocationProvider) =>
    new AppConfig($stateProvider, $locationProvider)
)
