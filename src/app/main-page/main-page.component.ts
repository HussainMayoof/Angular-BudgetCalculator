import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  budgetItems: BudgetItem[] = new Array<BudgetItem>;
  totalAmount: number = 0;

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalAmount += newItem.amount!;
  }

  delete(item: BudgetItem) {
    this.totalAmount = this.totalAmount - item.amount!;
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
    console.log("Item Deleted");
  }

  updateItem(updateArray: Array<any>) {
    this.totalAmount = this.totalAmount - this.budgetItems[updateArray[0]].amount!;
    this.budgetItems[updateArray[0]] = updateArray[1];
    this.totalAmount += updateArray[1].amount;
  }
}