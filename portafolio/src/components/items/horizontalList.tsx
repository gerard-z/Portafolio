import './horizontalList.css';

interface HorizontalListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const HorizontalList = <T,>({ items, renderItem = item => String(item) }: HorizontalListProps<T>) => {
  return <ul className="horizontal-list">{items.map((item, index) => <li key={index}>{renderItem(item)}</li>)}</ul>;
};