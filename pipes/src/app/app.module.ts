import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExmplosPipesComponent } from './exmplos-pipes/exmplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';

@NgModule({
  declarations: [AppComponent, ExmplosPipesComponent, CamelCasePipe, FiltroArrayPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // Existe uma const que faz parte da api de internacionalizacao, vamos fornecer essa informação para aplicacao, e dentro do providers
    // { provide: LOCALE_ID, useValue: 'pt' },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingService: SettingsService) =>
        settingService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
