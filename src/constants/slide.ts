import { colors } from '@styles';
import { ISlide } from '@types';

import {
  DuongVu,
  Experience,
  Satavan,
  Study,
  University,
  Usum,
} from '@assets/images';

export const slides: ISlide[] = [
  {
    color: colors.DARK,
    title: 'Duy Duong',
    description:
      'Make by Duong vu\n Liên hệ: duongvu0953@gmail.com\n 21 - 11 - 1999',
    picture: DuongVu,
  },
  {
    color: colors.SECONDARY,
    title: 'Học vấn',
    description:
      'Chuyên nghành cơ bản tại trường\n Tham gia khoá học React Native tại trung tâm',
    picture: Study,
  },
  {
    color: colors.PRIMARY,
    title: 'HUFI',
    description:
      'Tốt nghiệp chuyên ngành\n Công nghệ phần mềm\n Trường ĐH Công nghiệp Thực Phẩm TP.HCM',
    picture: University,
  },

  {
    color: colors.GREY,
    title: 'Kinh nghiệm',
    description: 'Với kinh nghiệm hơn 1 năm về\n React Native',
    picture: Experience,
  },
  {
    color: colors.SUCCESS,
    title: 'SATAVAN',
    description:
      'Tham gia thực tập tại SATAVAN\n từ tháng 9 đến tháng 12 năm 2020',
    picture: Satavan,
  },
  {
    color: colors.DARK,
    title: 'USUM SOFTWARE',
    description: 'Đồng hành cùng công ty từ tháng 12 năm 2020 đến nay',
    picture: Usum,
  },
];
