import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {Color, Material, Placement, Radio, RadioGroup, Size} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageRadio extends BasePage {

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
    @ref radioGroup1?:RadioGroup
    @ref radioGroup2?:RadioGroup
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildDenseRadio();
        this.buildSizedRadios();
        this.buildContentPlacement();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Radio', 'Radio buttons allow the user to select a single choice from a group of options.',
            'PageRadio.tsx',`${Shared.urlMaterialComponents}/Radio/Radio.ts`);

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Radio-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Radio-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Radio-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Dense', 'Radio-Dense.ts', 'Less padding.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Sized', 'Radio-Sized.ts', '3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Content placement', 'Radio-ContentPlacement.ts','Text placement.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart Radio-Typescript.ts
        let radioGroup = new RadioGroup({
            parent: this.layout1,
            onSelectedOptionChange: (value) => console.log('selected option: ', value)
        });

        new Radio({
            parent: radioGroup,
            option: '1',
            color: Color.Primary,
            text: 'Primary'
        });

        new Radio({
            parent: radioGroup,
            option: '2',
            color: Color.Secondary,
            text: 'Secondary'
        });

        new Radio({
            parent: radioGroup,
            option: '3',
            text: 'Default'
        });

        new Radio({
            parent: radioGroup,
            option: '4',
            disabled: true,
            text: 'Disabled'
        });

        //alternative way to be notified when selectedOption changes:
        //radioGroup.selectedOption.onChange.connect((value)=> console.log('selected option: ',value));
        //docEnd
    }

    buildManagedTS() {
        //docStart Radio-ManagedTS.ts
        let managedContent = [
            Material.RadioGroup({
                ref:this.radioGroup1,
                childContent: [
                    Material.Radio({
                        option: '1',
                        color: Color.Primary,
                        text: 'Primary'
                    }),
                    Material.Radio({
                        option: '2',
                        color: Color.Secondary,
                        text: 'Secondary'
                    }),
                    Material.Radio({
                        option: '3',
                        text: 'Default'
                    }),
                    Material.Radio({
                        option: '4',
                        disabled: true,
                        text: 'Disabled'
                    })
                ]
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Radio-ManagedTSX.tsx
        let managedContent = [
            <RadioGroup ref={this.radioGroup2}>
                <Radio option={'1'} color={Color.Primary} text='Primary'/>,
                <Radio option={'2'} color={Color.Secondary} text='Secondary'/>,
                <Radio option={'3'} text='Default'/>,
                <Radio option={'4'} disabled={true} text='Secondary'/>,
            </RadioGroup>
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildDenseRadio() {
        //docStart Radio-Dense.ts
        let radioGroup = new RadioGroup({
            parent: this.layout5
        });

        new Radio({
            parent: radioGroup,
            option: '1',
            color: Color.Primary,
            dense: true,
            text: 'Dense'
        });

        new Radio({
            parent: radioGroup,
            option: '2',
            color: Color.Secondary,
            text: 'Normal'
        });
        //docEnd
    }

    buildSizedRadios() {
        //docStart Radio-Sized.ts
        let radioGroup = new RadioGroup({
            parent: this.layout6
        });

        new Radio({
            parent: radioGroup,
            option: '1',
            color: Color.Primary,
            size: Size.Small,
            text: 'Small'
        });

        new Radio({
            parent: radioGroup,
            option: '2',
            color: Color.Secondary,
            size: Size.Medium,
            text: 'Medium'
        });

        new Radio({
            parent: radioGroup,
            option: '3',
            color: Color.Tertiary,
            size: Size.Large,
            text: 'Large'
        });
        //docEnd
    }

    buildContentPlacement() {
        //docStart Radio-ContentPlacement.ts
        let radioGroup = new RadioGroup({
            parent: this.layout7
        });

        new Radio({
            parent:radioGroup,
            placement:Placement.Top,
            text:'Top',
            color:Color.Info
        });

        new Radio({
            parent:radioGroup,
            placement:Placement.Bottom,
            text:'Bottom',
            color:Color.Secondary
        });

        new Radio({
            parent:radioGroup,
            placement:Placement.Left,
            text:'Left',
            color:Color.Tertiary
        });

        new Radio({
            parent:radioGroup,
            placement:Placement.Right,
            text:'Right',
            color:Color.Warning
        });
        //docEnd
    }
}
