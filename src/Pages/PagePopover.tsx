import {Align, ColumnLayout, component, HorizontalAlign, tsx, Lab1, Layout, Property, ref, Router, routerPage} from "@lab1/core";
import {Badge, Button, Color, Grid, GridItem, Material, Origin, Popover, Radio, RadioGroup, Text, Typo, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PagePopover extends BasePage {

    //region fields and properties
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    @ref popover1?: Popover
    @ref popover2?: Popover
    readonly isOpen = new Property<boolean>(this, false);
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildDirectionAndLocation();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Popover', 'A Popover can be used to display some content on top of another.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Popover-Typescript.ts', Shared.docTypescript,'white',true,Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Popover-ManagedTS.ts', Shared.docManagedTS,'white',true,Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Popover-ManagedTSX.tsx', Shared.docManagedTSX,'white',true,Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout,'Direction and Location', 'Popover-Direction.ts','');
    }

    buildTypescript() {
        //docStart Popover-Typescript.ts
        let btn = new Button({
            parent: this.layout1,
            variant: Variant.Filled,
            color: Color.Info,
            text: 'Click me',
            onClick: () => this.isOpen.value = !this.isOpen.value
        });

        new Popover({
            parent: btn,
            fixed: true,
            anchorOrigin: Origin.BottomCenter,
            transformOrigin: Origin.TopLeft,
            className: 'px-4 pt-4 pb-4',
            open: this.isOpen,
            childContent: new Text({
                childContent: 'Content of the popover can be anything.'
            })
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Popover-ManagedTS.ts
        let managedContent = [
            Material.Button({
                variant: Variant.Filled,
                color: Color.Info,
                text: 'Click me',
                onClick: () => this.popover1!.open.value = !this.popover1!.open.value,
                childContent: Material.Popover({
                    ref:this.popover1,
                    //parent: btn,
                    fixed: true,
                    anchorOrigin: Origin.BottomCenter,
                    transformOrigin: Origin.TopLeft,
                    className: 'px-4 pt-4 pb-4',
                    childContent: new Text({
                        childContent: 'Content of the popover can be anything.'
                    })
                })
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Popover-ManagedTSX.tsx
        let managedContent=[
            <Button variant={Variant.Filled} color={Color.Info} text='Click me' onClick={()=>this.popover2!.open.value=!this.popover2?.open.value}>
                <Popover ref={this.popover2} fixed={true} anchorOrigin={Origin.BottomCenter} transformOrigin={Origin.TopLeft} className='px-4 pt-4 pb-4'>
                    <Text>
                        Content of the popover can be anything.
                    </Text>
                </Popover>
            </Button>
        ];

        this.buildManaged(this.layout3,managedContent);
        //docEnd
    }

    buildDirectionAndLocation() {
        //docStart Popover-Direction.ts
        let grid=new Grid({
            parent:this.layout4,
        });

        let gridItem=new GridItem({
            parent:grid,
            xs:3
        });

        let txt1=new Text({parent:gridItem, typo:Typo.h6, childContent:'Anchor Origin'});

        let radioGroup=new RadioGroup({parent:gridItem, className:'d-flex flex-column'})

        new Radio({parent:radioGroup, dense:true, option:'Origin.TopLeft', text:'TopLeft'});
        new Radio({parent:radioGroup, dense:true, option:'Origin.TopCenter', text:'TopCenter'});

        let gridItemcenter=new GridItem({
            parent:grid,
            xs:6,
            className:'d-flex justify-center align-center',
        })

        let badge=new Badge({

        })
        //docEnd
    }
}
