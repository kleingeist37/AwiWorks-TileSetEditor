import { Params } from "@angular/router";
import { Base } from "./base.class";

export class NavElement extends Base {
    constructor(public route: string, 
                public params?: Params, 
                public icon?: string, 
                public displayname?: string){
        super(displayname);
    }
}