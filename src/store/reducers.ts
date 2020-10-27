interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    tasks: Task[]
}

interface AppState {
    lists: List[]
}

const initialState: AppState = {
    lists: [
        {
            id: '0',
            text: 'TO DO',
            tasks: []
        },
        {
            id: '1',
            text: 'IN PROGRESS',
            tasks: []
        },
        {
            id: '2',
            text: 'DONE',
            tasks: []
        }
    ]
}

interface Action {
    type: string
    payload: Task
}

export enum ActionType {
    ADD_TODO = "TO DO",
    ADD_IP = "IN PROGRESS",
    ADD_DONE = "DONE"
}

export const reducer = (state=initialState, action: Action) => {
    switch(action.type){
        case "TO DO":
            let Modified_TODO_State: AppState = state;
            Modified_TODO_State.lists[0].tasks.push(action.payload);
            return {...state, lists: [...Modified_TODO_State.lists]}
        case "IN PROGRESS":
            let Modified_IP_State: AppState = state;
            Modified_IP_State.lists[1].tasks.push(action.payload);

            return {...state, lists: [...Modified_IP_State.lists]}
        case "DONE":
            let Modified_DONE_State: AppState = state;
            Modified_DONE_State.lists[2].tasks.push(action.payload);

            return {...state, lists: [...Modified_DONE_State.lists]}
        default:
            return state
    }
}

export type StateType = ReturnType<typeof reducer>
export type PayloadType = Task
export type ListType = List
export type DispatchActionType = Action