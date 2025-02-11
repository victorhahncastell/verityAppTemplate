import { ControllerContext, VerityController } from "verity/webui";

import { DemoView } from "./demoView";


export class DemoController extends VerityController {
  declare public contentAreaView: DemoView;

  constructor(
    readonly parent: ControllerContext,
  ){
    super(parent);
  }

  //***
  // Navigation methods
  //***

  // Navigate to the demo view
  navDemo(): Promise<void> {
    this.contentAreaView = new DemoView(this);
    this.contentAreaView.viewDemo();
    return Promise.resolve();
  }

  //***
  // Local methods
  //***

  // Add more methods as you please :)
}
