import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { ItemComponent } from "./components/item/item.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ItemListComponent,
  },
];

@NgModule({
  declarations: [ItemListComponent, ItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ItemListComponent],
})
export class ShoppingModule {}
