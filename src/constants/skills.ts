import { ISkill } from '@types';

import {
  Context_logo,
  Firebase_logo,
  Graphql_logo,
  Hook_logo,
  NodeJS_logo,
  Redux_logo,
  RestAPI_logo,
} from '@assets/images';

export const mySkill: ISkill[] = [
  {
    logo: Hook_logo,
    name: 'React Hook',
    description:
      'Để đồng bộ với việc sự function component thì không thể thiếu được hook.\nNgoài việc sử dụng các hook cơ bản (useState, useEffect, useMemo, useCallBack,...) thì tuỳ vào trường hợp sử dụng sẽ tự custom hook theo nhu cầu.',
  },
  {
    logo: Redux_logo,
    name: 'React Redux',
    description:
      'Làm việc với react thì việc quản lý state của ứng dụng bằng Redux là điều hoàn toàn quen thuộc.',
  },
  {
    logo: Context_logo,
    name: 'React Context',
    description:
      'React Context cũng dùng trong việc quản lý state. Nhưng với ưu điểm là không cần quá nhiều quy trình(không mất nhiều công sức) như Redux nên được tôi hay sử dụng cho việc quản lý state của màn hình, component, hay cả một flow nghiệp vụ của ứng dụng.',
  },
  {
    logo: Firebase_logo,
    name: 'React Native Firebase',
    description:
      'Với những ứng dụng có authentication Facebook, Google, hay xác thực otp tôi hay sử dụng Firebase để đáp ứng nhu cầu sử dụng ứng dụng.',
  },
  {
    logo: Graphql_logo,
    name: 'GraphQL',
    description:
      'GraphQL là một tiêu chuẩn thiết kế API. Tôi hay dùng vì cách thức sử dụng với front-end developer thì dễ dàng kiểm soát các trường dữ liệu khi thực hiện gọi API. Giao tiếp giữa front-end và back-end cũng dễ dàng hơn.',
  },
  {
    logo: RestAPI_logo,
    name: 'Rest API',
    description:
      'Rest API là tiêu chuẩn thiết kế API khá phổ biến hiện nay. Nhưng về cách thức sử dụng với front-end developer khó kiểm soát được các trường dữ liệu khi sử dụng. Cũng như khi sử dụng chuẩn này thì front-end và back-end mất nhiều thời gian để giao tiếp với nhau, hay phối hợp với nhau để hoàn thành task. ',
  },
  {
    logo: NodeJS_logo,
    name: 'NodeJs',
    description:
      'Đã từng sử dụng qua NodeJs và dùng NodeJs kết hợp với MySQL để làm back-end cho đồ án tốt nghiệp năm 2020. ',
  },
];
