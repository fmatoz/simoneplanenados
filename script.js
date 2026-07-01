// Interactive data for environments
const environments = {
    cozinhas: {
        title: "Cozinhas Gourmet",
        description: "Espaços projetados para aliar alta gastronomia com convivência familiar. Layouts funcionais que otimizam o preparo de alimentos, gaveteiros com amortecimento, divisores de talheres de madeira e iluminação em LED embutida.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        quote: "O projeto da minha cozinha foi pensado exatamente de acordo com o que eu sonhava. (Kelly Tobias)",
        features: [
            "Abertura por toque ou cava elegante",
            "LEDs embutidos sob os armários",
            "Nichos sob medida para eletros",
            "MDF Ultra naval de alta resistência"
        ]
    },
    dormitorios: {
        title: "Dormitórios & Suítes",
        description: "Seu santuário particular de descanso. Quartos planejados com cabeceiras estofadas integradas, criados-mudos flutuantes, armários com portas de correr em vidro reflecta e closets inteligentes com divisórias personalizadas.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        quote: "Ficou exatamente como queríamos, cada cor e detalhe planejado com muito carinho. (Thiago's Client)",
        features: [
            "Closets com cabideiros iluminados",
            "Gavetas telescópicas invisíveis",
            "Penteadeiras camarim integradas",
            "Portas reflecta bronze premium"
        ]
    },
    salas: {
        title: "Home Theaters & Salas",
        description: "Ambientes elegantes e confortáveis para receber convidados ou curtir um cinema em família. Paineis com ripados em madeira nobre, racks suspensos com acabamento em laca, e nichos iluminados para decoração.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        quote: "Sonho realizado... móveis de alta qualidade e da forma como no desenho inicial. (Luciano Santos)",
        features: [
            "Painéis ripados sob medida",
            "Racks suspensos sem fios aparentes",
            "Prateleiras com LED integrado",
            "Integração de sala de jantar"
        ]
    },
    banheiros: {
        title: "Lavanderias & Banheiros",
        description: "Soluções inteligentes de organização para lavanderias compactas e gabinetes de banheiros que unem elegância e resistência total à umidade e ao vapor.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
        quote: "Fizemos uma cozinha e lavanderia integradas e ficou maravilhoso! (Andrea Oliveira)",
        features: [
            "MDF Ultra naval (resistente à água)",
            "Tulhas para roupas embutidas",
            "Armários aéreos com amortecedor",
            "Gavetões com organizadores"
        ]
    }
};

// Switch active tabs
function switchEnvironment(id) {
    const data = environments[id];
    if (!data) return;

    // Update image, title, description, and quotes
    document.getElementById("env-image").src = data.image;
    document.getElementById("env-title").innerText = data.title;
    document.getElementById("env-description").innerText = data.description;
    document.getElementById("env-quote").innerText = '"' + data.quote + '"';

    // Update features list
    const featuresContainer = document.getElementById("env-features");
    featuresContainer.innerHTML = "";
    data.features.forEach(feat => {
        featuresContainer.innerHTML += `
            <div class="flex items-center gap-2.5 text-xs text-gray-700">
                <span class="bg-[#fbf8f0] p-1 rounded-full border border-[#e8dba9]"><i class="fa-solid fa-check text-[#ad8c5e]"></i></span>
                <span>${feat}</span>
            </div>
        `;
    });

    // Toggle active style of button tabs
    document.querySelectorAll(".env-tab").forEach(tab => {
        tab.className = "env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider text-gray-500 hover:text-[#151515] hover:bg-white/50";
    });
    
    const activeTab = document.getElementById("tab-" + id);
    activeTab.className = "env-tab flex-1 min-w-[100px] text-center font-medium text-xs py-2.5 px-3 rounded-md transition-all uppercase tracking-wider bg-white text-[#151515] shadow-sm font-bold border-b-2 border-[#c5a880]";
}

// Live typing preview helper
function updateLiveMessage() {
    const name = document.getElementById("name-input").value;
    const region = document.getElementById("region-input").value;
    const env = document.getElementById("env-input").value;
    const desc = document.getElementById("desc-input").value;

    const bubble = document.getElementById("live-chat-bubble");

    if(!name && !region) {
        bubble.innerText = "Preencha o formulário ao lado para simular sua mensagem do WhatsApp em tempo real...";
        return;
    }

    const previewText = `Olá Simone Planejados! 🏡✨

Gostaria de solicitar um orçamento para móveis planejados. Aqui estão os dados do meu projeto:

👤 *Nome*: ${name || "(A preencher)"}
📍 *Região/Bairro*: ${region || "(A preencher)"}
📐 *Ambiente*: ${env}
📝 *O que preciso*: ${desc || "(Escreva uma breve descrição...)"}

_Mensagem enviada através da página de orçamentos da Simone Planejados._`;

    bubble.innerText = previewText;
}

// Form redirection logic
function sendToWhatsApp() {
    const name = document.getElementById("name-input").value;
    const region = document.getElementById("region-input").value;
    const env = document.getElementById("env-input").value;
    const desc = document.getElementById("desc-input").value;

    if (!name || !region) {
        alert("Por favor, preencha o seu nome e seu bairro/região antes de enviar!");
        return;
    }

    const text = `Olá Simone Planejados! 🏡✨

Gostaria de solicitar um orçamento para móveis planejados. Aqui estão os dados do meu projeto:

👤 *Nome*: ${name}
📍 *Região/Bairro*: ${region}
📐 *Ambiente*: ${env}
📝 *O que preciso*: ${desc || "A combinar com o especialista."}

_Mensagem enviada através da página de orçamentos da Simone Planejados._`;

    const encoded = encodeURIComponent(text);
    const url = "https://api.whatsapp.com/send?phone=551156126333&text=" + encoded;
    window.open(url, "_blank");
}

// Countdown Timer Logic
function startCountdown() {
    const todayElement = document.getElementById("today-date");
    const hoursElement = document.getElementById("timer-hours");
    const minutesElement = document.getElementById("timer-minutes");
    const secondsElement = document.getElementById("timer-seconds");

    // Format today's date (DD/MM/YYYY)
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    if (todayElement) todayElement.innerText = dd + "/" + mm + "/" + yyyy;

    function updateTimer() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(23, 59, 59, 999);
        
        const diff = midnight.getTime() - now.getTime();
        if (diff <= 0) {
            if (hoursElement) hoursElement.innerText = "00h";
            if (minutesElement) minutesElement.innerText = "00m";
            if (secondsElement) secondsElement.innerText = "00s";
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        if (hoursElement) hoursElement.innerText = String(hours).padStart(2, "0") + "h";
        if (minutesElement) minutesElement.innerText = String(minutes).padStart(2, "0") + "m";
        if (secondsElement) secondsElement.innerText = String(seconds).padStart(2, "0") + "s";
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize live message bubble on load
window.onload = function() {
    updateLiveMessage();
    startCountdown();
};
