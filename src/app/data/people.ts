export interface IPersonModel{
    id:number;
    firstName: string;
    lastName: string;
}

export const PEOPLELIST: IPersonModel[] = [
    { id: 1, firstName: 'Hemant', lastName: 'Singh'},
    { id: 2,firstName: 'Harsha', lastName: 'Singh'},
    { id: 3,firstName: 'Ayana', lastName: 'Singh'},
    { id: 4,firstName: 'Amyra', lastName: 'Singh'}
];