import { Header } from '@/widgets/header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen container mx-auto">
            <Header />
            {children}
        </div>
    );
};
