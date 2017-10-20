import * as angular from 'angular'
import { AppComponent } from './app.component'

import 'angular-ui-bootstrap'
import 'bootstrap-css-only'
import 'normalize/index.styl'
import { BooksModule } from './components/books/books'
import { ModalModule } from './common/modal/modal'

angular.module('app',[
    'ui.bootstrap',
    BooksModule.name,
    ModalModule.name
])
.component('app', AppComponent)

