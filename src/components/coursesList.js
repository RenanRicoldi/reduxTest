import React from 'react'
import { FlatList, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

/*
*   useSelector serve para receber os dados da store e monitorar outras consts
*   useDispatch serve para enviar uma action para um reducer
*/

// função que retorna um objeto (action) que será enviado para o reducer, nesse caso ele ira adicionar um curso
function addCourseAction() {
    return {
        type: 'ADD_COURSE',
        payload: {
            id: '3ac68', title: 'NJS'
        }
    }
}

function addDayAction() {
    return {
        type: 'ADD_DAY',
        payload: {
            id: '1', title: 'Segunda'
        }
    }
}

// função que lista todos os cursos contidos na store
function coursesList() {
    const quantity = 2

    //retorna todos os dados da store relacionado aos cursos, no máximo o valor de quantity, sendo que o segundo parametro é para observar se a variavel muda de valor
    const courses = useSelector(state => state.courses.data.slice(0, quantity), [quantity])
    
    //retorna todos os dados da store relacionado aos dias
    const days = useSelector(state => state.days.data)
    
    const dispatch = useDispatch()

    return(
        <>
            <FlatList
                data={courses}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
            <FlatList
                data={days}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
            <Button title="adicionar curso" onPress={() => dispatch(addCourseAction())}/>
            <Button title="adicionar dia" onPress={() => dispatch(addDayAction())}/>
        </>
    )
}

export default coursesList