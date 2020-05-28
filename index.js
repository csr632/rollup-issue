import {Menu} from "test-package-default-export";
console.log("test-package-default-export", Menu.Item);

import { Menu as NamedExport } from "test-package-named-export";
console.log("test-package-named-export", NamedExport.Item);
