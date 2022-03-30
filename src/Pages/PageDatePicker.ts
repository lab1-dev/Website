import {ColumnLayout, DateTime, HorizontalAlign, Lab1, Layout, component, Property, Router, routerPage, Align} from "@lab1/core";
import {Color, DatePicker, OpenTo, Orientation, PickerVariant} from '@lab1/material';
import {BasePage} from "./BasePage";

@routerPage()
@component
export class PageDatePicker extends BasePage {

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
    layout12!:Layout
    readonly date1=new Property<DateTime|undefined>(this,DateTime.today);
    readonly date3=new Property<DateTime|undefined>(this,DateTime.today);
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildBasicUsage();
        // this.buildInternationalization();
        // this.buildDialogMode();
        // this.buildStaticMode();
        // this.buildDifferentViews();
        // this.buildColors();
        // this.buildElevation();
        // this.buildFixedValues();
        // this.buildRangePicker();

        this.buildEnd();
    }

    buildLayouts(){
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout,'DatePicker','Provides the user with a simple way to select a date.');
        this.layout4 = this.buildColumnLayoutSection(columnLayout,'Basic Usage:','DatePicker-Basic.ts','','white',true,Align.HorizontalCenter);
        // this.layout2 = this.buildColumnLayout('Internationalization:', columnLayout);
        // this.layout3 = this.buildColumnLayout('Dialog Mode:', columnLayout);
        // this.layout4 = this.buildColumnLayout('Static Mode:', columnLayout);
        // this.layout5 = this.buildColumnLayout('Different Views:', columnLayout);
        // this.layout6 = this.buildColumnLayout('Colors:', columnLayout);
        // this.layout7 = this.buildColumnLayout('Elevation:', columnLayout);
        // this.layout8 = this.buildColumnLayout('Fixed Values Usage:', columnLayout);
        // this.layout9 = this.buildColumnLayout('Range Picker Usage:', columnLayout);
    }

    buildTypescript(){

    }

    buildManagedTS(){

    }

    buildManagedTSX(){

    }

    buildBasicUsage(){
        new DatePicker({
            parent:this.layout4,
            label:'Basic example',
            date:this.date1,
        });

        // new DatePicker({
        //     parentComponent:this.layout1,
        //     label:'Editable with Placeholder',
        //     editable:true,
        //     date:this.date1,
        //     placeholder:'Select Date'
        // });
        //
        // new DatePicker({
        //     parentComponent:this.layout1,
        //     label:'Only Calendar',
        //     date:this.date1,
        //     disableToolBar:true,
        //     helperText:'No header'
        // });
        //
        // new DatePicker({
        //     parentComponent:this.layout1,
        //     label:'Date Format',
        //     date:this.date1,
        //     helperText:'For custom cultures',
        //     dateFormat:'dd/MM/yyyy'
        // });
        //
        // new DatePicker({
        //     parentComponent:this.layout1,
        //     label:'Show week number',
        //     showWeekNumbers:true,
        //     date:this.date1
        // });
        //
        // new DatePicker({
        //     parentComponent:this.layout1,
        //     label:'Display two months',
        //     displayMonths:2,
        //     titleDateFormat:'ddd, dd MMMM',
        //     date:this.date1
        // });

        //todo add actions
    }

    buildInternationalization(){



        //FIXME remover
        this.layout5.height.value=100
    }

    buildDialogMode(){

        new DatePicker({
            parent:this.layout6,
            pickerVariant:PickerVariant.Dialog,
            label:'Picker example',
            text:'2022-11-22'
        });

        new DatePicker({
            parent:this.layout6,
            pickerVariant:PickerVariant.Dialog,
            label:'Only Calendar',
            text:'2022-11-22',
            disableToolBar:true,
            helperText:'No header'
        });

        new DatePicker({
            parent:this.layout6,
            pickerVariant:PickerVariant.Dialog,
            label:'Date Format',
            helperText:'For custom cultures',
            dateFormat:'dd/MM/yyyy',
            date:this.date3
        });

        //FIXME remover
        this.layout6.height.value=100
    }

    buildStaticMode(){
        new DatePicker({
            parent:this.layout7,
            pickerVariant:PickerVariant.Static,
            date:DateTime.today
        });

        new DatePicker({
            parent:this.layout7,
            pickerVariant:PickerVariant.Static,
            orientation:Orientation.Landscape,
            date:DateTime.today
        });

        //FIXME remover
        this.layout7.height.value=100
    }

    buildDifferentViews(){
        new DatePicker({
            parent:this.layout8,
            label:'Year',
            openTo:OpenTo.Year,
            text:'2022-11-22'
        });

        new DatePicker({
            parent:this.layout8,
            label:'Month',
            openTo:OpenTo.Month,
            text:'2022-11-22'
        })

        //FIXME remover
        this.layout8.height.value=100
    }

    buildColors(){
        new DatePicker({
            parent:this.layout9,
            pickerVariant:PickerVariant.Static,
            color:Color.Success,
            rounded:true,
            date:DateTime.today
        });

        new DatePicker({
            parent:this.layout9,
            pickerVariant:PickerVariant.Static,
            color:Color.Secondary,
            rounded:true,
            date:DateTime.today
        })

        //FIXME remover
        this.layout9.height.value=100
    }

    buildElevation(){
        new DatePicker({
            parent:this.layout10,
            pickerVariant:PickerVariant.Static,
            rounded:true,
            elevation:1,
            date:DateTime.today
        });

        new DatePicker({
            parent:this.layout10,
            pickerVariant:PickerVariant.Static,
            rounded:true,
            elevation:12,
            date:DateTime.today
        });

        //FIXME remover
        this.layout10.height.value=100
    }

    buildFixedValues(){
        let yearMonth=new Property<DateTime|undefined>(this,undefined);
        let monthDay=new Property<DateTime|undefined>(this,undefined);
        let yearDay=new Property<DateTime|undefined>(this,undefined);
        let year=new Property<DateTime|undefined>(this,undefined);
        let month=new Property<DateTime|undefined>(this,undefined);
        let day=new Property<DateTime|undefined>(this,undefined);

        new DatePicker({
            parent:this.layout11,
            label:'Year-Month Picker (Fixed Day)',
            date:yearMonth,
            openTo:OpenTo.Year,
            fixDay:1,
            dateFormat:'yyyy/MM'
        });

        new DatePicker({
            parent:this.layout11,
            label:'Month-Day Picker (Fixed Year)',
            date:monthDay,
            openTo:OpenTo.Month,
            fixYear:2022,
            dateFormat:'MM/dd'
        });

        new DatePicker({
            parent:this.layout11,
            label:'Year-Day Picker (Fixed Month)',
            date:yearDay,
            openTo:OpenTo.Year,
            fixMonth:12,
        });

        new DatePicker({
            parent:this.layout11,
            label:'Year Picker (Fixed Month and Day)',
            openTo:OpenTo.Year,
            fixMonth:DateTime.today.month,
            fixDay:DateTime.today.day,
            dateFormat:'yyyy'
        });

        new DatePicker({
            parent:this.layout11,
            label:'Month Picker (Fixed Year and Day)',
            date:month,
            openTo:OpenTo.Month,
            fixYear:DateTime.today.year,
            fixDay:DateTime.today.day,
            dateFormat:'MMM'
        });

        new DatePicker({
            parent:this.layout11,
            label:'Day Picker (Fixed Year and Month)',
            date:day,
            fixYear:DateTime.today.year,
            dateFormat:'dd'
        });

        //FIXME remover
        this.layout11.height.value=100
    }

    buildRangePicker(){


        //FIXME remover
        this.layout12.height.value=100
    }

}
