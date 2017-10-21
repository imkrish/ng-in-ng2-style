import { ILocationProvider } from 'angular'
import { IStateProvider, IState, IUrlRouterProvider } from 'angular-ui-router'

export class AppConfig {
    states: IState[] = [
        {
            name: 'main',
            url: '/main',
            component: 'main'
        },
        {
            name: 'main.home',
            url: '/home',
            component: 'home'
        }
    ]

    constructor(
        private $stateProvider: IStateProvider,
        private $locationProvider: ILocationProvider,
        private $urlRouterProvider: IUrlRouterProvider
    ) {
        this.runConfig()
    }

    private runConfig() {
        this.$locationProvider.html5Mode(true)
        this.states.forEach(state => this.$stateProvider.state(state))
        this.$urlRouterProvider.otherwise('/main/home')
    }
}
