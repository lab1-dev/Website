import {Material, Paper} from "@lab1/material";
import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PagePaper extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    @ref paper1?: Paper
    @ref paper2?: Paper
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildVariants();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Paper', 'Paper is a useful and flexible way to shape other components without needing css or style. ');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Paper-Typescript.ts', Shared.docTypescript, '#f5f5f5',Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Paper-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5',Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Paper-ManagedTSX.tsx', Shared.docManagedTSX, '#f5f5f5',Align.HorizontalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Variants', 'Paper-Variants.ts', 'If you need an outlined surface or a square, use the <b>outlined</b> and <b>square</b> properties.', '#f5f5f5',Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Paper-Typescript.ts
        new Paper({
            parent: this.layout1,
            elevation: 0,
            width: 144,
            height: 144
        });

        new Paper({
            parent: this.layout1,
            width: 144,
            height: 144
        });

        new Paper({
            parent: this.layout1,
            elevation: 3,
            width: 144,
            height: 144
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Paper-ManagedTS.ts
        let managedCode = [
            Material.Paper({
                ref: this.paper1,
                elevation: 0,
                width: 144,
                height: 144
            }),
            Material.Paper({
                width: 144,
                height: 144
            }),
            Material.Paper({
                elevation: 3,
                width: 144,
                height: 144
            })
        ];

        this.buildManaged(this.layout2, managedCode);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Paper-ManagedTSX.tsx
        let managedContent = [
            <Paper ref={this.paper2} elevation={0} width={144} height={144}/>,
            <Paper width={144} height={144}/>,
            <Paper elevation={3} width={144} height={144}/>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildVariants() {
        //docStart Paper-Variants.ts
        new Paper({
            parent: this.layout5,
            outlined: true,
            width: 144,
            height: 144
        });

        new Paper({
            parent: this.layout5,
            outlined: true,
            square: true,
            width: 144,
            height: 144
        });

        new Paper({
            parent: this.layout5,
            square: true,
            width: 144,
            height: 144
        });
        //docEnd
    }
}
