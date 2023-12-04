class Injector {
  private _container = new Map();
  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No Provider found');
    }
    return serviceInstance;
  }
}

class VerifyService {
  sayHi() {
    console.log('Hi Team');
  }
}

class VerifyComponent {
  constructor(public _verifyService: VerifyService) {}
}

// In Angular project below step will be done while we are adding the service in NgModule - provider or providedIn: root
const injector = new Injector([VerifyService]);
const component = new VerifyComponent(injector.get(VerifyService));
//----------------
component._verifyService.sayHi();
