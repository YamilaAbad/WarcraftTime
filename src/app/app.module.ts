import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { WarcraftComponent } from './warcraft/warcraft.component';
import { GuiasComponent } from './guias/guias.component';
import { TemporadaComponent } from './temporada/temporada.component';
import { RedesComponent } from './redes/redes.component';
import { ForoComponent } from './foro/foro.component';


@NgModule({
  declarations: [
    AppComponent,
    NoticiasListComponent,
    ComentariosComponent,
    WarcraftComponent,
    GuiasComponent,
    TemporadaComponent,
    RedesComponent,
    ForoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
