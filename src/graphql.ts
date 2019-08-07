
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CreateDwarfInput {
    name: string;
    profession: string;
    attributes: DwarfAttributesInput;
    isDead: boolean;
    wounds?: string[];
}

export interface DwarfAttributesInput {
    app: number;
    con: number;
    dex: number;
    int: number;
    pow: number;
    siz: number;
    str: number;
}

export interface Dwarf {
    id: string;
    name: string;
    profession: string;
    attributes?: DwarfAttributes;
    isDead: boolean;
    currentHits: number;
    wounds?: string[];
}

export interface DwarfAttributes {
    app: number;
    con: number;
    dex: number;
    int: number;
    pow: number;
    siz: number;
    str: number;
}

export interface IMutation {
    createDwarf(args: CreateDwarfInput): Dwarf | Promise<Dwarf>;
}

export interface IQuery {
    echo(): string | Promise<string>;
    dwarves(): Dwarf[] | Promise<Dwarf[]>;
}
