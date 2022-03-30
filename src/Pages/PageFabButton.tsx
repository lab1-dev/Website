import {Align, ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, ref, Router, routerPage} from "@lab1/core";
import {Button, Color, FabButton, Material, Size} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";
import {SampleService} from "../Services/SampleService";

@routerPage()
export class PageFabButton extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    @ref fabButton1?:FabButton
    @ref fabButton2?:FabButton
    //endregion

    constructor(router: Router, sampleService:SampleService) {
        super({parent: Lab1.obj.currentRouterView});

        console.log(sampleService.value);

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildUsage();
        this.buildSmallButtons();
        this.buildMediumButtons();
        this.buildLargeButtons();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout,'FabButton','A floating action button (FAB).','PageFabButton.tsx');

        this.layout1 = this.buildRowLayoutSection(columnLayout,'Typescript', 'FabButton-Typescript.ts',Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout,'Managed Typescript', 'FabButton-ManagedTS.ts',Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout,'Managed TSX', 'FabButton-ManagedTSX.tsx',Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout4 = this.buildRowLayoutSection(columnLayout,'Usage', 'FabButton-Usage.ts','Misc usage of FabButtons.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout,'Small Size','FabButton-Small.ts', 'FabButtons with and without label and icons on the left (startIcon) and on the right (endIcon). ','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout,'Medium Size',  'FabButton-Medium.ts','Medium sized FabButtons.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout7 = this.buildRowLayoutSection(columnLayout,'Large Size', 'FabButton-Large.ts', 'Large FabButtons.','white',Align.HorizontalCenter| Align.VerticalCenter);
    }

    buildTypescript(){
        //docStart FabButton-Typescript.ts
        new FabButton({
            parent: this.layout1,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Small,
            iconSize: Size.Medium
        });

        new FabButton({
            parent: this.layout1,
            startIcon: Material.Icons.Filled.Edit,
            color: Color.Info,
            size: Size.Small,
            iconSize: Size.Medium
        });

        new FabButton({
            parent: this.layout1,
            startIcon: Material.Icons.Filled.Delete,
            color: Color.Secondary,
            size: Size.Small,
            iconSize: Size.Medium
        });
        //docEnd
    }

    buildManagedTS(){
        //docStart FabButton-ManagedTS.ts
        let managedContent=[
            Material.FabButton({
                ref:this.fabButton1,
                startIcon: Material.Icons.Filled.Add,
                color: Color.Tertiary,
                size: Size.Small,
                iconSize: Size.Medium
            }),
            Material.FabButton({
                startIcon: Material.Icons.Filled.Edit,
                color: Color.Info,
                size: Size.Small,
                iconSize: Size.Medium
            }),
            Material.FabButton({
                startIcon: Material.Icons.Filled.Delete,
                color: Color.Secondary,
                size: Size.Small,
                iconSize: Size.Medium
            })
        ];

        this.buildManaged(this.layout2,managedContent);
        this.fabButton1?.onClick.connect(()=>console.log('hi there!'));
        //docEnd
    }

    buildManagedTSX(){
        //docStart FabButton-ManagedTSX.tsx
        let managedContent=[
            <FabButton ref={this.fabButton2} startIcon={Material.Icons.Filled.Add} color={Color.Tertiary} size={Size.Small} iconSize={Size.Medium}/>,
            <FabButton startIcon={Material.Icons.Filled.Edit} color={Color.Info} size={Size.Small} iconSize={Size.Medium}/>,
            <FabButton startIcon={Material.Icons.Filled.Delete} color={Color.Secondary} size={Size.Small} iconSize={Size.Medium}/>
        ];

        this.buildManaged(this.layout3,managedContent);
        this.fabButton2?.onClick.connect(()=>console.log('hi there!'));
        //docEnd
    }

    buildUsage() {
        //docStart FabButton-Usage.ts
        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.Add,
            size:Size.Small,
            color: Color.Tertiary
        });

        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.Edit,
            color: Color.Info,
            size:Size.Medium
        });

        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.ShoppingCart,
            disableElevation: true,
            color: Color.Secondary,
            size:Size.Large
        });

        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.NavigateBefore,
            text: 'Previous',
            size:Size.Medium
        });

        new FabButton({
            parent: this.layout4,
            endIcon: Material.Icons.Filled.NavigateNext,
            text: 'Next',
            size:Size.Medium
        });

        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.Chat,
            endIcon: Material.Icons.Filled.Casino,
            text: 'Button',
            size:Size.Medium
        });

        new FabButton({
            parent: this.layout4,
            startIcon: Material.Icons.Filled.Save,
            disabled: true
        });
        //docEnd
    }

    buildSmallButtons() {
        //docStart FabButton-Small.ts
        new FabButton({
            parent: this.layout5,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Small,
            iconSize: Size.Small
        });

        new FabButton({
            parent: this.layout5,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Small,
            iconSize: Size.Medium
        });

        new FabButton({
            parent: this.layout5,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Small,
            iconSize: Size.Large
        });

        new FabButton({
            parent: this.layout5,
            startIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Small,
            iconSize: Size.Small,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout5,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Small,
            iconSize: Size.Small,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout5,
            startIcon: Material.Icons.Filled.ShoppingCart,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Small,
            iconSize: Size.Small,
            text: 'cart'
        });
        //docEnd
    }

    buildMediumButtons() {
        //docStart FabButton-Medium.ts
        new FabButton({
            parent: this.layout6,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Medium,
            iconSize: Size.Small
        });

        new FabButton({
            parent: this.layout6,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Medium,
            iconSize: Size.Medium
        });

        new FabButton({
            parent: this.layout6,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Medium,
            iconSize: Size.Large
        });

        new FabButton({
            parent: this.layout6,
            startIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Medium,
            iconSize: Size.Medium,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout6,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Medium,
            iconSize: Size.Medium,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout6,
            startIcon: Material.Icons.Filled.ShoppingCart,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Medium,
            iconSize: Size.Medium,
            text: 'cart'
        });
        //docEnd
    }

    buildLargeButtons() {
        //docStart FabButton-Large.ts
        new FabButton({
            parent: this.layout7,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Large,
            iconSize: Size.Small
        });

        new FabButton({
            parent: this.layout7,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Large,
            iconSize: Size.Medium
        });

        new FabButton({
            parent: this.layout7,
            startIcon: Material.Icons.Filled.Add,
            color: Color.Tertiary,
            size: Size.Large,
            iconSize: Size.Large
        });

        new FabButton({
            parent: this.layout7,
            startIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Large,
            iconSize: Size.Large,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout7,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Large,
            iconSize: Size.Large,
            text: 'cart'
        });

        new FabButton({
            parent: this.layout7,
            startIcon: Material.Icons.Filled.ShoppingCart,
            endIcon: Material.Icons.Filled.ShoppingCart,
            color: Color.Info,
            size: Size.Large,
            iconSize: Size.Large,
            text: 'cart'
        });
        //docEnd
    }
}
