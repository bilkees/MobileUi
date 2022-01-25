import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ProductsComponent } from './products/products.component';




const routes: Routes = [{path:"about",component:AboutComponent},
{path:"home",component:HomeComponent},
{path:"products",component:ProductsComponent},
{path:"links",component:LinksComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
