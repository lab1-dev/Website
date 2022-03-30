import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Router, RouterPage, routerPage} from "@lab1/core";
import {Button, Color, Dialog, DialogService, Material, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {MySimpleDialog} from "../Components/MySimpleDialog";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageDialog extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    //endregion

    constructor(router: Router, private dlgService: DialogService) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Dialog', 'A dialog will overlay your current app content, providing the user with either information, a choice, or other tasks.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Dialog-Typescript.ts', Shared.docTypescript,'white',true,Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Dialog-ManagedTS.ts', Shared.docManagedTS,'white',true,Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Dialog-ManagedTSX.tsx', Shared.docManagedTSX,'white',true,Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Dialog-Typescript.ts
        new Button({
            parent: this.layout1,
            variant: Variant.Filled,
            color: Color.Info,
            text: 'Open Simple Dialog',
            onClick: async () => {
                let dialog = this.dlgService.show(MySimpleDialog, this.layout1, {firstName: 'Bruno', surName: 'Tezine'}, {closeOnEscapeKey: true});
                let result = await dialog.result();
                //sync alternative: result.then((result)=>console.log('result:',result));
                console.log('result:', result);
                //onClosed alternative: dialog.onClosed.connect((result)=>console.log('result::',result));
            }
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Dialog-ManagedTS.ts
        let managedContent = Material.Button({
            variant: Variant.Filled,
            color: Color.Info,
            text: 'Open Simple Dialog',
            onClick: async () => {
                let dialog = this.dlgService.show(MySimpleDialog, this.layout1, {firstName: 'Bruno', surName: 'Tezine'}, {closeOnEscapeKey: true});
                let result = await dialog.result();
                //sync alternative: result.then((result)=>console.log('result:',result));
                console.log('result:', result);
                //onClosed alternative: dialog.onClosed.connect((result)=>console.log('result::',result));
            }
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Dialog-ManagedTSX.tsx
        let managedContent =
            <Button
                variant={Variant.Filled}
                color={Color.Info}
                text='Open Simple Dialog'
                onClick={async () => {
                    let dialog = this.dlgService.show(MySimpleDialog, this.layout1, {firstName: 'Bruno', surName: 'Tezine'}, {closeOnEscapeKey: true});
                    let result = await dialog.result();
                    //sync alternative: result.then((result)=>console.log('result:',result));
                    console.log('result:', result);
                    //onClosed alternative: dialog.onClosed.connect((result)=>console.log('result::',result));
                }
            }/>

        this.buildManaged(this.layout3,managedContent);
        //docEnd
    }
}
