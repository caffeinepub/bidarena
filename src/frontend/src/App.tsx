import { Mail, Phone, MapPin, Trophy, Users, Zap, CheckCircle2 } from 'lucide-react';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { rateOptions } from './content/rates';

function App() {
  const scrollToRates = () => {
    const ratesSection = document.getElementById('rates');
    if (ratesSection) {
      ratesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/88fc1627-70a4-428d-b7dd-d28a3e0a7e91.png" 
              alt="BidArena Logo" 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-2xl md:text-3xl font-display font-bold text-foreground">
              BidArena
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('how-to-use')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('rates')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
            >
              Rates
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Trophy className="w-4 h-4" />
              <span>India's Premier Cricket Auction Platform</span>
            </div>
            
            <h1 className="font-display text-foreground animate-fade-in">
              Build Your Dream Cricket Team
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Experience the thrill of cricket auctions with BidArena. Simple, transparent, and exciting bidding for your league.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in">
              <button
                onClick={scrollToRates}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-sm hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Start Bidding
              </button>
              <button
                onClick={() => scrollToSection('how-to-use')}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Learn How
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Fast & Easy</h3>
                <p className="text-sm text-muted-foreground text-center">Quick setup, instant bidding</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Any Team Size</h3>
                <p className="text-sm text-muted-foreground text-center">From 4 to 16 teams</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Fair Play</h3>
                <p className="text-sm text-muted-foreground text-center">Transparent bidding process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-16 md:py-24 border-b border-border scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Get started with BidArena in four simple steps
              </p>
            </div>

            <div className="grid gap-8 md:gap-6">
              {[
                {
                  step: '1',
                  title: 'Choose Your Package',
                  description: 'Select the right plan based on your number of teams (4, 8, or 16 teams).'
                },
                {
                  step: '2',
                  title: 'Set Up Your League',
                  description: 'Create your league, add team names, and set your budget limits.'
                },
                {
                  step: '3',
                  title: 'Start Bidding',
                  description: 'Invite participants and begin the exciting auction process. Bid on players in real-time!'
                },
                {
                  step: '4',
                  title: 'Build Your Team',
                  description: 'Win your bids, finalize your squad, and get ready to compete!'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-16 md:py-24 bg-muted/30 border-b border-border scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-foreground mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect package for your cricket league
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {rateOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative rounded-2xl p-8 bg-card border-2 transition-all hover:shadow-xl ${
                    option.popular
                      ? 'border-primary shadow-glow-sm'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{option.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{option.teams}</div>
                    <div className="text-sm text-muted-foreground mb-4">Teams Maximum</div>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-foreground text-center py-4">
                      {option.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      option.popular
                        ? 'bg-primary text-primary-foreground hover:shadow-glow-sm'
                        : 'bg-secondary text-secondary-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 border-b border-border scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-foreground mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground">
                Trusted by cricket leagues across India
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-foreground mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help you get started
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <a 
                  href="mailto:contact@bidarena.com" 
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  contact@bidarena.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <a 
                  href="tel:+911234567890" 
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  +91 123 456 7890
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  Mumbai, Maharashtra<br />India
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Ready to start your cricket auction?
              </p>
              <button
                onClick={scrollToRates}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-glow-sm hover:shadow-glow hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/88fc1627-70a4-428d-b7dd-d28a3e0a7e91.png" 
                alt="BidArena Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg font-display font-bold text-foreground">BidArena</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} BidArena. All rights reserved.
            </div>
            
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || 'bidarena')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline focus:outline-none focus:underline"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
