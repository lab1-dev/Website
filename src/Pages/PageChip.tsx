import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Chip, Color, Material, Size, Variant} from "@lab1/material";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageChip extends BasePage {

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
    @ref chip1?: Chip
    @ref chip2?: Chip
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildTextChips();
        this.buildOutlinedChips();
        this.buildClosableChips();
        this.buildIconsChips();
        this.buildLabelChips();
        this.buildSizedChips();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Chips', 'Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Chip-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Chip-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Chip-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Text', 'Chip-Text.ts', 'Text Chips differ from other components by using a transparent background instead of fully transparent.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Outlined', 'Chip-Outlined.ts', 'This looks and feels like outlined normaly do with a border and slightly transparent background on hover.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Closable', 'Chip-Closable.ts', 'You can change the icon using <b>closeIcon</b> property.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'Icons', 'Chip-Icons.ts', 'The icon can be set using the <b>icon</b> property.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Label', 'Chip-Label.ts', 'Label Chips use the default theme border-radius.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout10 = this.buildRowLayoutSection(columnLayout, 'Sized', 'Chip-Sized.ts','3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Chip-Typescript.ts
        new Chip({
            parent: this.layout1,
            color: Color.Primary,
            text: 'Primary'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Secondary,
            text: 'Secondary'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Info,
            text: 'Info'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Success,
            text: 'Success'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Warning,
            text: 'Warning'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Error,
            text: 'Error'
        });

        new Chip({
            parent: this.layout1,
            color: Color.Dark,
            text: 'Dark'
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Chip-ManagedTS.ts
        let managedContent = [
            Material.Chip({
                ref: this.chip1,
                color: Color.Primary,
                text: 'Primary',
                onClick: () => console.log('hi there!')
            }),
            Material.Chip({
                color: Color.Secondary,
                text: 'Secondary'
            }),
            Material.Chip({
                color: Color.Info,
                text: 'Info'
            }),
            Material.Chip({
                color: Color.Success,
                text: 'Success'
            }),
            Material.Chip({
                color: Color.Warning,
                text: 'Warning'
            }),
            Material.Chip({
                color: Color.Error,
                text: 'Error'
            }),
            Material.Chip({
                color: Color.Dark,
                text: 'Dark'
            })
        ];
        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Chip-ManagedTSX.tsx
        let managedContent = [
            <Chip ref={this.chip2} color={Color.Primary} text='Primary' onClick={() => console.log('hi there!')}/>,
            <Chip color={Color.Secondary} text='Secondary'/>,
            <Chip color={Color.Info} text='Info'/>,
            <Chip color={Color.Success} text='Success'/>,
            <Chip color={Color.Warning} text='Warning'/>,
            <Chip color={Color.Error} text='Error'/>,
            <Chip color={Color.Dark} text='Dark'/>
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildTextChips() {
        //docStart Chip-Text.ts
        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Primary,
            text: 'Primary'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Secondary,
            text: 'Secondary'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Info,
            text: 'Info'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Success,
            text: 'Success'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Warning,
            text: 'Warning'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Error,
            text: 'Error'
        });

        new Chip({
            parent: this.layout5,
            variant: Variant.Text,
            color: Color.Dark,
            text: 'Dark'
        });
        //docEnd
    }

    buildOutlinedChips() {
        //docStart Chip-Outlined.ts
        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Primary,
            text: 'Primary'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Secondary,
            text: 'Secondary'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Info,
            text: 'Info'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Success,
            text: 'Success'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Warning,
            text: 'Warning'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Error,
            text: 'Error'
        });

        new Chip({
            parent: this.layout6,
            variant: Variant.Outlined,
            color: Color.Dark,
            text: 'Dark'
        });
        //docEnd
    }

    buildClosableChips() {
        //docStart Chip-Closable.ts
        new Chip({
            parent: this.layout7,
            color: Color.Default,
            text: 'Closable',
            onClose: () => console.log('chip closed')
        });

        new Chip({
            parent: this.layout7,
            color: Color.Error,
            text: 'Closable',
            onClose: () => console.log('chip closed')
        });

        new Chip({
            parent: this.layout7,
            color: Color.Primary,
            text: 'Closable',
            closeIcon: Material.Icons.Filled.AlarmAdd,
            onClose: () => console.log('chip closed')
        });

        new Chip({
            parent: this.layout7,
            color: Color.Success,
            text: 'Closable',
            closeIcon: Material.Icons.Filled.AlarmOn,
            onClose: () => console.log('chip closed')
        });
        //docEnd
    }

    buildIconsChips() {
        //docStart Chip-Icons.ts
        new Chip({
            parent: this.layout8,
            text: 'Favorites',
            iconColor: Color.Success,
            icon: Material.Icons.Filled.Favorite
        });

        new Chip({
            parent: this.layout8,
            text: 'Extensions',
            color: Color.Dark,
            icon: Material.Icons.Filled.Extension
        });

        new Chip({
            parent: this.layout8,
            text: 'Account',
            color: Color.Primary,
            icon: Material.Icons.Filled.Person
        });

        new Chip({
            parent: this.layout8,
            text: 'Your flight times',
            color: Color.Secondary,
            icon: Material.Icons.Filled.FlightTakeoff
        });

        new Chip({
            parent: this.layout8,
            text: 'Verified User',
            color: Color.Info,
            icon: Material.Icons.Filled.VerifiedUser
        });
        //docEnd
    }

    buildLabelChips() {
        //docStart Chip-Label.ts
        new Chip({
            parent: this.layout9,
            label: true,
            text: 'Default'
        });

        new Chip({
            parent: this.layout9,
            label: true,
            text: 'Friends',
            color: Color.Tertiary,
            //style: 'color:black;',
            icon: Material.Icons.Filled.PeopleOutline
        });

        new Chip({
            parent: this.layout9,
            label: true,
            text: 'Information',
            color: Color.Info,
            icon: Material.Icons.Filled.Info
        });
        //docEnd
    }

    buildSizedChips() {
        //docStart Chip-Sized.ts
        new Chip({
            parent: this.layout10,
            size: Size.Small,
            text: 'Small'
        });

        new Chip({
            parent: this.layout10,
            size: Size.Medium,
            color:Color.Tertiary,
            text: 'Medium'
        });

        new Chip({
            parent: this.layout10,
            size: Size.Large,
            color:Color.Info,
            text: 'Large'
        });
        //docEnd
    }
}
