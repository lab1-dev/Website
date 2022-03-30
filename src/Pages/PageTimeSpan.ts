import {ColumnLayout, HorizontalAlign, Lab1, Layout, Router, routerPage, TimeSpan} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Text, Typo} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageTimeSpan extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildFromString();
        this.buildToString();
        this.buildTimeSpanInfo();
        this.buildMaths();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'TimeSpan', 'TimeSpan class provides methods to handle time and time intervals.','PageTimeSpan.ts');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'From string', 'TimeSpan-fromString.ts','','#f5f2f0',false);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'To string', 'TimeSpan-toString.ts','','#f5f2f0',false);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'TimeSpan info', 'TimeSpan-Info.ts','','#f5f2f0',false);
        this.layout4 = this.buildColumnLayoutSection(columnLayout, 'Math', 'TimeSpan-Math.ts','','#f5f2f0',false);
    }

    buildFromString() {
        this.print(this.layout1, "TimeSpan.fromString('12:22').hours", TimeSpan.fromString('12:22').hours);
        this.print(this.layout1, 'TimeSpan.fromDays(2).days', TimeSpan.fromDays(2).days);
        this.print(this.layout1, 'TimeSpan.fromHours(2).hours', TimeSpan.fromHours(2).hours);
        this.print(this.layout1, 'TimeSpan.fromMinutes(2).minutes', TimeSpan.fromMinutes(2).minutes);
    }

    buildToString() {
        this.printText(this.layout2, 'let time=new TimeSpan(0,14,22,0);');
        let time = new TimeSpan(0, 14, 22, 0);
        this.print(this.layout2, 'time.toString()', time.toString());
        this.print(this.layout2, 'time.toString(true)//true=amPM', time.toString(true));
    }

    buildTimeSpanInfo() {
        this.print(this.layout3, 'TimeSpan.now.toString()', TimeSpan.now.toString());
        this.print(this.layout3, 'TimeSpan.now.days', TimeSpan.now.days);
        this.print(this.layout3, 'TimeSpan.now.hours', TimeSpan.now.hours);
        this.print(this.layout3, 'TimeSpan.now.minutes', TimeSpan.now.minutes);
        this.print(this.layout3, 'TimeSpan.now.seconds', TimeSpan.now.seconds);
        this.print(this.layout3, 'TimeSpan.now.milliseconds', TimeSpan.now.milliseconds);

        this.printText(this.layout3, '');
        this.printText(this.layout3, 'let time=new TimeSpan(2,12,0,0);');
        let time = new TimeSpan(2, 12, 0, 0);
        this.print(this.layout3, 'time.totalDays', time.totalDays);
        this.print(this.layout3, 'time.totalHours', time.totalHours);
        this.print(this.layout3, 'time.totalMinutes', time.totalMinutes);
        this.print(this.layout3, 'time.totalSeconds', time.totalSeconds);
        this.print(this.layout3, 'time.totalMilliseconds', time.totalMilliseconds);
    }

    buildMaths() {
        //add
        this.printSubSection(this.layout4, 'add', false);
        this.printText(this.layout4, 'let time1=new TimeSpan(0,2,0,0);');
        this.printText(this.layout4, 'let time2=new TimeSpan(0,2,0,0);');
        let time1 = new TimeSpan(0, 2, 0, 0);
        let time2 = new TimeSpan(0, 2, 0, 0);
        this.print(this.layout4, 'time1.add(time2).hours', time1.add(time2).hours);

        //subtract
        this.printSubSection(this.layout4, 'subtract');
        this.printText(this.layout4, 'let time1=new TimeSpan(0,4,0,0);');
        this.printText(this.layout4, 'let time2=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 4, 0, 0);
        this.print(this.layout4, 'time1.subtract(time2).hours', time1.subtract(time2).hours);

        //multiply
        this.printSubSection(this.layout4, 'multiply');
        this.printText(this.layout4, 'let time1=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 2, 0, 0);
        this.print(this.layout4, 'time1.multiply(2).hours', time1.multiply(2).hours);

        //divide
        this.printSubSection(this.layout4, 'divide');
        this.printText(this.layout4, 'let time1=new TimeSpan(0,4,0,0);');
        this.printText(this.layout4, 'let time2=new TimeSpan(0,2,0,0);');
        time1 = new TimeSpan(0, 4, 0, 0);
        this.print(this.layout4, 'time1.divide(2).hours', time1.divide(2).hours);

        //equals
        this.printSubSection(this.layout4, 'equals');
        time1 = new TimeSpan(0, 4, 0, 0);
        time2 = new TimeSpan(0, 4, 0, 0);
        this.print(this.layout4, 'time1.equals(time2)', time1.equals(time2));
    }

    print(parentLayout: Layout, title: string, content: string | number | boolean): void {
        let prismContent=`<pre style="margin: unset; padding: unset"><code class="language-typescript">${title}</code>: <a style="color: ${Shared.blueTextColor}">${content}</a></pre>`;
        new Text({
            parent: parentLayout,
            typo: Typo.body1,
            childContent:prismContent
        });
    }

    printText(parentLayout: Layout, txt: string): void {
        let prismContent=`<pre style="margin: unset; padding: unset"><code class="language-typescript">${txt}</code>`;
        new Text({
            parent: parentLayout,
            typo: Typo.body1,
            childContent: prismContent
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
