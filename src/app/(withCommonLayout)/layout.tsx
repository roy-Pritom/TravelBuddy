import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Header/>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default layout;