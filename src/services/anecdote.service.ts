import anecdoteListe from '@/assets/anecdotes.json'

let previousIndex: number | undefined

const generateRandomIndex = (max: number, exclude?: number): number => {
  let randomIndex = Math.floor(Math.random() * max)

  while (randomIndex === exclude) {
    randomIndex = Math.floor(Math.random() * max)
  }

  return randomIndex
}

export const anecdoteGenerator = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = generateRandomIndex(anecdoteListe.list.length, previousIndex)
      previousIndex = randomIndex
      const anecdote = anecdoteListe.list[randomIndex]
      resolve(anecdote)
    }, 2000)
  })
}
