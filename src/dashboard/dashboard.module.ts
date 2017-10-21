import * as angular from 'angular'
import { DashboardComponent } from './dashboard.component'

export const DashboardModule = angular.module('dashboard', [])
    .component('dashboard', DashboardComponent)
