import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

const Presentation = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (deckRef.current && !initialized.current) {
      initialized.current = true;
      
      const deck = new Reveal(deckRef.current, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        embedded: false,
      });
      
      deck.initialize();
    }
  }, []);

  return (
    <div className="reveal" ref={deckRef} style={{ height: '100vh', width: '100vw' }}>
      <div className="slides">
        {/* Title Slide */}
        <section data-background="hsl(222, 47%, 6%)">
          <div className="animate-float">
            <div className="mb-8">
              <span className="tech-badge mb-4 inline-block">🧠 AI-Powered</span>
            </div>
            <h1 className="mb-6" style={{ fontSize: '4.5rem' }}>GenUI</h1>
            <p className="text-2xl mb-8" style={{ color: 'hsl(215, 20%, 75%)' }}>
              The Self-Evolving AI Storefront
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <span className="tech-badge">React</span>
              <span className="tech-badge">LangGraph</span>
              <span className="tech-badge">FastAPI</span>
              <span className="tech-badge">Redis</span>
            </div>
          </div>
        </section>

        {/* Problem Slide */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-12">The Problem</h2>
          <div className="slide-content">
            <div className="glass-card p-8 mb-8 glow-secondary">
              <p className="text-2xl font-medium" style={{ color: 'hsl(280, 100%, 75%)' }}>
                "Every shopper—decisive or hesitant, minimalist or visually exploratory—gets the <span className="gradient-text">same static UI</span>."
              </p>
            </div>
            <ul className="custom-list text-xl">
              <li>E-commerce optimized <em>what</em> to show, not <em>how</em> to show it</li>
              <li>Interfaces don't adapt to cognitive preferences</li>
              <li>One-size-fits-all fails diverse user behaviors</li>
            </ul>
          </div>
        </section>

        {/* Solution Slide */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-12">Our Solution</h2>
          <div className="slide-content">
            <p className="text-2xl mb-10" style={{ color: 'hsl(215, 20%, 85%)' }}>
              What if the <span className="gradient-text font-bold">UI itself could learn</span> in real time?
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-card">
                <h3 className="text-xl mb-3">👁️ Observe</h3>
                <p className="text-base">Track mouse, scroll, hover, touch patterns passively</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl mb-3">🧠 Infer</h3>
                <p className="text-base">Classify cognitive states: hesitant vs decisive</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl mb-3">🎨 Adapt</h3>
                <p className="text-base">Dynamically update layout, density, and styles</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl mb-3">📈 Learn</h3>
                <p className="text-base">Persist preferences, improve over time</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-12">How It Works</h2>
          <div className="slide-content">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="glass-card p-5 text-center" style={{ minWidth: '140px' }}>
                <div className="text-3xl mb-2">📡</div>
                <h3 className="text-base mb-1">Telemetry</h3>
                <p className="text-xs" style={{ color: 'hsl(215, 20%, 65%)' }}>Events</p>
              </div>
              <div className="gradient-text text-2xl">→</div>
              <div className="glass-card p-5 text-center" style={{ minWidth: '140px' }}>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-base mb-1">Motor State</h3>
                <p className="text-xs" style={{ color: 'hsl(215, 20%, 65%)' }}>Velocity</p>
              </div>
              <div className="gradient-text text-2xl">→</div>
              <div className="glass-card p-5 text-center" style={{ minWidth: '140px' }}>
                <div className="text-3xl mb-2">🤖</div>
                <h3 className="text-base mb-1">LLM Agents</h3>
                <p className="text-xs" style={{ color: 'hsl(215, 20%, 65%)' }}>Analysis</p>
              </div>
              <div className="gradient-text text-2xl">→</div>
              <div className="glass-card p-5 text-center glow-primary" style={{ minWidth: '140px' }}>
                <div className="text-3xl mb-2">✨</div>
                <h3 className="text-base mb-1">Adaptive UI</h3>
                <p className="text-xs" style={{ color: 'hsl(215, 20%, 65%)' }}>Live updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Architecture */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-10">Multi-Agent Architecture</h2>
          <div className="slide-content">
            <div className="grid grid-cols-3 gap-6">
              <div className="gradient-border p-5">
                <h3 className="text-lg mb-3 mono">Motor State Stream</h3>
                <p className="text-xs mb-3" style={{ color: 'hsl(215, 20%, 65%)' }}>Python • $0 cost</p>
                <ul className="text-sm space-y-1" style={{ color: 'hsl(215, 20%, 75%)' }}>
                  <li>• Real-time velocity</li>
                  <li>• Cognitive classification</li>
                  <li>• Mathematical modeling</li>
                </ul>
              </div>
              <div className="gradient-border p-5">
                <h3 className="text-lg mb-3 mono">Context Analyst</h3>
                <p className="text-xs mb-3" style={{ color: 'hsl(215, 20%, 65%)' }}>LLM • Batched</p>
                <ul className="text-sm space-y-1" style={{ color: 'hsl(215, 20%, 75%)' }}>
                  <li>• Behavior-UI correlation</li>
                  <li>• Preference inference</li>
                  <li>• Pattern recognition</li>
                </ul>
              </div>
              <div className="gradient-border p-5">
                <h3 className="text-lg mb-3 mono">Variance Auditor</h3>
                <p className="text-xs mb-3" style={{ color: 'hsl(215, 20%, 65%)' }}>LLM • Batched</p>
                <ul className="text-sm space-y-1" style={{ color: 'hsl(215, 20%, 75%)' }}>
                  <li>• Evaluates experiments</li>
                  <li>• Validates hypotheses</li>
                  <li>• Controls exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Slide */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-10">Results</h2>
          <div className="slide-content">
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="glass-card metric glow-primary">
                <span className="metric-value">~50ms</span>
                <span className="metric-label">End-to-end latency</span>
              </div>
              <div className="glass-card metric">
                <span className="metric-value">&lt;100ms</span>
                <span className="metric-label">Layout generation</span>
              </div>
              <div className="glass-card metric glow-secondary">
                <span className="metric-value">$0</span>
                <span className="metric-label">High-freq inference</span>
              </div>
            </div>
            <ul className="custom-list">
              <li>Schema-driven UI for instant re-hydration</li>
              <li>Real-time preference learning—no prompts needed</li>
              <li>Balanced exploration without UI chaos</li>
            </ul>
          </div>
        </section>

        {/* Key Insight */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-10">What We Learned</h2>
          <div className="slide-content">
            <div className="glass-card p-8 glow-primary animate-pulse-glow mb-8">
              <p className="text-xl" style={{ color: 'hsl(210, 40%, 98%)' }}>
                "Behavioral signals are <span className="gradient-text font-bold">incredibly information-dense</span>—tiny interactions reveal strong preferences."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-card">
                <p className="text-base">🔢 Math models replace LLMs for real-time tasks</p>
              </div>
              <div className="feature-card">
                <p className="text-base">⏸️ Knowing when <em>not</em> to run a model matters</p>
              </div>
              <div className="feature-card">
                <p className="text-base">🎯 Subtle, continuous personalization wins</p>
              </div>
              <div className="feature-card">
                <p className="text-base">🔄 Exploration must be principled, not random</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section data-background="hsl(222, 47%, 6%)">
          <h2 className="mb-10">What's Next</h2>
          <div className="slide-content">
            <ul className="custom-list text-xl space-y-4">
              <li>Vector-based semantic component selection</li>
              <li>Agents generating new React/CSS on the fly</li>
              <li>Merchant controls for brand identity constraints</li>
              <li>Shopify + Backboard.io integration</li>
              <li>Production-grade WebSocket infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Closing Slide */}
        <section data-background="hsl(222, 47%, 6%)">
          <div className="animate-float">
            <h1 className="mb-6" style={{ fontSize: '3.5rem' }}>GenUI</h1>
            <p className="text-2xl mb-10 gradient-text font-semibold">
              Storefronts that don't just sell—but learn.
            </p>
            <div className="glass-card p-6 inline-block">
              <p className="text-lg mb-4" style={{ color: 'hsl(215, 20%, 75%)' }}>
                Built with ❤️ using
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <span className="tech-badge">React</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">LangGraph</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Redis</span>
                <span className="tech-badge">MongoDB</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Presentation;