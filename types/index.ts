export interface IResponse<T> {
    status: "success" | "error"
    code: string
    data: T
}

export interface IUser {
    id: string
    uuid: string
    username: string
    first_name: string
    last_name: string
    middle_name: string
    role: "admin" | "student"
    pwd: string
    token: string
}

export const branches = ref([
    "Asosiy", "Gelion", "Mikrarayon",
]);

export interface ISet {
    id: string
    name: string
}

export interface IQuestion {
    set: ISet
    question: string
    answer_a: string
    answer_b: string
    answer_c: string
    answer_d: string
    correct_answer: string
    score: number
}

export interface ITest {
    uuid: string
    name: string
    user: IUser
    set: ISet
    passed_score: number
    questions_count: number
    
    status: "not_started" | "passed" | "failed" | "ended" | "started"
    percentage: number
    elapsed: number
    questions?: IQuestion[]
    cases?: any

    attention: number
    two_person: number
    no_person: number
    on_blur: number
    fine: number
}