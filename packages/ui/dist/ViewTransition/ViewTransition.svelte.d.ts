/** @typedef {typeof __propDef.props}  ViewTransitionProps */
/** @typedef {typeof __propDef.events}  ViewTransitionEvents */
/** @typedef {typeof __propDef.slots}  ViewTransitionSlots */
export default class ViewTransition extends SvelteComponent<{
    [x: string]: any;
    url?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ViewTransitionProps = typeof __propDef.props;
export type ViewTransitionEvents = typeof __propDef.events;
export type ViewTransitionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        url?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
