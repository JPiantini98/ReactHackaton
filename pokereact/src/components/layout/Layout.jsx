import { Navbar } from '../navbar/Navbar'
import { AppRouter } from '../../router/AppRouter'

export const Layout = ({children}) => {
    return (
        <>
            <div id="App">
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}
