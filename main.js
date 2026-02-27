
document.addEventListener('DOMContentLoaded', () => {
    const articleGrid = document.querySelector('.article-grid');

    const articles = [
        {
            title: '패션 디자인에서의 AI 부상',
            excerpt: '인공지능이 패션을 창조하고 경험하는 방식을 어떻게 혁신하고 있는지 알아봅니다.',
            image: 'https://images.unsplash.com/photo-1617966225287-7a5c432b7a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: '지속 가능한 테크: 텍스타일의 미래',
            excerpt: '실험실에서 배양된 가죽부터 재활용 해양 플라스틱까지, 미래를 형성하는 혁신적인 소재들을 살펴봅니다.',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: '사이버 시크: 게임이 스트릿웨어에 미치는 영향',
            excerpt: '비디오 게임과 가상 세계의 미학이 어떻게 주류 패션에 스며들고 있는지 분석합니다.',
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
