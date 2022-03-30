import {Button, Dialog} from "@lab1/material"
import {DialogProps} from "@lab1/material";


export class MySimpleDialog implements DialogProps{

    title='Simple Dialog';
    //content='Dialog Content';
    content:Button;

    constructor(protected dialog:Dialog, parameters?:any) {
        //super();

        console.log('(MySimleDialog)constructor. Parameters:',parameters);
        //this.content=`<h6> Dialog Content </h6><br> Parameters received: ${parameters.toString()}`
        let btn=new Button({
            text:'Text'
        });
        this.content=btn;
        //this.content='Dialog Content';
        btn.onClick.connect((ev)=>dialog.close('MySimpleDialog result'));

    }
}
