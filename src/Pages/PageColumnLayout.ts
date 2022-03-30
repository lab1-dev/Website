import {Align, ColumnLayout, ColumnLayoutAlignSelf, component, HorizontalAlign, Lab1, Layout, Rectangle, Router, routerPage, RowLayoutAlignSelf} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageColumnLayout extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildAlignment();
        this.buildSpacing();
        this.buildGrow();
        this.buildAlignSelf();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'ColumnLayout', `ColumnLayout layouts components in a single column. It's a simplified version of <a style=\"color: ${Shared.blueTextColor}\" href=\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>.`,'PageColumnLayout.ts');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Alignment', 'ColumnLayout-Alignment.ts', "Use the <b>alignChildContent</b> property to define how child components are aligned inside the Columnlayout. The default value is <b>Align.Left | Align.Top</b>, and you can combine one horizontal and one vertical flag together to achieve the desired result. Possible values are: <b>Left, Right, Top, Bottom, HorizontalCenter, VerticalCenter, FillWidth, Baseline.</b>", '#f5f5f5', Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Spacing', 'ColumnLayout-Spacing.ts', 'Use the <b>spacing</b> property to set the spacing between components inside the ColumnLayout.', '#f5f5f5', Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Grow', 'ColumnLayout-Grow.ts', 'Use the <b>columnLayoutGrow</b> attached property to define the ability for the component to grow if necessary. If all items have columnLayoutGrow set to 1, the remaining height in the ColumnLayout will be distributed equally to all children. If one of the children has a value of 2, that component would take up twice as much of the height either one of the others.', 'white', Align.HorizontalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Align Self', 'ColumnLayout-AlignSelf.ts', 'Use the <b>columnLayoutAlignSelf</b> attached property to define the horizontal alignment of a specific component inside ColumnLayout. Possible values are : <b>Auto (default), Left, Right, HorizontalCenter, FillWidth, Baseline.</b><br>When <b>columnLayoutAlignSelf</b> is not set, it defaults to <b>Auto</b>, which means the horizontal alignment is determined by <b>ColumnLayout.alignChildContent</b> property. ', '#f5f5f5', Align.HorizontalCenter);
    }

    buildAlignment() {
        //docStart ColumnLayout-Alignment.ts
        let columnLayout = new ColumnLayout({
            parent: this.layout1,
            alignChildContent: Align.VerticalCenter | Align.FillWidth,
            width: 80,
            height: 360,
            backgroundColor: 'white',
            spacing: 12
        });

        new Rectangle({
            parent: columnLayout,
            height: 50,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: columnLayout,
            height: 50,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: columnLayout,
            height: 50,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildSpacing() {
        //docStart ColumnLayout-Spacing.ts
        let columnLayout = new ColumnLayout({
            parent: this.layout2,
            width: 80,
            height: 360,
            backgroundColor: 'white',
            spacing: 50,
            alignChildContent: Align.Right | Align.Bottom
        });

        new Rectangle({
            parent: columnLayout,
            width: 50,
            height: 50,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: columnLayout,
            width: 50,
            height: 50,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: columnLayout,
            width: 50,
            height: 50,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildGrow() {
        //docStart ColumnLayout-Grow.ts
        let columnLayout = new ColumnLayout({
            parent: this.layout4,
            width: 80,
            height: 360,
            backgroundColor: 'white',
            spacing: 12,
            alignChildContent: Align.FillWidth
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutGrow: 2,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutGrow: 1,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutGrow: 1,
            backgroundColor: '#ff9800ff'//yellow
        });
        //docEnd
    }

    buildAlignSelf() {
        //docStart ColumnLayout-AlignSelf.ts
        let columnLayout = new ColumnLayout({
            parent: this.layout5,
            width: 144,
            height: 360,
            backgroundColor: 'white',
            spacing: 12
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutAlignSelf: ColumnLayoutAlignSelf.Left,
            height: 40,
            width: 40,
            backgroundColor: '#2196f3ff'//blue
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutAlignSelf: ColumnLayoutAlignSelf.HorizontalCenter,
            height: 40,
            width: 40,
            backgroundColor: '#1ec8a5ff'//green
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutAlignSelf: ColumnLayoutAlignSelf.Right,
            height: 40,
            width: 40,
            backgroundColor: '#ff9800ff'//yellow
        });

        new Rectangle({
            parent: columnLayout,
            columnLayoutAlignSelf: ColumnLayoutAlignSelf.FillWidth,
            height: 40,
            marginLeft: 8,
            marginRight: 8,
            backgroundColor: '#8d6e63'//brown
        });
        //docEnd
    }
}
