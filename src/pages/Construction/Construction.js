
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

import NavBar from '../../components/NavBar/NavBar';

import './Construction.css';

function Construction() {
  return (
    <div className="Construction">
        <Header>
            <title>Under Construction</title>
            <NavBar />
        </Header>
        <Main>
            <section id='center-section'>
                <h1>Under Construction</h1>
                <p>Sorry, this page is under construction.</p>
            </section>
        </Main>
        <Footer />
    </div>
  );
}

export default Construction;
