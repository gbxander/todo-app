export const getProgress = (todos = []) => {
    const completed = todos.reduce((total, curr) => {
        total = curr.completed ? total + 1 : total
        return total
    }, 0)

    const progress = todos.length !== 0 ? Math.floor((completed / todos.length) * 100) : 0

    return progress
}