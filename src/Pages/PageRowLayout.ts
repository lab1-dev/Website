import {Align, ColumnLayout, component, HorizontalAlign, Lab1, Layout, Rectangle, routerPage, RowLayout, RowLayoutAlignSelf, Wrap} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageRowLayout extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    //endregion

    public constructor() {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildAlignment();
        this.buildSpacing();
        this.buildWrap();
        this.buildGrow();
        this.buildAlignSelf();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'RowLayout', `RowLayout layouts components in a single row. It's a simplified version of <a style=\"color: ${Shared.blueTextColor}\" href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>.`,'PageRowLayout.ts');
        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Alignment', 'RowLayout-Alignment.ts', "Use the <b>alignChildContent</b> property to define how child components are aligned inside the RowLayout. The default value is <b>Align.Left | Align.Top</b>, and you can combine one horizontal and one vertical flag together to achieve the desired result. Possible values are: <b>Left, Right, Top, Bottom, HorizontalCenter, VerticalCenter, FillHeight, Baseline.</b>", '#f5f5f5', Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Spacing', 'RowLayout-Spacing.ts', 'Use the <b>spacing</b> property to set the spacing between components inside the RowLayout.', '#f5f5f5', Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Wrap', 'RowLayout-Wrap.ts', 'By default, components inside a RowLayout uses only one row. Use the <b>wrap</b> property to allow wrap into multiple rows when there is no width available in the current row.', '#f5f5f5', Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Grow', 'RowLayout-Grow.ts', 'Use the <b>rowLayoutGrow</b> attached property to define the ability for the component to grow if necessary. If all items have rowLayoutGrow set to 1, the remaining width in the RowLayout will be distributed equally to all children. If one of the children has a value of 2, that component would take up twice as much of the width either one of the others.', 'white', Align.HorizontalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Align Self', 'RowLayout-AlignSelf.ts', 'Use the <b>rowLayoutAlignSelf</b> attached property to define the vertical alignment of a specific component inside RowLayout. Possible values are : <b>Auto (default), Top, Bottom, VerticalCenter, FillHeight, Baseline.</b><br>When <b>rowLayoutAlignSelf</b> is not set, it defaults to <b>Auto</b>, which means the vertical alignment is determined by <b>RowLayout.alignChildContent</b> property. ', '#f5f5f5', Align.HorizontalCenter);
    }

    buildAlignment() {
        //docStart RowLayout-Alignment.ts
        let rowLayout = new RowLayout({
            parent: this.layout1,
            alignChildContent: Align.HorizontalCenter | Align.FillHeight,
            width: 600,
            height: 80,
            backgroundColor: 'white',
            spacing: 12
        });

        new Rectangle({
            parent: rowLayout,
            width: 100,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: rowLayout,
            width: 100,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: rowLayout,
            width: 100,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildSpacing() {
        //docStart RowLayout-Spacing.ts
        let rowLayout = new RowLayout({
            parent: this.layout2,
            width: 600,
            height: 80,
            backgroundColor: 'white',
            spacing: 50,
            alignChildContent: Align.Right | Align.Bottom
        });

        new Rectangle({
            parent: rowLayout,
            width: 100,
            height: 50,
            backgroundColor: '#2196f3ff',//blue
        });

        new Rectangle({
            parent: rowLayout,
            backgroundColor: '#1ec8a5ff',//green
            width: 100,
            height: 50,
        });

        new Rectangle({
            parent: rowLayout,
            width: 100,
            height: 50,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildWrap() {
        //docStart RowLayout-Wrap.ts
        let rowLayout = new RowLayout({
            parent: this.layout3,
            width: 600,
            height: 80,
            backgroundColor: 'white',
            spacing: 12,
            wrap: Wrap.Wrap,
            alignChildContent: Align.FillHeight
        });

        new Rectangle({
            parent: rowLayout,
            width: 200,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: rowLayout,
            width: 200,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: rowLayout,
            width: 400,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildGrow() {
        //docStart RowLayout-Grow.ts
        let rowLayout = new RowLayout({
            parent: this.layout4,
            width: 600,
            height: 80,
            backgroundColor: 'white',
            spacing: 12,
            alignChildContent: Align.FillHeight
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutGrow: 2,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutGrow: 1,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutGrow: 1,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildAlignSelf() {
        //docStart RowLayout-AlignSelf.ts
        let rowLayout = new RowLayout({
            parent: this.layout5,
            width: 600,
            height: 80,
            backgroundColor: 'white',
            spacing: 12
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutAlignSelf: RowLayoutAlignSelf.Top,
            height: 40,
            width: 100,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutAlignSelf: RowLayoutAlignSelf.VerticalCenter,
            height: 40,
            width: 100,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutAlignSelf: RowLayoutAlignSelf.Bottom,
            height: 40,
            width: 100,
            backgroundColor: '#ff9800ff'//yellow
        });

        new Rectangle({
            parent: rowLayout,
            rowLayoutAlignSelf: RowLayoutAlignSelf.FillHeight,
            marginTop:8,
            marginBottom:8,
            width: 100,
            backgroundColor: '#8d6e63'//brown
        });
        //docEnd
    }
}
