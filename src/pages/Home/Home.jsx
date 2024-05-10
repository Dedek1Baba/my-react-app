import Footer from "../../components/Footer/Footer";
import Article from "../../components/Article/Article";

export default function Home() {


    return (
        <>
        <h1>Home page</h1>
        <p>Tady je doma</p>
        <Article heading="Po mesici hodina WAP" desc="Hodina zase v patek" content="Lorem" author="Já" />
        <Article heading="Po tydnu hodina WAP" desc="Hodina zase v pondeli" content="Lerem" author="Ty" />
        <Footer />
        </>
    );
}