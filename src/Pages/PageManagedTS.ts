import {Anchor, component, HorizontalAlign, IComponent, Lab1, Property, ref, Router, RouterPage, routerPage} from "@lab1/core";
import {Button, CheckBox, Color, InputType, Material, Text, Radio, Slider, SimpleTable, Variant} from "@lab1/material";
import {Shared} from "../Codes/Shared";

interface Month {
    name: string
    numberValue: number
}

@routerPage()
@component
export class PageManagedTS extends RouterPage {

    @ref btn?: Button
    @ref slider?: Slider
    @ref tableSimple?: SimpleTable
    @ref checkBox1?: CheckBox<any>
    @ref radio1?: Radio
    divStyle = 'backgroundColor-color:lightgray; width:400px; height:400px;'
    btnClicked = new Property<boolean>(this, false);
    months: Month[] = [{name: 'january', numberValue: 1}];
    numbers = [1];
    logged=new Property<boolean>(this,false);

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});
        this.render(true);
    }

    public render(firstRender: boolean = false): void {
        super.render(firstRender);

        let managed = Lab1.ColumnLayout({
            width: 1200,
            padding: 12,
            horizontalAlign: HorizontalAlign.Center,
            childContent: [
                this.buildTitle('for loops'),
                this.buildForLoops(),
                this.buildTitle('AnchorsLayout'),
                this.buildAnchorsLayout(),
                this.buildTitle('TableSimple'),
                this.buildTableSimple(),
                this.buildTitle('Misc'),
                this.buildMisc(),
                this.buildTitle('Login'),
                this.buildLogin()
            ]
        })


        this.buildManaged(this, managed);
    }

    protected buildAmPmHours(): IComponent[] {
        console.log('buildAmPmHours');
        let items = [];
        for (let i = 1; i <= 3; i++) {
            let angle = (6 - i) * 30;
            items.push(
                Lab1.Label({
                    id:'labelAmPMHour-'+i.toString(),
                    // className: this.getNumberColor(i),
                    // style: this.getTransform(angle, 109, 0, 0),
                    //childContent: i
                    key:i.toString(),
                    text:i.toString()//todo recolocar mudtext. É que o mudtext nao esta funcionando
                })
            )
        }
        for (let i = 1; i <=3; i++) {
            items.push(
                Lab1.Div({
                    id:'divAmPmHour-'+i.toString(),
                    className: 'mud-picker-stick mud-hour',
                    key:i.toString(),
                    style: `transform: rotateZ({${i} * 30}deg);`,
                    onClick: (ev) => {
                        //this.handleMouseClickHour(i);
                        ev.stopPropagation();
                    },
                    // onMouseOver: (ev) => this.handleMouseOverHour(i)
                })
            )
        }
        return items;
    }

    //region For loops==================================================================
    buildForLoops() {
        return Lab1.ColumnLayout({
            id: 'forLoopLayout',
            backgroundColor: '#cfd8dc',
            width: '100%',
            childContent: [
                Material.ToolBar({
                    id:'toolbarFor',
                    dense: true,
                    childContent: [
                        Material.IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, marginLeft: 5}),
                        Material.Button({text: 'Append', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.numbers.push(this.numbers.length + 1);this.render()}}),
                        Material.Button({text: 'Remove first', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.numbers.shift();this.render();}}),
                        Material.Button({text: 'Remove last', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.numbers.splice(-1);this.render();}}),
                        Material.Button({text: 'Replace second', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.numbers.splice(1, 1, 144);this.render();}}),
                    ]
                }),
                this.buildNumbersList()
            ],
        })
    }

    buildNumbersList(): IComponent {
        //console.log('numbers:',this.numbers)
        let monthItems: IComponent[] = []
        for (let num of this.numbers) {
            monthItems.push(Lab1.Label({key: num.toString(), id: num.toString(), text: num.toString()}));
        }
        return Lab1.RowLayout({
            id: 'rowLayoutNumbers',
            childContent: monthItems
        });
    }
    //endregion

    //region AnchorsLayout===============================================================

    buildAnchorsLayout() {
        return Lab1.ColumnLayout({
            backgroundColor: '#cfd8dc',
            childContent:[
                Material.ToolBar({
                    dense: true,
                    childContent: [
                        Material.IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, marginLeft: 5}),
                        Material.Button({text: 'Change checkbox color', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.checkBox1!.color.value = this.checkBox1!.color.value == Color.Success ? Color.Info : Color.Success}}),
                        Material.Button({text: 'Remove first radio', variant: Variant.Text, color: Color.Inherit, onClick: () => {this.radio1?.delete() }}),
                    ]
                }),
                Lab1.AnchorsLayout({
                    height: 500,
                    childContent: [
                        this.buildTopLeft(),
                        this.buildTopRight(),
                        this.buildBottomLeft(),
                        this.buildCenter(),
                        this.buildBottomRight(),
                        this.buildBottomCenter()
                    ]
                })
            ]
        })
    }

    buildTopLeft() {
        return Lab1.Rectangle({
            id: 'rectTopLeft',
            anchors: Anchor.Top | Anchor.Left,
            backgroundColor: '#4dd0e1',
            width: 200,
            childContent: [
                Material.CheckBox({ref: this.checkBox1, text: 'First checkbox', checked: true, color: Color.Success}),
                Material.CheckBox({text: 'Second checkbox', color: Color.Warning}),
            ]
        })
    }

    buildTopRight() {
        return Lab1.Rectangle({
            id: 'rectTopRight',
            anchors: Anchor.Top | Anchor.Right,
            backgroundColor: '#4dd0e1',
            width: 200,
            childContent: [
                Material.RadioGroup<string>({
                    childContent: [
                        Material.Radio({ref: this.radio1, text: 'First radio', option: '1'}),
                        Material.Radio({text: 'Second radio', option: '2'})
                    ]
                })
            ]
        })
    }

    buildCenter() {
        return Lab1.Rectangle({
            id: 'rectCenter',
            anchors: Anchor.HorizontalCenter,
            backgroundColor: '#4dd0e1',
            width: 200,
            childContent: [
                Material.TextField({label: 'First TextField', variant: Variant.Filled}),
                Material.TextField({label: 'Second TextField'}),
            ]
        })
    }

    buildBottomCenter() {
        return Lab1.Rectangle({
            id: 'rectBottomCenter',
            anchors: Anchor.Bottom | Anchor.HorizontalCenter,
            width: 300,
            backgroundColor: '#4dd0e1',
            childContent: [
                Material.Button({color: Color.Primary, text: 'Primary'}),
                Material.Button({color: Color.Secondary, text: 'Secondary'}),
                Material.Button({color: Color.Tertiary, text: 'tertiary '})
            ]
        })
    }

    buildBottomRight() {
        return Lab1.Rectangle({
            id: 'rectBottomCenter',
            anchors: Anchor.Bottom | Anchor.Right,
            childContent: [
                Material.Switch({text: 'First Switch', checked: true, color: Color.Info}),
                Material.Avatar({color: Color.Info, text: 'L'})
            ]
        })
    }

    buildBottomLeft() {
        return Material.ListView({
            dense: true,
            clickable: true,
            childContent: [
                Material.ListItem({value: 'remove-checkbox', text: 'Remove Checkbox'})
            ]
        })
    }
    //endregion

    //TableSimple===============================================================
    buildTableSimple() {
        return Lab1.ColumnLayout({
            id: 'tableSimpleLayout',
            backgroundColor: '#cfd8dc',
            width: '100%',
            childContent: [
                Material.ToolBar({
                    dense: true,
                    childContent: [
                        Material.IconButton({icon: Material.Icons.Outlined.Menu, color: Color.Inherit, marginLeft: 5}),
                        Material.IconButton({icon: Material.Icons.Outlined.Add}),
                        Material.Button({text: 'Add row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.addRow(['12', 'Hi there'])}),
                        Material.Button({text: 'Remove first row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.removeFirstRow()}),
                        Material.Button({text: 'Remove last row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.removeLastRow()}),
                        Material.Button({text: 'Replace first row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.replaceRow(1, ['12', 'Hello'])}),
                        Material.Button({text: 'Remove second row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.removeRow(2)}),
                        Material.Button({text: 'Insert into second row', variant: Variant.Text, color: Color.Inherit, onClick: () => this.tableSimple?.insertRow(2, ['2', 'Inserted content'])}),
                        Material.IconButton({icon: Material.Icons.Outlined.Settings}),
                    ]
                }),
                Material.SimpleTable({
                    ref: this.tableSimple,
                    style: 'overflow-x: auto;',
                    striped: true,
                    headers: Shared.headers,
                    rows: Shared.rows
                })
            ]
        });
    }
    //endregion

    //region Misc

    buildMisc() {
        return Lab1.Rectangle({
            padding: 20,
            backgroundColor: 'lightblue',
            height: 400,
            childContent: [
                Material.Button({
                    ref: this.btn,
                    text: 'Blue Button',
                    variant: Variant.Filled,
                    color: Color.Info
                }),
                Material.CheckBox<boolean>({
                    color: Color.Tertiary,
                    checked: true,
                    text: 'My Checkbox'
                }),
                Material.Switch<boolean>({
                    className: 'ml-2',
                    text: 'Olá'
                }),
                Material.Slider({
                    ref: this.slider,
                    className: 'mt-4',
                    value: 50
                })
                // Render.renderIf<CheckBox<string>, CheckBoxProps<string>>(this, sectionName, this.btnClicked.value,{
                //     usingDefaultPositon: true,
                //     label: 'My Checkbox'
                // })
            ]
        });
    }
    //endregion

    buildLogin(){
        return Lab1.AnchorsLayout({
            height:600,
            backgroundColor: '#cfd8dc',
            childContent: Lab1.Rectangle({
                    anchors:Anchor.HorizontalCenter | Anchor.VerticalCenter,
                    elevation:1,
                    width:400,
                    height:200,
                    padding:22,
                    borderRadius:15,
                    backgroundColor:'white',
                    childContent: Lab1.ColumnLayout({
                            childContent:[
                                Material.TextField({label:'E-mail'}),
                                Material.TextField({label:'Password',inputType:InputType.Password}),
                                Material.Button({text:'ENTER', color:Color.Tertiary, marginTop:10}),
                                Lab1.Rectangle({
                                    backgroundColor:'lightgreen',
                                    visible:this.logged,
                                    childContent:Lab1.Label({text:'SUCCESS'})
                                })
                            ]
                        })
                })
        })


    }

    //Helper methods==============================================================
    buildTitle(title: string): IComponent {
        return Lab1.Label({
            //layout:{alignment:Align.HorizontalCenter},
            //horizontalAlign:HorizontalAlign.Center,
            text: title.toUpperCase(),
            font: '14px Arial, Helvetica, Roboto',
            fontWeight: 'bold',
            color: '#005b9f',
        })
    }

    onBtnClicked() {
        console.log('checkbox:', this.checkBox1);

    }
}


