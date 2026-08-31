// Module ID: 546
// Function ID: 6057
// Name: keys1
// Dependencies: [547, 549, 551, 550, 552, 553]

// Module 546 (keys1)
import goBack from "goBack" /* 552 */;

let closure_3 = { CommonActions: true, BaseRouter: true, DrawerActions: true, DrawerRouter: true, StackActions: true, StackRouter: true, TabActions: true, TabRouter: true };

export const BaseRouter = require(549) /* DrawerActions */.DrawerRouter;
export const DrawerActions = require(549) /* DrawerActions */.DrawerRouter;
export const DrawerRouter = require(549) /* DrawerActions */.DrawerRouter;
export const StackActions = require(551) /* StackActions */.StackActions;
export const StackRouter = require(551) /* StackActions */.StackRouter;
export const TabActions = require(550) /* TabActions */.TabActions;
export const TabRouter = require(550) /* TabActions */.TabRouter;
export const CommonActions = _interopRequireWildcard(goBack);
export * from "keys";
