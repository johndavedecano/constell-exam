import { createRouter, useBase } from "h3";

import {
  destroyStaffHandler,
  listStaffHandler,
  showStaffHandler,
  storeStaffHandler,
  updateStaffHandler,
} from "./handlers/staff";

import {
  destroyTeamHandler,
  listTeamHandler,
  showTeamHandler,
  storeTeamHandler,
  updateTeamHandler,
} from "./handlers/team";

const router = createRouter();

router.get("/staff", listStaffHandler);
router.post("/staff", storeStaffHandler);
router.get("/staff/:id", showStaffHandler);
router.put("/staff/:id", updateStaffHandler);
router.delete("/staff/:id", destroyStaffHandler);

router.get("/team", listTeamHandler);
router.post("/team", storeTeamHandler);
router.get("/team/:id", showTeamHandler);
router.put("/team/:id", updateTeamHandler);
router.delete("/team/:id", destroyTeamHandler);

export default useBase("/api", router.handler);
