import type { ComponentType } from "react";
interface TwTypes {
    tag: ComponentType | keyof JSX.IntrinsicElements;
}
declare class Tw {
    static _type: TwTypes["tag"];
    constructor();
    private static extractTailwindClassesFromProps;
    private static removeTailwindClassesFromProps;
    private static returnComponent;
    static e(props: any): JSX.Element;
}
export default Tw;
//# sourceMappingURL=index.d.ts.map