interface IJSONEnter {
    [contextName: string]: IContextItem[];
}
interface IContextItem {
    Category_name: string;
    Category_standard_name: string;
    Category_color: string;
    Group_name: string;
    Group_standard_name: string;
    Group_color: string;
    [Attributes: string]: string;
}
interface IContext {
    active: boolean;
    name: string;
    categories: ICategory[];
}
interface ICategory {
    active: boolean;
    name: string;
    standardName: string;
    color: string;
    attributes: string[];
    groups: IGroup[];
}
interface IGroup {
    active: boolean;
    name: string;
    standardName: string;
    color: string;
    attributes: string[];
}
export declare function transformJSON(json: IJSONEnter): IContext[];
export {};
