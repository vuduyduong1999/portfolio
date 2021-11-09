export const formatAddressToString = (
  province?: string,
  district?: string,
  ward?: string,
  street?: string,
) => {
  const initArr = [street, ward, district, province];
  const filterArr = initArr.filter((i) => i !== undefined && i !== null);
  let addressString = '';
  if (filterArr.length < 1) {
    return 'Chưa cập nhật địa chỉ !!!';
  }
  addressString = filterArr.join(', ');
  return addressString;
};
export const formatAddressCompleteString = (
  province?: string,
  district?: string,
  ward?: string,
) => {
  const initArr = [ward, district, province];
  const filterArr = initArr.filter((i) => i !== undefined);
  let addressString = '';
  if (filterArr.length < 1) {
    return '';
  }
  addressString = filterArr.join(', ');
  return addressString;
};
