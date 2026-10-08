import { ChevronDown } from 'lucide-react'

export function FAQ({ items }: { items: readonly (readonly [string, string])[] }) {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
}
