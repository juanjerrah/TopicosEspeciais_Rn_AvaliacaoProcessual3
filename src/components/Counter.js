import react, { useState } from 'react';
import {Text, Pressable, View, TouchableOpacity, StyleSheet,  } from 'react-native';

export default function Counter(){

    const [counter, setCounter] = useState(0);
    return(
        <>
            {(counter === 0) 
                ? <Text style={styles.title}>Clica aí, vai!!!</Text>
                : (counter === 1) 
                    ? <Text style={styles.title}>Você clicou {counter} vez!</Text>
                    : (counter != 0 && counter > 1) 
                        && <Text style={styles.title}>Você clicou {counter} vezes!</Text>
            }
            
            <TouchableOpacity style={styles.button} onPress={()=>{setCounter(counter + 1)}} >
                {counter == 0 
                    ? <Text style={styles.textButton}>Clique Aqui</Text> 
                    : <Text style={styles.textButton}>{counter} Cliques</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.restartButton} onPress={()=>{setCounter(0)}}>
                <Text style={styles.textRestartButton}>Restart</Text>
            </TouchableOpacity>
        </>
    );
    
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#eee',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#582694',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        borderColor: '#aaa',
        borderWidth: 1,
        width: '100%'
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#eee'
    },
    restartButton:{
        backgroundColor: '#582694',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        top: 320,
        borderColor: '#aaa',
        borderWidth: 1,
        width: '100%'
    },
    textRestartButton:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#eee'
    },
});