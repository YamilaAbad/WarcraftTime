import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro/foro.component';
import { GuiasComponent } from './guias/guias.component';
import { RedesComponent } from './redes/redes.component';
import { TemporadaComponent } from './temporada/temporada.component';
import { WarcraftComponent } from './warcraft/warcraft.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'warcraft',
    pathMatch: 'full',
  },
  {
    path: 'warcraft',
    component: WarcraftComponent,
  },
  {
    path: 'guias',
    component: GuiasComponent,
  },
  {
    path: 'foro',
    component: ForoComponent,
  },
  {
    path: 'temporada',
    component: TemporadaComponent,
  },
  {
    path: 'redes',
    component: RedesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
