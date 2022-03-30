import {ColumnLayout, HorizontalAlign, Lab1, Layout, Router, RouterPage, routerPage} from "@lab1/core";
import {Color, Material, TreeView, TreeViewItem} from '@lab1/material';
import {BasePage} from "./BasePage";

@routerPage()
export class PageTreeView extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    layout9!: Layout
    layout10!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildBasic();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout=new ColumnLayout({parent:this, horizontalAlign:HorizontalAlign.Center});
        this.buildHeader(columnLayout,'TreeView','Easily customizable tree view.');
        this.layout1 = this.buildColumnLayoutSection(columnLayout,'Basic', '');
        // this.layout2 = this.createColumnlayout('Hoverable', undefined, this, this.layout1.bottom);
        // this.layout3 = this.createColumnlayout('Dense', undefined, this,this.layout2.bottom);
        // this.layout4 = this.createColumnlayout('Expand', undefined, this,this.layout3.bottom);
        // this.layout5 = this.createColumnlayout('Icons', undefined, this,this.layout5.bottom);
        // this.layout7 = this.createColumnlayout('Selection', undefined, this,this.layout6.bottom);
        // this.layout8 = this.createColumnlayout('MultiSelect', undefined, this,this.layout7.bottom);
        // this.layout9 = this.createColumnlayout('MultiSelectColor', undefined, this,this.layout8.bottom);
        // this.layout10 = this.createColumnlayout('ItemTemplate', undefined, this,this.layout9.bottom);
    }

    buildTypescript(){

    }

    buildManagedTS(){

    }

    buildManagedTSX(){

    }

    buildBasic(){
        new TreeView<string>({
            childContent:[
                new TreeViewItem({
                    value:'Getting Started',
                    childContent:[new TreeViewItem({value:'Installation'})]
                }),
                new TreeViewItem({
                    value:'Components',
                    childContent:[
                        new TreeViewItem({value:'Avatar'}),
                        new TreeViewItem({value:'Button'}),
                    ]
                })
            ]
        });
    }

    buildHoverable(){
        new TreeView<string>({
            hover:true,
            childContent:[
                new TreeViewItem({
                    value:'content',
                    childContent:[new TreeViewItem({value:'logo.png'})]
                }),
                new TreeViewItem({
                    value:'src',
                    childContent:[
                        new TreeViewItem({value:'docs.png'}),
                        new TreeViewItem({value:'server.png'})
                    ],
                }),
            ]
        })
    }

    buildDense(){
        new TreeView<string>({
            hover:true,
            dense:true,
            childContent:[
                new TreeViewItem({
                    value:'content',
                    childContent:[new TreeViewItem({value:'logo.png'})]
                }),
                new TreeViewItem({
                    value:'src',
                    childContent:[
                        new TreeViewItem({value:'docs.png'}),
                        new TreeViewItem({value:'server.png'})
                    ],
                }),
            ]
        });
    }

    buildExpand(){
        new TreeView<string>({
            expandOnClick:true,
            childContent:[
                new TreeViewItem({
                    value:'Applications',
                    childContent:[new TreeViewItem({value:'Terminal'})]
                }),
                new TreeViewItem({
                    value:'Documents',
                    childContent:[
                        new TreeViewItem({value:'Api'}),
                        new TreeViewItem({value:'Components'})
                    ],
                }),
            ]
        });
    }

    buildIcons(){
        new TreeView<string>({
            childContent:[
                new TreeViewItem({value:'All Mail', icon:Material.Icons.Filled.Email}),
                new TreeViewItem({value:'Drafts', icon:Material.Icons.Filled.Drafts}),
                new TreeViewItem({value:'Orders', icon:Material.Icons.Filled.Label, iconColor:Color.Success}),
                new TreeViewItem({
                    value:'Categories',
                    icon:Material.Icons.Filled.Label,
                    iconColor:Color.Error,
                    expandedIcon: Material.Icons.Filled.ArrowRight,
                    childContent:[
                        new TreeViewItem({value:'Social', icon:Material.Icons.Filled.Group}),
                        new TreeViewItem({value:'Updates', icon:Material.Icons.Filled.Info, iconColor:Color.Warning}),
                        new TreeViewItem({value:'Forums', icon:Material.Icons.Filled.QuestionAnswer}),
                        new TreeViewItem({value:'Span', icon:Material.Icons.Filled.LocalOffer}),
                    ],
                }),
                new TreeViewItem({value:'Trash', icon:Material.Icons.Filled.Delete}),
            ]
        })
    }

    buildSelection(){

    }

    buildSelectedColor(){

    }

    buildMultiSelect(){

    }

    buildMultiSelectColor(){

    }

    buildItemTemplate(){

    }



}
