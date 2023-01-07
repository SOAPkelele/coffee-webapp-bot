import {
  classnames,
  fontSize,
  fontWeight,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const mainColor = classnames(textColor('text-telegram-text'))
const hintColor = classnames(textColor('text-telegram-hint'))
const linkColor = classnames(textColor('text-telegram-link'))
const buttonColor = classnames(textColor('text-telegram-button_text'))

const headerText = classnames(
  mainColor,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(mainColor, textAlign('text-center'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
