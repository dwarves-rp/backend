
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Dwarf {
    name: string;
    profession: string;
}

export interface IQuery {
    echo(): string | Promise<string>;
    dwarves(): Dwarf[] | Promise<Dwarf[]>;
}
