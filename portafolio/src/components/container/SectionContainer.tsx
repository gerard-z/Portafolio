import './SectionContainer.css'

interface SectionContainerProps {
  id: string
  height?: string
  children: React.ReactNode
}

export const SectionContainer = ({ id, height, children }: SectionContainerProps) => {
  return (
    <section className="section-container" id={id} style={{ height: height }}>
      {children}
    </section>
  )
}
