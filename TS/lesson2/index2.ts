type projectType = {
  id: number
  name: string
  techStack: string[]
  summary: string
}

type PortfolioType = {
  fullName: String
  birthday: string
  address: String
  job: String[]
  company: String
  project: projectType[]
}

const yourPortfolio: PortfolioType = {
  fullName: 'Pham Thi Thu Huong',
  birthday: '14/11/2004',
  address: 'Hung Yen',
  job: ['dev', 'tester'],
  company: 'FPT',
  project: [
    {
      id: 1,
      name: 'E-commerce website',
      techStack: ['HTML', 'CSS', 'JS', 'React', 'NodeJS'],
      summary: 'Build a website to sell products online',
    },
  ],
}
