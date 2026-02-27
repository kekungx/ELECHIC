
document.addEventListener('DOMContentLoaded', () => {
    const articleGrid = document.querySelector('.article-grid');

    const articles = [
        {
            title: 'The Rise of AI in Fashion Design',
            excerpt: 'Exploring how artificial intelligence is revolutionizing the way we create and experience fashion.',
            image: 'https://images.unsplash.com/photo-1617966225287-7a5c432b7a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Sustainable Tech: The Future of Textiles',
            excerpt: 'From lab-grown leather to recycled ocean plastics, a look at the innovative materials shaping the future.',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Cyber-Chic: The Influence of Gaming on Streetwear',
            excerpt: 'How the aesthetics of video games and virtual worlds are bleeding into mainstream fashion.',
            image: 'https://images.unsplash.com/photo-1585324388597-3a669c364b38?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');

        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="article-content">
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
            </div>
        `;

        articleGrid.appendChild(articleCard);
    });
});
