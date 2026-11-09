import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', delay, direction, className = '', ...rest }) {
  const ref = useReveal(delay, direction)
  return <Tag ref={ref} className={className} {...rest} />
}
