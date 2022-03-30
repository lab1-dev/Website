import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Button, Color, FabButton, IconButton, Material, Placement, Tooltip, Typo, Variant, Text, Size} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageTooltip extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    @ref tooltip1?: Tooltip
    @ref tooltip2?: Tooltip
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildArrowTooltips();
        this.buildColoredTooltips();
        this.buildTransitions();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Tooltip', 'Displays a tip to the User when mouse hovers over the component.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Tooltip-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Tooltip-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Tooltip-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout,'Arrow Tooltips', 'Tooltip-Arrow.ts','Tooltip can display arrows pointing to its activator. Set the <b>arrow</b> property to true to show them.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout,'Colored Tooltips', 'Tooltip-Colored.ts',"Tooltips can be displayed in different colors with the <b>color</b> property.",'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout,'Transitions', 'Tooltip-Transitions.ts',"The tooltip's default delay can be set with <b>delay</b> as a number in milliseconds.",'white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Tooltip-Typescript.ts
        new Tooltip({
            parent: this.layout1,
            text: 'Favorite',
            childContent: new IconButton({
                icon: Material.Icons.Filled.Favorite,
                color:Color.Info
            })
        });

        new Tooltip({
            parent: this.layout1,
            text: 'Add',
            childContent: new FabButton({
                startIcon: Material.Icons.Filled.Add,
                size:Size.Small,
                color: Color.Tertiary
            })
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Tooltip-ManagedTS.ts
        let managedContent = [
            Material.Tooltip({
                ref: this.tooltip1,
                text: 'Favorite',
                childContent: Material.IconButton({
                    icon: Material.Icons.Filled.Favorite,
                    color:Color.Info
                })
            }),
            Material.Tooltip({
                text: 'Add',
                childContent: Material.FabButton({
                    startIcon: Material.Icons.Filled.Add,
                    size:Size.Small,
                    color: Color.Tertiary
                })
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Tooltip-ManagedTSX.tsx
        let managedContent = [
            <Tooltip ref={this.tooltip2} text='Favorite'>
                <IconButton icon={Material.Icons.Filled.Favorite} color={Color.Info}/>
            </Tooltip>,
            <Tooltip text='Add'>
                <FabButton startIcon={Material.Icons.Filled.Add} size={Size.Small} color={Color.Tertiary}/>
            </Tooltip>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildArrowTooltips() {
        //docStart Tooltip-Arrow.ts
        new Tooltip({
            parent: this.layout4,
            text: "Arrow Left",
            arrow: true,
            placement: Placement.Left,
            childContent: new Button({
                variant: Variant.Text,
                text: 'Arrow Left'
            })
        });

        new Tooltip({
            parent: this.layout4,
            text: "Arrow Top",
            arrow: true,
            placement: Placement.Top,
            childContent: new Button({
                variant: Variant.Text,
                text: 'Arrow Top'
            })
        });

        new Tooltip({
            parent: this.layout4,
            text: "Arrow Bottom",
            arrow: true,
            placement: Placement.Bottom,
            childContent: new Button({
                variant: Variant.Text,
                text: 'Arrow Bottom'
            })
        });
        //docEnd
    }

    buildColoredTooltips() {
        //docStart Tooltip-Colored.ts
        new Tooltip({
            parent:this.layout5,
            text:'Primary',
            color:Color.Primary,
            placement:Placement.Top,
            childContent:new Button({text:'Primary'})
        });

        new Tooltip({
            parent:this.layout5,
            text:'Secondary',
            color:Color.Secondary,
            placement:Placement.Top,
            childContent:new Button({text:'Secondary'})
        });

        new Tooltip({
            parent:this.layout5,
            text:'Tertiary',
            color:Color.Tertiary,
            arrow:true,
            placement:Placement.Bottom,
            childContent:new Button({text:'Tertiary'})
        });
        //docEnd
    }

    buildTransitions() {
        //docStart Tooltip-Transitions.ts
        new Tooltip({
            parent:this.layout6,
            delay:600,
            text:'Delayed: 600',
            childContent:new Button({
                text:'Delayed'
            }),
        });

        new Tooltip({
            parent:this.layout6,
            duration:1000,
            text:'Duration: 1000',
            childContent:new Button({
                text:'Duration'
            }),
        });

        new Tooltip({
            parent:this.layout6,
            duration:0,
            text:'Duration: 0',
            childContent:new Button({
                text:'Zero duration'
            }),
        });
        //docEnd
    }
}
