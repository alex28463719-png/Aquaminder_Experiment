// Module ID: 642
// Function ID: 6830
// Name: getScrollableNode
// Dependencies: [119, 534]
// Exports: useScrollToTop

// Module 642 (getScrollableNode)
import getIteratorFn from "getIteratorFn" /* 119 */;

function getScrollableNode(current) {
  if (current.current == null) {
    return null;
  } else {
    if (!("scrollToTop" in current.current)) {
      if (!("scrollTo" in current.current)) {
        if (!("scrollToOffset" in current.current)) {
          if (!("scrollResponderScrollTo" in current.current)) {
            current = current.current;
            if ("getScrollResponder" in current.current) {
              return current.getScrollResponder();
            } else {
              const current2 = current.current;
              return "getNode" in current ? current2.getNode() : current2;
            }
          }
        }
      }
    }
    return current.current;
  }
}
let closure_2 = _interopRequireWildcard(getIteratorFn);

export function useScrollToTop(arg0) {
  const _require = arg0;
  context = route.useContext(_require(context[1]).NavigationContext);
  route = _require(context[1]).useRoute();
  if (context === undefined) {
    const _Error = Error;
    const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
    throw error;
  } else {
    let items = [context, arg0, route.key];
    const effect = route.useEffect(() => {
      const items = [];
      for (let parent = closure_1; parent; parent = parent.getParent()) {
        let tmp = parent;
        if (parent.getState().type === "tab") {
          let arr = items.push(parent);
        }
      }
      if (items.length !== 0) {
        closure_1 = items.map((addListener) => addListener.addListener("tabPress", (arg0) => {
          closure_0 = arg0;
          closure_1 = closure_1.isFocused();
          let hasItem = closure_1_0.includes(closure_1);
          if (!hasItem) {
            hasItem = closure_1.getState().routes[0].key === closure_2_2.key;
          }
          const animationFrame = requestAnimationFrame(() => {
            const obj = closure_4_4(items);
            if (closure_1) {
              if (hasItem) {
                if (obj) {
                  if (!defaultPrevented.defaultPrevented) {
                    if ("scrollToTop" in obj) {
                      obj.scrollToTop();
                    } else if ("scrollTo" in obj) {
                      obj.scrollTo({ y: 0, animated: true });
                    } else if ("scrollToOffset" in obj) {
                      obj.scrollToOffset({ offset: 0, animated: true });
                    } else if ("scrollResponderScrollTo" in obj) {
                      const result = obj.scrollResponderScrollTo({ y: 0, animated: true });
                    }
                  }
                }
              }
            }
          });
        }));
        return () => {
          const item = closure_1.forEach((arg0) => arg0());
        };
      }
    }, items);
  }
}
