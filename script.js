<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simone Planejados | Móveis Planejados de Alto Padrão em São Paulo</title>
    <!-- Google Fonts: Playfair Display, Outfit & Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom styling -->
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-[#FAF9F6] text-[#2D2D2D] font-['Plus_Jakarta_Sans'] overflow-x-hidden">

    <!-- TOP MICRO BAR -->
    <div class="bg-[#151515] text-white text-[11px] md:text-xs py-2.5 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2.5 md:gap-4 text-center">
        <div class="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4">
            <span class="flex items-center gap-1.5 text-[#dac476] justify-center">
                <i class="fa-solid fa-map-pin"></i>
                Av. Nossa Sra. do Sabará, 2674 • Campo Grande, SP
            </span>
            <span class="hidden sm:flex items-center gap-1.5 text-gray-300 justify-center">
                <i class="fa-solid fa-clock"></i>
                Seg a Sáb: 09:00h às 19:00h
            </span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span class="flex items-center gap-1.5 bg-[#ad8c5e]/30 text-[#dac476] px-2.5 py-0.5 rounded border border-[#c5a880]/20 font-medium">
                <i class="fa-solid fa-award"></i>
                Empresa de Empreendedoras
            </span>
            <span class="text-[#f4edd4] font-semibold">4.6 ★★★★★ <span class="text-gray-400 font-normal text-[10px] ml-1">(68 Avaliações)</span></span>
        </div>
    </div>

    <!-- MAIN HEADER -->
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#f4edd4] shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-0 sm:h-20 flex justify-between items-center gap-4">
            <div class="flex flex-col text-left">
                <div class="flex items-baseline gap-1">
                    <span class="font-['Playfair_Display'] font-bold text-2xl tracking-wide text-[#151515]">Simone</span>
                    <span class="font-sans font-light text-sm uppercase tracking-[0.25em] text-[#ad8c5e]">Planejados</span>
                </div>
                <span class="text-[9px] text-gray-400 tracking-wider font-sans -mt-1 block uppercase">Móveis de Alto Padrão sob Medida</span>
            </div>

            <div class="flex items-center gap-4 md:gap-6">
                <a href="tel:551156126333" class="hidden lg:flex items-center gap-2 text-[#151515] hover:text-[#ad8c5e] transition-all font-medium text-sm border-r border-[#e8dba9] pr-6">
                    <div class="bg-[#fbf8f0] p-2 rounded-full border border-[#e8dba9]">
                        <i class="fa-solid fa-phone text-[#ad8c5e]"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] text-gray-400 uppercase tracking-widest">Ligue agora</p>
                        <p class="font-semibold text-sm text-gray-800">(11) 5612-6333</p>
                    </div>
                </a>

                <a href="#lead-form-section" class="bg-gradient-to-r from-[#151515] to-[#2D2D2D] text-white font-medium text-xs md:text-sm uppercase tracking-wider px-4 md:px-6 py-3 rounded-md shadow-md border border-[#c5a880]/20 hover:opacity-90 transition-all">
                    Solicitar Orçamento <i class="fa-solid fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-20">
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Persuasive Copy -->
                <div class="lg:col-span-5 text-center lg:text-left flex flex-col justify-center animate-fade-in">
                    <!-- Promo Countdown Timer -->
                    <div class="mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 mb-5 text-xs font-sans text-gray-600 bg-[#fbf8f0] border border-[#e8dba9] py-2.5 px-4 rounded-xl sm:rounded-full w-full sm:w-fit shadow-xs text-center">
                        <div class="flex items-center gap-2 justify-center">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ad8c5e] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ad8c5e]"></span>
                            </span>
                            <span>
                                Valor promocional até hoje (<span id="today-date" class="font-semibold text-gray-800">--/--/----</span>):
                            </span>
                        </div>
                        <span id="countdown-timer-value" class="font-mono font-bold text-[#ad8c5e] bg-white border border-[#e8dba9] px-2 py-0.5 rounded shadow-sm text-xs shrink-0 flex gap-1 justify-center">
                            <span id="timer-hours">00h</span>
                            <span id="timer-minutes">00m</span>
                            <span id="timer-seconds">00s</span>
                        </span>
                    </div>

                    <div class="inline-flex items-center gap-1.5 bg-[#fbf8f0] border border-[#e8dba9] px-3.5 py-1.5 rounded-full text-[#907047] text-xs font-semibold tracking-wider uppercase mb-6 w-fit mx-auto lg:mx-0">
                        <i class="fa-solid fa-sparkles text-[#c5a880]"></i> Exclusividade em Móveis Planejados
                    </div>

                    <h1 class="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight leading-[1.2] mb-6">
                        O seu lar planejado<br>com a <span class="italic text-[#ad8c5e]">perfeição</span> que<br>você sempre sonhou.
                    </h1>

                    <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                        A <strong>Simone Planejados</strong> cria móveis sob medida de alto padrão em São Paulo, unindo design exclusivo, materiais nobres e montagem impecável para transformar seu lar.
                    </p>

                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10">
                        <a href="#lead-form-section" class="bg-[#c5a880] hover:bg-[#ad8c5e] text-white font-medium px-8 py-4 rounded-md shadow-lg transition-all text-center uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            Planejar Meu Espaço <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="#reviews-section" class="bg-white hover:bg-[#fbf8f0] text-[#151515] border border-[#c5a880] font-medium px-8 py-4 rounded-md transition-all text-center uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            Ver Avaliações (4.6 ★)
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-4 border-t border-[#f4edd4] pt-8 text-left">
                        <div class="flex items-start gap-2.5">
                            <div class="bg-[#f4edd4]/50 p-1.5 rounded-full text-[#907047] mt-0.5">
                                <i class="fa-solid fa-shield-halved text-xs"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-sm text-gray-900">Entrega no Prazo</h4>
                                <p class="text-xs text-gray-500">Cronograma 100% respeitado</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-2.5">
                            <div class="bg-[#f4edd4]/50 p-1.5 rounded-full text-[#907047] mt-0.5">
                                <i class="fa-solid fa-heart text-xs"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-sm text-gray-900">Montagem Própria</h4>
                                <p class="text-xs text-gray-500">Equipe caprichosa e educada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Interactive Display -->
                <div class="lg:col-span-7 flex flex-col">
                    <!-- Tabs Selector -->
                    <div class="flex flex-wrap gap-2 mb-4 bg-gray-100/80 p-1.5 rounded-lg border border-gray-200/50">
                        <button onclick="switchEnvironment('cozinhas')" id="tab-cozinhas" class="env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider bg-white text-[#151515] shadow-sm font-bold border-b-2 border-[#c5a880]">
                            Cozinhas
                        </button>
                        <button onclick="switchEnvironment('dormitorios')" id="tab-dormitorios" class="env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider text-gray-500 hover:text-[#151515] hover:bg-white/50">
                            Dormitórios
                        </button>
                        <button onclick="switchEnvironment('salas')" id="tab-salas" class="env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider text-gray-500 hover:text-[#151515] hover:bg-white/50">
                            Salas
                        </button>
                        <button onclick="switchEnvironment('banheiros')" id="tab-banheiros" class="env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider text-gray-500 hover:text-[#151515] hover:bg-white/50">
                            Banheiros
                        </button>
                    </div>

                    <!-- Showcase Stage -->
                    <div id="showcase-card" class="bg-white rounded-xl border border-[#fbf8f0] shadow-xl overflow-hidden text-left">
                        <div class="relative h-[250px] sm:h-[350px] overflow-hidden">
                            <img id="env-image" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" class="w-full h-full object-cover" alt="Ambiente">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-6 left-6 right-6 text-white">
                                <h3 id="env-title" class="font-['Playfair_Display'] text-2xl font-bold tracking-tight mb-1 text-[#f4edd4]">Cozinhas Gourmet</h3>
                                <p class="text-xs text-gray-200">Foco em marcenaria contemporânea e design ergonômico.</p>
                            </div>
                        </div>
                        <div class="p-6 sm:p-8">
                            <p id="env-description" class="text-gray-600 text-sm leading-relaxed mb-6">
                                Espaços projetados para aliar alta gastronomia com convivência familiar. Layouts funcionais que otimizam o preparo de alimentos, gaveteiros com amortecimento, divisores de talheres de madeira e iluminação em LED embutida.
                            </p>
                            <div id="env-features" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                                <div class="flex items-center gap-2.5 text-xs text-gray-700">
                                    <span class="bg-[#fbf8f0] p-1 rounded-full border border-[#e8dba9]"><i class="fa-solid fa-check text-[#ad8c5e]"></i></span>
                                    <span>Abertura por toque ou cava elegante</span>
                                </div>
                                <div class="flex items-center gap-2.5 text-xs text-gray-700">
                                    <span class="bg-[#fbf8f0] p-1 rounded-full border border-[#e8dba9]"><i class="fa-solid fa-check text-[#ad8c5e]"></i></span>
                                    <span>LEDs embutidos sob os armários</span>
                                </div>
                                <div class="flex items-center gap-2.5 text-xs text-gray-700">
                                    <span class="bg-[#fbf8f0] p-1 rounded-full border border-[#e8dba9]"><i class="fa-solid fa-check text-[#ad8c5e]"></i></span>
                                    <span>Nichos sob medida para eletros</span>
                                </div>
                                <div class="flex items-center gap-2.5 text-xs text-gray-700">
                                    <span class="bg-[#fbf8f0] p-1 rounded-full border border-[#e8dba9]"><i class="fa-solid fa-check text-[#ad8c5e]"></i></span>
                                    <span>MDF Ultra naval de alta resistência</span>
                                </div>
                            </div>
                            <div class="bg-[#fbf8f0]/80 rounded-lg p-4 border-l-4 border-[#c5a880] italic text-xs text-gray-600 flex flex-col gap-1">
                                <p id="env-quote">"O projeto da minha cozinha foi pensado exatamente de acordo com o que eu sonhava. (Kelly Tobias)"</p>
                                <span class="text-[10px] uppercase font-bold tracking-wider text-[#ad8c5e] not-italic">★ Avaliação real do Google Maps</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section id="reviews-section" class="py-20 bg-white border-b border-[#f4edd4]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="inline-flex items-center gap-1.5 bg-[#fbf8f0] border border-[#e8dba9] px-3.5 py-1.5 rounded-full text-[#907047] text-xs font-semibold tracking-wider uppercase mb-4">
                    <i class="fa-solid fa-star text-[#c5a880]"></i> Prova Social & Excelência
                </div>
                <h2 class="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#151515] tracking-tight mb-4">
                    O que dizem os clientes da <span class="italic text-[#ad8c5e]">Simone Planejados</span>
                </h2>
                <div class="flex items-center justify-center gap-2 mb-6">
                    <span class="font-bold text-3xl text-[#151515]">4.6</span>
                    <div class="flex text-[#c5a880]">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span class="text-xs text-gray-500 font-sans tracking-wide ml-2">(68 avaliações no Google Maps)</span>
                </div>
                <p class="text-gray-600 text-sm sm:text-base">
                    Nossos clientes elogiam frequentemente o cuidado no desenho inicial, a pontualidade na entrega e o capricho da equipe de montadores próprios.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                <!-- Card 1 -->
                <div class="bg-[#fbf8f0]/20 border border-[#e8dba9]/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <div class="flex text-[#c5a880] gap-0.5 mb-4">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">
                            "Minha experiência com a Simone Planejados foi simplesmente excelente! Desde o primeiro atendimento fui muito bem acolhida, com atenção, profissionalismo e cuidado em cada detalhe. O projeto da minha cozinha foi pensado exatamente de acordo com o que eu sonhava e precisava. Ficou perfeito!"
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-gray-100 pt-4">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" class="w-11 h-11 rounded-full object-cover border" alt="Kelly">
                        <div>
                            <h4 class="font-bold text-sm text-[#151515]">Kelly Tobias</h4>
                            <p class="text-xs text-gray-500">Local Guide • <span class="text-[#ad8c5e] font-semibold">Cozinha Planejada</span></p>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-[#fbf8f0]/20 border border-[#e8dba9]/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <div class="flex text-[#c5a880] gap-0.5 mb-4">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">
                            "Melhor experiência!!!! Sonho realizado, muito bem atendido do começo ao fim, móveis bem montados com qualidade e da forma como no desenho inicial. Todos muito prestativos e atenciosos: Rodolfo, Simone e Tiago. Os montadores são profissionais de altíssimo nível, super caprichosos!"
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-gray-100 pt-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" class="w-11 h-11 rounded-full object-cover border" alt="Luciano">
                        <div>
                            <h4 class="font-bold text-sm text-[#151515]">Luciano Santos</h4>
                            <p class="text-xs text-gray-500">Local Guide • <span class="text-[#ad8c5e] font-semibold">Apartamento Completo</span></p>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-[#fbf8f0]/20 border border-[#e8dba9]/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <div class="flex text-[#c5a880] gap-0.5 mb-4">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-gray-700 text-sm leading-relaxed mb-6 italic">
                            "Desde a escolha da loja, a visita, o atendimento e as dúvidas esclarecidas, tivemos uma ótima experiência. Excelentes profissionais, entrega rigorosamente na data prevista, acompanhei toda a produção dos meus armários. Fizemos uma cozinha e lavanderia integradas e ficou maravilhoso!"
                        </p>
                    </div>
                    <div class="flex items-center gap-3 border-t border-gray-100 pt-4">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" class="w-11 h-11 rounded-full object-cover border" alt="Andrea">
                        <div>
                            <h4 class="font-bold text-sm text-[#151515]">Andrea Oliveira</h4>
                            <p class="text-xs text-gray-500">Cliente Satisfeita • <span class="text-[#ad8c5e] font-semibold">Cozinha & Lavanderia</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LEAD FORM SECTION -->
    <section id="lead-form-section" class="py-20 bg-[#151515] text-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Persuasive Copy -->
                <div class="lg:col-span-5 text-left">
                    <div class="inline-flex items-center gap-1.5 bg-[#ad8c5e]/20 border border-[#c5a880]/30 px-3 py-1 rounded-full text-[#c5a880] text-xs font-semibold uppercase mb-6">
                        <i class="fa-brands fa-whatsapp"></i> Atendimento Imediato via WhatsApp
                    </div>
                    <h2 class="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-6">
                        Pronto para transformar a sua <span class="text-[#c5a880] italic">casa</span>?
                    </h2>
                    <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                        Preencha as informações básicas do seu projeto abaixo. Ao clicar em "Solicitar Orçamento", o sistema gerará a mensagem em tempo real para enviar ao WhatsApp da Simone Planejados de forma imediata!
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880] text-xs font-bold mt-0.5">1</span>
                            <p class="text-xs sm:text-sm text-gray-300"><strong>Preencha o formulário</strong> com seu nome, região e ambiente.</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880] text-xs font-bold mt-0.5">2</span>
                            <p class="text-xs sm:text-sm text-gray-300"><strong>Visualize a mensagem</strong> no simulador em tempo real.</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880] text-xs font-bold mt-0.5">3</span>
                            <p class="text-xs sm:text-sm text-gray-300"><strong>Envie com um clique</strong> direto para o nosso atendimento.</p>
                        </div>
                    </div>
                </div>

                <!-- Form & Simulator -->
                <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
                    <!-- Form Card -->
                    <div class="md:col-span-6 bg-[#1c1c1c] border border-neutral-800 rounded-xl p-6 shadow-2xl">
                        <h3 class="font-bold text-lg text-white mb-4 border-b border-neutral-800 pb-3">
                            <i class="fa-solid fa-file-invoice text-[#c5a880] mr-2"></i> Dados do Projeto
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-[11px] font-medium uppercase text-gray-400 mb-1.5"><i class="fa-solid fa-user text-[#c5a880] mr-1"></i> Nome Completo</label>
                                <input type="text" id="name-input" placeholder="Ex: Kelly Tobias" onkeyup="updateLiveMessage()" class="w-full bg-neutral-800 border border-neutral-700 focus:border-[#c5a880] focus:outline-none rounded-md py-2 px-3 text-sm text-white">
                            </div>
                            <div>
                                <label class="block text-[11px] font-medium uppercase text-gray-400 mb-1.5"><i class="fa-solid fa-map-location-dot text-[#c5a880] mr-1"></i> Bairro / Região (SP)</label>
                                <input type="text" id="region-input" placeholder="Ex: Campo Grande, Moema" onkeyup="updateLiveMessage()" class="w-full bg-neutral-800 border border-neutral-700 focus:border-[#c5a880] focus:outline-none rounded-md py-2 px-3 text-sm text-white">
                            </div>
                            <div>
                                <label class="block text-[11px] font-medium uppercase text-gray-400 mb-1.5"><i class="fa-solid fa-layer-group text-[#c5a880] mr-1"></i> Ambiente Desejado</label>
                                <select id="env-input" onchange="updateLiveMessage()" class="w-full bg-neutral-800 border border-neutral-700 focus:border-[#c5a880] focus:outline-none rounded-md py-2 px-3 text-sm text-white cursor-pointer">
                                    <option value="Cozinha Planejada">Cozinha Planejada</option>
                                    <option value="Dormitório Planejado">Dormitório Planejado (Quarto)</option>
                                    <option value="Home Theater / Sala">Home Theater / Sala de Estar</option>
                                    <option value="Banheiro & Lavanderia">Banheiro ou Lavanderia</option>
                                    <option value="Closet Completo">Closet Sob Medida</option>
                                    <option value="Casa Completa">Apartamento / Casa Completa</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[11px] font-medium uppercase text-gray-400 mb-1.5"><i class="fa-solid fa-pencil text-[#c5a880] mr-1"></i> Breve Descrição</label>
                                <textarea id="desc-input" rows="3" onkeyup="updateLiveMessage()" placeholder="Ex: Quero um projeto moderno em tons cinza..." class="w-full bg-neutral-800 border border-neutral-700 focus:border-[#c5a880] focus:outline-none rounded-md py-2 px-3 text-sm text-white resize-none"></textarea>
                            </div>
                            <button onclick="sendToWhatsApp()" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-md shadow-lg flex items-center justify-center gap-2 transition-all">
                                <i class="fa-brands fa-whatsapp text-sm"></i> Enviar pelo WhatsApp
                            </button>
                        </div>
                    </div>

                    <!-- WhatsApp Live Simulator -->
                    <div class="md:col-span-6 flex flex-col justify-between bg-[#0e0e0e] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl min-h-[350px]">
                        <div class="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                            <div class="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-800 text-sm">SP</div>
                            <div>
                                <h4 class="font-bold text-sm leading-tight">Simone Planejados</h4>
                                <p class="text-[10px] text-emerald-100">Visualizador de Mensagem</p>
                            </div>
                        </div>
                        <div class="flex-1 bg-[#E5DDD5] p-4 flex flex-col justify-end relative">
                            <!-- WhatsApp wallpaper -->
                            <div class="absolute inset-0 bg-repeat opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
                            <div class="relative z-10 max-w-[90%] ml-auto">
                                <div class="bg-[#DCF8C6] text-gray-800 rounded-lg p-3 shadow-md text-[11px] whitespace-pre-wrap leading-relaxed border border-green-200" id="live-chat-bubble">
                                    Preencha o formulário para simular...
                                </div>
                            </div>
                        </div>
                        <div class="bg-neutral-900 border-t border-neutral-800 px-4 py-3 flex items-center gap-2">
                            <div class="flex-1 bg-neutral-800 rounded-full px-4 py-1.5 text-xs text-gray-500">Mensagem pronta para envio...</div>
                            <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"><i class="fa-solid fa-microphone"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- PHYSICAL LOCATION SHOWROOM -->
    <section class="py-20 bg-[#FAF9F6] border-b border-[#f4edd4]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-6 text-left">
                    <div class="bg-white rounded-xl shadow-xl border border-[#f4edd4] p-6">
                        <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded mb-4">
                            <i class="fa-solid fa-clock"></i> Showroom Aberto • Até as 19:00h
                        </span>
                        <h3 class="font-['Playfair_Display'] text-2xl font-bold text-[#151515] mb-2">Venha nos visitar em São Paulo</h3>
                        <p class="text-gray-500 text-sm mb-6">Veja de perto o padrão de acabamento dos nossos armários, as opções de corrediças invisíveis, portas reflecta e a paleta exclusiva.</p>
                        
                        <div class="space-y-4 mb-6 text-sm text-gray-700">
                            <div class="flex gap-3 pb-3 border-b border-gray-100">
                                <i class="fa-solid fa-map-pin text-[#c5a880] text-lg mt-0.5"></i>
                                <div>
                                    <strong class="text-gray-900 block">Endereço Showroom</strong>
                                    Av. Nossa Sra. do Sabará, 2674 - Campo Grande<br>São Paulo - SP, CEP 04685-001
                                </div>
                            </div>
                            <div class="flex gap-3 pb-3 border-b border-gray-100">
                                <i class="fa-solid fa-phone text-[#c5a880] text-lg mt-0.5"></i>
                                <div>
                                    <strong class="text-gray-900 block">Telefones Atendimento</strong>
                                    (11) 5612-6333 / (11) 95321-1196
                                </div>
                            </div>
                        </div>

                        <a href="https://maps.google.com/?q=Av.+Nossa+Sra.+do+Sabará,+2674+-+Campo+Grande,+São+Paulo+-+SP" target="_blank" class="w-full bg-[#c5a880] text-white font-medium text-xs uppercase tracking-wider py-3 px-4 rounded text-center block hover:opacity-90 transition-all">
                            <i class="fa-solid fa-location-arrow mr-1 animate-pulse"></i> Como Chegar pelo Google Maps
                        </a>
                    </div>
                </div>
                <div class="lg:col-span-6 text-left">
                    <div class="inline-flex items-center gap-1.5 bg-[#fbf8f0] border border-[#e8dba9] px-3 py-1 rounded-full text-[#ad8c5e] text-xs font-semibold uppercase mb-4">
                        <i class="fa-solid fa-users"></i> Quem Somos
                    </div>
                    <h2 class="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#151515] mb-6">Empresa liderada por <span class="italic text-[#ad8c5e]">Mulheres Empreendedoras</span></h2>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">
                        A <strong>Simone Planejados</strong> foi fundada com o propósito de trazer o olhar detalhista, acolhedor e sensível do design de interiores feminino para o mercado de marcenaria em São Paulo. Aqui, cada milímetro importa e o atendimento humanizado é a nossa maior prioridade.
                    </p>

                    <!-- Perfil da Fundadora, Simone -->
                    <div class="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl border border-[#e8dba9]/40 shadow-sm mb-8 transition-all hover:border-[#c5a880]/60 duration-300">
                        <div class="relative shrink-0">
                            <div class="absolute inset-0 bg-gradient-to-tr from-[#ad8c5e] to-[#c5a880] rounded-full -m-1 opacity-80"></div>
                            <img
                                src="https://i.imgur.com/lpKT1ee.png"
                                alt="Simone - Fundadora da Simone Planejados"
                                class="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-md bg-white"
                                referrerpolicy="no-referrer"
                            />
                        </div>
                        <div class="text-center sm:text-left flex-1">
                            <h4 class="font-['Playfair_Display'] text-xl font-bold text-[#151515]">Simone</h4>
                            <p class="text-[10px] text-[#ad8c5e] uppercase tracking-widest font-semibold mb-2">Fundadora e Diretora</p>
                            <p class="text-sm italic text-gray-600 leading-relaxed">
                                "Cada projeto de móvel sob medida é desenhado com o coração e executado com precisão milimétrica, trazendo beleza, conforto e inteligência de espaço para o seu lar."
                            </p>
                        </div>
                    </div>

                    <div class="space-y-4 text-sm text-gray-700">
                        <div class="flex gap-3">
                            <i class="fa-solid fa-medal text-[#c5a880] text-xl mt-1"></i>
                            <div>
                                <h4 class="font-bold text-[#151515]">Projetos 100% Personalizados</h4>
                                <p class="text-xs text-gray-500">Móveis desenhados de acordo com sua rotina e preferências de cor.</p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <i class="fa-solid fa-truck-fast text-[#c5a880] text-xl mt-1"></i>
                            <div>
                                <h4 class="font-bold text-[#151515]">Pontualidade Absoluta</h4>
                                <p class="text-xs text-gray-500">Cumprimento rígido do prazo acordado em contrato.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#151515] text-gray-400 py-12 px-4 border-t border-neutral-800 text-xs md:text-sm">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            <div>
                <div class="flex items-baseline gap-1 mb-3">
                    <span class="font-['Playfair_Display'] font-bold text-xl text-white">Simone</span>
                    <span class="font-sans font-light text-xs uppercase tracking-[0.2em] text-[#c5a880]">Planejados</span>
                </div>
                <p class="text-xs text-gray-500">Transformando ambientes com marcenaria premium, pontualidade e atendimento humanizado.</p>
            </div>
            <div class="space-y-3">
                <h4 class="font-bold text-white uppercase text-xs tracking-wider border-b border-neutral-800 pb-2 mb-2">Contatos</h4>
                <p><i class="fa-solid fa-phone text-[#c5a880] mr-1"></i> (11) 5612-6333</p>
                <p><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i> (11) 95321-1196</p>
            </div>
            <div class="space-y-3">
                <h4 class="font-bold text-white uppercase text-xs tracking-wider border-b border-neutral-800 pb-2 mb-2">Showroom</h4>
                <p><i class="fa-solid fa-map-pin text-[#c5a880] mr-1"></i> Av. N. Sra. do Sabará, 2674 • Campo Grande, SP</p>
            </div>
        </div>
        <div class="max-w-7xl mx-auto border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs">
            <p>© 2026 Simone Planejados. Todos os direitos reservados.</p>
            <p>Feito com <i class="fa-solid fa-heart text-red-500"></i> por Agência Premium</p>
        </div>
    </footer>

    <!-- JS SCRIPT -->
    <script src="script.js"></script>
</body>
</html>
