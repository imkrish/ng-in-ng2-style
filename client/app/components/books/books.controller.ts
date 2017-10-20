import * as angular from 'angular'
import {ILogService, IDocumentService, IAugmentedJQuery} from 'angular'
import {IModalService} from 'angular-ui-bootstrap'

export class BooksController {
    static $inject = ['$uibModal', '$log', '$document']
    items = ['item1', 'item2', 'item3']
    animationsEnabled = true
    selected : string

    constructor(private $uibModal : IModalService, private $log : ILogService, private $document : any) {}

    open = (size : string, parentSelector : IAugmentedJQuery) => {
        const parentElem = parentSelector
            ? angular.element(this.$document[0].querySelector('.modal-demo ' + parentSelector))
            : undefined
        const modalInstance = this
            .$uibModal
            .open({
                component: 'modal',
                resolve: {
                    items: () => {
                        return this.items
                    }
                }
            })

        modalInstance
            .result
            .then((selectedItem) => {
                this.selected = selectedItem
            }, () => {
                this
                    .$log
                    .info('Modal dismissed at: ' + new Date())
            })
    }

    openMultipleModals = () => {
        this
            .$uibModal
            .open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-bottom',
                ariaDescribedBy: 'modal-body-bottom',
                component: 'modal',
                size: 'sm',
                controller: ($scope : any) => {
                    $scope.name = 'bottom'
                }
            })

        this
            .$uibModal
            .open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title-top',
                ariaDescribedBy: 'modal-body-top',
                component: 'modal',
                size: 'sm',
                controller: ($scope : any) => {
                    $scope.name = 'top'
                }
            })
    }

    toggleAnimation = () => {
        this.animationsEnabled = !this.animationsEnabled
    }
}
