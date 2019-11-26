# Abb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Performance for low specs
  - Changed component detection to OnPush
  - AOT compilation
  - *trackBy* on ngFor
  - use *async* pipe on templates | unsubscribe all *Observables*
  - Lazy load
  - Changed to the new *Ivy* compiler

## TODO's
- Install a service worker for cache
- Make better / more useful tests
- Improve feature grid layout - masonry like
- Add component / page loader to improve user experience
