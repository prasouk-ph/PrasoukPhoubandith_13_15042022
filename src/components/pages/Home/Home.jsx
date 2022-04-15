import Feature from './Feature/Feature';
import iconChat from '../../../assets/icon-chat.png'
import iconMoney from '../../../assets/icon-money.png'
import iconSecurity from '../../../assets/icon-security.png'
import './Home.css';

function Home() {
  const chatContent = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  const moneyContent = "The more you save with us, the higher your interest rate will be!"
  const securityContent = "We use top of the line encryption to make sure your data and money is always safe."

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature iconSource={iconChat} featureTitle={"You are our #1 priority"} featureContent={chatContent} />
        <Feature iconSource={iconMoney} featureTitle={"More savings means higher rates"} featureContent={moneyContent} />
        <Feature iconSource={iconSecurity} featureTitle={"Security you can trust"} featureContent={securityContent} />
      </section>
    </main>
  );
}

export default Home;