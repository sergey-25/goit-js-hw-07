const showCategoriesInfo = () => {
  const allCategories = document.querySelectorAll('.item');
  console.log(`В списке ${allCategories.length} категории.`);
  allCategories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const categoryList = category.querySelectorAll('li');
    console.log(categoryTitle.textContent);
    console.log(categoryList.length);
  });
};

showCategoriesInfo();