import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {Color, Margin, Material, Origin, Select, SelectItem, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageSelect extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    layout8!: Layout
    @ref select1?: Select
    @ref select2?: Select
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildProps();
        this.buildMargin();
        this.buildDense();
        this.buildUsingSelect();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Select', 'Select fields allow users to provide information from a list of options.',
            'PageSelect.tsx',`${Shared.urlMaterialComponents}/Select/Select.ts`);

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Select-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Select-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Select-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Props', 'Select-Props.ts', 'Select behaves and looks allot like a regular textfield and takes all of the textfields different form props.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Margin', 'Select-Margin.ts', 'Using the <b>margin</b> property, you can reduce the height of the component.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Dense', 'Select-Dense.ts', 'Using the <b>dense</b> property set to true, the select list will be displayed with a dense vertical padding.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Using', 'Select-Using.ts', '','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Select-Typescript.ts
        new Select({
            parent: this.layout1,
            label: 'Coffee',
            anchorOrigin: Origin.BottomCenter,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout1,
            label: 'Coffee',
            variant: Variant.Outlined,
            anchorOrigin: Origin.BottomCenter,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout1,
            label: 'Coffee',
            variant: Variant.Filled,
            anchorOrigin: Origin.BottomCenter,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Select-ManagedTS.ts
        let managedContent = [
            Material.Select({
                ref: this.select1,
                label: 'Coffee',
                anchorOrigin: Origin.BottomCenter,
                childContent: [
                    Material.SelectItem({value: 'Cappuccino'}),
                    Material.SelectItem({value: 'Cafe Latte'}),
                    Material.SelectItem({value: 'Espresso'}),
                    Material.SelectItem({value: 'Irish Coffee'})
                ]
            }),
            Material.Select({
                label: 'Coffee',
                variant: Variant.Outlined,
                anchorOrigin: Origin.BottomCenter,
                childContent: [
                    Material.SelectItem({value: 'Cappuccino'}),
                    Material.SelectItem({value: 'Cafe Latte'}),
                    Material.SelectItem({value: 'Espresso'}),
                    Material.SelectItem({value: 'Irish Coffee'})
                ]
            }),
            Material.Select({
                label: 'Coffee',
                variant: Variant.Filled,
                anchorOrigin: Origin.BottomCenter,
                childContent: [
                    Material.SelectItem({value: 'Cappuccino'}),
                    Material.SelectItem({value: 'Cafe Latte'}),
                    Material.SelectItem({value: 'Espresso'}),
                    Material.SelectItem({value: 'Irish Coffee'})
                ]
            }),
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Select-ManagedTSX.tsx
        let managedContent = [
            <Select ref={this.select2} label='Coffee' anchorOrigin={Origin.BottomCenter}>
                <SelectItem value='Cappuccino'/>
                <SelectItem value='Cafe Latte'/>
                <SelectItem value='Espresso'/>
                <SelectItem value='Irish Coffee'/>
            </Select>,

            <Select label='Coffee' anchorOrigin={Origin.BottomCenter} variant={Variant.Outlined}>
                <SelectItem value='Cappuccino'/>
                <SelectItem value='Cafe Latte'/>
                <SelectItem value='Espresso'/>
                <SelectItem value='Irish Coffee'/>
            </Select>,

            <Select label='Coffee' anchorOrigin={Origin.BottomCenter} variant={Variant.Filled}>
                <SelectItem value='Cappuccino'/>
                <SelectItem value='Cafe Latte'/>
                <SelectItem value='Espresso'/>
                <SelectItem value='Irish Coffee'/>
            </Select>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildProps() {
        //docStart Select-Props.ts
        new Select({
            parent: this.layout4,
            label: 'With Helper',
            helperText: 'Helper text',
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout4,
            label: 'Disabled',
            disabled: true,
            variant: Variant.Outlined,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout4,
            label: 'Read Only',
            readOnly: true,
            variant: Variant.Filled,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });
        //docEnd
    }

    buildMargin() {
        //docStart Select-Margin.ts
        new Select({
            parent: this.layout5,
            label: 'Coffee',
            marginType: Margin.Dense,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout5,
            label: 'Coffee',
            variant: Variant.Outlined,
            marginType: Margin.Dense,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout5,
            label: 'Coffee',
            variant: Variant.Filled,
            marginType: Margin.Dense,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });
        //docEnd
    }

    buildDense() {
        //docStart Select-Dense.ts
        new Select({
            parent: this.layout6,
            label: 'Coffee',
            dense: true,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout6,
            label: 'Coffee',
            variant: Variant.Outlined,
            dense: true,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });

        new Select({
            parent: this.layout6,
            label: 'Coffee',
            variant: Variant.Filled,
            dense: true,
            childContent: [
                new SelectItem({value: 'Cappuccino'}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });
        //docEnd
    }

    buildUsingSelect() {
        //docStart Select-Using.ts
        new Select({
            parent: this.layout7,
            label: 'Coffee',
            helperText: 'String',
            placeholder: 'Please Select',
            adornmentIcon: Material.Icons.Filled.Coffee,//Todo está fazendo o select list nao aparecer
            adornmentColor: Color.Dark,
            childContent: [
                new SelectItem({value: 'Cappuccino (disabled)', disabled: true}),
                new SelectItem({value: 'Cafe Latte'}),
                new SelectItem({value: 'Espresso'}),
                new SelectItem({value: 'Irish Coffee'})
            ]
        });
        //docEnd
    }
}
