import react, { useState } from 'react';
import {Text, TouchableOpacity,} from 'react-native';
import { styles } from './CounterStyle';

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
                {(counter == 0) 
                    ? <Text style={styles.textButton}>Clique Aqui</Text> 
                    : (counter === 1)
                        ?<Text style={styles.textButton}>{counter} Clique</Text>
                        : (counter != 0 && counter > 1) &&                  
                            <Text style={styles.textButton}>{counter} Cliques</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.restartButton} onPress={()=>{setCounter(0)}}>
                <Text style={styles.textRestartButton}>Restart</Text>
            </TouchableOpacity>
        </>
    );
    
}
