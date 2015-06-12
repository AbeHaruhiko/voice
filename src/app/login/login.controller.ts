module chavo {
  'use strict';

  interface IMainScope extends ng.IScope {
  }

  export class LoginController {

    /* @ngInject */
    constructor (public $scope: IMainScope, public $state: ng.ui.IStateService, public $location: ng.ILocationService, public AuthService: AuthService) {

    }

    signUp(form: { name: string; password: string; }) {
      this.AuthService.signUp(form, {
        success: (user: Parse.User) => {
          this.$scope.$apply(() => {
            this.$state.go('login');
          });
        },
        error: (user: Parse.User, error: Parse.Error) => {
          alert('Unable to sign up:  ' + error.code + ' ' + error.message);
        }
      });
    }

    logIn(form: { name: string; password: string; }) {
      this.AuthService.logIn(form, {
        success: (user: Parse.User) => {
          this.$scope.$apply(() => {
            if (!user.get('emailVerified')) {
              this.$state.go('main');
              return;
            }

            this.$state.go('main');
          });
        },
        error: (user:Parse.User, error: Parse.Error) => {
          console.log('Unable to login:  ' + error.code + ' ' + error.message);
          this.$location.path('/login');
        }
      });
    };

    logOut() {
      this.AuthService.logOut();
    }
  }

}
