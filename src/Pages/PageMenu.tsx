import {Alert, Avatar, Button, Chip, Color, Material, MaterialMouseEvent, Menu, MenuItem, Severity, Variant} from "@lab1/material";
import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageMenu extends BasePage {

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
    @ref menu1?: Menu
    @ref menu2?: Menu
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildCustomization();
        this.buildMenuWidth();
        this.buildMaxHeight();
        this.buildIconButtons();
        this.buildCustomActivator();
        this.buildCustomActivator2();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Menu', 'The component shows a menu at the position of the element used to activate it.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Menu-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Menu-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Menu-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Customization', 'Menu-Customization.ts', 'The menu button gives you all the options a regular button does.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Menu Width', 'Menu-Width.ts', 'The default width of the menu popover is determined by the width of the content. You can override this with the <b>fullWidth</b> property to make it as wide as the parent.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Max Height', 'Menu-MaxHeight.ts', 'If you have a long list, you can use the <b>maxListHeight</b> property to set the maximum height and enable scrolling.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'Icon Buttons', 'Menu-IconButtons.ts', 'If an Icon is supplied through the <b>icon</b> property, the menu button will display as an IconButton.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Custom Activator', 'Menu-CustomActivator.ts', 'Using <b>activatorContent</b>, you can use any user interface element to activate the menu on click. You can place a completely customized button or any other element there.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout10 = this.buildRowLayoutSection(columnLayout, 'Mouse Events', 'Menu-ActionEvent.ts', 'With the property <b>activationEvent</b>, the menu can be opened on different mouse events.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Menu-Typescript.ts
        new Menu({
            parent: this.layout1,
            text: 'Open Menu',
            childContent: [
                new MenuItem({text: 'Item 1', onClick: () => console.log('Item 1 clicked')}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout1,
            text: 'Open Dense Menu',
            dense: true,
            childContent: [
                new MenuItem({text: 'Dense Stuff'}),
                new MenuItem({text: 'Stuff is Dense'}),
                new MenuItem({text: 'Soo Dense'})
            ]
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Menu-ManagedTS.ts
        let managedContent = [
            Material.Menu({
                ref: this.menu1,
                text: 'Open Menu',
                childContent: [
                    Material.MenuItem({text: 'Item 1'}),
                    Material.MenuItem({text: 'Item 2'}),
                    Material.MenuItem({text: 'Item 3'})
                ]
            }),
            Material.Menu({
                text: 'Open Dense Menu',
                dense: true,
                childContent: [
                    Material.MenuItem({text: 'Dense Stuff'}),
                    Material.MenuItem({text: 'Stuff is Dense'}),
                    Material.MenuItem({text: 'Soo Dense'})
                ]
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Menu-ManagedTSX.tsx
        let managedContent = [
            <Menu ref={this.menu2} text='Open Menu'>
                <MenuItem text='Item 1'/>
                <MenuItem text='Item 2'/>
                <MenuItem text='Item 3'/>
            </Menu>,

            <Menu text='Open Dense Menu' dense={true}>
                <MenuItem text='Dense Stuff'/>
                <MenuItem text='Stuff is Dense'/>
                <MenuItem text='Soo Dense'/>
            </Menu>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildCustomization() {
        //docStart Menu-Customization.ts
        new Menu({
            parent: this.layout5,
            text: 'Open Menu',
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout5,
            text: 'Open Menu',
            variant: Variant.Filled,
            color: Color.Info,
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout5,
            text: 'Open Menu',
            variant: Variant.Outlined,
            color: Color.Tertiary,
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout5,
            text: 'Open Menu',
            variant: Variant.Filled,
            disabled: true,
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout5,
            text: 'Icon Color',
            variant: Variant.Filled,
            endIcon: Material.Icons.Filled.KeyboardArrowDown,
            iconColor: Color.Tertiary,
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });

        new Menu({
            parent: this.layout5,
            text: 'English',
            color: Color.Info,
            variant: Variant.Filled,
            startIcon: Material.Icons.Filled.Translate,
            endIcon: Material.Icons.Filled.KeyboardArrowDown,
            childContent: [
                new MenuItem({text: 'Item 1'}),
                new MenuItem({text: 'Item 2'}),
                new MenuItem({text: 'Item 3'})
            ]
        });
        //docEnd
    }

    buildMenuWidth() {
        //docStart Menu-Width.ts
        new Menu({
            parent: this.layout6,
            text: 'Default Menu Width',
            variant: Variant.Filled,
            color: Color.Info,
            childContent: [
                new MenuItem({text: '1'}),
                new MenuItem({text: '2'}),
                new MenuItem({text: '3'})
            ]
        });

        new Menu({
            parent: this.layout6,
            text: 'Full Menu Width',
            variant: Variant.Filled,
            color: Color.Info,
            fullWidth: true,
            childContent: [
                new MenuItem({text: '1'}),
                new MenuItem({text: '2'}),
                new MenuItem({text: '3'})
            ]
        });
        //docEnd
    }

    buildMaxHeight() {
        //docStart Menu-MaxHeight.ts
        new Menu({
            parent: this.layout7,
            text: 'Max Height Menu',
            variant:Variant.Outlined,
            color:Color.Info,
            maxListHeight: 200,
            childContent: [
                new MenuItem({text: 'Long'}),
                new MenuItem({text: 'List'}),
                new MenuItem({text: 'Is'}),
                new MenuItem({text: 'To'}),
                new MenuItem({text: 'Long'}),
                new MenuItem({text: 'Lets'}),
                new MenuItem({text: 'Limit'}),
                new MenuItem({text: 'Height'}),
            ]
        });
        //docEnd
    }

    buildIconButtons() {
        //docStart Menu-IconButtons.ts
        new Menu({
            parent: this.layout8,
            icon: Material.Icons.Filled.MoreVert,
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'My account'}),
                new MenuItem({text: 'Logout'})
            ]
        });

        new Menu({
            parent: this.layout8,
            icon: Material.Icons.Filled.Settings,
            color: Color.Info,
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'My account'}),
                new MenuItem({text: 'Logout'})
            ]
        });

        new Menu({
            parent: this.layout8,
            icon: Material.Icons.Filled.Favorite,
            color: Color.Tertiary,
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'My account'}),
                new MenuItem({text: 'Logout'})
            ]
        });

        new Menu({
            parent: this.layout8,
            icon: Material.Icons.Filled.Build,
            disabled: true,
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'My account'}),
                new MenuItem({text: 'Logout'})
            ]
        });
        //docEnd
    }

    buildCustomActivator() {
        //docStart Menu-CustomActivator.ts
        new Menu({
            parent: this.layout9,
            //todo recolocar fullWidth:true,
            activatorContent: new Button({variant: Variant.Filled, color: Color.Info, text: "I'm a Button"}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout9,
            //todo recolocar fullWidth:true,
            activatorContent: new Chip({icon: Material.Icons.Filled.Person, color: Color.Info, text: 'Account'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout9,
            //todo recolocar fullWidth:true,
            disabled: true,
            activatorContent: new Chip({icon: Material.Icons.Filled.Person, disabled: true, color: Color.Info, text: 'Disabled'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout9,
            activatorContent: new Avatar({image: '/assets/images/mony.png'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout9,
            //todo recolocar fullWidth:true,
            activatorContent: new Alert({severity: Severity.Error, variant: Variant.Filled, dense: true, label: 'Dense Error'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });
        //docEnd
    }

    buildCustomActivator2() {
        //docStart Menu-ActionEvent.ts
        new Menu({
            parent: this.layout10,
            //todo recolocar fullWidth:true,
            activationEvent: MaterialMouseEvent.LeftClick,
            activatorContent: new Button({startIcon: Material.Icons.Filled.Mouse, color: Color.Default, text: 'Left click'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout10,
            activationEvent: MaterialMouseEvent.RightClick,
            activatorContent: new Button({startIcon: Material.Icons.Filled.Mouse, color: Color.Default, text: 'Right click'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });

        new Menu({
            parent: this.layout10,
            //todo recolocar fullWidth:true,
            activationEvent: MaterialMouseEvent.MouseOver,
            activatorContent: new Button({startIcon: Material.Icons.Filled.Mouse, color: Color.Default, text: 'Mouse over'}),
            childContent: [
                new MenuItem({text: 'Profile'}),
                new MenuItem({text: 'Theme'}),
                new MenuItem({text: 'Usage'}),
                new MenuItem({text: 'Sign Out'})
            ]
        });
        //docEnd
    }
}

