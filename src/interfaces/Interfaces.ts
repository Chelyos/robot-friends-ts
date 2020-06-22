export interface IRobot {
    address : object,
    company : object,
    name : string,
    email : string,
    id : number,
    phone : string,
    username : string,
    website : string
}

export interface IAction {
    type : any,
    link ?: string,
    payload ?: any
}


