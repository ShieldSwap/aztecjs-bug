import { createPXEClient } from "@aztec/aztec.js";

const pxeClient = createPXEClient("http://localhost:8080");
console.log(pxeClient);
