import Layout from '../components/layout/Layout';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthContextProvider } from '../store/auth-context';
import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp
