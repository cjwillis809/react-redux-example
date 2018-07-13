import RadioOption from "./RadioOption";

export default interface FilterCategory {
    id: number,
    name: string,
    options: RadioOption[]
}