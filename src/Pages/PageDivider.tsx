import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Router, routerPage} from "@lab1/core";
import {Color, Divider, DividerType, IconButton, ListItem, ListView, Material, Paper} from "@lab1/material";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageDivider extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildInsetDividers();
        this.buildVerticalDividers();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Divider', 'A divider is a thin line that groups content in lists and layouts.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Divider-Typescript.ts', Shared.docTypescript, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Divider-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Divider-ManagedTSX.tsx', Shared.docManagedTSX, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Inset Dividers', 'Divider-Inset.ts', 'Adds a margin to the left side of the divider.', '#f5f5f5', true, Align.HorizontalCenter);
        this.layout7 = this.buildColumnLayoutSection(columnLayout, 'Vertical Dividers', 'Divider-Vertical.ts', "Vertical dividers can be used inside parents with <b>height</b> set. If the parent doesn't have a height but is displayed with flex, use the <b>flexItem</b> property.", '#f5f5f5', true, Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Divider-Typescript.ts
        new Paper({
            parent: this.layout1,
            width: 300,
            square: true,
            childContent: new ListView({
                clickable: true,
                childContent: [
                    new ListItem({text: 'Inbox'}),
                    new Divider({}),
                    new ListItem({text: 'Sent'}),
                    new Divider({}),
                    new ListItem({text: 'Drafts'}),
                    new Divider({}),
                    new ListItem({text: 'Spam'}),
                ]
            })
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Divider-ManagedTS.ts
        let managedContent = [
            Material.Paper({
                width: 300,
                square: true,
                childContent: Material.ListView({
                    clickable: true,
                    childContent: [
                        Material.ListItem({text: 'Inbox'}),
                        Material.Divider({}),
                        Material.ListItem({text: 'Sent'}),
                        Material.Divider({}),
                        Material.ListItem({text: 'Drafts'}),
                        Material.Divider({}),
                        Material.ListItem({text: 'Spam'}),
                    ]
                })
            })
        ];
        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Divider-ManagedTSX.tsx
        let managedContent = [
            <Paper width={300} square={true}>
                <ListView clickable={true}>
                    <ListItem text='Inbox'/>
                    <Divider/>
                    <ListItem text='Sent'/>
                    <Divider/>
                    <ListItem text='Drafts'/>
                    <Divider/>
                    <ListItem text='Spam'/>
                    <Divider/>
                </ListView>
            </Paper>
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildInsetDividers() {
        //docStart Divider-Inset.ts
        new Paper({
            parent: this.layout5,
            width: 300,
            square: true,
            childContent: new ListView({
                childContent: [
                    new ListItem({text: 'Trending', avatar: Material.Icons.Filled.TrendingUp}),
                    new Divider({dividerType: DividerType.Inset}),
                    new ListItem({text: 'Most Stars', avatar: Material.Icons.Filled.StarRate}),
                    new Divider({dividerType: DividerType.Inset}),
                    new ListItem({text: 'History', avatar: Material.Icons.Filled.History}),
                    new Divider({dividerType: DividerType.Inset})
                ]
            })
        });
        //docEnd
    }

    buildVerticalDividers() {
        //docStart Divider-Vertical.ts
        new Paper({
            parent: this.layout7,
            className: 'd-flex justify-space-around',
            childContent: [
                new IconButton({icon: Material.Icons.Filled.FormatAlignLeft, color: Color.Dark, className: 'rounded-0'}),
                new IconButton({icon: Material.Icons.Filled.FormatAlignCenter, color: Color.Dark, className: 'rounded-0'}),
                new IconButton({icon: Material.Icons.Filled.FormatAlignRight, color: Color.Dark, className: 'rounded-0'}),
                new Divider({vertical: true, flexItem: true}),
                new IconButton({icon: Material.Icons.Filled.FormatBold, color: Color.Dark, className: 'rounded-0'}),
                new IconButton({icon: Material.Icons.Filled.FormatItalic, color: Color.Dark, className: 'rounded-0'}),
                new IconButton({icon: Material.Icons.Filled.FormatUnderlined, color: Color.Dark, className: 'rounded-0'}),
            ]
        });
        //docEnd
    }
}
