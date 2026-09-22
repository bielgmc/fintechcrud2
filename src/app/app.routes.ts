import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ContasComponent } from './pages/contas/contas.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"sobre",component:SobreComponent},
    {path:"ajuda",component:AjudaComponent},
    {path:"contas",component:ContasComponent},
   
];
