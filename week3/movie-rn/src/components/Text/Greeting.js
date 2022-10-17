import React from 'react';
import { Text } from 'react-native';

import styles from '../../styles/Text/Greeting';

const Greeting = ( props ) => {
    let time = new Date().getHours();
    const greeting = (time >= 12) ? "Good afternoon, " : "Good morning, ";
    return(
        <Text style={styles.greeting}>{ greeting }{ props.user }</Text>
    )
}

export default Greeting;

