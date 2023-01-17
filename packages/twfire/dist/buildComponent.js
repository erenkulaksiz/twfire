export function BuildComponent(_a) {
    var _b = _a.name, name = _b === void 0 ? "Default Component" : _b, // The component name we are going to built. eg: 'Button' - string
    defaultClasses = _a.defaultClasses, // Default classes the component will recieve. 'bg-white' - string
    extraClasses = _a.extraClasses, // Extra classes that component recieve, e.g. button but blue - string
    conditionalClasses = _a.conditionalClasses, // The classes that component potentially recieve - array[object]
    selectedClasses = _a.selectedClasses;
    var allClasses = ""; // set initial data. eg: 'bg-white'
    if (defaultClasses)
        allClasses += defaultClasses;
    if (extraClasses)
        allClasses += defaultClasses ? " ".concat(extraClasses) : extraClasses; // add extra classes to the default classes
    if (conditionalClasses) {
        // if we have conditional classes, we will have selected classes too.
        if (selectedClasses) {
            selectedClasses.forEach(function (selectedClass, index) {
                if (typeof conditionalClasses[index] != "undefined") {
                    // if the selected class is in the conditional classes
                    var selectedObj = conditionalClasses[index];
                    if (typeof selectedClass != "undefined") {
                        if (selectedObj[selectedClass.toString()]) {
                            // if the selected class has a value, add it to the all classes
                            allClasses += " ".concat(conditionalClasses[index][selectedClass.toString()]);
                        }
                        else {
                            if (conditionalClasses[index]["default"]) {
                                // if the selected class has no value, add the default value to the all classes
                                allClasses += " ".concat(conditionalClasses[index]["default"]);
                            }
                        }
                    }
                }
            });
        }
    }
    return {
        name: name,
        classes: allClasses,
    };
}
