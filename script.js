document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const bannerContainer = document.getElementById('bannerContainer');
    const banner = document.getElementById('banner');
    const profilesContainer = document.getElementById('profilesContainer');
    const profilesTitle = document.getElementById('profilesTitle');
    const profiles = [
        document.getElementById('profile1'),
        document.getElementById('profile2'),
        document.getElementById('profile3'),
        document.getElementById('profile4')
    ];
    
    // Cria overlay de carregamento
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-overlay-spinner"></div>
        <div class="loading-overlay-text">Carregando...</div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Simula o carregamento inicial
    setTimeout(() => {
        loading.style.display = 'none';
        bannerContainer.style.display = 'block';
        
        // Mostra o banner com animação
        setTimeout(() => {
            banner.classList.add('loaded');
            
            // Depois que o banner carrega, mostra os perfis
            setTimeout(() => {
                bannerContainer.style.display = 'none';
                profilesContainer.style.display = 'flex';
                
                // Animação do título
                setTimeout(() => {
                    profilesTitle.classList.add('show');
                    
                    // Animação dos perfis um por um
                    profiles.forEach((profile, index) => {
                        setTimeout(() => {
                            profile.classList.add('show');
                        }, index * 200);
                    });
                }, 300);
            }, 2000);
        }, 100);
    }, 1500);
    
    // Adiciona eventos de clique aos perfis
    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            // Seleciona o perfil clicado
            this.classList.add('selected');
            
            // Mostra o overlay de carregamento
            loadingOverlay.classList.add('active');
            
            // Simula o carregamento da página
            setTimeout(() => {
                // Redireciona para a página correspondente
                const page = this.getAttribute('data-page');
                window.location.href = page;
            }, 2000);
        });
    });
});