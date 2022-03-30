import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Label, Layout, ref, Router, routerPage} from "@lab1/core";
import {CheckBox, Color, Divider, Material, Size} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageCheckBox extends BasePage {

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
    layout11!: Layout
    @ref checkBox1?: CheckBox<boolean>
    @ref checkBox2?: CheckBox<boolean>
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();

        this.buildBasicCheckBoxes();
        this.buildCheckBoxesWithIcons();
        this.buildDenseCheckBoxes();
        this.buildSizedCheckBoxes();
        this.buildReadOnlyCheckBoxes();
        this.buildDisableRippleCheckBox();
        this.buildBindableCheckBoxes();
        this.buildPropertyChanges();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'CheckBox', 'CheckBoxes are a great way to allow the user to make a selection of choices from things like a list. If you want to let the user turn a setting on or off on demand, a Switch component is recommended instead.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'CheckBox-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'CheckBox-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'CheckBox-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Basic', 'CheckBox-Basic.ts', 'Basic CheckBox without label.','white',Align.HorizontalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'With Icon', 'CheckBox-WithIcon.ts', 'CheckBox with icon provided by Material icon pack.','white',Align.HorizontalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Dense', 'CheckBox-Dense.ts', 'Less padding.','white',Align.HorizontalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Sized', 'CheckBox-Sized.ts', '3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'ReadOnly', 'CheckBox-ReadOnly.ts', 'User cannot change checked state.','white',Align.HorizontalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Disable ripple', 'CheckBox-RippleDisabled.ts', 'Ripple effect disabled.','white',Align.HorizontalCenter);
        this.layout10 = this.buildRowLayoutSection(columnLayout, 'Bindable', 'CheckBox-Bindable.ts', 'todo','white',Align.HorizontalCenter);
        this.layout11 = this.buildRowLayoutSection(columnLayout, 'Property changes', 'CheckBox-PropertyChanges.ts', Shared.docPropertyChanges,'white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript(): void {
        //docStart CheckBox-Typescript.ts
        new CheckBox({
            parent: this.layout1,
            checked: true,
            text: 'Default'
        });

        new CheckBox({
            parent: this.layout1,
            color: Color.Primary,
            text: 'Primary'
        });

        new CheckBox({
            parent: this.layout1,
            color: Color.Secondary,
            checked: true,
            text: 'Secondary'
        });

        new CheckBox({
            parent: this.layout1,
            color: Color.Tertiary,
            text: 'Tertiary'
        });

        new CheckBox({
            parent: this.layout1,
            disabled: true,
            text: 'Disabled'
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart CheckBox-ManagedTS.ts
        let managedContent = [
            Material.CheckBox({
                ref: this.checkBox1,
                color: Color.Default,
                checked: true,
                text: 'Default'
            }),
            Material.CheckBox({
                color: Color.Primary,
                text: 'Primary'
            }),
            Material.CheckBox({
                color: Color.Secondary,
                checked: true,
                text: 'Secondary'
            }),
            Material.CheckBox({
                color: Color.Tertiary,
                text: 'Tertiary'
            }),
        ]
        this.buildManaged(this.layout2, managedContent);
        //docEnd
        //setTimeout(()=>this.managedTSCheckBox!.color.value=Color.Success,4000);
    }

    buildManagedTSX() {
        //docStart CheckBox-ManagedTSX.tsx
        let managedContent = [
            <CheckBox ref={this.checkBox2} color={Color.Default} text='Default' checked={true}/>,
            <CheckBox color={Color.Primary} text='Primary'/>,
            <CheckBox color={Color.Secondary} text='Secondary' checked={true}/>,
            <CheckBox color={Color.Tertiary} text='Tertiary'/>,
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
        //setTimeout(()=>this.managedTSXCheckBox!.color.value=Color.Success,4000);
    }

    buildBasicCheckBoxes(): void {
        //docStart CheckBox-Basic.ts
        new CheckBox({
            parent: this.layout4,
            onChange:(checked)=>console.log('CheckBox checked:',checked)
        });

        new CheckBox({
            parent: this.layout4,
            color: Color.Primary
        });

        new CheckBox({
            parent: this.layout4,
            color: Color.Secondary
        });

        new CheckBox({
            parent: this.layout4,
            disabled: true
        });
        //docEnd
    }

    buildCheckBoxesWithIcons(): void {
        //docStart CheckBox-WithIcon.ts
        new CheckBox({
            parent: this.layout5,
            checkedIcon: Material.Icons.Filled.Favorite,
            uncheckedIcon: Material.Icons.Filled.FavoriteBorder,
            checked: true,
            color: Color.Secondary
        });

        new CheckBox({
            parent: this.layout5,
            checkedIcon: Material.Icons.Filled.Bookmark,
            uncheckedIcon: Material.Icons.Filled.BookmarkBorder,
            checked: true,
            color: Color.Tertiary
        });

        new CheckBox({
            parent: this.layout5,
            checkedIcon: Material.Icons.Filled.Star,
            uncheckedIcon: Material.Icons.Filled.StarBorder,
            checked: true,
            color: Color.Warning
        });
        //docEnd
    }

    buildDenseCheckBoxes(): void {
        //docStart CheckBox-Dense.ts
        new CheckBox({
            parent: this.layout6,
            dense: true,
            checked: true,
            color: Color.Tertiary
        });

        new CheckBox({
            parent: this.layout6,
            dense: true,
            checked: true,
            color: Color.Primary
        });
        //docEnd
    }

    buildSizedCheckBoxes(): void {
        //docStart CheckBox-Sized.ts
        new CheckBox({
            parent: this.layout7,
            size: Size.Small,
            color: Color.Primary
        });

        new CheckBox({
            parent: this.layout7,
            size: Size.Medium,
            color: Color.Secondary
        });

        new CheckBox({
            parent: this.layout7,
            size: Size.Large,
            checked: true,
            color: Color.Tertiary
        });
        //docEnd
    }

    buildReadOnlyCheckBoxes() {
        //docStart CheckBox-ReadOnly.ts
        new CheckBox({
            parent: this.layout8,
            readOnly: true,
            checked: true,
            color: Color.Primary,
            text: 'ReadOnly'
        });

        new CheckBox({
            parent: this.layout8,
            readOnly: true,
            color: Color.Primary,
            text: 'ReadOnly'
        });
        //docEnd
    }

    buildDisableRippleCheckBox() {
        //docStart CheckBox-RippleDisabled.ts
        new CheckBox({
            parent: this.layout9,
            disableRipple: true,
            text: 'Ripple disabled',
            color: Color.Tertiary
        });
        //docEnd
    }

    buildBindableCheckBoxes() {
        //docStart CheckBox-Bindable.ts
        let checkBox1 = new CheckBox({
            parent: this.layout10,
            text: 'Bind From',
            color: Color.Primary
        });

        new CheckBox({
            parent: this.layout10,
            checked: checkBox1.checked,
            text: 'To',
            color: Color.Secondary
        });

        checkBox1.checked.onChange.connect((newValue) => console.log(`checkBox checked: ${checkBox1.checked.value}`))
        //docEnd
    }

    buildPropertyChanges() {
        //docStart CheckBox-PropertyChanges.ts
        this.label = new Label({
            parent: this.layout11,
            text: 'default'
        })
        let checkBox = new CheckBox({
            parent: this.layout11,
        })
        this.addTest('color: Color.Primary', () => checkBox.color.value = Color.Primary);
        this.addTest('color: Color.Secondary', () => checkBox.color.value = Color.Secondary);
        this.addTest('color: Color.Tertiary', () => checkBox.color.value = Color.Tertiary);
        this.addTest('label: Hello', () => checkBox.text.value = 'Hello');
        this.addTest('dense: true', () => checkBox.dense.value = true);
        this.addTest('size: Size.Small', () => checkBox.size.value = Size.Small);
        this.addTest('size: Size.Medium', () => checkBox.size.value = Size.Medium);
        this.addTest('size: Size.Large', () => checkBox.size.value = Size.Large);
        this.runTests(3000, false, true);
        //docEnd
    }
}
