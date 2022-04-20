import Feature from './Feature/Feature';
import iconChat from '../../../assets/icon-chat.png'
import iconMoney from '../../../assets/icon-money.png'
import iconSecurity from '../../../assets/icon-security.png'
import './Home.css';

function Home() {
  const features = [
    {
      id: 1,
      title: "You are our #1 priority",
      content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      icon: iconChat
    },
    {
      id: 2,
      title: "More savings means higher rates",
      content: "The more you save with us, the higher your interest rate will be!",
      icon: iconMoney
    },
    {
      id: 3,
      title: "Security you can trust",
      content: "We use top of the line encryption to make sure your data and money is always safe.",
      icon: iconSecurity
    }
  ]

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
        
        <div className="features-container">
        {features.map((feature) => 
          <Feature key={`feature-${feature.id}`} iconSource={feature.icon} featureTitle={feature.title} featureContent={feature.content} />
        )}
        </div>
      </section>
    </main>
  );
}

export default Home;