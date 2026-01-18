import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

const Presentation = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      revealRef.current = new Reveal(deckRef.current, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        width: 1920,
        height: 1080,
      });
      revealRef.current.initialize();
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {/* Title Slide */}
        <section className="slide-title">
          <div className="animate-float">
            <div className="mb-8">
              <span className="tech-badge mb-4 inline-block">🧠 AI-Powered</span>
            </div>
            <h1 className="mb-6" style={{ fontSize: '5rem' }}>GenUI</h1>
            <p className="text-2xl mb-8" style={{ color: 'hsl(215 20% 75%)' }}>
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
        <section>
          <h2 className="mb-12">The Problem</h2>
          <div className="slide-content">
            <div className="glass-card p-8 mb-8 glow-secondary">
              <p className="text-3xl font-medium" style={{ color: 'hsl(280 100% 75%)' }}>
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
        <section>
          <h2 className="mb-12">Our Solution</h2>
          <div className="slide-content">
            <p className="text-2xl mb-10" style={{ color: 'hsl(215 20% 85%)' }}>
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
        <section>
          <h2 className="mb-12">How It Works</h2>
          <div className="slide-content">
            <div className="flex items-center justify-between gap-4">
              <div className="glass-card p-6 text-center flex-1">
                <div className="text-4xl mb-3">📡</div>
                <h3 className="text-lg mb-2">Telemetry</h3>
                <p className="text-sm" style={{ color: 'hsl(215 20% 65%)' }}>Mouse, scroll, touch events</p>
              </div>
              <div className="gradient-text text-3xl">→</div>
              <div className="glass-card p-6 text-center flex-1">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg mb-2">Motor State</h3>
                <p className="text-sm" style={{ color: 'hsl(215 20% 65%)' }}>Velocity, acceleration, jerk</p>
              </div>
              <div className="gradient-text text-3xl">→</div>
              <div className="glass-card p-6 text-center flex-1">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="text-lg mb-2">LLM Agents</h3>
                <p className="text-sm" style={{ color: 'hsl(215 20% 65%)' }}>Context + Variance analysis</p>
              </div>
              <div className="gradient-text text-3xl">→</div>
              <div className="glass-card p-6 text-center flex-1 glow-primary">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg mb-2">Adaptive UI</h3>
                <p className="text-sm" style={{ color: 'hsl(215 20% 65%)' }}>Live layout updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Architecture */}
        <section>
          <h2 className="mb-12">Multi-Agent Architecture</h2>
          <div className="slide-content">
            <div className="grid grid-cols-3 gap-8">
              <div className="gradient-border p-6">
                <h3 className="text-xl mb-4 mono">Motor State Stream</h3>
                <p className="text-sm mb-3" style={{ color: 'hsl(215 20% 65%)' }}>Python • $0 cost</p>
                <ul className="text-sm space-y-2" style={{ color: 'hsl(215 20% 75%)' }}>
                  <li>• Real-time velocity/acceleration</li>
                  <li>• Cognitive state classification</li>
                  <li>• Pure mathematical modeling</li>
                </ul>
              </div>
              <div className="gradient-border p-6">
                <h3 className="text-xl mb-4 mono">Context Analyst</h3>
                <p className="text-sm mb-3" style={{ color: 'hsl(215 20% 65%)' }}>LLM • Batched</p>
                <ul className="text-sm space-y-2" style={{ color: 'hsl(215 20% 75%)' }}>
                  <li>• Behavior-UI correlation</li>
                  <li>• Preference inference</li>
                  <li>• Pattern recognition</li>
                </ul>
              </div>
              <div className="gradient-border p-6">
                <h3 className="text-xl mb-4 mono">Variance Auditor</h3>
                <p className="text-sm mb-3" style={{ color: 'hsl(215 20% 65%)' }}>LLM • Batched</p>
                <ul className="text-sm space-y-2" style={{ color: 'hsl(215 20% 75%)' }}>
                  <li>• Evaluates experiments</li>
                  <li>• Validates hypotheses</li>
                  <li>• Controls exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Slide */}
        <section>
          <h2 className="mb-12">Results</h2>
          <div className="slide-content">
            <div className="grid grid-cols-3 gap-8 mb-12">
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
                <span className="metric-label">High-freq inference cost</span>
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
        <section>
          <h2 className="mb-12">What We Learned</h2>
          <div className="slide-content">
            <div className="glass-card p-10 glow-primary animate-pulse-glow">
              <p className="text-2xl mb-6" style={{ color: 'hsl(210 40% 98%)' }}>
                "Behavioral signals are <span className="gradient-text font-bold">incredibly information-dense</span>—tiny interactions reveal strong preferences."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="feature-card">
                <p className="text-lg">🔢 Math models replace LLMs for real-time tasks</p>
              </div>
              <div className="feature-card">
                <p className="text-lg">⏸️ Knowing when <em>not</em> to run a model matters</p>
              </div>
              <div className="feature-card">
                <p className="text-lg">🎯 Subtle, continuous personalization wins</p>
              </div>
              <div className="feature-card">
                <p className="text-lg">🔄 Exploration must be principled, not random</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section>
          <h2 className="mb-12">What's Next</h2>
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
        <section className="slide-title">
          <div className="animate-float">
            <h1 className="mb-8" style={{ fontSize: '4rem' }}>GenUI</h1>
            <p className="text-3xl mb-12 gradient-text font-semibold">
              Storefronts that don't just sell—but learn.
            </p>
            <div className="glass-card p-8 inline-block">
              <p className="text-xl" style={{ color: 'hsl(215 20% 75%)' }}>
                Built with ❤️ using
              </p>
              <div className="flex gap-3 justify-center mt-4 flex-wrap">
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
