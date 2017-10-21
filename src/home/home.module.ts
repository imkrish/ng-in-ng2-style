import * as angular from 'angular'
import { HomeComponent } from './components/home.component'

export const HomeModule = angular.module('home', [])
    .component('home', HomeComponent)
