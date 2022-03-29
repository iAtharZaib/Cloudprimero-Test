import {Image, Text, View, SafeAreaView,TouchableOpacity,Dimensions} from 'react-native';
import React, {useEffect,useState} from 'react';
import styles from './styles';
import Header from '../../components/Header';
import Form from '../../utils/form-data.json';
import InputWithLabel from '../../components/InputWithLabel';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Button from '../../components/Button';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import { setUserDetails } from '../../store/actions';
import { COLORS } from '../../const/colors';
import fonts from '../../const/fonts';
const {width, height} = Dimensions.get('window'); 

export default function index(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formstate, setformstate] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const map = new Map();
    Form.map(item => {
      map.set(item.id, {
        key: item.key,
        Value: '',
        type: item.type,
        label: item.label,
        required: item.required,
      });
    });

    const obj = Object.fromEntries(map);
    setformstate(obj);
  }, []);

  const showDatePicker = item => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date, item) => {
    UpdateState(new Date(date).toDateString(), item);
    hideDatePicker();
  };

  function UpdateState(text, item) {
    setformstate(old => {
      old[item.id].Value = text;
      return {...old};
    });
  }

  const PickImage = item => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, async response => {
      console.log(response.assets[0].uri);
      UpdateState(response.assets[0].uri, item);
    });
  };

  const Submit = () => {
    function isEmpty(str) {
      return !str || str?.length === 0;
    }

    var emptyfields = [];
    Object.entries(formstate).map(key => {
      var field = key[1];
      if (field.required) {
        if (isEmpty(field.Value)) {
          emptyfields.push(field.key);
        }
      }
    });

    if (emptyfields?.length != 0) {
      let emptystring = emptyfields.join();
      
      Snackbar.show({
        text: 'Please fill these fields : '+ emptystring.split(" "),
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      dispatch(setUserDetails(formstate));
      props.navigation.replace('Home')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <Header headingText="Personal Info" />
      {formstate &&
        Form.map(item => {
          return item.type == 'text' ? (
            <InputWithLabel
              Label={item.label}
              placeholder={item.placeholder}
              onChange={text => UpdateState(text, item)}
            />
          ) : item.type == 'radio' ? (
            <>
              <Text style={styles.Label}>{item.label}</Text>
              <View style={styles.RadioRow}>
                {item?.options.map(option => {
                  return (
                    <View style={styles.RadioOption}>
                      <TouchableOpacity
                        style={[
                          styles.Radio,
                          {
                            backgroundColor:
                              formstate[item.id]?.Value == option.label
                                ? COLORS.PRIMARY
                                : undefined,
                          },
                        ]}
                        onPress={() => UpdateState(option.label, item)}
                      />
                      <Text style={styles.labelText}>{option.label}</Text>
                    </View>
                  );
                })}
              </View>
            </>
          ) : item.type == 'date' ? (
            <>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={data => handleConfirm(data, item)}
                onCancel={hideDatePicker}
              />
              <Text style={styles.Label}>{item.label}</Text>
              <TouchableOpacity
                onPress={() => showDatePicker(item)}
                style={[styles.textInputCont]}>
                <Text
                  style={{
                    color: COLORS.BLACK,
                    fontSize: 15,
                  }}>
                  {formstate[item.id].Value?formstate[item.id].Value:  item.placeholder}
                </Text>
              </TouchableOpacity>
            </>
          ) : item.type == 'image' ? (
            formstate[item.id].Value ? (
              <Image
                source={{uri: formstate[item.id].Value}}
                resizeMode="contain"
                style={styles.Img}
              />
            ) : (
              <View style={styles.imageView}>
              <TouchableOpacity
                style={styles.AvatarCont}
                onPress={() => PickImage(item)}>
                <Icon name="user-circle" size={180} color="grey" />
              </TouchableOpacity>
              </View>
            )
          ) : null;
        })}
      <Button label="Submit" onPress={() => Submit()} />
    </SafeAreaView>
  );
}
