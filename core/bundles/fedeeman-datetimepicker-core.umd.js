(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/core'), require('@angular/core'), require('@angular/material'), require('@angular/animations'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/material/dialog'), require('rxjs'), require('@angular/forms'), require('@angular/material/form-field'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('fedeeman-datetimepicker/core', ['exports', '@angular/material/core', '@angular/core', '@angular/material', '@angular/animations', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/material/dialog', 'rxjs', '@angular/forms', '@angular/material/form-field', '@angular/cdk/a11y'], factory) :
    (factory((global['fedeeman-datetimepicker'] = global['fedeeman-datetimepicker'] || {}, global['fedeeman-datetimepicker'].core = {}),global.ng.material.core,global.ng.core,global.ng.material,global.ng.animations,global.ng.cdk.keycodes,global.rxjs.operators,global.ng.cdk.bidi,global.ng.cdk.coercion,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.common,global.ng.material.dialog,global.rxjs,global.ng.forms,global.ng.material['form-field'],global.ng.cdk.a11y));
}(this, (function (exports,core,core$1,material,animations,keycodes,operators,bidi,coercion,overlay,portal,common,dialog,rxjs,forms,formField,a11y) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template D
     */
    var /**
     * @abstract
     * @template D
     */ DatetimeAdapter = /** @class */ (function (_super) {
        __extends(DatetimeAdapter, _super);
        function DatetimeAdapter(_delegate) {
            var _this = _super.call(this) || this;
            _this._delegate = _delegate;
            return _this;
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        DatetimeAdapter.prototype.getValidDateOrNull = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.compareDatetime = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return this.compareDate(first, second) ||
                    this.getHour(first) - this.getHour(second) ||
                    this.getMinute(first) - this.getMinute(second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameDatetime = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                if (first && second) {
                    /** @type {?} */
                    var firstValid = this.isValid(first);
                    /** @type {?} */
                    var secondValid = this.isValid(second);
                    if (firstValid && secondValid) {
                        return !this.compareDatetime(first, second);
                    }
                    return firstValid === secondValid;
                }
                return first === second;
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameYear = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getYear(first) === this.getYear(second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameDay = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getDate(first) === this.getDate(second) && this.sameMonthAndYear(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameHour = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getHour(first) === this.getHour(second) && this.sameDay(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameMinute = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                return first && second && this.getMinute(first) === this.getMinute(second) && this.sameHour(first, second);
            };
        /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
        DatetimeAdapter.prototype.sameMonthAndYear = /**
         * @param {?} first
         * @param {?} second
         * @return {?}
         */
            function (first, second) {
                if (first && second) {
                    /** @type {?} */
                    var firstValid = this.isValid(first);
                    /** @type {?} */
                    var secondValid = this.isValid(second);
                    if (firstValid && secondValid) {
                        return !(this.getYear(first) - this.getYear(second) ||
                            this.getMonth(first) - this.getMonth(second));
                    }
                    return firstValid === secondValid;
                }
                return first === second;
            };
        // delegate
        // delegate
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.clone =
            // delegate
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                return this._delegate.clone(date);
            };
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarYears = /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
            function (date, years) {
                return this._delegate.addCalendarYears(date, years);
            };
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarMonths = /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
            function (date, months) {
                return this._delegate.addCalendarMonths(date, months);
            };
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
        DatetimeAdapter.prototype.addCalendarDays = /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
            function (date, days) {
                return this._delegate.addCalendarDays(date, days);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getYear = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getYear(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getMonth(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getDate(date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getDayOfWeek = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getDayOfWeek(date);
            };
        /**
         * @param {?} style
         * @return {?}
         */
        DatetimeAdapter.prototype.getMonthNames = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this._delegate.getMonthNames(style);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.getDateNames = /**
         * @return {?}
         */
            function () {
                return this._delegate.getDateNames();
            };
        /**
         * @param {?} style
         * @return {?}
         */
        DatetimeAdapter.prototype.getDayOfWeekNames = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this._delegate.getDayOfWeekNames(style);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getYearName = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getYearName(date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.getFirstDayOfWeek = /**
         * @return {?}
         */
            function () {
                return this._delegate.getFirstDayOfWeek();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.getNumDaysInMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.getNumDaysInMonth(date);
            };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.createDate = /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */
            function (year, month, date) {
                return this._delegate.createDate(year, month, date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.today = /**
         * @return {?}
         */
            function () {
                return this._delegate.today();
            };
        /**
         * @param {?} value
         * @param {?} parseFormat
         * @return {?}
         */
        DatetimeAdapter.prototype.parse = /**
         * @param {?} value
         * @param {?} parseFormat
         * @return {?}
         */
            function (value, parseFormat) {
                return this._delegate.parse(value, parseFormat);
            };
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */
        DatetimeAdapter.prototype.format = /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */
            function (date, displayFormat) {
                return this._delegate.format(date, displayFormat);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.toIso8601 = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.toIso8601(date);
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        DatetimeAdapter.prototype.isDateInstance = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                return this._delegate.isDateInstance(obj);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatetimeAdapter.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._delegate.isValid(date);
            };
        /**
         * @return {?}
         */
        DatetimeAdapter.prototype.invalid = /**
         * @return {?}
         */
            function () {
                return this._delegate.invalid();
            };
        /**
         * @param {?} date
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */
        DatetimeAdapter.prototype.clampDate = /**
         * @param {?} date
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */
            function (date, min, max) {
                if (min && this.compareDatetime(date, min) < 0) {
                    return min;
                }
                if (max && this.compareDatetime(date, max) > 0) {
                    return max;
                }
                return date;
            };
        return DatetimeAdapter;
    }(core.DateAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_DATETIME_FORMATS = new core$1.InjectionToken("mat-datetime-formats");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = function (i) { return String(i); };
    /**
     * The default hour names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_HOUR_NAMES = range(24, ɵ0);
    var ɵ1 = function (i) { return String(i); };
    /**
     * The default minute names to use if Intl API is not available.
     * @type {?}
     */
    var DEFAULT_MINUTE_NAMES = range(60, ɵ1);
    /**
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */
    function range(length, valueFunction) {
        /** @type {?} */
        var valuesArray = Array(length);
        for (var i = 0; i < length; i++) {
            valuesArray[i] = valueFunction(i);
        }
        return valuesArray;
    }
    var NativeDatetimeAdapter = /** @class */ (function (_super) {
        __extends(NativeDatetimeAdapter, _super);
        function NativeDatetimeAdapter(matDateLocale, _delegate) {
            var _this = _super.call(this, _delegate) || this;
            _this.setLocale(matDateLocale);
            return _this;
        }
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.clone = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getHour = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date.getHours();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getMinute = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date.getMinutes();
            };
        /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.isInNextMonth = /**
         * @param {?} startDate
         * @param {?} endDate
         * @return {?}
         */
            function (startDate, endDate) {
                /** @type {?} */
                var nextMonth = this.getDateInNextMonth(startDate);
                return this.sameMonthAndYear(nextMonth, endDate);
            };
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hour
         * @param {?} minute
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.createDatetime = /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hour
         * @param {?} minute
         * @return {?}
         */
            function (year, month, date, hour, minute) {
                // Check for invalid month and date (except upper bound on date which we have to check after
                // creating the Date).
                if (month < 0 || month > 11) {
                    throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
                }
                if (date < 1) {
                    throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
                }
                if (hour < 0 || hour > 23) {
                    throw Error("Invalid hour \"" + hour + "\". Hour has to be between 0 and 23.");
                }
                if (minute < 0 || minute > 59) {
                    throw Error("Invalid minute \"" + minute + "\". Minute has to be between 0 and 59.");
                }
                /** @type {?} */
                var result = this._createDateWithOverflow(year, month, date, hour, minute);
                // Check that the date wasn't above the upper bound for the month, causing the month to overflow
                if (result.getMonth() !== month) {
                    throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
                }
                return result;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getDateInNextMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getFirstDateOfMonth = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var result = new Date();
                result.setFullYear(date.getFullYear(), date.getMonth(), 1);
                return result;
            };
        /**
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getHourNames = /**
         * @return {?}
         */
            function () {
                return DEFAULT_HOUR_NAMES;
            };
        /**
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.getMinuteNames = /**
         * @return {?}
         */
            function () {
                return DEFAULT_MINUTE_NAMES;
            };
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarYears = /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */
            function (date, years) {
                return this.addCalendarMonths(date, years * 12);
            };
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarMonths = /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */
            function (date, months) {
                /** @type {?} */
                var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHour(date), this.getMinute(date));
                // It's possible to wind up in the wrong month if the original month has more days than the new
                // month. In this case we want to go to the last day of the desired month.
                // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
                // guarantee this.
                if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
                    newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHour(date), this.getMinute(date));
                }
                return newDate;
            };
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarDays = /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */
            function (date, days) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
            };
        /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarHours = /**
         * @param {?} date
         * @param {?} hours
         * @return {?}
         */
            function (date, hours) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
            };
        /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.addCalendarMinutes = /**
         * @param {?} date
         * @param {?} minutes
         * @return {?}
         */
            function (date, minutes) {
                return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NativeDatetimeAdapter.prototype.toIso8601 = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return _super.prototype.toIso8601.call(this, date) + "T" + [
                    this._2digit(date.getUTCHours()),
                    this._2digit(date.getUTCMinutes())
                ].join(":");
            };
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param str The string to strip direction characters from.
         * @returns The stripped string.
         */
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */
        NativeDatetimeAdapter.prototype._stripDirectionalityCharacters = /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */
            function (str) {
                return str.replace(/[\u200e\u200f]/g, "");
            };
        /**
         * Pads a number to make it two digits.
         * @param n The number to pad.
         * @returns The padded number.
         */
        /**
         * Pads a number to make it two digits.
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */
        NativeDatetimeAdapter.prototype._2digit = /**
         * Pads a number to make it two digits.
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */
            function (n) {
                return ("00" + n).slice(-2);
            };
        /** Creates a date but allows the month and date to overflow. */
        /**
         * Creates a date but allows the month and date to overflow.
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hours
         * @param {?} minutes
         * @return {?}
         */
        NativeDatetimeAdapter.prototype._createDateWithOverflow = /**
         * Creates a date but allows the month and date to overflow.
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @param {?} hours
         * @param {?} minutes
         * @return {?}
         */
            function (year, month, date, hours, minutes) {
                /** @type {?} */
                var result = new Date(year, month, date, hours, minutes);
                // We need to correct for the fact that JS native Date treats years in range [0, 99] as
                // abbreviations for 19xx.
                if (year >= 0 && year < 100) {
                    result.setFullYear(this.getYear(result) - 1900);
                }
                return result;
            };
        NativeDatetimeAdapter.decorators = [
            { type: core$1.Injectable },
        ];
        NativeDatetimeAdapter.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [material.MAT_DATE_LOCALE,] }] },
                { type: material.DateAdapter }
            ];
        };
        return NativeDatetimeAdapter;
    }(DatetimeAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAT_NATIVE_DATETIME_FORMATS = {
        parse: {},
        display: {
            dateInput: { year: "numeric", month: "2-digit", day: "2-digit" },
            monthInput: { month: "long" },
            datetimeInput: { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" },
            timeInput: { hour: "2-digit", minute: "2-digit" },
            monthYearLabel: { year: "numeric", month: "short" },
            dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
            monthYearA11yLabel: { year: "numeric", month: "long" },
            popupHeaderDateLabel: { weekday: "short", month: "short", day: "2-digit" }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // tslint:disable max-classes-per-file
    var NativeDatetimeModule = /** @class */ (function () {
        // tslint:disable max-classes-per-file
        function NativeDatetimeModule() {
        }
        NativeDatetimeModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [material.NativeDateModule],
                        providers: [
                            {
                                provide: DatetimeAdapter,
                                useClass: NativeDatetimeAdapter
                            }
                        ]
                    },] },
        ];
        return NativeDatetimeModule;
    }());
    var ɵ0$1 = MAT_NATIVE_DATETIME_FORMATS;
    var MatNativeDatetimeModule = /** @class */ (function () {
        function MatNativeDatetimeModule() {
        }
        MatNativeDatetimeModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            NativeDatetimeModule,
                            material.MatNativeDateModule
                        ],
                        providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0$1 }]
                    },] },
        ];
        return MatNativeDatetimeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * This animation fades in the background color and text content of the
     * select's options. It is time delayed to occur 100ms after the overlay
     * panel has transformed in.
     * @type {?}
     */
    var fadeInContent = animations.trigger("fadeInContent", [
        animations.state("showing", animations.style({ opacity: 1 })),
        animations.transition("void => showing", [
            animations.style({ opacity: 0 }),
            animations.animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
        ])
    ]);
    /** @type {?} */
    var slideCalendar = animations.trigger("slideCalendar", [
        animations.transition("* => left", [
            animations.animate(180, animations.keyframes([
                animations.style({ transform: "translateX(100%)", offset: 0.5 }),
                animations.style({ transform: "translateX(-100%)", offset: 0.51 }),
                animations.style({ transform: "translateX(0)", offset: 1 })
            ]))
        ]),
        animations.transition("* => right", [
            animations.animate(180, animations.keyframes([
                animations.style({ transform: "translateX(-100%)", offset: 0.5 }),
                animations.style({ transform: "translateX(100%)", offset: 0.51 }),
                animations.style({ transform: "translateX(0)", offset: 1 })
            ]))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * \@docs-private
     * @param {?} provider
     * @return {?}
     */
    function createMissingDateImplError(provider) {
        return Error("MatDatetimepicker: No provider found for " + provider + ". You must import one of the following " +
            "modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a " +
            "custom implementation.");
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var MatDatetimepickerFilterType = {
        DATE: 0, HOUR: 1, MINUTE: 2,
    };
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.DATE] = 'DATE';
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.HOUR] = 'HOUR';
    MatDatetimepickerFilterType[MatDatetimepickerFilterType.MINUTE] = 'MINUTE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerCalendar = /** @class */ (function () {
        function MatDatetimepickerCalendar(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
            var _this = this;
            this._elementRef = _elementRef;
            this._intl = _intl;
            this._ngZone = _ngZone;
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this.changeDetectorRef = changeDetectorRef;
            this._userSelection = new core$1.EventEmitter();
            this.type = "date";
            /** Whether the calendar should be started in month or year view. */
            this.startView = "month";
            this.timeInterval = 1;
            /** Emits when the currently selected date changes. */
            this.selectedChange = new core$1.EventEmitter();
            /** Date filter for the month and year views. */
            this._dateFilterForViews = function (date) {
                return !!date &&
                    (!_this.dateFilter || _this.dateFilter(date, MatDatetimepickerFilterType.DATE)) &&
                    (!_this.minDate || _this._adapter.compareDate(date, _this.minDate) >= 0) &&
                    (!_this.maxDate || _this._adapter.compareDate(date, _this.maxDate) <= 0);
            };
            /** Whether the calendar is in month view. */
            this._currentView = "month";
            this._clockView = "hour";
            if (!this._adapter) {
                throw createMissingDateImplError("DatetimeAdapter");
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError("MAT_DATETIME_FORMATS");
            }
            this._intlChanges = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
        }
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "startAt", {
            /** A date representing the period (month or year) to start the calendar in. */
            get: /**
             * A date representing the period (month or year) to start the calendar in.
             * @return {?}
             */ function () {
                return this._startAt;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._startAt = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "minDate", {
            /** The minimum selectable date. */
            get: /**
             * The minimum selectable date.
             * @return {?}
             */ function () {
                return this._minDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._minDate = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "maxDate", {
            /** The maximum selectable date. */
            get: /**
             * The maximum selectable date.
             * @return {?}
             */ function () {
                return this._maxDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maxDate = this._adapter.getValidDateOrNull(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_activeDate", {
            /**
             * The current active date. This determines which time period is shown and which date is
             * highlighted when using keyboard navigation.
             */
            get: /**
             * The current active date. This determines which time period is shown and which date is
             * highlighted when using keyboard navigation.
             * @return {?}
             */ function () {
                return this._clampedActiveDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var oldActiveDate = this._clampedActiveDate;
                this._clampedActiveDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
                if (oldActiveDate && this._clampedActiveDate && this._currentView === "month" &&
                    !this._adapter.sameMonthAndYear(oldActiveDate, this._clampedActiveDate)) {
                    if (this._adapter.isInNextMonth(oldActiveDate, this._clampedActiveDate)) {
                        this.calendarState("right");
                    }
                    else {
                        this.calendarState("left");
                    }
                    this.changeDetectorRef.detectChanges();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._userSelected = /**
         * @return {?}
         */
            function () {
                this._userSelection.emit();
            };
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_yearLabel", {
            /** The label for the current calendar view. */
            get: /**
             * The label for the current calendar view.
             * @return {?}
             */ function () {
                return this._adapter.getYearName(this._activeDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_monthYearLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
                    this._adapter.getYearName(this._activeDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_dateLabel", {
            get: /**
             * @return {?}
             */ function () {
                if (this.type === "month") {
                    return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
                }
                return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_hoursLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._2digit(this._adapter.getHour(this._activeDate));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerCalendar.prototype, "_minutesLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this._2digit(this._adapter.getMinute(this._activeDate));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._activeDate = this.startAt || this._adapter.today();
                this._focusActiveCell();
                if (this.type === "month") {
                    this._currentView = "year";
                }
                else if (this.type === "time") {
                    this._currentView = "clock";
                }
                else {
                    this._currentView = this.startView || "month";
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._intlChanges.unsubscribe();
            };
        /** Handles date selection in the month view. */
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._dateSelected = /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
                if (this.type !== "date") {
                    this._currentView = "clock";
                }
            };
        /** Handles month selection in the year view. */
        /**
         * Handles month selection in the year view.
         * @param {?} month
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._monthSelected = /**
         * Handles month selection in the year view.
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this._activeDate = month;
                if (this.type !== 'month') {
                    this._currentView = "month";
                    this._clockView = "hour";
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._timeSelected = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
                this._clockView = "minute";
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleConfirmButton = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectedChange.emit(this._activeDate);
                this._userSelected();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCancelButton = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // Close dialog (datetimepicker.close())
                this._userSelection.emit();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._onActiveDateChange = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._activeDate = date;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._yearClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "year";
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._dateClicked = /**
         * @return {?}
         */
            function () {
                if (this.type !== 'month') {
                    this._currentView = "month";
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._hoursClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "clock";
                this._clockView = "hour";
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._minutesClicked = /**
         * @return {?}
         */
            function () {
                this._currentView = "clock";
                this._clockView = "minute";
            };
        /** Handles user clicks on the previous button. */
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._previousClicked = /**
         * Handles user clicks on the previous button.
         * @return {?}
         */
            function () {
                this._activeDate = this._currentView === "month" ?
                    this._adapter.addCalendarMonths(this._activeDate, -1) :
                    this._adapter.addCalendarYears(this._activeDate, -1);
            };
        /** Handles user clicks on the next button. */
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextClicked = /**
         * Handles user clicks on the next button.
         * @return {?}
         */
            function () {
                this._activeDate = this._currentView === "month" ?
                    this._adapter.addCalendarMonths(this._activeDate, 1) :
                    this._adapter.addCalendarYears(this._activeDate, 1);
            };
        /** Whether the previous period button is enabled. */
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._previousEnabled = /**
         * Whether the previous period button is enabled.
         * @return {?}
         */
            function () {
                if (!this.minDate) {
                    return true;
                }
                return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
            };
        /** Whether the next period button is enabled. */
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextEnabled = /**
         * Whether the next period button is enabled.
         * @return {?}
         */
            function () {
                return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
            };
        /** Handles keydown events on the calendar body. */
        /**
         * Handles keydown events on the calendar body.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydown = /**
         * Handles keydown events on the calendar body.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
                // disabled ones from being selected. This may not be ideal, we should look into whether
                // navigation should skip over disabled dates, and if so, how to implement that efficiently.
                if (this._currentView === "month") {
                    this._handleCalendarBodyKeydownInMonthView(event);
                }
                else if (this._currentView === "year") {
                    this._handleCalendarBodyKeydownInYearView(event);
                }
                else {
                    this._handleCalendarBodyKeydownInClockView(event);
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._focusActiveCell = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngZone.runOutsideAngular(function () {
                    _this._ngZone.onStable.asObservable().pipe(operators.first()).subscribe(function () {
                        _this._elementRef.nativeElement.focus();
                    });
                });
            };
        /** Whether the two dates represent the same view in the current view mode (month or year). */
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._isSameView = /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
            function (date1, date2) {
                return this._currentView === "month" ?
                    this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                        this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
                    this._adapter.getYear(date1) == this._adapter.getYear(date2);
            };
        /** Handles keydown events on the calendar body when calendar is in month view. */
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInMonthView = /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.LEFT_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -1);
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1);
                        break;
                    case keycodes.UP_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
                        break;
                    case keycodes.HOME:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1 - this._adapter.getDate(this._activeDate));
                        break;
                    case keycodes.END:
                        this._activeDate = this._adapter.addCalendarDays(this._activeDate, (this._adapter.getNumDaysInMonth(this._activeDate) -
                            this._adapter.getDate(this._activeDate)));
                        break;
                    case keycodes.PAGE_UP:
                        this._activeDate = event.altKey ?
                            this._adapter.addCalendarYears(this._activeDate, -1) :
                            this._adapter.addCalendarMonths(this._activeDate, -1);
                        break;
                    case keycodes.PAGE_DOWN:
                        this._activeDate = event.altKey ?
                            this._adapter.addCalendarYears(this._activeDate, 1) :
                            this._adapter.addCalendarMonths(this._activeDate, 1);
                        break;
                    case keycodes.ENTER:
                        if (this._dateFilterForViews(this._activeDate)) {
                            this._dateSelected(this._activeDate);
                            // Prevent unexpected default actions such as form submission.
                            event.preventDefault();
                        }
                        return;
                    default:
                        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                        return;
                }
                // Prevent unexpected default actions such as form submission.
                event.preventDefault();
            };
        /** Handles keydown events on the calendar body when calendar is in year view. */
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInYearView = /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.LEFT_ARROW:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -1);
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 1);
                        break;
                    case keycodes.UP_ARROW:
                        this._activeDate = this._prevMonthInSameCol(this._activeDate);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._nextMonthInSameCol(this._activeDate);
                        break;
                    case keycodes.HOME:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -this._adapter.getMonth(this._activeDate));
                        break;
                    case keycodes.END:
                        this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 11 - this._adapter.getMonth(this._activeDate));
                        break;
                    case keycodes.PAGE_UP:
                        this._activeDate =
                            this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                        break;
                    case keycodes.PAGE_DOWN:
                        this._activeDate =
                            this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                        break;
                    case keycodes.ENTER:
                        this._monthSelected(this._activeDate);
                        break;
                    default:
                        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                        return;
                }
                // Prevent unexpected default actions such as form submission.
                event.preventDefault();
            };
        /** Handles keydown events on the calendar body when calendar is in month view. */
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInClockView = /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.UP_ARROW:
                        this._activeDate = this._clockView == "hour" ?
                            this._adapter.addCalendarHours(this._activeDate, 1) :
                            this._adapter.addCalendarMinutes(this._activeDate, 1);
                        break;
                    case keycodes.DOWN_ARROW:
                        this._activeDate = this._clockView == "hour" ?
                            this._adapter.addCalendarHours(this._activeDate, -1) :
                            this._adapter.addCalendarMinutes(this._activeDate, -1);
                        break;
                    case keycodes.ENTER:
                        this._timeSelected(this._activeDate);
                        return;
                    default:
                        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                        return;
                }
                // Prevent unexpected default actions such as form submission.
                event.preventDefault();
            };
        /**
         * Determine the date for the month that comes before the given month in the same column in the
         * calendar table.
         */
        /**
         * Determine the date for the month that comes before the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._prevMonthInSameCol = /**
         * Determine the date for the month that comes before the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                // Determine how many months to jump forward given that there are 2 empty slots at the beginning
                // of each year.
                /** @type {?} */
                var increment = this._adapter.getMonth(date) <= 4 ? -5 :
                    (this._adapter.getMonth(date) >= 7 ? -7 : -12);
                return this._adapter.addCalendarMonths(date, increment);
            };
        /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         */
        /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._nextMonthInSameCol = /**
         * Determine the date for the month that comes after the given month in the same column in the
         * calendar table.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                // Determine how many months to jump forward given that there are 2 empty slots at the beginning
                // of each year.
                /** @type {?} */
                var increment = this._adapter.getMonth(date) <= 4 ? 7 :
                    (this._adapter.getMonth(date) >= 7 ? 5 : 12);
                return this._adapter.addCalendarMonths(date, increment);
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype.calendarState = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this._calendarState = direction;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._calendarStateDone = /**
         * @return {?}
         */
            function () {
                this._calendarState = "";
            };
        /**
         * @param {?} n
         * @return {?}
         */
        MatDatetimepickerCalendar.prototype._2digit = /**
         * @param {?} n
         * @return {?}
         */
            function (n) {
                return ("00" + n).slice(-2);
            };
        MatDatetimepickerCalendar.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-calendar",
                        template: "<div class=\"mat-datetimepicker-calendar-header\">\n  <div *ngIf=\"type !== 'time'\"\n       class=\"mat-datetimepicker-calendar-header-year\"\n       [class.active]=\"_currentView == 'year'\"\n       (click)=\"_yearClicked()\">{{ _yearLabel }}\n  </div>\n  <div class=\"mat-datetimepicker-calendar-header-date-time\">\n    <span *ngIf=\"type !== 'time'\"\n          class=\"mat-datetimepicker-calendar-header-date\"\n          [class.active]=\"_currentView == 'month'\"\n          [class.not-clickable]=\"type === 'month'\"\n          (click)=\"_dateClicked()\" style=\"font-size: 0.7em;\">{{ _dateLabel }}</span>\n    <span *ngIf=\"type.endsWith('time')\"\n          class=\"mat-datetimepicker-calendar-header-time\"\n          [class.active]=\"_currentView == 'clock'\">\n      <span class=\"mat-datetimepicker-calendar-header-hours\"\n            [class.active]=\"_clockView == 'hour'\"\n            (click)=\"_hoursClicked()\">{{ _hoursLabel }}</span>:<span class=\"mat-datetimepicker-calendar-header-minutes\"\n                                                                     [class.active]=\"_clockView == 'minute'\"\n                                                                     (click)=\"_minutesClicked()\">{{ _minutesLabel }}</span>\n    </span>\n  </div>\n</div>\n<div class=\"mat-datetimepicker-calendar-content\" [ngSwitch]=\"_currentView\">\n  <div class=\"mat-month-content\" *ngIf=\"_currentView === 'month' || _currentView === 'year'\">\n    <div class=\"mat-datetimepicker-calendar-controls\">\n      <div class=\"mat-datetimepicker-calendar-previous-button\"\n           [class.disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\"\n           aria-label=\"Previous month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n        </svg>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-period-button\" [@slideCalendar]=\"_calendarState\"\n           (@slideCalendar.done)=\"_calendarStateDone()\">\n        <strong>{{ _monthYearLabel }}</strong>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-next-button\"\n           [class.disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\"\n           aria-label=\"Next month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  <mat-datetimepicker-month-view *ngSwitchCase=\"'month'\"\n                                 [activeDate]=\"_activeDate\"\n                                 [type]=\"type\"\n                                 [selected]=\"_activeDate\"\n                                 [dateFilter]=\"_dateFilterForViews\"\n                                 (selectedChange)=\"_dateSelected($event)\"\n                                 (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-month-view>\n  <mat-datetimepicker-year-view *ngSwitchCase=\"'year'\"\n                                [activeDate]=\"_activeDate\"\n                                [type]=\"type\"\n                                [selected]=\"_activeDate\"\n                                [dateFilter]=\"_dateFilterForViews\"\n                                (selectedChange)=\"_monthSelected($event)\"\n                                (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-year-view>\n  <mat-datetimepicker-clock *ngSwitchDefault\n                            [startView]=\"_clockView\"\n                            [interval]=\"timeInterval\"\n                            [minDate]=\"minDate\"\n                            [maxDate]=\"maxDate\"\n                            [dateFilter]=\"dateFilter\"\n                            [selected]=\"_activeDate\"\n                            (activeDateChange)=\"_onActiveDateChange($event)\"\n                            (selectedChange)=\"_timeSelected($event)\"\n                            (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-clock>\n  <div class=\"mat-datetimepicker-calendar-footer\">\n    <button mat-button color=\"primary\" (click)=\"_handleCancelButton($event)\">{{ cancelButtonLabel }}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"_handleConfirmButton($event)\">{{ confirmButtonLabel }}</button>\n  </div>\n</div>\n",
                        styles: [".mat-datetimepicker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.mat-datetimepicker-calendar[mode=landscape]{display:flex}.mat-datetimepicker-calendar-header{padding:16px;font-size:14px;color:#fff;box-sizing:border-box}[mode=landscape] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar-header-date-time,.mat-datetimepicker-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.mat-datetimepicker-calendar-header-date-time{font-size:30px;line-height:30px}[mode=landscape] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar-header-date:not(.active),.mat-datetimepicker-calendar-header-hours:not(.active),.mat-datetimepicker-calendar-header-minutes:not(.active),.mat-datetimepicker-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.mat-datetimepicker-calendar-header-date.not-clickable,.mat-datetimepicker-calendar-header-hours.not-clickable,.mat-datetimepicker-calendar-header-minutes.not-clickable,.mat-datetimepicker-calendar-header-year.not-clickable{cursor:initial}.mat-datetimepicker-calendar-header-time{padding-left:8px;padding-top:5px}.mat-datetimepicker-calendar-header-time:not(.active){opacity:.6}.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-hours,.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar-content{width:100%;padding:0 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .mat-datetimepicker-calendar-content{padding-top:8px}.mat-datetimepicker-calendar-content>.mat-datetimepicker-calendar-footer{padding:12px;text-align:right}.mat-datetimepicker-calendar-controls{display:flex;justify-content:space-between}.mat-datetimepicker-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button,.mat-datetimepicker-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button.disabled,.mat-datetimepicker-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-calendar-next-button svg,.mat-datetimepicker-calendar-previous-button svg{fill:currentColor;vertical-align:top}.mat-datetimepicker-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-datetimepicker-calendar-table-header{color:rgba(0,0,0,.38)}.mat-datetimepicker-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{display:flex}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-content{padding-top:8px}}"],
                        host: {
                            "[class.mat-datetimepicker-calendar]": "true",
                            "tabindex": "0",
                            "(keydown)": "_handleCalendarBodyKeydown($event)"
                        },
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerCalendar.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: material.MatDatepickerIntl },
                { type: core$1.NgZone },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        MatDatetimepickerCalendar.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            type: [{ type: core$1.Input }],
            startAt: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            timeInterval: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }],
            confirmButtonLabel: [{ type: core$1.Input }],
            cancelButtonLabel: [{ type: core$1.Input }]
        };
        return MatDatetimepickerCalendar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */
    var /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */ MatDatetimepickerCalendarCell = /** @class */ (function () {
        function MatDatetimepickerCalendarCell(value, displayValue, ariaLabel, enabled) {
            this.value = value;
            this.displayValue = displayValue;
            this.ariaLabel = ariaLabel;
            this.enabled = enabled;
        }
        return MatDatetimepickerCalendarCell;
    }());
    /**
     * An internal component used to display calendar data in a table.
     * \@docs-private
     */
    var MatDatetimepickerCalendarBody = /** @class */ (function () {
        /**
         * An internal component used to display calendar data in a table.
         * @docs-private
         */
        function MatDatetimepickerCalendarBody() {
            /** The number of columns in the table. */
            this.numCols = 7;
            /** Whether to allow selection of disabled cells. */
            this.allowDisabledSelection = false;
            /** The cell number of the active cell in the table. */
            this.activeCell = 0;
            /** Emits when a new value is selected. */
            this.selectedValueChange = new core$1.EventEmitter();
        }
        /**
         * @param {?} cell
         * @return {?}
         */
        MatDatetimepickerCalendarBody.prototype._cellClicked = /**
         * @param {?} cell
         * @return {?}
         */
            function (cell) {
                if (!this.allowDisabledSelection && !cell.enabled) {
                    return;
                }
                this.selectedValueChange.emit(cell.value);
            };
        Object.defineProperty(MatDatetimepickerCalendarBody.prototype, "_firstRowOffset", {
            /** The number of blank cells to put at the beginning for the first row. */
            get: /**
             * The number of blank cells to put at the beginning for the first row.
             * @return {?}
             */ function () {
                return this.rows && this.rows.length && this.rows[0].length ?
                    this.numCols - this.rows[0].length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
        MatDatetimepickerCalendarBody.prototype._isActiveCell = /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */
            function (rowIndex, colIndex) {
                /** @type {?} */
                var cellNumber = rowIndex * this.numCols + colIndex;
                // Account for the fact that the first row may not have as many cells.
                if (rowIndex) {
                    cellNumber -= this._firstRowOffset;
                }
                return cellNumber === this.activeCell;
            };
        MatDatetimepickerCalendarBody.decorators = [
            { type: core$1.Component, args: [{
                        selector: "[mat-datetimepicker-calendar-body]",
                        template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-datetimepicker-calendar-body-label\" [attr.colspan]=\"numCols\" >{{ label }}</td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-datetimepicker-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\">\n    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-datetimepicker-calendar-body-cell\"\n      [class.mat-datetimepicker-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-datetimepicker-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      (click)=\"_cellClicked(item)\">\n    <div class=\"mat-datetimepicker-calendar-body-cell-content\"\n         [class.mat-datetimepicker-calendar-body-selected]=\"selectedValue === item.value\"\n         [class.mat-datetimepicker-calendar-body-today]=\"todayValue === item.value\">\n      {{ item.displayValue }}\n    </div>\n  </td>\n</tr>\n",
                        styles: [".mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);-webkit-transform:translateX(-6px);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.14286% 0 0;-webkit-transform:translateX(6px);transform:translateX(6px);text-align:right}"],
                        host: {
                            "class": "mat-datetimepicker-calendar-body"
                        },
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerCalendarBody.propDecorators = {
            label: [{ type: core$1.Input }],
            rows: [{ type: core$1.Input }],
            todayValue: [{ type: core$1.Input }],
            selectedValue: [{ type: core$1.Input }],
            labelMinRequiredCells: [{ type: core$1.Input }],
            numCols: [{ type: core$1.Input }],
            allowDisabledSelection: [{ type: core$1.Input }],
            activeCell: [{ type: core$1.Input }],
            selectedValueChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerCalendarBody;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var CLOCK_RADIUS = 50;
    /** @type {?} */
    var CLOCK_INNER_RADIUS = 27.5;
    /** @type {?} */
    var CLOCK_OUTER_RADIUS = 41.25;
    /** @type {?} */
    var CLOCK_TICK_RADIUS = 7.0833;
    /**
     * A clock that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerClock = /** @class */ (function () {
        function MatDatetimepickerClock(_element, _adapter) {
            var _this = this;
            this._element = _element;
            this._adapter = _adapter;
            this._userSelection = new core$1.EventEmitter();
            this._timeChanged = false;
            this.interval = 1;
            this.twelvehour = false;
            /** Emits when the currently selected date changes. */
            this.selectedChange = new core$1.EventEmitter();
            this.activeDateChange = new core$1.EventEmitter();
            /** Hours and Minutes representing the clock view. */
            this._hours = [];
            this._minutes = [];
            /** Whether the clock is in hour view. */
            this._hourView = true;
            this.mouseMoveListener = function (event) {
                _this._handleMousemove(event);
            };
            this.mouseUpListener = function () {
                _this._handleMouseup();
            };
        }
        Object.defineProperty(MatDatetimepickerClock.prototype, "activeDate", {
            /**
             * The date to display in this clock view.
             */
            get: /**
             * The date to display in this clock view.
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
                if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
                    this._init();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
                if (this._selected) {
                    this.activeDate = this._selected;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "minDate", {
            /** The minimum selectable date. */
            get: /**
             * The minimum selectable date.
             * @return {?}
             */ function () {
                return this._minDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "maxDate", {
            /** The maximum selectable date. */
            get: /**
             * The maximum selectable date.
             * @return {?}
             */ function () {
                return this._maxDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "startView", {
            /** Whether the clock should be started in hour or minute view. */
            set: /**
             * Whether the clock should be started in hour or minute view.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._hourView = value != "minute";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerClock.prototype, "_hand", {
            get: /**
             * @return {?}
             */ function () {
                this._selectedHour = this._adapter.getHour(this.activeDate);
                this._selectedMinute = this._adapter.getMinute(this.activeDate);
                /** @type {?} */
                var deg = 0;
                /** @type {?} */
                var radius = CLOCK_OUTER_RADIUS;
                if (this._hourView) {
                    /** @type {?} */
                    var outer = this._selectedHour > 0 && this._selectedHour < 13;
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
                    "transform": "rotate(" + deg + "deg)",
                    "height": radius + "%",
                    "margin-top": 50 - radius + "%"
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerClock.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.activeDate = this._activeDate || this._adapter.today();
                this._init();
            };
        /** Handles mousedown events on the clock body. */
        /**
         * Handles mousedown events on the clock body.
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMousedown = /**
         * Handles mousedown events on the clock body.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._timeChanged = false;
                this.setTime(event);
                document.addEventListener("mousemove", this.mouseMoveListener);
                document.addEventListener("touchmove", this.mouseMoveListener);
                document.addEventListener("mouseup", this.mouseUpListener);
                document.addEventListener("touchend", this.mouseUpListener);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMousemove = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                this.setTime(event);
            };
        /**
         * @return {?}
         */
        MatDatetimepickerClock.prototype._handleMouseup = /**
         * @return {?}
         */
            function () {
                document.removeEventListener("mousemove", this.mouseMoveListener);
                document.removeEventListener("touchmove", this.mouseMoveListener);
                document.removeEventListener("mouseup", this.mouseUpListener);
                document.removeEventListener("touchend", this.mouseUpListener);
                if (this._timeChanged) {
                    this.selectedChange.emit(this.activeDate);
                }
            };
        /** Initializes this clock view. */
        /**
         * Initializes this clock view.
         * @return {?}
         */
        MatDatetimepickerClock.prototype._init = /**
         * Initializes this clock view.
         * @return {?}
         */
            function () {
                this._hours.length = 0;
                this._minutes.length = 0;
                /** @type {?} */
                var hourNames = this._adapter.getHourNames();
                /** @type {?} */
                var minuteNames = this._adapter.getMinuteNames();
                if (this.twelvehour) {
                    for (var i = 1; i < (hourNames.length / 2) + 1; i++) {
                        /** @type {?} */
                        var radian = i / 6 * Math.PI;
                        /** @type {?} */
                        var radius = CLOCK_OUTER_RADIUS;
                        /** @type {?} */
                        var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                        /** @type {?} */
                        var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
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
                    for (var i = 0; i < hourNames.length; i++) {
                        /** @type {?} */
                        var radian = i / 6 * Math.PI;
                        /** @type {?} */
                        var outer = i > 0 && i < 13;
                        /** @type {?} */
                        var radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                        /** @type {?} */
                        var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                        /** @type {?} */
                        var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
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
                for (var i = 0; i < minuteNames.length; i += 5) {
                    /** @type {?} */
                    var radian = i / 30 * Math.PI;
                    /** @type {?} */
                    var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
                    /** @type {?} */
                    var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
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
            };
        /**
         * Set Time
         * @param event
         */
        /**
         * Set Time
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerClock.prototype.setTime = /**
         * Set Time
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var trigger = this._element.nativeElement;
                /** @type {?} */
                var triggerRect = trigger.getBoundingClientRect();
                /** @type {?} */
                var width = trigger.offsetWidth;
                /** @type {?} */
                var height = trigger.offsetHeight;
                /** @type {?} */
                var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
                /** @type {?} */
                var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
                /** @type {?} */
                var x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
                /** @type {?} */
                var y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
                /** @type {?} */
                var radian = Math.atan2(-x, y);
                /** @type {?} */
                var unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
                /** @type {?} */
                var z = Math.sqrt(x * x + y * y);
                /** @type {?} */
                var outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
                    (width * (CLOCK_INNER_RADIUS / 100))) / 2;
                if (radian < 0) {
                    radian = Math.PI * 2 + radian;
                }
                /** @type {?} */
                var value = Math.round(radian / unit);
                /** @type {?} */
                var date;
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
                var clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
                if (date === clamped) {
                    this._timeChanged = true;
                    this.activeDate = clamped;
                    this.activeDateChange.emit(this.activeDate);
                }
            };
        MatDatetimepickerClock.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-clock",
                        template: "<div class=\"mat-datetimepicker-clock\">\n  <div class=\"mat-datetimepicker-clock-center\"></div>\n  <div class=\"mat-datetimepicker-clock-hand\" [ngStyle]=\"_hand\"></div>\n  <div class=\"mat-datetimepicker-clock-hours\" [class.active]=\"_hourView\">\n    <div *ngFor=\"let item of _hours\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedHour == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\"\n         [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div>\n  </div>\n  <div class=\"mat-datetimepicker-clock-minutes\" [class.active]=\"!_hourView\">\n    <div *ngFor=\"let item of _minutes\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedMinute == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div>\n  </div>\n</div>\n",
                        styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;-webkit-transform-origin:bottom;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:'';position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;-webkit-transform:scale(1.2);transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.mat-datetimepicker-clock-minutes{-webkit-transform:scale(.8);transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}"],
                        host: {
                            "role": "clock",
                            "(mousedown)": "_handleMousedown($event)"
                        }
                    },] },
        ];
        MatDatetimepickerClock.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: DatetimeAdapter }
            ];
        };
        MatDatetimepickerClock.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            minDate: [{ type: core$1.Input }],
            maxDate: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            interval: [{ type: core$1.Input }],
            twelvehour: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }],
            activeDateChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerClock;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Used to generate a unique ID for each datepicker instance.
     * @type {?}
     */
    var datetimepickerUid = 0;
    /**
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * MatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerContent = /** @class */ (function () {
        /**
         * Component used as the content for the datepicker dialog and popup. We use this instead of using
         * MatCalendar directly as the content so we can control the initial focus. This also gives us a
         * place to put additional features of the popup that are not part of the calendar itself in the
         * future. (e.g. confirmation buttons).
         * @docs-private
         */
        function MatDatetimepickerContent() {
        }
        /**
         * @return {?}
         */
        MatDatetimepickerContent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._calendar._focusActiveCell();
            };
        /**
         * Handles keydown event on datepicker content.
         * @param event The event.
         */
        /**
         * Handles keydown event on datepicker content.
         * @param {?} event The event.
         * @return {?}
         */
        MatDatetimepickerContent.prototype._handleKeydown = /**
         * Handles keydown event on datepicker content.
         * @param {?} event The event.
         * @return {?}
         */
            function (event) {
                if (event.keyCode === keycodes.ESCAPE) {
                    this.datetimepicker.close();
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
        MatDatetimepickerContent.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-content",
                        template: "<mat-datetimepicker-calendar class=\"mat-typography\" cdkTrapFocus\n              [id]=\"datetimepicker.id\"\n              [attr.mode]=\"datetimepicker.mode\"\n              [startView]=\"datetimepicker.startView\"\n              [type]=\"datetimepicker.type\"\n              [timeInterval]=\"datetimepicker.timeInterval\"\n              [minDate]=\"datetimepicker._minDate\"\n              [maxDate]=\"datetimepicker._maxDate\"\n              [dateFilter]=\"datetimepicker._dateFilter\"\n              [selected]=\"datetimepicker._selected\"\n              [startAt]=\"datetimepicker.startAt\"\n              [confirmButtonLabel]=\"datetimepicker.confirmButtonLabel\"\n              [cancelButtonLabel]=\"datetimepicker.cancelButtonLabel\"\n              (selectedChange)=\"datetimepicker._select($event)\"\n              (_userSelection)=\"datetimepicker.close()\">\n</mat-datetimepicker-calendar>\n",
                        styles: [".mat-datetimepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.mat-datetimepicker-calendar{width:296px;height:auto}.mat-datetimepicker-calendar[mode=landscape]{width:446px;height:auto}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{width:446px;height:auto}}.mat-datetimepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.mat-datetimepicker-dialog .mat-dialog-container{padding:0}"],
                        host: {
                            "class": "mat-datetimepicker-content",
                            "[class.mat-datetimepicker-content-touch]": "datetimepicker?.touchUi",
                            "(keydown)": "_handleKeydown($event)"
                        },
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerContent.propDecorators = {
            _calendar: [{ type: core$1.ViewChild, args: [MatDatetimepickerCalendar,] }]
        };
        return MatDatetimepickerContent;
    }());
    /**
     * @template D
     */
    var MatDatetimepicker = /** @class */ (function () {
        function MatDatetimepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
            this._dialog = _dialog;
            this._overlay = _overlay;
            this._ngZone = _ngZone;
            this._viewContainerRef = _viewContainerRef;
            this._scrollStrategy = _scrollStrategy;
            this._dateAdapter = _dateAdapter;
            this._dir = _dir;
            this._document = _document;
            /** The view that the calendar should start in. */
            this.startView = "month";
            this.mode = "auto";
            this.timeInterval = 1;
            this._type = "date";
            this._touchUi = false;
            /**
             * Emits new selected date when selected date changes.
             * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
             */
            this.selectedChanged = new core$1.EventEmitter();
            this.confirmButtonLabel = 'Confirm';
            this.cancelButtonLabel = 'Cancel';
            /** Emits when the datepicker has been opened. */
            this.openedStream = new core$1.EventEmitter();
            /** Emits when the datepicker has been closed. */
            this.closedStream = new core$1.EventEmitter();
            /** Whether the calendar is open. */
            this.opened = false;
            /** The id for the datepicker calendar. */
            this.id = "mat-datetimepicker-" + datetimepickerUid++;
            this._validSelected = null;
            /** The element that was focused before the datepicker was opened. */
            this._focusedElementBeforeOpen = null;
            this._inputSubscription = rxjs.Subscription.EMPTY;
            /** Emits when the datepicker is disabled. */
            this._disabledChange = new rxjs.Subject();
            if (!this._dateAdapter) {
                throw createMissingDateImplError("DateAdapter");
            }
        }
        Object.defineProperty(MatDatetimepicker.prototype, "startAt", {
            /** The date to open the calendar to initially. */
            get: /**
             * The date to open the calendar to initially.
             * @return {?}
             */ function () {
                // If an explicit startAt is set we start there, otherwise we start at whatever the currently
                // selected value is.
                return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
            },
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                this._startAt = this._dateAdapter.getValidDateOrNull(date);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "openOnFocus", {
            get: /**
             * @return {?}
             */ function () { return this._openOnFocus; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._openOnFocus = coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepicker.prototype._handleFocus = /**
         * @return {?}
         */
            function () {
                if (!this.opened && this.openOnFocus) {
                    this.open();
                }
            };
        Object.defineProperty(MatDatetimepicker.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._type = value || "date";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "touchUi", {
            /**
             * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
             * than a popup and elements have more padding to allow for bigger touch targets.
             */
            get: /**
             * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
             * than a popup and elements have more padding to allow for bigger touch targets.
             * @return {?}
             */ function () {
                return this._touchUi;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._touchUi = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "disabled", {
            /** Whether the datepicker pop-up should be disabled. */
            get: /**
             * Whether the datepicker pop-up should be disabled.
             * @return {?}
             */ function () {
                return this._disabled === undefined && this._datepickerInput ?
                    this._datepickerInput.disabled : !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newValue = coercion.coerceBooleanProperty(value);
                if (newValue !== this._disabled) {
                    this._disabled = newValue;
                    this._disabledChange.next(newValue);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "_selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._validSelected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._validSelected = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "_minDate", {
            /** The minimum selectable date. */
            get: /**
             * The minimum selectable date.
             * @return {?}
             */ function () {
                return this._datepickerInput && this._datepickerInput.min;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "_maxDate", {
            /** The maximum selectable date. */
            get: /**
             * The maximum selectable date.
             * @return {?}
             */ function () {
                return this._datepickerInput && this._datepickerInput.max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepicker.prototype, "_dateFilter", {
            get: /**
             * @return {?}
             */ function () {
                return this._datepickerInput && this._datepickerInput._dateFilter;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepicker.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.close();
                this._inputSubscription.unsubscribe();
                this._disabledChange.complete();
                if (this._popupRef) {
                    this._popupRef.dispose();
                }
            };
        /** Selects the given date */
        /**
         * Selects the given date
         * @param {?} date
         * @return {?}
         */
        MatDatetimepicker.prototype._select = /**
         * Selects the given date
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var oldValue = this._selected;
                this._selected = date;
                if (!this._dateAdapter.sameDatetime(oldValue, this._selected)) {
                    // tslint:disable-next-line deprecation
                    this.selectedChanged.emit(date);
                }
            };
        /**
         * Register an input with this datepicker.
         * @param input The datepicker input to register with this datepicker.
         */
        /**
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */
        MatDatetimepicker.prototype._registerInput = /**
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */
            function (input) {
                var _this = this;
                if (this._datepickerInput) {
                    throw Error("A MatDatepicker can only be associated with a single input.");
                }
                this._datepickerInput = input;
                this._inputSubscription =
                    this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
            };
        /** Open the calendar. */
        /**
         * Open the calendar.
         * @return {?}
         */
        MatDatetimepicker.prototype.open = /**
         * Open the calendar.
         * @return {?}
         */
            function () {
                if (this.opened || this.disabled) {
                    return;
                }
                if (!this._datepickerInput) {
                    throw Error("Attempted to open an MatDatepicker with no associated input.");
                }
                if (this._document) {
                    this._focusedElementBeforeOpen = this._document.activeElement;
                }
                this.touchUi ? this._openAsDialog() : this._openAsPopup();
                this.opened = true;
                this.openedStream.emit();
            };
        /** Close the calendar. */
        /**
         * Close the calendar.
         * @return {?}
         */
        MatDatetimepicker.prototype.close = /**
         * Close the calendar.
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.opened) {
                    return;
                }
                if (this._popupRef && this._popupRef.hasAttached()) {
                    this._popupRef.detach();
                }
                if (this._dialogRef) {
                    this._dialogRef.close();
                    this._dialogRef = null;
                }
                if (this._calendarPortal && this._calendarPortal.isAttached) {
                    this._calendarPortal.detach();
                }
                /** @type {?} */
                var completeClose = function () {
                    // The `_opened` could've been reset already if
                    // we got two events in quick succession.
                    if (_this.opened) {
                        _this.opened = false;
                        _this.closedStream.emit();
                        _this._focusedElementBeforeOpen = null;
                    }
                };
                if (this._focusedElementBeforeOpen &&
                    typeof this._focusedElementBeforeOpen.focus === "function") {
                    // Because IE moves focus asynchronously, we can't count on it being restored before we've
                    // marked the datepicker as closed. If the event fires out of sequence and the element that
                    // we're refocusing opens the datepicker on focus, the user could be stuck with not being
                    // able to close the calendar at all. We work around it by making the logic, that marks
                    // the datepicker as closed, async as well.
                    this._focusedElementBeforeOpen.focus();
                    setTimeout(completeClose);
                }
                else {
                    completeClose();
                }
            };
        /** Open the calendar as a dialog. */
        /**
         * Open the calendar as a dialog.
         * @return {?}
         */
        MatDatetimepicker.prototype._openAsDialog = /**
         * Open the calendar as a dialog.
         * @return {?}
         */
            function () {
                var _this = this;
                this._dialogRef = this._dialog.open(MatDatetimepickerContent, {
                    direction: this._dir ? this._dir.value : "ltr",
                    viewContainerRef: this._viewContainerRef,
                    panelClass: "mat-datetimepicker-dialog"
                });
                this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
                this._dialogRef.componentInstance.datetimepicker = this;
            };
        /** Open the calendar as a popup. */
        /**
         * Open the calendar as a popup.
         * @return {?}
         */
        MatDatetimepicker.prototype._openAsPopup = /**
         * Open the calendar as a popup.
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._calendarPortal) {
                    this._calendarPortal = new portal.ComponentPortal(MatDatetimepickerContent, this._viewContainerRef);
                }
                if (!this._popupRef) {
                    this._createPopup();
                }
                if (!this._popupRef.hasAttached()) {
                    /** @type {?} */
                    var componentRef = this._popupRef.attach(this._calendarPortal);
                    componentRef.instance.datetimepicker = this;
                    // Update the position once the calendar has rendered.
                    this._ngZone.onStable.asObservable().pipe(operators.first()).subscribe(function () {
                        _this._popupRef.updatePosition();
                    });
                }
                this._popupRef.backdropClick().subscribe(function () { return _this.close(); });
            };
        /** Create the popup. */
        /**
         * Create the popup.
         * @return {?}
         */
        MatDatetimepicker.prototype._createPopup = /**
         * Create the popup.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var overlayConfig = new overlay.OverlayConfig({
                    positionStrategy: this._createPopupPositionStrategy(),
                    hasBackdrop: true,
                    backdropClass: "mat-overlay-transparent-backdrop",
                    direction: this._dir ? this._dir.value : "ltr",
                    scrollStrategy: this._scrollStrategy(),
                    panelClass: "mat-datetimepicker-popup"
                });
                this._popupRef = this._overlay.create(overlayConfig);
            };
        /** Create the popup PositionStrategy. */
        /**
         * Create the popup PositionStrategy.
         * @return {?}
         */
        MatDatetimepicker.prototype._createPopupPositionStrategy = /**
         * Create the popup PositionStrategy.
         * @return {?}
         */
            function () {
                return this._overlay.position()
                    .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" })
                    .withFallbackPosition({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
                    .withFallbackPosition({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" })
                    .withFallbackPosition({ originX: "end", originY: "top" }, { overlayX: "end", overlayY: "bottom" });
            };
        MatDatetimepicker.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker",
                        exportAs: "matDatetimepicker",
                        template: "",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false
                    },] },
        ];
        MatDatetimepicker.ctorParameters = function () {
            return [
                { type: dialog.MatDialog },
                { type: overlay.Overlay },
                { type: core$1.NgZone },
                { type: core$1.ViewContainerRef },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [material.MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: bidi.Directionality, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        MatDatetimepicker.propDecorators = {
            startAt: [{ type: core$1.Input }],
            startView: [{ type: core$1.Input }],
            mode: [{ type: core$1.Input }],
            timeInterval: [{ type: core$1.Input }],
            openOnFocus: [{ type: core$1.Input }],
            type: [{ type: core$1.Input }],
            touchUi: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            selectedChanged: [{ type: core$1.Output }],
            panelClass: [{ type: core$1.Input }],
            confirmButtonLabel: [{ type: core$1.Input }],
            cancelButtonLabel: [{ type: core$1.Input }],
            openedStream: [{ type: core$1.Output, args: ["opened",] }],
            closedStream: [{ type: core$1.Output, args: ["closed",] }]
        };
        return MatDatetimepicker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // tslint:disable no-use-before-declare
    /** @type {?} */
    var MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core$1.forwardRef(function () { return MatDatetimepickerInput; }),
        multi: true
    };
    /** @type {?} */
    var MAT_DATETIMEPICKER_VALIDATORS = {
        provide: forms.NG_VALIDATORS,
        useExisting: core$1.forwardRef(function () { return MatDatetimepickerInput; }),
        multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */
    var /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */ MatDatetimepickerInputEvent = /** @class */ (function () {
        function MatDatetimepickerInputEvent(target, targetElement) {
            this.target = target;
            this.targetElement = targetElement;
            this.value = this.target.value;
        }
        return MatDatetimepickerInputEvent;
    }());
    /**
     * Directive used to connect an input to a MatDatepicker.
     * @template D
     */
    var MatDatetimepickerInput = /** @class */ (function () {
        function MatDatetimepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
            var _this = this;
            this._elementRef = _elementRef;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._formField = _formField;
            /** Emits when a `change` event is fired on this `<input>`. */
            this.dateChange = new core$1.EventEmitter();
            /** Emits when an `input` event is fired on this `<input>`. */
            this.dateInput = new core$1.EventEmitter();
            /** Emits when the value changes (either due to user input or programmatic change). */
            this._valueChange = new core$1.EventEmitter();
            /** Emits when the disabled state has changed */
            this._disabledChange = new core$1.EventEmitter();
            this._onTouched = function () {
            };
            this._cvaOnChange = function () {
            };
            this._validatorOnChange = function () {
            };
            this._datepickerSubscription = rxjs.Subscription.EMPTY;
            this._localeSubscription = rxjs.Subscription.EMPTY;
            /** The form control validator for whether the input parses. */
            this._parseValidator = function () {
                return _this._lastValueValid ?
                    null : { "matDatepickerParse": { "text": _this._elementRef.nativeElement.value } };
            };
            /** The form control validator for the min date. */
            this._minValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.min || !controlValue ||
                    _this._dateAdapter.compareDatetime(_this.min, controlValue) <= 0) ?
                    null : { "matDatepickerMin": { "min": _this.min, "actual": controlValue } };
            };
            /** The form control validator for the max date. */
            this._maxValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return (!_this.max || !controlValue ||
                    _this._dateAdapter.compareDatetime(_this.max, controlValue) >= 0) ?
                    null : { "matDatepickerMax": { "max": _this.max, "actual": controlValue } };
            };
            /** The form control validator for the date filter. */
            this._filterValidator = function (control) {
                /** @type {?} */
                var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
                return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue, MatDatetimepickerFilterType.DATE) ?
                    null : { "matDatepickerFilter": true };
            };
            /** The combined form control validator for this input. */
            this._validator = forms.Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
            /** Whether the last value set on the input was valid. */
            this._lastValueValid = false;
            if (!this._dateAdapter) {
                throw createMissingDateImplError("DatetimeAdapter");
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError("MAT_DATETIME_FORMATS");
            }
            // Update the displayed date when the locale changes.
            this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
                _this.value = _this.value;
            });
        }
        Object.defineProperty(MatDatetimepickerInput.prototype, "matDatetimepicker", {
            /** The datepicker that this input is associated with. */
            set: /**
             * The datepicker that this input is associated with.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.registerDatepicker(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerDatepicker = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    this._datepicker = value;
                    this._datepicker._registerInput(this);
                }
            };
        Object.defineProperty(MatDatetimepickerInput.prototype, "matDatepickerFilter", {
            set: /**
             * @param {?} filter
             * @return {?}
             */ function (filter) {
                this._dateFilter = filter;
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "value", {
            /** The value of the input. */
            get: /**
             * The value of the input.
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                value = this._dateAdapter.deserialize(value);
                this._lastValueValid = !value || this._dateAdapter.isValid(value);
                value = this._dateAdapter.getValidDateOrNull(value);
                /** @type {?} */
                var oldDate = this.value;
                this._value = value;
                this._formatValue(value);
                // use timeout to ensure the datetimepicker is instantiated and we get the correct format
                setTimeout(function () {
                    if (!_this._dateAdapter.sameDatetime(oldDate, value)) {
                        _this._valueChange.emit(value);
                    }
                });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.getDisplayFormat = /**
         * @return {?}
         */
            function () {
                switch (this._datepicker.type) {
                    case "date":
                        return this._dateFormats.display.dateInput;
                    case "datetime":
                        return this._dateFormats.display.datetimeInput;
                    case "time":
                        return this._dateFormats.display.timeInput;
                    case "month":
                        return this._dateFormats.display.monthInput;
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.getParseFormat = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parseFormat;
                switch (this._datepicker.type) {
                    case "date":
                        parseFormat = this._dateFormats.parse.dateInput;
                        break;
                    case "datetime":
                        parseFormat = this._dateFormats.parse.datetimeInput;
                        break;
                    case "time":
                        parseFormat = this._dateFormats.parse.timeInput;
                        break;
                    case "month":
                        parseFormat = this._dateFormats.parse.monthInput;
                        break;
                }
                if (!parseFormat) {
                    parseFormat = this._dateFormats.parse.dateInput;
                }
                return parseFormat;
            };
        Object.defineProperty(MatDatetimepickerInput.prototype, "min", {
            /** The minimum valid date. */
            get: /**
             * The minimum valid date.
             * @return {?}
             */ function () {
                return this._min;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "max", {
            /** The maximum valid date. */
            get: /**
             * The maximum valid date.
             * @return {?}
             */ function () {
                return this._max;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
                this._validatorOnChange();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerInput.prototype, "disabled", {
            /** Whether the datepicker-input is disabled. */
            get: /**
             * Whether the datepicker-input is disabled.
             * @return {?}
             */ function () {
                return !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newValue = coercion.coerceBooleanProperty(value);
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this._disabledChange.emit(newValue);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._datepicker) {
                    // tslint:disable-next-line deprecation
                    this._datepickerSubscription = this._datepicker.selectedChanged.subscribe(function (selected) {
                        _this.value = selected;
                        _this._cvaOnChange(selected);
                        _this._onTouched();
                        _this.dateInput.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
                        _this.dateChange.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
                    });
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepickerSubscription.unsubscribe();
                this._localeSubscription.unsubscribe();
                this._valueChange.complete();
                this._disabledChange.complete();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorOnChange = fn;
            };
        /**
         * @param {?} c
         * @return {?}
         */
        MatDatetimepickerInput.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                return this._validator ? this._validator(c) : null;
            };
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return The element to connect the popup to.
         */
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */
        MatDatetimepickerInput.prototype.getPopupConnectionElementRef = /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */
            function () {
                return this._formField ? this._formField.underlineRef : this._elementRef;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype.writeValue =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnChange =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._cvaOnChange = fn;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} fn
         * @return {?}
         */
        MatDatetimepickerInput.prototype.registerOnTouched =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this._onTouched = fn;
            };
        // Implemented as part of ControlValueAccessor
        // Implemented as part of ControlValueAccessor
        /**
         * @param {?} disabled
         * @return {?}
         */
        MatDatetimepickerInput.prototype.setDisabledState =
            // Implemented as part of ControlValueAccessor
            /**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                this.disabled = disabled;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.altKey && event.keyCode === keycodes.DOWN_ARROW) {
                    this._datepicker.open();
                    event.preventDefault();
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var date = this._dateAdapter.parse(value, this.getParseFormat());
                this._lastValueValid = !date || this._dateAdapter.isValid(date);
                date = this._dateAdapter.getValidDateOrNull(date);
                this._value = date;
                this._cvaOnChange(date);
                this._valueChange.emit(date);
                this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
            };
        /**
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onChange = /**
         * @return {?}
         */
            function () {
                this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
            };
        /** Handles blur events on the input. */
        /**
         * Handles blur events on the input.
         * @return {?}
         */
        MatDatetimepickerInput.prototype._onBlur = /**
         * Handles blur events on the input.
         * @return {?}
         */
            function () {
                // Reformat the input only if we have a valid value.
                if (this.value) {
                    this._formatValue(this.value);
                }
                this._onTouched();
            };
        /** Formats a value and sets it on the input element. */
        /**
         * Formats a value and sets it on the input element.
         * @param {?} value
         * @return {?}
         */
        MatDatetimepickerInput.prototype._formatValue = /**
         * Formats a value and sets it on the input element.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._elementRef.nativeElement.value =
                    value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
            };
        MatDatetimepickerInput.decorators = [
            { type: core$1.Directive, args: [{
                        selector: "input[matDatetimepicker]",
                        providers: [
                            MAT_DATETIMEPICKER_VALUE_ACCESSOR,
                            MAT_DATETIMEPICKER_VALIDATORS,
                            { provide: material.MAT_INPUT_VALUE_ACCESSOR, useExisting: MatDatetimepickerInput },
                        ],
                        host: {
                            "[attr.aria-haspopup]": "true",
                            "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
                            "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
                            "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
                            "[disabled]": "disabled",
                            "(focus)": "_datepicker._handleFocus()",
                            "(input)": "_onInput($event.target.value)",
                            "(change)": "_onChange()",
                            "(blur)": "_onBlur()",
                            "(keydown)": "_onKeydown($event)"
                        },
                        exportAs: "matDatepickerInput"
                    },] },
        ];
        MatDatetimepickerInput.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] },
                { type: formField.MatFormField, decorators: [{ type: core$1.Optional }] }
            ];
        };
        MatDatetimepickerInput.propDecorators = {
            matDatetimepicker: [{ type: core$1.Input }],
            matDatepickerFilter: [{ type: core$1.Input }],
            value: [{ type: core$1.Input }],
            min: [{ type: core$1.Input }],
            max: [{ type: core$1.Input }],
            disabled: [{ type: core$1.Input }],
            dateChange: [{ type: core$1.Output }],
            dateInput: [{ type: core$1.Output }]
        };
        return MatDatetimepickerInput;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template D
     */
    var MatDatetimepickerToggle = /** @class */ (function () {
        function MatDatetimepickerToggle(_intl, _changeDetectorRef) {
            this._intl = _intl;
            this._changeDetectorRef = _changeDetectorRef;
            this._stateChanges = rxjs.Subscription.EMPTY;
        }
        Object.defineProperty(MatDatetimepickerToggle.prototype, "disabled", {
            /** Whether the toggle button is disabled. */
            get: /**
             * Whether the toggle button is disabled.
             * @return {?}
             */ function () {
                return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.datepicker) {
                    this._watchStateChanges();
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._stateChanges.unsubscribe();
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._watchStateChanges();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        MatDatetimepickerToggle.prototype._open = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.datetimepicker && !this.disabled) {
                    this.datetimepicker.open();
                    event.stopPropagation();
                }
            };
        /**
         * @return {?}
         */
        MatDatetimepickerToggle.prototype._watchStateChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : rxjs.of();
                /** @type {?} */
                var inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
                    this.datetimepicker._datepickerInput._disabledChange : rxjs.of();
                this._stateChanges.unsubscribe();
                this._stateChanges = rxjs.merge(this._intl.changes, datepickerDisabled, inputDisabled)
                    .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
            };
        MatDatetimepickerToggle.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-toggle",
                        template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\"\n        [disabled]=\"disabled\" (click)=\"_open($event)\">\n  <mat-icon [ngSwitch]=\"datetimepicker.type\">\n    <svg *ngSwitchCase=\"'time'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path>\n    </svg>\n    <svg *ngSwitchCase=\"'datetime'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path>\n    </svg>\n    <svg *ngSwitchDefault viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n        style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n    </svg>\n  </mat-icon>\n</button>\n",
                        host: {
                            "class": "mat-datetimepicker-toggle"
                        },
                        exportAs: "matDatetimepickerToggle",
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerToggle.ctorParameters = function () {
            return [
                { type: material.MatDatepickerIntl },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        MatDatetimepickerToggle.propDecorators = {
            datetimepicker: [{ type: core$1.Input, args: ["for",] }],
            disabled: [{ type: core$1.Input }]
        };
        return MatDatetimepickerToggle;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DAYS_PER_WEEK = 7;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerMonthView = /** @class */ (function () {
        function MatDatetimepickerMonthView(_adapter, _dateFormats) {
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this.type = "date";
            this._userSelection = new core$1.EventEmitter();
            /** Emits when a new date is selected. */
            this.selectedChange = new core$1.EventEmitter();
            if (!this._adapter) {
                throw createMissingDateImplError("DatetimeAdapter");
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError("MAT_DATETIME_FORMATS");
            }
            /** @type {?} */
            var firstDayOfWeek = this._adapter.getFirstDayOfWeek();
            /** @type {?} */
            var narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
            /** @type {?} */
            var longWeekdays = this._adapter.getDayOfWeekNames("long");
            // Rotate the labels for days of the week based on the configured first day of the week.
            /** @type {?} */
            var weekdays = longWeekdays.map(function (long, i) {
                return { long: long, narrow: narrowWeekdays[i] };
            });
            this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
            this._activeDate = this._adapter.today();
        }
        Object.defineProperty(MatDatetimepickerMonthView.prototype, "activeDate", {
            /**
             * The date to display in this month view (everything other than the month and year is ignored).
             */
            get: /**
             * The date to display in this month view (everything other than the month and year is ignored).
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                this._activeDate = value || this._adapter.today();
                if (oldActiveDate && this._activeDate &&
                    !this._adapter.sameMonthAndYear(oldActiveDate, this._activeDate)) {
                    this._init();
                    if (this._adapter.isInNextMonth(oldActiveDate, this._activeDate)) {
                        this.calendarState("right");
                    }
                    else {
                        this.calendarState("left");
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerMonthView.prototype, "selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = value;
                this._selectedDate = this._getDateInCurrentMonth(this.selected);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._init();
            };
        /** Handles when a new date is selected. */
        /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._dateSelected = /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                this.selected = userSelected;
                this.selectedChange.emit(userSelected);
            };
        /** Initializes this month view. */
        /**
         * Initializes this month view.
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._init = /**
         * Initializes this month view.
         * @return {?}
         */
            function () {
                this._selectedDate = this._getDateInCurrentMonth(this.selected);
                this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
                /** @type {?} */
                var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                this._firstWeekOffset =
                    (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) -
                        this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
                this._createWeekCells();
            };
        /** Creates MdCalendarCells for the dates in this month. */
        /**
         * Creates MdCalendarCells for the dates in this month.
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._createWeekCells = /**
         * Creates MdCalendarCells for the dates in this month.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
                /** @type {?} */
                var dateNames = this._adapter.getDateNames();
                this._weeks = [[]];
                for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
                    if (cell == DAYS_PER_WEEK) {
                        this._weeks.push([]);
                        cell = 0;
                    }
                    /** @type {?} */
                    var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                    /** @type {?} */
                    var enabled = !this.dateFilter ||
                        this.dateFilter(date);
                    /** @type {?} */
                    var ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
                    this._weeks[this._weeks.length - 1]
                        .push(new MatDatetimepickerCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
                }
            };
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         */
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._getDateInCurrentMonth = /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._adapter.sameMonthAndYear(date, this.activeDate) ?
                    this._adapter.getDate(date) : null;
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype.calendarState = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this._calendarState = direction;
            };
        /**
         * @return {?}
         */
        MatDatetimepickerMonthView.prototype._calendarStateDone = /**
         * @return {?}
         */
            function () {
                this._calendarState = "";
            };
        MatDatetimepickerMonthView.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-month-view",
                        template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\">\n    <tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr>\n  </thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate\"\n         [selectedValue]=\"_selectedDate\"\n         [activeCell]=\"_adapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"></tbody>\n</table>\n",
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerMonthView.ctorParameters = function () {
            return [
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] }
            ];
        };
        MatDatetimepickerMonthView.propDecorators = {
            type: [{ type: core$1.Input }],
            _userSelection: [{ type: core$1.Output }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerMonthView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */
    var MatDatetimepickerYearView = /** @class */ (function () {
        function MatDatetimepickerYearView(_adapter, _dateFormats) {
            this._adapter = _adapter;
            this._dateFormats = _dateFormats;
            this._userSelection = new core$1.EventEmitter();
            this.type = "date";
            /** Emits when a new month is selected. */
            this.selectedChange = new core$1.EventEmitter();
            if (!this._adapter) {
                throw createMissingDateImplError("DatetimeAdapter");
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError("MAT_DATETIME_FORMATS");
            }
            this._activeDate = this._adapter.today();
        }
        Object.defineProperty(MatDatetimepickerYearView.prototype, "activeDate", {
            /** The date to display in this year view (everything other than the year is ignored). */
            get: /**
             * The date to display in this year view (everything other than the year is ignored).
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var oldActiveDate = this._activeDate;
                this._activeDate = value || this._adapter.today();
                if (oldActiveDate && this._activeDate &&
                    !this._adapter.sameYear(oldActiveDate, this._activeDate)) {
                    this._init();
                    // if (oldActiveDate < this._activeDate) {
                    //  this.calendarState('right');
                    // } else {
                    //  this.calendarState('left');
                    // }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatDatetimepickerYearView.prototype, "selected", {
            /** The currently selected date. */
            get: /**
             * The currently selected date.
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._selected = value;
                this._selectedMonth = this._getMonthInCurrentYear(this.selected);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MatDatetimepickerYearView.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._init();
            };
        /** Handles when a new month is selected. */
        /**
         * Handles when a new month is selected.
         * @param {?} month
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._monthSelected = /**
         * Handles when a new month is selected.
         * @param {?} month
         * @return {?}
         */
            function (month) {
                /** @type {?} */
                var userSelected = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                this.selectedChange.emit(userSelected);
                this.selected = userSelected;
                this._selectedMonth = month;
            };
        /** Initializes this month view. */
        /**
         * Initializes this month view.
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._init = /**
         * Initializes this month view.
         * @return {?}
         */
            function () {
                var _this = this;
                this._selectedMonth = this._getMonthInCurrentYear(this.selected);
                this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
                this._yearLabel = this._adapter.getYearName(this.activeDate);
                /** @type {?} */
                var monthNames = this._adapter.getMonthNames("short");
                // First row of months only contains 5 elements so we can fit the year label on the same row.
                this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
            };
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         */
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @param {?} date
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._getMonthInCurrentYear = /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this._adapter.sameYear(date, this.activeDate) ?
                    this._adapter.getMonth(date) : null;
            };
        /** Creates an MdCalendarCell for the given month. */
        /**
         * Creates an MdCalendarCell for the given month.
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._createCellForMonth = /**
         * Creates an MdCalendarCell for the given month.
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */
            function (month, monthName) {
                /** @type {?} */
                var ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
                return new MatDatetimepickerCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
            };
        /** Whether the given month is enabled. */
        /**
         * Whether the given month is enabled.
         * @param {?} month
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._isMonthEnabled = /**
         * Whether the given month is enabled.
         * @param {?} month
         * @return {?}
         */
            function (month) {
                if (!this.dateFilter) {
                    return true;
                }
                /** @type {?} */
                var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
                // If any date in the month is enabled count the month as enabled.
                for (var date = firstOfMonth; this._adapter.getMonth(date) == month; date = this._adapter.addCalendarDays(date, 1)) {
                    if (this.dateFilter(date)) {
                        return true;
                    }
                }
                return false;
            };
        // private calendarState(direction: string): void {
        //   this._calendarState = direction;
        // }
        // private calendarState(direction: string): void {
        //   this._calendarState = direction;
        // }
        /**
         * @return {?}
         */
        MatDatetimepickerYearView.prototype._calendarStateDone =
            // private calendarState(direction: string): void {
            //   this._calendarState = direction;
            // }
            /**
             * @return {?}
             */
            function () {
                this._calendarState = "";
            };
        MatDatetimepickerYearView.decorators = [
            { type: core$1.Component, args: [{
                        selector: "mat-datetimepicker-year-view",
                        template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\"></thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         allowDisabledSelection=\"true\"\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth\"\n         [selectedValue]=\"_selectedMonth\"\n         [labelMinRequiredCells]=\"2\"\n         [activeCell]=\"_adapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"></tbody>\n</table>\n",
                        animations: [slideCalendar],
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        MatDatetimepickerYearView.ctorParameters = function () {
            return [
                { type: DatetimeAdapter, decorators: [{ type: core$1.Optional }] },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [MAT_DATETIME_FORMATS,] }] }
            ];
        };
        MatDatetimepickerYearView.propDecorators = {
            _userSelection: [{ type: core$1.Output }],
            type: [{ type: core$1.Input }],
            activeDate: [{ type: core$1.Input }],
            selected: [{ type: core$1.Input }],
            dateFilter: [{ type: core$1.Input }],
            selectedChange: [{ type: core$1.Output }]
        };
        return MatDatetimepickerYearView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatDatetimepickerModule = /** @class */ (function () {
        function MatDatetimepickerModule() {
        }
        MatDatetimepickerModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatButtonModule,
                            material.MatDialogModule,
                            material.MatIconModule,
                            overlay.OverlayModule,
                            a11y.A11yModule
                        ],
                        entryComponents: [
                            MatDatetimepickerContent
                        ],
                        declarations: [
                            MatDatetimepickerCalendar,
                            MatDatetimepickerCalendarBody,
                            MatDatetimepickerClock,
                            MatDatetimepicker,
                            MatDatetimepickerToggle,
                            MatDatetimepickerInput,
                            MatDatetimepickerContent,
                            MatDatetimepickerMonthView,
                            MatDatetimepickerYearView
                        ],
                        exports: [
                            MatDatetimepickerCalendar,
                            MatDatetimepickerCalendarBody,
                            MatDatetimepickerClock,
                            MatDatetimepicker,
                            MatDatetimepickerToggle,
                            MatDatetimepickerInput,
                            MatDatetimepickerContent,
                            MatDatetimepickerMonthView,
                            MatDatetimepickerYearView
                        ]
                    },] },
        ];
        return MatDatetimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NativeDatetimeModule = NativeDatetimeModule;
    exports.MatNativeDatetimeModule = MatNativeDatetimeModule;
    exports.DatetimeAdapter = DatetimeAdapter;
    exports.MAT_DATETIME_FORMATS = MAT_DATETIME_FORMATS;
    exports.NativeDatetimeAdapter = NativeDatetimeAdapter;
    exports.MAT_NATIVE_DATETIME_FORMATS = MAT_NATIVE_DATETIME_FORMATS;
    exports.MatDatetimepickerModule = MatDatetimepickerModule;
    exports.MatDatetimepickerCalendar = MatDatetimepickerCalendar;
    exports.MatDatetimepickerCalendarCell = MatDatetimepickerCalendarCell;
    exports.MatDatetimepickerCalendarBody = MatDatetimepickerCalendarBody;
    exports.MatDatetimepickerFilterType = MatDatetimepickerFilterType;
    exports.MAT_DATETIMEPICKER_VALUE_ACCESSOR = MAT_DATETIMEPICKER_VALUE_ACCESSOR;
    exports.MAT_DATETIMEPICKER_VALIDATORS = MAT_DATETIMEPICKER_VALIDATORS;
    exports.MatDatetimepickerInputEvent = MatDatetimepickerInputEvent;
    exports.MatDatetimepickerInput = MatDatetimepickerInput;
    exports.MatDatetimepickerToggle = MatDatetimepickerToggle;
    exports.MatDatetimepickerMonthView = MatDatetimepickerMonthView;
    exports.MatDatetimepickerYearView = MatDatetimepickerYearView;
    exports.MatDatetimepickerContent = MatDatetimepickerContent;
    exports.MatDatetimepicker = MatDatetimepicker;
    exports.ɵb = MatDatetimepickerClock;
    exports.ɵa = slideCalendar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXItY29yZS51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9kYXRldGltZS1mb3JtYXRzLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvbmF0aXZlLWRhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9uYXRpdmUtZGF0ZXRpbWUtZm9ybWF0cy50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2FkYXB0ZXIubW9kdWxlLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnMudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItZXJyb3JzLnRzIiwibmc6Ly9mZWRlZW1hbi1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGUudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXIudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXItYm9keS50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9jbG9jay50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1pbnB1dC50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci10b2dnbGUudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvbW9udGgtdmlldy50cyIsIm5nOi8vZmVkZWVtYW4tZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci95ZWFyLXZpZXcudHMiLCJuZzovL2ZlZGVlbWFuLWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGV0aW1lQWRhcHRlcjxEPiBleHRlbmRzIERhdGVBZGFwdGVyPEQ+IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9kZWxlZ2F0ZTogRGF0ZUFkYXB0ZXI8RD4pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRIb3VyKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gIGFic3RyYWN0IGdldE1pbnV0ZShkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICBhYnN0cmFjdCBnZXRGaXJzdERhdGVPZk1vbnRoKGRhdGU6IEQpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBpc0luTmV4dE1vbnRoKHN0YXJ0RGF0ZTogRCwgZW5kRGF0ZTogRCk6IGJvb2xlYW47XHJcblxyXG4gIGFic3RyYWN0IGdldEhvdXJOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0TWludXRlTmFtZXMoKTogc3RyaW5nW107XHJcblxyXG4gIGFic3RyYWN0IGFkZENhbGVuZGFySG91cnMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBhZGRDYWxlbmRhck1pbnV0ZXMoZGF0ZTogRCwgbW9udGhzOiBudW1iZXIpOiBEO1xyXG5cclxuICBhYnN0cmFjdCBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IEQ7XHJcblxyXG4gIGdldFZhbGlkRGF0ZU9yTnVsbChvYmo6IGFueSk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiAodGhpcy5pc0RhdGVJbnN0YW5jZShvYmopICYmIHRoaXMuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wYXJlRGF0ZXRpbWUoZmlyc3Q6IEQsIHNlY29uZDogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlRGF0ZShmaXJzdCwgc2Vjb25kKSB8fFxyXG4gICAgICB0aGlzLmdldEhvdXIoZmlyc3QpIC0gdGhpcy5nZXRIb3VyKHNlY29uZCkgfHxcclxuICAgICAgdGhpcy5nZXRNaW51dGUoZmlyc3QpIC0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKTtcclxuICB9XHJcblxyXG4gIHNhbWVEYXRldGltZShmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChmaXJzdCAmJiBzZWNvbmQpIHtcclxuICAgICAgY29uc3QgZmlyc3RWYWxpZCA9IHRoaXMuaXNWYWxpZChmaXJzdCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XHJcbiAgICAgIGlmIChmaXJzdFZhbGlkICYmIHNlY29uZFZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbXBhcmVEYXRldGltZShmaXJzdCwgc2Vjb25kKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PT0gc2Vjb25kVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcblxyXG4gIHNhbWVZZWFyKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRZZWFyKGZpcnN0KSA9PT0gdGhpcy5nZXRZZWFyKHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lRGF5KGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXREYXRlKGZpcnN0KSA9PT0gdGhpcy5nZXREYXRlKHNlY29uZCkgJiYgdGhpcy5zYW1lTW9udGhBbmRZZWFyKGZpcnN0LCBzZWNvbmQpO1xyXG4gIH1cclxuXHJcbiAgc2FtZUhvdXIoZmlyc3Q6IEQsIHNlY29uZDogRCkge1xyXG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldEhvdXIoZmlyc3QpID09PSB0aGlzLmdldEhvdXIoc2Vjb25kKSAmJiB0aGlzLnNhbWVEYXkoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lTWludXRlKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcclxuICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQgJiYgdGhpcy5nZXRNaW51dGUoZmlyc3QpID09PSB0aGlzLmdldE1pbnV0ZShzZWNvbmQpICYmIHRoaXMuc2FtZUhvdXIoZmlyc3QsIHNlY29uZCk7XHJcbiAgfVxyXG5cclxuICBzYW1lTW9udGhBbmRZZWFyKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGZpcnN0ICYmIHNlY29uZCkge1xyXG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgY29uc3Qgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gISh0aGlzLmdldFllYXIoZmlyc3QpIC0gdGhpcy5nZXRZZWFyKHNlY29uZCkgfHxcclxuICAgICAgICAgIHRoaXMuZ2V0TW9udGgoZmlyc3QpIC0gdGhpcy5nZXRNb250aChzZWNvbmQpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PT0gc2Vjb25kVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuICB9XHJcblxyXG4gIC8vIGRlbGVnYXRlXHJcbiAgY2xvbmUoZGF0ZTogRCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNsb25lKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBELCB5ZWFyczogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJZZWFycyhkYXRlLCB5ZWFycyk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIG1vbnRocyk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRCwgZGF5czogbnVtYmVyKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuYWRkQ2FsZW5kYXJEYXlzKGRhdGUsIGRheXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0WWVhcihkYXRlOiBEKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRZZWFyKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TW9udGgoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlPZldlZWsoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF5T2ZXZWVrKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhOYW1lcyhzdHlsZSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aE5hbWVzKHN0eWxlKTtcclxuICB9XHJcblxyXG4gIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0RGF0ZU5hbWVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXlPZldlZWtOYW1lcyhzdHlsZSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWtOYW1lcyhzdHlsZSk7XHJcbiAgfVxyXG5cclxuICBnZXRZZWFyTmFtZShkYXRlOiBEKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRZZWFyTmFtZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICB9XHJcblxyXG4gIGdldE51bURheXNJbk1vbnRoKGRhdGU6IEQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldE51bURheXNJbk1vbnRoKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcik6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNyZWF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgdG9kYXkoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIHBhcnNlKHZhbHVlOiBhbnksIHBhcnNlRm9ybWF0OiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUucGFyc2UodmFsdWUsIHBhcnNlRm9ybWF0KTtcclxuICB9XHJcblxyXG4gIGZvcm1hdChkYXRlOiBELCBkaXNwbGF5Rm9ybWF0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmZvcm1hdChkYXRlLCBkaXNwbGF5Rm9ybWF0KTtcclxuICB9XHJcblxyXG4gIHRvSXNvODYwMShkYXRlOiBEKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS50b0lzbzg2MDEoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmlzRGF0ZUluc3RhbmNlKG9iaik7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKGRhdGU6IEQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pc1ZhbGlkKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgaW52YWxpZCgpOiBEIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pbnZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICBjbGFtcERhdGUoZGF0ZTogRCwgbWluPzogRCB8IG51bGwsIG1heD86IEQgfCBudWxsKTogRCB7XHJcbiAgICBpZiAobWluICYmIHRoaXMuY29tcGFyZURhdGV0aW1lKGRhdGUsIG1pbikgPCAwKSB7XHJcbiAgICAgIHJldHVybiBtaW47XHJcbiAgICB9XHJcbiAgICBpZiAobWF4ICYmIHRoaXMuY29tcGFyZURhdGV0aW1lKGRhdGUsIG1heCkgPiAwKSB7XHJcbiAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXREYXRldGltZUZvcm1hdHMge1xyXG4gIHBhcnNlOiB7XHJcbiAgICBkYXRlSW5wdXQ/OiBhbnk7XHJcbiAgICBtb250aElucHV0PzogYW55O1xyXG4gICAgdGltZUlucHV0PzogYW55O1xyXG4gICAgZGF0ZXRpbWVJbnB1dD86IGFueTtcclxuICB9O1xyXG4gIGRpc3BsYXk6IHtcclxuICAgIGRhdGVJbnB1dDogYW55O1xyXG4gICAgbW9udGhJbnB1dDogYW55O1xyXG4gICAgdGltZUlucHV0OiBhbnk7XHJcbiAgICBkYXRldGltZUlucHV0OiBhbnk7XHJcbiAgICBtb250aFllYXJMYWJlbDogYW55O1xyXG4gICAgZGF0ZUExMXlMYWJlbDogYW55O1xyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiBhbnk7XHJcbiAgICBwb3B1cEhlYWRlckRhdGVMYWJlbDogYW55O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfREFURVRJTUVfRk9STUFUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNYXREYXRldGltZUZvcm1hdHM+KFwibWF0LWRhdGV0aW1lLWZvcm1hdHNcIik7XHJcbiIsImltcG9ydCB7XHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgT3B0aW9uYWxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVBZGFwdGVyLFxyXG4gIE1BVF9EQVRFX0xPQ0FMRVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9kYXRldGltZS1hZGFwdGVyXCI7XHJcblxyXG4vKiogVGhlIGRlZmF1bHQgaG91ciBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cclxuY29uc3QgREVGQVVMVF9IT1VSX05BTUVTID0gcmFuZ2UoMjQsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbi8qKiBUaGUgZGVmYXVsdCBtaW51dGUgbmFtZXMgdG8gdXNlIGlmIEludGwgQVBJIGlzIG5vdCBhdmFpbGFibGUuICovXHJcbmNvbnN0IERFRkFVTFRfTUlOVVRFX05BTUVTID0gcmFuZ2UoNjAsIGkgPT4gU3RyaW5nKGkpKTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XHJcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlc0FycmF5O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8RGF0ZT4ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPERhdGU+KSB7XHJcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBjbG9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRldGltZSh0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmdldERhdGVJbk5leHRNb250aChzdGFydERhdGUpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2FtZU1vbnRoQW5kWWVhcihuZXh0TW9udGgsIGVuZERhdGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXHJcbiAgICAvLyBjcmVhdGluZyB0aGUgRGF0ZSkuXHJcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZSA8IDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIi4gRGF0ZSBoYXMgdG8gYmUgZ3JlYXRlciB0aGFuIDAuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhvdXIgPCAwIHx8IGhvdXIgPiAyMykge1xyXG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBob3VyIFwiJHtob3VyfVwiLiBIb3VyIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDIzLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IDU5KSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlKTtcclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHRoZSBkYXRlIHdhc24ndCBhYm92ZSB0aGUgdXBwZXIgYm91bmQgZm9yIHRoZSBtb250aCwgY2F1c2luZyB0aGUgbW9udGggdG8gb3ZlcmZsb3dcclxuICAgIGlmIChyZXN1bHQuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgZGF0ZSBcIiR7ZGF0ZX1cIiBmb3IgbW9udGggd2l0aCBpbmRleCBcIiR7bW9udGh9XCIuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUluTmV4dE1vbnRoKGRhdGU6IERhdGUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEsXHJcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfSE9VUl9OQU1FUztcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZU5hbWVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBERUZBVUxUX01JTlVURV9OQU1FUztcclxuICB9XHJcblxyXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRGF0ZSwgeWVhcnM6IG51bWJlcik6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgeWVhcnMgKiAxMik7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBEYXRlLCBtb250aHM6IG51bWJlcik6IERhdGUge1xyXG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxyXG4gICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocywgdGhpcy5nZXREYXRlKGRhdGUpLCB0aGlzLmdldEhvdXIoZGF0ZSksIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcclxuXHJcbiAgICAvLyBJdCdzIHBvc3NpYmxlIHRvIHdpbmQgdXAgaW4gdGhlIHdyb25nIG1vbnRoIGlmIHRoZSBvcmlnaW5hbCBtb250aCBoYXMgbW9yZSBkYXlzIHRoYW4gdGhlIG5ld1xyXG4gICAgLy8gbW9udGguIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGdvIHRvIHRoZSBsYXN0IGRheSBvZiB0aGUgZGVzaXJlZCBtb250aC5cclxuICAgIC8vIE5vdGU6IHRoZSBhZGRpdGlvbmFsICsgMTIgJSAxMiBlbnN1cmVzIHdlIGVuZCB1cCB3aXRoIGEgcG9zaXRpdmUgbnVtYmVyLCBzaW5jZSBKUyAlIGRvZXNuJ3RcclxuICAgIC8vIGd1YXJhbnRlZSB0aGlzLlxyXG4gICAgaWYgKHRoaXMuZ2V0TW9udGgobmV3RGF0ZSkgIT09ICgodGhpcy5nZXRNb250aChkYXRlKSArIG1vbnRocykgJSAxMiArIDEyKSAlIDEyKSB7XHJcbiAgICAgIG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHRoaXMuZ2V0WWVhcihuZXdEYXRlKSwgdGhpcy5nZXRNb250aChuZXdEYXRlKSwgMCwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld0RhdGU7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRGF0ZSwgZGF5czogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgICB0aGlzLmdldFllYXIoZGF0ZSksIHRoaXMuZ2V0TW9udGgoZGF0ZSksIHRoaXMuZ2V0RGF0ZShkYXRlKSArIGRheXMsIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBEYXRlLCBob3VyczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSArIGhvdXJzLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxlbmRhck1pbnV0ZXMoZGF0ZTogRGF0ZSwgbWludXRlczogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcclxuICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksXHJcbiAgICAgIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkgKyBtaW51dGVzKTtcclxuICB9XHJcblxyXG4gIHRvSXNvODYwMShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdXBlci50b0lzbzg2MDEoZGF0ZSkgKyBcIlRcIiArIFtcclxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDSG91cnMoKSksXHJcbiAgICAgIHRoaXMuXzJkaWdpdChkYXRlLmdldFVUQ01pbnV0ZXMoKSlcclxuICAgIF0uam9pbihcIjpcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdHJpcCBvdXQgdW5pY29kZSBMVFIgYW5kIFJUTCBjaGFyYWN0ZXJzLiBFZGdlIGFuZCBJRSBpbnNlcnQgdGhlc2UgaW50byBmb3JtYXR0ZWQgZGF0ZXMgd2hpbGVcclxuICAgKiBvdGhlciBicm93c2VycyBkbyBub3QuIFdlIHJlbW92ZSB0aGVtIHRvIG1ha2Ugb3V0cHV0IGNvbnNpc3RlbnQgYW5kIGJlY2F1c2UgdGhleSBpbnRlcmZlcmUgd2l0aFxyXG4gICAqIGRhdGUgcGFyc2luZy5cclxuICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgdG8gc3RyaXAgZGlyZWN0aW9uIGNoYXJhY3RlcnMgZnJvbS5cclxuICAgKiBAcmV0dXJucyBUaGUgc3RyaXBwZWQgc3RyaW5nLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N0cmlwRGlyZWN0aW9uYWxpdHlDaGFyYWN0ZXJzKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHUyMDBlXFx1MjAwZl0vZywgXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYWRzIGEgbnVtYmVyIHRvIG1ha2UgaXQgdHdvIGRpZ2l0cy5cclxuICAgKiBAcGFyYW0gbiBUaGUgbnVtYmVyIHRvIHBhZC5cclxuICAgKiBAcmV0dXJucyBUaGUgcGFkZGVkIG51bWJlci5cclxuICAgKi9cclxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIG4pLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGVzIGEgZGF0ZSBidXQgYWxsb3dzIHRoZSBtb250aCBhbmQgZGF0ZSB0byBvdmVyZmxvdy4gKi9cclxuICBwcml2YXRlIF9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMpO1xyXG5cclxuICAgIC8vIFdlIG5lZWQgdG8gY29ycmVjdCBmb3IgdGhlIGZhY3QgdGhhdCBKUyBuYXRpdmUgRGF0ZSB0cmVhdHMgeWVhcnMgaW4gcmFuZ2UgWzAsIDk5XSBhc1xyXG4gICAgLy8gYWJicmV2aWF0aW9ucyBmb3IgMTl4eC5cclxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwMCkge1xyXG4gICAgICByZXN1bHQuc2V0RnVsbFllYXIodGhpcy5nZXRZZWFyKHJlc3VsdCkgLSAxOTAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hdERhdGV0aW1lRm9ybWF0cyB9IGZyb20gXCIuL2RhdGV0aW1lLWZvcm1hdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfTkFUSVZFX0RBVEVUSU1FX0ZPUk1BVFM6IE1hdERhdGV0aW1lRm9ybWF0cyA9IHtcclxuICBwYXJzZToge30sXHJcbiAgZGlzcGxheToge1xyXG4gICAgZGF0ZUlucHV0OiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIn0sXHJcbiAgICBtb250aElucHV0OiB7bW9udGg6IFwibG9uZ1wifSxcclxuICAgIGRhdGV0aW1lSW5wdXQ6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwiLCBob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIn0sXHJcbiAgICB0aW1lSW5wdXQ6IHtob3VyOiBcIjItZGlnaXRcIiwgbWludXRlOiBcIjItZGlnaXRcIn0sXHJcbiAgICBtb250aFllYXJMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwifSxcclxuICAgIGRhdGVBMTF5TGFiZWw6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wifSxcclxuICAgIG1vbnRoWWVhckExMXlMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCJ9LFxyXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IHt3ZWVrZGF5OiBcInNob3J0XCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCJ9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICBOYXRpdmVEYXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTUFUX0RBVEVUSU1FX0ZPUk1BVFMgfSBmcm9tIFwiLi9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7IE5hdGl2ZURhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuL25hdGl2ZS1kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL25hdGl2ZS1kYXRldGltZS1mb3JtYXRzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVEYXRlTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTmF0aXZlRGF0ZXRpbWVBZGFwdGVyXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlRGF0ZXRpbWVNb2R1bGUge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZURhdGV0aW1lTW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1BVF9EQVRFVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX05BVElWRV9EQVRFVElNRV9GT1JNQVRTfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdE5hdGl2ZURhdGV0aW1lTW9kdWxlIHtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgYW5pbWF0aW9uIGZhZGVzIGluIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCB0ZXh0IGNvbnRlbnQgb2YgdGhlXHJcbiAqIHNlbGVjdCdzIG9wdGlvbnMuIEl0IGlzIHRpbWUgZGVsYXllZCB0byBvY2N1ciAxMDBtcyBhZnRlciB0aGUgb3ZlcmxheVxyXG4gKiBwYW5lbCBoYXMgdHJhbnNmb3JtZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFkZUluQ29udGVudDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcImZhZGVJbkNvbnRlbnRcIiwgW1xyXG4gIHN0YXRlKFwic2hvd2luZ1wiLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcclxuICB0cmFuc2l0aW9uKFwidm9pZCA9PiBzaG93aW5nXCIsIFtcclxuICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXHJcbiAgICBhbmltYXRlKGAxNTBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKWApXHJcbiAgXSlcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVDYWxlbmRhcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcInNsaWRlQ2FsZW5kYXJcIiwgW1xyXG4gIHRyYW5zaXRpb24oXCIqID0+IGxlZnRcIiwgW1xyXG4gICAgYW5pbWF0ZSgxODAsIGtleWZyYW1lcyhbXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41MX0pLFxyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiwgb2Zmc2V0OiAxfSlcclxuICAgIF0pKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCIqID0+IHJpZ2h0XCIsIFtcclxuICAgIGFuaW1hdGUoMTgwLCBrZXlmcmFtZXMoW1xyXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsIG9mZnNldDogMC41fSksXHJcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcclxuICAgICAgc3R5bGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsIG9mZnNldDogMX0pXHJcbiAgICBdKSlcclxuICBdKVxyXG5dKTtcclxuIiwiLyoqIEBkb2NzLXByaXZhdGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKHByb3ZpZGVyOiBzdHJpbmcpIHtcclxuICByZXR1cm4gRXJyb3IoXHJcbiAgICAgIGBNYXREYXRldGltZXBpY2tlcjogTm8gcHJvdmlkZXIgZm91bmQgZm9yICR7cHJvdmlkZXJ9LiBZb3UgbXVzdCBpbXBvcnQgb25lIG9mIHRoZSBmb2xsb3dpbmcgYCArXHJcbiAgICAgIGBtb2R1bGVzIGF0IHlvdXIgYXBwbGljYXRpb24gcm9vdDogTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGV0aW1lTW9kdWxlLCBvciBwcm92aWRlIGEgYCArXHJcbiAgICAgIGBjdXN0b20gaW1wbGVtZW50YXRpb24uYCk7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIHtcclxuICBEQVRFLCBIT1VSLCBNSU5VVEVcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERPV05fQVJST1csXHJcbiAgRU5ELFxyXG4gIEVOVEVSLFxyXG4gIEhPTUUsXHJcbiAgTEVGVF9BUlJPVyxcclxuICBQQUdFX0RPV04sXHJcbiAgUEFHRV9VUCxcclxuICBSSUdIVF9BUlJPVyxcclxuICBVUF9BUlJPV1xyXG59IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VySW50bCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBzbGlkZUNhbGVuZGFyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XHJcblxyXG4vKipcclxuICogQSBjYWxlbmRhciB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyXCIsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxyXG4gICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXJcIlxyXG4gICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ3llYXInXCJcclxuICAgICAgIChjbGljayk9XCJfeWVhckNsaWNrZWQoKVwiPnt7IF95ZWFyTGFiZWwgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWVcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwidHlwZSAhPT0gJ3RpbWUnXCJcclxuICAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlXCJcclxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2N1cnJlbnRWaWV3ID09ICdtb250aCdcIlxyXG4gICAgICAgICAgW2NsYXNzLm5vdC1jbGlja2FibGVdPVwidHlwZSA9PT0gJ21vbnRoJ1wiXHJcbiAgICAgICAgICAoY2xpY2spPVwiX2RhdGVDbGlja2VkKClcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC43ZW07XCI+e3sgX2RhdGVMYWJlbCB9fTwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwidHlwZS5lbmRzV2l0aCgndGltZScpXCJcclxuICAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1lXCJcclxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2N1cnJlbnRWaWV3ID09ICdjbG9jaydcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY2xvY2tWaWV3ID09ICdob3VyJ1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJfaG91cnNDbGlja2VkKClcIj57eyBfaG91cnNMYWJlbCB9fTwvc3Bhbj46PHNwYW4gY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLW1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jbG9ja1ZpZXcgPT0gJ21pbnV0ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiX21pbnV0ZXNDbGlja2VkKClcIj57eyBfbWludXRlc0xhYmVsIH19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50XCIgW25nU3dpdGNoXT1cIl9jdXJyZW50Vmlld1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtbW9udGgtY29udGVudFwiICpuZ0lmPVwiX2N1cnJlbnRWaWV3ID09PSAnbW9udGgnIHx8IF9jdXJyZW50VmlldyA9PT0gJ3llYXInXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRyb2xzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uXCJcclxuICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIV9wcmV2aW91c0VuYWJsZWQoKVwiIChjbGljayk9XCJfcHJldmlvdXNDbGlja2VkKClcIlxyXG4gICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBtb250aFwiPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcGVyaW9kLWJ1dHRvblwiIFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiXHJcbiAgICAgICAgICAgKEBzbGlkZUNhbGVuZGFyLmRvbmUpPVwiX2NhbGVuZGFyU3RhdGVEb25lKClcIj5cclxuICAgICAgICA8c3Ryb25nPnt7IF9tb250aFllYXJMYWJlbCB9fTwvc3Ryb25nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFfbmV4dEVuYWJsZWQoKVwiIChjbGljayk9XCJfbmV4dENsaWNrZWQoKVwiXHJcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgbW9udGhcIj5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlldyAqbmdTd2l0Y2hDYXNlPVwiJ21vbnRoJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cIl9hY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cIl9kYXRlRmlsdGVyRm9yVmlld3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX2RhdGVTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLW1vbnRoLXZpZXc+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiX2RhdGVGaWx0ZXJGb3JWaWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIl9tb250aFNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJfdXNlclNlbGVjdGVkKClcIj5cclxuICA8L21hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXc+XHJcbiAgPG1hdC1kYXRldGltZXBpY2tlci1jbG9jayAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRWaWV3XT1cIl9jbG9ja1ZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ludGVydmFsXT1cInRpbWVJbnRlcnZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiZGF0ZUZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiX2FjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwiX29uQWN0aXZlRGF0ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJfdGltZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF91c2VyU2VsZWN0aW9uKT1cIl91c2VyU2VsZWN0ZWQoKVwiPlxyXG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItZm9vdGVyXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIl9oYW5kbGVDYW5jZWxCdXR0b24oJGV2ZW50KVwiPnt7IGNhbmNlbEJ1dHRvbkxhYmVsIH19PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJfaGFuZGxlQ29uZmlybUJ1dHRvbigkZXZlbnQpXCI+e3sgY29uZmlybUJ1dHRvbkxhYmVsIH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmJsb2NrO291dGxpbmU6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9bGFuZHNjYXBlXXtkaXNwbGF5OmZsZXh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXJ7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiNmZmY7Ym94LXNpemluZzpib3JkZXItYm94fVttb2RlPWxhbmRzY2FwZV0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXJ7d2lkdGg6MTUwcHg7bWluLXdpZHRoOjE1MHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci15ZWFye3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NTAwO3doaXRlLXNwYWNlOm5vd3JhcH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWV7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6MzBweH1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZTpub3QoLmFjdGl2ZSksLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnM6bm90KC5hY3RpdmUpLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLW1pbnV0ZXM6bm90KC5hY3RpdmUpLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXI6bm90KC5hY3RpdmUpe2N1cnNvcjpwb2ludGVyO29wYWNpdHk6LjZ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS5ub3QtY2xpY2thYmxlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzLm5vdC1jbGlja2FibGUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlcy5ub3QtY2xpY2thYmxlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXllYXIubm90LWNsaWNrYWJsZXtjdXJzb3I6aW5pdGlhbH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1le3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy10b3A6NXB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWU6bm90KC5hY3RpdmUpe29wYWNpdHk6LjZ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSkgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnMsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSkgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlc3tjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1le2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OjB9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3dpZHRoOjEwMCU7cGFkZGluZzowIDhweCA4cHg7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW59W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnR7cGFkZGluZy10b3A6OHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWZvb3RlcntwYWRkaW5nOjEycHg7dGV4dC1hbGlnbjpyaWdodH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRyb2xze2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXBlcmlvZC1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjQ4cHg7cGFkZGluZzoxMnB4O291dGxpbmU6MDtib3JkZXI6MDtiYWNrZ3JvdW5kOjAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo0OHB4O2hlaWdodDo0OHB4O3BhZGRpbmc6MTJweDtvdXRsaW5lOjA7Ym9yZGVyOjA7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDowIDA7Ym94LXNpemluZzpib3JkZXItYm94fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItbmV4dC1idXR0b24uZGlzYWJsZWQsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b24uZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpO3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvbiBzdmcsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b24gc3Zne2ZpbGw6Y3VycmVudENvbG9yO3ZlcnRpY2FsLWFsaWduOnRvcH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxle2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3dpZHRoOjEwMCV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMXB4O3BhZGRpbmc6MCAwIDhweH1AbWVkaWEgKG1pbi13aWR0aDo0ODBweCl7Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9de2Rpc3BsYXk6ZmxleH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXJ7d2lkdGg6MTUwcHg7bWluLXdpZHRoOjE1MHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWV7d2hpdGUtc3BhY2U6bm9ybWFsO3dvcmQtd3JhcDpicmVhay13b3JkfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1le2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OjB9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udGVudHtwYWRkaW5nLXRvcDo4cHh9fWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgIFwiW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhcl1cIjogXCJ0cnVlXCIsXHJcbiAgICBcInRhYmluZGV4XCI6IFwiMFwiLFxyXG4gICAgXCIoa2V5ZG93bilcIjogXCJfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bigkZXZlbnQpXCJcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUNhbGVuZGFyXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaW50bENoYW5nZXM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XHJcblxyXG4gIC8qKiBBIGRhdGUgcmVwcmVzZW50aW5nIHRoZSBwZXJpb2QgKG1vbnRoIG9yIHllYXIpIHRvIHN0YXJ0IHRoZSBjYWxlbmRhciBpbi4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzdGFydEF0KCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXJ0QXQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBzaG91bGQgYmUgc3RhcnRlZCBpbiBtb250aCBvciB5ZWFyIHZpZXcuICovXHJcbiAgQElucHV0KCkgc3RhcnRWaWV3OiBcImNsb2NrXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiA9IFwibW9udGhcIjtcclxuXHJcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzZWxlY3RlZCgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBtaW5EYXRlKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbkRhdGUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICB0aGlzLl9taW5EYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWluRGF0ZTogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWF4RGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21heERhdGU6IEQgfCBudWxsO1xyXG5cclxuICBASW5wdXQoKSB0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBELCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggYW5kIHllYXIgdmlld3MuICovXHJcbiAgX2RhdGVGaWx0ZXJGb3JWaWV3cyA9IChkYXRlOiBEKSA9PiB7XHJcbiAgICByZXR1cm4gISFkYXRlICYmXHJcbiAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuREFURSkpICYmXHJcbiAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGN1cnJlbnQgYWN0aXZlIGRhdGUuIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0aW1lIHBlcmlvZCBpcyBzaG93biBhbmQgd2hpY2ggZGF0ZSBpc1xyXG4gICAqIGhpZ2hsaWdodGVkIHdoZW4gdXNpbmcga2V5Ym9hcmQgbmF2aWdhdGlvbi5cclxuICAgKi9cclxuICBnZXQgX2FjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xhbXBlZEFjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgX2FjdGl2ZURhdGUodmFsdWU6IEQpIHtcclxuICAgIGNvbnN0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZTtcclxuICAgIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUodmFsdWUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICAgIGlmIChvbGRBY3RpdmVEYXRlICYmIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlICYmIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgJiZcclxuICAgICAgIXRoaXMuX2FkYXB0ZXIuc2FtZU1vbnRoQW5kWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSkpIHtcclxuICAgICAgaWYgKHRoaXMuX2FkYXB0ZXIuaXNJbk5leHRNb250aChvbGRBY3RpdmVEYXRlLCB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJyaWdodFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJsZWZ0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2xhbXBlZEFjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIF91c2VyU2VsZWN0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyBpbiBtb250aCB2aWV3LiAqL1xyXG4gIF9jdXJyZW50VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XHJcbiAgX2Nsb2NrVmlldzogXCJob3VyXCIgfCBcIm1pbnV0ZVwiID0gXCJob3VyXCI7XHJcblxyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjdXJyZW50IGNhbGVuZGFyIHZpZXcuICovXHJcbiAgZ2V0IF95ZWFyTGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmdldFllYXJOYW1lKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9tb250aFllYXJMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgPyB0aGlzLl9hZGFwdGVyLmdldE1vbnRoTmFtZXMoXCJsb25nXCIpW3RoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSldIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBfZGF0ZUxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm1vbnRoXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGhOYW1lcyhcImxvbmdcIilbdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5mb3JtYXQodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5wb3B1cEhlYWRlckRhdGVMYWJlbCk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IF9ob3Vyc0xhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fMmRpZ2l0KHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgX21pbnV0ZXNMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuXzJkaWdpdCh0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ludGxDaGFuZ2VzID0gX2ludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuc3RhcnRBdCB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgICB0aGlzLl9mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibW9udGhcIikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwieWVhclwiO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFwidGltZVwiKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSB0aGlzLnN0YXJ0VmlldyB8fCBcIm1vbnRoXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2ludGxDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBkYXRlIHNlbGVjdGlvbiBpbiB0aGUgbW9udGggdmlldy4gKi9cclxuICBfZGF0ZVNlbGVjdGVkKGRhdGU6IEQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gXCJkYXRlXCIpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyBtb250aCBzZWxlY3Rpb24gaW4gdGhlIHllYXIgdmlldy4gKi9cclxuICBfbW9udGhTZWxlY3RlZChtb250aDogRCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IG1vbnRoO1xyXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwibW9udGhcIjtcclxuICAgICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJob3VyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdGltZVNlbGVjdGVkKGRhdGU6IEQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJtaW51dGVcIjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIF9oYW5kbGVDb25maXJtQnV0dG9uKGV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICB0aGlzLl91c2VyU2VsZWN0ZWQoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgX2hhbmRsZUNhbmNlbEJ1dHRvbihldmVudCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2UgZGlhbG9nIChkYXRldGltZXBpY2tlci5jbG9zZSgpKVxyXG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XHJcblxyXG4gIH1cclxuXHJcbiAgX29uQWN0aXZlRGF0ZUNoYW5nZShkYXRlOiBEKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcclxuICB9XHJcblxyXG4gIF95ZWFyQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJ5ZWFyXCI7XHJcbiAgfVxyXG5cclxuICBfZGF0ZUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJtb250aFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hvdXJzQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xyXG4gICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJob3VyXCI7XHJcbiAgfVxyXG5cclxuICBfbWludXRlc0NsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcclxuICAgIHRoaXMuX2Nsb2NrVmlldyA9IFwibWludXRlXCI7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB1c2VyIGNsaWNrcyBvbiB0aGUgcHJldmlvdXMgYnV0dG9uLiAqL1xyXG4gIF9wcmV2aW91c0NsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgLTEpIDpcclxuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHVzZXIgY2xpY2tzIG9uIHRoZSBuZXh0IGJ1dHRvbi4gKi9cclxuICBfbmV4dENsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgMSkgOlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgcHJldmlvdXMgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLiAqL1xyXG4gIF9wcmV2aW91c0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMubWluRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhdGhpcy5taW5EYXRlIHx8ICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMubWluRGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGVuYWJsZWQuICovXHJcbiAgX25leHRFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLm1heERhdGUgfHwgIXRoaXMuX2lzU2FtZVZpZXcodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5LiAqL1xyXG4gIF9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBUT0RPKG1tYWxlcmJhKTogV2UgY3VycmVudGx5IGFsbG93IGtleWJvYXJkIG5hdmlnYXRpb24gdG8gZGlzYWJsZWQgZGF0ZXMsIGJ1dCBqdXN0IHByZXZlbnRcclxuICAgIC8vIGRpc2FibGVkIG9uZXMgZnJvbSBiZWluZyBzZWxlY3RlZC4gVGhpcyBtYXkgbm90IGJlIGlkZWFsLCB3ZSBzaG91bGQgbG9vayBpbnRvIHdoZXRoZXJcclxuICAgIC8vIG5hdmlnYXRpb24gc2hvdWxkIHNraXAgb3ZlciBkaXNhYmxlZCBkYXRlcywgYW5kIGlmIHNvLCBob3cgdG8gaW1wbGVtZW50IHRoYXQgZWZmaWNpZW50bHkuXHJcbiAgICBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIikge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5Nb250aFZpZXcoZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJ5ZWFyXCIpIHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluWWVhclZpZXcoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluQ2xvY2tWaWV3KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9mb2N1c0FjdGl2ZUNlbGwoKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIHR3byBkYXRlcyByZXByZXNlbnQgdGhlIHNhbWUgdmlldyBpbiB0aGUgY3VycmVudCB2aWV3IG1vZGUgKG1vbnRoIG9yIHllYXIpLiAqL1xyXG4gIHByaXZhdGUgX2lzU2FtZVZpZXcoZGF0ZTE6IEQsIGRhdGUyOiBEKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiA/XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMSkgPT0gdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUyKSAmJlxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUyKSA6XHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMSkgPT0gdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUyKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBwcml2YXRlIF9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5Nb250aFZpZXcoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIC03KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCA3KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBIT01FOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgMSAtIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5EOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLFxyXG4gICAgICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TnVtRGF5c0luTW9udGgodGhpcy5fYWN0aXZlRGF0ZSkgLVxyXG4gICAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5fYWN0aXZlRGF0ZSkpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX1VQOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBldmVudC5hbHRLZXkgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBQQUdFX0RPV046XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgMSkgOlxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICBpZiAodGhpcy5fZGF0ZUZpbHRlckZvclZpZXdzKHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9kYXRlU2VsZWN0ZWQodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiB5ZWFyIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluWWVhclZpZXcoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9wcmV2TW9udGhJblNhbWVDb2wodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fbmV4dE1vbnRoSW5TYW1lQ29sKHRoaXMuX2FjdGl2ZURhdGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEhPTUU6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgIC10aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTkQ6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHModGhpcy5fYWN0aXZlRGF0ZSxcclxuICAgICAgICAgIDExIC0gdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9VUDpcclxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID1cclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCBldmVudC5hbHRLZXkgPyAtMTAgOiAtMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUEFHRV9ET1dOOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPVxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIGV2ZW50LmFsdEtleSA/IDEwIDogMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgdGhpcy5fbW9udGhTZWxlY3RlZCh0aGlzLl9hY3RpdmVEYXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzIG9uIHRoZSBjYWxlbmRhciBib2R5IHdoZW4gY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cclxuICBwcml2YXRlIF9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5DbG9ja1ZpZXcoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jbG9ja1ZpZXcgPT0gXCJob3VyXCIgP1xyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckhvdXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNaW51dGVzKHRoaXMuX2FjdGl2ZURhdGUsIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2Nsb2NrVmlldyA9PSBcImhvdXJcIiA/XHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFySG91cnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpIDpcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNaW51dGVzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICB0aGlzLl90aW1lU2VsZWN0ZWQodGhpcy5fYWN0aXZlRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHRoZSBkYXRlIGZvciB0aGUgbW9udGggdGhhdCBjb21lcyBiZWZvcmUgdGhlIGdpdmVuIG1vbnRoIGluIHRoZSBzYW1lIGNvbHVtbiBpbiB0aGVcclxuICAgKiBjYWxlbmRhciB0YWJsZS5cclxuICAgKi9cclxuICBwcml2YXRlIF9wcmV2TW9udGhJblNhbWVDb2woZGF0ZTogRCk6IEQge1xyXG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IG1vbnRocyB0byBqdW1wIGZvcndhcmQgZ2l2ZW4gdGhhdCB0aGVyZSBhcmUgMiBlbXB0eSBzbG90cyBhdCB0aGUgYmVnaW5uaW5nXHJcbiAgICAvLyBvZiBlYWNoIHllYXIuXHJcbiAgICBjb25zdCBpbmNyZW1lbnQgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDw9IDQgPyAtNSA6XHJcbiAgICAgICh0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpID49IDcgPyAtNyA6IC0xMik7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyhkYXRlLCBpbmNyZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHRoZSBkYXRlIGZvciB0aGUgbW9udGggdGhhdCBjb21lcyBhZnRlciB0aGUgZ2l2ZW4gbW9udGggaW4gdGhlIHNhbWUgY29sdW1uIGluIHRoZVxyXG4gICAqIGNhbGVuZGFyIHRhYmxlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX25leHRNb250aEluU2FtZUNvbChkYXRlOiBEKTogRCB7XHJcbiAgICAvLyBEZXRlcm1pbmUgaG93IG1hbnkgbW9udGhzIHRvIGp1bXAgZm9yd2FyZCBnaXZlbiB0aGF0IHRoZXJlIGFyZSAyIGVtcHR5IHNsb3RzIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIC8vIG9mIGVhY2ggeWVhci5cclxuICAgIGNvbnN0IGluY3JlbWVudCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPD0gNCA/IDcgOlxyXG4gICAgICAodGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA+PSA3ID8gNSA6IDEyKTtcclxuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIGluY3JlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGVuZGFyU3RhdGUoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgXzJkaWdpdChuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXCIwMFwiICsgbikuc2xpY2UoLTIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byBhIHNpbmdsZSBjYWxlbmRhciBjZWxsLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGNhbGVuZGFyIGRhdGEgaW4gYSB0YWJsZS5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiW21hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XVwiLFxyXG4gIHRlbXBsYXRlOiBgPCEtLVxyXG4gIElmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgZmlyc3Qgcm93LCBjcmVhdGUgYSBzZXBhcmF0ZSBsYWJlbCByb3cuIFdlIG1hcmsgdGhpcyByb3cgYXNcclxuICBhcmlhLWhpZGRlbiBiZWNhdXNlIHdlIGRvbid0IHdhbnQgaXQgdG8gYmUgcmVhZCBvdXQgYXMgb25lIG9mIHRoZSB3ZWVrcyBpbiB0aGUgbW9udGguXHJcbi0tPlxyXG48dHIgKm5nSWY9XCJfZmlyc3RSb3dPZmZzZXQgPCBsYWJlbE1pblJlcXVpcmVkQ2VsbHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICA8dGQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbFwiIFthdHRyLmNvbHNwYW5dPVwibnVtQ29sc1wiID57eyBsYWJlbCB9fTwvdGQ+XHJcbjwvdHI+XHJcblxyXG48IS0tIENyZWF0ZSB0aGUgZmlyc3Qgcm93IHNlcGFyYXRlbHkgc28gd2UgY2FuIGluY2x1ZGUgYSBzcGVjaWFsIHNwYWNlciBjZWxsLiAtLT5cclxuPHRyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93czsgbGV0IHJvd0luZGV4ID0gaW5kZXhcIiByb2xlPVwicm93XCI+XHJcbiAgPCEtLVxyXG4gICAgV2UgbWFyayB0aGlzIGNlbGwgYXMgYXJpYS1oaWRkZW4gc28gaXQgZG9lc24ndCBnZXQgcmVhZCBvdXQgYXMgb25lIG9mIHRoZSBkYXlzIGluIHRoZSB3ZWVrLlxyXG4gIC0tPlxyXG4gIDx0ZCAqbmdJZj1cInJvd0luZGV4ID09PSAwICYmIF9maXJzdFJvd09mZnNldFwiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWxcIlxyXG4gICAgICBbYXR0ci5jb2xzcGFuXT1cIl9maXJzdFJvd09mZnNldFwiPlxyXG4gICAge3sgX2ZpcnN0Um93T2Zmc2V0ID49IGxhYmVsTWluUmVxdWlyZWRDZWxscyA/IGxhYmVsIDogJycgfX1cclxuICA8L3RkPlxyXG4gIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBjb2xJbmRleCA9IGluZGV4XCJcclxuICAgICAgcm9sZT1cImdyaWRjZWxsXCJcclxuICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsXCJcclxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxyXG4gICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktYWN0aXZlXT1cIl9pc0FjdGl2ZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS5hcmlhTGFiZWxcIlxyXG4gICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWQgfHwgbnVsbFwiXHJcbiAgICAgIChjbGljayk9XCJfY2VsbENsaWNrZWQoaXRlbSlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnRcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWRdPVwic2VsZWN0ZWRWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS10b2RheV09XCJ0b2RheVZhbHVlID09PSBpdGVtLnZhbHVlXCI+XHJcbiAgICAgIHt7IGl0ZW0uZGlzcGxheVZhbHVlIH19XHJcbiAgICA8L2Rpdj5cclxuICA8L3RkPlxyXG48L3RyPlxyXG5gLFxyXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHl7Zm9udC1zaXplOjEzcHg7bWluLXdpZHRoOjIyNHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbHtwYWRkaW5nOjcuMTQyODYlIDAgNy4xNDI4NiUgNy4xNDI4NiU7aGVpZ2h0OjA7bGluZS1oZWlnaHQ6MDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KTt0ZXh0LWFsaWduOmxlZnR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGx7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTQuMjg1NzElO2hlaWdodDowO2xpbmUtaGVpZ2h0OjA7cGFkZGluZzo3LjE0Mjg2JSAwO3RleHQtYWxpZ246Y2VudGVyO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWR7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1JTtsZWZ0OjUlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6OTAlO2hlaWdodDo5MCU7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXI6Zm9jdXMgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX1bZGlyPXJ0bF0gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWxhYmVse3BhZGRpbmc6MCA3LjE0Mjg2JSAwIDA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCg2cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDZweCk7dGV4dC1hbGlnbjpyaWdodH1gXSxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcIlxyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHkge1xyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWJsZS4gKGUuZy4gXCJKYW4gMjAxN1wiKS4gKi9cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIHJvd3M6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBjb3JyZXNwb25kcyB0byB0b2RheS4gKi9cclxuICBASW5wdXQoKSB0b2RheVZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBmcmVlIGNlbGxzIG5lZWRlZCB0byBmaXQgdGhlIGxhYmVsIGluIHRoZSBmaXJzdCByb3cuICovXHJcbiAgQElucHV0KCkgbGFiZWxNaW5SZXF1aXJlZENlbGxzOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIG51bUNvbHMgPSA3O1xyXG5cclxuICAvKiogV2hldGhlciB0byBhbGxvdyBzZWxlY3Rpb24gb2YgZGlzYWJsZWQgY2VsbHMuICovXHJcbiAgQElucHV0KCkgYWxsb3dEaXNhYmxlZFNlbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIGNlbGwgbnVtYmVyIG9mIHRoZSBhY3RpdmUgY2VsbCBpbiB0aGUgdGFibGUuICovXHJcbiAgQElucHV0KCkgYWN0aXZlQ2VsbCA9IDA7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RGlzYWJsZWRTZWxlY3Rpb24gJiYgIWNlbGwuZW5hYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdChjZWxsLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIHRvIHB1dCBhdCB0aGUgYmVnaW5uaW5nIGZvciB0aGUgZmlyc3Qgcm93LiAqL1xyXG4gIGdldCBfZmlyc3RSb3dPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCAmJiB0aGlzLnJvd3NbMF0ubGVuZ3RoID9cclxuICAgICAgdGhpcy5udW1Db2xzIC0gdGhpcy5yb3dzWzBdLmxlbmd0aCA6IDA7XHJcbiAgfVxyXG5cclxuICBfaXNBY3RpdmVDZWxsKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGxldCBjZWxsTnVtYmVyID0gcm93SW5kZXggKiB0aGlzLm51bUNvbHMgKyBjb2xJbmRleDtcclxuXHJcbiAgICAvLyBBY2NvdW50IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBmaXJzdCByb3cgbWF5IG5vdCBoYXZlIGFzIG1hbnkgY2VsbHMuXHJcbiAgICBpZiAocm93SW5kZXgpIHtcclxuICAgICAgY2VsbE51bWJlciAtPSB0aGlzLl9maXJzdFJvd09mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMT0NLX1JBRElVUyA9IDUwO1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfSU5ORVJfUkFESVVTID0gMjcuNTtcclxuZXhwb3J0IGNvbnN0IENMT0NLX09VVEVSX1JBRElVUyA9IDQxLjI1O1xyXG5leHBvcnQgY29uc3QgQ0xPQ0tfVElDS19SQURJVVMgPSA3LjA4MzM7XHJcblxyXG5leHBvcnQgdHlwZSBDbG9ja1ZpZXcgPSBcImhvdXJcIiB8IFwibWludXRlXCI7XHJcblxyXG4vKipcclxuICogQSBjbG9jayB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrXCIsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZW50ZXJcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmRcIiBbbmdTdHlsZV09XCJfaGFuZFwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staG91cnNcIiBbY2xhc3MuYWN0aXZlXT1cIl9ob3VyVmlld1wiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaG91cnNcIlxyXG4gICAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsXCJcclxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLXNlbGVjdGVkXT1cIl9zZWxlY3RlZEhvdXIgPT0gaXRlbS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcclxuICAgICAgICAgW3N0eWxlLnRvcF09XCJpdGVtLnRvcCsnJSdcIlxyXG4gICAgICAgICBbc3R5bGUubGVmdF09XCJpdGVtLmxlZnQrJyUnXCJcclxuICAgICAgICAgW3N0eWxlLmZvbnRTaXplXT1cIml0ZW0uZm9udFNpemVcIj57eyBpdGVtLmRpc3BsYXlWYWx1ZSB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlc1wiIFtjbGFzcy5hY3RpdmVdPVwiIV9ob3VyVmlld1wiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfbWludXRlc1wiXHJcbiAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGxcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWRdPVwiX3NlbGVjdGVkTWludXRlID09IGl0ZW0udmFsdWVcIlxyXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWRdPVwiIWl0ZW0uZW5hYmxlZFwiXHJcbiAgICAgICAgIFtzdHlsZS50b3BdPVwiaXRlbS50b3ArJyUnXCJcclxuICAgICAgICAgW3N0eWxlLmxlZnRdPVwiaXRlbS5sZWZ0KyclJ1wiPnt7IGl0ZW0uZGlzcGxheVZhbHVlIH19PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21pbi13aWR0aDoyMjRweDttYXJnaW46OHB4O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9ja3twb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDowO3BhZGRpbmctdG9wOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VudGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6MiU7aGVpZ2h0OjIlO21hcmdpbjotMSU7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1oYW5ke3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjFweDttYXJnaW46MCBhdXRvOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpib3R0b207dHJhbnNmb3JtLW9yaWdpbjpib3R0b219Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1oYW5kOjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTRweDtsZWZ0Oi00cHg7d2lkdGg6OHB4O2hlaWdodDo4cHg7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1ob3VycywubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLW1pbnV0ZXN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246MzUwbXM7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yKTt0cmFuc2Zvcm06c2NhbGUoMS4yKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzLmFjdGl2ZSwubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLW1pbnV0ZXMuYWN0aXZle29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlc3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtOnNjYWxlKC44KX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGx7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O3dpZHRoOjE0LjE2NjYlO2hlaWdodDoxNC4xNjY2JTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyLXJhZGl1czo1MCU7YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLXNlbGVjdGVkKTpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVkKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCk7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWR7Y29sb3I6I2ZmZn1gXSxcclxuICBob3N0OiB7XHJcbiAgICBcInJvbGVcIjogXCJjbG9ja1wiLFxyXG4gICAgXCIobW91c2Vkb3duKVwiOiBcIl9oYW5kbGVNb3VzZWRvd24oJGV2ZW50KVwiXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jazxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRvIGRpc3BsYXkgaW4gdGhpcyBjbG9jayB2aWV3LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XHJcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUodmFsdWUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICAgIGlmICghdGhpcy5fYWRhcHRlci5zYW1lTWludXRlKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZURhdGU6IEQ7XHJcblxyXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZDogRCB8IG51bGw7XHJcblxyXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2FkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX21pbkRhdGU6IEQgfCBudWxsO1xyXG5cclxuICBwcml2YXRlIF90aW1lQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG1heERhdGUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcclxuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNsb2NrIHNob3VsZCBiZSBzdGFydGVkIGluIGhvdXIgb3IgbWludXRlIHZpZXcuICovXHJcbiAgQElucHV0KClcclxuICBzZXQgc3RhcnRWaWV3KHZhbHVlOiBDbG9ja1ZpZXcpIHtcclxuICAgIHRoaXMuX2hvdXJWaWV3ID0gdmFsdWUgIT0gXCJtaW51dGVcIjtcclxuICB9XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBELCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICBASW5wdXQoKSB0d2VsdmVob3VyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XHJcblxyXG4gIC8qKiBIb3VycyBhbmQgTWludXRlcyByZXByZXNlbnRpbmcgdGhlIGNsb2NrIHZpZXcuICovXHJcbiAgX2hvdXJzOiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgX21pbnV0ZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNsb2NrIGlzIGluIGhvdXIgdmlldy4gKi9cclxuICBfaG91clZpZXc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBfc2VsZWN0ZWRIb3VyOiBudW1iZXI7XHJcbiAgX3NlbGVjdGVkTWludXRlOiBudW1iZXI7XHJcblxyXG4gIGdldCBfaGFuZCgpOiBhbnkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRIb3VyID0gdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1pbnV0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBsZXQgZGVnID0gMDtcclxuICAgIGxldCByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XHJcbiAgICBpZiAodGhpcy5faG91clZpZXcpIHtcclxuICAgICAgbGV0IG91dGVyID0gdGhpcy5fc2VsZWN0ZWRIb3VyID4gMCAmJiB0aGlzLl9zZWxlY3RlZEhvdXIgPCAxMztcclxuICAgICAgcmFkaXVzID0gb3V0ZXIgPyBDTE9DS19PVVRFUl9SQURJVVMgOiBDTE9DS19JTk5FUl9SQURJVVM7XHJcbiAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XHJcbiAgICAgIH1cclxuICAgICAgZGVnID0gTWF0aC5yb3VuZCh0aGlzLl9zZWxlY3RlZEhvdXIgKiAoMzYwIC8gKDI0IC8gMikpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlZyA9IE1hdGgucm91bmQodGhpcy5fc2VsZWN0ZWRNaW51dGUgKiAoMzYwIC8gNjApKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6IGByb3RhdGUoJHtkZWd9ZGVnKWAsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IGAke3JhZGl1c30lYCxcclxuICAgICAgXCJtYXJnaW4tdG9wXCI6IGAkezUwIC0gcmFkaXVzfSVgXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3VzZU1vdmVMaXN0ZW5lcjogYW55O1xyXG4gIHByaXZhdGUgbW91c2VVcExpc3RlbmVyOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+KSB7XHJcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTW91c2Vtb3ZlKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTW91c2V1cCgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZXMgbW91c2Vkb3duIGV2ZW50cyBvbiB0aGUgY2xvY2sgYm9keS4gKi9cclxuICBfaGFuZGxlTW91c2Vkb3duKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX3RpbWVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldFRpbWUoZXZlbnQpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNlbW92ZShldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRUaW1lKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVNb3VzZXVwKCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xyXG4gICAgaWYgKHRoaXMuX3RpbWVDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgY2xvY2sgdmlldy4gKi9cclxuICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgdGhpcy5faG91cnMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX21pbnV0ZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICBsZXQgaG91ck5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRIb3VyTmFtZXMoKTtcclxuICAgIGxldCBtaW51dGVOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlTmFtZXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGhvdXJOYW1lcy5sZW5ndGggLyAyKSArIDE7IGkrKykge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgbGV0IHJhZGl1cyA9IENMT0NLX09VVEVSX1JBRElVUztcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIGkgKyAxLCAwKTtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9XHJcbiAgICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xyXG4gICAgICAgIHRoaXMuX2hvdXJzLnB1c2goe1xyXG4gICAgICAgICAgdmFsdWU6IGksXHJcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBob3VyTmFtZXNbaV0sXHJcbiAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxyXG4gICAgICAgICAgdG9wOiBDTE9DS19SQURJVVMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVMsXHJcbiAgICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VyTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xyXG4gICAgICAgIGxldCBvdXRlciA9IGkgPiAwICYmIGkgPCAxMyxcclxuICAgICAgICAgIHJhZGl1cyA9IG91dGVyID8gQ0xPQ0tfT1VURVJfUkFESVVTIDogQ0xPQ0tfSU5ORVJfUkFESVVTO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxyXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgaSwgMCk7XHJcbiAgICAgICAgbGV0IGVuYWJsZWQgPVxyXG4gICAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxyXG4gICAgICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKSAmJlxyXG4gICAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5IT1VSKSk7XHJcbiAgICAgICAgdGhpcy5faG91cnMucHVzaCh7XHJcbiAgICAgICAgICB2YWx1ZTogaSxcclxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IGhvdXJOYW1lc1tpXSxcclxuICAgICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXHJcbiAgICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICAgIGZvbnRTaXplOiBpID4gMCAmJiBpIDwgMTMgPyBcIlwiIDogXCI4MCVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW51dGVOYW1lcy5sZW5ndGg7IGkgKz0gNSkge1xyXG4gICAgICBsZXQgcmFkaWFuID0gaSAvIDMwICogTWF0aC5QSTtcclxuICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSwgaSk7XHJcbiAgICAgIGxldCBlbmFibGVkID1cclxuICAgICAgICAoIXRoaXMubWluRGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXHJcbiAgICAgICAgKCF0aGlzLm1heERhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA8PSAwKSAmJlxyXG4gICAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuTUlOVVRFKSk7XHJcbiAgICAgIHRoaXMuX21pbnV0ZXMucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IGksXHJcbiAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogbWludXRlTmFtZXNbaV0sXHJcbiAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcclxuICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiBDTE9DS19PVVRFUl9SQURJVVMgLSBDTE9DS19USUNLX1JBRElVUyxcclxuICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogQ0xPQ0tfT1VURVJfUkFESVVTIC0gQ0xPQ0tfVElDS19SQURJVVNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgVGltZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0VGltZShldmVudDogYW55KSB7XHJcbiAgICBsZXQgdHJpZ2dlciA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGxldCB0cmlnZ2VyUmVjdCA9IHRyaWdnZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgd2lkdGggPSB0cmlnZ2VyLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IHRyaWdnZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHBhZ2VYID0gZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCA/IGV2ZW50LnBhZ2VYIDogZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgIGxldCBwYWdlWSA9IGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICBsZXQgeCA9ICh3aWR0aCAvIDIpIC0gKHBhZ2VYIC0gdHJpZ2dlclJlY3QubGVmdCAtIHdpbmRvdy5wYWdlWE9mZnNldCk7XHJcbiAgICBsZXQgeSA9IChoZWlnaHQgLyAyKSAtIChwYWdlWSAtIHRyaWdnZXJSZWN0LnRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICBsZXQgcmFkaWFuID0gTWF0aC5hdGFuMigteCwgeSk7XHJcbiAgICBsZXQgdW5pdCA9IE1hdGguUEkgLyAodGhpcy5faG91clZpZXcgPyA2IDogKHRoaXMuaW50ZXJ2YWwgPyAoMzAgLyB0aGlzLmludGVydmFsKSA6IDMwKSk7XHJcbiAgICBsZXQgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgIGxldCBvdXRlciA9IHRoaXMuX2hvdXJWaWV3ICYmIHogPiAoKHdpZHRoICogKENMT0NLX09VVEVSX1JBRElVUyAvIDEwMCkpICtcclxuICAgICAgKHdpZHRoICogKENMT0NLX0lOTkVSX1JBRElVUyAvIDEwMCkpKSAvIDI7XHJcblxyXG4gICAgaWYgKHJhZGlhbiA8IDApIHtcclxuICAgICAgcmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xyXG5cclxuICAgIGxldCBkYXRlO1xyXG4gICAgaWYgKHRoaXMuX2hvdXJWaWV3KSB7XHJcbiAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDEyKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gb3V0ZXIgPyAodmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlKSA6IHZhbHVlID09PSAwID8gMCA6IHZhbHVlICsgMTI7XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB2YWx1ZSwgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgIHZhbHVlICo9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xyXG4gICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgfVxyXG4gICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhbXBlZCA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKGRhdGUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcclxuICAgIGlmIChkYXRlID09PSBjbGFtcGVkKSB7XHJcbiAgICAgIHRoaXMuX3RpbWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gY2xhbXBlZDtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2JpZGlcIjtcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5Q29uZmlnLFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgUG9zaXRpb25TdHJhdGVneVxyXG59IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BvcnRhbFwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQge1xyXG4gIE1hdERpYWxvZyxcclxuICBNYXREaWFsb2dSZWZcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWlucHV0XCI7XHJcblxyXG4vKiogVXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZWFjaCBkYXRlcGlja2VyIGluc3RhbmNlLiAqL1xyXG5sZXQgZGF0ZXRpbWVwaWNrZXJVaWQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB1c2VkIGFzIHRoZSBjb250ZW50IGZvciB0aGUgZGF0ZXBpY2tlciBkaWFsb2cgYW5kIHBvcHVwLiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIHVzaW5nXHJcbiAqIE1hdENhbGVuZGFyIGRpcmVjdGx5IGFzIHRoZSBjb250ZW50IHNvIHdlIGNhbiBjb250cm9sIHRoZSBpbml0aWFsIGZvY3VzLiBUaGlzIGFsc28gZ2l2ZXMgdXMgYVxyXG4gKiBwbGFjZSB0byBwdXQgYWRkaXRpb25hbCBmZWF0dXJlcyBvZiB0aGUgcG9wdXAgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIGNhbGVuZGFyIGl0c2VsZiBpbiB0aGVcclxuICogZnV0dXJlLiAoZS5nLiBjb25maXJtYXRpb24gYnV0dG9ucykuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50XCIsXHJcbiAgdGVtcGxhdGU6IGA8bWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIiBjZGtUcmFwRm9jdXNcclxuICAgICAgICAgICAgICBbaWRdPVwiZGF0ZXRpbWVwaWNrZXIuaWRcIlxyXG4gICAgICAgICAgICAgIFthdHRyLm1vZGVdPVwiZGF0ZXRpbWVwaWNrZXIubW9kZVwiXHJcbiAgICAgICAgICAgICAgW3N0YXJ0Vmlld109XCJkYXRldGltZXBpY2tlci5zdGFydFZpZXdcIlxyXG4gICAgICAgICAgICAgIFt0eXBlXT1cImRhdGV0aW1lcGlja2VyLnR5cGVcIlxyXG4gICAgICAgICAgICAgIFt0aW1lSW50ZXJ2YWxdPVwiZGF0ZXRpbWVwaWNrZXIudGltZUludGVydmFsXCJcclxuICAgICAgICAgICAgICBbbWluRGF0ZV09XCJkYXRldGltZXBpY2tlci5fbWluRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW21heERhdGVdPVwiZGF0ZXRpbWVwaWNrZXIuX21heERhdGVcIlxyXG4gICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGV0aW1lcGlja2VyLl9kYXRlRmlsdGVyXCJcclxuICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiZGF0ZXRpbWVwaWNrZXIuX3NlbGVjdGVkXCJcclxuICAgICAgICAgICAgICBbc3RhcnRBdF09XCJkYXRldGltZXBpY2tlci5zdGFydEF0XCJcclxuICAgICAgICAgICAgICBbY29uZmlybUJ1dHRvbkxhYmVsXT1cImRhdGV0aW1lcGlja2VyLmNvbmZpcm1CdXR0b25MYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2NhbmNlbEJ1dHRvbkxhYmVsXT1cImRhdGV0aW1lcGlja2VyLmNhbmNlbEJ1dHRvbkxhYmVsXCJcclxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiZGF0ZXRpbWVwaWNrZXIuX3NlbGVjdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKVwiPlxyXG48L21hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhcj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50e2JveC1zaGFkb3c6MCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtvdmVyZmxvdzpoaWRkZW59Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhcnt3aWR0aDoyOTZweDtoZWlnaHQ6YXV0b30ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9bGFuZHNjYXBlXXt3aWR0aDo0NDZweDtoZWlnaHQ6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo0ODBweCl7Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9de3dpZHRoOjQ0NnB4O2hlaWdodDphdXRvfX0ubWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnQtdG91Y2h7Ym94LXNoYWRvdzowIDAgMCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTQpLDAgMCAwIDAgcmdiYSgwLDAsMCwuMTIpO2Rpc3BsYXk6YmxvY2s7Ym94LXNoYWRvdzowIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciwuY2RrLW92ZXJsYXktY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi40OH0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjYpfS5tYXQtZGF0ZXRpbWVwaWNrZXItZGlhbG9nIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntwYWRkaW5nOjB9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50XCIsXHJcbiAgICBcIltjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudC10b3VjaF1cIjogXCJkYXRldGltZXBpY2tlcj8udG91Y2hVaVwiLFxyXG4gICAgXCIoa2V5ZG93bilcIjogXCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCJcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIGRhdGV0aW1lcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcclxuXHJcbiAgQFZpZXdDaGlsZChNYXREYXRldGltZXBpY2tlckNhbGVuZGFyKSBfY2FsZW5kYXI6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXI8RD47XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMuX2NhbGVuZGFyLl9mb2N1c0FjdGl2ZUNlbGwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMga2V5ZG93biBldmVudCBvbiBkYXRlcGlja2VyIGNvbnRlbnQuXHJcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudC5cclxuICAgKi9cclxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSkge1xyXG4gICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLmNsb3NlKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyXCIsXHJcbiAgZXhwb3J0QXM6IFwibWF0RGF0ZXRpbWVwaWNrZXJcIixcclxuICB0ZW1wbGF0ZTogXCJcIixcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlcjxEPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIFRoZSBkYXRlIHRvIG9wZW4gdGhlIGNhbGVuZGFyIHRvIGluaXRpYWxseS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBzdGFydEF0KCk6IEQgfCBudWxsIHtcclxuICAgIC8vIElmIGFuIGV4cGxpY2l0IHN0YXJ0QXQgaXMgc2V0IHdlIHN0YXJ0IHRoZXJlLCBvdGhlcndpc2Ugd2Ugc3RhcnQgYXQgd2hhdGV2ZXIgdGhlIGN1cnJlbnRseVxyXG4gICAgLy8gc2VsZWN0ZWQgdmFsdWUgaXMuXHJcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRBdCB8fCAodGhpcy5fZGF0ZXBpY2tlcklucHV0ID8gdGhpcy5fZGF0ZXBpY2tlcklucHV0LnZhbHVlIDogbnVsbCk7XHJcbiAgfVxyXG5cclxuICBzZXQgc3RhcnRBdChkYXRlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbChkYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0QXQ6IEQgfCBudWxsO1xyXG5cclxuICAvKiogVGhlIHZpZXcgdGhhdCB0aGUgY2FsZW5kYXIgc2hvdWxkIHN0YXJ0IGluLiAqL1xyXG4gIEBJbnB1dCgpIHN0YXJ0VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XHJcbiAgQElucHV0KCkgbW9kZTogXCJhdXRvXCIgfCBcInBvcnRyYWl0XCIgfCBcImxhbmRzY2FwZVwiID0gXCJhdXRvXCI7XHJcbiAgQElucHV0KCkgdGltZUludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBvcGVuT25Gb2N1cygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX29wZW5PbkZvY3VzOyB9XHJcbiAgc2V0IG9wZW5PbkZvY3VzKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX29wZW5PbkZvY3VzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxyXG4gIHByaXZhdGUgX29wZW5PbkZvY3VzOiBib29sZWFuO1xyXG5cclxuICBfaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBpZiAoIXRoaXMub3BlbmVkICYmIHRoaXMub3Blbk9uRm9jdXMpIHtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdHlwZSh2YWx1ZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8IFwiZGF0ZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBVSSBpcyBpbiB0b3VjaCBtb2RlLiBJbiB0b3VjaCBtb2RlIHRoZSBjYWxlbmRhciBvcGVucyBpbiBhIGRpYWxvZyByYXRoZXJcclxuICAgKiB0aGFuIGEgcG9wdXAgYW5kIGVsZW1lbnRzIGhhdmUgbW9yZSBwYWRkaW5nIHRvIGFsbG93IGZvciBiaWdnZXIgdG91Y2ggdGFyZ2V0cy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b3VjaFVpKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoVWk7XHJcbiAgfVxyXG5cclxuICBzZXQgdG91Y2hVaSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdG91Y2hVaSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90b3VjaFVpID0gZmFsc2U7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBkYXRlcGlja2VyIHBvcC11cCBzaG91bGQgYmUgZGlzYWJsZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQgP1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZENoYW5nZS5uZXh0KG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBuZXcgc2VsZWN0ZWQgZGF0ZSB3aGVuIHNlbGVjdGVkIGRhdGUgY2hhbmdlcy5cclxuICAgKiBAZGVwcmVjYXRlZCBTd2l0Y2ggdG8gdGhlIGBkYXRlQ2hhbmdlYCBhbmQgYGRhdGVJbnB1dGAgYmluZGluZyBvbiB0aGUgaW5wdXQgZWxlbWVudC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogQ2xhc3NlcyB0byBiZSBwYXNzZWQgdG8gdGhlIGRhdGUgcGlja2VyIHBhbmVsLiBTdXBwb3J0cyB0aGUgc2FtZSBzeW50YXggYXMgYG5nQ2xhc3NgLiAqL1xyXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICBASW5wdXQoKSBjb25maXJtQnV0dG9uTGFiZWwgPSAnQ29uZmlybSc7XHJcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uTGFiZWwgPSAnQ2FuY2VsJztcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaGFzIGJlZW4gb3BlbmVkLiAqL1xyXG4gIEBPdXRwdXQoXCJvcGVuZWRcIikgb3BlbmVkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIGNsb3NlZC4gKi9cclxuICBAT3V0cHV0KFwiY2xvc2VkXCIpIGNsb3NlZFN0cmVhbTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgb3Blbi4gKi9cclxuICBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBpZCBmb3IgdGhlIGRhdGVwaWNrZXIgY2FsZW5kYXIuICovXHJcbiAgaWQgPSBgbWF0LWRhdGV0aW1lcGlja2VyLSR7ZGF0ZXRpbWVwaWNrZXJVaWQrK31gO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIGdldCBfc2VsZWN0ZWQoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkU2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgX3NlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fdmFsaWRTZWxlY3RlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsaWRTZWxlY3RlZDogRCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIGdldCBfbWluRGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5taW47XHJcbiAgfVxyXG5cclxuICAvKiogVGhlIG1heGltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xyXG4gIGdldCBfbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5tYXg7XHJcbiAgfVxyXG5cclxuICBnZXQgX2RhdGVGaWx0ZXIoKTogKGRhdGU6IEQgfCBudWxsLCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQuX2RhdGVGaWx0ZXI7XHJcbiAgfVxyXG5cclxuICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIG92ZXJsYXkgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgcG9wdXAuICovXHJcbiAgcHJpdmF0ZSBfcG9wdXBSZWY6IE92ZXJsYXlSZWY7XHJcblxyXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nIHdoZW4gdGhlIGNhbGVuZGFyIGlzIG9wZW5lZCBhcyBhIGRpYWxvZy4gKi9cclxuICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+IHwgbnVsbDtcclxuXHJcbiAgLyoqIEEgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIGNhbGVuZGFyIGZvciB0aGlzIGRhdGVwaWNrZXIuICovXHJcbiAgcHJpdmF0ZSBfY2FsZW5kYXJQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+O1xyXG5cclxuICAvKiogVGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIGRhdGVwaWNrZXIgd2FzIG9wZW5lZC4gKi9cclxuICBwcml2YXRlIF9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW46IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2lucHV0U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAvKiogVGhlIGlucHV0IGVsZW1lbnQgdGhpcyBkYXRlcGlja2VyIGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cclxuICBfZGF0ZXBpY2tlcklucHV0OiBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+O1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBkaXNhYmxlZC4gKi9cclxuICBfZGlzYWJsZWRDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kpIHByaXZhdGUgX3Njcm9sbFN0cmF0ZWd5LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZUFkYXB0ZXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9kaXNhYmxlZENoYW5nZS5jb21wbGV0ZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLl9wb3B1cFJlZikge1xyXG4gICAgICB0aGlzLl9wb3B1cFJlZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogU2VsZWN0cyB0aGUgZ2l2ZW4gZGF0ZSAqL1xyXG4gIF9zZWxlY3QoZGF0ZTogRCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl9zZWxlY3RlZDtcclxuICAgIHRoaXMuX3NlbGVjdGVkID0gZGF0ZTtcclxuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGV0aW1lKG9sZFZhbHVlLCB0aGlzLl9zZWxlY3RlZCkpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2VkLmVtaXQoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBhbiBpbnB1dCB3aXRoIHRoaXMgZGF0ZXBpY2tlci5cclxuICAgKiBAcGFyYW0gaW5wdXQgVGhlIGRhdGVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgX3JlZ2lzdGVySW5wdXQoaW5wdXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9kYXRlcGlja2VySW5wdXQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJBIE1hdERhdGVwaWNrZXIgY2FuIG9ubHkgYmUgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIGlucHV0LlwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA9IGlucHV0O1xyXG4gICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24gPVxyXG4gICAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQuX3ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IEQgfCBudWxsKSA9PiB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhci4gKi9cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3BlbmVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VySW5wdXQpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gb3BlbiBhbiBNYXREYXRlcGlja2VyIHdpdGggbm8gYXNzb2NpYXRlZCBpbnB1dC5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZG9jdW1lbnQpIHtcclxuICAgICAgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuID0gdGhpcy5fZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvdWNoVWkgPyB0aGlzLl9vcGVuQXNEaWFsb2coKSA6IHRoaXMuX29wZW5Bc1BvcHVwKCk7XHJcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICB0aGlzLm9wZW5lZFN0cmVhbS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xvc2UgdGhlIGNhbGVuZGFyLiAqL1xyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fcG9wdXBSZWYgJiYgdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLl9wb3B1cFJlZi5kZXRhY2goKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcclxuICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY2FsZW5kYXJQb3J0YWwgJiYgdGhpcy5fY2FsZW5kYXJQb3J0YWwuaXNBdHRhY2hlZCkge1xyXG4gICAgICB0aGlzLl9jYWxlbmRhclBvcnRhbC5kZXRhY2goKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wbGV0ZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAvLyBUaGUgYF9vcGVuZWRgIGNvdWxkJ3ZlIGJlZW4gcmVzZXQgYWxyZWFkeSBpZlxyXG4gICAgICAvLyB3ZSBnb3QgdHdvIGV2ZW50cyBpbiBxdWljayBzdWNjZXNzaW9uLlxyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xvc2VkU3RyZWFtLmVtaXQoKTtcclxuICAgICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gJiZcclxuICAgICAgdHlwZW9mIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIC8vIEJlY2F1c2UgSUUgbW92ZXMgZm9jdXMgYXN5bmNocm9ub3VzbHksIHdlIGNhbid0IGNvdW50IG9uIGl0IGJlaW5nIHJlc3RvcmVkIGJlZm9yZSB3ZSd2ZVxyXG4gICAgICAvLyBtYXJrZWQgdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XHJcbiAgICAgIC8vIHdlJ3JlIHJlZm9jdXNpbmcgb3BlbnMgdGhlIGRhdGVwaWNrZXIgb24gZm9jdXMsIHRoZSB1c2VyIGNvdWxkIGJlIHN0dWNrIHdpdGggbm90IGJlaW5nXHJcbiAgICAgIC8vIGFibGUgdG8gY2xvc2UgdGhlIGNhbGVuZGFyIGF0IGFsbC4gV2Ugd29yayBhcm91bmQgaXQgYnkgbWFraW5nIHRoZSBsb2dpYywgdGhhdCBtYXJrc1xyXG4gICAgICAvLyB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQsIGFzeW5jIGFzIHdlbGwuXHJcbiAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cygpO1xyXG4gICAgICBzZXRUaW1lb3V0KGNvbXBsZXRlQ2xvc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcGxldGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyIGFzIGEgZGlhbG9nLiAqL1xyXG4gIHByaXZhdGUgX29wZW5Bc0RpYWxvZygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RpYWxvZ1JlZiA9IHRoaXMuX2RpYWxvZy5vcGVuKE1hdERhdGV0aW1lcGlja2VyQ29udGVudCwge1xyXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6IFwibHRyXCIsXHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIHBhbmVsQ2xhc3M6IFwibWF0LWRhdGV0aW1lcGlja2VyLWRpYWxvZ1wiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgdGhpcy5fZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGV0aW1lcGlja2VyID0gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBjYWxlbmRhciBhcyBhIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX29wZW5Bc1BvcHVwKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhclBvcnRhbCkge1xyXG4gICAgICB0aGlzLl9jYWxlbmRhclBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8TWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+PihNYXREYXRldGltZXBpY2tlckNvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYpIHtcclxuICAgICAgdGhpcy5fY3JlYXRlUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+PiA9XHJcbiAgICAgICAgdGhpcy5fcG9wdXBSZWYuYXR0YWNoKHRoaXMuX2NhbGVuZGFyUG9ydGFsKTtcclxuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGV0aW1lcGlja2VyID0gdGhpcztcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb25jZSB0aGUgY2FsZW5kYXIgaGFzIHJlbmRlcmVkLlxyXG4gICAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvcHVwUmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmVhdGUgdGhlIHBvcHVwLiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVBvcHVwKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCksXHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBiYWNrZHJvcENsYXNzOiBcIm1hdC1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogXCJsdHJcIixcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX3Njcm9sbFN0cmF0ZWd5KCksXHJcbiAgICAgIHBhbmVsQ2xhc3M6IFwibWF0LWRhdGV0aW1lcGlja2VyLXBvcHVwXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwUmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cCBQb3NpdGlvblN0cmF0ZWd5LiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpOiBQb3NpdGlvblN0cmF0ZWd5IHtcclxuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5nZXRQb3B1cENvbm5lY3Rpb25FbGVtZW50UmVmKCksXHJcbiAgICAgICAge29yaWdpblg6IFwic3RhcnRcIiwgb3JpZ2luWTogXCJib3R0b21cIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcInN0YXJ0XCIsIG92ZXJsYXlZOiBcInRvcFwifVxyXG4gICAgICApXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7b3JpZ2luWDogXCJzdGFydFwiLCBvcmlnaW5ZOiBcInRvcFwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwic3RhcnRcIiwgb3ZlcmxheVk6IFwiYm90dG9tXCJ9XHJcbiAgICAgIClcclxuICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxyXG4gICAgICAgIHtvcmlnaW5YOiBcImVuZFwiLCBvcmlnaW5ZOiBcImJvdHRvbVwifSxcclxuICAgICAgICB7b3ZlcmxheVg6IFwiZW5kXCIsIG92ZXJsYXlZOiBcInRvcFwifVxyXG4gICAgICApXHJcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcclxuICAgICAgICB7b3JpZ2luWDogXCJlbmRcIiwgb3JpZ2luWTogXCJ0b3BcIn0sXHJcbiAgICAgICAge292ZXJsYXlYOiBcImVuZFwiLCBvdmVybGF5WTogXCJib3R0b21cIn1cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xyXG5pbXBvcnQgeyBET1dOX0FSUk9XIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9rZXljb2Rlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG4gIFZhbGlkYXRvckZuLFxyXG4gIFZhbGlkYXRvcnNcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBNQVRfREFURVRJTUVfRk9STUFUUyxcclxuICBNYXREYXRldGltZUZvcm1hdHNcclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1mb3JtYXRzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcblxyXG5leHBvcnQgY29uc3QgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfREFURVRJTUVQSUNLRVJfVkFMSURBVE9SUzogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB1c2VkIGZvciBkYXRlcGlja2VyIGlucHV0IGFuZCBjaGFuZ2UgZXZlbnRzLiBXZSBkb24ndCBhbHdheXMgaGF2ZSBhY2Nlc3MgdG8gYSBuYXRpdmVcclxuICogaW5wdXQgb3IgY2hhbmdlIGV2ZW50IGJlY2F1c2UgdGhlIGV2ZW50IG1heSBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJ5IHRoZSB1c2VyIGNsaWNraW5nIG9uIHRoZVxyXG4gKiBjYWxlbmRhciBwb3B1cC4gRm9yIGNvbnNpc3RlbmN5LCB3ZSBhbHdheXMgdXNlIE1hdERhdGVwaWNrZXJJbnB1dEV2ZW50IGluc3RlYWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50PEQ+IHtcclxuICAvKiogVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHRhcmdldCBkYXRlcGlja2VyIGlucHV0LiAqL1xyXG4gIHZhbHVlOiBEIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRhcmdldDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPiwgcHVibGljIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50YXJnZXQudmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogRGlyZWN0aXZlIHVzZWQgdG8gY29ubmVjdCBhbiBpbnB1dCB0byBhIE1hdERhdGVwaWNrZXIuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcImlucHV0W21hdERhdGV0aW1lcGlja2VyXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTElEQVRPUlMsXHJcbiAgICB7cHJvdmlkZTogTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dH0sXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICBcIlthdHRyLmFyaWEtaGFzcG9wdXBdXCI6IFwidHJ1ZVwiLFxyXG4gICAgXCJbYXR0ci5hcmlhLW93bnNdXCI6IFwiKF9kYXRlcGlja2VyPy5vcGVuZWQgJiYgX2RhdGVwaWNrZXIuaWQpIHx8IG51bGxcIixcclxuICAgIFwiW2F0dHIubWluXVwiOiBcIm1pbiA/IF9kYXRlQWRhcHRlci50b0lzbzg2MDEobWluKSA6IG51bGxcIixcclxuICAgIFwiW2F0dHIubWF4XVwiOiBcIm1heCA/IF9kYXRlQWRhcHRlci50b0lzbzg2MDEobWF4KSA6IG51bGxcIixcclxuICAgIFwiW2Rpc2FibGVkXVwiOiBcImRpc2FibGVkXCIsXHJcbiAgICBcIihmb2N1cylcIjogXCJfZGF0ZXBpY2tlci5faGFuZGxlRm9jdXMoKVwiLFxyXG4gICAgXCIoaW5wdXQpXCI6IFwiX29uSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIixcclxuICAgIFwiKGNoYW5nZSlcIjogXCJfb25DaGFuZ2UoKVwiLFxyXG4gICAgXCIoYmx1cilcIjogXCJfb25CbHVyKClcIixcclxuICAgIFwiKGtleWRvd24pXCI6IFwiX29uS2V5ZG93bigkZXZlbnQpXCJcclxuICB9LFxyXG4gIGV4cG9ydEFzOiBcIm1hdERhdGVwaWNrZXJJbnB1dFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSxcclxuICBWYWxpZGF0b3Ige1xyXG4gIC8qKiBUaGUgZGF0ZXBpY2tlciB0aGF0IHRoaXMgaW5wdXQgaXMgYXNzb2NpYXRlZCB3aXRoLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1hdERhdGV0aW1lcGlja2VyKHZhbHVlOiBNYXREYXRldGltZXBpY2tlcjxEPikge1xyXG4gICAgdGhpcy5yZWdpc3RlckRhdGVwaWNrZXIodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX2RhdGVwaWNrZXI6IE1hdERhdGV0aW1lcGlja2VyPEQ+O1xyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRGF0ZXBpY2tlcih2YWx1ZTogTWF0RGF0ZXRpbWVwaWNrZXI8RD4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuX3JlZ2lzdGVySW5wdXQodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbWF0RGF0ZXBpY2tlckZpbHRlcihmaWx0ZXI6IChkYXRlOiBEIHwgbnVsbCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kYXRlRmlsdGVyID0gZmlsdGVyO1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIF9kYXRlRmlsdGVyOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogRCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLl9sYXN0VmFsdWVWYWxpZCA9ICF2YWx1ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKHZhbHVlKTtcclxuICAgIHZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcclxuICAgIGNvbnN0IG9sZERhdGUgPSB0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2Zvcm1hdFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAvLyB1c2UgdGltZW91dCB0byBlbnN1cmUgdGhlIGRhdGV0aW1lcGlja2VyIGlzIGluc3RhbnRpYXRlZCBhbmQgd2UgZ2V0IHRoZSBjb3JyZWN0IGZvcm1hdFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGV0aW1lKG9sZERhdGUsIHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGlzcGxheUZvcm1hdCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5fZGF0ZXBpY2tlci50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xyXG4gICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRldGltZUlucHV0O1xyXG4gICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LnRpbWVJbnB1dDtcclxuICAgICAgY2FzZSBcIm1vbnRoXCI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhJbnB1dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFyc2VGb3JtYXQoKSB7XHJcbiAgICBsZXQgcGFyc2VGb3JtYXQ7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLl9kYXRlcGlja2VyLnR5cGUpIHtcclxuICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRldGltZUlucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UudGltZUlucHV0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibW9udGhcIjpcclxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLm1vbnRoSW5wdXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcnNlRm9ybWF0KSB7XHJcbiAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UuZGF0ZUlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJzZUZvcm1hdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtaW5pbXVtIHZhbGlkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluKCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9taW47XHJcbiAgfVxyXG5cclxuICBzZXQgbWluKHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWluID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWluOiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFRoZSBtYXhpbXVtIHZhbGlkIGRhdGUuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgbWF4KCk6IEQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXg7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4KHZhbHVlOiBEIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fbWF4ID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbWF4OiBEIHwgbnVsbDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXItaW5wdXQgaXMgZGlzYWJsZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLl9kaXNhYmxlZENoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIGBjaGFuZ2VgIGV2ZW50IGlzIGZpcmVkIG9uIHRoaXMgYDxpbnB1dD5gLiAqL1xyXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQ8RD4+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIGFuIGBpbnB1dGAgZXZlbnQgaXMgZmlyZWQgb24gdGhpcyBgPGlucHV0PmAuICovXHJcbiAgQE91dHB1dCgpIGRhdGVJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50PEQ+PigpO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAoZWl0aGVyIGR1ZSB0byB1c2VyIGlucHV0IG9yIHByb2dyYW1tYXRpYyBjaGFuZ2UpLiAqL1xyXG4gIF92YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RCB8IG51bGw+KCk7XHJcblxyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBoYXMgY2hhbmdlZCAqL1xyXG4gIF9kaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgX29uVG91Y2hlZCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2N2YU9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbGlkYXRvck9uQ2hhbmdlID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgcHJpdmF0ZSBfbG9jYWxlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHdoZXRoZXIgdGhlIGlucHV0IHBhcnNlcy4gKi9cclxuICBwcml2YXRlIF9wYXJzZVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RWYWx1ZVZhbGlkID9cclxuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJQYXJzZVwiOiB7XCJ0ZXh0XCI6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZX19O1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgbWluIGRhdGUuICovXHJcbiAgcHJpdmF0ZSBfbWluVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUoY29udHJvbC52YWx1ZSkpO1xyXG4gICAgcmV0dXJuICghdGhpcy5taW4gfHwgIWNvbnRyb2xWYWx1ZSB8fFxyXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZXRpbWUodGhpcy5taW4sIGNvbnRyb2xWYWx1ZSkgPD0gMCkgP1xyXG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlck1pblwiOiB7XCJtaW5cIjogdGhpcy5taW4sIFwiYWN0dWFsXCI6IGNvbnRyb2xWYWx1ZX19O1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgbWF4IGRhdGUuICovXHJcbiAgcHJpdmF0ZSBfbWF4VmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUoY29udHJvbC52YWx1ZSkpO1xyXG4gICAgcmV0dXJuICghdGhpcy5tYXggfHwgIWNvbnRyb2xWYWx1ZSB8fFxyXG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZXRpbWUodGhpcy5tYXgsIGNvbnRyb2xWYWx1ZSkgPj0gMCkgP1xyXG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlck1heFwiOiB7XCJtYXhcIjogdGhpcy5tYXgsIFwiYWN0dWFsXCI6IGNvbnRyb2xWYWx1ZX19O1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgZGF0ZSBmaWx0ZXIuICovXHJcbiAgcHJpdmF0ZSBfZmlsdGVyVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUoY29udHJvbC52YWx1ZSkpO1xyXG4gICAgcmV0dXJuICF0aGlzLl9kYXRlRmlsdGVyIHx8ICFjb250cm9sVmFsdWUgfHwgdGhpcy5fZGF0ZUZpbHRlcihjb250cm9sVmFsdWUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5EQVRFKSA/XHJcbiAgICAgIG51bGwgOiB7XCJtYXREYXRlcGlja2VyRmlsdGVyXCI6IHRydWV9O1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoZSBjb21iaW5lZCBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGlzIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm4gfCBudWxsID1cclxuICAgIFZhbGlkYXRvcnMuY29tcG9zZShcclxuICAgICAgW3RoaXMuX3BhcnNlVmFsaWRhdG9yLCB0aGlzLl9taW5WYWxpZGF0b3IsIHRoaXMuX21heFZhbGlkYXRvciwgdGhpcy5fZmlsdGVyVmFsaWRhdG9yXSk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBsYXN0IHZhbHVlIHNldCBvbiB0aGUgaW5wdXQgd2FzIHZhbGlkLiAqL1xyXG4gIHByaXZhdGUgX2xhc3RWYWx1ZVZhbGlkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHVibGljIF9kYXRlQWRhcHRlcjogRGF0ZXRpbWVBZGFwdGVyPEQ+LFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUFUX0RBVEVUSU1FX0ZPUk1BVFMpIHByaXZhdGUgX2RhdGVGb3JtYXRzOiBNYXREYXRldGltZUZvcm1hdHMsXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQpIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiTUFUX0RBVEVUSU1FX0ZPUk1BVFNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5ZWQgZGF0ZSB3aGVuIHRoZSBsb2NhbGUgY2hhbmdlcy5cclxuICAgIHRoaXMuX2xvY2FsZVN1YnNjcmlwdGlvbiA9IF9kYXRlQWRhcHRlci5sb2NhbGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcikge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb25cclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclN1YnNjcmlwdGlvbiA9IHRoaXMuX2RhdGVwaWNrZXIuc2VsZWN0ZWRDaGFuZ2VkLnN1YnNjcmliZSgoc2VsZWN0ZWQ6IEQpID0+IHtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlKHNlbGVjdGVkKTtcclxuICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlSW5wdXQuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fbG9jYWxlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGVsZW1lbnQgdGhhdCB0aGUgZGF0ZXBpY2tlciBwb3B1cCBzaG91bGQgYmUgY29ubmVjdGVkIHRvLlxyXG4gICAqIEByZXR1cm4gVGhlIGVsZW1lbnQgdG8gY29ubmVjdCB0aGUgcG9wdXAgdG8uXHJcbiAgICovXHJcbiAgZ2V0UG9wdXBDb25uZWN0aW9uRWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtRmllbGQgPyB0aGlzLl9mb3JtRmllbGQudW5kZXJsaW5lUmVmIDogdGhpcy5fZWxlbWVudFJlZjtcclxuICB9XHJcblxyXG4gIC8vIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N2YU9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIF9vbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmIChldmVudC5hbHRLZXkgJiYgZXZlbnQua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbklucHV0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGxldCBkYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIucGFyc2UodmFsdWUsIHRoaXMuZ2V0UGFyc2VGb3JtYXQoKSk7XHJcbiAgICB0aGlzLl9sYXN0VmFsdWVWYWxpZCA9ICFkYXRlIHx8IHRoaXMuX2RhdGVBZGFwdGVyLmlzVmFsaWQoZGF0ZSk7XHJcbiAgICBkYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKGRhdGUpO1xyXG4gICAgdGhpcy5fdmFsdWUgPSBkYXRlO1xyXG4gICAgdGhpcy5fY3ZhT25DaGFuZ2UoZGF0ZSk7XHJcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gICAgdGhpcy5kYXRlSW5wdXQuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQobmV3IE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIGJsdXIgZXZlbnRzIG9uIHRoZSBpbnB1dC4gKi9cclxuICBfb25CbHVyKCkge1xyXG4gICAgLy8gUmVmb3JtYXQgdGhlIGlucHV0IG9ubHkgaWYgd2UgaGF2ZSBhIHZhbGlkIHZhbHVlLlxyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICAgLyoqIEZvcm1hdHMgYSB2YWx1ZSBhbmQgc2V0cyBpdCBvbiB0aGUgaW5wdXQgZWxlbWVudC4gKi9cclxuICAgcHJpdmF0ZSBfZm9ybWF0VmFsdWUodmFsdWU6IEQgfCBudWxsKSB7XHJcbiAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID1cclxuICAgICAgIHZhbHVlID8gdGhpcy5fZGF0ZUFkYXB0ZXIuZm9ybWF0KHZhbHVlLCB0aGlzLmdldERpc3BsYXlGb3JtYXQoKSkgOiBcIlwiO1xyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci10b2dnbGVcIixcclxuICB0ZW1wbGF0ZTogYDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiBbYXR0ci5hcmlhLWxhYmVsXT1cIl9pbnRsLm9wZW5DYWxlbmRhckxhYmVsXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwiX29wZW4oJGV2ZW50KVwiPlxyXG4gIDxtYXQtaWNvbiBbbmdTd2l0Y2hdPVwiZGF0ZXRpbWVwaWNrZXIudHlwZVwiPlxyXG4gICAgPHN2ZyAqbmdTd2l0Y2hDYXNlPVwiJ3RpbWUnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDEgMjIsMTJBMTAsMTAgMCAwLDEgMTIsMjJDNi40NywyMiAyLDE3LjUgMiwxMkExMCwxMCAwIDAsMSAxMiwyTTEyLjUsN1YxMi4yNUwxNywxNC45MkwxNi4yNSwxNi4xNUwxMSwxM1Y3SDEyLjVaXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCInZGF0ZXRpbWUnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNSwxM0gxNi41VjE1LjgyTDE4Ljk0LDE3LjIzTDE4LjE5LDE4LjUzTDE1LDE2LjY5VjEzTTE5LDhINVYxOUg5LjY3QzkuMjQsMTguMDkgOSwxNy4wNyA5LDE2QTcsNyAwIDAsMSAxNiw5QzE3LjA3LDkgMTguMDksOS4yNCAxOSw5LjY3VjhNNSwyMUMzLjg5LDIxIDMsMjAuMSAzLDE5VjVDMywzLjg5IDMuODksMyA1LDNINlYxSDhWM0gxNlYxSDE4VjNIMTlBMiwyIDAgMCwxIDIxLDVWMTEuMUMyMi4yNCwxMi4zNiAyMywxNC4wOSAyMywxNkE3LDcgMCAwLDEgMTYsMjNDMTQuMDksMjMgMTIuMzYsMjIuMjQgMTEuMSwyMUg1TTE2LDExLjE1QTQuODUsNC44NSAwIDAsMCAxMS4xNSwxNkMxMS4xNSwxOC42OCAxMy4zMiwyMC44NSAxNiwyMC44NUE0Ljg1LDQuODUgMCAwLDAgMjAuODUsMTZDMjAuODUsMTMuMzIgMTguNjgsMTEuMTUgMTYsMTEuMTVaXCI+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgICA8c3ZnICpuZ1N3aXRjaERlZmF1bHQgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiB0b3BcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xMSAwLTEuOTkuOS0xLjk5IDJMMyAxOWMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOGgxNHYxMXpNNyAxMGg1djVIN3pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICA8L21hdC1pY29uPlxyXG48L2J1dHRvbj5cclxuYCxcclxuICBob3N0OiB7XHJcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLXRvZ2dsZVwiXHJcbiAgfSxcclxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclRvZ2dsZVwiLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3N0YXRlQ2hhbmdlcyA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgLyoqIERhdGVwaWNrZXIgaW5zdGFuY2UgdGhhdCB0aGUgYnV0dG9uIHdpbGwgdG9nZ2xlLiAqL1xyXG4gIEBJbnB1dChcImZvclwiKSBkYXRldGltZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSB0b2dnbGUgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgPyB0aGlzLmRhdGV0aW1lcGlja2VyLmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGVwaWNrZXIpIHtcclxuICAgICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgX29wZW4oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kYXRldGltZXBpY2tlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLm9wZW4oKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF93YXRjaFN0YXRlQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXJEaXNhYmxlZCA9IHRoaXMuZGF0ZXRpbWVwaWNrZXIgPyB0aGlzLmRhdGV0aW1lcGlja2VyLl9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xyXG4gICAgY29uc3QgaW5wdXREaXNhYmxlZCA9IHRoaXMuZGF0ZXRpbWVwaWNrZXIgJiYgdGhpcy5kYXRldGltZXBpY2tlci5fZGF0ZXBpY2tlcklucHV0ID9cclxuICAgICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLl9kYXRlcGlja2VySW5wdXQuX2Rpc2FibGVkQ2hhbmdlIDogb2JzZXJ2YWJsZU9mKCk7XHJcblxyXG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMgPSBtZXJnZSh0aGlzLl9pbnRsLmNoYW5nZXMsIGRhdGVwaWNrZXJEaXNhYmxlZCwgaW5wdXREaXNhYmxlZClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcclxuICB9XHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIERhdGV0aW1lQWRhcHRlclxyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwgfSBmcm9tIFwiLi9jYWxlbmRhci1ib2R5XCI7XHJcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XHJcblxyXG5jb25zdCBEQVlTX1BFUl9XRUVLID0gNztcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGEgc2luZ2xlIG1vbnRoIGluIHRoZSBkYXRlcGlja2VyLlxyXG4gKiBAZG9jcy1wcml2YXRlXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlld1wiLFxyXG4gIHRlbXBsYXRlOiBgPHRhYmxlIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlXCI+XHJcbiAgPHRoZWFkIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlclwiPlxyXG4gICAgPHRyPjx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIF93ZWVrZGF5c1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5LmxvbmdcIj57e2RheS5uYXJyb3d9fTwvdGg+PC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keSBbQHNsaWRlQ2FsZW5kYXJdPVwiX2NhbGVuZGFyU3RhdGVcIlxyXG4gICAgICAgICAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiXHJcbiAgICAgICAgIG1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XHJcbiAgICAgICAgIHJvbGU9XCJncmlkXCJcclxuICAgICAgICAgW3Jvd3NdPVwiX3dlZWtzXCJcclxuICAgICAgICAgW3RvZGF5VmFsdWVdPVwiX3RvZGF5RGF0ZVwiXHJcbiAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cIl9zZWxlY3RlZERhdGVcIlxyXG4gICAgICAgICBbYWN0aXZlQ2VsbF09XCJfYWRhcHRlci5nZXREYXRlKGFjdGl2ZURhdGUpIC0gMVwiXHJcbiAgICAgICAgIChzZWxlY3RlZFZhbHVlQ2hhbmdlKT1cIl9kYXRlU2VsZWN0ZWQoJGV2ZW50KVwiPjwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbmAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgbW9udGggdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSBtb250aCBhbmQgeWVhciBpcyBpZ25vcmVkKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgbGV0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlIHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIGlmIChvbGRBY3RpdmVEYXRlICYmIHRoaXMuX2FjdGl2ZURhdGUgJiZcclxuICAgICAgIXRoaXMuX2FkYXB0ZXIuc2FtZU1vbnRoQW5kWWVhcihvbGRBY3RpdmVEYXRlLCB0aGlzLl9hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgIGlmICh0aGlzLl9hZGFwdGVyLmlzSW5OZXh0TW9udGgob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJyaWdodFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJsZWZ0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdGhpcy5fZ2V0RGF0ZUluQ3VycmVudE1vbnRoKHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQ7XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xyXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xyXG5cclxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyBkYXRlIGlzIHNlbGVjdGVkLiAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RD4oKTtcclxuXHJcbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguICovXHJcbiAgX3dlZWtzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIGluIHRoZSBmaXJzdCByb3cgYmVmb3JlIHRoZSAxc3Qgb2YgdGhlIG1vbnRoLiAqL1xyXG4gIF9maXJzdFdlZWtPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgb2YgdGhlIG1vbnRoIHRoYXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIE51bGwgaWYgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBEYXRlIGlzIGluIGFub3RoZXIgbW9udGguXHJcbiAgICovXHJcbiAgX3NlbGVjdGVkRGF0ZTogbnVtYmVyO1xyXG5cclxuICAvKiogVGhlIGRhdGUgb2YgdGhlIG1vbnRoIHRoYXQgdG9kYXkgZmFsbHMgb24uIE51bGwgaWYgdG9kYXkgaXMgaW4gYW5vdGhlciBtb250aC4gKi9cclxuICBfdG9kYXlEYXRlOiBudW1iZXI7XHJcblxyXG4gIC8qKiBUaGUgbmFtZXMgb2YgdGhlIHdlZWtkYXlzLiAqL1xyXG4gIF93ZWVrZGF5czogeyBsb25nOiBzdHJpbmcsIG5hcnJvdzogc3RyaW5nIH1bXTtcclxuXHJcbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXHJcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xyXG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XHJcbiAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKFwiRGF0ZXRpbWVBZGFwdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fZGF0ZUZvcm1hdHMpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuX2FkYXB0ZXIuZ2V0Rmlyc3REYXlPZldlZWsoKTtcclxuICAgIGNvbnN0IG5hcnJvd1dlZWtkYXlzID0gdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWtOYW1lcyhcIm5hcnJvd1wiKTtcclxuICAgIGNvbnN0IGxvbmdXZWVrZGF5cyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoXCJsb25nXCIpO1xyXG5cclxuICAgIC8vIFJvdGF0ZSB0aGUgbGFiZWxzIGZvciBkYXlzIG9mIHRoZSB3ZWVrIGJhc2VkIG9uIHRoZSBjb25maWd1cmVkIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGxldCB3ZWVrZGF5cyA9IGxvbmdXZWVrZGF5cy5tYXAoKGxvbmcsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIHtsb25nLCBuYXJyb3c6IG5hcnJvd1dlZWtkYXlzW2ldfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fd2Vla2RheXMgPSB3ZWVrZGF5cy5zbGljZShmaXJzdERheU9mV2VlaykuY29uY2F0KHdlZWtkYXlzLnNsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgZGF0ZSBpcyBzZWxlY3RlZC4gKi9cclxuICBfZGF0ZVNlbGVjdGVkKGRhdGU6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgZGF0ZSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB1c2VyU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodXNlclNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBJbml0aWFsaXplcyB0aGlzIG1vbnRoIHZpZXcuICovXHJcbiAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLnNlbGVjdGVkKTtcclxuICAgIHRoaXMuX3RvZGF5RGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLl9hZGFwdGVyLnRvZGF5KCkpO1xyXG5cclxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIDEsXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgIHRoaXMuX2ZpcnN0V2Vla09mZnNldCA9XHJcbiAgICAgIChEQVlTX1BFUl9XRUVLICsgdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWsoZmlyc3RPZk1vbnRoKSAtXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpKSAlIERBWVNfUEVSX1dFRUs7XHJcblxyXG4gICAgdGhpcy5fY3JlYXRlV2Vla0NlbGxzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBNZENhbGVuZGFyQ2VsbHMgZm9yIHRoZSBkYXRlcyBpbiB0aGlzIG1vbnRoLiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZVdlZWtDZWxscygpIHtcclxuICAgIGxldCBkYXlzSW5Nb250aCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TnVtRGF5c0luTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGxldCBkYXRlTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldERhdGVOYW1lcygpO1xyXG4gICAgdGhpcy5fd2Vla3MgPSBbW11dO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGNlbGwgPSB0aGlzLl9maXJzdFdlZWtPZmZzZXQ7IGkgPCBkYXlzSW5Nb250aDsgaSsrICwgY2VsbCsrKSB7XHJcbiAgICAgIGlmIChjZWxsID09IERBWVNfUEVSX1dFRUspIHtcclxuICAgICAgICB0aGlzLl93ZWVrcy5wdXNoKFtdKTtcclxuICAgICAgICBjZWxsID0gMDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCBpICsgMSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuICAgICAgbGV0IGVuYWJsZWQgPSAhdGhpcy5kYXRlRmlsdGVyIHx8XHJcbiAgICAgICAgdGhpcy5kYXRlRmlsdGVyKGRhdGUpO1xyXG4gICAgICBsZXQgYXJpYUxhYmVsID0gdGhpcy5fYWRhcHRlci5mb3JtYXQoZGF0ZSwgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlQTExeUxhYmVsKTtcclxuICAgICAgdGhpcy5fd2Vla3NbdGhpcy5fd2Vla3MubGVuZ3RoIC0gMV1cclxuICAgICAgICAucHVzaChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoaSArIDEsIGRhdGVOYW1lc1tpXSwgYXJpYUxhYmVsLCBlbmFibGVkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBkYXRlIGluIHRoaXMgbW9udGggdGhhdCB0aGUgZ2l2ZW4gRGF0ZSBmYWxscyBvbi5cclxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cclxuICAgKi9cclxuICBwcml2YXRlIF9nZXREYXRlSW5DdXJyZW50TW9udGgoZGF0ZTogRCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGVEb25lKCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwgfSBmcm9tIFwiLi9jYWxlbmRhci1ib2R5XCI7XHJcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFMsXHJcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIERhdGV0aW1lQWRhcHRlclxyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGEgc2luZ2xlIHllYXIgaW4gdGhlIGRhdGVwaWNrZXIuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXdcIixcclxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZVwiPlxyXG4gIDx0aGVhZCBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXJcIj48L3RoZWFkPlxyXG4gIDx0Ym9keSBbQHNsaWRlQ2FsZW5kYXJdPVwiX2NhbGVuZGFyU3RhdGVcIlxyXG4gICAgICAgICAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiXHJcbiAgICAgICAgIG1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5XHJcbiAgICAgICAgIHJvbGU9XCJncmlkXCJcclxuICAgICAgICAgYWxsb3dEaXNhYmxlZFNlbGVjdGlvbj1cInRydWVcIlxyXG4gICAgICAgICBbbGFiZWxdPVwiX3llYXJMYWJlbFwiXHJcbiAgICAgICAgIFtyb3dzXT1cIl9tb250aHNcIlxyXG4gICAgICAgICBbdG9kYXlWYWx1ZV09XCJfdG9kYXlNb250aFwiXHJcbiAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cIl9zZWxlY3RlZE1vbnRoXCJcclxuICAgICAgICAgW2xhYmVsTWluUmVxdWlyZWRDZWxsc109XCIyXCJcclxuICAgICAgICAgW2FjdGl2ZUNlbGxdPVwiX2FkYXB0ZXIuZ2V0TW9udGgoYWN0aXZlRGF0ZSlcIlxyXG4gICAgICAgICAoc2VsZWN0ZWRWYWx1ZUNoYW5nZSk9XCJfbW9udGhTZWxlY3RlZCgkZXZlbnQpXCI+PC90Ym9keT5cclxuPC90YWJsZT5cclxuYCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVDYWxlbmRhcl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlldzxEPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgX3VzZXJTZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcclxuXHJcbiAgLyoqIFRoZSBkYXRlIHRvIGRpc3BsYXkgaW4gdGhpcyB5ZWFyIHZpZXcgKGV2ZXJ5dGhpbmcgb3RoZXIgdGhhbiB0aGUgeWVhciBpcyBpZ25vcmVkKS4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRCkge1xyXG4gICAgbGV0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlIHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcclxuICAgIGlmIChvbGRBY3RpdmVEYXRlICYmIHRoaXMuX2FjdGl2ZURhdGUgJiZcclxuICAgICAgIXRoaXMuX2FkYXB0ZXIuc2FtZVllYXIob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgICAvLyBpZiAob2xkQWN0aXZlRGF0ZSA8IHRoaXMuX2FjdGl2ZURhdGUpIHtcclxuICAgICAgLy8gIHRoaXMuY2FsZW5kYXJTdGF0ZSgncmlnaHQnKTtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gIHRoaXMuY2FsZW5kYXJTdGF0ZSgnbGVmdCcpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xyXG5cclxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IEQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHRoaXMuX2dldE1vbnRoSW5DdXJyZW50WWVhcih0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEO1xyXG5cclxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cclxuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgLyoqIEVtaXRzIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWQuICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xyXG5cclxuICAvKiogR3JpZCBvZiBjYWxlbmRhciBjZWxscyByZXByZXNlbnRpbmcgdGhlIG1vbnRocyBvZiB0aGUgeWVhci4gKi9cclxuICBfbW9udGhzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XHJcblxyXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoaXMgeWVhciAoZS5nLiBcIjIwMTdcIikuICovXHJcbiAgX3llYXJMYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIG1vbnRoIGluIHRoaXMgeWVhciB0aGF0IHRvZGF5IGZhbGxzIG9uLiBOdWxsIGlmIHRvZGF5IGlzIGluIGEgZGlmZmVyZW50IHllYXIuICovXHJcbiAgX3RvZGF5TW9udGg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG1vbnRoIGluIHRoaXMgeWVhciB0aGF0IHRoZSBzZWxlY3RlZCBEYXRlIGZhbGxzIG9uLlxyXG4gICAqIE51bGwgaWYgdGhlIHNlbGVjdGVkIERhdGUgaXMgaW4gYSBkaWZmZXJlbnQgeWVhci5cclxuICAgKi9cclxuICBfc2VsZWN0ZWRNb250aDogbnVtYmVyO1xyXG5cclxuICBfY2FsZW5kYXJTdGF0ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcclxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFVElNRV9GT1JNQVRTKSBwcml2YXRlIF9kYXRlRm9ybWF0czogTWF0RGF0ZXRpbWVGb3JtYXRzKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FkYXB0ZXIpIHtcclxuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xyXG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlcyB3aGVuIGEgbmV3IG1vbnRoIGlzIHNlbGVjdGVkLiAqL1xyXG4gIF9tb250aFNlbGVjdGVkKG1vbnRoOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHVzZXJTZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksXHJcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodXNlclNlbGVjdGVkKTtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB1c2VyU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gbW9udGg7XHJcbiAgfVxyXG5cclxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtb250aCB2aWV3LiAqL1xyXG4gIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgdGhpcy5fdG9kYXlNb250aCA9IHRoaXMuX2dldE1vbnRoSW5DdXJyZW50WWVhcih0aGlzLl9hZGFwdGVyLnRvZGF5KCkpO1xyXG4gICAgdGhpcy5feWVhckxhYmVsID0gdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLmFjdGl2ZURhdGUpO1xyXG5cclxuICAgIGxldCBtb250aE5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwic2hvcnRcIik7XHJcbiAgICAvLyBGaXJzdCByb3cgb2YgbW9udGhzIG9ubHkgY29udGFpbnMgNSBlbGVtZW50cyBzbyB3ZSBjYW4gZml0IHRoZSB5ZWFyIGxhYmVsIG9uIHRoZSBzYW1lIHJvdy5cclxuICAgIHRoaXMuX21vbnRocyA9IFtbMCwgMSwgMiwgMywgNF0sIFs1LCA2LCA3LCA4LCA5LCAxMCwgMTFdXS5tYXAocm93ID0+IHJvdy5tYXAoXHJcbiAgICAgIG1vbnRoID0+IHRoaXMuX2NyZWF0ZUNlbGxGb3JNb250aChtb250aCwgbW9udGhOYW1lc1ttb250aF0pKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0aGUgZ2l2ZW4gRGF0ZSBmYWxscyBvbi5cclxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciB5ZWFyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2dldE1vbnRoSW5DdXJyZW50WWVhcihkYXRlOiBEKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5zYW1lWWVhcihkYXRlLCB0aGlzLmFjdGl2ZURhdGUpID9cclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JlYXRlcyBhbiBNZENhbGVuZGFyQ2VsbCBmb3IgdGhlIGdpdmVuIG1vbnRoLiAqL1xyXG4gIHByaXZhdGUgX2NyZWF0ZUNlbGxGb3JNb250aChtb250aDogbnVtYmVyLCBtb250aE5hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IGFyaWFMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZm9ybWF0KFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCwgMSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKSxcclxuICAgICAgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWwpO1xyXG4gICAgcmV0dXJuIG5ldyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbChcclxuICAgICAgbW9udGgsIG1vbnRoTmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpLCBhcmlhTGFiZWwsIHRoaXMuX2lzTW9udGhFbmFibGVkKG1vbnRoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gbW9udGggaXMgZW5hYmxlZC4gKi9cclxuICBwcml2YXRlIF9pc01vbnRoRW5hYmxlZChtb250aDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0ZUZpbHRlcikge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlyc3RPZk1vbnRoID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLCAxLFxyXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcclxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XHJcblxyXG4gICAgLy8gSWYgYW55IGRhdGUgaW4gdGhlIG1vbnRoIGlzIGVuYWJsZWQgY291bnQgdGhlIG1vbnRoIGFzIGVuYWJsZWQuXHJcbiAgICBmb3IgKGxldCBkYXRlID0gZmlyc3RPZk1vbnRoOyB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpID09IG1vbnRoO1xyXG4gICAgICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgMSkpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0ZUZpbHRlcihkYXRlKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLl9jYWxlbmRhclN0YXRlID0gZGlyZWN0aW9uO1xyXG4gIC8vIH1cclxuXHJcbiAgX2NhbGVuZGFyU3RhdGVEb25lKCkge1xyXG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2ExMXlcIjtcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gIE1hdEljb25Nb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNsb2NrIH0gZnJvbSBcIi4vY2xvY2tcIjtcclxuaW1wb3J0IHtcclxuICBNYXREYXRldGltZXBpY2tlcixcclxuICBNYXREYXRldGltZXBpY2tlckNvbnRlbnRcclxufSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci10b2dnbGVcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcgfSBmcm9tIFwiLi9tb250aC12aWV3XCI7XHJcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXcgfSBmcm9tIFwiLi95ZWFyLXZpZXdcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICBBMTF5TW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckJvZHksXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlclRvZ2dsZSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXHJcbiAgICBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIsXHJcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXHJcbiAgICBNYXREYXRldGltZXBpY2tlcixcclxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudCxcclxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxyXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyTW9kdWxlIHtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJEYXRlQWRhcHRlciIsIkluamVjdGlvblRva2VuIiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiTUFUX0RBVEVfTE9DQUxFIiwiTmdNb2R1bGUiLCJOYXRpdmVEYXRlTW9kdWxlIiwiTWF0TmF0aXZlRGF0ZU1vZHVsZSIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJrZXlmcmFtZXMiLCJFdmVudEVtaXR0ZXIiLCJmaXJzdCIsIkxFRlRfQVJST1ciLCJSSUdIVF9BUlJPVyIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkhPTUUiLCJFTkQiLCJQQUdFX1VQIiwiUEFHRV9ET1dOIiwiRU5URVIiLCJDb21wb25lbnQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIk1hdERhdGVwaWNrZXJJbnRsIiwiTmdab25lIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJJbnB1dCIsIkVTQ0FQRSIsIlZpZXdDaGlsZCIsIlN1YnNjcmlwdGlvbiIsIlN1YmplY3QiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJDb21wb25lbnRQb3J0YWwiLCJPdmVybGF5Q29uZmlnIiwiTWF0RGlhbG9nIiwiT3ZlcmxheSIsIlZpZXdDb250YWluZXJSZWYiLCJNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kiLCJEaXJlY3Rpb25hbGl0eSIsIkRPQ1VNRU5UIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiTkdfVkFMSURBVE9SUyIsIlZhbGlkYXRvcnMiLCJEaXJlY3RpdmUiLCJNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IiLCJNYXRGb3JtRmllbGQiLCJvYnNlcnZhYmxlT2YiLCJtZXJnZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdERpYWxvZ01vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJPdmVybGF5TW9kdWxlIiwiQTExeU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7Ozs7OztBQ3pCRDs7OztRQUFpREEsbUNBQWM7UUFFN0QseUJBQXNCLFNBQXlCO1lBQS9DLFlBQ0UsaUJBQU8sU0FDUjtZQUZxQixlQUFTLEdBQVQsU0FBUyxDQUFnQjs7U0FFOUM7Ozs7O1FBb0JELDRDQUFrQjs7OztZQUFsQixVQUFtQixHQUFRO2dCQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDckU7Ozs7OztRQUVELHlDQUFlOzs7OztZQUFmLFVBQWdCLEtBQVEsRUFBRSxNQUFTO2dCQUNqQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEOzs7Ozs7UUFFRCxzQ0FBWTs7Ozs7WUFBWixVQUFhLEtBQWUsRUFBRSxNQUFnQjtnQkFDNUMsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFOzt3QkFDYixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O3dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3hDLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTt3QkFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUM3QztvQkFDRCxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sS0FBSyxLQUFLLE1BQU0sQ0FBQzthQUN6Qjs7Ozs7O1FBRUQsa0NBQVE7Ozs7O1lBQVIsVUFBUyxLQUFRLEVBQUUsTUFBUztnQkFDMUIsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4RTs7Ozs7O1FBRUQsaUNBQU87Ozs7O1lBQVAsVUFBUSxLQUFRLEVBQUUsTUFBUztnQkFDekIsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2hIOzs7Ozs7UUFFRCxrQ0FBUTs7Ozs7WUFBUixVQUFTLEtBQVEsRUFBRSxNQUFTO2dCQUMxQixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZHOzs7Ozs7UUFFRCxvQ0FBVTs7Ozs7WUFBVixVQUFXLEtBQVEsRUFBRSxNQUFTO2dCQUM1QixPQUFPLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVHOzs7Ozs7UUFFRCwwQ0FBZ0I7Ozs7O1lBQWhCLFVBQWlCLEtBQWUsRUFBRSxNQUFnQjtnQkFDaEQsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFOzt3QkFDYixVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O3dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3hDLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTt3QkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NEJBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNqRDtvQkFDRCxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUM7aUJBQ25DO2dCQUNELE9BQU8sS0FBSyxLQUFLLE1BQU0sQ0FBQzthQUN6Qjs7Ozs7OztRQUdELCtCQUFLOzs7Ozs7WUFBTCxVQUFNLElBQU87Z0JBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQzs7Ozs7O1FBRUQsMENBQWdCOzs7OztZQUFoQixVQUFpQixJQUFPLEVBQUUsS0FBYTtnQkFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRDs7Ozs7O1FBRUQsMkNBQWlCOzs7OztZQUFqQixVQUFrQixJQUFPLEVBQUUsTUFBYztnQkFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN2RDs7Ozs7O1FBRUQseUNBQWU7Ozs7O1lBQWYsVUFBZ0IsSUFBTyxFQUFFLElBQVk7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25EOzs7OztRQUVELGlDQUFPOzs7O1lBQVAsVUFBUSxJQUFPO2dCQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7Ozs7O1FBRUQsa0NBQVE7Ozs7WUFBUixVQUFTLElBQU87Z0JBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0Qzs7Ozs7UUFFRCxpQ0FBTzs7OztZQUFQLFVBQVEsSUFBTztnQkFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDOzs7OztRQUVELHNDQUFZOzs7O1lBQVosVUFBYSxJQUFPO2dCQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDOzs7OztRQUVELHVDQUFhOzs7O1lBQWIsVUFBYyxLQUFLO2dCQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVDOzs7O1FBRUQsc0NBQVk7OztZQUFaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN0Qzs7Ozs7UUFFRCwyQ0FBaUI7Ozs7WUFBakIsVUFBa0IsS0FBSztnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hEOzs7OztRQUVELHFDQUFXOzs7O1lBQVgsVUFBWSxJQUFPO2dCQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDOzs7O1FBRUQsMkNBQWlCOzs7WUFBakI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDM0M7Ozs7O1FBRUQsMkNBQWlCOzs7O1lBQWpCLFVBQWtCLElBQU87Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQzs7Ozs7OztRQUVELG9DQUFVOzs7Ozs7WUFBVixVQUFXLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWTtnQkFDbEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JEOzs7O1FBRUQsK0JBQUs7OztZQUFMO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMvQjs7Ozs7O1FBRUQsK0JBQUs7Ozs7O1lBQUwsVUFBTSxLQUFVLEVBQUUsV0FBZ0I7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ2pEOzs7Ozs7UUFFRCxnQ0FBTTs7Ozs7WUFBTixVQUFPLElBQU8sRUFBRSxhQUFrQjtnQkFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDbkQ7Ozs7O1FBRUQsbUNBQVM7Ozs7WUFBVCxVQUFVLElBQU87Z0JBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2Qzs7Ozs7UUFFRCx3Q0FBYzs7OztZQUFkLFVBQWUsR0FBUTtnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQzs7Ozs7UUFFRCxpQ0FBTzs7OztZQUFQLFVBQVEsSUFBTztnQkFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDOzs7O1FBRUQsaUNBQU87OztZQUFQO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNqQzs7Ozs7OztRQUVELG1DQUFTOzs7Ozs7WUFBVCxVQUFVLElBQU8sRUFBRSxHQUFjLEVBQUUsR0FBYztnQkFDL0MsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM5QyxPQUFPLEdBQUcsQ0FBQztpQkFDWjtnQkFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzlDLE9BQU8sR0FBRyxDQUFDO2lCQUNaO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxzQkFBQztJQUFELENBQUMsQ0E3S2dEQyxnQkFBVzs7Ozs7O0FDRjVEO0FBcUJBLFFBQWEsb0JBQW9CLEdBQUcsSUFBSUMscUJBQWMsQ0FBcUIsc0JBQXNCLENBQUM7Ozs7OzthQ1Q3RCxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQTs7Ozs7UUFBN0Msa0JBQWtCLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBaUI7YUFHYixVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQTs7Ozs7UUFBL0Msb0JBQW9CLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBaUI7Ozs7Ozs7SUFFdEQsZUFBa0IsTUFBYyxFQUFFLGFBQW1DOztZQUM3RCxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0FBRUQ7UUFDMkNGLHlDQUFxQjtRQUU5RCwrQkFBaUQsYUFBcUIsRUFBRSxTQUE0QjtZQUFwRyxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUVqQjtZQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7O1NBQy9COzs7OztRQUVELHFDQUFLOzs7O1lBQUwsVUFBTSxJQUFVO2dCQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNuSTs7Ozs7UUFFRCx1Q0FBTzs7OztZQUFQLFVBQVEsSUFBVTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEI7Ozs7O1FBRUQseUNBQVM7Ozs7WUFBVCxVQUFVLElBQVU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzFCOzs7Ozs7UUFFRCw2Q0FBYTs7Ozs7WUFBYixVQUFjLFNBQWUsRUFBRSxPQUFhOztvQkFDcEMsU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7Z0JBQ3BELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNsRDs7Ozs7Ozs7O1FBRUQsOENBQWM7Ozs7Ozs7O1lBQWQsVUFBZSxJQUFZLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBYzs7O2dCQUdwRixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtvQkFDM0IsTUFBTSxLQUFLLENBQUMsMkJBQXdCLEtBQUssZ0RBQTRDLENBQUMsQ0FBQztpQkFDeEY7Z0JBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUNaLE1BQU0sS0FBSyxDQUFDLG9CQUFpQixJQUFJLHVDQUFtQyxDQUFDLENBQUM7aUJBQ3ZFO2dCQUVELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO29CQUN6QixNQUFNLEtBQUssQ0FBQyxvQkFBaUIsSUFBSSx5Q0FBcUMsQ0FBQyxDQUFDO2lCQUN6RTtnQkFFRCxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDN0IsTUFBTSxLQUFLLENBQUMsc0JBQW1CLE1BQU0sMkNBQXVDLENBQUMsQ0FBQztpQkFDL0U7O29CQUVLLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQzs7Z0JBRzVFLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDL0IsTUFBTSxLQUFLLENBQUMsb0JBQWlCLElBQUksa0NBQTJCLEtBQUssUUFBSSxDQUFDLENBQUM7aUJBQ3hFO2dCQUVELE9BQU8sTUFBTSxDQUFDO2FBQ2Y7Ozs7O1FBRU8sa0RBQWtCOzs7O1lBQTFCLFVBQTJCLElBQVU7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDdkM7Ozs7O1FBRUQsbURBQW1COzs7O1lBQW5CLFVBQW9CLElBQVU7O29CQUN0QixNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsT0FBTyxNQUFNLENBQUM7YUFDZjs7OztRQUVELDRDQUFZOzs7WUFBWjtnQkFDRSxPQUFPLGtCQUFrQixDQUFDO2FBQzNCOzs7O1FBRUQsOENBQWM7OztZQUFkO2dCQUNFLE9BQU8sb0JBQW9CLENBQUM7YUFDN0I7Ozs7OztRQUVELGdEQUFnQjs7Ozs7WUFBaEIsVUFBaUIsSUFBVSxFQUFFLEtBQWE7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDakQ7Ozs7OztRQUVELGlEQUFpQjs7Ozs7WUFBakIsVUFBa0IsSUFBVSxFQUFFLE1BQWM7O29CQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztnQkFNbkgsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtvQkFDOUUsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNwSTtnQkFFRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7Ozs7O1FBRUQsK0NBQWU7Ozs7O1lBQWYsVUFBZ0IsSUFBVSxFQUFFLElBQVk7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDbkg7Ozs7OztRQUVELGdEQUFnQjs7Ozs7WUFBaEIsVUFBaUIsSUFBVSxFQUFFLEtBQWE7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JEOzs7Ozs7UUFFRCxrREFBa0I7Ozs7O1lBQWxCLFVBQW1CLElBQVUsRUFBRSxPQUFlO2dCQUM1QyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUN2RDs7Ozs7UUFFRCx5Q0FBUzs7OztZQUFULFVBQVUsSUFBVTtnQkFDbEIsT0FBTyxpQkFBTSxTQUFTLFlBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO29CQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ25DLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2I7Ozs7Ozs7Ozs7Ozs7OztRQVNPLDhEQUE4Qjs7Ozs7OztZQUF0QyxVQUF1QyxHQUFXO2dCQUNoRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDM0M7Ozs7Ozs7Ozs7O1FBT08sdUNBQU87Ozs7O1lBQWYsVUFBZ0IsQ0FBUztnQkFDdkIsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7O1FBR08sdURBQXVCOzs7Ozs7Ozs7WUFBL0IsVUFBZ0MsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQ3pDLEtBQWEsRUFBRSxPQUFlOztvQkFDdEQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7OztnQkFJMUQsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7b0JBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7YUFDZjs7b0JBbkpGRyxpQkFBVTs7OztxREFHSUMsZUFBUSxZQUFJQyxhQUFNLFNBQUNDLHdCQUFlO3dCQXRCL0NMLG9CQUFXOzs7UUF1S2IsNEJBQUM7S0FBQSxDQW5KMEMsZUFBZTs7Ozs7OztBQ3hCMUQsUUFBYSwyQkFBMkIsR0FBdUI7UUFDN0QsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztZQUM5RCxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQzNCLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQztZQUN0RyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUM7WUFDL0MsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDO1lBQ2pELGFBQWEsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO1lBQy9ELGtCQUFrQixFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1lBQ3BELG9CQUFvQixFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7U0FDekU7S0FDRjs7Ozs7O0FDZEQ7QUFXQTs7UUFBQTtTQVVDOztvQkFWQU0sZUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyx5QkFBZ0IsQ0FBQzt3QkFDM0IsU0FBUyxFQUFFOzRCQUNUO2dDQUNFLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixRQUFRLEVBQUUscUJBQXFCOzZCQUNoQzt5QkFDRjtxQkFDRjs7UUFFRCwyQkFBQztLQUFBLElBQUE7ZUFPdUQsMkJBQTJCO0FBTG5GO1FBQUE7U0FRQzs7b0JBUkFELGVBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1Asb0JBQW9COzRCQUNwQkUsNEJBQW1CO3lCQUNwQjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLE1BQTZCLEVBQUMsQ0FBQztxQkFDcEY7O1FBRUQsOEJBQUM7S0FBQTs7Ozs7Ozs7Ozs7QUMvQkQ7Ozs7OztBQWVBLFFBQWEsYUFBYSxHQUE2QkMsa0JBQU8sQ0FBQyxlQUFlLEVBQUU7UUFDOUVDLGdCQUFLLENBQUMsU0FBUyxFQUFFQyxnQkFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDckNDLHFCQUFVLENBQUMsaUJBQWlCLEVBQUU7WUFDNUJELGdCQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDbkJFLGtCQUFPLENBQUMsOENBQThDLENBQUM7U0FDeEQsQ0FBQztLQUNILENBQUM7O0FBRUYsUUFBYSxhQUFhLEdBQTZCSixrQkFBTyxDQUFDLGVBQWUsRUFBRTtRQUM5RUcscUJBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDdEJDLGtCQUFPLENBQUMsR0FBRyxFQUFFQyxvQkFBUyxDQUFDO2dCQUNyQkgsZ0JBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ25EQSxnQkFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztnQkFDckRBLGdCQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUMvQyxDQUFDLENBQUM7U0FDSixDQUFDO1FBQ0ZDLHFCQUFVLENBQUMsWUFBWSxFQUFFO1lBQ3ZCQyxrQkFBTyxDQUFDLEdBQUcsRUFBRUMsb0JBQVMsQ0FBQztnQkFDckJILGdCQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2dCQUNwREEsZ0JBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7Z0JBQ3BEQSxnQkFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDL0MsQ0FBQyxDQUFDO1NBQ0osQ0FBQztLQUNILENBQUM7Ozs7Ozs7Ozs7O0FDckNGLHdDQUEyQyxRQUFnQjtRQUN6RCxPQUFPLEtBQUssQ0FDUiw4Q0FBNEMsUUFBUSw0Q0FBeUM7WUFDN0YsbUdBQW1HO1lBQ25HLHdCQUF3QixDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7UUNMQyxPQUFJLEVBQUUsT0FBSSxFQUFFLFNBQU07Ozs7Ozs7Ozs7QUNEcEI7Ozs7O0FBMENBO1FBa09FLG1DQUFvQixXQUF1QixFQUN2QixLQUF3QixFQUN4QixPQUFlLEVBQ0gsUUFBNEIsRUFDRSxZQUFnQyxFQUMxRSxpQkFBb0M7WUFMeEQsaUJBZUM7WUFmbUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7WUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtZQUNILGFBQVEsR0FBUixRQUFRLENBQW9CO1lBQ0UsaUJBQVksR0FBWixZQUFZLENBQW9CO1lBQzFFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7WUF4STlDLG1CQUFjLEdBQUcsSUFBSUksbUJBQVksRUFBUSxDQUFDO1lBRTNDLFNBQUksR0FBMkMsTUFBTSxDQUFDOztZQWV0RCxjQUFTLEdBQStCLE9BQU8sQ0FBQztZQXNDaEQsaUJBQVksR0FBVyxDQUFDLENBQUM7O1lBTXhCLG1CQUFjLEdBQUcsSUFBSUEsbUJBQVksRUFBSyxDQUFDOztZQUdqRCx3QkFBbUIsR0FBRyxVQUFDLElBQU87Z0JBQzVCLE9BQU8sQ0FBQyxDQUFDLElBQUk7cUJBQ1YsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1RSxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BFLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pFLENBQUM7O1lBK0JGLGlCQUFZLEdBQStCLE9BQU8sQ0FBQztZQUNuRCxlQUFVLEdBQXNCLE1BQU0sQ0FBQztZQW9DckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNyRDtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixNQUFNLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDMUQ7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBQSxDQUFDLENBQUM7U0FDckY7UUE3SUQsc0JBQ0ksOENBQU87Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDs7O1dBSkE7UUFZRCxzQkFDSSwrQ0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQUVELFVBQWEsS0FBZTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFEOzs7V0FKQTtRQVNELHNCQUNJLDhDQUFPOzs7OztnQkFEWDtnQkFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Z0JBRUQsVUFBWSxLQUFlO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekQ7OztXQUpBO1FBU0Qsc0JBQ0ksOENBQU87Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDs7O1dBSkE7UUE0QkQsc0JBQUksa0RBQVc7Ozs7Ozs7OztnQkFBZjtnQkFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7OztnQkFFRCxVQUFnQixLQUFROztvQkFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0I7Z0JBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JGLElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87b0JBQzNFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQ3pFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO3dCQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM1QjtvQkFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3hDO2FBQ0Y7OztXQWRBOzs7O1FBa0JELGlEQUFhOzs7WUFBYjtnQkFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzVCO1FBT0Qsc0JBQUksaURBQVU7Ozs7O2dCQUFkO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BEOzs7V0FBQTtRQUVELHNCQUFJLHNEQUFlOzs7Z0JBQW5CO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNsSCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7OztXQUFBO1FBRUQsc0JBQUksaURBQVU7OztnQkFBZDtnQkFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUN0RjtnQkFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUUvRjs7O1dBQUE7UUFFRCxzQkFBSSxrREFBVzs7O2dCQUFmO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUM5RDs7O1dBQUE7UUFFRCxzQkFBSSxvREFBYTs7O2dCQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDaEU7OztXQUFBOzs7O1FBcUJELHNEQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7aUJBQzVCO3FCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO2lCQUMvQzthQUNGOzs7O1FBRUQsK0NBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDakM7Ozs7Ozs7UUFHRCxpREFBYTs7Ozs7WUFBYixVQUFjLElBQU87Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztpQkFDN0I7YUFDRjs7Ozs7OztRQUdELGtEQUFjOzs7OztZQUFkLFVBQWUsS0FBUTtnQkFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO29CQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztpQkFDMUI7YUFDRjs7Ozs7UUFFRCxpREFBYTs7OztZQUFiLFVBQWMsSUFBTztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVCOzs7OztRQUdELHdEQUFvQjs7OztZQUFwQixVQUFxQixLQUFLO2dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0Qjs7Ozs7UUFHRCx1REFBbUI7Ozs7WUFBbkIsVUFBb0IsS0FBSzs7Z0JBRXZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7YUFFNUI7Ozs7O1FBRUQsdURBQW1COzs7O1lBQW5CLFVBQW9CLElBQU87Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCOzs7O1FBRUQsZ0RBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2FBQzVCOzs7O1FBRUQsZ0RBQVk7OztZQUFaO2dCQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2lCQUM3QjthQUNGOzs7O1FBRUQsaURBQWE7OztZQUFiO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzthQUMxQjs7OztRQUVELG1EQUFlOzs7WUFBZjtnQkFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7YUFDNUI7Ozs7OztRQUdELG9EQUFnQjs7OztZQUFoQjtnQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTztvQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RDs7Ozs7O1FBR0QsZ0RBQVk7Ozs7WUFBWjtnQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTztvQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEOzs7Ozs7UUFHRCxvREFBZ0I7Ozs7WUFBaEI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2pCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzRTs7Ozs7O1FBR0QsZ0RBQVk7Ozs7WUFBWjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0U7Ozs7Ozs7UUFHRCw4REFBMEI7Ozs7O1lBQTFCLFVBQTJCLEtBQW9COzs7O2dCQUk3QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxFQUFFO29CQUNqQyxJQUFJLENBQUMscUNBQXFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25EO3FCQUFNLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuRDthQUNGOzs7O1FBRUQsb0RBQWdCOzs7WUFBaEI7Z0JBQUEsaUJBTUM7Z0JBTEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztvQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDQyxlQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ3hDLENBQUMsQ0FBQztpQkFDSixDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7UUFHTywrQ0FBVzs7Ozs7O1lBQW5CLFVBQW9CLEtBQVEsRUFBRSxLQUFRO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTztvQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hFOzs7Ozs7O1FBR08seUVBQXFDOzs7OztZQUE3QyxVQUE4QyxLQUFvQjtnQkFDaEUsUUFBUSxLQUFLLENBQUMsT0FBTztvQkFDbkIsS0FBS0MsbUJBQVU7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZFLE1BQU07b0JBQ1IsS0FBS0Msb0JBQVc7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN0RSxNQUFNO29CQUNSLEtBQUtDLGlCQUFRO3dCQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxNQUFNO29CQUNSLEtBQUtDLG1CQUFVO3dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEUsTUFBTTtvQkFDUixLQUFLQyxhQUFJO3dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDL0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxNQUFNO29CQUNSLEtBQUtDLFlBQUc7d0JBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7NEJBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO3dCQUM5QyxNQUFNO29CQUNSLEtBQUtDLGdCQUFPO3dCQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU07NEJBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELE1BQU07b0JBQ1IsS0FBS0Msa0JBQVM7d0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTTs0QkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs0QkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxNQUFNO29CQUNSLEtBQUtDLGNBQUs7d0JBQ1IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFOzRCQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7NEJBRXJDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzt5QkFDeEI7d0JBQ0QsT0FBTztvQkFDVDs7d0JBRUUsT0FBTztpQkFDVjs7Z0JBR0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7O1FBR08sd0VBQW9DOzs7OztZQUE1QyxVQUE2QyxLQUFvQjtnQkFDL0QsUUFBUSxLQUFLLENBQUMsT0FBTztvQkFDbkIsS0FBS1IsbUJBQVU7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekUsTUFBTTtvQkFDUixLQUFLQyxvQkFBVzt3QkFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEUsTUFBTTtvQkFDUixLQUFLQyxpQkFBUTt3QkFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzlELE1BQU07b0JBQ1IsS0FBS0MsbUJBQVU7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNO29CQUNSLEtBQUtDLGFBQUk7d0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ2pFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzdDLE1BQU07b0JBQ1IsS0FBS0MsWUFBRzt3QkFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDakUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxNQUFNO29CQUNSLEtBQUtDLGdCQUFPO3dCQUNWLElBQUksQ0FBQyxXQUFXOzRCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVFLE1BQU07b0JBQ1IsS0FBS0Msa0JBQVM7d0JBQ1osSUFBSSxDQUFDLFdBQVc7NEJBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMxRSxNQUFNO29CQUNSLEtBQUtDLGNBQUs7d0JBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3RDLE1BQU07b0JBQ1I7O3dCQUVFLE9BQU87aUJBQ1Y7O2dCQUdELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4Qjs7Ozs7OztRQUdPLHlFQUFxQzs7Ozs7WUFBN0MsVUFBOEMsS0FBb0I7Z0JBQ2hFLFFBQVEsS0FBSyxDQUFDLE9BQU87b0JBQ25CLEtBQUtOLGlCQUFRO3dCQUNYLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNOzRCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzRCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELE1BQU07b0JBQ1IsS0FBS0MsbUJBQVU7d0JBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU07NEJBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pELE1BQU07b0JBQ1IsS0FBS0ssY0FBSzt3QkFDUixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDckMsT0FBTztvQkFDVDs7d0JBRUUsT0FBTztpQkFDVjs7Z0JBR0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7OztRQU1PLHVEQUFtQjs7Ozs7O1lBQTNCLFVBQTRCLElBQU87Ozs7b0JBRzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDekQ7Ozs7Ozs7Ozs7O1FBTU8sdURBQW1COzs7Ozs7WUFBM0IsVUFBNEIsSUFBTzs7OztvQkFHM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN6RDs7Ozs7UUFFTyxpREFBYTs7OztZQUFyQixVQUFzQixTQUFpQjtnQkFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7YUFDakM7Ozs7UUFFRCxzREFBa0I7OztZQUFsQjtnQkFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzthQUMxQjs7Ozs7UUFFTywyQ0FBTzs7OztZQUFmLFVBQWdCLENBQVM7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCOztvQkEvZ0JGQyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw2QkFBNkI7d0JBQ3ZDLFFBQVEsRUFBRSx1eUlBOEVYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLHN6R0FBc3pHLENBQUM7d0JBQ2gwRyxJQUFJLEVBQUU7NEJBQ0oscUNBQXFDLEVBQUUsTUFBTTs0QkFDN0MsVUFBVSxFQUFFLEdBQUc7NEJBQ2YsV0FBVyxFQUFFLG9DQUFvQzt5QkFDbEQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUMzQixhQUFhLEVBQUVDLHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLGVBQWUsRUFBRUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7Ozs7d0JBcEhDQyxpQkFBVTt3QkFVSEMsMEJBQWlCO3dCQU54QkMsYUFBTTt3QkFTQyxlQUFlLHVCQWtQVDVCLGVBQVE7d0RBQ1JBLGVBQVEsWUFBSUMsYUFBTSxTQUFDLG9CQUFvQjt3QkFsUXBENEIsd0JBQWlCOzs7O3FDQTJIaEJDLGFBQU07MkJBRU5DLFlBQUs7OEJBR0xBLFlBQUs7Z0NBWUxBLFlBQUs7K0JBR0xBLFlBQUs7OEJBWUxBLFlBQUs7OEJBWUxBLFlBQUs7bUNBV0xBLFlBQUs7aUNBR0xBLFlBQUs7cUNBR0xELGFBQU07eUNBNkhOQyxZQUFLO3dDQU1MQSxZQUFLOztRQWlQUixnQ0FBQztLQUFBOzs7Ozs7QUMxakJEOzs7O0FBYUE7Ozs7UUFDRSx1Q0FBbUIsS0FBYSxFQUNiLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE9BQWdCO1lBSGhCLFVBQUssR0FBTCxLQUFLLENBQVE7WUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUTtZQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFRO1lBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVM7U0FDbEM7UUFDSCxvQ0FBQztJQUFELENBQUMsSUFBQTs7Ozs7QUFNRDs7Ozs7UUFBQTs7WUE2RFcsWUFBTyxHQUFHLENBQUMsQ0FBQzs7WUFHWiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7O1lBRy9CLGVBQVUsR0FBRyxDQUFDLENBQUM7O1lBR2Qsd0JBQW1CLEdBQUcsSUFBSW5CLG1CQUFZLEVBQVUsQ0FBQztTQXlCNUQ7Ozs7O1FBdkJDLG9EQUFZOzs7O1lBQVosVUFBYSxJQUFtQztnQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2pELE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7UUFHRCxzQkFBSSwwREFBZTs7Ozs7Z0JBQW5CO2dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07b0JBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzFDOzs7V0FBQTs7Ozs7O1FBRUQscURBQWE7Ozs7O1lBQWIsVUFBYyxRQUFnQixFQUFFLFFBQWdCOztvQkFDMUMsVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVE7O2dCQUduRCxJQUFJLFFBQVEsRUFBRTtvQkFDWixVQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDcEM7Z0JBRUQsT0FBTyxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN2Qzs7b0JBOUZGVyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7d0JBQzlDLFFBQVEsRUFBRSxpbkRBa0NYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLHVoREFBdWhELENBQUM7d0JBQ2ppRCxJQUFJLEVBQUU7NEJBQ0osT0FBTyxFQUFFLGtDQUFrQzt5QkFDNUM7d0JBQ0QsYUFBYSxFQUFFQyx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDhCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7NEJBR0VNLFlBQUs7MkJBR0xBLFlBQUs7aUNBR0xBLFlBQUs7b0NBR0xBLFlBQUs7NENBR0xBLFlBQUs7OEJBR0xBLFlBQUs7NkNBR0xBLFlBQUs7aUNBR0xBLFlBQUs7MENBR0xELGFBQU07O1FBeUJULG9DQUFDO0tBQUE7Ozs7Ozs7QUM1R0QsUUFBYSxZQUFZLEdBQUcsRUFBRTs7QUFDOUIsUUFBYSxrQkFBa0IsR0FBRyxJQUFJOztBQUN0QyxRQUFhLGtCQUFrQixHQUFHLEtBQUs7O0FBQ3ZDLFFBQWEsaUJBQWlCLEdBQUcsTUFBTTs7Ozs7O0FBUXZDO1FBa0pFLGdDQUFvQixRQUFvQixFQUNwQixRQUE0QjtZQURoRCxpQkFRQztZQVJtQixhQUFRLEdBQVIsUUFBUSxDQUFZO1lBQ3BCLGFBQVEsR0FBUixRQUFRLENBQW9CO1lBbkh0QyxtQkFBYyxHQUFHLElBQUlsQixtQkFBWSxFQUFRLENBQUM7WUErQzVDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1lBdUJwQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1lBRXJCLGVBQVUsR0FBWSxLQUFLLENBQUM7O1lBRzNCLG1CQUFjLEdBQUcsSUFBSUEsbUJBQVksRUFBSyxDQUFDO1lBRXZDLHFCQUFnQixHQUFHLElBQUlBLG1CQUFZLEVBQUssQ0FBQzs7WUFHbkQsV0FBTSxHQUFrQixFQUFFLENBQUM7WUFDM0IsYUFBUSxHQUFrQixFQUFFLENBQUM7O1lBRzdCLGNBQVMsR0FBWSxJQUFJLENBQUM7WUFnQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLEtBQVU7Z0JBQ2xDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRztnQkFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCLENBQUM7U0FDSDtRQXJIRCxzQkFDSSw4Q0FBVTs7Ozs7OztnQkFEZDtnQkFFRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekI7Ozs7Z0JBRUQsVUFBZSxLQUFROztvQkFDakIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzlELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGOzs7V0FSQTtRQWFELHNCQUNJLDRDQUFROzs7OztnQkFEWjtnQkFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7Ozs7Z0JBRUQsVUFBYSxLQUFlO2dCQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ2xDO2FBQ0Y7OztXQVBBO1FBWUQsc0JBQ0ksMkNBQU87Ozs7O2dCQURYO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7OztnQkFFRCxVQUFZLEtBQWU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3BGOzs7V0FKQTtRQVdELHNCQUNJLDJDQUFPOzs7OztnQkFEWDtnQkFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7Z0JBRUQsVUFBWSxLQUFlO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRjs7O1dBSkE7UUFTRCxzQkFDSSw2Q0FBUzs7Ozs7O2dCQURiLFVBQ2MsS0FBZ0I7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQzthQUNwQzs7O1dBQUE7UUF3QkQsc0JBQUkseUNBQUs7OztnQkFBVDtnQkFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O29CQUM1RCxHQUFHLEdBQUcsQ0FBQzs7b0JBQ1AsTUFBTSxHQUFHLGtCQUFrQjtnQkFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOzt3QkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFO29CQUM3RCxNQUFNLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO29CQUN6RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7d0JBQ25CLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztxQkFDN0I7b0JBQ0QsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0QsT0FBTztvQkFDTCxXQUFXLEVBQUUsWUFBVSxHQUFHLFNBQU07b0JBQ2hDLFFBQVEsRUFBSyxNQUFNLE1BQUc7b0JBQ3RCLFlBQVksRUFBSyxFQUFFLEdBQUcsTUFBTSxNQUFHO2lCQUNoQyxDQUFDO2FBQ0g7OztXQUFBOzs7O1FBZUQsbURBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkOzs7Ozs7O1FBR0QsaURBQWdCOzs7OztZQUFoQixVQUFpQixLQUFVO2dCQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDL0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzdEOzs7OztRQUVELGlEQUFnQjs7OztZQUFoQixVQUFpQixLQUFVO2dCQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7Ozs7UUFFRCwrQ0FBYzs7O1lBQWQ7Z0JBQ0UsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzlELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDM0M7YUFDRjs7Ozs7O1FBR08sc0NBQUs7Ozs7WUFBYjtnQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7b0JBRXJCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTs7b0JBQ3hDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtnQkFFaEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzRCQUMvQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTs7NEJBQ3hCLE1BQU0sR0FBRyxrQkFBa0I7OzRCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7OzRCQUMvQyxPQUFPLEdBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzZCQUN2RSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNmLEtBQUssRUFBRSxDQUFDOzRCQUNSLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUMzQyxPQUFPLEVBQUUsT0FBTzs0QkFDaEIsR0FBRyxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxpQkFBaUI7NEJBQ2pFLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsaUJBQWlCO3lCQUNuRSxDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7cUJBQU07b0JBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzRCQUNyQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTs7NEJBQ3hCLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOzs0QkFDekIsTUFBTSxHQUFHLEtBQUssR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0I7OzRCQUNwRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7NEJBQzNDLE9BQU8sR0FDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NkJBQ3ZFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDeEUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDZixLQUFLLEVBQUUsQ0FBQzs0QkFDUixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDM0MsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLEdBQUcsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsaUJBQWlCOzRCQUNqRSxJQUFJLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGlCQUFpQjs0QkFDbEUsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSzt5QkFDdkMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7O3dCQUMxQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTs7d0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzt3QkFDaEYsT0FBTyxHQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzt5QkFDdkUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN4RSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixLQUFLLEVBQUUsQ0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLEdBQUcsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUI7d0JBQzdFLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUI7cUJBQy9FLENBQUMsQ0FBQztpQkFDSjthQUNGOzs7Ozs7Ozs7O1FBTU8sd0NBQU87Ozs7O1lBQWYsVUFBZ0IsS0FBVTs7b0JBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7O29CQUNyQyxXQUFXLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFOztvQkFDN0MsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXOztvQkFDM0IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZOztvQkFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLOztvQkFDeEUsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLOztvQkFDeEUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztvQkFDakUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztvQkFDakUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztvQkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQzs7b0JBQ25GLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7b0JBQzVCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztxQkFDbkUsS0FBSyxJQUFJLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFM0MsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7aUJBQy9COztvQkFDRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztvQkFFakMsSUFBSTtnQkFDUixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDbkIsS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0wsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFOzRCQUNoQixLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNYO3dCQUNELEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7cUJBQzNFO29CQUNELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQzVGO3FCQUFNO29CQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7cUJBQ3hCO29CQUNELElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTt3QkFDaEIsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDWDtvQkFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMxRjs7b0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3pFLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDN0M7YUFDRjs7b0JBMVRGVyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSxzbkNBcUJYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLGtzREFBa3NELENBQUM7d0JBQzVzRCxJQUFJLEVBQUU7NEJBQ0osTUFBTSxFQUFFLE9BQU87NEJBQ2YsYUFBYSxFQUFFLDBCQUEwQjt5QkFDMUM7cUJBQ0Y7Ozs7d0JBaERDRyxpQkFBVTt3QkFLSCxlQUFlOzs7O3FDQThDckJJLGFBQU07aUNBS05DLFlBQUs7K0JBZ0JMQSxZQUFLOzhCQWVMQSxZQUFLOzhCQWNMQSxZQUFLO2dDQVlMQSxZQUFLO2lDQU1MQSxZQUFLOytCQUVMQSxZQUFLO2lDQUVMQSxZQUFLO3FDQUdMRCxhQUFNO3VDQUVOQSxhQUFNOztRQThNVCw2QkFBQztLQUFBOzs7Ozs7QUNsVkQ7Ozs7UUF5Q0ksaUJBQWlCLEdBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3pCOzs7Ozs7OztRQUFBO1NBZ0RDOzs7O1FBZkMscURBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ25DOzs7Ozs7Ozs7O1FBTUQsaURBQWM7Ozs7O1lBQWQsVUFBZSxLQUFvQjtnQkFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLRSxlQUFNLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUN6QjthQUNGOztvQkEvQ0ZULGdCQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDRCQUE0Qjt3QkFDdEMsUUFBUSxFQUFFLHc0QkFnQlg7d0JBQ0MsTUFBTSxFQUFFLENBQUMsOHhDQUE4eEMsQ0FBQzt3QkFDeHlDLElBQUksRUFBRTs0QkFDSixPQUFPLEVBQUUsNEJBQTRCOzRCQUNyQywwQ0FBMEMsRUFBRSx5QkFBeUI7NEJBQ3JFLFdBQVcsRUFBRSx3QkFBd0I7eUJBQ3RDO3dCQUNELGFBQWEsRUFBRUMsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsZUFBZSxFQUFFQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNoRDs7O2dDQUlFUSxnQkFBUyxTQUFDLHlCQUF5Qjs7UUFpQnRDLCtCQUFDO0tBQUEsSUFBQTs7OztBQUVEO1FBd0pFLDJCQUFvQixPQUFrQixFQUNsQixRQUFpQixFQUNqQixPQUFlLEVBQ2YsaUJBQW1DLEVBQ0ssZUFBZSxFQUMzQyxZQUFnQyxFQUNoQyxJQUFvQixFQUNGLFNBQWM7WUFQNUMsWUFBTyxHQUFQLE9BQU8sQ0FBVztZQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFTO1lBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7WUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1lBQ0ssb0JBQWUsR0FBZixlQUFlLENBQUE7WUFDM0MsaUJBQVksR0FBWixZQUFZLENBQW9CO1lBQ2hDLFNBQUksR0FBSixJQUFJLENBQWdCO1lBQ0YsY0FBUyxHQUFULFNBQVMsQ0FBSzs7WUF2SXZELGNBQVMsR0FBK0IsT0FBTyxDQUFDO1lBQ2hELFNBQUksR0FBc0MsTUFBTSxDQUFDO1lBQ2pELGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1lBc0IxQixVQUFLLEdBQTJDLE1BQU0sQ0FBQztZQWV2RCxhQUFRLEdBQUcsS0FBSyxDQUFDOzs7OztZQXdCZixvQkFBZSxHQUFHLElBQUlyQixtQkFBWSxFQUFLLENBQUM7WUFLekMsdUJBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQy9CLHNCQUFpQixHQUFHLFFBQVEsQ0FBQzs7WUFHcEIsaUJBQVksR0FBdUIsSUFBSUEsbUJBQVksRUFBUSxDQUFDOztZQUc1RCxpQkFBWSxHQUF1QixJQUFJQSxtQkFBWSxFQUFRLENBQUM7O1lBRzlFLFdBQU0sR0FBRyxLQUFLLENBQUM7O1lBR2YsT0FBRSxHQUFHLHdCQUFzQixpQkFBaUIsRUFBSSxDQUFDO1lBV3pDLG1CQUFjLEdBQWEsSUFBSSxDQUFDOztZQTBCaEMsOEJBQXlCLEdBQXVCLElBQUksQ0FBQztZQUVyRCx1QkFBa0IsR0FBR3NCLGlCQUFZLENBQUMsS0FBSyxDQUFDOztZQU1oRCxvQkFBZSxHQUFHLElBQUlDLFlBQU8sRUFBVyxDQUFDO1lBVXZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixNQUFNLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUF6SkQsc0JBQ0ksc0NBQU87Ozs7O2dCQURYOzs7Z0JBSUUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RGOzs7O2dCQUVELFVBQVksSUFBYztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEOzs7V0FKQTtRQWFELHNCQUNJLDBDQUFXOzs7Z0JBRGYsY0FDNkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7Z0JBQ3hELFVBQWdCLEtBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHQyw4QkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7V0FEN0I7Ozs7UUFJeEQsd0NBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGO1FBRUQsc0JBQ0ksbUNBQUk7OztnQkFEUjtnQkFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBRUQsVUFBUyxLQUE2QztnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO2FBQzlCOzs7V0FKQTtRQVlELHNCQUNJLHNDQUFPOzs7Ozs7Ozs7Z0JBRFg7Z0JBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O2dCQUVELFVBQVksS0FBYztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBR0EsOEJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUM7OztXQUpBO1FBU0Qsc0JBQ0ksdUNBQVE7Ozs7O2dCQURaO2dCQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQjtvQkFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNyRDs7OztnQkFFRCxVQUFhLEtBQWM7O29CQUNuQixRQUFRLEdBQUdBLDhCQUFxQixDQUFDLEtBQUssQ0FBQztnQkFFN0MsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7b0JBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNyQzthQUNGOzs7V0FUQTtRQXNDRCxzQkFBSSx3Q0FBUzs7Ozs7Z0JBQWI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzVCOzs7O2dCQUVELFVBQWMsS0FBZTtnQkFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7YUFDN0I7OztXQUpBO1FBU0Qsc0JBQUksdUNBQVE7Ozs7O2dCQUFaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDM0Q7OztXQUFBO1FBR0Qsc0JBQUksdUNBQVE7Ozs7O2dCQUFaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDM0Q7OztXQUFBO1FBRUQsc0JBQUksMENBQVc7OztnQkFBZjtnQkFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2FBQ25FOzs7V0FBQTs7OztRQW1DRCx1Q0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUMxQjthQUNGOzs7Ozs7O1FBR0QsbUNBQU87Ozs7O1lBQVAsVUFBUSxJQUFPOztvQkFDUCxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7b0JBRTdELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQzthQUNGOzs7Ozs7Ozs7O1FBTUQsMENBQWM7Ozs7O1lBQWQsVUFBZSxLQUFnQztnQkFBL0MsaUJBT0M7Z0JBTkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLE1BQU0sS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7aUJBQzVFO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0I7b0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUEsQ0FBQyxDQUFDO2FBQzdGOzs7Ozs7UUFHRCxnQ0FBSTs7OztZQUFKO2dCQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNoQyxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLE1BQU0sS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7aUJBQzdFO2dCQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2lCQUMvRDtnQkFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCOzs7Ozs7UUFHRCxpQ0FBSzs7OztZQUFMO2dCQUFBLGlCQXFDQztnQkFwQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3pCO2dCQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO2dCQUNELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtvQkFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDL0I7O29CQUVLLGFBQWEsR0FBRzs7O29CQUdwQixJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2YsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ3BCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7cUJBQ3ZDO2lCQUNGO2dCQUVELElBQUksSUFBSSxDQUFDLHlCQUF5QjtvQkFDaEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTs7Ozs7O29CQU01RCxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3ZDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsYUFBYSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7Ozs7OztRQUdPLHlDQUFhOzs7O1lBQXJCO2dCQUFBLGlCQVFDO2dCQVBDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7b0JBQzVELFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7b0JBQzlDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7b0JBQ3hDLFVBQVUsRUFBRSwyQkFBMkI7aUJBQ3hDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3pEOzs7Ozs7UUFHTyx3Q0FBWTs7OztZQUFwQjtnQkFBQSxpQkFxQkM7Z0JBcEJDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUlDLHNCQUFlLENBQThCLHdCQUF3QixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUMzSDtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRTs7d0JBQzNCLFlBQVksR0FDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDN0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDOztvQkFHNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDeEIsZUFBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQzNELEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQ2pDLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQzthQUM5RDs7Ozs7O1FBR08sd0NBQVk7Ozs7WUFBcEI7O29CQUNRLGFBQWEsR0FBRyxJQUFJeUIscUJBQWEsQ0FBQztvQkFDdEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixFQUFFO29CQUNyRCxXQUFXLEVBQUUsSUFBSTtvQkFDakIsYUFBYSxFQUFFLGtDQUFrQztvQkFDakQsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztvQkFDOUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3RDLFVBQVUsRUFBRSwwQkFBMEI7aUJBQ3ZDLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN0RDs7Ozs7O1FBR08sd0RBQTRCOzs7O1lBQXBDO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7cUJBQzVCLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLEVBQUUsRUFDL0QsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsRUFDckMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FDckM7cUJBQ0Esb0JBQW9CLENBQ25CLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQ2xDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQ3hDO3FCQUNBLG9CQUFvQixDQUNuQixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxFQUNuQyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUNuQztxQkFDQSxvQkFBb0IsQ0FDbkIsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFDaEMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FDdEMsQ0FBQzthQUNMOztvQkFuVUZmLGdCQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsUUFBUSxFQUFFLEVBQUU7d0JBQ1osZUFBZSxFQUFFRSw4QkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxhQUFhLEVBQUVELHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7cUJBQzNCOzs7O3dCQTlFQ2UsZ0JBQVM7d0JBekJUQyxlQUFPO3dCQWVQWixhQUFNO3dCQUtOYSx1QkFBZ0I7d0RBd09IeEMsYUFBTSxTQUFDeUMsdUNBQThCO3dCQTlOM0MsZUFBZSx1QkErTlQxQyxlQUFRO3dCQWpRZDJDLG1CQUFjLHVCQWtRUjNDLGVBQVE7d0RBQ1JBLGVBQVEsWUFBSUMsYUFBTSxTQUFDMkMsZUFBUTs7Ozs4QkFySnZDYixZQUFLO2dDQWNMQSxZQUFLOzJCQUNMQSxZQUFLO21DQUNMQSxZQUFLO2tDQUVMQSxZQUFLOzJCQVdMQSxZQUFLOzhCQWVMQSxZQUFLOytCQVlMQSxZQUFLO3NDQXFCTEQsYUFBTTtpQ0FHTkMsWUFBSzt5Q0FFTEEsWUFBSzt3Q0FDTEEsWUFBSzttQ0FHTEQsYUFBTSxTQUFDLFFBQVE7bUNBR2ZBLGFBQU0sU0FBQyxRQUFROztRQWlPbEIsd0JBQUM7S0FBQTs7Ozs7O0FDeGFEOztBQXNDQSxRQUFhLGlDQUFpQyxHQUFRO1FBQ3BELE9BQU8sRUFBRWUsdUJBQWlCO1FBQzFCLFdBQVcsRUFBRUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQXNCLEdBQUEsQ0FBQztRQUNyRCxLQUFLLEVBQUUsSUFBSTtLQUNaOztBQUVELFFBQWEsNkJBQTZCLEdBQVE7UUFDaEQsT0FBTyxFQUFFQyxtQkFBYTtRQUN0QixXQUFXLEVBQUVELGlCQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixHQUFBLENBQUM7UUFDckQsS0FBSyxFQUFFLElBQUk7S0FDWjs7Ozs7OztBQU9EOzs7Ozs7UUFJRSxxQ0FBbUIsTUFBaUMsRUFBUyxhQUEwQjtZQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUEyQjtZQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1lBQ3JGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEM7UUFDSCxrQ0FBQztJQUFELENBQUMsSUFBQTs7Ozs7QUFHRDtRQW1ORSxnQ0FBb0IsV0FBdUIsRUFDWixZQUFnQyxFQUNELFlBQWdDLEVBQzlELFVBQXdCO1lBSHhELGlCQWVDO1lBZm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1lBQ1osaUJBQVksR0FBWixZQUFZLENBQW9CO1lBQ0QsaUJBQVksR0FBWixZQUFZLENBQW9CO1lBQzlELGVBQVUsR0FBVixVQUFVLENBQWM7O1lBaEU5QyxlQUFVLEdBQUcsSUFBSWxDLG1CQUFZLEVBQWtDLENBQUM7O1lBR2hFLGNBQVMsR0FBRyxJQUFJQSxtQkFBWSxFQUFrQyxDQUFDOztZQUd6RSxpQkFBWSxHQUFHLElBQUlBLG1CQUFZLEVBQVksQ0FBQzs7WUFHNUMsb0JBQWUsR0FBRyxJQUFJQSxtQkFBWSxFQUFXLENBQUM7WUFFOUMsZUFBVSxHQUFHO2FBQ1osQ0FBQTtZQUVPLGlCQUFZLEdBQXlCO2FBQzVDLENBQUE7WUFFTyx1QkFBa0IsR0FBRzthQUM1QixDQUFBO1lBRU8sNEJBQXVCLEdBQUdzQixpQkFBWSxDQUFDLEtBQUssQ0FBQztZQUU3Qyx3QkFBbUIsR0FBR0EsaUJBQVksQ0FBQyxLQUFLLENBQUM7O1lBR3pDLG9CQUFlLEdBQWdCO2dCQUNyQyxPQUFPLEtBQUksQ0FBQyxlQUFlO29CQUN6QixJQUFJLEdBQUcsRUFBQyxvQkFBb0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUMsRUFBQyxDQUFDO2FBQ2pGLENBQUE7O1lBR08sa0JBQWEsR0FBZ0IsVUFBQyxPQUF3Qjs7b0JBQ3RELFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkcsT0FBTyxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVk7b0JBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDOUQsSUFBSSxHQUFHLEVBQUMsa0JBQWtCLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLEVBQUMsQ0FBQzthQUMxRSxDQUFBOztZQUdPLGtCQUFhLEdBQWdCLFVBQUMsT0FBd0I7O29CQUN0RCxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZHLE9BQU8sQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZO29CQUNoQyxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQzlELElBQUksR0FBRyxFQUFDLGtCQUFrQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxFQUFDLENBQUM7YUFDMUUsQ0FBQTs7WUFHTyxxQkFBZ0IsR0FBZ0IsVUFBQyxPQUF3Qjs7b0JBQ3pELFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkcsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsMkJBQTJCLENBQUMsSUFBSSxDQUFDO29CQUMzRyxJQUFJLEdBQUcsRUFBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUN4QyxDQUFBOztZQUdPLGVBQVUsR0FDaEJjLGdCQUFVLENBQUMsT0FBTyxDQUNoQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7O1lBR25GLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1lBTTlCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixNQUFNLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDckQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSwwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzFEOztZQUdELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNKO1FBMU1ELHNCQUNJLHFEQUFpQjs7Ozs7O2dCQURyQixVQUNzQixLQUEyQjtnQkFDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDOzs7V0FBQTs7Ozs7UUFJTyxtREFBa0I7Ozs7WUFBMUIsVUFBMkIsS0FBMkI7Z0JBQ3BELElBQUksS0FBSyxFQUFFO29CQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtRQUVELHNCQUFhLHVEQUFtQjs7OztnQkFBaEMsVUFBaUMsTUFBc0U7Z0JBQ3JHLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjs7O1dBQUE7UUFLRCxzQkFDSSx5Q0FBSzs7Ozs7Z0JBRFQ7Z0JBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BCOzs7O2dCQUVELFVBQVUsS0FBZTtnQkFBekIsaUJBY0M7Z0JBYkMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7b0JBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUd6QixVQUFVLENBQUM7b0JBQ1QsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDbkQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQy9CO2lCQUNGLENBQUMsQ0FBQzthQUNKOzs7V0FoQkE7Ozs7UUFrQk8saURBQWdCOzs7WUFBeEI7Z0JBQ0UsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7b0JBQzNCLEtBQUssTUFBTTt3QkFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDN0MsS0FBSyxVQUFVO3dCQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUNqRCxLQUFLLE1BQU07d0JBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQzdDLEtBQUssT0FBTzt3QkFDVixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztpQkFDL0M7YUFDRjs7OztRQUVPLCtDQUFjOzs7WUFBdEI7O29CQUNNLFdBQVc7Z0JBRWYsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7b0JBQzNCLEtBQUssTUFBTTt3QkFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3dCQUNoRCxNQUFNO29CQUNSLEtBQUssVUFBVTt3QkFDYixXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO3dCQUNwRCxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3dCQUNoRCxNQUFNO29CQUNSLEtBQUssT0FBTzt3QkFDVixXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO3dCQUNqRCxNQUFNO2lCQUNUO2dCQUNELElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQ2pEO2dCQUVELE9BQU8sV0FBVyxDQUFDO2FBQ3BCO1FBS0Qsc0JBQ0ksdUNBQUc7Ozs7O2dCQURQO2dCQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQjs7OztnQkFFRCxVQUFRLEtBQWU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjs7O1dBTEE7UUFVRCxzQkFDSSx1Q0FBRzs7Ozs7Z0JBRFA7Z0JBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCOzs7O2dCQUVELFVBQVEsS0FBZTtnQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCOzs7V0FMQTtRQVVELHNCQUNJLDRDQUFROzs7OztnQkFEWjtnQkFFRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3pCOzs7O2dCQUVELFVBQWEsS0FBVTs7b0JBQ2YsUUFBUSxHQUFHWiw4QkFBcUIsQ0FBQyxLQUFLLENBQUM7Z0JBRTdDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDckM7YUFDRjs7O1dBVEE7Ozs7UUE0RkQsbURBQWtCOzs7WUFBbEI7Z0JBQUEsaUJBV0M7Z0JBVkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFOztvQkFFcEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVc7d0JBQ2xGLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO3dCQUN0QixLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM1QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQTJCLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDM0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxLQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3FCQUM3RixDQUFDLENBQUM7aUJBQ047YUFDRjs7OztRQUVELDRDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQzs7Ozs7UUFFRCwwREFBeUI7Ozs7WUFBekIsVUFBMEIsRUFBYztnQkFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzthQUM5Qjs7Ozs7UUFFRCx5Q0FBUTs7OztZQUFSLFVBQVMsQ0FBa0I7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNwRDs7Ozs7Ozs7O1FBTUQsNkRBQTRCOzs7O1lBQTVCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFFOzs7Ozs7O1FBR0QsMkNBQVU7Ozs7OztZQUFWLFVBQVcsS0FBUTtnQkFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7Ozs7Ozs7UUFHRCxpREFBZ0I7Ozs7OztZQUFoQixVQUFpQixFQUF3QjtnQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7YUFDeEI7Ozs7Ozs7UUFHRCxrREFBaUI7Ozs7OztZQUFqQixVQUFrQixFQUFjO2dCQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUN0Qjs7Ozs7OztRQUdELGlEQUFnQjs7Ozs7O1lBQWhCLFVBQWlCLFFBQWlCO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMxQjs7Ozs7UUFFRCwyQ0FBVTs7OztZQUFWLFVBQVcsS0FBb0I7Z0JBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLbkIsbUJBQVUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjthQUNGOzs7OztRQUVELHlDQUFROzs7O1lBQVIsVUFBUyxLQUFhOztvQkFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQTJCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUM1Rjs7OztRQUVELDBDQUFTOzs7WUFBVDtnQkFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUEyQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDN0Y7Ozs7OztRQUdELHdDQUFPOzs7O1lBQVA7O2dCQUVFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25COzs7Ozs7O1FBR1EsNkNBQVk7Ozs7O1lBQXBCLFVBQXFCLEtBQWU7Z0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUs7b0JBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDekU7O29CQS9USGdDLGdCQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsU0FBUyxFQUFFOzRCQUNULGlDQUFpQzs0QkFDakMsNkJBQTZCOzRCQUM3QixFQUFDLE9BQU8sRUFBRUMsaUNBQXdCLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFDO3lCQUN6RTt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osc0JBQXNCLEVBQUUsTUFBTTs0QkFDOUIsa0JBQWtCLEVBQUUsaURBQWlEOzRCQUNyRSxZQUFZLEVBQUUsMENBQTBDOzRCQUN4RCxZQUFZLEVBQUUsMENBQTBDOzRCQUN4RCxZQUFZLEVBQUUsVUFBVTs0QkFDeEIsU0FBUyxFQUFFLDRCQUE0Qjs0QkFDdkMsU0FBUyxFQUFFLCtCQUErQjs0QkFDMUMsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLFFBQVEsRUFBRSxXQUFXOzRCQUNyQixXQUFXLEVBQUUsb0JBQW9CO3lCQUNsQzt3QkFDRCxRQUFRLEVBQUUsb0JBQW9CO3FCQUMvQjs7Ozt3QkFoRkN4QixpQkFBVTt3QkFzQkgsZUFBZSx1QkEwUFQxQixlQUFRO3dEQUNSQSxlQUFRLFlBQUlDLGFBQU0sU0FBQyxvQkFBb0I7d0JBN1A3Q2tELHNCQUFZLHVCQThQTm5ELGVBQVE7Ozs7d0NBOUxwQitCLFlBQUs7MENBY0xBLFlBQUs7NEJBUUxBLFlBQUs7MEJBNkRMQSxZQUFLOzBCQWFMQSxZQUFLOytCQWFMQSxZQUFLO2lDQWlCTEQsYUFBTTtnQ0FHTkEsYUFBTTs7UUF1S1QsNkJBQUM7S0FBQTs7Ozs7O0FDallEOzs7QUFnQkE7UUE2Q0UsaUNBQW1CLEtBQXdCLEVBQVUsa0JBQXFDO1lBQXZFLFVBQUssR0FBTCxLQUFLLENBQW1CO1lBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtZQWZsRixrQkFBYSxHQUFHSSxpQkFBWSxDQUFDLEtBQUssQ0FBQztTQWVtRDtRQVQ5RixzQkFDSSw2Q0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2Rjs7OztnQkFDRCxVQUFhLEtBQWM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUdFLDhCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DOzs7V0FIQTs7Ozs7UUFRRCw2Q0FBVzs7OztZQUFYLFVBQVksT0FBc0I7Z0JBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQzNCO2FBQ0Y7Ozs7UUFFRCw2Q0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNsQzs7OztRQUVELG9EQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzNCOzs7OztRQUVELHVDQUFLOzs7O1lBQUwsVUFBTSxLQUFZO2dCQUNoQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7aUJBQ3pCO2FBQ0Y7Ozs7UUFFTyxvREFBa0I7OztZQUExQjtnQkFBQSxpQkFRQzs7b0JBUE8sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBR2dCLE9BQVksRUFBRTs7b0JBQy9GLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO29CQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsR0FBR0EsT0FBWSxFQUFFO2dCQUV6RSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHQyxVQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO3FCQUM1RSxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsR0FBQSxDQUFDLENBQUM7YUFDOUQ7O29CQTVFRjlCLGdCQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjt3QkFDckMsUUFBUSxFQUFFLGduREFrQlg7d0JBQ0MsSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSwyQkFBMkI7eUJBQ3JDO3dCQUNELFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLGFBQWEsRUFBRUMsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsbUJBQW1CLEVBQUUsS0FBSzt3QkFDMUIsZUFBZSxFQUFFQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNoRDs7Ozt3QkFoQ1FFLDBCQUFpQjt3QkFSeEJFLHdCQUFpQjs7OztxQ0E2Q2hCRSxZQUFLLFNBQUMsS0FBSzsrQkFHWEEsWUFBSzs7UUF5Q1IsOEJBQUM7S0FBQTs7Ozs7OztRQ3RFSyxhQUFhLEdBQUcsQ0FBQzs7Ozs7O0FBTXZCO1FBMEZFLG9DQUErQixRQUE0QixFQUNHLFlBQWdDO1lBRC9ELGFBQVEsR0FBUixRQUFRLENBQW9CO1lBQ0csaUJBQVksR0FBWixZQUFZLENBQW9CO1lBcEVyRixTQUFJLEdBQTJDLE1BQU0sQ0FBQztZQUVyRCxtQkFBYyxHQUFHLElBQUluQixtQkFBWSxFQUFRLENBQUM7O1lBMkMxQyxtQkFBYyxHQUFHLElBQUlBLG1CQUFZLEVBQUssQ0FBQztZQXdCL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE1BQU0sMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNyRDtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixNQUFNLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDMUQ7O2dCQUVLLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFOztnQkFDbEQsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDOztnQkFDMUQsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDOzs7Z0JBR3hELFFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sRUFBQyxJQUFJLE1BQUEsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFDMUMsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUUxRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUM7UUFqRkQsc0JBQ0ksa0RBQVU7Ozs7Ozs7Z0JBRGQ7Z0JBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7O2dCQUVELFVBQWUsS0FBUTs7b0JBQ2pCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVc7b0JBQ25DLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNsRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUM1QjtpQkFDRjthQUNGOzs7V0FkQTtRQW1CRCxzQkFDSSxnREFBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQUVELFVBQWEsS0FBUTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRTs7O1dBTEE7Ozs7UUEwREQsdURBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7Ozs7Ozs7UUFHRCxrREFBYTs7Ozs7WUFBYixVQUFjLElBQVk7O29CQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQy9FLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3hDOzs7Ozs7UUFHTywwQ0FBSzs7OztZQUFiO2dCQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOztvQkFFakUsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxnQkFBZ0I7b0JBQ25CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzt3QkFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLGFBQWEsQ0FBQztnQkFFdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7Ozs7OztRQUdPLHFEQUFnQjs7OztZQUF4Qjs7b0JBQ00sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7b0JBQzlELFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUcsSUFBSSxFQUFFLEVBQUU7b0JBQzNFLElBQUksSUFBSSxJQUFJLGFBQWEsRUFBRTt3QkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3JCLElBQUksR0FBRyxDQUFDLENBQUM7cUJBQ1Y7O3dCQUNHLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O3dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTt3QkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7O3dCQUNuQixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7eUJBQ2hDLElBQUksQ0FBQyxJQUFJLDZCQUE2QixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNyRjthQUNGOzs7Ozs7Ozs7OztRQU1PLDJEQUFzQjs7Ozs7O1lBQTlCLFVBQStCLElBQU87Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3RDOzs7OztRQUVPLGtEQUFhOzs7O1lBQXJCLFVBQXNCLFNBQWlCO2dCQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQzthQUNqQzs7OztRQUVELHVEQUFrQjs7O1lBQWxCO2dCQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO2FBQzFCOztvQkF0TEZXLGdCQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLCtCQUErQjt3QkFDekMsUUFBUSxFQUFFLHVvQkFjWDt3QkFDQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7d0JBQzNCLGFBQWEsRUFBRUMsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsZUFBZSxFQUFFQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNoRDs7Ozt3QkFoQ0MsZUFBZSx1QkFzR0Z6QixlQUFRO3dEQUNSQSxlQUFRLFlBQUlDLGFBQU0sU0FBQyxvQkFBb0I7Ozs7MkJBcEVuRDhCLFlBQUs7cUNBRUxELGFBQU07aUNBS05DLFlBQUs7K0JBc0JMQSxZQUFLO2lDQWFMQSxZQUFLO3FDQUdMRCxhQUFNOztRQW9IVCxpQ0FBQztLQUFBOzs7Ozs7Ozs7OztBQzFMRDtRQXNGRSxtQ0FBK0IsUUFBNEIsRUFDRyxZQUFnQztZQUQvRCxhQUFRLEdBQVIsUUFBUSxDQUFvQjtZQUNHLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtZQS9EcEYsbUJBQWMsR0FBRyxJQUFJbEIsbUJBQVksRUFBUSxDQUFDO1lBRTNDLFNBQUksR0FBMkMsTUFBTSxDQUFDOztZQXlDckQsbUJBQWMsR0FBRyxJQUFJQSxtQkFBWSxFQUFLLENBQUM7WUFxQi9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixNQUFNLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDckQ7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsTUFBTSwwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFDO1FBcEVELHNCQUNJLGlEQUFVOzs7OztnQkFEZDtnQkFFRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekI7Ozs7Z0JBRUQsVUFBZSxLQUFROztvQkFDakIsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsRCxJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVztvQkFDbkMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7OztpQkFNZDthQUNGOzs7V0FkQTtRQW1CRCxzQkFDSSwrQ0FBUTs7Ozs7Z0JBRFo7Z0JBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCOzs7O2dCQUVELFVBQWEsS0FBUTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRTs7O1dBTEE7Ozs7UUE2Q0Qsc0RBQWtCOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Q7Ozs7Ozs7UUFHRCxrREFBYzs7Ozs7WUFBZCxVQUFlLEtBQWE7O29CQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7YUFDN0I7Ozs7OztRQUdPLHlDQUFLOzs7O1lBQWI7Z0JBQUEsaUJBU0M7Z0JBUkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztvQkFFekQsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7Z0JBRXJELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FDMUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFBLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDakU7Ozs7Ozs7Ozs7O1FBTU8sMERBQXNCOzs7Ozs7WUFBOUIsVUFBK0IsSUFBTztnQkFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDOzs7Ozs7OztRQUdPLHVEQUFtQjs7Ozs7O1lBQTNCLFVBQTRCLEtBQWEsRUFBRSxTQUFpQjs7b0JBQ3RELFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQyxPQUFPLElBQUksNkJBQTZCLENBQ3RDLEtBQUssRUFBRSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2pGOzs7Ozs7O1FBR08sbURBQWU7Ozs7O1lBQXZCLFVBQXdCLEtBQWE7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixPQUFPLElBQUksQ0FBQztpQkFDYjs7b0JBRUcsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUczQyxLQUFLLElBQUksSUFBSSxHQUFHLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQzlELElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDekIsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0Y7Z0JBRUQsT0FBTyxLQUFLLENBQUM7YUFDZDs7Ozs7Ozs7OztRQU1ELHNEQUFrQjs7Ozs7OztZQUFsQjtnQkFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQzthQUMxQjs7b0JBaExGVyxnQkFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw4QkFBOEI7d0JBQ3hDLFFBQVEsRUFBRSxrcEJBZVg7d0JBQ0MsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUMzQixhQUFhLEVBQUVDLHdCQUFpQixDQUFDLElBQUk7d0JBQ3JDLGVBQWUsRUFBRUMsOEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7Ozs7d0JBNUJDLGVBQWUsdUJBNkZGekIsZUFBUTt3REFDUkEsZUFBUSxZQUFJQyxhQUFNLFNBQUMsb0JBQW9COzs7O3FDQS9EbkQ2QixhQUFNOzJCQUVOQyxZQUFLO2lDQUdMQSxZQUFLOytCQXNCTEEsWUFBSztpQ0FhTEEsWUFBSztxQ0FHTEQsYUFBTTs7UUE4R1QsZ0NBQUM7S0FBQTs7Ozs7O0FDNU1EO1FBcUJBO1NBb0NDOztvQkFwQ0EzQixlQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQbUQsbUJBQVk7NEJBQ1pDLHdCQUFlOzRCQUNmQyx3QkFBZTs0QkFDZkMsc0JBQWE7NEJBQ2JDLHFCQUFhOzRCQUNiQyxlQUFVO3lCQUNYO3dCQUNELGVBQWUsRUFBRTs0QkFDZix3QkFBd0I7eUJBQ3pCO3dCQUNELFlBQVksRUFBRTs0QkFDWix5QkFBeUI7NEJBQ3pCLDZCQUE2Qjs0QkFDN0Isc0JBQXNCOzRCQUN0QixpQkFBaUI7NEJBQ2pCLHVCQUF1Qjs0QkFDdkIsc0JBQXNCOzRCQUN0Qix3QkFBd0I7NEJBQ3hCLDBCQUEwQjs0QkFDMUIseUJBQXlCO3lCQUMxQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AseUJBQXlCOzRCQUN6Qiw2QkFBNkI7NEJBQzdCLHNCQUFzQjs0QkFDdEIsaUJBQWlCOzRCQUNqQix1QkFBdUI7NEJBQ3ZCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4QiwwQkFBMEI7NEJBQzFCLHlCQUF5Qjt5QkFDMUI7cUJBQ0Y7O1FBRUQsOEJBQUM7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9