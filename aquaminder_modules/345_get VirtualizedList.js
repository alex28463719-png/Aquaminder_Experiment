// Module ID: 345
// Function ID: 4237
// Name: get VirtualizedList
// Dependencies: [346, 347, 359, 356, 354, 351]

// Module 345 (get VirtualizedList)
const require = arg1;
const dependencyMap = arg6;
arg5.default = undefined;
const obj = { keyExtractor: require("elementsThatOverlapOffsets").keyExtractor };
Object.defineProperty(obj, "VirtualizedList", { get: () => require(347) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require(359) /* _callSuper */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedListContextResetter", { get: () => require(356) /* VirtualizedListCellContextProvider */.VirtualizedListContextResetter, set: undefined });
Object.defineProperty(obj, "ViewabilityHelper", { get: () => require(354) /* _isViewable */.default, set: undefined });
Object.defineProperty(obj, "FillRateHelper", { get: () => require(351) /* Info */.default, set: undefined });
arg5.default = obj;
