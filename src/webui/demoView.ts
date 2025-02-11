import { FieldType } from "verity";
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

  async viewDemo() {
    // instantiate the template
    this.renderedView = this.newFromTemplate(".verityDemo");

    // fetch its constituents
    const form: HTMLElement = this.renderedView.querySelector(".verityNewNote");
    const noteList: HTMLElement = this.renderedView.querySelector(".verityNoteList");
    // clear demo content
    noteList.replaceChildren();

    // We can only show a users's notes when they're logged in, obviously
    if (this.controller.identity) {  // logged in?
      // fetch notes
      for await (const note of this.controller.identity.getPosts()) {
        // create a DOM element for this note
        const noteContainer: HTMLElement = this.newFromTemplate(".verityNote");
        const noteBody: HTMLElement = noteContainer.querySelector(".verityNoteText");
        // fetch the note's text and write it to the DOM
        const text = note.getFirstField(FieldType.PAYLOAD).valueString;
        noteBody.textContent = text;
        // place the rendered note into the DOM
        noteList.appendChild(noteContainer);
      }
    } else {  // not logged in
      // tell the user to please log in
      this.makeAlert("Please log in to use the Notes app");
      // disable the new note input form
      disableForm(form);
    }
  }
}
