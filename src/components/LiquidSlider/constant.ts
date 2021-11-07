import { ISlide } from './type';

export const MIN_LEDGE = 25;
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const c = 0.551915024494;
export const slides: ISlide[] = [
  {
    color: '#d1500a',
    title: 'Duy Duong',
    description:
      'Make by Duong vu\n Liên hệ: duongvu0953@gmail.com\n 21 - 11 - 1999',
    picture: require('./assets/duongvu.jpeg'),
  },
  {
    color: '#5F3526',
    title: 'Học vấn',
    description:
      'Chuyên nghành cơ bản tại trường\n Tham gia khoá học React Native tại trung tâm',
    picture: require('./assets/study.jpeg'),
  },
  {
    color: '#0D53A1',
    title: 'HUFI',
    description:
      'Tốt nghiệp chuyên ngành\n Công nghệ phần mềm\n Trường ĐH Công nghiệp Thực Phẩm TP.HCM',
    picture: require('./assets/university.png'),
  },

  {
    color: '#D4A27A',
    title: 'Kinh nghiệm',
    description: 'Với kinh nghiệm hơn 1 năm về\n React Native',
    picture: require('./assets/experience.png'),
  },
  {
    color: '#69C743',
    title: 'SATAVAN',
    description:
      'Tham gia thực tập tại SATAVAN\n từ tháng 9 đến tháng 12 năm 2020',
    picture: require('./assets/satavan.png'),
  },
  {
    color: '#0243AC',
    title: 'USUM SOFTWARE',
    description: 'Đồng hành cùng công ty từ tháng 12 năm 2020 đến nay',
    picture: require('./assets/usum.png'),
  },
];
