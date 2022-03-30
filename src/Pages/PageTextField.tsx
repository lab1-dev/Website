import {Align, ColumnLayout, component, HorizontalAlign, tsx, Lab1, Layout, Property, ref, Router, routerPage} from "@lab1/core";
import {Adornment, Color, InputType, Margin, Material, TextField, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageTextField extends BasePage {

    //region fields and properties
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
    layout12!: Layout
    layout13!: Layout
    @ref textField1?: TextField
    @ref textField2?: TextField
    normalText = new Property<string>(this, 'a')
    immediateText = new Property<string>(this, 'b')
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildDenseTextFields();
        this.buildHelperText();
        this.buildDisabled();
        this.buildReadOnly();
        this.buildHelperTextOnFocus();
        this.buildCounter();
        this.buildAdornments();
        this.buildAdornmentColor();
        this.buildImmediateVsDebounced();
        this.buildMultiLine();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'TextField', 'Text field components are used for receiving user provided information.');

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'TextField-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'TextField-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'TextField-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout, 'Dense', 'TextField-Dense.ts', 'Use the <b>dense</b> property to create smaller TextFields.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Helper Text', 'TextField-HelperText.ts', '<b>helperText</b> property displays a text below the TextField.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Disabled', 'TextField-Disabled.ts', 'A disabled TextField does not display text, or display it in gray to indicate it does not allow User input.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout, 'Read Only', 'TextField-ReadOnly.ts', "Read Only TextFields don't allow user input.",'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout8 = this.buildRowLayoutSection(columnLayout, 'Helper Text On Focus', 'TextField-HelperOnFocus.ts', 'With the <b>helperTextOnFocus</b> property set to true, the helper text will only display on focus.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout9 = this.buildRowLayoutSection(columnLayout, 'Counter', 'TextField-Counter.ts');
        this.layout10 = this.buildRowLayoutSection(columnLayout, 'Adornments', 'TextField-Adornments.ts', 'Adornments can be used to add a prefix, suffix. It can be a Text, Icon or IconButton.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout11 = this.buildRowLayoutSection(columnLayout, 'Adornment Color', 'TextField-AdornmentColor.ts', 'Use the property <b>adornmentColor</b> to change the color of the Adornment.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout12 = this.buildRowLayoutSection(columnLayout, 'Immediate vs Debounced', 'TextField-ImmediatevsDebounced.ts', 'By default, TextField updates the bound value on Enter or when it loses focus. Set <b>immediate:true</b> to update the value whenever the user types.\n' +
            'You can also set the <b>debounceInterval</b> property to the number of milliseconds you want to wait before updating the bound value. If you need to know when the interval elapses, you can pass an <b>onDebounceIntervalElapsed</b> callback. Notice how in this example the debounced text only updates 500 ms after you stop typing.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout13 = this.buildRowLayoutSection(columnLayout, 'MultiLine', 'TextField-MultiLine.ts','Use the property <b>lines</b> to turn the TextField into multiline.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript() {
        //docStart TextField-Typescript.ts
        new TextField({
            parent: this.layout1,
            label: 'Standard',
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout1,
            label: 'Filled',
            variant: Variant.Filled
        });

        new TextField({
            parent: this.layout1,
            label: 'Outlined',
            variant: Variant.Outlined
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart TextField-ManagedTS.ts
        let managedCode = [
            Material.TextField({
                ref: this.textField1,
                label: 'Standard',
                variant: Variant.Text,
            }),
            Material.TextField({
                label: 'Filled',
                variant: Variant.Filled
            }),
            Material.TextField({
                label: 'Outlined',
                variant: Variant.Outlined
            })
        ];

        this.buildManaged(this.layout2, managedCode);
        //docEnd
    }

    buildManagedTSX() {
        //docStart TextField-ManagedTSX.tsx
        let managedCode = [
            <TextField ref={this.textField2} label='Standard' variant={Variant.Text}/>,
            <TextField label='Filled' variant={Variant.Filled}/>,
            <TextField label='Outlined' variant={Variant.Outlined}/>
        ];

        this.buildManaged(this.layout3, managedCode);
        //docEnd
    }

    buildDenseTextFields() {
        //docStart TextField-Dense.ts
        new TextField({
            parent: this.layout4,
            label: 'Standard',
            variant: Variant.Text,
            marginType: Margin.Dense
        });

        new TextField({
            parent: this.layout4,
            label: 'Filled',
            variant: Variant.Filled,
            marginType: Margin.Dense
        });

        new TextField({
            parent: this.layout4,
            label: 'Outlined',
            variant: Variant.Outlined,
            marginType: Margin.Dense
        });
        //docEnd
    }

    buildHelperText() {
        //docStart TextField-HelperText.ts
        new TextField({
            parent: this.layout5,
            label: 'With Helper',
            helperText: 'Some helping text',
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout5,
            label: 'With Helper',
            helperText: 'Some helping text',
            variant: Variant.Filled
        });

        new TextField({
            parent: this.layout5,
            label: 'With Helper',
            helperText: 'Some helping text',
            variant: Variant.Outlined
        });
        //docEnd
    }

    buildDisabled() {
        //docStart TextField-Disabled.ts
        new TextField({
            parent: this.layout6,
            label: 'Disabled',
            variant: Variant.Text,
            disabled: true
        });

        new TextField({
            parent: this.layout6,
            label: 'Disabled',
            variant: Variant.Filled,
            disabled: true
        });

        new TextField({
            parent: this.layout6,
            label: 'Disabled',
            variant: Variant.Outlined,
            disabled: true
        });
        //docEnd
    }

    buildReadOnly() {
        //docStart TextField-ReadOnly.ts
        new TextField({
            parent: this.layout7,
            label: 'Read Only',
            value: "Can't change me",
            variant: Variant.Text,
            readOnly: true
        });

        new TextField({
            parent: this.layout7,
            label: 'Read Only',
            value: "Can't change me",
            variant: Variant.Filled,
            readOnly: true
        });

        new TextField({
            parent: this.layout7,
            label: 'Read Only',
            value: "Can't change me",
            variant: Variant.Outlined,
            readOnly: true
        });
        //docEnd
    }

    buildHelperTextOnFocus() {
        //docStart TextField-HelperOnFocus.ts
        new TextField({
            parent: this.layout8,
            label: 'OnFocus Helper',
            helperText: 'Some helping text',
            helperTextOnFocus: true,
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout8,
            label: 'With Helper',
            helperText: 'Some helping text',
            variant: Variant.Text
        });
        //docEnd
    }

    buildCounter() {
        //docStart TextField-Counter.ts
        let txt = new TextField<string>({
            parent: this.layout9,
            label: 'Regular',
            counter: 5,
            helperText: 'Using counter property',
            immediate: true,
            variant: Variant.Text,
            //validation:(txt)=>this.validateText(txt)
        });
        txt.validation = (txt) => {
            if (txt && txt.length > 5) return 'Max 5 characters';
            return;
        }

        new TextField({
            parent: this.layout9,
            label: 'Limited',
            counter: 5,
            maxLength: 5,
            helperText: 'Using counter and maxLength properties',
            immediate: true,
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout9,
            label: 'Counter',
            counter: 0,
            helperText: 'Using counter set to 0',
            immediate: true,
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout9,
            label: 'Max Length',
            maxLength: 5,
            helperText: 'Using maxLength property',
            immediate: true,
            variant: Variant.Text
        });
        //docEnd
    }

    buildAdornments() {
        //docStart TextField-Adornments.ts
        new TextField<number>({
            parent: this.layout10,
            label: 'Price',
            adornment: Adornment.Start,
            adornmentIcon: Material.Icons.Filled.AttachMoney,
            variant: Variant.Text
        });

        new TextField<number>({
            parent: this.layout10,
            adornment: Adornment.End,
            adornmentText: 'Kg',
            helperText: 'Weight',
            variant: Variant.Text
        });

        new TextField({
            parent: this.layout10,
            adornment: Adornment.End,
            adornmentIcon: Material.Icons.Filled.VisibilityOff,
            label: 'Password',
            inputType: InputType.Password,
            variant: Variant.Text
        });
        //docEnd
    }

    buildAdornmentColor() {
        //docStart TextField-AdornmentColor.ts
        new TextField<number>({
            parent: this.layout11,
            label: 'Price',
            adornment: Adornment.Start,
            adornmentIcon: Material.Icons.Filled.AttachMoney,
            adornmentColor: Color.Warning,
            variant: Variant.Outlined,
        });

        new TextField<number>({
            parent: this.layout11,
            label: 'Weight',
            adornment: Adornment.End,
            adornmentText: 'Kg',
            adornmentColor: Color.Info,
            variant: Variant.Outlined,
        });

        new TextField({
            parent: this.layout11,
            label: 'Search',
            adornment: Adornment.End,
            adornmentIcon: Material.Icons.Filled.Search,
            adornmentColor: Color.Secondary,
            variant: Variant.Outlined,
        });
        //docEnd
    }

    buildImmediateVsDebounced() {
        //docStart TextField-ImmediatevsDebounced.ts
        new TextField({
            parent: this.layout12,
            label: 'Normal',
            variant: Variant.Outlined,
            adornment: Adornment.End,
            adornmentIcon: Material.Icons.Filled.Search,
            value: this.normalText,
            helperText: this.normalText,
        });

        new TextField({
            parent: this.layout12,
            immediate: true,
            label: 'Immediate',
            variant: Variant.Outlined,
            adornment: Adornment.End,
            adornmentIcon: Material.Icons.Filled.Search,
            value: this.immediateText,
            helperText: this.immediateText,
        });

        new TextField({
            parent: this.layout12,
            debounceInterval: 500,
            onDebounceIntervalElapsed: (txt) => console.log(`debounced text: ${txt}`),
            label: 'Debounced',
            variant: Variant.Outlined,
            adornment: Adornment.End,
            adornmentIcon: Material.Icons.Filled.Search,
            value: this.immediateText,
            helperText: this.immediateText,
        });
        //docEnd
    }

    buildMultiLine() {
        //docStart TextField-MultiLine.ts
        new TextField({
            parent:this.layout13,
            label:'Multiline',
            variant:Variant.Text,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            lines:5
        });

        new TextField({
            parent:this.layout13,
            label:'Multiline',
            variant:Variant.Filled,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            lines:3
        });

        new TextField({
            parent:this.layout13,
            label:'Multiline',
            variant:Variant.Outlined,
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            lines:3
        });
        //docEnd
    }
}
