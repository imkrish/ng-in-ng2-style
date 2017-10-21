import * as angular from 'angular'
import { AboutComponent } from './about.component'

export const AboutModule = angular.module('about', [])
    .component('about', AboutComponent)
