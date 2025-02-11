import { VerityField } from "verity";
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

  async postNote(form: HTMLFormElement) {
    // can only take notes when logged in
    if (!this.identity) return;

    // fetch note content
    const input: HTMLTextAreaElement = form.querySelector("textarea.verityNoteInput");

    // publish the note as a Veritum
    await this.cockpit.publishVeritum({ fields: VerityField.Payload(input.value) });

    // rebuild the view
    this.contentAreaView.viewDemo();
    this.contentAreaView.show();
  }

}
