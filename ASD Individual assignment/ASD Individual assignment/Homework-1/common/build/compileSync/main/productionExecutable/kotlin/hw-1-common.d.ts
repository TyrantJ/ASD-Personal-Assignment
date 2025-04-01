type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace alias {
    class JsCard {
        constructor(id: number, words: Array<string>);
        get id(): number;
        get words(): Array<string>;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        component1(): number;
        component2(): Array<string>;
        copy(id?: number, words?: Array<string>): alias.JsCard;
        toString(): string;
    }
}
export namespace alias {
    class JsTeam {
        constructor(id: number, points: number, name: string);
        get id(): number;
        get points(): number;
        set points(value: number);
        get name(): string;
        component1(): number;
        component2(): number;
        component3(): string;
        copy(id?: number, points?: number, name?: string): alias.JsTeam;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export as namespace hw_1_common;