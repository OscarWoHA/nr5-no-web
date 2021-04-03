import PageWrapper from "../components/PageWrapper";

const Home: React.FC = () => {
    return (
        <PageWrapper>
            <div className="text-center flex-grow flex flex-col justify-center">
                <h1 className="text-4xl mb-3">nr5.no</h1>
                <p>Image sharing service</p>
            </div>
        </PageWrapper>
    );
};

export default Home;
