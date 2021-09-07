import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { FavoriteCollectionComponent } from './components/favorite-collection/favorite-collection.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'details/:id', component: CityDetailsComponent },
  { path: 'favorites', component: FavoriteCollectionComponent },
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
