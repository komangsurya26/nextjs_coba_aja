import Nav from '@components/Nav.jsx'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title:'Komang_s',
    description: 'Komang Surya Sedana'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout
