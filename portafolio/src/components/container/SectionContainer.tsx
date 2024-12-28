import './SectionContainer.css'

interface SectionContainerProps {
  id: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export const SectionContainer = ({ id, style, children }: SectionContainerProps) => {
  return (
    <section className="section-container" id={id} style={style}>
      {children}
    </section>
  )
}
