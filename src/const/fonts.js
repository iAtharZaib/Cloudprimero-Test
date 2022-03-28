import { Platform } from 'react-native';

const fonts = {
    SANS_BOLD_ITALIC : Platform.OS === "ios" ? 'Product Sans Bold Italic' : 'Product-Sans-Bold-Italic',
    SANS_BOLD : Platform.OS === "ios" ? 'Product Sans Bold' : 'Product-Sans-Bold',
    SANS_ITALIC : Platform.OS === "ios" ? 'Product Sans Italic' : 'Product-Sans-Italic',
    SANS_REGULAR : Platform.OS === "ios" ? 'Product Sans Regular' : 'Product-Sans-Regular',
};

export default fonts;