/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from "@angular/core";
import { MatDatepickerIntl } from "@angular/material";
import { merge, of as observableOf, Subscription } from "rxjs";
import { MatDatetimepicker } from "./datetimepicker";
/**
 * @template D
 */
export class MatDatetimepickerToggle {
    /**
     * @param {?} _intl
     * @param {?} _changeDetectorRef
     */
    constructor(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
    }
    /**
     * Whether the toggle button is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.datepicker) {
            this._watchStateChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _open(event) {
        if (this.datetimepicker && !this.disabled) {
            this.datetimepicker.open();
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    _watchStateChanges() {
        /** @type {?} */
        const datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : observableOf();
        /** @type {?} */
        const inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
            this.datetimepicker._datepickerInput._disabledChange : observableOf();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled)
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MatDatetimepickerToggle.decorators = [
    { type: Component, args: [{
                selector: "mat-datetimepicker-toggle",
                template: `<button mat-icon-button type="button" [attr.aria-label]="_intl.openCalendarLabel"
        [disabled]="disabled" (click)="_open($event)">
  <mat-icon [ngSwitch]="datetimepicker.type">
    <svg *ngSwitchCase="'time'" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"
            style="vertical-align: top" focusable="false">
      <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
    </svg>
    <svg *ngSwitchCase="'datetime'" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"
            style="vertical-align: top" focusable="false">
      <path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"></path>
    </svg>
    <svg *ngSwitchDefault viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor"
        style="vertical-align: top" focusable="false">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  </mat-icon>
</button>
`,
                host: {
                    "class": "mat-datetimepicker-toggle"
                },
                exportAs: "matDatetimepickerToggle",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
MatDatetimepickerToggle.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: ChangeDetectorRef }
];
MatDatetimepickerToggle.propDecorators = {
    datetimepicker: [{ type: Input, args: ["for",] }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MatDatetimepickerToggle.prototype._stateChanges;
    /**
     * Datepicker instance that the button will toggle.
     * @type {?}
     */
    MatDatetimepickerToggle.prototype.datetimepicker;
    /** @type {?} */
    MatDatetimepickerToggle.prototype._disabled;
    /** @type {?} */
    MatDatetimepickerToggle.prototype._intl;
    /** @type {?} */
    MatDatetimepickerToggle.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWVwaWNrZXItdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlLyIsInNvdXJjZXMiOlsiZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBK0JyRCxNQUFNOzs7OztJQWdCSixZQUFtQixLQUF3QixFQUFVLGtCQUFxQztRQUF2RSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFmbEYsa0JBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBZWtELENBQUM7Ozs7O0lBVDlGLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4RixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUtELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRU8sa0JBQWtCOztjQUNsQixrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFOztjQUMvRixhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRTtRQUV6RSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQzthQUM1RSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCWDtnQkFDQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLDJCQUEyQjtpQkFDckM7Z0JBQ0QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFoQ1EsaUJBQWlCO1lBUnhCLGlCQUFpQjs7OzZCQTZDaEIsS0FBSyxTQUFDLEtBQUs7dUJBR1gsS0FBSzs7OztJQU5OLGdEQUEyQzs7Ozs7SUFHM0MsaURBQW1EOztJQVVuRCw0Q0FBMkI7O0lBRWYsd0NBQStCOztJQUFFLHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gXCJAYW5ndWxhci9jZGsvY29lcmNpb25cIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW50bCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCIsXHJcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJfaW50bC5vcGVuQ2FsZW5kYXJMYWJlbFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIl9vcGVuKCRldmVudClcIj5cclxuICA8bWF0LWljb24gW25nU3dpdGNoXT1cImRhdGV0aW1lcGlja2VyLnR5cGVcIj5cclxuICAgIDxzdmcgKm5nU3dpdGNoQ2FzZT1cIid0aW1lJ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQzYuNDcsMjIgMiwxNy41IDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMi41LDdWMTIuMjVMMTcsMTQuOTJMMTYuMjUsMTYuMTVMMTEsMTNWN0gxMi41WlwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGV0aW1lJ1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUsMTNIMTYuNVYxNS44MkwxOC45NCwxNy4yM0wxOC4xOSwxOC41M0wxNSwxNi42OVYxM00xOSw4SDVWMTlIOS42N0M5LjI0LDE4LjA5IDksMTcuMDcgOSwxNkE3LDcgMCAwLDEgMTYsOUMxNy4wNyw5IDE4LjA5LDkuMjQgMTksOS42N1Y4TTUsMjFDMy44OSwyMSAzLDIwLjEgMywxOVY1QzMsMy44OSAzLjg5LDMgNSwzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QTIsMiAwIDAsMSAyMSw1VjExLjFDMjIuMjQsMTIuMzYgMjMsMTQuMDkgMjMsMTZBNyw3IDAgMCwxIDE2LDIzQzE0LjA5LDIzIDEyLjM2LDIyLjI0IDExLjEsMjFINU0xNiwxMS4xNUE0Ljg1LDQuODUgMCAwLDAgMTEuMTUsMTZDMTEuMTUsMTguNjggMTMuMzIsMjAuODUgMTYsMjAuODVBNC44NSw0Ljg1IDAgMCwwIDIwLjg1LDE2QzIwLjg1LDEzLjMyIDE4LjY4LDExLjE1IDE2LDExLjE1WlwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgPHN2ZyAqbmdTd2l0Y2hEZWZhdWx0IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cclxuICAgICAgPHBhdGggZD1cIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjhoMTR2MTF6TTcgMTBoNXY1SDd6XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9tYXQtaWNvbj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci10b2dnbGVcIlxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6IFwibWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGVcIixcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclRvZ2dsZTxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBEYXRlcGlja2VyIGluc3RhbmNlIHRoYXQgdGhlIGJ1dHRvbiB3aWxsIHRvZ2dsZS4gKi9cclxuICBASW5wdXQoXCJmb3JcIikgZGF0ZXRpbWVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgdG9nZ2xlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5kYXRldGltZXBpY2tlci5kaXNhYmxlZCA6ICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRlcGlja2VyKSB7XHJcbiAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0ZXRpbWVwaWNrZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5vcGVuKCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XHJcbiAgICBjb25zdCBkYXRlcGlja2VyRGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyID8gdGhpcy5kYXRldGltZXBpY2tlci5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyICYmIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dCA/XHJcbiAgICAgICAgdGhpcy5kYXRldGltZXBpY2tlci5fZGF0ZXBpY2tlcklucHV0Ll9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xyXG5cclxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzID0gbWVyZ2UodGhpcy5faW50bC5jaGFuZ2VzLCBkYXRlcGlja2VyRGlzYWJsZWQsIGlucHV0RGlzYWJsZWQpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==