import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Property, ref, Router, routerPage} from "@lab1/core";
import {Button, Color, Material, Overlay, Paper, Variant} from "@lab1/material"
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageOverlay extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    @ref overlay1?: Overlay
    @ref overlay2?: Overlay
    visible = new Property<boolean>(this, false);
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildAbsolute();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Overlay', 'Provides a window which can have an arbitrary number of overlay views that will sit above the root view of the window.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Overlay-Typescript.ts', Shared.docTypescript,'white',true,Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Overlay-ManagedTS.ts', Shared.docManagedTS,'white',true,Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Overlay-ManagedTSX.tsx', Shared.docManagedTSX,'white',true,Align.HorizontalCenter);
        this.layout4 = this.buildColumnLayoutSection(columnLayout, 'Absolute', 'Overlay-Absolute.ts', 'The overlay can be contained inside its parent using the <b>absolute</b> property and css Style="position: relative;".','white',true,Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Overlay-Typescript.ts
        let overlay = new Overlay({
            parent: this.layout1,
            darkBackground: true,
            autoClose: true
        });

        new Button({
            parent: this.layout1,
            variant: Variant.Filled,
            color: Color.Info,
            text: 'Toggle Overlay',
            onClick: () => overlay.visible.value = !overlay.visible.value
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Overlay-ManagedTS.ts
        let managedContent = [
            Material.Overlay({
                ref: this.overlay1,
                darkBackground: true,
                autoClose: true
            }),
            Material.Button({
                variant: Variant.Filled,
                color: Color.Info,
                text: 'Toggle Overlay',
                onClick: () => this.overlay1!.visible.value = !this.overlay1!.visible.value
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Overlay-ManagedTSX.tsx
        let managedContent = [
            <Overlay ref={this.overlay2} darkBackground={true} autoClose={true}/>,
            <Button variant={Variant.Filled} color={Color.Info} text='Toggle Overlay'
                    onClick={() => this.overlay2!.visible.value = !this.overlay2!.visible.value}/>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildAbsolute() {
        //docStart Overlay-Absolute.ts
        let paper = new Paper({
            parent: this.layout4,
            className: 'pa-8',
            height: 288,
            width: 288,
            style: 'position: relative;'//todo nao tá funcionando
        });

        new Button({
            parent: paper,
            variant: Variant.Filled,
            color: Color.Info,
            text: 'Show Overlay',
            onClick: () => this.visible.value = true
        });

        new Overlay({
            parent: paper,
            darkBackground: true,
            visible: this.visible,
            absolute: true,
            childContent: new Button({
                variant: Variant.Filled,
                color: Color.Tertiary,
                onClick: () => this.visible.value = false
            })
        });
        //docEnd
    }
}
