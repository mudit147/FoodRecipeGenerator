import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemNameRef') nameElementRef: ElementRef;
  @ViewChild('itemAmountRef') amountElementRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addNewIngredient() {
    const ingName = this.nameElementRef.nativeElement.value;
    const ingAmount = this.amountElementRef.nativeElement.value;
    const newIngredientData = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredientData);
  }

  ngOnInit(): void {}
}
