import { ILocationProvider } from 'angular'
import { IStateProvider, IState, IUrlRouterProvider } from 'angular-ui-router'

export class AppConfig {
    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider
    ) {
        this.init()
    }

    private init(): void {
        this.$locationProvider.html5Mode(true)
        this.$stateProvider.state(AppConfig.homeState())
        this.$stateProvider.state(AppConfig.dashboardState())
        this.$stateProvider.state(AppConfig.registerState())
    }

    private static homeState(): IState {
        return {
            name: 'home', url: '/', template: '<home></home>'
        }
    }

    private static dashboardState(): IState {
        return {
            name: '#dashboard', url: '/dashboard', template: '<dashboard></dashboard>'
        }
    }

    private static registerState(): IState {
        return {
            name: '#register', url: '/register', template: 'register'
        }
    }
}
