import { toasterOptions } from '@/shared/config/toaster-options';
import { Header } from '@/widgets/header';
import { Toaster } from 'react-hot-toast';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen container mx-auto">
            <Header />
            {children}
            <Toaster position='bottom-right' toastOptions={toasterOptions} />
        </div>
    );
};
