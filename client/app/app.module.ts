import * as angular from 'angular'
import { AppComponent } from './app.component'

import '../../build/index.html'
import 'angular-ui-bootstrap'
import 'bootstrap-css-only'
import 'normalize/index.styl'

angular.module('app', [
    'ui.bootstrap'
])
.component('app', AppComponent)
