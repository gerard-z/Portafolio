import './verticalCard.css';

interface VerticalCardProps {
    style?: React.CSSProperties
    children: React.ReactNode
    dateFrom?: string
    dateTo?: string
    title?: string
    subtitle?: string
  }

export const VerticalCard = ({ style, children, dateFrom, dateTo, title, subtitle }: VerticalCardProps) => {
    return (
        <div className="vertical-card" style={style}>
            <div className="vertical-card-date">
                <span>{dateFrom}</span>
                <span>-</span>
                <span>{dateTo}</span>
            </div>
            <h3 className="vertical-card-title">{title}</h3>
            <h4 className="vertical-card-subtitle">{subtitle}</h4>
            {children}
        </div>
    )
}