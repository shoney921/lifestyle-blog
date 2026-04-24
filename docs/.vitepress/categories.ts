export interface Category {
  id: string
  label: string
  order: number
  children?: Category[]
}

export const categories: Category[] = [
  {
    id: 'dating',
    label: '소개팅',
    order: 1,
  },
  {
    id: 'places',
    label: '장소 추천',
    order: 2,
    children: [
      { id: 'seoul', label: '서울', order: 1 },
      { id: 'busan', label: '부산', order: 2 },
    ],
  },
  {
    id: 'life',
    label: '라이프',
    order: 3,
  },
]

const categoryMap = new Map<string, Category>()

function buildMap(cats: Category[], prefix = '') {
  for (const cat of cats) {
    const path = prefix ? `${prefix}/${cat.id}` : cat.id
    categoryMap.set(path, cat)
    if (cat.children) {
      buildMap(cat.children, path)
    }
  }
}

buildMap(categories)

export function getCategoryLabel(categoryPath: string): string {
  const cat = categoryMap.get(categoryPath)
  if (cat) return cat.label

  const parts = categoryPath.split('/')
  const labels: string[] = []
  let current = ''
  for (const part of parts) {
    current = current ? `${current}/${part}` : part
    const c = categoryMap.get(current)
    labels.push(c ? c.label : part)
  }
  if (labels.length > 0) return labels.join(' > ')

  return categoryPath
}
