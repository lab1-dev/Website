import {Align, ColumnLayout, HorizontalAlign, Lab1, component, Property, Router, routerPage, RowLayout, Layout, tsx, ref} from "@lab1/core";
import {Color, Text, ProgressCircular, ProgressLinear, Size, Typo, Material} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PageProgress extends BasePage {

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
    layout14!: Layout
    layout15!: Layout
    progress = new Property<number>(this, 0);
    @ref progress1?: ProgressCircular
    @ref progress2?: ProgressCircular
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildCircularDeterminate();
        this.buildCircularSized();
        this.buildLinearIndeterminate();
        this.buildLinearDeterminate();
        this.buildLinearMinMax();
        this.buildLinearBuffer();
        this.buildLinearSize();
        this.buildLinearRounded();
        this.buildLinearStriped();
        this.buildLinearText();
        this.buildLinearVertical();

        this.buildEnd();

        setInterval(() => {
            if (this.progress.value < 100) this.progress.value = this.progress.value + 4;
            else this.progress.value = 0;
        }, 500);
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Progress', 'Progress indicators that either show the length of a process or unspecified wait time, also known as indeterminate state. The animation is done with SVGs and CSS.\n' +
            '<br><br>Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app\'s state and indicate available actions, such as whether users can navigate away from the current screen.',
            'PageProgress.tsx',`${Shared.urlMaterialComponents}/Progress/ProgressCircular.ts`);

        this.layout1 = this.buildRowLayoutSection(columnLayout, 'Typescript', 'Progress-Typescript.ts', Shared.docTypescript,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout2 = this.buildRowLayoutSection(columnLayout, 'Managed Typescript', 'Progress-ManagedTS.ts', Shared.docManagedTS,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout3 = this.buildRowLayoutSection(columnLayout, 'Managed TSX', 'Progress-ManagedTSX.tsx', Shared.docManagedTSX,'white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout5 = this.buildRowLayoutSection(columnLayout, 'Circular determinate', 'Progress-CircularDeterminate.ts', 'Sets the progress based on the <b>value</b> property.','white',Align.HorizontalCenter| Align.VerticalCenter);
        this.layout6 = this.buildRowLayoutSection(columnLayout, 'Circular Sizes', 'Progress-CircularSized.ts', "3 sizes available: Small, Medium, Large. It's also possible to set the <b>style</b> directly to apply a custom size.",'white',Align.HorizontalCenter| Align.VerticalCenter);

        this.layout7 = this.buildColumnLayoutSection(columnLayout, 'Linear Indeterminate', 'Progress-LinearIndeterminate.ts', "Using <b>indeterminate</b> property, it animates continuously.",);
        this.layout8 = this.buildColumnLayoutSection(columnLayout, 'Linear Determinate', 'Progress-LinearDetermiante.ts');
        this.layout9 = this.buildColumnLayoutSection(columnLayout, 'Min and Max', 'Progress-MinMax.ts', 'By default, the value range is between 0 and 100. If you have a custom range, set <b>min</b> and <b>max</b> accordingly.');
        this.layout10 = this.buildColumnLayoutSection(columnLayout, 'Linear Buffer', 'Progress-LinearBuffer.ts', "When setting <b>buffer</b> to true, you also have to set the <b>bufferValue</b>. Use any combination of <b>bufferValue</b> and <b>value</b> to achieve your design.");
        this.layout11 = this.buildColumnLayoutSection(columnLayout, 'Linear Size', 'Progress-LinearSize.ts', '3 sizes available: Small, Medium, Large.');
        this.layout12 = this.buildColumnLayoutSection(columnLayout, 'Linear Rounded', 'Progress-LinearRounded.ts', 'Sets the border radius on the ProgressLinear to the theme value.');
        this.layout13 = this.buildColumnLayoutSection(columnLayout, 'Linear Striped', 'Progress-LinearStriped.ts', 'Applies a striped background over the progress bar.');
        this.layout14 = this.buildColumnLayoutSection(columnLayout, 'Linear Text', 'Progress-LinearTexts.ts', 'While using the <b>childContent</b> of the component, you can add a text to display current value.');
        this.layout15 = this.buildColumnLayoutSection(columnLayout, 'Linear Vertical', 'Progress-Vertical.ts', 'Vertical progress bars works exactly the same way as the default horizontal ones.');
    }

    buildTypescript() {
        //docStart Progress-Typescript.ts
        new ProgressCircular({
            parent: this.layout1,
            indeterminate: true,
            color: Color.Default
        });

        new ProgressCircular({
            parent: this.layout1,
            indeterminate: true,
            color: Color.Primary
        });

        new ProgressCircular({
            parent: this.layout1,
            indeterminate: true,
            color: Color.Secondary
        });

        new ProgressCircular({
            parent: this.layout1,
            indeterminate: true,
            color: Color.Success
        });

        new ProgressCircular({
            parent: this.layout1,
            indeterminate: true,
            color: Color.Info
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Progress-ManagedTS.ts
        let managedContent = [
            Material.ProgressCircular({
                ref: this.progress1,
                parent: this.layout1,
                indeterminate: true,
                color: Color.Default
            }),
            Material.ProgressCircular({
                parent: this.layout1,
                indeterminate: true,
                color: Color.Primary
            }),
            Material.ProgressCircular({
                parent: this.layout1,
                indeterminate: true,
                color: Color.Secondary
            }),
            Material.ProgressCircular({
                parent: this.layout1,
                indeterminate: true,
                color: Color.Success
            }),
            Material.ProgressCircular({
                parent: this.layout1,
                indeterminate: true,
                color: Color.Info
            })
        ];

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Progress-ManagedTSX.tsx
        let managedContent = [
            <ProgressCircular ref={this.progress2} indeterminate={true} color={Color.Default}/>,
            <ProgressCircular indeterminate={true} color={Color.Primary}/>,
            <ProgressCircular indeterminate={true} color={Color.Secondary}/>,
            <ProgressCircular indeterminate={true} color={Color.Success}/>,
            <ProgressCircular indeterminate={true} color={Color.Info}/>,
        ];

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildCircularDeterminate() {
        //docStart Progress-CircularDeterminate.ts
        new ProgressCircular({
            parent: this.layout5,
            value: this.progress,
            color: Color.Tertiary
        });

        new ProgressCircular({
            parent: this.layout5,
            value: this.progress,
            color: Color.Info
        });
        //docEnd
    }

    buildCircularSized() {
        //docStart Progress-CircularSized.ts
        new ProgressCircular({
            parent: this.layout6,
            color: Color.Primary,
            indeterminate: true,
            size: Size.Small
        });

        new ProgressCircular({
            parent: this.layout6,
            color: Color.Secondary,
            indeterminate: true,
            size: Size.Medium
        });

        new ProgressCircular({
            parent: this.layout6,
            color: Color.Tertiary,
            indeterminate: true,
            size: Size.Large
        });

        new ProgressCircular({
            parent: this.layout6,
            color: Color.Info,
            indeterminate: true,
            style: "height:70px;width:70px;"
        });
        //docEnd
    }

    buildLinearIndeterminate() {
        //docStart Progress-LinearIndeterminate.ts
        new ProgressLinear({
            parent: this.layout7,
            indeterminate: true,
            color: Color.Tertiary
        });

        new ProgressLinear({
            parent: this.layout7,
            indeterminate: true,
            color: Color.Info
        });
        //docEnd
    }

    buildLinearDeterminate() {
        //docStart Progress-LinearDetermiante.ts
        new ProgressLinear({
            parent: this.layout8,
            indeterminate: false,
            value: this.progress,
            color: Color.Tertiary
        });

        new ProgressLinear({
            parent: this.layout8,
            indeterminate: false,
            value: this.progress,
            color: Color.Info
        });
        //docEnd
    }

    buildLinearMinMax() {
        //docStart Progress-MinMax.ts
        new ProgressLinear({
            parent: this.layout9,
            indeterminate: false,
            color: Color.Tertiary,
            value: -2,
            min: -7,
            max: 7
        });

        new ProgressLinear({
            parent: this.layout9,
            indeterminate: false,
            color: Color.Info,
            value: 17.75,
            min: 17,
            max: 18
        });

        new ProgressLinear({
            parent: this.layout9,
            indeterminate: false,
            color: Color.Warning,
            value: 100,
            min: 0,
            max: 100
        });
        //docEnd
    }

    buildLinearBuffer() {
        //docStart Progress-LinearBuffer.ts
        let progress1 = new ProgressLinear({
            parent: this.layout10,
            buffer: true,
            color: Color.Tertiary,
            value: 0,
            bufferValue: 0
        });

        let progress2 = new ProgressLinear({
            parent: this.layout10,
            buffer: true,
            color: Color.Info,
            value: 0,
            bufferValue: 0
        });

        setInterval(() => {
            if (progress1.value.value! < 100) {
                progress1.value.value! += 4;
                progress1.bufferValue.value += 5;

                progress2.value.value! += 4;
                progress2.bufferValue.value += 5;
            } else {
                progress1.value.value = 5;
                progress1.bufferValue.value = 10

                progress2.value.value = 5;
                progress2.bufferValue.value = 10
            }
        }, 500);
        //docEnd
    }

    buildLinearSize() {
        //docStart Progress-LinearSize.ts
        new ProgressLinear({
            parent: this.layout11,
            color: Color.Dark,
            size: Size.Small,
            value: 25
        });

        new ProgressLinear({
            parent: this.layout11,
            color: Color.Info,
            size: Size.Medium,
            value: 50
        });

        new ProgressLinear({
            parent: this.layout11,
            color: Color.Tertiary,
            size: Size.Large,
            value: 75
        });
        //docEnd
    }

    buildLinearRounded() {
        //docStart Progress-LinearRounded.ts
        new ProgressLinear({
            parent: this.layout12,
            color: Color.Dark,
            size: Size.Small,
            rounded: true,
            value: 25
        });

        new ProgressLinear({
            parent: this.layout12,
            color: Color.Tertiary,
            size: Size.Medium,
            rounded: true,
            value: 50
        });

        new ProgressLinear({
            parent: this.layout12,
            color: Color.Info,
            size: Size.Large,
            rounded: true,
            value: 75
        });
        //docEnd
    }

    buildLinearStriped() {
        //docStart Progress-LinearStriped.ts
        new ProgressLinear({
            parent: this.layout13,
            color: Color.Tertiary,
            size: Size.Medium,
            value: 50,
            striped: true
        });

        new ProgressLinear({
            parent: this.layout13,
            color: Color.Info,
            size: Size.Large,
            value: 75,
            striped: true
        });
        //docEnd
    }

    buildLinearText() {
        //docStart Progress-LinearTexts.ts
        new ProgressLinear({
            parent: this.layout14,
            color: Color.Info,
            size: Size.Large,
            value: 22,
            text: new Text({
                typo: Typo.subtitle1,
                color: Color.Dark,
                childContent: '<b>22%</b>'
            })
        });
        //docEnd
    }

    buildLinearVertical() {
        //docStart Progress-Vertical.ts
        let rowLayout = new RowLayout({
            parent: this.layout15,
            spacing: 40,
            height:360,
        });

        new ProgressLinear({
            parent: rowLayout,
            vertical: true,
            color: Color.Dark,
            size: Size.Small,
            value: 25
        });

        new ProgressLinear({
            parent: rowLayout,
            vertical: true,
            color: Color.Tertiary,
            size: Size.Medium,
            indeterminate: true
        });

        new ProgressLinear({
            parent: rowLayout,
            color: Color.Info,
            size: Size.Medium,
            value: 12,
            vertical: true,
            text: new Text({
                typo: Typo.subtitle1,
                color: Color.Dark,
                childContent: '<b>12%</b>'
            })
        });
        //docEnd
    }
}
