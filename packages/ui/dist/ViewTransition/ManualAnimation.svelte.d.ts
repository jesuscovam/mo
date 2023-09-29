/** @typedef {typeof __propDef.props}  ManualAnimationProps */
/** @typedef {typeof __propDef.events}  ManualAnimationEvents */
/** @typedef {typeof __propDef.slots}  ManualAnimationSlots */
export default class ManualAnimation extends SvelteComponent<{
    url?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ManualAnimationProps = typeof __propDef.props;
export type ManualAnimationEvents = typeof __propDef.events;
export type ManualAnimationSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
