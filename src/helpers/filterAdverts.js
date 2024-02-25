export const filterAdverts = (adverts, filters) => {
  let data = [...adverts];
  const { brand, price, mileageFrom, mileageTo } = filters;

  if (brand?.value) {
    data = data.filter(({ make }) => make.toLowerCase() === brand.value.toLowerCase());
  }

  if (price?.value) {
    data = data.filter(({ rentalPrice }) => parseFloat(rentalPrice.substring(1)) <= price.value);
  }

  if (mileageTo) {
    data = data.filter(({ mileage }) => mileage <= parseFloat(mileageTo.replace(/,/g, '')));
  }

  if (mileageFrom) {
    data = data.filter(({ mileage }) => mileage >= parseFloat(mileageFrom.replace(/,/g, '')));
  }

  return data;
};
