import {ColumnLayout, HorizontalAlign, tsx, Lab1, Layout, Rectangle, Router, routerPage} from "@lab1/core";
import {Grid, GridItem, Material, Paper, Justify} from "@lab1/material";
import {BasePage} from "./BasePage";
import {Shared} from "../Codes/Shared";

@routerPage()
export class PageGrid extends BasePage {

    //region fields
    layout1!: Layout
    layout2!: Layout
    layout3!: Layout
    layout4!: Layout
    layout5!: Layout
    layout6!: Layout
    layout7!: Layout
    //endregion

    constructor(router: Router) {
        super({parent: Lab1.obj.currentRouterView});

        this.buildLayouts();
        this.buildTypescript();
        this.buildManagedTS();
        this.buildManagedTSX();
        this.buildBasicGrid();
        this.buildGridWithBreakpoints();

        this.buildEnd();
    }

    buildLayouts() {
        let columnLayout = new ColumnLayout({parent: this, horizontalAlign: HorizontalAlign.Center});
        this.buildHeader(columnLayout, 'Grid', 'The grid component helps keeping layout consistent across various screen resolutions and sizes. Lab1 comes with a 12-point grid system and contains 5 types of breakpoints that are used for specific screen sizes.');

        this.layout1 = this.buildColumnLayoutSection(columnLayout, 'Typescript', 'Grid-Typescript.ts', Shared.docTypescript, '#f5f5f5');
        this.layout2 = this.buildColumnLayoutSection(columnLayout, 'Managed Typescript', 'Grid-ManagedTS.ts', Shared.docManagedTS, '#f5f5f5');
        this.layout3 = this.buildColumnLayoutSection(columnLayout, 'Managed TSX', 'Grid-ManagedTSX.tsx', Shared.docManagedTSX,'#f5f5f5');
        this.layout5 = this.buildColumnLayoutSection(columnLayout,'Basic grid', 'Grid-Basic.ts','The column widths apply at all breakpoints, xs and up.','#f5f5f5');
        this.layout6 = this.buildColumnLayoutSection(columnLayout,'Grid with breakpoints', 'Grid-Breakpoints.ts','You can apply multiple column widths, causing the layout to change at the specific break point.','#f5f5f5');
    }

    buildTypescript() {
        //docStart Grid-Typescript.ts
        new Grid({
            parent: this.layout1,
            spacing: 5,
            justify: Justify.Center,
            childContent: [
                new GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                }),
                new GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                }),
                new GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                })
            ]
        });
        //docEnd
    }

    buildManagedTS() {
        //docStart Grid-ManagedTS.ts
        let managedContent = Material.Grid({
            spacing: 5,
            justify: Justify.Center,
            childContent: [
                Material.GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                }),
                Material.GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                }),
                Material.GridItem({
                    childContent: new Paper({
                        height: 140,
                        width: 140
                    })
                })
            ]
        });

        this.buildManaged(this.layout2, managedContent);
        //docEnd
    }

    buildManagedTSX() {
        //docStart Grid-ManagedTSX.tsx
        let managedContent =
            <Grid spacing={5} justify={Justify.Center}>
                <GridItem>
                    <Paper height={140} width={140}/>
                </GridItem>
                <GridItem>
                    <Paper height={140} width={140}/>
                </GridItem>
                <GridItem>
                    <Paper height={140} width={140}/>
                </GridItem>
            </Grid>

        this.buildManaged(this.layout3, managedContent);
        //docEnd
    }

    buildBasicGrid() {
        //docStart Grid-Basic.ts
        new Grid({
            parent: this.layout5,
            childContent: [
                new GridItem({
                    xs: 12,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=12'
                    })
                }),
                new GridItem({
                    xs: 6,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6'
                    })
                }),
                new GridItem({
                    xs: 6,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6'
                    })
                }),
                new GridItem({
                    xs: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=3'
                    })
                }),
                new GridItem({
                    xs: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=3'
                    })
                }),
                new GridItem({
                    xs: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=3'
                    })
                }),
                new GridItem({
                    xs: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=3'
                    })
                }),
            ]
        });
        //docEnd
    }

    buildGridWithBreakpoints() {
        //docStart Grid-Breakpoints.ts
        new Grid({
            parent: this.layout6,
            childContent: [
                new GridItem({
                    xs: 12,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=12'
                    })
                }),
                new GridItem({
                    xs: 12,
                    sm: 6,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=12 sm=6'
                    })
                }),
                new GridItem({
                    xs: 12,
                    sm: 6,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=12 sm=6'
                    })
                }),
                new GridItem({
                    xs: 6,
                    sm: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6 sm=3'
                    })
                }),
                new GridItem({
                    xs: 6,
                    sm: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6 sm=3'
                    })
                }),
                new GridItem({
                    xs: 6,
                    sm: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6 sm=3'
                    })
                }),
                new GridItem({
                    xs: 6,
                    sm: 3,
                    childContent: new Paper({
                        className: 'd-flex align-center justify-center mud-width-full py-8',
                        childContent: 'xs=6 sm=3'
                    })
                }),
            ]
        });
        //docEnd
    }
}
