import React from "react";

const DropDown = ({
  setSelectedCategories,
  selectedCategories,
}) => {
  const allProductsData = [
    "men's clothing",
    "electronics",
    "jewelery",
    "women's clothing",
  ];
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    let updatedChecked;
    if (event.target.checked) {
      updatedChecked = [...selectedCategories, value];
    } else {
      updatedChecked = selectedCategories.filter((item) => item !== value);
    }
    setSelectedCategories(updatedChecked);
  };

  return (
    <div>
      {allProductsData.map((category) => (
        <span key={category}>
          <label>
            {category} :{" "}
            <input
              type="checkbox"
              name="myCheckbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleChange}
            />
          </label>
        </span>
      ))}
    </div>
  );
};

export default DropDown;
