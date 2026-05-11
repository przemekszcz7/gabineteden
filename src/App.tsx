/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Facebook, 
  Instagram, 
  ExternalLink, 
  ChevronRight, 
  Star,
  Menu,
  X,
  Heart,
  Sparkles,
  Scissors,
  CheckCircle2
} from 'lucide-react';

const WORK_IMAGES = [
  "https://i.postimg.cc/g0Z2Nb6C/518085501-1340390431428402-5892226643841081273-n.jpg",
  "https://i.postimg.cc/q73vjH34/518290302-1340392808094831-6167752757608485279-n.jpg",
  "https://i.postimg.cc/KYM8JhMS/518295082-1340392694761509-9124603809613476357-n.jpg",
  "https://i.postimg.cc/CKqxmpqV/518342154-1340390474761731-1134881457404361048-n.jpg",
  "https://i.postimg.cc/vmyGLq5P/518390145-1340388968095215-6756426520716281632-n.jpg",
  "https://i.postimg.cc/bvtw3ftX/520036519-1340389068095205-126031468069620883-n.jpg",
  "https://i.postimg.cc/8C6ztg61/520048184-1363165499150895-3090342026497225913-n.jpg",
  "https://i.postimg.cc/xdz1tVz9/532130916-1363165672484211-3070937529318252640-n.jpg",
  "https://i.postimg.cc/zfNqStT7/518340413-1340386074762171-3632349452267654058-n.jpg",
];

const SERVICES = [
  { name: "Pielęgnacja Twarzy", desc: "Indywidualnie dobrane zabiegi nawilżające, oczyszczające i odmładzające.", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Stylizacja Paznokci", desc: "Manicure i pedicure hybrydowy, żelowy oraz klasyczny na najwyższym poziomie.", icon: <Scissors className="w-6 h-6" /> },
  { name: "Zabiegi Ciała", desc: "Relaksujące masaże i rytuały pielęgnacyjne dla Twojego spokoju i urody.", icon: <Heart className="w-6 h-6" /> },
  { name: "Oprawa Oka", desc: "Stylizacja brwi i rzęs, która podkreśli Twoje naturalne spojrzenie.", icon: <Star className="w-6 h-6" /> },
];

const OPENING_HOURS = [
  { day: 'Poniedziałek', hours: '10:00 - 18:00' },
  { day: 'Wtorek', hours: '10:00 - 18:00' },
  { day: 'Środa', hours: '10:00 - 18:00' },
  { day: 'Czwartek', hours: '10:00 - 18:00' },
  { day: 'Piątek', hours: '10:00 - 18:00' },
  { day: 'Sobota', hours: '10:00 - 13:00' },
  { day: 'Niedziela', hours: 'ZAMKNIĘTE', closed: true },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'O nas', href: '#about' },
    { name: 'Oferta', href: '#offer' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-warm-gray/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-gold-500 shadow-sm transition-transform group-hover:scale-110">
              <img 
                src="https://i.postimg.cc/NFw91fJ7/459004003-1071328975001217-1022164352105050269-n.jpg" 
                alt="Eden Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-lg md:text-2xl font-semibold tracking-widest text-stone-900">EDEN</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest font-medium text-stone-600 hover:text-gold-600 transition-colors"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:661765254" 
              className="bg-gold-500 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gold-600 transition-all shadow-lg shadow-gold-500/20 whitespace-nowrap"
              id="nav-call-btn"
            >
              Zadzwoń
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)} id="mobile-menu-toggle">
            {isMenuOpen ? <X /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-warm-gray border-t border-stone-200 p-6 shadow-xl md:hidden"
              id="mobile-nav"
            >
              <div className="flex flex-col gap-2 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-serif text-stone-800 py-3 hover:text-gold-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-4">
                  <a 
                    href="tel:661765254" 
                    className="bg-gold-500 text-white py-4 rounded-full font-bold shadow-lg shadow-gold-500/20 block"
                  >
                    Zadzwoń: 661 765 254
                  </a>
                </div>
                <div className="flex justify-center gap-6 pt-6 text-stone-400">
                  <Facebook className="hover:text-gold-500 cursor-pointer" />
                  <Instagram className="hover:text-gold-500 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-gray">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-400 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-stone-400 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8">
              <span className="flex items-center gap-2"><Sparkles size={14} /> Profesjonalne Zabiegi Kosmetyczne</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif leading-tight text-stone-900 mb-6 md:mb-8">
              Odkryj swoje <br className="hidden sm:block" />
              <span className="text-gold-500 italic">piękno</span> w EDEN
            </h1>
            <p className="text-base md:text-lg text-stone-600 mb-10 max-w-lg mx-auto lg:ml-0 leading-relaxed">
              Gabinet kosmetyczny Eden oferuje profesjonalne zabiegi kosmetyczne, które przywrócą Ci blask i pewność siebie. Zapraszamy do świata relaksu i pielęgnacji.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pb-2">
              <a href="#offer" className="group bg-stone-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-stone-900/30 whitespace-nowrap min-w-[200px] text-sm md:text-base">
                Zobacz Ofertę <ChevronRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:661765254" className="bg-white border border-stone-200 text-stone-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-3 shadow-md whitespace-nowrap min-w-[200px] text-sm md:text-base">
                <Phone size={20} className="text-gold-500 shrink-0" /> 661 765 254
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                src="https://i.postimg.cc/xdz1tVz9/532130916-1363165672484211-3070937529318252640-n.jpg" 
                alt="Eden Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decors */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-200/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-warm-gray rounded-full -z-10 border border-stone-200 flex items-center justify-center p-8 text-center group transition-transform hover:scale-105">
              <div className="text-xs uppercase tracking-widest font-bold text-stone-400 group-hover:text-gold-500">
                100% Profesjonalizm
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -30 }}
               viewport={{ once: true }}
               className="relative grid grid-cols-2 gap-6"
             >
                <div className="space-y-8 pt-20">
                   <div className="rounded-full overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white transition-transform hover:scale-105 duration-700">
                      <img src="https://i.postimg.cc/g0Z2Nb6C/518085501-1340390431428402-5892226643841081273-n.jpg" className="w-full h-full object-cover" />
                   </div>
                   <div className="rounded-full overflow-hidden shadow-2xl aspect-square w-4/5 ml-auto border-8 border-white transition-transform hover:rotate-2 duration-700">
                      <img src="https://i.postimg.cc/CKqxmpqV/518342154-1340390474761731-1134881457404361048-n.jpg" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="space-y-8">
                   <div className="rounded-full overflow-hidden shadow-2xl aspect-[2/3] border-8 border-white transition-transform hover:-rotate-2 duration-700">
                      <img src="https://i.postimg.cc/8C6ztg61/520048184-1363165499150895-3090342026497225913-n.jpg" className="w-full h-full object-cover" />
                   </div>
                   <div className="hidden lg:block pt-12 pl-12 text-stone-300">
                      <Sparkles size={48} className="opacity-20" />
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-200/10 blur-[100px] rounded-full -z-10"></div>
             </motion.div>

             <motion.div
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 30 }}
               viewport={{ once: true }}
             >
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4">O Gabinecie</span>
                <h2 className="h2 italic font-normal">Twój Eden, Twoja <br /> chwila zapomnienia</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Gabinet kosmetyczny Eden to miejsce, gdzie profesjonalizm spotyka się z pasją do piękna. Nasza misja to dostarczanie zabiegów najwyższej jakości w atmosferze pełnej spokoju i relaksu. 
                </p>
                <p className="text-stone-600 mb-10 leading-relaxed">
                  Wierzymy, że każda kobieta zasługuje na chwilę dla siebie. Dlatego dbamy o każdy detal, używając sprawdzonych produktów i najnowocześniejszych technik, aby efekty naszej pracy cieszyły oko przez długi czas.
                </p>
                <div className="grid grid-cols-2 gap-6 pb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-500">
                         <CheckCircle2 size={20} />
                      </div>
                      <span className="font-medium text-stone-800">Certyfikowane produkty</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-500">
                         <CheckCircle2 size={20} />
                      </div>
                      <span className="font-medium text-stone-800">Lata doświadczenia</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-500">
                         <CheckCircle2 size={20} />
                      </div>
                      <span className="font-medium text-stone-800">Indywidualne podejście</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-500">
                         <CheckCircle2 size={20} />
                      </div>
                      <span className="font-medium text-stone-800">Terminowość</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="offer" className="bg-warm-gray">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <span className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4">Nasza Oferta</span>
             <h2 className="h2">Szeroki wachlarz usług</h2>
             <p className="text-stone-600">Dobieramy zabiegi tak, aby spełniały oczekiwania nawet najbardziej wymagających klientek.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-stone-100"
              >
                <div className="w-14 h-14 bg-warm-gray rounded-2xl flex items-center justify-center text-gold-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-stone-900">{service.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#contact" className="text-gold-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Umów się <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-stone-900 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="font-serif text-3xl md:text-4xl mb-4">Potrzebujesz konsultacji?</h3>
                <p className="text-stone-400 max-w-md">Nie wiesz który zabieg będzie dla Ciebie najlepszy? Zadzwoń i porozmawiaj z naszą ekspertką.</p>
             </div>
             <a href="tel:661765254" className="relative z-10 bg-gold-500 text-white px-10 py-5 rounded-full font-bold hover:bg-gold-600 transition-all flex items-center gap-3 text-lg">
                <Phone size={24} /> 661 765 254
              </a>
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-white">
        <div className="section-container">
           <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-xl">
                 <span className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4">Galeria</span>
                 <h2 className="h2 mb-0">Moje Prace</h2>
              </div>
              <a 
                href="https://www.facebook.com/profile.php?id=100063723723410" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-gold-600 font-medium transition-colors border-b-2 border-stone-200 pb-1"
              >
                 Zobacz więcej na Facebooku <ExternalLink size={16} />
              </a>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {WORK_IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="aspect-square rounded-3xl overflow-hidden group relative cursor-pointer shadow-md"
                >
                   <img 
                    src={img} 
                    alt={`Praca ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gold-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="text-white text-sm font-bold border-2 border-white/30 px-7 py-3 rounded-full backdrop-blur-md uppercase tracking-widest scale-90 group-hover:scale-100 transition-transform">
                        Pokaż
                      </span>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="bg-warm-gray overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm block mb-4">Opinie Klientek</span>
                <h2 className="h2 italic">Głos naszych <br /> zadowolonych gości</h2>
                <p className="text-stone-600 mb-8 max-w-md">Nasze klientki doceniają jakość, precyzję i atmosferę panującą w Eden. To ich uśmiech jest dla nas największą nagrodą.</p>
                
                <div className="space-y-4 mb-10">
                   <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 relative">
                      <div className="flex gap-1 text-gold-500 mb-3">
                         <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                      </div>
                      <p className="italic text-stone-700 mb-4 text-sm leading-relaxed">"Profesjonalizm w każdym calu. Zabiegi wykonane z niezwykłą starannością, a efekty przerosły moje oczekiwania. Polecam z całego serca!"</p>
                      <div className="font-bold text-stone-900 text-sm">Anna K.</div>
                   </div>
                   <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 opacity-60">
                      <div className="flex gap-1 text-gold-500 mb-3">
                         <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                      </div>
                      <p className="italic text-stone-700 mb-2 text-sm">"Bardzo miła atmosfera i Pani kosmetyczka zna się na rzeczy. Napewno wrócę!"</p>
                      <div className="font-bold text-stone-900 text-sm">Marta S.</div>
                   </div>
                </div>

                <a 
                  href="https://www.facebook.com/profile.php?id=100063723723410&sk=reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl"
                >
                  <Facebook size={20} /> Zobacz wszystkie opinie na FB
                </a>
             </div>

             <div className="relative">
                <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                   <img src="https://i.postimg.cc/q73vjH34/518290302-1340392808094831-6167752757608485279-n.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-10 rounded-[32px] shadow-2xl z-20">
                   <div className="text-5xl font-serif font-bold mb-1">5.0</div>
                   <div className="text-xs uppercase tracking-widest font-bold opacity-80">Ocena na Facebooku</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-warm-gray pt-0 pb-12 sm:pb-20">
        <div className="section-container !py-0 sm:!py-10">
           <div className="bg-white rounded-[40px] sm:rounded-[60px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 md:p-20">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mb-4">Kontakt</h2>
                 <p className="text-stone-600 mb-12">Zapraszamy do kontaktu telefonicznego w celu umówienia wizyty.</p>
                 
                 <div className="space-y-8">
                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-warm-gray rounded-2xl flex items-center justify-center text-gold-500 shrink-0 shadow-sm border border-stone-100">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Telefon</div>
                          <a href="tel:661765254" className="text-2xl font-serif font-bold text-stone-900 hover:text-gold-500 transition-colors">661 765 254</a>
                       </div>
                    </div>

                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-warm-gray rounded-2xl flex items-center justify-center text-gold-500 shrink-0 shadow-sm border border-stone-100">
                          <Facebook size={24} />
                       </div>
                       <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Social Media</div>
                          <a 
                            href="https://www.facebook.com/profile.php?id=100063723723410" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-lg font-medium text-stone-800 hover:text-gold-500 transition-colors"
                          >
                            Facebook Gabinet Eden
                          </a>
                       </div>
                    </div>

                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-warm-gray rounded-2xl flex items-center justify-center text-gold-500 shrink-0 shadow-sm border border-stone-100">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Miejsce</div>
                          <div className="text-lg font-medium text-stone-800 italic">Polska - Zapraszamy lokalnie!</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-stone-900 p-12 md:p-20 text-white relative">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                       <Clock className="text-gold-500" />
                       <h3 className="font-serif text-2xl uppercase tracking-widest">Godziny otwarcia</h3>
                    </div>

                    <div className="space-y-6">
                       {OPENING_HOURS.map((item) => (
                         <div key={item.day} className="flex justify-between items-center border-b border-stone-800 pb-4">
                            <span className="font-medium text-stone-400 uppercase tracking-widest text-sm">{item.day}</span>
                            <span className={`font-serif text-lg ${item.closed ? 'text-rose-400' : 'text-white'}`}>
                               {item.hours}
                            </span>
                         </div>
                       ))}
                    </div>

                    <div className="mt-12 p-8 bg-stone-800/50 rounded-3xl border border-stone-700">
                       <p className="text-sm font-medium italic text-stone-300">"Piękno zaczyna się w chwili, gdy zdecydujesz się być sobą." - Coco Chanel</p>
                    </div>
                 </div>
                 
                 {/* Decorative element */}
                 <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-gold-500/20 rounded-full blur-[80px]"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500/30">
                 <img src="https://i.postimg.cc/NFw91fJ7/459004003-1071328975001217-1022164352105050269-n.jpg" className="w-full h-full object-cover" />
               </div>
               <div>
                  <div className="font-serif text-xl font-bold text-white tracking-widest">EDEN</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">Gabinet Kosmetyczny</div>
               </div>
            </div>

            <div className="text-stone-500 text-sm flex gap-6">
               <a href="#" className="hover:text-gold-500 transition-all font-medium">Polityka prywatności</a>
               <a href="#" className="hover:text-gold-500 transition-all font-medium">Wizyta</a>
            </div>

            <div className="flex gap-4">
               <a 
                 href="https://www.facebook.com/profile.php?id=100063723723410" 
                 target="_blank" 
                 rel="noreferrer"
                 className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
               >
                  <Facebook size={20} />
               </a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 text-center text-xs text-stone-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Gabinet Kosmetyczny EDEN. Wszystkie prawa zastrzeżone.
         </div>
      </footer>
    </div>
  );
}
