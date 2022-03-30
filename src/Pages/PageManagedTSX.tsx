import {ArrayHelper, Div, If, Component, tsx, Lab1, Property, ref, Router, routerPage} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Button, CheckBox, Color, Variant} from "@lab1/material";

interface Car {
    name: string
    color: string
}

@routerPage()
export class PageManagedTSX extends BasePage {

    //toolBarDiv?: Div
    ifRef?: If
    savedName?: string
    readonly btnText = new Property<string>(this, 'Click me');
    //readonly toolBarDiv = new NewProperty<Div | undefined>(this, undefined);
    @ref divRef?: Div
    @ref btnRef?: Button

    buttonNotClickedYet = new Property<boolean>(this, true);
    greenButtonClicked = new Property<boolean>(this, false);
    tempStype = 'background-color:lightgray; width:400px; height:400px;'
    cars: Car[] = [{name: 'Fox', color: 'Silver'}, {name: 'S3', color: 'white'}]
    //cars:Car[]=[{name:'Fox', color:'Silver'}]

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.id = 'myTimePicker';
        this.render(true);
    }

    render(firstRender: boolean = false) {
        let t0 = performance.now();
        super.render(firstRender);
        console.log('(MyTimePicker)render');
        if (firstRender) this.buildButton();
        this.buildToolBar()
        let t1 = performance.now();
        console.log("(MyTimePicker)Rendered in " + Math.round(t1 - t0) + " milliseconds.");
    }

    getDivStyle() {
        return this.tempStype;
    }

    buildButton() {
        let btn = new Button({
            parent: this.parent,
            color: Color.Tertiary,
            text: 'Rebuild MyTimePicker',
        });
        btn.onClick.connect((ev) => {
            this.greenButtonClicked._value = true;//using _value because we are calling render
            this.tempStype = 'background-color:lightblue; width:400px; height:400px;'
            this.render()
        });
    }

    buildToolBar() {
        let managedContent =
            <Div ref={this.divRef} id='div' style={this.getDivStyle()} internalID='MyDiv'>
                {<Button ref={this.btnRef} id='btn' variant={Variant.Filled} color={Color.Primary} text={this.btnText} onClick={(ev) => this.handlePurpleButtonClick()}/>}
                {ArrayHelper.range(1, 12).map((i) => {
                        let valor = i * 10;
                        return <CheckBox text={valor.toString()} color={Color.Info}/>
                    }
                )}
                {/*<If condition={this.buttonNotClickedYet.value}>*/}
                {/*    <CheckBox id='checkBox' label='check me' color={Color.Tertiary}/>*/}
                {/*</If>*/}
                {/*<Else>*/}
                {/*    <CheckBox id='checkBoxElse' label='Else checkbox' color={Color.Info}/>*/}
                {/*</Else>*/}
                {/*{(name: string) => (*/}
                {/*    <CheckBox label={'CheckBox with i='+name} color={Color.Info}/>*/}
                {/*)}*/}
                {/*{this.cars.map((car, i) =>*/}
                {/*    <CheckBox label={'CheckBox with car name='+car.name+'.MapIndex:'+i} color={Color.Info}/>*/}
                {/*)}*/}
                {/*{this.cars.map((car, i) => {*/}
                {/*        return <If condition={i!=1|| this.buttonNotClickedYet.value}>*/}
                {/*            <CheckBox label={'CheckBox with car name=' + car.name + '.MapIndex:' + i} color={Color.Info}/>*/}
                {/*        </If>*/}
                {/*    }*/}
                {/*)}                */}
                {/*<For start={1} end={5} step={1}>*/}
                {/*    <CheckBox label='For checkBox' color={Color.Info}/>*/}
                {/*</For>*/}
            </Div>;
        this.buildManaged(this, managedContent);

        // <Div id='div' ref='toolBarDiv' thisRef={this} class={this.getDivClass()}>
        //     <Button id='btn' thisRef={this} condition={this.buttonNotClickedYet} variant={Variant.Text} color={Color.Inherit} label={this.label} onClick={this.handleButtonClick}/>
        // </Div>

        // <Div id='div' ref='toolBarDiv' thisRef={this} class={this.getDivClass()}>
        //     <If id='if' ref='ifRef' thisRef={this} condition={this.buttonNotClickedYet}>
        //         <Button id='btn' thisRef={this} variant={Variant.Text} color={Color.Inherit} label={this.label} onClick={this.handleButtonClick} />
        //     </If>
        // </Div>

        // <Div class={this.getDivClass()} ref={this.toolBarDiv}>
        //     {/*nao é childcontent abaixo, mas sim children*/}
        //     <If condition={this.buttonNotClickedYet}>
        //         <Button variant={Variant.Text} color={Color.Inherit} label={'Click me'} />
        //     </If>
        // </Div>

    }//onClick={()=>this.buttonNotClickedYet=false}

    getForCheckBoxLabel(current: number): string {
        return 'CheckBox ' + current;
    }

    handlePurpleButtonClick() {
        console.log('button clicked. Div style:', this.divRef?.style.value);
        //(this.btnRef as Button).variant.value=Variant.Text;
        //console.log('(MyTimePicker)handleButtonClick. buttonNotClickedYet before:',this.buttonNotClickedYet.value)
        //this.buttonNotClickedYet.value = !this.buttonNotClickedYet.value
        //console.log('(MyTimePicker)handleButtonClick. buttonNotClickedYet after:',this.buttonNotClickedYet.value)
        //this.label.value = 'Parabéns!'
    }

    handleGreenButtonClick() {
        console.log('green button clicked');
        this.greenButtonClicked.value = true;
    }

}
