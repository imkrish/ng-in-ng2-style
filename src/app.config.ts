import { ILocationProvider } from 'angular'
import { IStateProvider, IState, IUrlRouterProvider } from 'angular-ui-router'

export class AppConfig {
    states: IState[] = [
        { name: 'home', url: '/', template: '<home></home>' },
        { name: 'dashboard', url: '/dashboard', template: '<dashboard></dashboard>' }
    ]

    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider
    ) {
        this.runConfig()
    }

    private runConfig() {
        this.$locationProvider.html5Mode(true)
        this.states.forEach(state => this.$stateProvider.state(state))
    }
}
