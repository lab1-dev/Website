import {ColumnLayout, Lab1, Router, routerPage, HorizontalAlign, component, Layout, ref, tsx} from "@lab1/core";
import {Color, Material, Slider} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageSlider extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    @ref slider1?: Slider
    @ref slider2?: Slider
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildStepSliders();
        this.buildMinMaxValueSliders();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Slider', 'A slider is a visual representation and action to let the user select from a range of values.',
            'PageSlider.tsx',`${Shared.urlMaterialComponents}/Slider/Slider.ts`);

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Slider-Typescript.ts', Shared.docTypescript);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Slider-ManagedTS.ts', Shared.docManagedTS);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Slider-ManagedTSX.tsx', Shared.docManagedTSX);
        this.layout5 = this.buildColumnLayoutSection(columnLayout,'Steps','Slider-Step.ts','You can set the increment amount using the <b>step</b> property.');
        this.layout6 = this.buildColumnLayoutSection(columnLayout,'Minimum and Maximum','Slider-MinMax.ts','With <b>min</b> and <b>max</b> properties, you can set the minimum and maximum values allowed.');
    }

    buildTypescript() {
        //docStart Slider-Typescript.ts
        new Slider({
            parent: this.layout1,
            color: Color.Tertiary,
            value: 12,
        });

        new Slider({
            parent: this.layout1,
            color: Color.Info,
            value: 24,
        });

        new Slider({
            parent: this.layout1,
            color: Color.Warning,
            value: 36,
        });

        new Slider({
            parent: this.layout1,
            disabled: true,
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Slider-ManagedTS.ts
        let managedContent = [
            Material.Slider({
                ref: this.slider1,
                color: Color.Tertiary,
                value: 12,
                onChange:(value)=>console.log(`value changed: ${value}`)
            }),
            Material.Slider({
                color: Color.Info,
                value: 24
            }),
            Material.Slider({
                color: Color.Warning,
                value: 36
            }),
            Material.Slider({
                disabled: true,
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Slider-ManagedTSX.tsx
        let managedContent = [
            <Slider ref={this.slider2} color={Color.Tertiary} value={12} onChange={(value)=>console.log(`value changed: ${value}`)}/>,
            <Slider color={Color.Info} value={24}/>,
            <Slider color={Color.Warning} value={36}/>,
            <Slider disabled={true}/>
        ];
        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildStepSliders() {
        //docStart Slider-Step.ts
        new Slider({
            parent: this.layout5,
            color: Color.Tertiary,
            value: 12,
            step: 7,
        });

        new Slider({
            parent: this.layout5,
            color: Color.Warning,
            value: 24,
            step: 12,
        });
        //docEnd
    }

    buildMinMaxValueSliders() {
        //docStart Slider-MinMax.ts
        new Slider({
            parent: this.layout6,
            color: Color.Tertiary,
            min: 20,
            max: 80,
            value: 48,
        });

        new Slider({
            parent: this.layout6,
            color: Color.Info,
            min: -1,
            max: 1,
            step: 0.05,
        });
        //docEnd
    }
}
