export enum Languages {
  javascript,
  php,
  go,
  java,
  c
}

export interface Person {
  name: string
  favoriteProgrammingLanguages: Languages[]
}
