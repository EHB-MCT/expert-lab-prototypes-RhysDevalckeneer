import React from 'react';
import { Text } from 'react-native';

import styles from '../../styles/Text/Subtitle';

const Subtitle = ( props ) => {
    return(
        <Text style={styles.subtitle}>{ props.subtitle }</Text>
    )
}

export default Subtitle;
