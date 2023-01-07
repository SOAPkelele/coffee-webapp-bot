import { classnames, container, margin, padding } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('py-2')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
