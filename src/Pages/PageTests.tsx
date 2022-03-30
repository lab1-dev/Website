import {ColumnLayout, Lab1, Layout, component, Property, P, Router, Align, tsx} from "@lab1/core";
import {BasePage} from "./BasePage";
import {Button, Material} from "@lab1/material";

@component
export class PageTests extends BasePage{

    layout1!:Layout

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescriptWithChildContent();
        //this.buildManagedTS();
        //this.buildTest2();
        //this.buildTest3()
    }

    async onAfterRender(firstRender: boolean = false) {
        super.onAfterRender(firstRender);
        console.log('(PageTests)onAfterRender',firstRender);
    }

    buildLayouts(){
        this.layout1 = this.buildRowLayoutSection(this,'Test', '','','white',Align.HorizontalCenter);
    }

    buildTypescript(){
        let columnLayout=new ColumnLayout({
            id:'myColumn',
            parent:this.layout1,
            width:400,
            height:400
        });
        new Button({parent:columnLayout, text:'First'});
        new Button({parent:columnLayout, text:'Second'});
        new Button({parent:columnLayout, text:'Third'});
    }

    buildTypescriptWithChildContent(){
        let column=new ColumnLayout({
            id:'myColumn',
            parent:this.layout1,
            width:400,
            height:400,
            childContent:[
                new Button({text:'First Typescript'}),
                new Button({text:'Second'}),
                new Button({text:'Third'}),
            ]
        });
    }

    buildManagedTS(){
        let managedCode=[
            Lab1.ColumnLayout({
                id:'myColumn',
                parent:this.layout1,
                width:400,
                height:400,
                childContent:[
                    Material.Button({text:'First ManagedTS'}),
                    Material.Button({text:'Second'}),
                    Material.Button({text:'Third'}),
                ]
            })
        ];
        this.buildManaged(this.layout1,managedCode);
    }

    buildManagedTSX(){
        let managedCode=[
            <ColumnLayout id='myColumn' width={400} height={400} >
                <Button text='First TSX'/>
                <Button text='Second'/>
                <Button text='Third'/>
            </ColumnLayout>
        ]
        this.buildManaged(this.layout1,managedCode);
    }
}
