import {ArrayHelper, ColumnLayout, DateTime, Div, HorizontalAlign, Lab1, Layout, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Text, Typo} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageDateTime extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout4!: Layout
    layout3!: Layout
    layout5!: Layout
    layout6!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildFromString();
        this.buildToString();
        this.buildDateMaths();
        this.buildTimeMaths();
        this.buildDateInfo();
        this.buildTimeInfo();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'DateTime', `DateTime class is a wrapper of <a style="color: ${Shared.blueTextColor}" href="https://moment.github.io/luxon">Luxon.js</a> Library with some additional features. Tokens used to read from/to strings are the same and available for reference  <a style="color: ${Shared.blueTextColor}" href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">here</a>.`,'PageDateTime.ts');
        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'From string', 'DateTime-fromStrng.ts','','#f5f2f0',false);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'To string', 'DateTime-toString.ts','','#f5f2f0',false);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Date math', 'DateTime-Math.ts','','#f5f2f0',false);
        this.layout4 = this.buildColumnLayoutSection(columnLayout, 'Time math', 'DateTime-TimeMath.ts','','#f5f2f0',false);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Date info', 'DateTime-DateInfo.ts','','#f5f2f0',false);
        this.layout6 = this.buildColumnLayoutSection(columnLayout, 'Time info', 'DateTime-TimeInfo.ts','','#f5f2f0',false);
    }

    buildFromString() {
        //available tokens: https://moment.github.io/luxon/#/parsing?id=table-of-tokens
        this.print(this.layout1, "DateTime.fromFormat('22/2/2222','dd/MM/yyyy').toShortDateString()", DateTime.fromFormat('22/2/2222', 'dd/M/yyyy').toShortDateString());
    }

    buildToString() {
        let now = DateTime.now;
        //DateTime to string
        this.printSubSection(this.layout2, 'DateTime to string', false);
        this.print(this.layout2, 'DateTime.now.toLongDateTimeString()', now.toLongDateTimeString());
        this.print(this.layout2, 'DateTime.now.toShortDateTimeString()', now.toShortDateTimeString());
        this.print(this.layout2, "DateTime.now.toFormat('dd/MM/yyyy  hh:mm:ss')", DateTime.now.toFormat('dd/MM/yyyy hh:mm:ss'));
        //Date to string
        this.printSubSection(this.layout2, 'Date to string');
        this.print(this.layout2, 'DateTime.now.toLongDateString()', now.toLongDateString());
        this.print(this.layout2, 'DateTime.now.toShortDateString()', now.toShortDateString());
        //Time to string
        this.printSubSection(this.layout2, 'Time to string');
        this.print(this.layout2, 'DateTime.now.toLongTimeString()', now.toLongTimeString());
        this.print(this.layout2, 'DateTime.now.toShortTimeString()', now.toShortTimeString());
        //To iso
        this.printSubSection(this.layout2, 'To iso');
        this.print(this.layout2, 'DateTime.now.toISO()', now.toISO());
        this.print(this.layout2, 'DateTime.now.toISODate()', now.toISODate());
        //To utc time
        this.printSubSection(this.layout2, 'To utc time');
        this.print(this.layout2, 'DateTime.utcNow.toShortTimeString()', DateTime.utcNow.toShortTimeString());
        this.print(this.layout2, 'DateTime.now.toUTC().toShortTimeString()', now.toUTC().toShortTimeString());
    }

    buildDateMaths() {
        this.print(this.layout3, 'DateTime.now.addDays(1).toShortDateString()', DateTime.now.addDays(1).toShortDateString());
        this.print(this.layout3, 'DateTime.now.addMonths(1).toShortDateString()', DateTime.now.addMonths(1).toShortDateString());
        this.print(this.layout3, 'DateTime.now.addYears(1).toShortDateString()', DateTime.now.addYears(1).toShortDateString());
    }

    buildTimeMaths() {
        this.print(this.layout4, 'DateTime.now.addHours(1).toLongTimeString()', DateTime.now.addHours(1).toLongTimeString());
        this.print(this.layout4, 'DateTime.now.addMinutes(1).toLongTimeString()', DateTime.now.addMinutes(1).toLongTimeString());
        this.print(this.layout4, 'DateTime.now.addSeconds(1).toLongTimeString()', DateTime.now.addSeconds(1).toLongTimeString());
        this.print(this.layout4, 'DateTime.now.addMilliseconds(12000).toLongTimeString()', DateTime.now.addMilliseconds(12000).toLongTimeString());//todo nao funciona
    }

    buildDateInfo() {
        //Basic info
        this.printSubSection(this.layout5, 'Basic info', false);
        this.print(this.layout5, 'DateTime.today.toISO()', DateTime.today.toISO());//todo remover o offset
        this.print(this.layout5, 'DateTime.now.date.toLongDateString()', DateTime.now.date.toLongDateString());
        this.print(this.layout5, 'DateTime.now.date.toShortDateString()', DateTime.now.date.toShortDateString());
        this.print(this.layout5, "DateTime.now.date.toFormat('dd/MM/yyyy')", DateTime.now.date.toFormat('dd/MM/yyyy'));

        //Day info
        this.printSubSection(this.layout5, 'Day info');
        this.print(this.layout5, 'DateTime.today.day', DateTime.today.day);
        this.print(this.layout5, 'DateTime.today.dayOfYear', DateTime.today.dayOfYear);//todo ver
        this.print(this.layout5, 'DateTime.today.dayOfWeek', DateTime.today.dayOfWeek);
        this.print(this.layout5, 'DateTime.today.daysInYear', DateTime.today.daysInYear);
        this.print(this.layout5, 'DateTime.today.remainingDaysInYear', DateTime.today.remainingDaysInYear);
        this.print(this.layout5, 'DateTime.today.remainingDaysInMonth', DateTime.today.remainingDaysInMonth);
        this.print(this.layout5, 'DateTime.today.remainingDaysInWeek', DateTime.today.remainingDaysInWeek);
        this.print(this.layout5, 'DateTime.today.startOfDay.toShortDateTimeString()', DateTime.today.startOfDay.toShortDateTimeString());
        this.print(this.layout5, 'DateTime.today.endOfDay.toShortDateTimeString()', DateTime.today.endOfDay.toShortDateTimeString());

        //Week info
        this.printSubSection(this.layout5, 'Week info');
        this.print(this.layout5, 'DateTime.today.weekDayLong', DateTime.today.weekDayLong);
        this.print(this.layout5, 'DateTime.today.weekDayShort', DateTime.today.weekDayShort);//todo remover o ponto
        this.print(this.layout5, 'DateTime.today.weekOfYear', DateTime.today.weekOfYear);
        this.print(this.layout5, 'DateTime.today.abbreviatedWeekDayNames', DateTime.abbreviatedWeekDayNames + '');
        this.print(this.layout5, 'DateTime.today.startOfWeek.toShortDateString()', DateTime.today.startOfWeek.toShortDateString());
        this.print(this.layout5, 'DateTime.today.endOfWeek.toShortDateString()', DateTime.today.endOfWeek.toShortDateString());

        //Month info
        this.printSubSection(this.layout5, 'Month info');
        this.print(this.layout5, 'DateTime.today.month', DateTime.today.month);
        this.print(this.layout5, 'DateTime.today.monthNameLong', DateTime.today.monthNameLong);
        this.print(this.layout5, 'DateTime.today.monthNameShort', DateTime.today.monthNameShort);//todo remover o ponto
        this.print(this.layout5, 'DateTime.today.daysInMonth', DateTime.today.daysInMonth);
        this.print(this.layout5, 'DateTime.today.startOfMonth.toShortDateString()', DateTime.today.startOfMonth.toShortDateString());
        this.print(this.layout5, 'DateTime.today.endOfMonth.toShortDateString()', DateTime.today.endOfMonth.toShortDateString());

        //Year info
        this.printSubSection(this.layout5, 'Year info');
        this.print(this.layout5, 'DateTime.today.year', DateTime.today.year);
        this.print(this.layout5, 'DateTime.today.startOfYear.toShortDateString()', DateTime.today.startOfYear.toShortDateString());
        this.print(this.layout5, 'DateTime.today.endOfYear.toShortDateString()', DateTime.today.endOfYear.toShortDateString());

        this.print(this.layout5, 'DateTime.today.isLeapYear', DateTime.today.isLeapYear);
    }

    buildTimeInfo() {
        this.print(this.layout6, 'DateTime.now.toShortTimeString()', DateTime.now.toShortTimeString());
        this.print(this.layout6, 'DateTime.now.timeOfDay.toString()', DateTime.now.timeOfDay.toString());
        this.print(this.layout6, 'DateTime.now.hour', DateTime.now.hour);
        this.print(this.layout6, 'DateTime.now.minute', DateTime.now.minute);
        this.print(this.layout6, 'DateTime.now.second', DateTime.now.second);
        this.print(this.layout6, 'DateTime.now.millisecond', DateTime.now.millisecond);
    }

    print(parentLayout: Layout, title: string, content: string | number | boolean): void {
        let prismContent=`<pre style="margin: unset; padding: unset"><code class="language-typescript">${title}</code>: <a style="color: ${Shared.blueTextColor}">${content}</a></pre>`;
        new Text({
            parent: parentLayout,
            typo: Typo.body1,
            childContent:prismContent
        });
    }

    printSubSection(parentLayout: Layout, title: string, addNewLineBefore = true): void {
        let txt = addNewLineBefore ? `<br>${title.toUpperCase()}` : `${title.toUpperCase()}`
        new Text({
            parent: parentLayout,
            typo: Typo.h6,
            childContent: txt
        });
    }
}
