import {Align, ColumnLayout, HorizontalAlign, Lab1, Layout, component, Router, routerPage, ref, tsx} from "@lab1/core";
import {Color, Material, Page, Pagination, Size, Variant} from '@lab1/material';
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
@component
export class PagePagination extends BasePage {

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
    layout10!: Layout
    p1?: Pagination
    @ref pagination1?: Pagination
    @ref pagination2?: Pagination
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildVariants();
        this.buildDisabled();
        this.buildRectangular();
        this.buildSized();
        this.buildWithButtonControls();
        this.buildItemCount();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Pagination', 'Pagination allows the User to select a specific page from a range of pages.',
            'PagePagination.tsx',`${Shared.urlMaterialComponents}/Pagination/Pagination.ts`);

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Pagination-Typescript.ts', Shared.docTypescript, 'white', true, Align.HorizontalCenter);
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Pagination-ManagedTS.ts', Shared.docManagedTS, 'white', true, Align.HorizontalCenter);
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Pagination-ManagedTSX.tsx', Shared.docManagedTSX, 'white', true, Align.HorizontalCenter);
        this.layout5 = this.buildColumnLayoutSection(columnLayout, 'Variants', 'Pagination-Variants.ts', 'The default variant is Text but can be changed to Filled or Outlined', 'white', true, Align.HorizontalCenter);
        this.layout6 = this.buildColumnLayoutSection(columnLayout, 'Disabled', 'Pagination-Disabled.ts', 'Pagination can be disabled with the <b>disabled</b> property.', 'white', true, Align.HorizontalCenter);
        this.layout7 = this.buildColumnLayoutSection(columnLayout, 'Rectangular', 'Pagination-Rectangular.ts', 'Rectangular uses a rectangular shape instead of a circular.', 'white', true, Align.HorizontalCenter);
        this.layout8 = this.buildColumnLayoutSection(columnLayout, 'Sizes', 'Pagination-Sizes.ts', '3 sizes available: Small, Medium and Large.', 'white', true, Align.HorizontalCenter);
        this.layout9 = this.buildColumnLayoutSection(columnLayout, 'Button Controls', 'Pagination-ButtonControls.ts', 'You can show/hide the <b>first</b>, <b>last</b>, <b>next</b> and <b>previous</b> buttons.', 'white', true, Align.HorizontalCenter);
        this.layout10 = this.buildColumnLayoutSection(columnLayout, 'Item count', 'Pagination-Count.ts', 'Properties <b>boundaryCount</b> and <b>middleCount</b> specify the number of items displayed before, between and after the ellipsis.', 'white', true, Align.HorizontalCenter);
    }

    buildTypescript() {
        //docStart Pagination-Typescript.ts
        new Pagination({
            parent: this.layout1,
            color: Color.Info,
            count: 4,
            selected: 1,
            onControlButtonClick: (page: Page) => console.log(`pagination control clicked: ${Page[page]}`),
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Pagination-ManagedTS.ts
        let managedContent = Material.Pagination({
            ref: this.pagination1,
            color: Color.Info,
            count: 4,
            selected: 1
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Pagination-ManagedTSX.tsx
        let managedContent = <Pagination ref={this.pagination2} color={Color.Info} count={4} selected={1}/>

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildVariants() {
        //docStart Pagination-Variants.ts
        new Pagination({
            parent: this.layout5,
            color: Color.Tertiary,
            count: 4,
            variant: Variant.Filled
        });

        new Pagination({
            parent: this.layout5,
            color: Color.Info,
            count: 4,
            variant: Variant.Outlined
        });
        //docEnd
    }

    buildDisabled() {
        //docStart Pagination-Disabled.ts
        new Pagination({
            parent: this.layout6,
            count: 3,
            disabled: true
        });
        //docEnd
    }

    buildRectangular() {
        //docStart Pagination-Rectangular.ts
        new Pagination({
            parent: this.layout7,
            count: 6,
            color: Color.Tertiary,
            rectangular: true,
            variant: Variant.Text
        });

        new Pagination({
            parent: this.layout7,
            count: 6,
            color: Color.Info,
            rectangular: true,
            variant: Variant.Filled
        });

        new Pagination({
            parent: this.layout7,
            count: 6,
            color: Color.Warning,
            rectangular: true,
            variant: Variant.Outlined
        });
        //docEnd
    }

    buildSized() {
        //docStart Pagination-Sizes.ts
        new Pagination({
            parent: this.layout8,
            count: 6,
            color: Color.Tertiary,
            size: Size.Small,
            variant: Variant.Filled
        });

        new Pagination({
            parent: this.layout8,
            count: 6,
            color: Color.Info,
            size: Size.Medium,
            variant: Variant.Filled
        });

        new Pagination({
            parent: this.layout8,
            count: 6,
            color: Color.Warning,
            size: Size.Large,
            variant: Variant.Filled
        });
        //docEnd
    }

    buildWithButtonControls() {
        //docStart Pagination-ButtonControls.ts
        new Pagination({
            parent: this.layout9,
            count: 11,
            color: Color.Tertiary,
            showPreviousButton: false,
            showNextButton: false
        });

        new Pagination({
            parent: this.layout9,
            count: 11,
            color: Color.Info,
            showFirstButton: true,
            showLastButton: true
        });
        //docEnd
    }

    buildItemCount() {
        //docStart Pagination-Count.ts
        new Pagination({
            parent: this.layout10,
            color: Color.Tertiary,
            boundaryCount: 1,
            middleCount: 1,
            count: 22,
            selected: 11
        });

        new Pagination({
            parent: this.layout10,
            color: Color.Info,
            boundaryCount: 2,
            middleCount: 5,
            count: 22,
            selected: 11
        });
        //docEnd
    }
}
