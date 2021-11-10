import { IProject } from '@types';

import { Ever_logo, Ktv_logo, Photobook_logo, Qr_logo } from '@assets/images';

export const myProjects: IProject[] = [
  {
    logo: Qr_logo,
    name: 'QR CODE',
    company: 'Satavan',
    description:
      'Xây dựng với chức năng quét mã QR của các kiện hàng hay những sản phẩm trong kho bãi. Hỗ trợ trong việc quản lý kho bãi.',
  },
  {
    logo: Ever_logo,
    name: 'Ever',
    company: 'Usum Software',
    description:
      'Xây dựng với chức năng đặt sân thể thao, tạo đội thi đấu giao hữu cũng như tham gia các giải đẩu. Chủ sân có thể quản lý những thông tin đặt sân. Admin có thể quản lý những giải đấu đang diễn ra.',
  },
  {
    logo: Ktv_logo,
    name: 'KTV APP',
    company: 'Usum Software',
    description:
      'Xây dựng với chức năng đặt phòng hát theo từng địa điểm, từng khung giờ khác nhau. Trao đổi những thiết bị cũng như tài liệu xây dựng phòng hát. Chủ quán hát cũng có thể quản lý những thông tin phòng, hay những lịch đặt phòng.',
  },
  {
    logo: Photobook_logo,
    name: 'In photobook',
    company: 'Usum Software',
    description:
      'Xây dựng với chức năng đặt hàng về những ấn phẩm về in ấn. Tuỳ chỉnh những ấn phẩm theo nhu cầu riêng của khách hàng.',
  },
];
