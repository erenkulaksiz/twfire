import { BuildComponent } from "./buildComponent";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";

interface TwTypes {
  tag: ComponentType | keyof JSX.IntrinsicElements;
}

class Tw {
  static _type: TwTypes["tag"] = "div";

  private static extractTailwindClassesFromProps(props: any) {
    const tailwindClasses = Object.keys(props).filter((prop) => {
      const includes = prop.includes("-");
      if (!includes) return false;
      if (props[prop] === false) return false;
      return true;
    });
    return tailwindClasses;
  }

  private static removeTailwindClassesFromProps(props: any) {
    const tailwindClasses = Tw.extractTailwindClassesFromProps(props);
    const newProps = { ...props };

    // Tw classes
    tailwindClasses.forEach((twClass) => {
      if (typeof newProps[twClass] == "undefined") return;
      delete newProps[twClass];
    });

    // Deleting falsy values
    Object.keys(newProps).forEach((prop: any) => {
      if (newProps[prop] === false) {
        delete newProps[prop];
      }
    });

    if (newProps.tag) delete newProps.tag; // remove tag from props

    return [newProps, tailwindClasses];
  }

  private static returnComponent(Tag: TwTypes["tag"], props: any): JSX.Element {
    const [newProps, tailwindClasses] =
      Tw.removeTailwindClassesFromProps(props);
    const { className = "" } = props;
    const Build = BuildComponent({
      defaultClasses: className,
      extraClasses: tailwindClasses.join(" "),
    });
    return <Tag {...newProps} className={Build.classes} />;
  }

  static e(props: any) {
    if (props.tag) Tw._type = props.tag;
    return Tw.returnComponent(Tw._type, props);
  }
}

export default Tw;
