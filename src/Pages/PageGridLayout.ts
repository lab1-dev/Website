import {Align, ColumnLayout, component, GridLayout, GridLayoutAlignSelf, HorizontalAlign, Lab1, Layout, Rectangle, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageGridLayout extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    //endregion

    public constructor() {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildAlignment();
        this.buildRowsAndColumns();
        this.buildRowSpanAndColumnSpan();
        this.buildAlignSelf();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'GridLayout', `GridLayout layouts components inside row/column combinations. It\'s a simplified version of <a style=\"color: ${Shared.blueTextColor}\" href=\"https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grid</a>.`);

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Alignment', 'GridLayout-Alignment.ts', "Use the <b>alignChildContent</b> property to define how child components are aligned inside the GridLayout. The default value is <b>Align.Left | Align.Top</b>, and you can combine one horizontal and one vertical flag together to achieve the desired result. Possible values are: <b>Left, Right, Top, Bottom, HorizontalCenter, VerticalCenter, FillWidth, FillHeight, Baseline.</b>", '#f5f5f5', Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Rows and Columns', 'GridLayout-RowsAndColumns.ts', "Use the <b>rows</b> and <b>columns</b> properties to set the the number of rows and columns, or use them to define the heights of the rows and the widths of the columns. <br> Example 1: <i>rows: 2</i> creates a GridLayout with 2 rows where each row has a dynamic height based on its childContent's height. <br>\n" +
            "\n" +
            "Example 2: <i>rows: '144px 144px'</i> creates a GridLayout with 2 rows where each row has 144 pixels height. In this case, do not set the <b>height</b> of the GridLayout, since it will take the sum of the rows.<br>\n" +
            "\n" +
            "Example 3: <i>rows: '25% 75%'</i> creates a GridLayout with 2 rows where the first row uses 25% of GridLayout's height, and the second uses 75%. In this case, remember to set the <b>height</b> of the GridLayout.<br>\n" +
            "\n" +
            "Example 4: <i>rows: '144px auto'</i> creates a GridLayout with 2 rows where the first row has 144 pixels height and the second row has a dynamic height based on the GridLayout childContent's height. ", '#f5f5f5', Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'RowSpan and ColumnSpan', 'GridLayout-RowSpanAndColumnSpan.ts', "Use the <b>gridLayoutRowSpan</b> and <b>gridLayoutColumnSpan</b> attached properties to set the number of rows and columns the child component will use. <br>Ex: <i>gridLayoutColumnSpan: 2</i> let the child component ocupy 2 columns. ", '#f5f5f5', Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Align Self', 'GridLayout-AlignSelf.ts', 'Use the <b>gridLayoutAlignSelf</b> attached property to define the horizontal and vertical alignment of a specific component inside GridLayout. Possible values are : <b>Auto (default), Left, Right, Top, Bottom, HorizontalCenter, VerticalCenter, FillWidth, FillHeight, Baseline.</b><br>When <b>gridLayoutAlignSelf</b> is not set, it defaults to <b>Auto</b>, which means the horizontal and vertical alignment is determined by <b>GridLayout.alignChildContent</b> property. ', '#f5f5f5', Align.HorizontalCenter);
    }

    buildAlignment() {
        //docStart GridLayout-Alignment.ts
        let gridLayout = new GridLayout({
            parent: this.layout1,
            alignChildContent: Align.HorizontalCenter | Align.VerticalCenter,
            backgroundColor: 'white',
            width: 600,
            height: 400,
            rows: 2,
            columns: 2,
            rowSpacing: 40,
            columnSpacing: 20
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#2196f3ff',//blue
            width: 150,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#1ec8a5ff',//green
            minWidth: 100,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff9800ff',//yellow
            width: 100,
            height: 50
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff4081ff',//pink
            width: 50,
            height: 50
        });
        //docEnd
    }

    buildRowsAndColumns() {
        //docStart GridLayout-RowsAndColumns.ts
        let gridLayout = new GridLayout({
            parent: this.layout2,
            alignChildContent: Align.HorizontalCenter | Align.VerticalCenter,
            backgroundColor: 'white',
            width: 600,
            rows: '144px 144px',
            height:400,
            columns: 2,
            rowSpacing: 40,
            columnSpacing: 20
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#2196f3ff',//blue
            width: 150,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#1ec8a5ff',//green
            minWidth: 100,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff9800ff',//yellow
            width: 100,
            height: 50
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff4081ff',//pink
            width: 50,
            height: 50
        });
        //docEnd
    }

    buildRowSpanAndColumnSpan() {
        //docStart GridLayout-RowSpanAndColumnSpan.ts
        let gridLayout = new GridLayout({
            parent: this.layout3,
            alignChildContent: Align.FillWidth | Align.VerticalCenter,
            backgroundColor: 'white',
            width: 600,
            rows: '144px 144px',
            columns: 3,
            rowSpacing: 12,
            columnSpacing: 12
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#2196f3ff',//blue
            height: 100,
            gridLayoutColumnSpan: 2 //this rectangle uses 2 columns
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#1ec8a5ff',//green
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff9800ff',//yellow
            height: 50
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff4081ff',//pink
            height: 50
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#8d6e63',//brown
            height: 50
        });
        //docEnd
    }

    buildAlignSelf() {
        //docStart GridLayout-AlignSelf.ts
        let gridLayout = new GridLayout({
            parent: this.layout4,
            backgroundColor: 'white',
            width: 600,
            height: 400,
            rows: 2,
            columns: 2,
            rowSpacing: 40,
            columnSpacing: 20
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#2196f3ff',//blue
            gridLayoutAlignSelf: GridLayoutAlignSelf.Top| GridLayoutAlignSelf.Left,
            width: 150,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#1ec8a5ff',//green
            gridLayoutAlignSelf: GridLayoutAlignSelf.VerticalCenter| GridLayoutAlignSelf.HorizontalCenter,
            minWidth: 100,
            height: 100
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff9800ff',//yellow
            gridLayoutAlignSelf: GridLayoutAlignSelf.Bottom| GridLayoutAlignSelf.Right,
            width: 100,
            height: 50
        });

        new Rectangle({
            parent: gridLayout,
            backgroundColor: '#ff4081ff',//pink
            gridLayoutAlignSelf: GridLayoutAlignSelf.FillHeight| GridLayoutAlignSelf.FillWidth
        });
        //docEnd
    }
}
