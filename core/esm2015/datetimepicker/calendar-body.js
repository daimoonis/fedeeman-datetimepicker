/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
export class MatDatetimepickerCalendarCell {
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     */
    constructor(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
}
if (false) {
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.value;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.displayValue;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.ariaLabel;
    /** @type {?} */
    MatDatetimepickerCalendarCell.prototype.enabled;
}
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
export class MatDatetimepickerCalendarBody {
    /**
     * An internal component used to display calendar data in a table.
     * @docs-private
     */
    constructor() {
        /** The number of columns in the table. */
        this.numCols = 7;
        /** Whether to allow selection of disabled cells. */
        this.allowDisabledSelection = false;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new EventEmitter();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    _cellClicked(cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    }
    /**
     * The number of blank cells to put at the beginning for the first row.
     * @return {?}
     */
    get _firstRowOffset() {
        return this.rows && this.rows.length && this.rows[0].length ?
            this.numCols - this.rows[0].length : 0;
    }
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    _isActiveCell(rowIndex, colIndex) {
        /** @type {?} */
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    }
}
MatDatetimepickerCalendarBody.decorators = [
    { type: Component, args: [{
                selector: "[mat-datetimepicker-calendar-body]",
                template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
<tr *ngIf="_firstRowOffset < labelMinRequiredCells" aria-hidden="true">
  <td class="mat-datetimepicker-calendar-body-label" [attr.colspan]="numCols" >{{ label }}</td>
</tr>

<!-- Create the first row separately so we can include a special spacer cell. -->
<tr *ngFor="let row of rows; let rowIndex = index" role="row">
  <!--
    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.
  -->
  <td *ngIf="rowIndex === 0 && _firstRowOffset"
      aria-hidden="true"
      class="mat-datetimepicker-calendar-body-label"
      [attr.colspan]="_firstRowOffset">
    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}
  </td>
  <td *ngFor="let item of row; let colIndex = index"
      role="gridcell"
      class="mat-datetimepicker-calendar-body-cell"
      [class.mat-datetimepicker-calendar-body-disabled]="!item.enabled"
      [class.mat-datetimepicker-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
      [attr.aria-label]="item.ariaLabel"
      [attr.aria-disabled]="!item.enabled || null"
      (click)="_cellClicked(item)">
    <div class="mat-datetimepicker-calendar-body-cell-content"
         [class.mat-datetimepicker-calendar-body-selected]="selectedValue === item.value"
         [class.mat-datetimepicker-calendar-body-today]="todayValue === item.value">
      {{ item.displayValue }}
    </div>
  </td>
</tr>
`,
                styles: [`.mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);-webkit-transform:translateX(-6px);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.14286% 0 0;-webkit-transform:translateX(6px);transform:translateX(6px);text-align:right}`],
                host: {
                    "class": "mat-datetimepicker-calendar-body"
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
MatDatetimepickerCalendarBody.propDecorators = {
    label: [{ type: Input }],
    rows: [{ type: Input }],
    todayValue: [{ type: Input }],
    selectedValue: [{ type: Input }],
    labelMinRequiredCells: [{ type: Input }],
    numCols: [{ type: Input }],
    allowDisabledSelection: [{ type: Input }],
    activeCell: [{ type: Input }],
    selectedValueChange: [{ type: Output }]
};
if (false) {
    /**
     * The label for the table. (e.g. "Jan 2017").
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.label;
    /**
     * The cells to display in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.rows;
    /**
     * The value in the table that corresponds to today.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.todayValue;
    /**
     * The value in the table that is currently selected.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.selectedValue;
    /**
     * The minimum number of free cells needed to fit the label in the first row.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.labelMinRequiredCells;
    /**
     * The number of columns in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.numCols;
    /**
     * Whether to allow selection of disabled cells.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.allowDisabledSelection;
    /**
     * The cell number of the active cell in the table.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.activeCell;
    /**
     * Emits when a new value is selected.
     * @type {?}
     */
    MatDatetimepickerCalendarBody.prototype.selectedValueChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYm9keS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS8iLCJzb3VyY2VzIjpbImRhdGV0aW1lcGlja2VyL2NhbGVuZGFyLWJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNdkIsTUFBTTs7Ozs7OztJQUNKLFlBQW1CLEtBQWEsRUFDYixZQUFvQixFQUNwQixTQUFpQixFQUNqQixPQUFnQjtRQUhoQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQ25DLENBQUM7Q0FDRjs7O0lBTGEsOENBQW9COztJQUNwQixxREFBMkI7O0lBQzNCLGtEQUF3Qjs7SUFDeEIsZ0RBQXVCOzs7Ozs7QUFvRHJDLE1BQU07SUFoRE47OztPQUdHO0lBQ0g7UUE0REUsMENBQTBDO1FBQ2pDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFckIsb0RBQW9EO1FBQzNDLDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUV4Qyx1REFBdUQ7UUFDOUMsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUV4QiwwQ0FBMEM7UUFDaEMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQXlCN0QsQ0FBQzs7Ozs7SUF2QkMsWUFBWSxDQUFDLElBQW1DO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBR0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDMUMsVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7UUFFbkQsc0VBQXNFO1FBQ3RFLElBQUksUUFBUSxFQUFFO1lBQ1osVUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDcEM7UUFFRCxPQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hDLENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0NYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHVoREFBdWhELENBQUM7Z0JBQ2ppRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGtDQUFrQztpQkFDNUM7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7b0JBR0UsS0FBSzttQkFHTCxLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSztvQ0FHTCxLQUFLO3NCQUdMLEtBQUs7cUNBR0wsS0FBSzt5QkFHTCxLQUFLO2tDQUdMLE1BQU07Ozs7Ozs7SUF4QlAsOENBQXVCOzs7OztJQUd2Qiw2Q0FBaUQ7Ozs7O0lBR2pELG1EQUE0Qjs7Ozs7SUFHNUIsc0RBQStCOzs7OztJQUcvQiw4REFBdUM7Ozs7O0lBR3ZDLGdEQUFxQjs7Ozs7SUFHckIsK0RBQXdDOzs7OztJQUd4QyxtREFBd0I7Ozs7O0lBR3hCLDREQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGEgc2luZ2xlIGNhbGVuZGFyIGNlbGwuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbikge1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgY2FsZW5kYXIgZGF0YSBpbiBhIHRhYmxlLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJbbWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHldXCIsXHJcbiAgdGVtcGxhdGU6IGA8IS0tXHJcbiAgSWYgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBmaXJzdCByb3csIGNyZWF0ZSBhIHNlcGFyYXRlIGxhYmVsIHJvdy4gV2UgbWFyayB0aGlzIHJvdyBhc1xyXG4gIGFyaWEtaGlkZGVuIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBpdCB0byBiZSByZWFkIG91dCBhcyBvbmUgb2YgdGhlIHdlZWtzIGluIHRoZSBtb250aC5cclxuLS0+XHJcbjx0ciAqbmdJZj1cIl9maXJzdFJvd09mZnNldCA8IGxhYmVsTWluUmVxdWlyZWRDZWxsc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gIDx0ZCBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVsXCIgW2F0dHIuY29sc3Bhbl09XCJudW1Db2xzXCIgPnt7IGxhYmVsIH19PC90ZD5cclxuPC90cj5cclxuXHJcbjwhLS0gQ3JlYXRlIHRoZSBmaXJzdCByb3cgc2VwYXJhdGVseSBzbyB3ZSBjYW4gaW5jbHVkZSBhIHNwZWNpYWwgc3BhY2VyIGNlbGwuIC0tPlxyXG48dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzOyBsZXQgcm93SW5kZXggPSBpbmRleFwiIHJvbGU9XCJyb3dcIj5cclxuICA8IS0tXHJcbiAgICBXZSBtYXJrIHRoaXMgY2VsbCBhcyBhcmlhLWhpZGRlbiBzbyBpdCBkb2Vzbid0IGdldCByZWFkIG91dCBhcyBvbmUgb2YgdGhlIGRheXMgaW4gdGhlIHdlZWsuXHJcbiAgLS0+XHJcbiAgPHRkICpuZ0lmPVwicm93SW5kZXggPT09IDAgJiYgX2ZpcnN0Um93T2Zmc2V0XCJcclxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbFwiXHJcbiAgICAgIFthdHRyLmNvbHNwYW5dPVwiX2ZpcnN0Um93T2Zmc2V0XCI+XHJcbiAgICB7eyBfZmlyc3RSb3dPZmZzZXQgPj0gbGFiZWxNaW5SZXF1aXJlZENlbGxzID8gbGFiZWwgOiAnJyB9fVxyXG4gIDwvdGQ+XHJcbiAgPHRkICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGNvbEluZGV4ID0gaW5kZXhcIlxyXG4gICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGxcIlxyXG4gICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1hY3RpdmVdPVwiX2lzQWN0aXZlQ2VsbChyb3dJbmRleCwgY29sSW5kZXgpXCJcclxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmFyaWFMYWJlbFwiXHJcbiAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZCB8fCBudWxsXCJcclxuICAgICAgKGNsaWNrKT1cIl9jZWxsQ2xpY2tlZChpdGVtKVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZF09XCJzZWxlY3RlZFZhbHVlID09PSBpdGVtLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXRvZGF5XT1cInRvZGF5VmFsdWUgPT09IGl0ZW0udmFsdWVcIj5cclxuICAgICAge3sgaXRlbS5kaXNwbGF5VmFsdWUgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvdGQ+XHJcbjwvdHI+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweDttaW4td2lkdGg6MjI0cHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVse3BhZGRpbmc6Ny4xNDI4NiUgMCA3LjE0Mjg2JSA3LjE0Mjg2JTtoZWlnaHQ6MDtsaW5lLWhlaWdodDowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpO3RleHQtYWxpZ246bGVmdH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxNC4yODU3MSU7aGVpZ2h0OjA7bGluZS1oZWlnaHQ6MDtwYWRkaW5nOjcuMTQyODYlIDA7dGV4dC1hbGlnbjpjZW50ZXI7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUlO2xlZnQ6NSU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo5MCU7aGVpZ2h0OjkwJTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhcjpmb2N1cyAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCksOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfVtkaXI9cnRsXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWx7cGFkZGluZzowIDcuMTQyODYlIDAgMDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KTt0ZXh0LWFsaWduOnJpZ2h0fWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVwiXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSB7XHJcbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIHRhYmxlLiAoZS5nLiBcIkphbiAyMDE3XCIpLiAqL1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgY2VsbHMgdG8gZGlzcGxheSBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgcm93czogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xyXG5cclxuICAvKiogVGhlIHZhbHVlIGluIHRoZSB0YWJsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRvZGF5LiAqL1xyXG4gIEBJbnB1dCgpIHRvZGF5VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuICovXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGZyZWUgY2VsbHMgbmVlZGVkIHRvIGZpdCB0aGUgbGFiZWwgaW4gdGhlIGZpcnN0IHJvdy4gKi9cclxuICBASW5wdXQoKSBsYWJlbE1pblJlcXVpcmVkQ2VsbHM6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgbnVtQ29scyA9IDc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIGFsbG93IHNlbGVjdGlvbiBvZiBkaXNhYmxlZCBjZWxscy4gKi9cclxuICBASW5wdXQoKSBhbGxvd0Rpc2FibGVkU2VsZWN0aW9uID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgY2VsbCBudW1iZXIgb2YgdGhlIGFjdGl2ZSBjZWxsIGluIHRoZSB0YWJsZS4gKi9cclxuICBASW5wdXQoKSBhY3RpdmVDZWxsID0gMDtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgdmFsdWUgaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgX2NlbGxDbGlja2VkKGNlbGw6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEaXNhYmxlZFNlbGVjdGlvbiAmJiAhY2VsbC5lbmFibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KGNlbGwudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBudW1iZXIgb2YgYmxhbmsgY2VsbHMgdG8gcHV0IGF0IHRoZSBiZWdpbm5pbmcgZm9yIHRoZSBmaXJzdCByb3cuICovXHJcbiAgZ2V0IF9maXJzdFJvd09mZnNldCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucm93cyAmJiB0aGlzLnJvd3MubGVuZ3RoICYmIHRoaXMucm93c1swXS5sZW5ndGggP1xyXG4gICAgICB0aGlzLm51bUNvbHMgLSB0aGlzLnJvd3NbMF0ubGVuZ3RoIDogMDtcclxuICB9XHJcblxyXG4gIF9pc0FjdGl2ZUNlbGwocm93SW5kZXg6IG51bWJlciwgY29sSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xyXG5cclxuICAgIC8vIEFjY291bnQgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGZpcnN0IHJvdyBtYXkgbm90IGhhdmUgYXMgbWFueSBjZWxscy5cclxuICAgIGlmIChyb3dJbmRleCkge1xyXG4gICAgICBjZWxsTnVtYmVyIC09IHRoaXMuX2ZpcnN0Um93T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjZWxsTnVtYmVyID09PSB0aGlzLmFjdGl2ZUNlbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==