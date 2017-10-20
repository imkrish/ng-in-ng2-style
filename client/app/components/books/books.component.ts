const template = require('./books.html')
import './books.scss'
import { BooksController } from './books.controller';

export const BooksComponent = {
    template,
    controller: BooksController,
    controllerAs: 'ctrl'
}
