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
    lists: []
}

interface Action {
    type: string
    payload: Task
}

export const enum ActionType {
    ADD_TODO = "Add TDT",
    ADD_IP = "Add IP",
    ADD_DONE = "Add DONE"
}

export const reducer = (state=initialState, action: Action) => {
    switch(action.type){
        case ActionType.ADD_TODO:
            let Modified_TODO_State: AppState = state;
            Modified_TODO_State.lists[0].tasks.push(action.payload);

            return {...Modified_TODO_State}
        case ActionType.ADD_IP:
            let Modified_IP_State: AppState = state;
            Modified_IP_State.lists[1].tasks.push(action.payload);

            return {...Modified_IP_State}
        case ActionType.ADD_DONE:
            let Modified_DONE_State: AppState = state;
            Modified_DONE_State.lists[1].tasks.push(action.payload);

            return {...Modified_DONE_State}
        default:
            return state
    }
}