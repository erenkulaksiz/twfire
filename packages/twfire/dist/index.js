var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { BuildComponent } from "./buildComponent";
var Tw = /** @class */ (function () {
    function Tw() {
        Tw._type = "div";
    }
    Tw.extractTailwindClassesFromProps = function (props) {
        var tailwindClasses = Object.keys(props).filter(function (prop) {
            var includes = prop.includes("-");
            if (!includes)
                return false;
            if (props[prop] === false)
                return false;
            return true;
        });
        return tailwindClasses;
    };
    Tw.removeTailwindClassesFromProps = function (props) {
        var tailwindClasses = Tw.extractTailwindClassesFromProps(props);
        var newProps = __assign({}, props);
        // Tw classes
        tailwindClasses.forEach(function (twClass) {
            if (typeof newProps[twClass] == "undefined")
                return;
            delete newProps[twClass];
        });
        // Deleting falsy values
        Object.keys(newProps).forEach(function (prop) {
            if (newProps[prop] === false) {
                delete newProps[prop];
            }
        });
        if (newProps.tag)
            delete newProps.tag; // remove tag from props
        return [newProps, tailwindClasses];
    };
    Tw.returnComponent = function (Tag, props) {
        var _a = Tw.removeTailwindClassesFromProps(props), newProps = _a[0], tailwindClasses = _a[1];
        var _b = props.className, className = _b === void 0 ? "" : _b;
        var Build = BuildComponent({
            defaultClasses: className,
            extraClasses: tailwindClasses.join(" "),
        });
        return _jsx(Tag, __assign({}, newProps, { className: Build.classes }));
    };
    Tw.e = function (props) {
        if (props.tag)
            Tw._type = props.tag;
        return Tw.returnComponent(Tw._type, props);
    };
    Tw._type = "div";
    return Tw;
}());
export default Tw;
