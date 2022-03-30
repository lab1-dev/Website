import {ColumnLayout, HorizontalAlign, Lab1, Layout, component, Property, Router, routerPage, TimeSpan, Align} from "@lab1/core";
import {Color, OpenTo, Orientation, PickerVariant, TimeEditMode, TimePicker} from '@lab1/material';
import {BasePage} from "./BasePage";

@routerPage()
@component
export class PageTimePicker extends BasePage {

    //region fields and properties
    layout1!:Layout
    layout2!:Layout
    layout3!:Layout
    layout4!:Layout
    layout5!:Layout
    layout6!:Layout
    layout7!:Layout
    layout8!:Layout
    layout9!:Layout
    layout10!:Layout
    layout11!:Layout
    readonly time1=new Property<TimeSpan|undefined>(this,new TimeSpan(0,0,45,0));
    readonly time2=new Property<TimeSpan|undefined>(this,new TimeSpan(0,0,45,0));
    readonly time3=new Property<TimeSpan|undefined>(this,new TimeSpan(0,22,22,0));
    readonly time5=new Property<TimeSpan|undefined>(this,new TimeSpan(0,22,22,0));
    readonly time8=new Property<TimeSpan|undefined>(this,new TimeSpan(0,0,45,0));
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildBasicUsage();
        //this.buildDialogMode();
        // this.buildStaticMode();
        // this.buildOpenToMinutes();
        // this.buildEditMode();
        // this.buildColors();
        // this.buildElevation();
        // this.buildKeyboardNavigation();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout,'TimePicker','Provides the user with a simple way to select time.');
        this.layout4 = this.buildColumnLayoutSection(columnLayout,'Basic Usage', 'DatePicker-Basic.ts','','white',true,Align.HorizontalCenter);
        // this.layout2 = this.buildColumnLayout('Dialog Mode', columnLayout);
        // this.layout3 = this.buildColumnLayout('Static Mode', columnLayout);
        // this.layout4 = this.buildColumnLayout('Open to Minutes', columnLayout);
        // this.layout5 = this.buildColumnLayout('Edit Mode', columnLayout);
        // this.layout6 = this.buildColumnLayout('Colors', columnLayout);
        // this.layout7 = this.buildColumnLayout('Elevation', columnLayout);
        // this.layout8 = this.buildColumnLayout('Keyboard Navigation', columnLayout);
    }

    buildTypescript(){

    }

    buildManagedTS(){

    }

    buildManagedTSX(){

    }

    buildBasicUsage(){
        new TimePicker({
            parent:this.layout4,
            label:'12 hours',
            amPM:true,
            time:this.time1,
        });

        // new TimePicker({
        //     parentComponent:this.layout1,
        //     label:'12 hours custom format',
        //     amPM:true,
        //     timeFormat:'h:mm tt',
        //     time:this.time1
        // });
        //
        // new TimePicker({
        //     parentComponent:this.layout1,
        //     label:'24 hours',
        //     time:this.time1
        // });
        //
        // new TimePicker({
        //     parentComponent:this.layout1,
        //     label:'24 hours (editable)',
        //     editable:true
        // });

        //todo add custom actions
        // new TimePicker({
        //     parentComponent:this.layout1,
        //
        // });
    }

    buildDialogMode(){
        new TimePicker({
            parent:this.layout5,
            pickerVariant:PickerVariant.Dialog,
            label:'12 hours',
            amPM:true,
            time:this.time2
        });

        new TimePicker({
            parent:this.layout5,
            pickerVariant:PickerVariant.Dialog,
            label:'24 hours',
            time:this.time2
        });

        //FIXME remover
        this.layout5.height.value=100
    }

    buildStaticMode(){
        new TimePicker({
            parent:this.layout6,
            pickerVariant:PickerVariant.Static,
            time:this.time3,
            amPM:true
        });

        new TimePicker({
            parent:this.layout6,
            pickerVariant:PickerVariant.Static,
            orientation:Orientation.Landscape,
            time:this.time3
        });

        //FIXME remover
        this.layout6.height.value=100
    }

    buildOpenToMinutes(){
        new TimePicker({
            parent:this.layout7,
            label:'Minutes',
            text:'22:22',
            openTo:OpenTo.Minutes
        });

        //FIXME remover
        this.layout7.height.value=100
    }

    buildEditMode(){
        new TimePicker({
            parent:this.layout8,
            label:'Normal',
            time:this.time5,
            timeEditMode:TimeEditMode.Normal
        })

        new TimePicker({
            parent:this.layout8,
            label:'OnlyHours',
            time:this.time5,
            timeEditMode:TimeEditMode.OnlyHours
        });

        new TimePicker({
            parent:this.layout8,
            label:'OnlyMinutes',
            time:this.time5,
            timeEditMode:TimeEditMode.OnlyMinutes
        });

        //FIXME remover
        this.layout8.height.value=100
    }

    buildColors(){
        new TimePicker({
            parent:this.layout9,
            pickerVariant:PickerVariant.Static,
            color:Color.Success,
            rounded:true,
            text:'06:09 PM',
            amPM:true
        });

        new TimePicker({
            parent:this.layout9,
            pickerVariant:PickerVariant.Static,
            color:Color.Secondary,
            rounded:true,
            text:'22:22'
        });

        //FIXME remover
        this.layout9.height.value=100
    }

    buildElevation(){
        new TimePicker({
            parent:this.layout10,
            pickerVariant:PickerVariant.Static,
            color:Color.Success,
            rounded:true,
            elevation:1,
            text:'09:45 PM',
            amPM:true,
        });

        new TimePicker({
            parent:this.layout10,
            pickerVariant:PickerVariant.Static,
            color:Color.Secondary,
            rounded:true,
            elevation:12,
            text:'22:22'
        });

        //FIXME remover
        this.layout10.height.value=100
    }

    buildKeyboardNavigation(){
        new TimePicker({
            parent:this.layout11,
            label:'12 hours',
            amPM:true,
            time:this.time8
        });

        new TimePicker({
            parent:this.layout11,
            label:'12 hours custom format',
            amPM:true,
            timeFormat:'h:mm tt',
            time:this.time8
        });

        new TimePicker({
            parent:this.layout11,
            label:'24 hours',
            time:this.time8
        });

        new TimePicker({
            parent:this.layout11,
            label:'24 hours (editable)',
            editable:true
        })

        //todo add with actions

        //FIXME remover
        this.layout11.height.value=100
    }
}
