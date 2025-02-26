export interface IHabit {
    id: number,
    title: string,
    goal: number,
    tryCount: number,
    best: number,
    icon: string,
    achievements: [],
    user: IUser,
    global: boolean
}

export interface IUser {
    id: number,
    login: string,
    password: string,
    name: string,
    surname: string
}