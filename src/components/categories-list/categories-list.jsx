import './categories-list.styles.scss';
import CategoryItem from '../category-item/category-item';

export default function CategoriesList({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
