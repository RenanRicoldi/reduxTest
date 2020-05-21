import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import Store from './store/Store'
import CoursesList from './components/coursesList'

function App() {
    return(
        // Todos os componentes dentro do provider podem acessar a Store
        <Provider store={ Store }>
            <View>
                <CoursesList/>
            </View>
        </Provider>
    )
}

export default App