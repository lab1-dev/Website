import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {Color, IconButton, Material, Paper, Spacer, ToolBar} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageToolBar extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    @ref toolBar1?: ToolBar
    @ref toolBar2?: ToolBar
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'ToolBar', 'ToolBar allows grouping Buttons and IconButtons.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'ToolBar-Typescript.ts', Shared.docTypescript, '#f5f5f5',true,Align.FillWidth);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'ToolBar-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5',true,Align.FillWidth);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'ToolBar-ManagedTSX.tsx', Shared.docManagedTSX, '#f5f5f5',true,Align.FillWidth);
    }

    buildTypescript() {
        //docStart ToolBar-Typescript.ts
        new Paper({
            parent: this.layout1,
            elevation: 25,
            childContent: new ToolBar({
                disableGutters: true,//removes side spacing
                childContent: [
                    new IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, className: 'ml-5 mr-5'}),
                    new IconButton({icon: Material.Icons.Outlined.Add}),
                    new IconButton({icon: Material.Icons.Outlined.Edit}),
                    new IconButton({icon: Material.Icons.Outlined.Remove, color: Color.Inherit}),
                    new IconButton({icon: Material.Icons.Outlined.Settings}),
                    new Spacer({}),
                    new IconButton({icon: Material.Icons.Outlined.Notifications, color: Color.Primary}),
                    new IconButton({icon: Material.Icons.Outlined.PushPin, color: Color.Secondary}),
                    new IconButton({icon: Material.Icons.Outlined.PeopleAlt, color: Color.Tertiary}),
                    new IconButton({icon: Material.Icons.Outlined.MoreVert, color: Color.Primary}),
                ]
            })
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart ToolBar-ManagedTS.ts
        let managedContent = [
            Material.Paper({
                elevation: 25,
                childContent: Material.ToolBar({
                    ref: this.toolBar1,
                    disableGutters: true,//removes side spacing
                    childContent: [
                        Material.IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, className: 'ml-5 mr-5'}),
                        Material.IconButton({icon: Material.Icons.Outlined.Add}),
                        Material.IconButton({icon: Material.Icons.Outlined.Edit}),
                        Material.IconButton({icon: Material.Icons.Outlined.Remove, color: Color.Inherit}),
                        Material.IconButton({icon: Material.Icons.Outlined.Settings}),
                        Material.Spacer({}),
                        Material.IconButton({icon: Material.Icons.Outlined.Notifications, color: Color.Primary}),
                        Material.IconButton({icon: Material.Icons.Outlined.PushPin, color: Color.Secondary}),
                        Material.IconButton({icon: Material.Icons.Outlined.PeopleAlt, color: Color.Tertiary}),
                        Material.IconButton({icon: Material.Icons.Outlined.MoreVert, color: Color.Primary}),
                    ]
                })
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart ToolBar-ManagedTSX.tsx
        let managedContent = [
            <Paper elevation={25}>
                <ToolBar ref={this.toolBar2} disableGutters={true}>
                    <IconButton icon={Material.Icons.Outlined.Menu} color={Color.Inherit} className='ml-5 mr-5'/>
                    <IconButton icon={Material.Icons.Outlined.Add}/>
                    <IconButton icon={Material.Icons.Outlined.Edit}/>
                    <IconButton icon={Material.Icons.Outlined.Remove} color={Color.Inherit}/>
                    <IconButton icon={Material.Icons.Outlined.Settings}/>
                    <Spacer/>
                    <IconButton icon={Material.Icons.Outlined.Notifications} color={Color.Primary}/>
                    <IconButton icon={Material.Icons.Outlined.PushPin} color={Color.Secondary}/>
                    <IconButton icon={Material.Icons.Outlined.PeopleAlt} color={Color.Tertiary}/>
                    <IconButton icon={Material.Icons.Outlined.MoreVert} color={Color.Primary}/>
                </ToolBar>
            </Paper>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }
}
