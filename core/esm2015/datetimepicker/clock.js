/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/* tslint:disable */
import { Component, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { DatetimeAdapter } from "../adapter/datetime-adapter";
import { MatDatetimepickerFilterType } from "./datetimepicker-filtertype";
/** @type {?} */
export const CLOCK_RADIUS = 50;
/** @type {?} */
export const CLOCK_INNER_RADIUS = 27.5;
/** @type {?} */
export const CLOCK_OUTER_RADIUS = 41.25;
/** @type {?} */
export const CLOCK_TICK_RADIUS = 7.0833;
/**
 * A clock that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
export class MatDatetimepickerClock {
    /**
     * @param {?} _element
     * @param {?} _adapter
     */
    constructor(_element, _adapter) {
        this._element = _element;
        this._adapter = _adapter;
        this._userSelection = new EventEmitter();
        this._timeChanged = false;
        this.interval = 1;
        this.twelvehour = false;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new EventEmitter();
        this.activeDateChange = new EventEmitter();
        /** Hours and Minutes representing the clock view. */
        this._hours = [];
        this._minutes = [];
        /** Whether the clock is in hour view. */
        this._hourView = true;
        this.mouseMoveListener = (event) => {
            this._handleMousemove(event);
        };
        this.mouseUpListener = () => {
            this._handleMouseup();
        };
    }
    /**
     * The date to display in this clock view.
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        /** @type {?} */
        let oldActiveDate = this._activeDate;
        this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
        if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /**
     * The currently selected date.
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        if (this._selected) {
            this.activeDate = this._selected;
        }
    }
    /**
     * The minimum selectable date.
     * @return {?}
     */
    get minDate() {
        return this._minDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    }
    /**
     * The maximum selectable date.
     * @return {?}
     */
    get maxDate() {
        return this._maxDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    }
    /**
     * Whether the clock should be started in hour or minute view.
     * @param {?} value
     * @return {?}
     */
    set startView(value) {
        this._hourView = value != "minute";
    }
    /**
     * @return {?}
     */
    get _hand() {
        this._selectedHour = this._adapter.getHour(this.activeDate);
        this._selectedMinute = this._adapter.getMinute(this.activeDate);
        /** @type {?} */
        let deg = 0;
        /** @type {?} */
        let radius = CLOCK_OUTER_RADIUS;
        if (this._hourView) {
            /** @type {?} */
            let outer = this._selectedHour > 0 && this._selectedHour < 13;
            radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
            if (this.twelvehour) {
                radius = CLOCK_OUTER_RADIUS;
            }
            deg = Math.round(this._selectedHour * (360 / (24 / 2)));
        }
        else {
            deg = Math.round(this._selectedMinute * (360 / 60));
        }
        return {
            "transform": `rotate(${deg}deg)`,
            "height": `${radius}%`,
            "margin-top": `${50 - radius}%`
        };
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.activeDate = this._activeDate || this._adapter.today();
        this._init();
    }
    /**
     * Handles mousedown events on the clock body.
     * @param {?} event
     * @return {?}
     */
    _handleMousedown(event) {
        this._timeChanged = false;
        this.setTime(event);
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchmove", this.mouseMoveListener);
        document.addEventListener("mouseup", this.mouseUpListener);
        document.addEventListener("touchend", this.mouseUpListener);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleMousemove(event) {
        event.preventDefault();
        this.setTime(event);
    }
    /**
     * @return {?}
     */
    _handleMouseup() {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchmove", this.mouseMoveListener);
        document.removeEventListener("mouseup", this.mouseUpListener);
        document.removeEventListener("touchend", this.mouseUpListener);
        if (this._timeChanged) {
            this.selectedChange.emit(this.activeDate);
        }
    }
    /**
     * Initializes this clock view.
     * @return {?}
     */
    _init() {
        this._hours.length = 0;
        this._minutes.length = 0;
        /** @type {?} */
        let hourNames = this._adapter.getHourNames();
        /** @type {?} */
        let minuteNames = this._adapter.getMinuteNames();
        if (this.twelvehour) {
            for (let i = 1; i < (hourNames.length / 2) + 1; i++) {
                /** @type {?} */
                let radian = i / 6 * Math.PI;
                /** @type {?} */
                let radius = CLOCK_OUTER_RADIUS;
                /** @type {?} */
                const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                /** @type {?} */
                let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
                });
            }
        }
        else {
            for (let i = 0; i < hourNames.length; i++) {
                /** @type {?} */
                let radian = i / 6 * Math.PI;
                /** @type {?} */
                let outer = i > 0 && i < 13;
                /** @type {?} */
                let radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                /** @type {?} */
                const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                /** @type {?} */
                let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                    (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.HOUR));
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                    fontSize: i > 0 && i < 13 ? "" : "80%"
                });
            }
        }
        for (let i = 0; i < minuteNames.length; i += 5) {
            /** @type {?} */
            let radian = i / 30 * Math.PI;
            /** @type {?} */
            const date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
            /** @type {?} */
            let enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.MINUTE));
            this._minutes.push({
                value: i,
                displayValue: i === 0 ? "00" : minuteNames[i],
                enabled: enabled,
                top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
                left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS
            });
        }
    }
    /**
     * Set Time
     * @param {?} event
     * @return {?}
     */
    setTime(event) {
        /** @type {?} */
        let trigger = this._element.nativeElement;
        /** @type {?} */
        let triggerRect = trigger.getBoundingClientRect();
        /** @type {?} */
        let width = trigger.offsetWidth;
        /** @type {?} */
        let height = trigger.offsetHeight;
        /** @type {?} */
        let pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        /** @type {?} */
        let pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        /** @type {?} */
        let x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
        /** @type {?} */
        let y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
        /** @type {?} */
        let radian = Math.atan2(-x, y);
        /** @type {?} */
        let unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
        /** @type {?} */
        let z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        let outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
            (width * (CLOCK_INNER_RADIUS / 100))) / 2;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        /** @type {?} */
        let value = Math.round(radian / unit);
        /** @type {?} */
        let date;
        if (this._hourView) {
            if (this.twelvehour) {
                value = value === 0 ? 12 : value;
            }
            else {
                if (value === 12) {
                    value = 0;
                }
                value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), value, this._adapter.getMinute(this.activeDate));
        }
        else {
            if (this.interval) {
                value *= this.interval;
            }
            if (value === 60) {
                value = 0;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), value);
        }
        /** @type {?} */
        const clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
        if (date === clamped) {
            this._timeChanged = true;
            this.activeDate = clamped;
            this.activeDateChange.emit(this.activeDate);
        }
    }
}
MatDatetimepickerClock.decorators = [
    { type: Component, args: [{
                selector: "mat-datetimepicker-clock",
                template: `<div class="mat-datetimepicker-clock">
  <div class="mat-datetimepicker-clock-center"></div>
  <div class="mat-datetimepicker-clock-hand" [ngStyle]="_hand"></div>
  <div class="mat-datetimepicker-clock-hours" [class.active]="_hourView">
    <div *ngFor="let item of _hours"
         class="mat-datetimepicker-clock-cell"
         [class.mat-datetimepicker-clock-cell-selected]="_selectedHour == item.value"
         [class.mat-datetimepicker-clock-cell-disabled]="!item.enabled"
         [style.top]="item.top+'%'"
         [style.left]="item.left+'%'"
         [style.fontSize]="item.fontSize">{{ item.displayValue }}</div>
  </div>
  <div class="mat-datetimepicker-clock-minutes" [class.active]="!_hourView">
    <div *ngFor="let item of _minutes"
         class="mat-datetimepicker-clock-cell"
         [class.mat-datetimepicker-clock-cell-selected]="_selectedMinute == item.value"
         [class.mat-datetimepicker-clock-cell-disabled]="!item.enabled"
         [style.top]="item.top+'%'"
         [style.left]="item.left+'%'">{{ item.displayValue }}</div>
  </div>
</div>
`,
                styles: [`:host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;-webkit-transform-origin:bottom;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:'';position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;-webkit-transform:scale(1.2);transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.mat-datetimepicker-clock-minutes{-webkit-transform:scale(.8);transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}`],
                host: {
                    "role": "clock",
                    "(mousedown)": "_handleMousedown($event)"
                }
            },] },
];
MatDatetimepickerClock.ctorParameters = () => [
    { type: ElementRef },
    { type: DatetimeAdapter }
];
MatDatetimepickerClock.propDecorators = {
    _userSelection: [{ type: Output }],
    activeDate: [{ type: Input }],
    selected: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    startView: [{ type: Input }],
    dateFilter: [{ type: Input }],
    interval: [{ type: Input }],
    twelvehour: [{ type: Input }],
    selectedChange: [{ type: Output }],
    activeDateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MatDatetimepickerClock.prototype._userSelection;
    /** @type {?} */
    MatDatetimepickerClock.prototype._activeDate;
    /** @type {?} */
    MatDatetimepickerClock.prototype._selected;
    /** @type {?} */
    MatDatetimepickerClock.prototype._minDate;
    /** @type {?} */
    MatDatetimepickerClock.prototype._timeChanged;
    /** @type {?} */
    MatDatetimepickerClock.prototype._maxDate;
    /**
     * A function used to filter which dates are selectable.
     * @type {?}
     */
    MatDatetimepickerClock.prototype.dateFilter;
    /** @type {?} */
    MatDatetimepickerClock.prototype.interval;
    /** @type {?} */
    MatDatetimepickerClock.prototype.twelvehour;
    /**
     * Emits when the currently selected date changes.
     * @type {?}
     */
    MatDatetimepickerClock.prototype.selectedChange;
    /** @type {?} */
    MatDatetimepickerClock.prototype.activeDateChange;
    /**
     * Hours and Minutes representing the clock view.
     * @type {?}
     */
    MatDatetimepickerClock.prototype._hours;
    /** @type {?} */
    MatDatetimepickerClock.prototype._minutes;
    /**
     * Whether the clock is in hour view.
     * @type {?}
     */
    MatDatetimepickerClock.prototype._hourView;
    /** @type {?} */
    MatDatetimepickerClock.prototype._selectedHour;
    /** @type {?} */
    MatDatetimepickerClock.prototype._selectedMinute;
    /** @type {?} */
    MatDatetimepickerClock.prototype.mouseMoveListener;
    /** @type {?} */
    MatDatetimepickerClock.prototype.mouseUpListener;
    /** @type {?} */
    MatDatetimepickerClock.prototype._element;
    /** @type {?} */
    MatDatetimepickerClock.prototype._adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvIiwic291cmNlcyI6WyJkYXRldGltZXBpY2tlci9jbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFMUUsTUFBTSxPQUFPLFlBQVksR0FBRyxFQUFFOztBQUM5QixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsSUFBSTs7QUFDdEMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLEtBQUs7O0FBQ3ZDLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxNQUFNOzs7Ozs7QUFzQ3ZDLE1BQU07Ozs7O0lBb0hKLFlBQW9CLFFBQW9CLEVBQ3BCLFFBQTRCO1FBRDVCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFuSHRDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQStDNUMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUF1QnBCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUVyQyxzREFBc0Q7UUFDNUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRXZDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFFbkQscURBQXFEO1FBQ3JELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBRTdCLHlDQUF5QztRQUN6QyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBZ0N4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxLQUFV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QUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztZQUNqRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztZQUNqRSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQ25GLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyRSxDQUFDLEtBQUssR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRTNDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDL0I7O1lBQ0csS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7WUFFakMsSUFBSTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25C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Qiw0Q0FBcUM7Ozs7O0lBR3JDLGdEQUFpRDs7SUFFakQsa0RBQW1EOzs7OztJQUduRCx3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7Ozs7SUFHN0IsMkNBQTBCOztJQUUxQiwrQ0FBc0I7O0lBQ3RCLGlEQUF3Qjs7SUF3QnhCLG1EQUErQjs7SUFDL0IsaURBQTZCOztJQUVqQiwwQ0FBNEI7O0lBQzVCLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0xPQ0tfUkFESVVTID0gNTA7XHJcbmV4cG9ydCBjb25zdCBDTE9DS19JTk5FUl9SQURJVVMgPSAyNy41O1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfT1VURVJfUkFESVVTID0gNDEuMjU7XHJcbmV4cG9ydCBjb25zdCBDTE9DS19USUNLX1JBRElVUyA9IDcuMDgzMztcclxuXHJcbmV4cG9ydCB0eXBlIENsb2NrVmlldyA9IFwiaG91clwiIHwgXCJtaW51dGVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNsb2NrIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2tcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2tcIj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbnRlclwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staGFuZFwiIFtuZ1N0eWxlXT1cIl9oYW5kXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1ob3Vyc1wiIFtjbGFzcy5hY3RpdmVdPVwiX2hvdXJWaWV3XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ob3Vyc1wiXHJcbiAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGxcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWRdPVwiX3NlbGVjdGVkSG91ciA9PSBpdGVtLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICAgICBbc3R5bGUudG9wXT1cIml0ZW0udG9wKyclJ1wiXHJcbiAgICAgICAgIFtzdHlsZS5sZWZ0XT1cIml0ZW0ubGVmdCsnJSdcIlxyXG4gICAgICAgICBbc3R5bGUuZm9udFNpemVdPVwiaXRlbS5mb250U2l6ZVwiPnt7IGl0ZW0uZGlzcGxheVZhbHVlIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzXCIgW2NsYXNzLmFjdGl2ZV09XCIhX2hvdXJWaWV3XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9taW51dGVzXCJcclxuICAgICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZF09XCJfc2VsZWN0ZWRNaW51dGUgPT0gaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcclxuICAgICAgICAgW3N0eWxlLnRvcF09XCJpdGVtLnRvcCsnJSdcIlxyXG4gICAgICAgICBbc3R5bGUubGVmdF09XCJpdGVtLmxlZnQrJyUnXCI+e3sgaXRlbS5kaXNwbGF5VmFsdWUgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWluLXdpZHRoOjIyNHB4O21hcmdpbjo4cHg7Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy10b3A6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyJTtoZWlnaHQ6MiU7bWFyZ2luOi0xJTtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MXB4O21hcmdpbjowIGF1dG87LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmQ6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNHB4O2xlZnQ6LTRweDt3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbjozNTBtczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staG91cnMuYWN0aXZlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlcy5hY3RpdmV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm06c2NhbGUoLjgpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbHtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTQuMTY2NiU7aGVpZ2h0OjE0LjE2NjYlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjUwJTthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWQpOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KTtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZHtjb2xvcjojZmZmfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwicm9sZVwiOiBcImNsb2NrXCIsXHJcbiAgICBcIihtb3VzZWRvd24pXCI6IFwiX2hhbmRsZU1vdXNlZG93bigkZXZlbnQpXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNsb2NrPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIGNsb2NrIHZpZXcuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGxldCBvbGRBY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmNsYW1wRGF0ZSh2YWx1ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyLnNhbWVNaW51dGUob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtaW5EYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbkRhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9taW5EYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fYWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWluRGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX3RpbWVDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWF4RGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21heERhdGU6IEQgfCBudWxsO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2xvY2sgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gaG91ciBvciBtaW51dGUgdmlldy4gKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdGFydFZpZXcodmFsdWU6IENsb2NrVmlldykge1xyXG4gICAgdGhpcy5faG91clZpZXcgPSB2YWx1ZSAhPSBcIm1pbnV0ZVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXHJcbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gIEBJbnB1dCgpIHR3ZWx2ZWhvdXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICBAT3V0cHV0KCkgYWN0aXZlRGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEhvdXJzIGFuZCBNaW51dGVzIHJlcHJlc2VudGluZyB0aGUgY2xvY2sgdmlldy4gKi9cclxuICBfaG91cnM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICBfbWludXRlczogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2xvY2sgaXMgaW4gaG91ciB2aWV3LiAqL1xyXG4gIF9ob3VyVmlldzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIF9zZWxlY3RlZEhvdXI6IG51bWJlcjtcclxuICBfc2VsZWN0ZWRNaW51dGU6IG51bWJlcjtcclxuXHJcbiAgZ2V0IF9oYW5kKCk6IGFueSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEhvdXIgPSB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIHRoaXMuX3NlbGVjdGVkTWludXRlID0gdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGxldCBkZWcgPSAwO1xyXG4gICAgbGV0IHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgIGlmICh0aGlzLl9ob3VyVmlldykge1xyXG4gICAgICBsZXQgb3V0ZXIgPSB0aGlzLl9zZWxlY3RlZEhvdXIgPiAwICYmIHRoaXMuX3NlbGVjdGVkSG91ciA8IDEzO1xyXG4gICAgICByYWRpdXMgPSBvdXRlciA/IENMT0NLX09VVEVSX1JBRElVUyA6IENMT0NLX0lOTkVSX1JBRElVUztcclxuICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgIHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgICAgfVxyXG4gICAgICBkZWcgPSBNYXRoLnJvdW5kKHRoaXMuX3NlbGVjdGVkSG91ciAqICgzNjAgLyAoMjQgLyAyKSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVnID0gTWF0aC5yb3VuZCh0aGlzLl9zZWxlY3RlZE1pbnV0ZSAqICgzNjAgLyA2MCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJ0cmFuc2Zvcm1cIjogYHJvdGF0ZSgke2RlZ31kZWcpYCxcclxuICAgICAgXCJoZWlnaHRcIjogYCR7cmFkaXVzfSVgLFxyXG4gICAgICBcIm1hcmdpbi10b3BcIjogYCR7NTAgLSByYWRpdXN9JWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdXNlTW92ZUxpc3RlbmVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBtb3VzZVVwTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4pIHtcclxuICAgIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVNb3VzZW1vdmUoZXZlbnQpO1xyXG4gICAgfTtcclxuICAgIHRoaXMubW91c2VVcExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVNb3VzZXVwKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBtb3VzZWRvd24gZXZlbnRzIG9uIHRoZSBjbG9jayBib2R5LiAqL1xyXG4gIF9oYW5kbGVNb3VzZWRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fdGltZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2V0VGltZShldmVudCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTW91c2Vtb3ZlKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFRpbWUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNldXAoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcExpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBpZiAodGhpcy5fdGltZUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBjbG9jayB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9ob3Vycy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5fbWludXRlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIGxldCBob3VyTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldEhvdXJOYW1lcygpO1xyXG4gICAgbGV0IG1pbnV0ZU5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRNaW51dGVOYW1lcygpO1xyXG5cclxuICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAoaG91ck5hbWVzLmxlbmd0aCAvIDIpICsgMTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcclxuICAgICAgICBsZXQgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgaSArIDEsIDApO1xyXG4gICAgICAgIGxldCBlbmFibGVkID1cclxuICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAgICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCk7XHJcbiAgICAgICAgdGhpcy5faG91cnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IGhvdXJOYW1lc1tpXSxcclxuICAgICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXHJcbiAgICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJOYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgbGV0IG91dGVyID0gaSA+IDAgJiYgaSA8IDEzLFxyXG4gICAgICAgICAgcmFkaXVzID0gb3V0ZXIgPyBDTE9DS19PVVRFUl9SQURJVVMgOiBDTE9DS19JTk5FUl9SQURJVVM7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCBpLCAwKTtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9XHJcbiAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkhPVVIpKTtcclxuICAgICAgICB0aGlzLl9ob3Vycy5wdXNoKHtcclxuICAgICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogaG91ck5hbWVzW2ldLFxyXG4gICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgICAgbGVmdDogQ0xPQ0tfUkFESVVTICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgICAgZm9udFNpemU6IGkgPiAwICYmIGkgPCAxMyA/IFwiXCIgOiBcIjgwJVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbnV0ZU5hbWVzLmxlbmd0aDsgaSArPSA1KSB7XHJcbiAgICAgIGxldCByYWRpYW4gPSBpIC8gMzAgKiBNYXRoLlBJO1xyXG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLCBpKTtcclxuICAgICAgbGV0IGVuYWJsZWQgPVxyXG4gICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcclxuICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXHJcbiAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5NSU5VVEUpKTtcclxuICAgICAgdGhpcy5fbWludXRlcy5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBtaW51dGVOYW1lc1tpXSxcclxuICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIENMT0NLX09VVEVSX1JBRElVUyAtIENMT0NLX1RJQ0tfUkFESVVTLFxyXG4gICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiBDTE9DS19PVVRFUl9SQURJVVMgLSBDTE9DS19USUNLX1JBRElVU1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBUaW1lXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaW1lKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCB0cmlnZ2VyID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgbGV0IHRyaWdnZXJSZWN0ID0gdHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCB3aWR0aCA9IHRyaWdnZXIub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdHJpZ2dlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgcGFnZVggPSBldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgbGV0IHBhZ2VZID0gZXZlbnQucGFnZVkgIT09IHVuZGVmaW5lZCA/IGV2ZW50LnBhZ2VZIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWTtcclxuICAgIGxldCB4ID0gKHdpZHRoIC8gMikgLSAocGFnZVggLSB0cmlnZ2VyUmVjdC5sZWZ0IC0gd2luZG93LnBhZ2VYT2Zmc2V0KTtcclxuICAgIGxldCB5ID0gKGhlaWdodCAvIDIpIC0gKHBhZ2VZIC0gdHJpZ2dlclJlY3QudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICAgIGxldCByYWRpYW4gPSBNYXRoLmF0YW4yKC14LCB5KTtcclxuICAgIGxldCB1bml0ID0gTWF0aC5QSSAvICh0aGlzLl9ob3VyVmlldyA/IDYgOiAodGhpcy5pbnRlcnZhbCA/ICgzMCAvIHRoaXMuaW50ZXJ2YWwpIDogMzApKTtcclxuICAgIGxldCB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgbGV0IG91dGVyID0gdGhpcy5faG91clZpZXcgJiYgeiA+ICgod2lkdGggKiAoQ0xPQ0tfT1VURVJfUkFESVVTIC8gMTAwKSkgK1xyXG4gICAgICAod2lkdGggKiAoQ0xPQ0tfSU5ORVJfUkFESVVTIC8gMTAwKSkpIC8gMjtcclxuXHJcbiAgICBpZiAocmFkaWFuIDwgMCkge1xyXG4gICAgICByYWRpYW4gPSBNYXRoLlBJICogMiArIHJhZGlhbjtcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZSA9IE1hdGgucm91bmQocmFkaWFuIC8gdW5pdCk7XHJcblxyXG4gICAgbGV0IGRhdGU7XHJcbiAgICBpZiAodGhpcy5faG91clZpZXcpIHtcclxuICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMTIpIHtcclxuICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsdWUgPSBvdXRlciA/ICh2YWx1ZSA9PT0gMCA/IDEyIDogdmFsdWUpIDogdmFsdWUgPT09IDAgPyAwIDogdmFsdWUgKyAxMjtcclxuICAgICAgfVxyXG4gICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHZhbHVlLCB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgdmFsdWUgKj0gdGhpcy5pbnRlcnZhbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUgPT09IDYwKSB7XHJcbiAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGFtcGVkID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUoZGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xyXG4gICAgaWYgKGRhdGUgPT09IGNsYW1wZWQpIHtcclxuICAgICAgdGhpcy5fdGltZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBjbGFtcGVkO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=