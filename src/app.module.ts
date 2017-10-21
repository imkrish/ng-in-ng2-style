import * as angular from 'angular'
import { AppComponent } from './app.component'

import '../build/index.html'
import 'angular-ui-bootstrap'
import 'bootstrap-css-only'
import 'normalize/index.styl'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'

angular.module('app', [
    'ui.bootstrap',
    HomeModule.name,
    SharedModule.name
])
.component('app', AppComponent)
