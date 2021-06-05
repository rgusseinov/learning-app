const filterNames = [
  `All`, `In progress`, `Completed`, `Archived`, 
]
export const generateFilters = () => {
  return filterNames.map(item => {
    return {
      name: item,
      count: Math.floor(Math.random() * 5)
    }
})
}