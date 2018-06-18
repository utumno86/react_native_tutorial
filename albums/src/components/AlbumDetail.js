import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;
  return(
    <Card>
      <CardSection>
        <View>
          <Image source={{uri: thumbnail_image}} style={thumbnailStyle}/>
        </View>
        <View style={headerContentStyle}>
        < Text > { title } </Text>
        <Text>{ artist }</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
};

export default AlbumDetail;
