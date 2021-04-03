import Head from "next/head";

const PageWrapper: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-green-600 text-white relative">
            <Head>
                <title>nr5.no</title>
            </Head>
            {children}
            <footer className="bg-green-700 p-5 md:text-right sticky bottom-0">
                <p>
                    Copyright &copy; Wold Halland Media{" "}
                    {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
};

export default PageWrapper;
