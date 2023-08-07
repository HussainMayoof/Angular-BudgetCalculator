import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent {
  @Input() budgetItems!: BudgetItem[];
  @Output() deleteItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() updateItem: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor (public dialog: MatDialog) {}

  delete(item: BudgetItem) {
    this.deleteItem.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    let dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let updateArray = new Array();
        updateArray.push(this.budgetItems.indexOf(item));
        updateArray.push(result);
        this.updateItem.emit(updateArray);
      }
    });
  }
}
