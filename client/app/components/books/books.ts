import * as angular from 'angular'
import { BooksComponent } from './books.component';

export const BooksModule = angular.module('books', [])
    .component('books', BooksComponent)
