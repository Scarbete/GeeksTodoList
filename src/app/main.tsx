import {createRoot} from 'react-dom/client'
import {App} from './App.tsx'
import '@/app/styles/global.sass'

const root = document.getElementById('root') ?? document.body

if (!root) {
    throw new Error('root is not defined')
}

createRoot(root).render(
    <App/>
)
