import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {ListView, ListItem, Material, Paper, Divider} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageListView extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    @ref listView1?: ListView
    @ref listView2?: ListView
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildNestedList();
        this.buildAvatarList();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'ListView', 'Easily customizable and scrollable lists. Make them suit your needs with avatars, icons, or something like checkboxes.','PageListView.tsx');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'ListView-Typescript.ts', Shared.docTypescript, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'ListView-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'ListView-ManagedTSX.tsx', Shared.docManagedTSX, '#f5f5f5', true, Align.HorizontalCenter);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Nested', 'ListView-Nested.ts', "It's possible to add a ListView inside another. The ListView becomes expandable/collapsable.", '#f5f5f5', true, Align.HorizontalCenter);
        this.layout6 = this.buildColumnLayoutSection(columnLayout, 'Avatar', 'ListView-Avatar.ts', 'Use the <b>avatar</b> property to add Avatar images to the ListView.', '#f5f5f5', true, Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart ListView-Typescript.ts
        new Paper({
            parent: this.layout1,
            width: 288,
            childContent: new ListView({
                clickable: true,
                selectedValue: '2',
                onSelectedItemChange: (item) => console.log(`Item changed. Current item: ${item.text}`),
                childContent: [
                    new ListItem({value: '1', text: 'Inbox', icon: Material.Icons.Filled.Inbox}),
                    new ListItem({value: '2', text: 'Sent', icon: Material.Icons.Filled.Send}),
                    new Divider({}),
                    new ListItem({value: '3', text: 'Trash'}),
                    new ListItem({value: '4', text: 'Spam'})
                ]
            })
        })
        //docEnd
    }

    buildManagedTS() {
        //docStart ListView-ManagedTS.ts
        let managedContent = Material.Paper({
            width: 288,
            childContent: Material.ListView({
                ref: this.listView1,
                clickable: true,
                selectedValue: '2',
                onSelectedItemChange: (item) => console.log(`${item.text} clicked`),
                childContent: [
                    Material.ListItem({value: '1', text: 'Inbox', icon: Material.Icons.Filled.Inbox}),
                    Material.ListItem({value: '2', text: 'Sent', icon: Material.Icons.Filled.Send}),
                    Material.Divider({}),
                    Material.ListItem({value: '3', text: 'Trash'}),
                    Material.ListItem({value: '4', text: 'Spam'})
                ]
            })
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart ListView-ManagedTSX.tsx
        //todo adicionar largura
        let managedContent = <Paper width={288}>
            <ListView ref={this.listView2} clickable={true} selectedValue={'2'} onSelectedItemChange={(item) => console.log(`${item.text} clicked`)}>
                <ListItem value='1' text='Inbox' icon={Material.Icons.Filled.Inbox}/>
                <ListItem value='2' text='Sent' icon={Material.Icons.Filled.Send}/>
                <Divider/>
                <ListItem value='3' text='Trash'/>
                <ListItem value='4' text='Spam'/>
            </ListView>
        </Paper>

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildNestedList() {
        //docStart ListView-Nested.ts
        new Paper({
            parent: this.layout5,
            width: 288,
            childContent: new ListView({
                clickable: true,
                childContent: [
                    new ListItem({text: 'Send mail', icon: Material.Icons.Filled.Send}),
                    new ListItem({text: 'Drafts', icon: Material.Icons.Filled.Drafts}),
                    new ListItem({
                        text: 'Inbox',
                        icon: Material.Icons.Filled.Inbox,
                        initiallyExpanded: true,
                        nestedList: new ListView({
                            childContent: [
                                new ListItem({text: 'Starred', icon: Material.Icons.Filled.StarRate}),
                                new ListItem({text: 'Snoozed', icon: Material.Icons.Filled.WatchLater}),
                            ]
                        })
                    }),
                ]
            })
        });
        //docEnd
    }

    buildAvatarList() {
        //docStart ListView-Avatar.ts
        new Paper({
            parent: this.layout6,
            width: 288,
            childContent: new ListView({
                clickable: true,
                childContent: [
                    new ListItem({text: 'Photos', avatar: Material.Icons.Filled.Image}),
                    new ListItem({text: 'Work', avatar: Material.Icons.Filled.Work}),
                    new ListItem({text: 'Vacation', avatar: Material.Icons.Filled.Umbrella}),
                ]
            })
        });
        //docEnd
    }
}
