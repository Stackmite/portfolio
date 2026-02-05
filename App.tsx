
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Lead } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const savedLeads = localStorage.getItem('stackmite_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  const handleAddLead = (newLead: Lead) => {
    const updatedLeads = [...leads, newLead];
    setLeads(updatedLeads);
    localStorage.setItem('stackmite_leads', JSON.stringify(updatedLeads));
  };

  const downloadLeadsAsExcel = () => {
    if (leads.length === 0) return;
    
    const headers = ['ID', 'Name', 'Email', 'Service', 'Message', 'Timestamp'];
    const csvContent = [
      headers.join(','),
      ...leads.map(l => [
        l.id,
        `"${l.name}"`,
        `"${l.email}"`,
        `"${l.service}"`,
        `"${l.message.replace(/"/g, '""')}"`,
        l.timestamp
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `stackmite_leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        {/* <TrustBar /> */}

        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        {/* <Testimonials /> */}

        <section id="contact">
          <ContactForm onAddLead={handleAddLead} onDownload={downloadLeadsAsExcel} leadsCount={leads.length} />
        </section>
      </main>

      <Footer />

      {/* Background decoration elements */}
      <div className="fixed -z-10 top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
