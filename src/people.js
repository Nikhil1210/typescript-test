import people from './data/people'
export const allFemaleNames = () => {
    return people
        .filter(x => x.gender === 'f')
        .map(x => x.name)
}
export const maleCoderCount = where => {
    return people
        .filter(x => x.gender === 'm' && x.coder && (where === 'all' ? true : x.region === where))
        .reduce(acc => acc + 1, 0)
}
export const combinedMaleAge = where => {
    return people
        .filter(x => x.gender === 'm' && (where === 'all' ? true : x.region === where))
        .reduce((acc, item) => acc + item.age, 0)
}