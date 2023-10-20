import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./search/search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CategoriesComponent } from "./categories/categories.component";
import { NavbarComponent } from "./navbar.component";
import { RouterModule } from "@angular/router";
import { categoriesReducer } from "src/app/store/shopping/categories/categories.reducer";
import { StoreModule } from "@ngrx/store";
import { CategoriesEffects } from "src/app/store/shopping/categories/categories.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [NavbarComponent, SearchComponent, CategoriesComponent],
  exports: [NavbarComponent],
  imports: [
    StoreModule.forFeature("categories", categoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class NavbarModule {}
