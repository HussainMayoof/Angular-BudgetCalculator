import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent {
  @Input() budgetItem!: BudgetItem;
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  deleteButtonClicked() {
    this.deleteButtonClick.emit();
  }

  cardClicked(item: BudgetItem) {
    this.cardClick.emit(item);
  }
}
