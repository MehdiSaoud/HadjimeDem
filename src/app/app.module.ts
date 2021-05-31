/*** CORE ***/
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

/*** INTERCEPTOR ***/
import { AuthHeaderInterceptor } from "./interceptors/header.interceptor";
import { CatchErrorInterceptor } from "./interceptors/http-error.interceptor";

/*** MODULES ***/
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { MainStepperModule } from "./module/main-stepper/main-stepper.module";

/*** COMPONENT ***/
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { MainComponent } from "./layout/main/main.component";

/*** SERVICES ***/
import { AuthService } from "./shared/services";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


export function appInitializerFactory(authService: AuthService) {
  return () => authService.checkTheUserOnTheFirstLoad();
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    MainStepperModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  declarations: [AppComponent, HeaderComponent, MainComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
