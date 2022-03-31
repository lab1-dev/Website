import {Align, ColumnLayout, GridLayout, Component, Label, Property, Rectangle, RouterPage, RouterPageProps, RowLayout,} from "@lab1/core"
import {Button, Color, Material, Size, Spacer, Text, ToolBar, Typo} from "@lab1/material";
import {Shared} from "../Codes/Shared";

interface Test {
    title: string
    callback: () => void
}

export class BasePage extends RouterPage {

    //region fields and properties
    tests: Test[] = [];
    timer: any;
    label?: Label
    elapsedLabel?: Label
    t0: number
    isCodeVisible = new Property<boolean>(this, false);
    //endregion

    constructor(props: RouterPageProps) {
        super(props);
        this.t0 = performance.now();
    }

    protected buildHeader(parent: Component, title: string, description: string, pageSourceFileName?: string, componentSourceURL?:string): void {
        let columnLayout = new ColumnLayout({
            marginTop: 64,
            parent: parent,
            width: 1280
        });
        new Text({
            parent: columnLayout,
            typo: Typo.h3,
            childContent: `${title}`
        });
        new Text({
            parent: columnLayout,
            typo: Typo.body1,
            childContent: `${description}`
        });
        if(componentSourceURL){
            new Label({
                parent: columnLayout,
                text: 'Component source code',
                style: 'font-size:12px; color:silver;text-decoration: underline;cursor:pointer;',
                onClick: () => window.open(componentSourceURL, '_self')
            })
        }
        if (pageSourceFileName) {
            new Label({
                parent: columnLayout,
                text: 'This page source code',
                style: 'font-size:12px; color:silver;text-decoration: underline;cursor:pointer;',
                onClick: () => window.open(`${Shared.urlPages}${pageSourceFileName}`, '_self')
            })
        }
        this.elapsedLabel = new Label({
            parent: columnLayout,
            style: 'font-size:12px; color:silver;'
        });
    }

    protected buildTextBlockArea(parent: Component, title: string): ColumnLayout {
        let columnLayout = new ColumnLayout({
            parent: parent,
            width: '100%',
            marginTop: 12,
        });
        new Text({
            parent: columnLayout,
            marginBottom: 5,
            typo: Typo.h5,
            childContent: `<b>${title}</b>`
        });
        return columnLayout;
    }

    protected buildColumnLayoutSection(parentComponent: Component, title: string, docFile: string, description?: string, backgroundColor = 'white', displayCodeButton = true, align: Align = Align.Left): ColumnLayout {
        let rectComponents = this.buildSection(title, parentComponent, backgroundColor, description, docFile, displayCodeButton);
        return new ColumnLayout({
            parent: rectComponents,
            className: 'pa-4',
            width: '100%',
            spacing: 12,
            alignChildContent: align
        });
    }

    protected buildRowLayoutSection(parentComponent: Component, title: string, docFile: string | undefined = undefined, description: string | undefined = undefined, backgroundColor = 'white', align: Align = Align.Left): RowLayout {
        let rectComponents = this.buildSection(title, parentComponent, backgroundColor, description, docFile);
        return new RowLayout({
            parent: rectComponents,
            paddingTop: 8,
            spacing: 12,
            alignChildContent: align
        });
    }

    protected buildSection(title: string, parentComponent: Component, backgroundColor = 'white', description?: string, docFile?: string, displayCodeButton = true): Rectangle {
        let columnLayout = new ColumnLayout({
            parent: parentComponent,
            width: '100%',
            marginTop: 48,
        });
        new Text({
            parent: columnLayout,
            marginBottom: description != undefined ? 0 : 20,
            typo: Typo.h5,
            childContent: `<b>${title}</b>`
        });
        if (description != undefined) new Text({
            parent: columnLayout,
            marginBottom: 20,
            typo: Typo.body1,
            childContent: `${description}`
        });
        let rectComponents = new Rectangle({
            parent: columnLayout,
            width: '100%',
            borderRadius: 8,
            borderWidth: 1,
            borderStyle: 'solid',
            paddingLeft: 33,
            paddingRight: 5,
            paddingBottom: 33,
            paddingTop: displayCodeButton ? 0 : 33,
            backgroundColor: backgroundColor,
            borderColor: '#0000001e',
        });
        let rectCode = new Rectangle({
            parent: columnLayout,
            width: '100%',
            display: 'none',//initially hidden. Not using visible=false because it keeps the height
            borderRadius: '0px 0px 8px 8px',
            borderWidth: 1,
            borderStyle: 'solid',
            paddingRight: 5,
            backgroundColor: '#f5f5f5',
            borderColor: '#0000001e',
        });
        if (docFile != undefined) {
            rectCode.element!.innerHTML = `<pre data-src=\"assets/docs/${docFile}\"></pre>`;// `assets/docs/${docFile}.html`
        }
        if (displayCodeButton) {
            let toolBar = new ToolBar({
                parent: rectComponents,
                dense: true,
                style: 'height: unset;',
                disableGutters: true,
            });
            new Spacer({parent: toolBar});
            let btn: Button = new Button({
                parent: toolBar,
                startIcon: Material.Icons.Rounded.Code,
                color: Color.Default, size: Size.Small,
                style: "font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;text-transform: none;font-size: 14px;",
                text: 'Show code',
                onClick: () => this.onBtnShowHideCodeClicked(btn, rectComponents, rectCode)
            });
        }
        return rectComponents;
    }

    /**
     * Show or hide the code content according to User 'Show code'/'Hide code' button click.
     */
    protected onBtnShowHideCodeClicked(btn: Button, rectComponents: Rectangle, rectCode: Rectangle): void {
        if (rectCode.display.value == 'none') {
            rectCode.display.value = '';
            rectComponents.borderRadius.value = '8px 8px 0px 0px';
            btn.text.value = 'Hide code';
        } else {
            rectCode.display.value = 'none';
            btn.text.value = 'Show code';
        }
    }

    protected buildEnd(): void {
        this.elapsedLabel!.text.value = `Rendered in ${Math.round((performance.now() - this.t0))} ms.`;
        if (window.Prism) window.Prism.highlightAll();//hack pointed here: https://github.com/PrismJS/prism/issues/1148
    }

    protected addTest(title: string, callback: any): void {
        this.tests.push({title: title, callback: callback});
    }

    protected runTests(intervalMilliseconds: number = 2000, logToConsole = false, restartAfterEnd = false): void {
        if (!this.label) return console.warn('test Label not found');
        let currentTestIndex = 0;
        this.timer = setInterval(() => {
            currentTestIndex++;
            if (currentTestIndex > (this.tests.length - 1)) {
                if (restartAfterEnd) currentTestIndex = 0;
                else {
                    clearInterval(this.timer);
                    if (logToConsole) console.log('Tests ended');
                    return;
                }
            }
            this.onTimerTimeout(currentTestIndex, logToConsole);
        }, intervalMilliseconds);
    }

    protected onTimerTimeout(testIndex: number, logToConsole: boolean): void {
        let test = this.tests[testIndex];
        if (logToConsole) console.log(`testing ${test.title}...`);
        this.label!.text.value = test.title;
        test.callback();
    }
}
