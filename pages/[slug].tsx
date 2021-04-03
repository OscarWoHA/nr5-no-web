import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";

type SlugProps = {
    imageUrl?: string;
};

const Slug: NextPage<SlugProps> = ({ imageUrl }) => {
    return (
        <PageWrapper>
            <Head>
                <meta property="og:title" content="nr5" />
                <meta property="og:site_name" content="nr5 image sharing" />
                <meta property="og:url" content="nr5.no" />
                <meta property="og:description" content="" />
                <meta property="og:type" content="object" />
                {imageUrl && <meta property="og:image" content={imageUrl} />}
            </Head>
            <div className="text-center flex-grow flex flex-col justify-center p-5">
                {imageUrl ? (
                    <img src={imageUrl} />
                ) : (
                    <p className="cursor-not-allowed">File not found</p>
                )}
            </div>
        </PageWrapper>
    );
};

export default Slug;

export const getServerSideProps: GetServerSideProps<SlugProps> = async (
    context
) => {
    const { slug } = context.query;

    const cdnImageURI = `https://cdn.nr5.no/${slug}`;

    const response = await fetch(cdnImageURI);

    if (response.ok) {
        return {
            props: {
                imageUrl: cdnImageURI,
            },
        };
    }

    return {
        props: {},
    };
};
