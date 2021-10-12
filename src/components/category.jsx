import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryFetchAll } from "./../store/actions/category-actions";
import { fetchAllItems, fetchItemByCategory } from "./../store/actions/product-actions";
import "./category.scss";

const Category = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  let category = useSelector((state) => state.category.categories);

  const handleItemCategoryClick = (category) => {
    console.log("handle Category", category)
    dispatch(fetchItemByCategory(category));
  };

  useEffect(() => {
    dispatch(categoryFetchAll());
    dispatch(fetchAllItems());
  }, [dispatch]);

  useEffect(() => {
    setCategories(category);
  }, [category]);

  return (
    <div className="category-container">
      {categories.length > 0 && (
        <>
          <div
            className="category-listing"
            onClick={() => dispatch(fetchAllItems())}
          >
            All
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-listing"
              onClick={() => handleItemCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Category;
