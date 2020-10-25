import React, { useReducer, useContext, createContext, useEffect } from "react";

interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}

interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<Action>
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
        ]
}

interface Action {
    type: string
    payload?: string
}


export const reducer = (state = appData, action: Action): AppState => {
    switch(action.type) {
        case "To Do":
            let newToDoState: AppState = state;
            let payloadToDoTask: Task = {id: `${Math.random()}`, text: (action.payload as string)};

            newToDoState.lists[0].tasks.push(payloadToDoTask)
            return newToDoState
        case "In Progress":
            let newInProgressState: AppState = state;
            let payloadInProgressTask: Task = {id: `${Math.random()}`, text: (action.payload as string)};

            newInProgressState.lists[1].tasks.push(payloadInProgressTask)
            return newInProgressState
        case "Done":
            let newState: AppState = state;
            let payloadTask: Task = {id: `${Math.random()}`, text: (action.payload as string)};

            newState.lists[2].tasks.push(payloadTask)
            return newState
        default:
            return state
    }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(reducer, appData);
    return(
        <AppStateContext.Provider value={{state, dispatch}}> 
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext);
}
