import { service } from "@lab1/core";

@service()
export class SampleService{
    value=369

    constructor() {
        //console.log('SampleService constructor')
    }

    doSomething(){
        console.log('doing something...')
    }
}
