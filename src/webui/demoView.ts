import { VerityView } from "verity/webui";
import { disableForm, loadStyle, loadTemplate } from "verity/webui";

import { DemoController } from "./demoController";

import * as template from './demoTemplate.html';
loadTemplate(template);
import * as style from './demoTemplate.css';
loadStyle(style);

export class DemoView extends VerityView {

  constructor(
      controller: DemoController,
      htmlTemplate: HTMLTemplateElement = document.querySelector("#verityDemoTemplate"),
  ){
    super(controller, htmlTemplate);
  }


  //***
  // View selection methods
  //***

  viewDemo(): void {
    this.renderedView = this.newFromTemplate(".verityDemo");
  }
}
