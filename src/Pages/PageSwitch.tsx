import {ColumnLayout, HorizontalAlign, Lab1, component, Router, routerPage, Layout, ref, tsx, Align} from "@lab1/core";
import {Color, Material, Switch} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageSwitch extends BasePage {

    //region fields and properties
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    @ref switch1?: Switch<boolean>
    @ref switch2?: Switch<boolean>
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildBasicSwitches();
        this.buildSwitchesWithThumbIcon();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Switch', 'Similar to a checkbox but visually different, the switch lets the User switch between two values with the tap of a button.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Switch-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Switch-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Switch-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Basic switches', 'Switch-Basic.ts', 'Switches without text.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Thumb Icon', 'Switch-ThumbIcon.ts', 'Use the <b>thumbIcon</b> property to set the icon.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Switch-Typescript.ts
        new Switch({
            parent: this.layout1,
            color: Color.Info,
            text: 'Info',
            checked: true,
            onChange: (checked) => console.log(`switch checked: ${checked}`)
        });

        new Switch({
            parent: this.layout1,
            color: Color.Warning,
            text: 'Warning',
            checked: true
        });

        new Switch({
            parent: this.layout1,
            color: Color.Success,
            text: 'Success',
            checked: true
        });

        new Switch({
            parent: this.layout1,
            text: 'Disabled',
            disabled: true
        });

        new Switch({
            parent: this.layout1,
            readOnly: true,
            text: 'ReadOnly'
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Switch-ManagedTS.ts
        let managedContent = [
            Material.Switch({
                ref: this.switch1,
                color: Color.Info,
                text: 'Info',
                checked: true,
                onChange: (checked) => console.log(`switch checked: ${checked}`)
            }),
            Material.Switch({
                color: Color.Warning,
                text: 'Warning',
                checked: true
            }),
            Material.Switch({
                color: Color.Success,
                text: 'Success',
                checked: true
            }),
            Material.Switch({
                text: 'Disabled',
                disabled: true
            }),
            Material.Switch({
                parent: this.layout1,
                readOnly: true,
                text: 'ReadOnly'
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Switch-ManagedTSX.tsx
        let managedContent = [
            <Switch ref={this.switch2} color={Color.Info} text='Info' checked={true} onChange={(checked) => console.log(`switch checked: ${checked}`)}/>,
            <Switch color={Color.Warning} text='Warning' checked={true}/>,
            <Switch color={Color.Success} text='Success' checked={true}/>,
            <Switch text='Disabled' disabled={true}/>,
            <Switch text='ReadOnly' readOnly={true}/>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildBasicSwitches() {
        //docStart Switch-Basic.ts
        new Switch({
            parent: this.layout4
        });

        new Switch({
            parent: this.layout4,
            color: Color.Info,
            checked: true
        });

        new Switch({
            parent: this.layout4,
            color: Color.Tertiary,
            checked: true
        });
        //docEnd
    }

    buildSwitchesWithThumbIcon() {
        //docStart Switch-ThumbIcon.ts
        new Switch({
            parent: this.layout6,
            thumbIcon: Material.Icons.Filled.FavoriteBorder,
            thumbIconColor: Color.Tertiary,
            text: 'Favorite'
        });

        new Switch({
            parent: this.layout6,
            thumbIcon: Material.Icons.Filled.Info,
            thumbIconColor: Color.Info,
            text: 'Info'
        });

        new Switch({
            parent: this.layout6,
            thumbIcon: Material.Icons.Filled.Done,
            thumbIconColor: Color.Success,
            text: 'Done'
        });
        //docEnd
    }
}
