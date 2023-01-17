interface BuildComponentTypes {
    name?: string;
    defaultClasses?: string;
    extraClasses?: string;
    conditionalClasses?: Array<{
        [key: string]: string | boolean | number | undefined;
    }>;
    selectedClasses?: Array<string | boolean | undefined>;
}
export declare function BuildComponent({ name, // The component name we are going to built. eg: 'Button' - string
defaultClasses, // Default classes the component will recieve. 'bg-white' - string
extraClasses, // Extra classes that component recieve, e.g. button but blue - string
conditionalClasses, // The classes that component potentially recieve - array[object]
selectedClasses, }: BuildComponentTypes): {
    name: string;
    classes: string;
};
export {};
//# sourceMappingURL=buildComponent.d.ts.map