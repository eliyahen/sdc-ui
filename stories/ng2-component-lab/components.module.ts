import {NgModule, Injector} from "@angular/core";
import UiAngularModule from "../../src/angular/index";
import {KeysPipe} from "./utils/pipes/keys.pipe";
import {CommonModule} from "@angular/common";
import {ColorsTable} from "./components/colors-table.component";
import {ButtonModalExample} from "./components/button-modal-example.component";
import {InnerContent} from "./components/inner-content-example.component";

@NgModule({
    declarations: [
        ColorsTable,
        InnerContent,
        ButtonModalExample,
        KeysPipe
    ],
    imports: [
        CommonModule,
        UiAngularModule
    ],
    entryComponents: [InnerContent],
    exports: [
        InnerContent,
        ColorsTable,
        ButtonModalExample
    ],
    providers: [KeysPipe]
})

export class ComponentsModule {

    constructor() {
    }
}
