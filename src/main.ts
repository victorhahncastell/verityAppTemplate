import type { NavItem } from "verity/webui";
import { VerityUI } from "verity/webui";
import { cciFamily } from "verity";

import { DemoController } from "./webui/demoController";

async function webmain() {
  const navItems: NavItem[] = [
    {
      controller: DemoController,
      navAction: DemoController.prototype.navDemo,
      text: "Demo app",
      exclusive: true
    }
  ];
  const ui = await VerityUI.Construct({
    navItems: navItems,
    initialNav: navItems[0],
    lightNode: true,
    family: cciFamily,
    idmucContextString: "Demo app Identity, please replace with something unique",
    idmucApplicationString: "ID/DEMO-REPLACEME!",
    requestTimeout: 2000,
  });
  await ui.node.shutdownPromise;
};

webmain();
