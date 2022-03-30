import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage, Property, component} from "@lab1/core";
import {Button, Color, CustomIcons, Material, Size, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";
import {SampleService} from "../Services/SampleService";

@routerPage()
export class PageButton extends BasePage {

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
    @ref button1?:Button
    @ref button2?:Button
    value=new Property<boolean>(this,false);
    //endregion

    constructor(router: Router, sampleService:SampleService) {
        super({parent: Lab1.obj.currentRouterView});

        // console.log('value:',sampleService.value);
        // sampleService.doSomething();
        // sampleService.value=45;

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildFilledButtons();
        this.buildTextButtons();
        this.buildOutlinedButtons();
        this.buildSizedButtons();
        this.buildLinkedButtons();
        this.buildIconButtons();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Button', 'A Material Design Button for actions and links with multiple functions.','PageButton.tsx');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript','Button-Typescript.ts',Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript','Button-ManagedTS.ts',Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX','Button-ManagedTSX.tsx',Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Filled Buttons', 'Button-Filled.ts','Filled Buttons have elevation (box shadow) and is raised on click by default.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Text Buttons', 'Button-Text.ts','Text Buttons have no elevation, background or border and only hover effect is used. The Color property only applies to the text.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout,'Outlined Buttons', 'Button-Outlined.ts','Outlined Buttons are similar to Text Buttons except for the border that inherits its color from the color property.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout,'Sizes','Button-Sized.ts','3 sizes available: Small, Medium, Large.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout,'Link Button', 'Button-Link.ts', "Opens the Url provided when clicked. Target values may be: <b>_self</b> (same frame - default),  <b>_blank</b> (new tab), <b>_parent</b>(parent frame) and <b>_top</b>(top frame).",'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout,'Icons', 'Button-Icons.ts','Buttons may have a startIcon (on the left) and endIcon (on the right).','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript(){
        //docStart Button-Typescript.ts
        new Button({
            parent:this.layout1,
            text:'Filled',
            variant:Variant.Filled,
            color:Color.Tertiary
        });

        new Button({
            parent:this.layout1,
            text:'Outlined',
            variant:Variant.Outlined,
            color:Color.Primary
        });

        new Button({
            parent:this.layout1,
            text:'Text',
            variant:Variant.Text,
            color:Color.Info
        });
        //docEnd
    }

    buildManagedTS(){
        //docStart Button-ManagedTS.ts
        let managedContent=[
            Material.Button({
                ref:this.button1,
                text:'Filled',
                variant:Variant.Filled,
                color:Color.Tertiary
            }),
            Material.Button({
                text:'Outlined',
                variant:Variant.Outlined,
                color:Color.Primary
            }),
            Material.Button({
                text:'Text',
                variant:Variant.Text,
                color:Color.Info
            })
        ];
        this.buildManaged(this.layout2,managedContent);
        this.button1?.onClick.connect(()=>console.log('hi there!'));
        //docEnd
    }

    buildManagedTSX(){
        //docStart Button-ManagedTSX.tsx
        let managedContent=[
            <Button ref={this.button2} text='Filled' variant={Variant.Filled} color={Color.Tertiary}/>,
            <Button text='Outlined' variant={Variant.Outlined} color={Color.Primary}/>,
            <Button text='Text' variant={Variant.Text} color={Color.Info}/>
        ];
        this.buildManaged(this.layout3,managedContent);
        this.button2?.onClick.connect(()=>console.log('hi there!'));
        //docEnd
    }

    buildFilledButtons() {
        //docStart Button-Filled.ts
        new Button({
            parent: this.layout4,
            text: 'default',
            variant: Variant.Filled,
            onClick: (ev) => console.log('button clicked. Event:', ev)
        });

        new Button({
            parent: this.layout4,
            color: Color.Primary,
            variant: Variant.Filled,
            text: 'primary'
        });

        new Button({
            parent: this.layout4,
            color: Color.Secondary,
            variant: Variant.Filled,
            text: 'secondary'
        });

        new Button({
            parent: this.layout4,
            color: Color.Tertiary,
            variant: Variant.Filled,
            text: 'tertiary'
        });

        new Button({
            parent: this.layout4,
            color: Color.Default,
            variant: Variant.Filled,
            text: 'disabled',
            disabled: true
        });

        new Button({
            parent: this.layout4,
            color: Color.Primary,
            variant: Variant.Filled,
            disableElevation: true,
            text: 'disabled elevation'
        });

        new Button({
            parent: this.layout4,
            color: Color.Tertiary,
            variant: Variant.Filled,
            disableRipple: true,
            text: 'disabled ripple'
        });
        //docEnd
    }

    buildTextButtons() {
        //docStart Button-Text.ts
        new Button({
            parent: this.layout5,
            color: Color.Default,
            text: 'text variant'
        });

        new Button({
            parent: this.layout5,
            color: Color.Primary,
            text: 'text primary'
        });

        new Button({
            parent: this.layout5,
            color: Color.Secondary,
            text: 'text secondary'
        });

        new Button({
            parent: this.layout5,
            color: Color.Tertiary,
            text: 'text tertiary'
        });

        new Button({
            parent: this.layout5,
            color: Color.Default,
            text: 'disabled',
            disabled: true
        });
        //docEnd
    }

    buildOutlinedButtons() {
        //docStart Button-Outlined.ts
        new Button({
            parent: this.layout6,
            color: Color.Default,
            variant: Variant.Outlined,
            text: 'outlined'
        });

        new Button({
            parent: this.layout6,
            color: Color.Primary,
            variant: Variant.Outlined,
            text: 'primary'
        });

        new Button({
            parent: this.layout6,
            color: Color.Secondary,
            variant: Variant.Outlined,
            text: 'secondary'
        });

        new Button({
            parent: this.layout6,
            color: Color.Tertiary,
            variant: Variant.Outlined,
            text: 'tertiary'
        });
        //docEnd
    }

    buildSizedButtons() {
        //docStart Button-Sized.ts
        new Button({
            parent: this.layout7,
            color: Color.Primary,
            variant: Variant.Filled,
            text: 'small',
            size: Size.Small
        });

        new Button({
            parent: this.layout7,
            color: Color.Secondary,
            variant: Variant.Filled,
            text: 'medium',
            size: Size.Medium
        });

        new Button({
            parent: this.layout7,
            color: Color.Tertiary,
            variant: Variant.Filled,
            text: 'large',
            size: Size.Large
        });
        //docEnd
    }

    buildLinkedButtons() {
        //docStart Button-Link.ts
        new Button({
            parent: this.layout8,
            color: Color.Primary,
            link: 'https://github.com',
            target: '_blank',
            text: 'Github link'
        });

        new Button({
            parent: this.layout8,
            color: Color.Secondary,
            variant: Variant.Outlined,
            link: 'https://github.com',
            text: 'Github link'
        });

        new Button({
            parent: this.layout8,
            color: Color.Tertiary,
            variant: Variant.Text,
            link: 'https://github.com',
            text: 'Github link'
        });
        //docEnd
    }

    buildIconButtons() {
        //docStart Button-Icons.ts
        new Button({
            parent: this.layout9,
            color: Color.Primary,
            variant: Variant.Filled,
            text: 'send',
            endIcon: Material.Icons.Filled.Send
        });

        new Button({
            parent: this.layout9,
            color: Color.Warning,
            variant: Variant.Filled,
            text: 'warning',
            startIcon: CustomIcons.Uncategorized.Radioactive
        });

        new Button({
            parent: this.layout9,
            color: Color.Tertiary,
            variant: Variant.Filled,
            text: 'success',
            startIcon: CustomIcons.Uncategorized.AlertSuccess
        });

        new Button({
            parent: this.layout9,
            text: 'talk',
            variant: Variant.Filled,
            disabled: true,
            startIcon: Material.Icons.Filled.Mic
        });

        new Button({
            parent: this.layout9,
            text: 'save',
            color: Color.Info,
            variant: Variant.Filled,
            size: Size.Small,
            startIcon: Material.Icons.Filled.Save
        });

        new Button({
            parent: this.layout9,
            text: 'save',
            variant: Variant.Filled,
            size: Size.Large,
            startIcon: Material.Icons.Filled.Save,
            iconColor: Color.Tertiary
        });
        //docEnd
    }
}
