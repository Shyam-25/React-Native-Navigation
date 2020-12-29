import React, { Component } from 'react'
import { StyleSheet, View, Alert ,TouchableOpacity,Text,ToastAndroid,CameraRoll} from 'react-native'
import { RNCamera } from 'react-native-camera'
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.inputcontainer}
          ref={ref => {
            this.camera = ref
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.picture}>
            <Text style={{ fontSize: 15, fontWeight:'bold' }}> Capture Picture  </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options).then(data => {
      ToastAndroid.show(data.uri, ToastAndroid.SHORT);
      CameraRoll.saveToCameraRoll(data.uri);
      console.log(data);
   
  })
}
};
saveImage = async filePath => {
  try {
    const ImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
    const newFilepath = `${dirPicutures}/${ImageName}`;
    const imageMoved = await moveAttachment(filePath, newFilepath);
    console.log('image moved', imageMoved);
  } catch (error) {
    console.log('Catch'+error);
  }
};

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink'
  },
  inputcontainer: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  picture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 1,
  },
})

export default App