import React from 'react';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      padding: '80px 20px',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      alignItems: 'center',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      opacity: 0.9,
    },
    headerText: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      opacity: 0.85,
    },
    headerImage: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      border: '4px solid #2a5298',
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionWhite: {
      backgroundColor: 'white',
    },
    sectionGray: {
      backgroundColor: '#f0f4f8',
    },
    sectionDark: {
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '15px',
      color: '#333',
    },
    sectionTitleWhite: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '15px',
      color: 'white',
    },
    underline: {
      width: '80px',
      height: '4px',
      backgroundColor: '#2a5298',
      margin: '0 auto 40px',
    },
    underlineWhite: {
      width: '80px',
      height: '4px',
      backgroundColor: '#fff',
      margin: '0 auto 40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '40px',
    },
    card: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    cardDark: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: '30px',
      borderRadius: '10px',
      backdropFilter: 'blur(10px)',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#333',
    },
    cardTitleWhite: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: 'white',
    },
    cardText: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#666',
    },
    cardTextLight: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: 'rgba(255,255,255,0.85)',
    },
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
      alignItems: 'center',
      marginTop: '40px',
    },
    textContent: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#555',
      marginBottom: '20px',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    },
    featureBox: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
    },
    featureIcon: {
      minWidth: '50px',
      height: '50px',
      backgroundColor: '#2a5298',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    featureText: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#666',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#2a5298',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#666',
      fontWeight: '500',
    },
    techBox: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px',
    },
    techTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      padding: '10px 20px',
      borderRadius: '25px',
      margin: '5px',
      fontSize: '0.95rem',
      fontWeight: '600',
    },
    button: {
      padding: '15px 35px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      transition: 'all 0.3s ease',
    },
    buttonPrimary: {
      backgroundColor: 'white',
      color: '#2a5298',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
    },
    footer: {
      backgroundColor: '#1a1a1a',
      color: '#999',
      padding: '40px 20px',
      textAlign: 'center',
    },
    footerTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>SafeCity</h1>
            <p style={styles.subtitle}>Smart Crime Mapping & Predictive Policing</p>
            <p style={styles.headerText}>
              Empowering law enforcement with AI-driven insights to create safer communities through intelligent crime analysis and predictive policing.
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <img 
              src="data:image/jpeg;base64,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" 
              alt="SafeCity Dashboard Overview" 
              style={styles.headerImage}
            />
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <div style={styles.underline}></div>
        <div style={styles.twoColumnGrid}>
          <div>
            <p style={styles.textContent}>
              SafeCity is a cutting-edge crime mapping platform designed to revolutionize public safety through intelligent data analysis and predictive analytics. By linking FIR (First Information Report) data with advanced AI/ML algorithms, we help law enforcement agencies make data-driven decisions that save lives and protect communities.
            </p>
            <p style={styles.textContent}>
              Our platform transforms raw crime data into actionable insights, enabling police departments to allocate resources efficiently, predict criminal behavior patterns, and deploy patrols strategically in high-risk areas.
            </p>
          </div>
          <div style={{textAlign: 'center'}}>
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Crime mapping and analysis" 
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <h2 style={styles.sectionTitle}>The Challenge We Address</h2>
        <div style={styles.underline}></div>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>📊</div>
            <h3 style={styles.cardTitle}>Inefficient Resource Allocation</h3>
            <p style={styles.cardText}>
              Police departments struggle to deploy personnel effectively without data-driven insights into crime patterns and hotspots.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>🔍</div>
            <h3 style={styles.cardTitle}>Reactive Policing</h3>
            <p style={styles.cardText}>
              Traditional methods focus on responding to crimes after they occur rather than preventing them through predictive analysis.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.icon}>⚠️</div>
            <h3 style={styles.cardTitle}>Limited Crime Visibility</h3>
            <p style={styles.cardText}>
              Lack of comprehensive visualization tools makes it difficult to identify accident-prone areas and emerging crime trends.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <h2 style={styles.sectionTitle}>Our Solution</h2>
        <div style={styles.underline}></div>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px'}}>
          SafeCity provides comprehensive tools and insights to transform how law enforcement agencies approach public safety.
        </p>

        <div style={{marginTop: '40px'}}>
          <div style={styles.featureBox}>
            <div style={styles.featureIcon}>🗺️</div>
            <div>
              <h3 style={styles.featureTitle}>Crime Hotspot Mapping</h3>
              <p style={styles.featureText}>
                Automatically generate real-time crime hotspot maps by analyzing FIR data, identifying high-risk areas that require immediate attention and increased police presence.
              </p>
            </div>
          </div>

          <div style={styles.featureBox}>
            <div style={styles.featureIcon}>🤖</div>
            <div>
              <h3 style={styles.featureTitle}>Predictive Analytics</h3>
              <p style={styles.featureText}>
                Leverage advanced AI/ML algorithms to predict criminal behavior patterns, anticipate future crime occurrences, and enable proactive law enforcement strategies.
              </p>
            </div>
          </div>

          <div style={styles.featureBox}>
            <div style={styles.featureIcon}>👮</div>
            <div>
              <h3 style={styles.featureTitle}>Optimized Patrol Deployment</h3>
              <p style={styles.featureText}>
                Intelligent algorithms suggest optimal patrol routes and schedules based on historical crime data, time patterns, and resource availability for maximum coverage efficiency.
              </p>
            </div>
          </div>

          <div style={styles.featureBox}>
            <div style={styles.featureIcon}>📈</div>
            <div>
              <h3 style={styles.featureTitle}>Real-Time Monitoring</h3>
              <p style={styles.featureText}>
                Monitor accident-prone areas, sensitive zones, and emerging crime trends in real-time with intuitive dashboards and automated alerts for immediate response.
              </p>
            </div>
          </div>
        </div>

        <div style={{marginTop: '50px', textAlign: 'center'}}>
          <img 
            src="data:image/jpeg;base64,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" 
            alt="SafeCity features dashboard" 
            style={styles.image}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{...styles.section, ...styles.sectionGray}}>
        <h2 style={styles.sectionTitle}>Powered by Advanced Technology</h2>
        <div style={styles.underline}></div>
        <div style={styles.twoColumnGrid}>
          <div>
            <div style={styles.techBox}>
              <h4 style={styles.techTitle}>🧠 Machine Learning & AI</h4>
              <p style={styles.featureText}>
                Advanced neural networks and algorithms for pattern recognition, predictive modeling, and intelligent decision support.
              </p>
            </div>
            <div style={styles.techBox}>
              <h4 style={styles.techTitle}>📍 Geographic Information Systems</h4>
              <p style={styles.featureText}>
                Sophisticated mapping technologies for spatial analysis, geofencing, and location-based crime correlation.
              </p>
            </div>
            <div style={styles.techBox}>
              <h4 style={styles.techTitle}>☁️ Cloud Infrastructure</h4>
              <p style={styles.featureText}>
                Scalable, secure cloud-based architecture ensuring 24/7 availability and real-time data processing capabilities.
              </p>
            </div>
            <div style={styles.techBox}>
              <h4 style={styles.techTitle}>🔒 Data Security</h4>
              <p style={styles.featureText}>
                Enterprise-grade encryption and security protocols to protect sensitive law enforcement data and maintain privacy compliance.
              </p>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Technology infrastructure" 
              style={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <h2 style={styles.sectionTitle}>Our Impact</h2>
        <div style={styles.underline}></div>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statNumber}>35%</div>
            <p style={styles.statLabel}>Reduction in Response Time</p>
          </div>
          <div>
            <div style={styles.statNumber}>50%</div>
            <p style={styles.statLabel}>Improved Resource Allocation</p>
          </div>
          <div>
            <div style={styles.statNumber}>60%</div>
            <p style={styles.statLabel}>Better Crime Prediction Accuracy</p>
          </div>
          <div>
            <div style={styles.statNumber}>24/7</div>
            <p style={styles.statLabel}>Real-Time Monitoring</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{...styles.section, ...styles.sectionDark}}>
        <h2 style={styles.sectionTitleWhite}>Benefits for Law Enforcement</h2>
        <div style={styles.underlineWhite}></div>
        <div style={styles.grid}>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Enhanced Public Safety</h3>
            <p style={styles.cardTextLight}>
              Proactive crime prevention through predictive insights leads to safer communities and reduced crime rates.
            </p>
          </div>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Cost Efficiency</h3>
            <p style={styles.cardTextLight}>
              Optimize resource allocation and reduce operational costs while maximizing patrol effectiveness and coverage.
            </p>
          </div>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Data-Driven Decisions</h3>
            <p style={styles.cardTextLight}>
              Make informed strategic decisions backed by comprehensive analytics, historical trends, and predictive models.
            </p>
          </div>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Community Trust</h3>
            <p style={styles.cardTextLight}>
              Transparent, evidence-based policing builds public confidence and strengthens community-police relationships.
            </p>
          </div>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Rapid Response</h3>
            <p style={styles.cardTextLight}>
              Real-time alerts and optimized deployment enable faster response times to incidents and emergencies.
            </p>
          </div>
          <div style={styles.cardDark}>
            <h3 style={styles.cardTitleWhite}>Scalable Solution</h3>
            <p style={styles.cardTextLight}>
              Flexible platform that grows with your agency's needs, from small towns to major metropolitan areas.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.twoColumnGrid}>
          <div style={{textAlign: 'center'}}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_mLNkA9Crv8Ovs2re4h0PhHeVgDKs4L0wQ&s" 
              alt="Future of policing" 
              style={styles.image}
            />
          </div>
          <div>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#333'}}>
              Our Vision for the Future
            </h2>
            <p style={styles.textContent}>
              We envision a future where every community benefits from intelligent, data-driven public safety solutions. SafeCity is committed to continuous innovation, incorporating the latest advances in artificial intelligence, machine learning, and data science to stay ahead of evolving challenges.
            </p>
            <p style={styles.textContent}>
              Our goal is to create a comprehensive ecosystem that not only predicts and prevents crime but also fosters collaboration between law enforcement agencies, local governments, and communities to build safer, more resilient societies.
            </p>
            <div style={{marginTop: '20px'}}>
              <span style={styles.badge}>AI Innovation</span>
              <span style={styles.badge}>Community Safety</span>
              <span style={styles.badge}>Smart Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{...styles.section, background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)', color: 'white', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px'}}>
          Join Us in Making Communities Safer
        </h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 30px'}}>
          Partner with SafeCity to transform your law enforcement operations with cutting-edge technology and data-driven insights.
        </p>
        <div>
          <button style={{...styles.button, ...styles.buttonPrimary}}>
            Request a Demo
          </button>
          <button style={{...styles.button, ...styles.buttonSecondary}}>
            Contact Sales
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerTitle}>SafeCity</p>
        <p style={{marginBottom: '10px'}}>Smart Crime Mapping & Predictive Policing Platform</p>
        <p>© 2025 SafeCity. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;