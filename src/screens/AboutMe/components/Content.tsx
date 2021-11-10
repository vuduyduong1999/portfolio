import React from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, responsive, typos } from '@styles';

interface Props {}
export const Content = ({}: Props) => {
  return (
    <>
      <View
        style={{
          width: '60%',
          height: StyleSheet.hairlineWidth,
          marginLeft: responsive(20),
          backgroundColor: colors.WHITE,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}
      >
        <Text style={styles.txt}>
          {'\tQuê ở Hà Nội nhưng sinh ra và lớn lên tại Lâm Đồng.\n'}
          {
            '\n\tLà một người luôn có trách nhiệm về công việc và nhiệm vụ của mình. '
          }
          {
            'Luôn có ý chí cầu tiến, luôn ý thức được việc chủ động học tập tìm tòi để phát triển tốt hơn.'
          }
        </Text>
        <Text style={styles.txt}>
          {
            '\tBắt đầu học đại học năm 2017 với chuyên nghành Công Nghệ Thông Tin. Vào cuối năm 3 đại học, với mong muốn trở thành lập trình viên di động nên đã tìm tòi các khoá học trên mạng, cũng như tìm các video trên youtube để học về React Native.\n'
          }
          {
            '\n\tNăm 2020, để nâng cao được trình độ chuyên môn bài bản hơn thì đã đăng ký khóa học Lập trình React Native ở trung tâm IMIC.'
          }
        </Text>
        <Text style={styles.txt}>
          {
            '\tSau khi hoàn thành khoá học tại trung tâm với mong muốn áp dụng kiến thức vào thực tiễn. Nên đã tham gia thực tập 2 tháng tại SATAVAN\n'
          }
          {
            '\n\tKết thúc 2 tháng thực tập tại SATAVAN, từ tháng 12 năm 2020 đến nay tôi đang đồng hành tại USUM SOFTWARE.'
          }
        </Text>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsive(20),
    paddingTop: responsive(10),
  },
  txt: {
    ...typos.xs.regular,
    marginBottom: responsive(20),
    textAlign: 'justify',
    color: colors.WHITE,
  },
});
